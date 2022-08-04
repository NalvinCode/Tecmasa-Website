const navbar = document.querySelector(".navbar");
const homeBody = document.querySelector(".home-body");
const aboutBody = document.querySelector(".about-body");
const prinBody = document.querySelector(".principals-body");
const contBody = document.querySelector(".contact-body");
const lengBtns = document.querySelectorAll(".lenguage, .lenguage-sm, .spanish-div, .english-div");
const lengArrow = document.querySelector(".lenguage i");
const lengDropdown = document.querySelector('.lenguage-dropdown');
const navItems = document.querySelectorAll(".navigation li a");
const lengSelect = document.querySelectorAll(".spanish-div, .english-div");
const hamburger = document.querySelector(".navbar .hamburger")
const hambNav = document.querySelector(".hamburger-navigation");
const hamBtns = document.querySelectorAll(".hamburger-navigation a, .hamburger-navigation .close-navigation");
const abtCards = document.querySelectorAll(".about-content .about-card")
const logos_a = document.querySelectorAll(".logos-table div a");
const contCard = document.querySelector(".contact-content .contact-card");

const nameForm = document.querySelector('input[name="name"]');
const lastNameForm = document.querySelector('input[name="lastName"]');
const emailForm = document.querySelector('input[name="email"]');
const phoneForm = document.querySelector('input[name="phone"]');
const messageForm = document.querySelector('textarea[name="message"]');

const formFields = document.querySelectorAll('.contact-card input, .contact-card textarea');

const phoneInput = window.intlTelInput(phoneForm, {
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

$( document ).ready(function() {
    let dropdownWth = lengDropdown.clientWidth;
    let moveTo = (window.scrollX + lengArrow.getBoundingClientRect().left) - (dropdownWth / 2);
    $(lengDropdown).css("transform", "translateX(" + moveTo + "px)");
    console.log( "ready!" );
});

//Intersection Observer

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.50
}

const observer = new IntersectionObserver( (entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            let entryTarget = entry.target;

            navItems.forEach(item => {
                $(item).css("color", "#d3d0d0");
            });
    
            var aTemp = 0.75;

            switch(entryTarget){
                case homeBody:
                    $(navItems[0]).css("color", "#ffffff");
                    navbar.classList.remove('dark');
                break;
                case aboutBody:
                    $(navItems[1]).css("color", "#ffffff");
                    navbar.classList.add('dark');
                    aTemp = 0.75
                    for(let i = 0; i < abtCards.length; i++){
                        $(abtCards[i]).css({"transition" : "" + aTemp + "s", "opacity" : "1" , "transform" : "translate(0)"});
                        aTemp += 0.25;
                    }
                break;
                case prinBody:
                    $(navItems[2]).css("color", "#ffffff");
                    navbar.classList.add('dark');
                    aTemp = 0.75
                    let logos = document.querySelectorAll(".logos-table .logo-row, .logos-table-sm .logo-row");
                    for(let i = 0; i < logos.length; i++){
                        $(logos[i]).css({"transition" : "" + aTemp + "s", "opacity" : "0.9" , "transform" : "translate(0)"});
                        aTemp += 0.10;
                    }
                break;
                case contBody:
                    $(navItems[3]).css("color", "#ffffff");
                    navbar.classList.add('dark');
                    $(contCard).css({"transition" : "0.75s", "opacity" : "1" , "transform" : "translate(0)"});
                break;
                default:
                break;
            }
        }
    })
}, observerOptions);

if(homeBody){
    observer.observe(homeBody);
}
if(aboutBody){
    observer.observe(aboutBody);
}
if(prinBody){
    observer.observe(prinBody);
}
if(contBody){
    observer.observe(contBody);
}

//Scroll-to animation

$('.to-section').click(function(e){
    e.preventDefault();
    let target = $($(this).attr('href'));

    if( !$('body, html').is(':animated') ) {
        if(target.length){
            $('body, html').stop();
            let docOffset = $(document).scrollTop;
            let scrollTo = target.offset().top - navbar.clientHeight;
            $('body, html').animate({scrollTop: scrollTo+'px'}, 650);
        }
    }
});

//Event-listeners

logos_a.forEach(item => {
    //Logo underline expand when hover the logo
    item.addEventListener("mouseover", function(){
        let anchor = $(item);
        let div = anchor.children("div");
        let backPos = div.css('background-position');
        backPos = getBackPosition(window.screen.width, backPos, "mouseover");
        div.css('background-position', backPos);
        anchor.next().css("width", "90%");
        anchor.next().css("background-color", "#d32f12");
    });
    //Logo underline contract when unhover the logo
    item.addEventListener("mouseout", function(){
        let anchor = $(item);
        let div = anchor.children("div");
        let backPos = div.css('background-position');
        backPos = getBackPosition(window.screen.width, backPos, "mouseout");
        div.css('background-position', backPos);
        anchor.next().css("width", "40%");
        anchor.next().css("background-color", "#828282");
    });
  })

