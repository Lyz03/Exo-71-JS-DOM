let monDiv = document.createElement('div');
monDiv.innerText = "Ce div a été ajouté en utilisant javascript";

let secondDiv = document.createElement('div');
secondDiv.style.backgroundColor = 'red';
secondDiv.style.width = '100px';
secondDiv.style.height = '100px';


document.getElementById('viewport').appendChild(secondDiv);

document.getElementById('viewport').appendChild(monDiv);

document.getElementById('aSupprimer').remove();






