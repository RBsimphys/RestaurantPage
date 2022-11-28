// pizzas 
import pizza from "./assets/pizza.jpg"
import featuredPizza1 from "./assets/featuredPizza1.jpg"
import featuredPizza2 from "./assets/featuredPizza2.jpg"
import featuredPizza3 from "./assets/featuredPizza3.jpg"
import featuredPizza4 from "./assets/featuredPizza4.jpg"
import featuredPizza5 from "./assets/featuredPizza5.jpg"
import featuredPizza6 from "./assets/featuredPizza6.jpg"
import featuredPizza7 from "./assets/featuredPizza7.jpg"

// features 
import papaBowls from "./assets/papaBowls.jpg"
import papaDias from "./assets/papaDias.jpg"

// mobile orders 
import pizzaMobile from "./assets/pizzaMobile.jpg"
import iosBadge from "./assets/iosBadge.png"
import googleBadge from "./assets/google-play-badge.png"
// building franchise 
import papabuilding from "./assets/building.jpg"

function renderHomePage() {

    const home = document.querySelector("#content");
    const rewards = document.createElement("div");
    rewards.classList.add("rewards");

    const homePizza = new Image();
    homePizza.src = pizza;
    homePizza.classList.add("homePizza");
    // ****MAIN REWARD******* 
    const mainReward = document.createElement("div");
    mainReward.classList.add("mainReward");

    const reward = document.createElement("h1");
    reward.textContent = "Shaq-Aroni-Peproni";
    reward.classList.add("reward");

    const rewardDescription = document.createElement("h2");
    rewardDescription.textContent = "EXTRA LARGE | EXTRA PEPRONI | EXTRA CHEESE"
    rewardDescription.classList.add("rewardDescription");

    mainReward.append(reward, rewardDescription);
    rewards.append(homePizza, mainReward);


    // Featured content 

    const featuredContainer = document.createElement("div");
    featuredContainer.classList.add("featuredContainer")

    const featuredItems = [featuredPizza1, featuredPizza2, featuredPizza3, featuredPizza4, featuredPizza5, featuredPizza6, featuredPizza7];
    for (let i = 0; i < featuredItems.length; i++) {
        let featuredItem = new Image();
        featuredItem.src = featuredItems[i];
        featuredItem.classList.add("featuredContent");
        featuredContainer.append(featuredItem);
    }


    // Explore the menu 


    const exploreContainer = document.createElement("div");
    exploreContainer.classList.add("exploreContainer");

    const explore = document.createElement("h2");
    explore.textContent = "EXPLORE OUR MENU";


    const optionContainer = document.createElement("div");
    optionContainer.classList.add("optionContainer");
    const options = [featuredPizza1, featuredPizza2, papaBowls, papaDias, featuredPizza5, featuredPizza6, featuredPizza7]
    for (let i = 0; i < options.length; i++) {
        let optionImage = new Image();
        optionImage.src = options[i];
        optionImage.classList.add("optionImage");
        optionContainer.append(optionImage);
    }


    exploreContainer.append(explore, optionContainer);

    // order from our app 

    const orderContainer = document.createElement("div");
    orderContainer.classList.add("orderContainer");

    const orderImage = new Image();
    orderImage.src = pizzaMobile;
    orderImage.classList.add("orderImage");

    const orderFromDiv = document.createElement("div");
    orderFromDiv.textContent = "ORDER FROM OUR APP";
    orderFromDiv.classList.add("orderFromDiv");


    const iosAPP = new Image();
    iosAPP.src = iosBadge;
    iosAPP.classList.add("iosBadge");


    const googleApp = new Image();
    googleApp.src = googleBadge;
    googleApp.classList.add("googleApp");
    orderContainer.append(orderImage, orderFromDiv, iosAPP, googleApp);

    // Home Footer 
    const footer = document.createElement("div");
    footer.classList.add("footer"); 

    let footerArray = ["Contact", "About Papa Johns", "Investor Relations", "Careers", "No Contact Delivery"]
    const footerList = document.createElement("list")
    footerArray.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        footerList.appendChild(li);
    })
    footerList.classList.add("footerList");



    const building = new Image();
    building.src = papabuilding;
    building.classList.add("building");
    
    footer.append(footerList, building);  

    home.append(rewards, featuredContainer, exploreContainer, orderContainer, footer);
}


export default renderHomePage