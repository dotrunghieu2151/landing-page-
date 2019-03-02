function showSearchWrapper() {
    document.getElementsByClassName('search-wrapper')[0].style.top="0px";
}
function closeSearchWrapper(){
    document.getElementsByClassName('search-wrapper')[0].style.top="-80px";
}
function opentab() {
    document.getElementsByClassName('dropdown')[0].style.display ="block";
}
document.getElementsByClassName('fa fa-search')[0].onclick = showSearchWrapper;
document.getElementByClassName('menu')[0].onclick = opentab;