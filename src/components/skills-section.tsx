import { Badge } from "@/components/ui/badge"

export function SkillsSection() {
  const skills = [
    "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js",
    "Node.js", "Express", "MongoDB", "PostgreSQL", "Git", "AWS"
  ]

  return (
    <section className="py-16 px-6 lg:px-8 bg-muted">
      <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <Badge key={index} variant="secondary" className="text-lg py-2 px-4">
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  )
}

