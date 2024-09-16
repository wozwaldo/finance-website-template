window.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('Announcements').style.display = 'block';
  document.querySelector('.tablinks2:first-child').classList.add('active');
});

function openTab2(evt, tabName) {
  var i, tabcontent2, tablinks2;
  tabcontent2 = document.getElementsByClassName("tabcontent2");
  for (i = 0; i < tabcontent2.length; i++) {
    
    tabcontent2[i].classList.add('zoom-out');
    tabcontent2[i].style.display = "none";
  }

  tablinks2 = document.getElementsByClassName("tablinks2");
  for (i = 0; i < tablinks2.length; i++) {
    tablinks2[i].className = tablinks2[i].className.replace(" active", "");
  }

  var currentTab = document.getElementById(tabName);
  currentTab.style.display = "block";

  currentTab.classList.add('zoom-in');
  
  evt.currentTarget.className += " active";
}
