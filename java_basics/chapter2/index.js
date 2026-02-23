window.addEventListener('load',() => {
  const button = document.querySelector("button")
  const repositorySpace = document.querySelector("#repository_list")
  button.addEventListener('click',() => {
    const githubName = document.querySelector("#github_name").value
  fetch(`https://api.github.com/users/${githubName}/repos`)
  .then((response) => response.json())
  .then((data) => {
    for(repositoryInfo of data){
        const li = document.createElement("li")
        li.innerHTML = repositoryInfo["name"]
        repositorySpace.appendChild(li)
    }
  });
  })
})