"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { email } from "../utils/constants"

export default function NavBar() {
  const pathName = usePathname()

  return (
    <div className="flex justify-between items-center">
      <Link href="/" className="inline-block transition-all hover:scale-110">
        Home
      </Link>

      <nav className="list-none flex justify-between items-center gap-20 max-sm:gap-5">
        <li>
          <Link
            href="/projetos"
            className={`${
              pathName === "/projetos" ? "text-primary" : ""
            } inline-block transition-all hover:scale-110`}
          >
            Projetos
          </Link>
        </li>
        <li>
          <Link
            href={`mailto:${email}?&subject=${encodeURIComponent("Contato via Formulário")}`}
            className="inline-block buttonPurple transition-all hover:scale-110"
          >
            Contato
          </Link>
        </li>
      </nav>
    </div>
  )
}
