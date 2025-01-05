"use server"

export async function getRepos() {
  const response = await fetch(
    "https://api.github.com/users/GabrielCostaLuiz/repos",
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

  const reposWithLanguages = await Promise.all(
    data.map(async (repo) => {
      const languagesResponse = await fetch(
        `https://api.github.com/repos/GabrielCostaLuiz/${repo.name}/languages`
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
