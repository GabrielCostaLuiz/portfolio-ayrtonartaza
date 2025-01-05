import { aboutMe, apiGithub, heroResume, name, email } from "../utils/constants"
import Image from "next/image"
import Link from "next/link"
import hero from "../public/images/hero/hero.png"
import { IoIosArrowRoundDown } from "react-icons/io"
import { getRepos } from "./actions/getRepositories"
import CardProjects from "../components/cardProjects"

export default async function Home() {
  const repositorios = await getRepos()

  const errorMessage = repositorios.error

  const skills = [
    "JavaScript",
    "React",
    "TypeScript",
    "Styled Components",
    "GIT",
  ]

  return (
    <div className="space-y-28 mt-52">
      <section className="space-y-5 min-h-[60vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-8">
            <h1 className="flex flex-col font-bold">
              Desenvolvedor
              <span className="text-6xl text-primary capitalize font-bold mt-5">
                {name}
              </span>
            </h1>

            <p>{heroResume}</p>

            <div>
              <Link
                href={`mailto:${email}?&subject=${encodeURIComponent(
                  "Contato via Formulário"
                )}`}
                className="buttonPurple inline-block transition-all hover:scale-105"
              >
                Entre em Contato
              </Link>
            </div>
          </div>

          <div>
            <Image
              src={hero}
              alt="Ilustração de uma pessoa com notebook trabalhando em um projeto de desenvolvimento web"
              title="Pessoa com notebook desenvolvendo um projeto"
              className="object-cover m-auto"
            />
          </div>
        </div>

        <a
          href="#about"
          className="block hover:scale-110 transition-all animate-bounce"
        >
          <IoIosArrowRoundDown size={50} className="m-auto text-primary " />
        </a>
      </section>

      <section id="about" className="scroll-m-8">
        <h2>Sobre Mim</h2>

        <p className="border-l-4 pl-3 border-l-primary">{aboutMe}</p>
      </section>

      <section>
        <h2>Projetos</h2>

        {errorMessage ? (
          <p className="text-red-500">{errorMessage}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {repositorios.slice(0, 3).map((repositorio) => {
              return (
                <CardProjects key={repositorio.id} repositorio={repositorio} />
              )
            })}
          </div>
        )}

        <div className="mt-14  ">
          <Link
            href="/projetos"
            className="buttonPurple block w-2/6 font-bold !uppercase text-center m-auto transition-all hover:scale-105"
          >
            Ver Todos os Projetos
          </Link>
        </div>
      </section>

      <section>
        <h2>Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {skills.map((skill) => (
            <div key={skill}>
              <figure className="w-fit">
                <Image
                  src={`/images/skills/${skill
                    .toLowerCase()
                    .replace(/[-.\s]/g, "")}.svg`}
                  alt={`Imagem de ${skill}`}
                  title={`Imagem de ${skill}`}
                  width={150}
                  height={150}
                />
                <figcaption className="text-center uppercase tracking-widest mt-4">
                  {skill}
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