function getBackPosition(screenSize, backPos, event){

    dif = 190
    positions = backPos.split(" ")

    if(screenSize <= 1600){
        dif = 165 
    }

    for (let i in positions){
        positions[i].slice(0, positions[i].indexOf("px"));
        positions[i] = parseInt(positions[i])
    }

    if(event == "mouseover"){
        positions[1] = positions[1] - dif

    }else{
        positions[1] = positions[1] + dif
    }

    return "" + positions[0] + "px" +  " " + positions[1] + "px" + ""
}

lengBtns.forEach(e => {
    e.addEventListener("click", function(){
        let lengIcon = e.firstChild;

        if(lengDropdown.style.opacity == 1){
            $(lengDropdown).css("opacity", "0");
            $(lengDropdown).css("z-index", "-1");
            $('.lenguage-dropdown div').each(function() {
                $( this ).css("cursor", "default");
              });
    
            $('.lenguage-dropdown div').each(function() {
                $( this ).css("pointer-events", "none");
            });
        }else{
            let dropdownWth = lengDropdown.clientWidth;
            let moveTo = (window.scrollX + lengIcon.getBoundingClientRect().left 
                         + (lengIcon.clientWidth / 2)) 
                         - (dropdownWth / 2);
            if(lengDropdown.getBoundingClientRect().left != moveTo){
                if(e == document.querySelector(".lenguage-sm")){
                    $(lengDropdown).css("transform", "translate(" + moveTo + "px, 5px)");
                }else{
                    $(lengDropdown).css("transform", "translate(" + moveTo + "px)");
                }
            }
    
            $(lengDropdown).css("opacity", "1");
            $(lengDropdown).css("z-index", "999999");
            $('.lenguage-dropdown .spanish-div, .lenguage-dropdown .english-div').each(function() {
                $( this ).css("cursor", "pointer");
              });
    
            $('.lenguage-dropdown div').each(function() {
                $( this ).css("pointer-events", "auto");
            });
        }
    });
})

hamburger.addEventListener("click", function(){
    $(hambNav).css("transform", "translateX(0)");
    $(hambNav).css("opacity", "1");
});

hamBtns.forEach(e => {
    e.addEventListener("click", function(){
        $(hambNav).css("transform", "translateX(100%)");
        $(hambNav).css("opacity", "0");
        $(lengDropdown).css("opacity", "0");
        $(lengDropdown).css("z-index", "-1");
        $('.lenguage-dropdown div').each(function() {
            $( this ).css("cursor", "default");
          });
        $('.lenguage-dropdown div').each(function() {
            $( this ).css("pointer-events", "none");
        });
    });
});

//Form dinamic validator

formFields.forEach(element => {
    $(element).bind("input focusin", function(){let isValid = validateForm(element); setFieldColor(element, isValid)});

    element.addEventListener("focusout", function(){
        $(element).css("border-color", "#828282");
        $(element).css("background-color", "#ffffff");
    })
});

//Form validator

function validateForm(element){
    let isValid = true;
    switch(element){
        case nameForm:
            let nameValue = nameForm.value;
            if (nameValue.length == 0) {
                isValid = false;
            }
        break;
        case lastNameForm:
            let lastNameValue = lastNameForm.value;
            if (lastNameValue.length == 0) {
                isValid = false;
            }
        break;
        case emailForm:
            let emailValue = emailForm.value;
            let isEmail = emailValue.match(
                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
            if (emailValue.length == 0 ||
                !isEmail) {
                isValid = false;
            }
        break;
        case phoneForm:
            let phoneValue = phoneForm.value;
            let isPhone = phoneValue.match(
                /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
            );
            if (phoneValue.length == 0 ||
                !isPhone) {
              isValid = false;
            }
        break;
        case messageForm:
            let messageValue = messageForm.value;
            if (messageValue.length == 0) {
                isValid = false;
            }
        break;
    }
    return isValid
}

function setFieldColor(input, isValid){
    if(isValid){
        $(input).css("border-color", "#5aff30");
        $(input).css("background-color", "#5aff302a");
        return
    }
    
    if(input.value.length == 0){
        $(input).css("border-color", "#828282");
        $(input).css("background-color", "#8282822a");
        return
    }
    
    $(input).css("border-color", "#d32f12");
    $(input).css("background-color", "#d32f122a");
}

//Form send validator
function verifyInfo(){
    isValid = true
    formFields.forEach(element => {
        isValid = validateForm(element)
    });

    if(!isValid){
        alert("Existen errores en el formulario")
        return
    }

    makeEmail();
}
//Send mail with information
function makeEmail(){
    var url = 'http://localhost:5000/sendMail';
    let message = {
        "name" : nameForm.value,
        "lastName" : lastNameForm.value,
        "email" : emailForm.value,
        "phone" : phoneForm.value,
        "message": messageForm.value
    }

    fetch(url, {
    method: 'POST',
    body: JSON.stringify(message),
    headers:{
        'Content-Type': 'application/json'
    }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
}