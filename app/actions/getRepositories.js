"use server"

export async function getRepos() {
  const response = await fetch(
    // apiGithub,
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
  return data
}
