let byId = document.getElementById('firstElement');
let byClass = document.querySelector('.secondElement');
let byTag = document.getElementsByTagName('p')[2];

byId.style.color = 'white';
byId.style.backgroundColor = 'darkblue';
byId.style.fontSize = '20px';
byId.style.fontStyle = 'italic';
byId.textContent = 'ID-ით მონიშნული ელემენტი';

byClass.style.color = 'black';
byClass.style.backgroundColor = 'lightgreen';
byClass.style.fontSize = '18px';
byClass.style.fontWeight = 'bold';
byClass.textContent = 'კლასით მონიშნული ელემენტი';

byTag.style.color = 'purple';
byTag.style.backgroundColor = 'pink';
byTag.style.fontSize = '16px';
byTag.style.textDecoration = 'italic';
byTag.textContent = 'ჩვეულებრივი ელემენტი';