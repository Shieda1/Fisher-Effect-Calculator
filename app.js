// https://www.omnicalculator.com/finance/fisher-effect

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const realinterestrateRadio = document.getElementById('realinterestrateRadio');
const nominalinterestrateRadio = document.getElementById('nominalinterestrateRadio');
const expectedinflationRadio = document.getElementById('expectedinflationRadio');

let realinterestrate;
let nominalinterestrate = v1;
let expectedinflation = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

realinterestrateRadio.addEventListener('click', function() {
  variable1.textContent = 'Nominal interest rate';
  variable2.textContent = 'Expected inflation';
  nominalinterestrate = v1;
  expectedinflation = v2;
  result.textContent = '';
});

nominalinterestrateRadio.addEventListener('click', function() {
  variable1.textContent = 'Real interest rate';
  variable2.textContent = 'Expected inflation';
  realinterestrate = v1;
  expectedinflation = v2;
  result.textContent = '';
});

expectedinflationRadio.addEventListener('click', function() {
  variable1.textContent = 'Real interest rate';
  variable2.textContent = 'Nominal interest rate';
  realinterestrate = v1;
  nominalinterestrate = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(realinterestrateRadio.checked)
    result.textContent = `Real interest rate = ${computerealinterestrate().toFixed(2)}`;

  else if(nominalinterestrateRadio.checked)
    result.textContent = `Nominal interest rate = ${computenominalinterestrate().toFixed(2)}`;

  else if(expectedinflationRadio.checked)
    result.textContent = `Expected inflation = ${computeexpectedinflation().toFixed(2)}`;
})

// calculation

function computerealinterestrate() {
  return Number(nominalinterestrate.value) - Number(expectedinflation.value);
}

function computenominalinterestrate() {
  return Number(realinterestrate.value) + Number(expectedinflation.value);
}

function computeexpectedinflation() {
  return Number(nominalinterestrate.value) - Number(realinterestrate.value);
}