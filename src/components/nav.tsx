import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function Nav() {
  const { theme, setTheme } = useTheme()

  return (
    <nav className="bg-background border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-primary font-navine">
                <span className="animate-glow">&lt;</span>YourName<span className="animate-glow">/&gt;</span>
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild className="text-foreground hover:text-black dark:hover:text-black transition-colors">
              <Link href="/">Home</Link>
            </Button>
            <Button variant="ghost" asChild className="text-foreground hover:text-black dark:hover:text-black transition-colors">
              <Link href="/projects">Projects</Link>
            </Button>
            <Button variant="ghost" asChild className="text-foreground hover:text-black dark:hover:text-black transition-colors">
              <Link href="/contact">Contact</Link>
            </Button>
	  </div>
	  <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle theme"
              className="text-foreground hover:text-primary"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

