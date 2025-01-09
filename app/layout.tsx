import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/ui/components/toaster'
import { Layout } from '@/ui/types'
import { ThemeProvider } from '@/ui/components/theme-provider'

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-inter-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Vexis Social Auth Demo',
}

const RootLayout: Layout = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jetbrainsMono.variable} antialiased`}>
        <div className="flex h-screen overflow-hidden">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </div>
        <Toaster />
      </body>
    </html>
  )
}

export default RootLayout
