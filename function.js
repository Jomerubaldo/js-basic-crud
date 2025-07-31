const input = document.querySelector('#inputText');
const button = document.querySelector('button');
const list = document.querySelector('#list');

const myFunction = () => {
  const name = input.value;
  const li = document.createElement('li');

  li.textContent = name;
  list.appendChild(li);

  // every submit automatically clear input text
  input.value = '';
};

button.addEventListener('click', myFunction);
