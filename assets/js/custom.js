// carousel
$('.banner-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    autoplay: true,
    smartSpeed: 2000,
    autoplayTimeout: 3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
// company logo carousel

$('.company-logo-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    autoplay: true,
    smartSpeed: 2000,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1,
            nav: true
        },
        600:{
            items:2,
            nav: false
        },
        1000:{
            items:4,
            nav: false
        }
    }
})

// testimonial carousel

$('.testimonial-carousel2').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    autoplay: true,
    smartSpeed: 2000,
    autoplayTimeout: 3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

//===============================================================
//===================== Home page sticky navbar==================
//===============================================================

window.onscroll=function(){
    myfunction()
};
var navbar = document.getElementById("mynavbar");
function myfunction(){
    if(window.pageYOffset>=100){
        navbar.classList.add("stickyy")
    }
    else{
        navbar.classList.remove("stickyy");
    }
}

// ===============================================================
//========================= venobox plugins=======================
// ===============================================================


$(document).ready(function(){
    $('.venobox').venobox(); 
});
// ===============================================================
//======================= Pre loader Js ==========================
// ===============================================================
setTimeout(function(){
    $('.loader_bg').fadeToggle();
}, 2500);


// ===============================================================
//========================Form Validation=========================
// ===============================================================
(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();


  // ===============================================================
//========================Form submission Js=========================
// ===============================================================

(function () {
    "use strict";
    window.addEventListener(
      "load",
      function () {
        var forms = document.getElementsByClassName("needs-validation");
        var validation = Array.prototype.filter.call(forms, function (form) {
          form.addEventListener(
            "submit",
            function (event) {
              if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
              }
              if (form.checkValidity() === true) {
                alert("Message has been Sent");
              }
              form.classList.add("was-validated");
            },
            false
          );
        });
      },
      false
    );
  })();
  
  