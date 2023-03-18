const tabsbox = document.querySelector(".tabs-box");
arrowIcon = document.querySelectorAll(".icon i");
allTabs = document.querySelectorAll(".tab");

const handleIcon = () => {
    let scrollvalue = Math.round(tabsbox.scrollLeft);
    let maxScrollableWidth = tabsbox.scrollWidth - tabsbox.clientWidth;
    arrowIcon[0].parentElement.style.display = scrollvalue > 0 ? "flex" : "none";
    arrowIcon[1].parentElement.style.display = maxScrollableWidth > scrollvalue ? "flex" : "none" ;
}

arrowIcon.forEach(icon => {
    icon.addEventListener("click" , () => {
        tabsbox.scrollLeft += icon.id === "left" ? -350 : 350;
        setTimeout(() => handleIcon(), 50);
    });
});

allTabs.forEach(tab => {
    tab.addEventListener("click" , () => {
        tabsbox.querySelector(".active").classList.remove("active");
        tab.classList.add("active");
    });
});

let isDragging = false;

const draging = (e) => {
    if(!isDragging) return;
    tabsbox.classList.add("draging");
    tabsbox.scrollLeft -= e.movementX;
    handleIcon();
}
const dragStop = () => {
    isDragging = false;
    tabsbox.classList.remove("draging");
}
tabsbox.addEventListener("mousedown" , () => isDragging = true);
tabsbox.addEventListener("mousemove" , draging);
document.addEventListener("mouseup" , dragStop);