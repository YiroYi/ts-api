import dotenv from 'dotenv'
dotenv.config();
const apiKey = process.env.MAP_BOX_API_KEY

const form = document.querySelector('form')!;
const addressInput = document.querySelector('address')! as HTMLInputElement;

function searchAdressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;
}

form.addEventListener('submit', searchAdressHandler);
