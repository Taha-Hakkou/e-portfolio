"use client";

import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { TypingAnimation } from '@/components/typing-animation';
import { Timeline } from '@/components/timeline';

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
        {/*<section className="text-center mb-16">
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
        </section>*/}
	<section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 font-navine text-primary">
                  <TypingAnimation text="Hi... I'm Taha" />
                  <br/>
                  <span className="text-foreground">A junior developer</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 font-navine">
                  Passionate about creating secure and innovative web applications.
                </p>
                <div className="flex gap-4">
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
              </div>
              <div className="relative">
                <div className="w-full h-80 bg-secondary/20 rounded-lg overflow-hidden">
                  <pre className="p-4 text-sm font-mono text-primary animate-pulse">
                    <code>{`
function developAwesomeCode() {
  const skills = ['JavaScript', 'React', 'Node.js'];
  const passion = 100;
  let projects = [];

  while (passion > 0) {
    const newProject = createProject(skills);
    projects.push(newProject);
    learnNewSkills(skills);
    passion++;
  }

  return projects;
}

// Life as a developer
developAwesomeCode();
                    `}</code>
                  </pre>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

	<section className="py-16 px-4 sm:px-6 lg:px-8"> {/* bg-secondary/10">*/}
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-primary font-navine text-center">
              <span className="animate-glow">&lt;</span>My Journey<span className="animate-glow">/&gt;</span>
            </h2>
            <Timeline />
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

