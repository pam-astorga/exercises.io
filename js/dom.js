let element = document.getElementById("reg-div");
element.style.display = "none";
let btnRegister = document.getElementById("btn-register");
btnRegister.addEventListener("click", () => {
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
  element.classList.toggle("boxform");
});

let para = document.getElementById("para");
let hide = document.getElementById("hide");
let show = document.getElementById("show");
hide.addEventListener("click", () => {
  para.style.visibility = "hidden";
});
show.addEventListener("click", () => {
  para.style.visibility = "visible";
});

// uList.appendChild(createMenuItem('Home'));
// uList.appendChild(createMenuItem('About Us'));
// uList.appendChild(createMenuItem('Contact Us'));

let uList = document.querySelector(".menu");
let menu = ["Home", "About Us", "Contact Us"];
for (let i = 0; i <= menu.length - 1; i++) {
  uList.appendChild(createMenuItem(menu[i]));
}
function createMenuItem(item) {
  let li = document.createElement("li");
  li.textContent = item;
  return li;
}

let btnFruits = document.getElementById("btnFruits");
let fruitList = document.querySelector("#fruits");
btnFruits.addEventListener("click", addFruits);

function addFruits() {
  let prutas = document.getElementById("prutas").value;
  let quantity = document.getElementById("quantity").value;
  let list = document.createElement("li");
  let textNode = document.createTextNode(prutas + " " + quantity + " pcs");
  list.appendChild(textNode);
  fruitList.appendChild(list);
}

let getSelected = document.querySelector("#btnJS");
let displaySelected = document.querySelector("#btnJS2");
let mySelected = document.querySelector("#mySelect");

getSelected.onclick = () => {
  alert(mySelected.selectedIndex);
};

displaySelected.addEventListener("click", () => {
  let i = mySelected.selectedIndex
  let item = mySelected[i].textContent
  alert(`Index: ${i} is ${item}`);
});

let submit1 = document.querySelector("#submit1");
let progList = document.querySelector("#prog");
let submit2 = document.querySelector("#submit2");
let submit3 = document.getElementById("submit3");
let submit4 = document.getElementById("submit4");

submit4.addEventListener('click', () => {
  let progOption4 = document.getElementById("prog");
  let mapProg4 = [...progOption4.options].filter(option => option.selected).map(option => option.value)
  alert(mapProg4);
})

submit3.addEventListener('click', () => {
  let progOption = document.getElementById("prog");
  let mapProg2 = [...progOption.selectedOptions].map(option => option.value)
  alert(mapProg2);
})

submit2.addEventListener('click', () => {
  let progList2 = document.querySelectorAll("#prog :checked");
  let mapProg = [...progList2].map(option => option.value);
  alert(`You selected ${mapProg}`);
})

submit1.addEventListener('click', () => {
  let arr1 = [];
  for(let item of progList.options) {
    if(item.selected) {
      arr1.push(item.value);
    } 
  } alert(`You selected ${arr1}`);
})

 