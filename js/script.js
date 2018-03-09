firstName.addEventListener("focus", clear, false);
lastName.addEventListener("focus", clear, false);
age.addEventListener("focus", clear, false);

var submit = document.getElementById("submit");
submit.addEventListener("click", message, false);
var container = document.getElementById("container");

function clear() {
        this.value = " ";
}

function message() {
        var firstName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;
        var age = document.getElementById("age").value;
        container.innerHTML= "Your first name is " +firstName + ", your last name is " + lastName + " and you're " + age + " years old.";
}
