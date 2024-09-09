curtainNavBar = document.querySelector(".nav-bar");
console.log(curtainNavBar);

window.addEventListener("scroll", () => {
    if (this.scrollY > 60) {
        curtainNavBar.classList.add("curtain");
    } else {
        curtainNavBar.classList.remove("curtain");
    }
});

const menuTabs = document.querySelector(".menu-tabs");
menuTabs.addEventListener("click", (e) => {
    // console.log(e.target);
    if (e.target.classList.contains("menu-tab-item") && !e.target.classList.contains("active")){
        const controllee = e.target.getAttribute("data-target");
        menuTabs.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        document.querySelector(".menu-tab-content.flex").classList.add("hidden");
        document.querySelector(".menu-tab-content.flex").classList.remove("flex");
        document.querySelector(controllee).classList.add("flex");
        document.querySelector(controllee).classList.remove("hidden")
    }
});

const form = document.getElementById('form');
form.addEventListener('submit', (e)=> {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const userEmail = document.getElementById('useremail').value;
    const scheduledDate = document.getElementById('scheduled-date').value;
    const scheduledTime = document.getElementById('scheduled-time').value;

    console.log(username);
    console.log(userEmail);
    console.log(scheduledDate);
    console.log(scheduledTime);
    form.reset()
})