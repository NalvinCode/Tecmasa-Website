const lengButtons = document.querySelectorAll('div[language="spanish"], div[language="english"]')

const pageElements = document.querySelectorAll('.homeBtn, .aboutBtn, .principalsBtn, .contactBtn, .chooseLen, .mainTitle, .subTitle, .contRedirect, .abtUsTitle, .card1title, .card1text, .card2title, .card2text, .card3title, .card3text, .princTitle, .contTitle, .nameInp, .lastNameInp, .emailInp, .messegeInp, .sendBtn')


var dataLeng = {
    "english":
    {
        "homeBtn": "HOME",
        "aboutBtn": "ABOUT",
        "principalsBtn": "PRINCIPALS",
        "contactBtn": "CONTACT",
        "chooseLen": "Choose your lenguage",
        "mainTitle": "Sales Representation",
        "subTitle": "Machines and services especialized for the Argentinian industry",
        "contRedirect": "Contact us",
        "abtUsTitle" : "About Us",
        "card1title": "Mision, vision and values",
        "card1text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "card2title": "History",
        "card2text" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "card3title": "Principals products",
        "card3text" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "princTitle": "Principals",
        "contTitle": "Contact",
        "nameInp": "Name",
        "lastNameInp": "Lastname",
        "emailInp": "Email",
        "messegeInp": "Message",
        "sendBtn": "Send"
    },

    "spanish":
    {
        "homeBtn": "INICIO",
        "aboutBtn": "NOSOTROS",
        "principalsBtn": "REPRESENTACIONES",
        "contactBtn": "CONTACTO",
        "chooseLen": "Seleccione su idioma",
        "mainTitle": "Representacion de ventas",
        "subTitle": "Maquinaria y servicios especializados para la Industria en Argentina",
        "contRedirect": "Contáctenos",
        "abtUsTitle" : "Sobre nosotros",
        "card1title": "Mision, Vision, Valores",
        "card1text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "card2title": "Historia",
        "card2text" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "card3title": "Productos representados",
        "card3text" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "princTitle": "Representaciones",
        "contTitle": "Contacto",
        "nameInp": "Nombre",
        "lastNameInp": "Apellido",
        "emailInp": "Email",
        "messegeInp": "Mensaje",
        "sendBtn": "Enviar"
    }
}

lengButtons.forEach(lenBtn => {
    lenBtn.addEventListener('click', () => {
        let lenguage = lenBtn.getAttribute('language')
        pageElements.forEach(el => {

            let elName = Object.keys(dataLeng[lenguage]).filter(item => {
                return el.classList.contains(item)
            })[0]

            if(el.nodeName == 'INPUT' || el.nodeName == 'TEXTAREA'){
                el.placeholder = dataLeng[lenguage][elName]
                return
            }

            el.textContent = dataLeng[lenguage][elName]
        });
    })
});