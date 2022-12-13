const btn = document.querySelector(".btn");
const body = document.querySelector("body");
const formEl = document.querySelector("form");
const label = document.querySelector(".label");
const label2 = document.querySelector(".label2");
const label3 = document.querySelector(".label3");
const img = document.querySelector(".result-img");
const res_card = document.querySelector(".result-card");
const prim_card = document.querySelector(".prim-card");

btn.addEventListener("click", () => {
  res_card.classList.toggle("hidden");
  prim_card.classList.toggle("hidden");
});

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const ism = formEl["ism"].value;
  const height = formEl["height"].value / 100;
  const radio = formEl["radio"].value;
  const ves = formEl["ves"].value;
  const bmi = ves / height ** 2;
  label.textContent = ism;
  label2.textContent = radio;

  if (bmi <= 18.4) {
    label3.textContent = `${ism} Siz kam vazn siz😟`;
    label3.style.background = "pink";
    img.src = "../img/under.jpg";
  } else if (bmi <= 24.9) {
    label3.textContent = `${ism} OOO bravo siz alo darajadasiz👍👍👍`;
    label3.style.background = "green";
    img.src = "../img/normal.png";
  } else if (bmi >= 25 && bmi <= 39.9) {
    label3.textContent = `${ism} Afsus sizda ortiqcha vazn mavjud😜`;
    label3.style.background = "orange";
    img.src = "../img/owerweight.jpg";
  } else if (bmi >= 40) {
    label3.textContent = `${ism} Siz vapwe kamnavosiz ozishga harakat qiling😊`;
    label3.style.background = "orange";
    img.src = "../img/pla.jpg";
  }
});
