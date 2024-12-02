"use client";

import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { Button } from "@/components/ui/button"
import { Github, Linkedin } from 'lucide-react'
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express",
    "Python", "Django", "SQL", "MongoDB", "Docker", "AWS",
    "Cybersecurity", "Ethical Hacking", "Network Security", "Cryptography"
  ]

  return (
    <div className="min-h-screen bg-background matrix-bg flex flex-col">
      <Nav />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 font-navine text-primary">
            <span className="animate-glow">&lt;</span>Welcome to My Hacker Portfolio<span className="animate-glow">/&gt;</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 font-navine">
            I&apos;m a cybersecurity enthusiast and web developer, specializing in secure applications and ethical hacking.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild className="cyberpunk-border">
              <a href="/projects" className="relative z-10">Explore Projects</a>
            </Button>
            <Button variant="outline" className="cyberpunk-border">
              <Github className="mr-2 h-4 w-4" />
              <span className="relative z-10">GitHub</span>
            </Button>
            <Button variant="outline" className="cyberpunk-border">
              <Linkedin className="mr-2 h-4 w-4" />
              <span className="relative z-10">LinkedIn</span>
            </Button>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-primary font-navine text-center">
            <span className="animate-glow">&lt;</span>Skills & Technologies<span className="animate-glow">/&gt;</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-sm py-1 px-2 bg-secondary text-secondary-foreground font-navine">
                {skill}
              </Badge>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

