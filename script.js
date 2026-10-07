const form = document.querySelector('#weight-form');
const weightInput = document.querySelector('#weight');
const totalOutput = document.querySelector('#total');
const currency = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
const PRICE_PER_KILO_IN_CENTS = 6000;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const grams = Number(weightInput.value);
  const cents = Math.round(grams * PRICE_PER_KILO_IN_CENTS / 1000);
  totalOutput.value = currency.format(cents / 100);
});
