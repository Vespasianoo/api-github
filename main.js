const ul = document.querySelector("ul")

async function getRepos() {
  const response = await fetch("https://api.github.com/users/vespasianoo/repos")
  const repos = await response.json()

  for (let repo of repos) {
    const li = document.createElement("li")
    const h2 = document.createElement("h2")
    const a = document.createElement("a")
    h2.innerHTML = repo.name

    a.setAttribute("href", repo.html_url)
    a.setAttribute("target", "_blank")
    a.innerHTML = "Acesse o repositório"

    li.appendChild(h2)
    li.appendChild(a)

    ul.appendChild(li)
  }
}

getRepos()

//SEARCH

const input = document.querySelector("input")
input.addEventListener("input", searchRepo)

function searchRepo() {
  const repos = document.querySelectorAll(".cards li")

  for (const repo of repos) {
    const title = repo.querySelector("h2").textContent.toLowerCase()
    const inputValue = input.value.toLowerCase()

    repo.style.display = title.includes(inputValue) ? "block" : "none"
  }
}
