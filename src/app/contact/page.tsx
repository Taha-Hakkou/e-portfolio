"use client";

import { useState, FormEvent } from 'react';

import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name || !email || !message) {
      setError("All fields are required.");
      return;
    }

    setIsLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        throw new Error("Something went wrong.");
      }

      setSuccess("Your message has been sent!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) { // eslint-disable-line
      setError("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background matrix-bg flex flex-col">
      <Nav />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-8 text-primary font-navine">
          <span className="animate-glow">&lt;</span>Contact Me<span className="animate-glow">/&gt;</span>
        </h1>
        <form method="POST" className="w-full max-w-md space-y-4 cyberpunk-border p-6" onSubmit={handleSubmit} >
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1 text-foreground">Name</label>
            <Input id="name" placeholder="Your Name" className="bg-background text-foreground"
	    	value={name}
        	onChange={(e) => setName(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1 text-foreground">Email</label>
            <Input id="email" type="email" placeholder="your.email@example.com" className="bg-background text-foreground"
	    	value={email}
        	onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1 text-foreground">Message</label>
            <Textarea id="message" placeholder="Your message here..." rows={5} className="bg-background text-foreground"
	    	value={message}
        	onChange={(e) => setMessage(e.target.value)}/>
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
	    {isLoading ? "Sending..." : "Send Message"}
	  </Button>
	  {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "green" }}>{success}</p>}
        </form>
      </main>
      <Footer />
    </div>
  )
}

