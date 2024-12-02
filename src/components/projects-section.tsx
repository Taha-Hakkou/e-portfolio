import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function ProjectsSection() {
  const projects = [
    {
      title: "Project 1",
      description: "A brief description of Project 1 and its key features.",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      link: "#"
    },
    {
      title: "Project 2",
      description: "An overview of Project 2 highlighting its main functionalities.",
      technologies: ["TypeScript", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      title: "Project 3",
      description: "Explaining the purpose and achievements of Project 3.",
      technologies: ["Vue.js", "Express", "PostgreSQL"],
      link: "#"
    }
  ]

  return (
    <section className="py-16 px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <a href={project.link}>View Project</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

