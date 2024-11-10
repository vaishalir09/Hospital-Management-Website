let doctors = document.querySelectorAll(".team");
let card = document.querySelectorAll(".serviceCard");

let count = 0;

doctors.forEach(function(card, index){
    card.style.left=`${index*100}%`
})

function myFun(){
    doctors.forEach(function(curValue){
        curValue.style.transform=`translateX(-${count * 100}%)`
    })
}

setInterval(function(){
    count++;
    if(count == doctors.length){
        count=0;
    }
    myFun()
}, 3000)

// Selecting form inputs
const nameInput = document.getElementById("name");
const numberInput = document.getElementById("number");
const dateInput = document.getElementById("date");
const timeInput = document.getElementById("time");

// Selecting buttons
const bookBtn = document.getElementById("bookBtn");
const cancelBtn = document.getElementById("cancelBtn");

// Function to handle appointment booking
function bookAppointment() {
    const name = nameInput.value.trim();
    const number = numberInput.value.trim();
    const date = dateInput.value;
    const time = timeInput.value;

    if (name && number && date && time) {
        alert(`Appointment booked for ${name} on ${date} at ${time}.`);
        clearForm();
    } else {
        alert("Please fill in all the details to book an appointment.");
    }
}

// Function to handle appointment cancellation
function cancelAppointment() {
    const confirmCancel = confirm("Are you sure you want to cancel the appointment?");
    if (confirmCancel) {
        clearForm();
        alert("Appointment canceled.");
    }
}

// Function to clear the form inputs
function clearForm() {
    nameInput.value = "";
    numberInput.value = "";
    dateInput.value = "";
    timeInput.value = "";
}

// Event listeners
bookBtn.addEventListener("click", bookAppointment);
cancelBtn.addEventListener("click", cancelAppointment);





// service Card

card.forEach(function(curCard){
    curCard.addEventListener("click", function(){
        console.log(curCard);
        let div = document.createElement("div");
        div.classList.add("detailCard");
        div.innerHTML=`
        <i id="icon" class="fa-solid fa-xmark"></i>
        <img src=${curCard.firstElementChild.src} alt="">
        <h2>${curCard.lastElementChild.innerHTML}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, explicabo laboriosam temporibus delectus obcaecati repudiandae at quo, nihil animi fuga distinctio perspiciatis</p>   
        `
        document.querySelector("body").appendChild(div);
        document.querySelector("#icon").addEventListener("click", function(){
            div.remove()
        })
    })
})





