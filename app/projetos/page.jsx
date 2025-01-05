import CardProjects from "../../components/cardProjects"
import { getRepos } from "../actions/getRepositories"

export default async function Projetos() {
  const repositorios = await getRepos()

  return (
    <section className="mt-32 ">
      <h2>Projetos</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {repositorios.map((repositorio) => {
          return <CardProjects key={repositorio.id} repositorio={repositorio} />
        })}
      </div>
    </section>
  )
}
