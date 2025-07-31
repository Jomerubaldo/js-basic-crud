const input = document.querySelector('#inputText');
const button = document.querySelector('button');
const list = document.querySelector('#list');

const myFunction = () => {
  const name = input.value;
  if (name === '') return;

  const li = document.createElement('li');

  // set text first
  const text = document.createElement(name);
  li.appendChild(text);

  // update button
  const updateBtn = document.createElement('button');
  updateBtn.textContent = 'Update';
  updateBtn.style.marginLeft = '10px';

  // delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.style.marginLeft = '5px';

  // update logic
  updateBtn.addEventListener('click', () => {
    const newName = prompt('Update your item: ', li.firstChild.textContent);

    if (newName !== null && newName.trim() !== '') {
      li.firstChild.textContent = newName;
    }
  });

  // delete logic
  deleteBtn.addEventListener('click', () => {
    list.removeChild(li);
  });

  // I don't know where to put this so i guest there
  // because if i remove  this cant see the input text
  li.textContent = name;

  // append button for update and delete after the text
  li.appendChild(updateBtn);
  li.appendChild(deleteBtn);
  list.appendChild(li);

  // every submit automatically clear input text
  input.value = '';
};

button.addEventListener('click', myFunction);
