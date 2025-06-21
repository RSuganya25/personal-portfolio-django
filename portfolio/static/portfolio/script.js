document.getElementById("addProjectForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const title = this.querySelector("input").value;
  const description = this.querySelector("textarea").value;

  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `<h3>${title}</h3><p>${description}</p>`;

  document.getElementById("projects-container").appendChild(card);

  this.reset();
});
