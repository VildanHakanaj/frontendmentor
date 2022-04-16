const card = document.querySelector('.card');
const submit = document.querySelector('button');
const submission = document.getElementById('submission');

const items = [...document.querySelectorAll('.card_body__ratings--item')];
items[items.length -1].classList.add('selected');
let selectedNumber = 5;

items.forEach((item) => {
    item.addEventListener('click', (e) => {
        selectedNumber = item.dataset.rating;
        removeSelected(items);
        item.classList.add('selected');
    });
})

const removeSelected = (items, item) => {
    items.forEach(element => {
        element.classList.remove('selected');
    });
}


submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("Here");
    updateContent();

});


function updateContent(){

    submission.style.display = 'none';

    let thank_you = document.createElement('div');

    thank_you.classList.add('thank__you');

    thank_you.innerHTML = `<img src="./images/illustration-thank-you.svg" alt="">
          
    <p class="out-of">
        You selected ${selectedNumber} out of 5
    </p>

    <h2>Thank you!</h2>
    <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>`


    card.appendChild(thank_you);


}
