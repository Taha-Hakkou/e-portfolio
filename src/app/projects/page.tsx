"use client";

import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function ProjectsPage() {
  const projects = [
    {
      title: "E-portfolio",
      description: "portfolio website made with Next.js, ...",
      technologies: ["React", "Next.js", "Node.js", "nodemailer", "..."],
      link: "https://github.com/Taha-Hakkou/e-portfolio"
    },
    {
      title: "Job Board API",
      description: "Tech jobs Board Api using express and mongodb",
      technologies: ["JavaScript", "Express", "MongoDB", "..."],
      link: "https://github.com/Taha-Hakkou/job_board"
    },
    {
      title: "Files Manager",
      description: "System files manager developped using Express, and jobs Api...",
      technologies: ["JavaScript", "Express", "bull", "MongoDB", "..."],
      link: "https://github.com/Taha-Hakkou/alx-files_manager"
    },
    {
      title: "Blogger",
      description: "post blogging web app made with flask and mongodb",
      technologies: ["Python", "Flask", "MongoDB", "JWT", "..."],
      link: "https://github.com/Taha-Hakkou/blogger"
    },
    {
      title: "AirBnb Clone",
      description: "web app cloning AirBnB search service",
      technologies: ["Python", "Flask", "..."],
      link: "https://github.com/Taha-Hakkou/AirBnB_clone_v4"
    },
    {
      title: "Monty",
      description: "Monty programming language interpreter project",
      technologies: ["C"],
      link: "https://github.com/Taha-Hakkou/monty"
    },
    {
      title: "Simple Shell",
      description: "bash sell command-line clone",
      technologies: ["C"],
      link: "https://github.com/Taha-Hakkou/simple_shell"
    },
    {
      title: "Printf",
      description: "C printf function clone with formatting...",
      technologies: ["C"],
      link: "https://github.com/Taha-Hakkou/printf"
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

