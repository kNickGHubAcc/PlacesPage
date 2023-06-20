let tabcontents = document.querySelectorAll(".tabcontent");
let tabs = document.querySelectorAll(".blog-tab");


function changeActiveTab(clickedTab) {
  tabs.forEach((tab) => tab.classList.remove("active"));    //'Αφαιρούνται' τα προηγούμενα active tabs
  clickedTab.classList.add("active");
}

function changeTabContent(month) {
  tabcontents.forEach((tabcontent) =>       //'Αφαιρούνται' τα προηγούμενα active περιεχόμενα των tabs
    tabcontent.setAttribute("style", "display: none")
  );
  document.getElementById(month).setAttribute("style", "display: block");
}

function openBlogs(e, month) {
  e.stopImmediatePropagation();
  let clickedTab = e.currentTarget;
  changeActiveTab(clickedTab);
  changeTabContent(month);
}