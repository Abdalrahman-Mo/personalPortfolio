/////////////////////////////////////////////////// About ///////////////////////////////////////////////////
const aboutSection = document.querySelector(".about");

window.addEventListener("scroll", function (e) {
  e.preventDefault();
  const aboutSectionTop = aboutSection.getBoundingClientRect().top;

  if (aboutSectionTop < 1000) {
    aboutSection.style.opacity = 1;
  }
});
/////////////////////////////////////////////////// Skills ///////////////////////////////////////////////////
const btnSoftSkills = document.querySelector(".soft--skill--btn");
const btnCodingSkills = document.querySelector(".coding--skill--btn");
const scrollBarSkills = document.querySelector(".scroll--bar");
btnSoftSkills.addEventListener("click", () => {
  btnSoftSkills.classList.add("active");
  btnCodingSkills.classList.remove("active");
  scrollBarSkills.style.marginLeft = "-100%";
});
btnCodingSkills.addEventListener("click", () => {
  btnSoftSkills.classList.remove("active");
  btnCodingSkills.classList.add("active");
  scrollBarSkills.style.marginLeft = "0px";
});

/////////////////////////////////////////////////// Life Tree Banks ///////////////////////////////////////////////////
const lifeTreeBanks = document.querySelector(".life--tree--banks");

window.addEventListener("scroll", function (e) {
  e.preventDefault();
  const banksSectionTop = lifeTreeBanks.getBoundingClientRect().top;

  if (banksSectionTop < 1000) {
    lifeTreeBanks.style.opacity = 1;
  }
});
/////////////////////////////////////////////////// e-commerce ///////////////////////////////////////////////////
const eCommerce = document.querySelector(".e-commerce");

window.addEventListener("scroll", function (e) {
  e.preventDefault();
  const eCommerceSectionTop = eCommerce.getBoundingClientRect().top;

  if (eCommerceSectionTop < 1000) {
    eCommerce.style.opacity = 1;
  }
});
