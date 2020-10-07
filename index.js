const container = document.querySelector(".container");
const imgContainer = document.querySelector(".img-container");

container.addEventListener("click", clickHandler);
imgContainer.addEventListener("scroll", scrollHandler);
let active = 1;

function clickHandler(e) {
  const id = e.target.id;
  const clientWidth = imgContainer.clientWidth;

  if (id === "left") {
    imgContainer.scrollBy(-clientWidth, 0);
    if (active > 1) active--;
  } else if (id === "right") {
    imgContainer.scrollBy(clientWidth, 0);
    if (active < 6) active++;
  } else {
    const numId = Number(id.split("-")[1]);
    if (numId >= 1 && numId <= 6) {
      active = numId;
      imgContainer.scroll(clientWidth * (active - 1), 0);
    }
  }
}

function scrollHandler() {
  const activeElement = document.querySelector(`.active-circle`);
  if (activeElement) activeElement.classList.remove("active-circle");

  const activeImg = document.querySelector(".active-img");
  if (activeImg) activeImg.classList.remove("active-img");

  active = Math.ceil(imgContainer.scrollLeft / imgContainer.clientWidth);
  if (active > 6) active = 6;

  const newActiveElem = document.getElementById(`circle-${active}`);
  if (newActiveElem) newActiveElem.classList.add("active-circle");

  const newActiveImg = document.getElementById(`img-${active}`);
  if (newActiveImg) newActiveImg.classList.add("active-img");
}

setInterval(() => {
  if(active < 6) {
      imgContainer.scrollBy(imgContainer.clientWidth, 0);
  }else {
      imgContainer.scroll(0, 0);
  }
  scrollHandler();
}, 3000);
