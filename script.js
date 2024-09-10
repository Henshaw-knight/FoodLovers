window.addEventListener("load", function(){
    // page loader
    setTimeout(function(){
        document.querySelector(".page-loader").classList.add("fade-out");
    }, 1000)
    
    setTimeout(function(){
        document.querySelector(".page-loader").style.display="none";
    }, 5000);
    // animation on scroll
    AOS.init();
})


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
  if (
    e.target.classList.contains("menu-tab-item") &&
    !e.target.classList.contains("active")
  ) {
    const controllee = e.target.getAttribute("data-target");
    menuTabs.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    document.querySelector(".menu-tab-content.flex").classList.add("hidden");
    document.querySelector(".menu-tab-content.flex").classList.remove("flex");
    document.querySelector(controllee).classList.add("flex");
    document.querySelector(controllee).classList.remove("hidden");
  }
  AOS.init();
});

const form = document.getElementById("form");
const modalText = document.getElementById("modal-text");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const customerName = document.getElementById("username").value;
  const customerEmail = document.getElementById("useremail").value;
  const scheduledDate = document.getElementById("scheduled-date").value;
  const scheduledTime = document.getElementById("scheduled-time").value;

  if (customerName && customerEmail && scheduledDate && scheduledTime) {
    modalText.innerHTML = `Dear <span class="font-bold">${customerName}</span>, Your reservation on <span class="font-bold">${scheduledDate}</span> at <span class="font-bold">${scheduledTime}</span> has been successfully confirmed. We look forward to hosting you at Food Lovers Restaurant.`;
    handleModal();
  }

  console.log(customerName);
  console.log(customerEmail);
  console.log(scheduledDate);
  console.log(scheduledTime);
  form.reset();
});


const modalContainer = document.getElementById("modal-contain");
const close = document.getElementById("close");
const modal = document.getElementById("modal");
const spinner = document.getElementById("spinner");

function handleModal() {
  modalContainer.classList.add("flex");
  modalContainer.classList.remove("hidden");
  spinner.classList.remove("hidden");

  setTimeout(() => {
    spinner.classList.add("hidden");
    modal.classList.remove("hidden");
    modal.classList.add("block");
  }, 3000);
}


close.addEventListener("click", () => {
  modalContainer.classList.remove("flex");
  modalContainer.classList.add("hidden");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
});


const navToggler = document.querySelector(".nav-toggler");
console.log(navToggler);

navToggler.addEventListener("click", toggleNav);


function toggleNav(){
    navToggler.classList.toggle("active");
    if (navToggler.classList.contains("active")) {
        navToggler.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    } else {
        navToggler.innerHTML = `<i class="fa-solid fa-bars"></i>`
    }
    // console.log(navToggler.classList);
    document.querySelector(".bar-nav").classList.toggle("open");
}


// close nav when clicking on nav item
document.addEventListener("click", function(e) {
    if(e.target.closest(".nav-item")) {
        toggleNav();
    }
});