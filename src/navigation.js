import _Logo from "./assets/papaLogo.png"
import _cart from "./assets/cart.svg"

function renderNavigationBar() {

    const home = document.querySelector("#content");
    // top nav main Container 
    const navContainer = document.createElement("div");
    navContainer.classList.add("NavContainer");

    // top Left nav Logo
    const logo = new Image();
    logo.src = _Logo;
    logo.classList.add("papaLogo");


    // top Right nav 
    const order = document.createElement("div");
    order.textContent = "START YOUR ORDER";

    const login = document.createElement("div");
    login.textContent = "LOG IN";

    const langArray = ["English", "Spanish", "Arabic"];
    const lang = document.createElement("select");
    lang.id = "mySelect";
    for (let i = 0; i < langArray.length; i++) {
        let option = document.createElement("option");
        option.value = langArray[i];
        option.text = langArray[i];
        lang.appendChild(option);
    }


    const signUp = document.createElement("BUTTON");
    signUp.textContent = "SIGN UP";
    signUp.classList.add("signUp");

    const rightNav = document.createElement("div");
    rightNav.classList.add("rightNav");
    rightNav.append(order, lang, login, signUp);

    // bottom nav 

    const bottomNavContainer = document.createElement("div");
    bottomNavContainer.classList.add("bottomNavContainer");
    const mainNav = document.createElement("div");
    mainNav.classList.add("mainNav"); 
    const menu = document.createElement("div");
    menu.textContent = "MENU";

    const specials = document.createElement("div");
    specials.textContent = "SPECIALS";

    const rewards = document.createElement("div");
    rewards.textContent = "PAPA REWARDS";

    let promo = document.createElement("INPUT");
    promo.setAttribute("type", "text");
    promo.setAttribute("placeholder", "ENTER PROMO CODE");
    promo.classList.add("promo");

    const cart = new Image();
    cart.src = _cart;
    cart.classList.add("cart");

    // nav bar 
    navContainer.append(logo, rightNav);
    mainNav.append(menu, specials, rewards)
    bottomNavContainer.append(mainNav, promo, cart);
    home.append(navContainer, bottomNavContainer);

}



export default renderNavigationBar; 