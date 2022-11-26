import _navCat from "./assets/cat1.svg"

const home = document.querySelector("#content");
// main ontainer 
const mainNavDiv = document.createElement("div");
mainNavDiv.classList.add("mainNavContainer");

// main image
const navCat = new Image();
navCat.src = _navCat;
navCat.classList.add(".navCat");

// logo
const Logo = document.createElement("div");
Logo.classList.add("logo");
Logo.textContent = "Sushi + Cats";

// nav bar 

const circle1 = document.createElement("div");
circle1.classList.add("circle");

const circle2 = document.createElement("div");
circle2.classList.add("circle");

const circle3 = document.createElement("div");
circle3.classList.add("circle");

const Menu = document.createElement("div");
Menu.textContent = "Menu";

const Locations = document.createElement("div");
Locations.textContent = "Locations";

const Careers = document.createElement("div");
Careers.textContent = "Careers";

const Contact = document.createElement("div");
Contact.textContent = "Contact";

const navOptions = document.createElement("div");
navOptions.classList.add("navOptions")

navOptions.append(Menu, circle1, Locations, circle2, Careers, circle3, Contact);

mainNavDiv.append(Logo, navOptions, navCat);




function renderNavigationBar() {
    home.appendChild(mainNavDiv);

}





export default renderNavigationBar; 