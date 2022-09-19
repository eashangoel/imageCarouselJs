let alreadyclicked = false;
function addElement(
  type,
  classname,
  addTo = null,
  srcEle = null,
  id = null,
  text = null
) {
  let ele = document.createElement(type);
  ele.classList.add(classname);
  if (srcEle !== null) {
    ele.src = srcEle;
  }
  if (id !== null) {
    ele.id = id;
  }
  if (text !== null) {
    ele.innerHTML = text;
  }
  if (addTo !== null) {
    addTo.appendChild(ele);
  }

  return ele;
}
let menudiv = addElement("div", "drop-down-menu");
document.body.appendChild(menudiv);
let menulist = addElement("ul", "list-in-drop-down", menudiv);
addElement("li", "list-element", menulist, undefined, undefined, "Hi");
addElement("li", "list-element", menulist, undefined, undefined, "Hi");
addElement("li", "list-element", menulist, undefined, undefined, "Hi");
addElement("li", "list-element", menulist, undefined, undefined, "Hi");
addElement("li", "list-element", menulist, undefined, undefined, "Hi");

function addDropDownMenu() {
  if (alreadyclicked) {
    menudiv.classList.remove("visible");
    alreadyclicked = false;
    console.log("thanks for clicking");
    return 0;
  }
  console.log("i havent been clicked yet");
  menudiv.classList.add("visible");
  alreadyclicked = true;
  return;
}

let clickme = document.getElementsByClassName("clickme");
clickme[0].addEventListener("click", () => {
  addDropDownMenu();
});
function restoreOriginalPositions(ctr) {
  delay(1090).then(() => {
    for (let i = 0; i < images.length; i++) {
      images[i].classList.remove(ctr);
      images[i].classList.add("noslide");
      console.log(images[i]);
    }
    if (ctr === "slide") {
      activeImage = (activeImage + 1) % imagesArray.length;
      initializeImageSlider(activeImage);
    }
    if (ctr === "sliderev") {
      activeImage = (activeImage - 1 + imagesArray.length) % imagesArray.length;
      initializeImageSlider(activeImage);
    }
  });
}

function initializeImageSlider(ele) {
  let centerImg = document.getElementsByClassName("center-img");
  let leftImg = document.getElementsByClassName("left-img");
  let rightImg = document.getElementsByClassName("right-img");
  let leftImgExtra = document.getElementsByClassName("left-img-extra");
  let rightImgExtra = document.getElementsByClassName("right-img-extra");
  centerImg[0].src = imagesArray[ele];
  for (let i = 0; i < radiosArray.length; i++) {
    radiosArray[i].src = "./radiobox-blank.png";
  }
  radiosArray[ele].src = "./radiobox-marked.png";
  leftImg[0].src =
    imagesArray[(ele - 1 + imagesArray.length) % imagesArray.length];
  rightImg[0].src = imagesArray[(ele + 1) % imagesArray.length];
  leftImgExtra[0].src =
    imagesArray[(ele - 2 + imagesArray.length) % imagesArray.length];
  rightImgExtra[0].src = imagesArray[(ele + 2) % imagesArray.length];
}
let radiosArray = [];
function addImageRadios() {
  let selectorbar = document.getElementsByClassName("selectorbar");
  for (let i = 0; i < imagesArray.length; i++) {
    radiosArray.push(
      addElement(
        "img",
        "selectorimg",
        selectorbar[0],
        "./radiobox-blank.png",
        i
      )
    );
  }
  //   startTimer();
}
function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
let imagesArray = [
  "./1.jpeg",
  "./2.jpeg",
  "./3.jpeg",
  "./4.jpeg",
  "./5.jpeg",
  "./5.jpeg",
  "./1.jpeg",
  "./2.jpeg",
  "./3.jpeg",
  "./4.jpeg",
];
leftButton = document.getElementsByClassName("leftButton");
leftButton[0].innerHTML = "<";
rightButton = document.getElementsByClassName("rightButton");
rightButton[0].innerHTML = ">";
let images = document.getElementsByClassName("imgs");
let activeImage = 2;
addImageRadios();
initializeImageSlider(2);

// function startTimer() {
//   clearInterval(t);
//   var t = setInterval(() => {
//     for (let i = 0; i < images.length; i++) {
//       images[i].classList.remove("noslide");
//       images[i].classList.add("slide");
//     }
//     restoreOriginalPositions("slide");
//   }, 4000);
// }
rightButton[0].addEventListener("click", () => {
  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove("noslide");
    images[i].classList.add("slide");
  }
  restoreOriginalPositions("slide");
  //   startTimer();
});

leftButton[0].addEventListener("click", () => {
  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove("noslide");
    images[i].classList.add("sliderev");
  }
  restoreOriginalPositions("sliderev");
  //   startTimer();
});

radiosArray.forEach((element) => {
  element.addEventListener("click", () => {
    initializeImageSlider(element.id);
    activeImage = element.id;
    });
});
