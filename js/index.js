const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// Task 1. Creating selecotrs and using ID to update src path content

logoImg = document.getElementById("logo-img");
ctaImg = document.getElementById("cta-img");
middleImg = document.getElementById("middle-img");

logoImg.src = "img/logo.png";

ctaImg.src = "img/header-img.png";

middleImg.src ="img/mid-page-accent.jpg";

document.getElementsByClassName('container');

// Task 2.  Update HTML with JSON data

const navLinks = document.querySelectorAll('a');

navLinks[0].innerHTML = 'Services';
navLinks[1].innerHTML = 'Products';
navLinks[2].innerHTML = 'Vision';
navLinks[3].innerHTML = 'Features';
navLinks[4].innerHTML = 'About';
navLinks[5].innerHTML = 'Contact';

const h1Info = document.querySelector('h1');

h1Info.textContent = "DOM Is Awesome";

const butonLink = document.querySelector('button');

butonLink.textContent = 'Get Started';


const contentH4 = document.getElementsByTagName('h4');
const contentP =document.getElementsByTagName('p');

contentH4[0].innerHTML = 'Features';
contentP[0].innerHTML = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

contentH4[1].innerHTML = 'About';
contentP[1].innerHTML = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

contentH4[2].innerHTML = 'Services';
contentP[2].innerHTML = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

contentH4[3].innerHTML = 'Product';
contentP[3].innerHTML = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

contentH4[4].innerHTML = 'Vision';
contentP[4].innerHTML =  "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

contentH4[5].innerHTML = 'Contact';

contentP[5].innerHTML = "123 Way 456 Street Somewhere, USA";
contentP[6].innerHTML = "1 (888) 888-8888";
contentP[7].innerHTML = "sales@greatidea.io";

contentP[8].innerHTML = "Copyright Great Idea! 2018";


//Task 3 change nave to green and add items

navLinks.forEach (element => {
  element.style.color = "green";
});


const nav = document.querySelector('nav');

const inFront = document.createElement('a');
inFront.textContent = "Link In Front";
inFront.style.color ="red";
inFront.style.fontSize = '30px';


nav.prepend(inFront);

const atEnd = document.createElement('a');
atEnd.textContent = "Link at End";
atEnd.style.color = "red";
atEnd.style.fontStyle ='italic';

nav.append(atEnd);

// stretch adding button function.  Button at footer changes color of page when clicked
const buttonColor = document.createElement('button');
buttonColor.classList.add('ChangeColor');

const footer = document.querySelector('footer')

footer.prepend(buttonColor);
buttonColor.textContent = "Click to Change Color";

const htmlWhole = document.querySelector('html');

buttonColor.addEventListener('click', (change) => {
  if(htmlWhole.style.backgroundColor !== "yellow"){
    htmlWhole.style.backgroundColor = "yellow";
  }
  else {
    htmlWhole.style.backgroundColor = "white"
  }
})