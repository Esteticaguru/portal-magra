import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portal Magra - Transforme sua vida nos EUA',
  description: 'Mentoria para brasileiras conquistarem bem-estar morando nos Estados Unidos',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
