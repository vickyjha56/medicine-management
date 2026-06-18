// Welcome message according to time

const welcomeHeading = document.querySelector(".welcome h1");

const hour = new Date().getHours();

if(hour < 12){
    welcomeHeading.innerHTML = "Good Morning, kanhaiya 👋";
}
else if(hour < 18){
    welcomeHeading.innerHTML = "Good Afternoon, kanhaiya ☀️";
}
else{
    welcomeHeading.innerHTML = "Good Evening, kanhaiya🌙";
}


// Add new visit button

const addVisitBtn = document.querySelector(".add-visit-btn");

addVisitBtn.addEventListener("click", () => {

    const doctorName = prompt("Enter Doctor Name");

    if(doctorName){

        alert(`${doctorName} visit added successfully!`);

    }

});


// Notification Bell

const bell = document.querySelector(".notification");

bell.addEventListener("click", () => {

    alert(
        "Notifications\n\n" +
        "• Dr. Sharma Follow-up Tomorrow\n" +
        "• 2 New Medicines Added\n" +
        "• 1 Medicines removed\n"
    );

});


// Quick Menu Cards

const menuCards = document.querySelectorAll(".menu-card");

menuCards.forEach(card => {

    card.addEventListener("click", () => {

        const title = card.innerText;

        alert(title + " Section Coming Soon");

    });

});


// Medicine Cards

const medicineCards =
document.querySelectorAll(".medicine-card");

medicineCards.forEach(card => {

    card.addEventListener("click", () => {

        const medicine =
        card.querySelector("span").innerText;

        alert("Medicine Selected: " + medicine);

    });

});


// Profile Picture

const profile =
document.querySelector(".profile-pic");

profile.addEventListener("click", () => {

    alert(
        "Profile\n\n" +
        "Name: kanhaiya\n" +
        "Role: Medical Representative\n" +
        "Region: Bihar"
    );

});


// Bottom Navigation

const navLinks =
document.querySelectorAll(".bottom-nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});
// Medicine Counter Update

const medicineCounter =
document.getElementById("medicineCounter");

if(medicineCounter){

    let medicines =
    JSON.parse(
        localStorage.getItem("medicines")
    ) || [];

    medicineCounter.innerText =
    medicines.length;

}
