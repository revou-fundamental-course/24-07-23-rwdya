const yname = document.getElementById("yname")
const email = document.getElementById("email")
const interest = document.getElementById("interest")
const sendbuutton = document.getElementById("send")

sendbuutton.addEventListener("click", function(event) {
    event.preventDefault()
    yname.value
    email.value
    if (yname.value == "" || email.value == "" || interest.value == "" ){
        alert("name, email, or interest empty!")
    }
})

slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
