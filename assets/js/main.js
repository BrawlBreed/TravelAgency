//slider gallery

var sliderIndex = 0;
var slider = document.getElementsByClassName("slider")[0];
var prev = document.getElementById("prev");
var next = document.getElementById("next");

showSlider();

function showSlider() {
    sliderIndex++;
    if (sliderIndex > 2) {
        sliderIndex = 0;
    }
    slider.style.transform = "translateX(-" + sliderIndex * 100 + "%)";
    setTimeout(showSlider, 3000);
}

prev.addEventListener("click", function() {
    sliderIndex--;
    if (sliderIndex < 0) {
        sliderIndex = 2;
    }
    slider.style.transform = "translateX(-" + sliderIndex * 100 + "%)";
});

next.addEventListener("click", function() {
    sliderIndex++;
    if (sliderIndex > 2) {
        sliderIndex = 0;
    }
    slider.style.transform = "translateX(-" + sliderIndex * 100 + "%)";
});
// window open
function openWindow(){
    document.getElementById('window').style.display = "block";

}
var htmlString2 = `
<img src="assets/resources/error.png" alt="close" class="close" onclick="closeWindow()">
  <div class="row">
    <div class="col-md-6 window_one">
      <h3>Екскурзия до</h3>
      <h4>Градска художествена галерия</h4>
      <img src="assets/resources/gallery.jpg" alt="excursion">
    </div>
    <div class="col-md-6 window_two">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis delectus debitis quibusdam tenetur adipisci labore sed et reiciendis minus, rerum veritatis dignissimos accusamus asperiores quis eos nesciunt quaerat distinctio qui!
      </p>
      <ul>
        <li><img src="assets/resources/time.svg" alt="time">Времетраене: 1час</li>
        <li><img src="assets/resources/wallet.svg" alt="wallet">Цена: 30лв.</li>
      </ul>
    </div>
  </div>
`;

