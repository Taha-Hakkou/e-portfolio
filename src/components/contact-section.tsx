import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"

import { FormEvent, useState } from "react";

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    console.log('before 1');
    event.preventDefault();

    if (!name || !email || !message) {
      setError("All fields are required.");
      return;
    }

    setIsLoading(true);
    setError("");
    setSuccess("");

    try {
      console.log('before');
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });
      console.log('after');

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
    <section className="py-16 px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
      <form method="POST" className="max-w-md mx-auto space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
	  </div>
        {/*<Input placeholder="Your Name"
		value={name}
            	onChange={(e) => setName(e.target.value)} />
        <Input type="email"
		placeholder="Your Email"
		value={email}
		onChange={(e) => setEmail(e.target.value)} />
        <Textarea placeholder="Your Message"
		value={message}
		onChange={(e) => setMessage(e.target.value)} />*/}i
        <Button type="submit" className="w-full" disabled={isLoading}>
	  {isLoading ? "Sending..." : "Send Message"}
	</Button>
	{error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
      </form>
    </section>
  )
}

