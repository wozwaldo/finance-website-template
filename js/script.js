// Slider
$(document).ready(function() {
    var currentIndex = 0;
    var items = $(".item");
    var dots = $(".dot");
    var interval;
  
    function slideTo(index) {
      items.removeClass("current");
      dots.removeClass("current");
      items.eq(index).addClass("current");
      dots.eq(index).addClass("current");
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % items.length;
      slideTo(currentIndex);
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      slideTo(currentIndex);
    }
  
    function startAutoSlide() {
      interval = setInterval(nextSlide, 4000);
    }
  
    function stopAutoSlide() {
      clearInterval(interval);
    }

    startAutoSlide();
  
    $(".button.prev").on("click", function() {
      stopAutoSlide();
      prevSlide();
      startAutoSlide();
    });
  
    $(".button.next").on("click", function() {
      stopAutoSlide();
      nextSlide();
      startAutoSlide();
    });
  
    dots.on("click", function() {
      stopAutoSlide();
      var index = $(this).index();
      slideTo(index);
      startAutoSlide();
    });
});
  


// Main Page Tabs
window.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('product-1').style.display = 'block';
  document.querySelector('.tablinks:first-child').classList.add('active');
});

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Zoom out effect
  document.getElementById(tabName).classList.remove('zoom-out');
  void document.getElementById(tabName).offsetWidth;
  document.getElementById(tabName).classList.add('zoom-out');

  // Zoom in effect
  document.getElementById(tabName).style.display = "block";
  void document.getElementById(tabName).offsetWidth;
  document.getElementById(tabName).classList.add('zoom-in');

  evt.currentTarget.className += " active";
}


// Sticky header
window.addEventListener("load", function () {
  const stickyHeader = document.getElementById("myStickyHeader");
  stickyHeader.classList.remove("fixed");
});

window.addEventListener("scroll", function () {
  const stickyHeader = document.getElementById("myStickyHeader");
  if (window.scrollY > 100) { 
    stickyHeader.classList.add("fixed");
  } else {
    stickyHeader.classList.remove("fixed");
  }
});

// Accordion effect
document.addEventListener("DOMContentLoaded", function () {
  var accordions = document.querySelectorAll(".accordion");

  accordions.forEach(function (accordion) {
    var button = accordion.querySelector(".acc-btn");
    var content = accordion.querySelector(".acc-content");
    var icon = button.querySelector("i");
    
    button.addEventListener("click", function () {
      if (content.style.display === "none" || content.style.display === "") {
        accordions.forEach(function (acc) {
          var accContent = acc.querySelector(".acc-content");
          var accIcon = acc.querySelector(".acc-btn i");
          accContent.style.display = "none";
          accIcon.classList.remove("fa-minus");
          accIcon.classList.add("fa-plus");
        });

        icon.classList.remove("fa-plus");
        icon.classList.add("fa-minus");
      } else {
        icon.classList.remove("fa-minus");
        icon.classList.add("fa-plus");
      }
    });
  });
});

// Mobile Menu
document.addEventListener("DOMContentLoaded", function () {
  var dropdowns = document.querySelectorAll(".mobile-dropdown");

  dropdowns.forEach(function (dropdown) {
    var mobilebutton = dropdown.querySelector(".dropdown-btn");
    var content = dropdown.querySelector(".mobile-content");

    mobilebutton.addEventListener("click", function () {
      if (content.style.display === "none" || content.style.display === "") {
        dropdowns.forEach(function (drop) {
          var dropContent = drop.querySelector(".mobile-content");
          dropContent.style.display = "none";
          drop.classList.remove("active");
        });

        content.style.display = "block";
        dropdown.classList.add("active");
      } else {
        content.style.display = "none";
        dropdown.classList.remove("active");
      }
    });
  });
});


// Go top button
document.addEventListener("DOMContentLoaded", function() {
  var goTopButton = document.getElementById("goTop");

  window.addEventListener("scroll", function() {
    if (window.scrollY > 100) {
      goTopButton.classList.add("active");
    } else {
      goTopButton.classList.remove("active");
    }
  });

  goTopButton.addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});

// Nav Toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelectorAll('.nav-expander, .nav-expander2');
  const menu = document.querySelector('.right-menu-toggle');
  const background = document.querySelector('.page');

  function toggleMenu() {
    menu.classList.toggle('nav-expanded');
    background.classList.toggle('nav-expanded');
  }

  menuToggle.forEach(function(button) {
    button.addEventListener('click', toggleMenu);
  });

  const closeBtn = document.querySelector('.nav-close');
  closeBtn.addEventListener('click', function() {
    menu.classList.remove('nav-expanded');
    background.classList.remove('nav-expanded');
  });

  document.addEventListener('click', function(event) {
    if (!menu.contains(event.target) && !menuToggle.some(button => button.contains(event.target))) {
      menu.classList.remove('nav-expanded');
      background.classList.remove('nav-expanded');
    }
  });
});


// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
  var mobileNavToggler = document.querySelector(".mobile-nav-toggler");
  var mobileMenu = document.querySelector(".mobile-menu");
  var closeBtn2 = document.querySelector(".mobile-close-btn");

  mobileNavToggler.addEventListener("click", function(){
    mobileMenu.classList.toggle("show");
  });
  closeBtn2.addEventListener("click", function(){
    mobileMenu.classList.remove("show");
  });
});

// Search Pop Up
document.addEventListener('DOMContentLoaded', function() {
  const searchBtn = document.getElementById('search-btn');
  const searchBtn2 = document.getElementById('search-btn2');
  const searchPopup = document.getElementById('search-popup');
  const closeSearch = document.getElementById("close-search");

  searchBtn.addEventListener('click', function() {
    searchPopup.classList.toggle('popup-visible');
  });

  searchBtn2.addEventListener('click', function() {
    searchPopup.classList.toggle('popup-visible');
  });

  closeSearch.addEventListener("click", function(){
    searchPopup.classList.remove("popup-visible");
  });
});

// Loader
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.body.classList.add("loaded");
  }, 1000); 
});

// Slide Toggle
$(document).ready(function(){
  $(".accordion .acc-btn").click(function(){
    $(this).closest(".accordion").find(".acc-content").slideToggle(300);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector("header");

  window.addEventListener("scroll", function () {
    if (window.innerWidth < 768) {
      if (window.scrollY > 100) {
        header.classList.add("fixed-header");
      } else {
        header.classList.remove("fixed-header");
      }
    } else {
      header.classList.remove("fixed-header");
    }
  });
});

// Cookies
document.addEventListener("DOMContentLoaded", function () {
  if (sessionStorage.getItem('cookiePolicyShown') !== 'true') {
    var cookiePolicy = document.getElementById('cookie-policy');
    cookiePolicy.style.display = 'flex';
    setTimeout(function () {
      cookiePolicy.classList.add('show');
    }, 100);
  }
});

function acceptCookies() {
  var cookiePolicy = document.getElementById('cookie-policy');
  cookiePolicy.classList.remove('show');
  setTimeout(function () {
    cookiePolicy.style.display = 'none';
  }, 500);
  sessionStorage.setItem('cookiePolicyShown', 'true');
}

function rejectCookies() {
  var cookiePolicy = document.getElementById('cookie-policy');
  cookiePolicy.classList.remove('show');
  setTimeout(function () {
    cookiePolicy.style.display = 'none';
  }, 500);
  sessionStorage.setItem('cookiePolicyShown', 'true');
}

