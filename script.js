function openP() {
    document.getElementById("myForm").style.display = "block";
    document.getElementById("open-button").innerText = "<";
    document.getElementById("open-button").style.left = "300px";
    document.getElementById("open-button").onclick = close;

}

function close() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("open-button").innerText = ">";
    document.getElementById("open-button").style.left = "0px";
    document.getElementById("open-button").onclick = openP;
}

let slideIndex = 1;
showSlides(slideIndex);


function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function updateSeoulTime() {
    const now = new Date();
    const options = {
        timeZone: 'Asia/Seoul',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };
    const seoulTime = new Intl.DateTimeFormat('en-GB', options).formatToParts(now);

    const date = `${seoulTime.find(part => part.type === 'year').value}-${seoulTime.find(part => part.type === 'month').value}-${seoulTime.find(part => part.type === 'day').value}`;
    const time = `${seoulTime.find(part => part.type === 'hour').value}:${seoulTime.find(part => part.type === 'minute').value}:${seoulTime.find(part => part.type === 'second').value}`;
    
    document.getElementById('koreanTime').innerText = `GMT+9 ${date} ${time}`;
}

setInterval(updateSeoulTime, 1000);
updateSeoulTime();



function addnum(num){
    let result = document.getElementById('result')
    let number = parseInt(result.innerText)
    number+=num
    result.innerText=number
}

function clearNum(){
    document.getElementById('result').innerText=0

}

var swiper = new Swiper(".mySwiper", { 
    direction: "vertical", 
    pagination: { 
      el: ".swiper-pagination", 
      clickable: true, 
    }, 
  }); 