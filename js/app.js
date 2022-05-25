
// Creating the Global variables.
let myNav = document.getElementById("navbar__list");
let sections = Array.from(document.querySelectorAll("section"));
let mySec = document.querySelectorAll("section")
let options = { root: null, threshold: 0.6, rootMargin: "0px"};
const myButton = document.getElementById ('go');




/* 1-Building the navigation bar
// 2-creating the list.
// 3-inserting the list in the html and assigning the ids' to it so the active status for the nav bar works.
// 4-appinding the list in the ul.
/** */
function secList() {
    sections.forEach((section)=>{
        myList = document.createElement("li");
        myList.innerHTML= `<li><a href='#${section.id}' data-nav="${section.id}" class='menu__link' >${section.dataset.nav}</a>`;
        myNav.appendChild(myList);
    })
}

// calling the function.
secList();


/*using the IntersectionObserver to create the active status for the sections, https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
// this can also be done with .getBoundingClientRect() but while researching i found that this is a more effitient method and i found it easier to learn.
/** */
function observingSec() {
    let observer = new IntersectionObserver(
        function (entries) {
            // setting the necessary conditions so the observer can detect the target and highlights the nav
            entries.forEach((entry) => {
                let highlightMe = myNav.querySelector(`[data-nav=${entry.target.id}]`);
                if (entry.isIntersecting) {
                    entry.target.classList.add('your-active-class');
                    highlightMe.classList.add('active');
                }
                else {
                    entry.target.classList.remove('your-active-class');
                    highlightMe.classList.remove('active');
                }
            });
        }, options);
    // looping over the sections so the observer can detect them and apply the necessary classes whenever the viewport changes.
    return mySec.forEach(section => {
        observer.observe(section);
    });
}

observingSec(); 


// setting the document beahviour to smooth with scrollIntoView.
myNav.addEventListener('click', function (e) {
        e.preventDefault();
        if (e.target.dataset.nav) {
            document
                .getElementById(`${e.target.dataset.nav}`)
                .scrollIntoView({ behavior: "smooth" });
        }
    })



// setting the event and conditions the button will need to appear on the screan while scrolling.
window.onscroll = function () { scrollFunction()}
    function scrollFunction () {
    if (document.body.scrollTop > 300 || document.documentElement > 300) {
        myButton.style.display = 'block';
    }
    else {
        myButton.style.display = 'none';
    };
};

// creating the event listner for the button so it takes you back to the top with smooth motion.
myButton.addEventListener('click', function(){
    document.body.scrollTo({top: 0, behavior: "smooth"});
    document.documentElement.scrollTo({top: 0, behavior: "smooth"});
});




