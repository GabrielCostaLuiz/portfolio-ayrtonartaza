import { Inter } from 'next/font/google'
import "./globals.css"
import { name } from "../utils/constants"
import Footer from "../components/footer"
import NavBar from "../components/navBar"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: `Portfólio de Desenvolvedor - ${name}`,
    template: "%s | Portfólio de Desenvolvedor",
  },
  description:
    "Confira meu portfólio de desenvolvedor, onde compartilho meus projetos, habilidades e experiências com as mais recentes tecnologias.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.variable} antialiased container m-auto py-10 max-sm:px-5 `}
      >
        <header>
          <NavBar />
        </header>

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  )
}
