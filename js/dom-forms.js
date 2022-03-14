function readText(form) {
    let formText = form.inputBox.value;
    alert(formText);
}

function writeText(form) {
    form.inputBox.value = "Have a nice day!";
}

function testButton(form) {
    let selected = form.radbtn.value;
    alert(`You selected ${selected}`);
}

let subBtn = document.getElementById("btn");

 subBtn.addEventListener('click',()=> {
     let checkbox = document.getElementById("accept").value;
     alert(`${checkbox} Accept`);
 })

function Toggle(form) {
    let checkboxes = document.getElementsByName.checked;
    
}