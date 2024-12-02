"use client";

import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Secure E-commerce Platform",
      description: "A full-stack e-commerce solution with advanced security features and encryption.",
      technologies: ["React", "Next.js", "Node.js", "MongoDB", "JWT"],
      link: "#"
    },
    {
      title: "Cybersecurity Dashboard",
      description: "Real-time monitoring and visualization of network security threats.",
      technologies: ["Vue.js", "D3.js", "Express", "Socket.io", "Elasticsearch"],
      link: "#"
    },
    {
      title: "Ethical Hacking Toolkit",
      description: "A collection of tools for penetration testing and vulnerability assessment.",
      technologies: ["Python", "Rust", "Docker", "Metasploit", "Nmap"],
      link: "#"
    }
  ]

  return (
    <div className="min-h-screen bg-background matrix-bg flex flex-col">
      <Nav />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold mb-8 text-primary font-navine text-center">
          <span className="animate-glow">&lt;</span>My Projects<span className="animate-glow">/&gt;</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="cyberpunk-border">
              <CardHeader>
                <CardTitle className="text-primary">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-secondary text-secondary-foreground">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <a href={project.link} className="relative z-10">View Project</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

