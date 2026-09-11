export function hoverChangeExperience(
  nameCard,
  changeDescription,
  titleExperience,
  companyExperience,
  dateExperience,
  techStack = []
) {
  const varChangeDescription = document.querySelector(".changeExperience");
  const varTitleExperience = document.querySelector(".titleExperience");
  const varCompanyExperience = document.querySelector(".companyExperience");
  const varDateExperience = document.querySelector(".dateExperience");
  const varTechList = document.querySelector(".experienceTechList");

  const target = document.querySelector(nameCard);
  if (!target) return;

  target.addEventListener("click", () => {
    if (varChangeDescription) varChangeDescription.innerHTML = changeDescription;
    if (varCompanyExperience) varCompanyExperience.innerHTML = companyExperience;
    if (varTitleExperience) varTitleExperience.innerHTML = titleExperience;
    if (varDateExperience) varDateExperience.innerHTML = dateExperience;
    
    if (varTechList && Array.isArray(techStack)) {
      varTechList.innerHTML = techStack
        .map(tech => `<span class="badge-pill">${tech}</span>`)
        .join("");
    }
  });
}

export function initExperienceTabs() {
  const container = document.getElementById("experience-company");
  if (!container) return;

  const btns = container.getElementsByClassName("company");

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      const current = container.getElementsByClassName("activeExperience");
      if (current.length > 0) {
        current[0].classList.remove("activeExperience");
      }
      this.classList.add("activeExperience");
    });
  }
}
