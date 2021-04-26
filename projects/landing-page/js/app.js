/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const sections = document.querySelectorAll('section'); // name of variable
const Navi = document.getElementById('navbar__list'); // variable list
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/




/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

//start fragment
const fragment = document.createDocumentFragment();
sections.forEach((elements) => {   // adding foreach 
    let sectionName = elements.getAttribute('data-nav'); // get the name og data
    let listItem = document.createElement('li'); // new section
    let nwLik = document.createElement('a'); // creat a link of section
    let textNode = document.createTextNode(sectionName);
    listItem.appendChild(nwLik);
    nwLik.setAttribute('href', "#" + elements.getAttribute('id'));
    nwLik.appendChild(textNode);

    nwLik.classList.add("menu__link"); // class list adding menu link
    nwLik.addEventListener('click', function (event) {
        event.preventDefault()
        window.scrollTo({
            top: elements.offsetTop ,
            behavior: 'smooth'
        }) //top of scroll
        elements.scrollIntoView({ behavior: 'smooth' });// add scroll to smooth

    });//end function

    fragment.appendChild(listItem);//element of fragment
});
Navi.appendChild(fragment);// navbar list items

/**
 * createListItem();
 */


// add event listener with scroll by windows
window.addEventListener('scroll', toggleActiveClass)

function sectViewPoint(elemt) {
    let sectiPos = elemt.getBoundingClientRect(); // adding the section postion in element
    if (sectiPos.top <= 100 && sectiPos.bottom >= 100) {

        return true
    }
//end if statement and return false
    return false
}
//end function

// Add class 'active' to section when near top of viewport

function toggleActiveClass() {

    for (section of sections) {
        let sectionId = section.getAttribute('id');
        let activeLink = document.querySelector('.menu__link[href="#' + sectionId + '"]')
        if (sectViewPoint(section)) {

            section.classList.add('your-active-class'); // add active class
            activeLink.classList.add('active-link')
            
        } else {
            section.classList.remove('your-active-class'); // remove the active class
            activeLink.classList.remove('active-link')
        };
    };//end for loop

};//end function




/**
 * End Main Functions
 * Begin Events
 *
*/
/**
// Build menu

// Scroll to section on link click

// Set sections as active
*/
