import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useState } from "react"

interface TimelineItem {
  date: string
  title: string
  description: string
  tags: string[]
}

const timelineItems: TimelineItem[] = [
  {
    date: "2023 - Present",
    title: "Junior Web Developer",
    description: "Working on full-stack web applications using React and Node.js.",
    tags: ["React", "Node.js", "TypeScript"]
  },
  {
    date: "2022 - 2023",
    title: "Computer Science Degree",
    description: "Completed my degree with a focus on web technologies and cybersecurity.",
    tags: ["Computer Science", "Web Technologies", "Cybersecurity"]
  },
  {
    date: "2021 - 2022",
    title: "Freelance Web Developer",
    description: "Built websites for small businesses using WordPress and custom PHP.",
    tags: ["WordPress", "PHP", "MySQL"]
  },
  {
    date: "2020 - 2021",
    title: "Web Development Bootcamp",
    description: "Intensive 6-month program covering front-end and back-end technologies.",
    tags: ["HTML/CSS", "JavaScript", "Python"]
  }
]

export function Timeline() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="relative">
      {/* Center line */}
      <motion.div 
        className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-primary/30"
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      ></motion.div>
      
      <div className="space-y-6"> {/* Reduced space between items */}
        {timelineItems.map((item, index) => (
          <motion.div 
            key={index} 
            className={cn(
              "flex items-center",
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            )}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Content */}
            <div className={cn(
              "w-5/12",
              index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
            )}>
              <motion.div 
                className="cyberpunk-border bg-secondary/30 backdrop-blur-sm p-6 shadow-lg"
                animate={{
                  scale: hoveredIndex === index ? 1.05 : 1,
                  backgroundColor: hoveredIndex === index ? "rgba(var(--primary), 0.2)" : "rgba(var(--secondary), 0.3)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <div className="text-primary font-bold mb-2">{item.date}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground mb-2">{item.description}</p>
                <div className={cn(
                  "flex flex-wrap gap-2",
                  index % 2 === 0 ? "justify-end" : "justify-start"
                )}>
                  {item.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Circle */}
            <div className="w-2/12 flex justify-center">
              <motion.div 
                className="w-4 h-4 bg-primary rounded-full cursor-pointer"
                whileHover={{
                  scale: 1.5,
		}}
		animate={{ 
                  backgroundColor: hoveredIndex === index ? "#ff00ff" : "transparent",
		}}
                transition={{ type: "spring", stiffness: 300 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              ></motion.div>
	    {/* animate property was previously: whileHover */}
            </div>

            {/* Spacer for the other side */}
            <div className="w-5/12"></div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
