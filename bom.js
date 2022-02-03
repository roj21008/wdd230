
  const list = document.querySelector('#list');
  const input = document.querySelector('#favchap');
  const buildbutton = document.querySelector('button');

  buildbutton.addEventListener('click', ()=> {
    let newItem = input.value;
    input.value = '';

    let listItem = document.createElement('li');
    let listText = document.createElement('span');
    let listBtn = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = newItem;
    listItem.appendChild(listBtn);
    listBtn.textContent = '❌';
    list.appendChild(listItem);

    listBtn.onclick = function(e) {
        list.removeChild(listItem);
      }

      input.focus();  
})