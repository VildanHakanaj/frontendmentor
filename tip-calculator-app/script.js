const billAmountEl = document.getElementById("total_amount");
const tipButtons = document.querySelectorAll('button.tip');
const customInput = document.querySelector('.custom-input');
const numPeopleEl = document.getElementById('num_people');
const errorEl = document.getElementById('error_message');
const tipPerPersonEl = document.getElementById('tip_per_person');
const totalPerPersonEl = document.getElementById('total_per_person');
const resetEl = document.getElementById('reset');

let tipAmount = 0;
let billAmount = 0;
let customInputValue = 0;
let numPep = 0;


tipButtons.forEach((button) => {

    button.addEventListener('click', (e)=> {

        removeSelected();
        button.classList.add('selected');

        tipAmount = parseInt(e.target.dataset.tip);

        if(!tipAmount){
            tipAmount = 0;
        }

        customInput.value = "";
    });

});

function removeSelected(){
    tipButtons.forEach((button) => {
        button.classList.remove('selected');
    });
}


billAmountEl.addEventListener('blur', (e) => {
    billAmount = parseInt(e.target.value);
    if(!billAmount){
        billAmount = 0;
    }
});


customInput.addEventListener('blur', () => {
    let value = customInput.value;

    if(value && !isNaN(value)){
        removeSelected();
        tipAmount = parseInt(value);
    }
});


numPeopleEl.addEventListener('blur', (e) => {

    numPep = parseInt(e.target.value);

    if(isNaN(numPep) || numPep === 0){
        errorEl.classList.remove('hidden');
    }else{
        calculateNumbers(numPep);
    }

});

function calculateNumbers(numPep){
    let totalTip = billAmount * (tipAmount / 100);
    let tipPerPerson = totalTip / numPep;
    let totalAmountPerPerson = tipPerPerson + (billAmount / numPep);
    
    tipPerPersonEl.innerText = `$${tipPerPerson.toFixed(2)}`;
    totalPerPersonEl.innerText = `$${totalAmountPerPerson.toFixed(2)}`;
}

resetEl.addEventListener('click', (e) => {
    e.preventDefault();
    tipPerPersonEl.innerText = `$0`;
    totalPerPersonEl.innerText = `$0`;

    removeSelected();

    customInput.value = "";
    billAmountEl.value = "";
    numPeopleEl.value = "";

    tipAmount = 0;
    billAmount = 0;
    customInputValue = 0;
    numPep = 0;


})

