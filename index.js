window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body> 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("header").style.backgroundColor = "#1f2833";
   
   
  } else {
    
     document.getElementById("header").style.backgroundColor = "";
    
    
  }
  if (document.body> 1200 || document.documentElement.scrollTop > 1200) {
    document.getElementById("header").style.display = "none";
   
   
  } else {
    
    document.getElementById("header").style.display = ""
    
    
  }
  // document.getElementById("header").style.display = "none";
}

// scrolling content method "window.scrollBy(parameters)"
var cardscroll = document.getElementById("scroll");
// set scroll position in px

function scrollWin(x, y) {
  cardscroll.scrollBy(x, y); 
//here "x" and "y" represents "axis" 
}
var imgscroll = document.getElementById("img-scroll");

function scrollImg(x, y) {
  imgscroll.scrollBy(x, y); 
//here "x" and "y" represents "axis" 

}

var screenSize = window.matchMedia("(max-width: 991px)")
myFunction(screenSize);
function myFunction(screenSize) {
  if (screenSize.matches) { // If media query matches
    cardscroll.scrollLeft = 100;
    imgscroll.scrollLeft = 90;
  } else {
    cardscroll.scrollLeft = "";
  }
}

// context change using javascript function and json literals 
const courseContent ={pythn:["Expand your career opportunities with Python","Whether you work in machine learning or finance, or are pursuing a career in web development or data science, Python is one of the most important skills you can learn. Python's simple syntax is especially suited for desktop, web, and business applications. Python's design philosophy emphasizes readability and usability. Python was"],
                      excel:["Analyze and visualize data with Excel","Regardless of the industry you work in, Microsoft Office Excel is an invaluable spreadsheet program for organizing and representing data. Excel offers functions, formulas, and pivot tables to help you aggregate and then analyze large sets of information. Excel first truly appeared on the scene way back in 1987, when a version"]};






                      
// switch statesment 

var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
  switch (n){
     case 1:
           document.getElementById("h2content_coursesHeadline").innerHTML =courseContent.pythn[0];
           document.getElementById("pcontent_coursesHeadline").innerHTML =courseContent.pythn[1];
          
     break;
     case 2:
      document.getElementById("h2content_coursesHeadline").innerHTML =courseContent.excel[0];
      document.getElementById("pcontent_coursesHeadline").innerHTML =courseContent.excel[1];
     break;
     case 3:
      document.getElementById("h2content_coursesHeadline").innerHTML =courseContent.arry1[0];
      document.getElementById("pcontent_coursesHeadline").innerHTML =courseContent.arry1[n];
     break;  
     case 4:
      document.getElementById("h2content_coursesHeadline").innerHTML =courseContent.arry1[0];
      document.getElementById("pcontent_coursesHeadline").innerHTML =courseContent.arry1[1];
     break;
     case 5:
      document.getElementById("h2content_coursesHeadline").innerHTML =courseContent.arry1[0];
      document.getElementById("pcontent_coursesHeadline").innerHTML =courseContent.arry1[1];
     break;
     case 6:
      document.getElementById("h2content_coursesHeadline").innerHTML =courseContent.arry1[0];
      document.getElementById("pcontent_coursesHeadline").innerHTML =courseContent.arry1[1];
     break;
     case 7:
      document.getElementById("h2content_coursesHeadline").innerHTML =courseContent.arry1[0];
      document.getElementById("pcontent_coursesHeadline").innerHTML =courseContent.arry1[1];
     break;
     case 8:
      document.getElementById("h2content_coursesHeadline").innerHTML =courseContent.arry1[0];
      document.getElementById("pcontent_coursesHeadline").innerHTML =courseContent.arry1[1];
     case 9:
      document.getElementById("h2content_coursesHeadline").innerHTML =courseContent.arry1[0];
      document.getElementById("pcontent_coursesHeadline").innerHTML =courseContent.arry1[1];
     break;

}
}

function showSlides(n) {
  var i;

  var btnCourseNav = document.getElementsByClassName("course_nav");
  if (n > btnCourseNav.length) {slideIndex = 1};
  if (n < 1) {slideIndex = btnCourseNav.length};

  for (i = 0; i < btnCourseNav.length; i++) {
    btnCourseNav[i].className = btnCourseNav[i].className.replace(" course_active", "");
  }
  
  btnCourseNav[slideIndex-1].className += " course_active";
}



