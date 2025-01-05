"use server"

import { apiGithubRepos } from "../../utils/constants"

export async function getRepos() {
  const response = await fetch(
    apiGithubRepos,
    {
      next: {
        revalidate: 1800,
      },
    }
  )
  const data = await response.json()

  data.sort((a, b) => {
    return new Date(b.created_at) - new Date(a.created_at)
  })

  const editUrlForLanguages = apiGithubRepos.replace("users", "repos").replace("/repos", "")

  const reposWithLanguages = await Promise.all(
    data.map(async (repo) => {
      const languagesResponse = await fetch(
        `${editUrlForLanguages}/${repo.name}/languages`
      )
      const languages = await languagesResponse.json()

      return {
        ...repo,
        languages,
      }
    }),
    {
      next: {
        revalidate: 1800,
      },
    }
  )

  return reposWithLanguages
}
