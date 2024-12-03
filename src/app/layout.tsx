// import { Navine } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import './globals.css'

// const navine = Navine({ subsets: ['latin'] })

export const metadata = {
  title: 'Taha\'s Portfolio',
  description: 'A showcase of my projects and skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body> {/* className={navine.className} */}
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

