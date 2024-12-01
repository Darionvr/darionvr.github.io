const card = document.querySelector('.card');
const number = document.querySelector('.number');
const submitButton = document.querySelector('#submitButton');
let selectedRating = '';

const rateStage = `
    <img class="starIcon" src="./images/icon-star.svg" alt="">
    <h1 class="title">How did we do?</h1>
    <p class="subtitle"> Please  let us know how we did with your support request. All feedback is appreciated
      to help us improve our offering!</p>
    <div class="rating">
      <button onclick="rating(1, this)" class="number" >1</button>
      <button onclick="rating(2, this)" class="number" >2</button>
      <button onclick="rating(3, this)" class="number" >3</button>
      <button onclick="rating(4, this)" class="number" >4</button>
      <button onclick="rating(5, this)" class="number" >5</button>
    </div>
    <button id="submitButton" onclick="change()"> SUBMIT </button>`;


card.innerHTML = rateStage;


function change() {
    const thankyouStage = ` 
    <img  class="posImage" src="images/illustration-thank-you.svg" alt="">
<div class="selected">You selected ${selectedRating} out of 5</div>
<div class="thankyouText">
<h1>Thank you! </h1>
<p>We appreciate you taking the time to give a rating. If you ever need more support,
  don’t hesitate to get in touch! </p>
</div>`;

    card.innerHTML = thankyouStage;
};

function rating(valor, element) {

    selectedRating = valor;

    document.querySelectorAll('.number').forEach(button => { button.classList.remove('selectedButton'); });

    element.classList.add('selectedButton');


};