function openWindow2(){
    document.getElementById('window').style.display = "block";
    document.getElementById('window').innerHTML = htmlString2;
}
var htmlString3 = `
<img src="assets/resources/error.png" alt="close" class="close" onclick="closeWindow()">
  <div class="row">
    <div class="col-md-6 window_one">
      <h3>Екскурзия до</h3>
      <h4>римски терми</h4>
      <img src="assets/resources/termi.jpg" alt="excursion">
    </div>
    <div class="col-md-6 window_two">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis delectus debitis quibusdam tenetur adipisci labore sed et reiciendis minus, rerum veritatis dignissimos accusamus asperiores quis eos nesciunt quaerat distinctio qui!
      </p>
      <ul>
        <li><img src="assets/resources/time.svg" alt="time">Времетраене: 2часа</li>
        <li><img src="assets/resources/wallet.svg" alt="wallet">Цена: 40лв.</li>
      </ul>
    </div>
  </div>
`;
function openWindow3(){
    document.getElementById('window').style.display = "block";
    document.getElementById('window').innerHTML = htmlString3;
}
var htmlString4 = `
<img src="assets/resources/error.png" alt="close" class="close" onclick="closeWindow()">
  <div class="row">
    <div class="col-md-6 window_one">
      <h3>Екскурзия до</h3>
      <h4>Аладжа манастир</h4>
      <img src="assets/resources/monastery.jpg" alt="excursion">
    </div>
    <div class="col-md-6 window_two">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis delectus debitis quibusdam tenetur adipisci labore sed et reiciendis minus, rerum veritatis dignissimos accusamus asperiores quis eos nesciunt quaerat distinctio qui!
      </p>
      <ul>
        <li><img src="assets/resources/time.svg" alt="time">Времетраене: 3часа</li>
        <li><img src="assets/resources/wallet.svg" alt="wallet">Цена: 60лв.</li>
      </ul>
    </div>
  </div>
`;
function openWindow4(){
    document.getElementById('window').style.display = "block";
    document.getElementById('window').innerHTML = htmlString4;
}
var htmlString5 = `
<img src="assets/resources/error.png" alt="close" class="close" onclick="closeWindow()">
  <div class="row">
    <div class="col-md-6 window_one">
      <h3>Екскурзия до</h3>
      <h4>Резденция евксиноград</h4>
      <img src="assets/resources/evksinograd.jpg" alt="excursion">
    </div>
    <div class="col-md-6 window_two">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis delectus debitis quibusdam tenetur adipisci labore sed et reiciendis minus, rerum veritatis dignissimos accusamus asperiores quis eos nesciunt quaerat distinctio qui!
      </p>
      <ul>
        <li><img src="assets/resources/time.svg" alt="time">Времетраене: 3часа</li>
        <li><img src="assets/resources/wallet.svg" alt="wallet">Цена: 90лв.</li>
      </ul>
    </div>
  </div>
`;
function openWindow5(){
    document.getElementById('window').style.display = "block";
    document.getElementById('window').innerHTML = htmlString5;
}
var htmlString6 = `
<img src="assets/resources/error.png" alt="close" class="close" onclick="closeWindow()">
  <div class="row">
    <div class="col-md-6 window_one">
      <h3>Екскурзия до</h3>
      <h4>музей на куклите</h4>
      <img src="assets/resources/dolls.jpg" alt="excursion">
    </div>
    <div class="col-md-6 window_two">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis delectus debitis quibusdam tenetur adipisci labore sed et reiciendis minus, rerum veritatis dignissimos accusamus asperiores quis eos nesciunt quaerat distinctio qui!
      </p>
      <ul>
        <li><img src="assets/resources/time.svg" alt="time">Времетраене: 2часа</li>
        <li><img src="assets/resources/wallet.svg" alt="wallet">Цена: 40лв.</li>
      </ul>
    </div>
  </div>
`;
function openWindow6(){
    document.getElementById('window').style.display = "block";
    document.getElementById('window').innerHTML = htmlString6;
}
function closeWindow(){
    document.getElementById('window').style.display = "none";
}
// function for colors 
// function color(){
//   let span = document.getElementsByClassName('spans')
//   for (var i = 0; i < span.length; i++) {
//     span[i].classList.toggle("color")
//   }
// }
function color1(){
  document.getElementById('span1').classList.toggle("color")
}
function color2(){
  document.getElementById('span2').classList.toggle("color")
}
function color3(){
  document.getElementById('span3').classList.toggle("color")
}
function color4(){
  document.getElementById('span4').classList.toggle("color")
}
function color5(){
  document.getElementById('span5').classList.toggle("color")
}
function color6(){
  document.getElementById('span6').classList.toggle("color")
}
function color7(){
  document.getElementById('span7').classList.toggle("color")
}
function color8(){
  document.getElementById('span8').classList.toggle("color")
}

// mobile slider



// function showSliderM() {
//   sliderM.style.transform = "translateX(-" + sliderIndexM * 100 + "%)";
// }




var slidesM = document.querySelectorAll(".sliderM img");
var numSlides = slidesM.length;
var sliderIndexM = 0;

var dots = document.querySelectorAll(".dot");

showSliderM();

function showSliderM() {
  for (var i = 0; i < numSlides; i++) {
    if (i === sliderIndexM) {
      slidesM[sliderIndexM].style.display = "block";
      dots[i].classList.add("active");
    } else {
      slidesM[i].style.display = "none";
      dots[i].classList.remove("active");
    }
  }
}

dots.forEach(function(dot) {
  dot.addEventListener("click", function() {
    var dotIndex = Array.from(dots).indexOf(dot);
    sliderIndexM = dotIndex;
    showSliderM();
  });
});

// function openNav(){
//   document.getElementById("hamMenu").style.display = "block"
// }

//function show articles mobile
function showArticles() {
  let articles = document.querySelectorAll('.article_services2 article');
  articles.forEach(article => {
    if (article.style.display === "none") {
      article.style.display = "block";
      setTimeout(() => {
        article.classList.add('show');
      }, 10);
    } else {
      article.classList.remove('show');
      setTimeout(() => {
        article.style.display = "none";
      }, 500);
    }
  });
}
