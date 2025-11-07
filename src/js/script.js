// TODO

const paragraphe = document.querySelector("#a-mettre-en-rouge");
paragraphe.style.color = "red";


const bouton = document.querySelector("#en-rouge-suite-a-click");
bouton.addEventListener("click", () => {
  bouton.style.color = "red";
});


const tousLesH2 = document.querySelectorAll("h2");

tousLesH2.forEach((elem) => {
  elem.addEventListener("click", (evt) => {
    evt.target.style.color = "red";
  });
});
