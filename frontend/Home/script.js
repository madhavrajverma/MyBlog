const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}

const searchBtnText = document.querySelector('.search_btn_text');
const searchContainer = document.querySelector('.search_bar_container');


searchBtnText.addEventListener('click',() => {
    searchBtnText.classList.add('deactivate');
    searchContainer.classList.add('search_bar_active');
}) 

const cancelSearch = document.querySelector('.cancel_Search');
cancelSearch.addEventListener('click',(e) => {
    e.preventDefault();
    searchBtnText.classList.remove('deactivate');
    searchContainer.classList.remove('search_bar_active');
})


var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var closeSearhResultButton = document.querySelector(".close_searh_result_btn");
var search_btn = document.querySelector(".search_btn");
var searchResultContainer = document.querySelector(".search_results_container")

search_btn.addEventListener("click", () => {
    searchResultContainer.classList.add("open")
    backdrop.style.display = "block";
    backdrop.classList.add("open");
}) 

closeSearhResultButton.addEventListener("click", () => {
    backdrop.style.display = "none";
    backdrop.classList.remove("open");
    searchResultContainer.classList.remove("open")
})