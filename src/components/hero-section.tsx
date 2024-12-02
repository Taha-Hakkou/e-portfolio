import { Button } from "@/components/ui/button"
import { Github, Linkedin } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="py-24 px-6 lg:px-8 flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
        Hi, I&apos;m Taha Hakkou
      </h1>
      <p className="text-xl text-muted-foreground max-w-2xl mb-8">
        A passionate web developer creating beautiful and functional websites. Specializing in React, Next.js, and modern web technologies.
      </p>
      <div className="flex gap-4">
        <Button>View Projects</Button>
        <Button variant="outline">
          <Github className="mr-2 h-4 w-4" />
          GitHub
        </Button>
        <Button variant="outline">
          <Linkedin className="mr-2 h-4 w-4" />
          LinkedIn
        </Button>
      </div>
    </section>
  )
}

