import Link from "next/link"
import { SiGmail } from "react-icons/si"
import { FaLinkedinIn } from "react-icons/fa6"
import { TbBrandGithubFilled } from "react-icons/tb"
import { email, github, linkedin } from "../utils/constants"

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="flex flex-col items-center justify-center gap-10 mt-32">
      <div className="flex gap-10">
        <Link href={`mailto:${email}`} prefetch={false} className="transition-all hover:scale-105">
          <figure className="flex flex-col items-center justify-center">
            <div className="p-2 bg-primary rounded-full">
              <SiGmail size={20} className="iconFooter" />
            </div>
            <figcaption className="uppercase mt-2 text-sm">Gmail</figcaption>
          </figure>
        </Link>

        <Link href={linkedin} prefetch={false} className="transition-all hover:scale-105">
          <figure className="flex flex-col items-center justify-center">
            <div className="p-2 bg-primary rounded-full">
              <FaLinkedinIn size={20} className="iconFooter" />
            </div>
            <figcaption className="uppercase mt-2 text-sm">Linkedin</figcaption>
          </figure>
        </Link>

        <Link href={github} prefetch={false} className="transition-all hover:scale-105">
          <figure className="flex flex-col items-center justify-center">
            <div className="p-2 bg-primary rounded-full">
              <TbBrandGithubFilled size={20} className="iconFooter" />
            </div>
            <figcaption className="uppercase mt-2 text-sm">Github</figcaption>
          </figure>
        </Link>
      </div>
      <div className="flex gap-10">
        <Link
          href="/projetos"
          className="inline-block transition-all hover:scale-105"
        >
          Projetos
        </Link>
        <Link
          href="/contato"
          className="inline-block transition-all hover:scale-105"
        >
          Contato
        </Link>
      </div>
      <p>© {year} - Todos os direitos reservados</p>
    </footer>
  )
}
