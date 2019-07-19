document.getElementById('name').style.fontSize = '50px';

const camp = document.getElementsByClassName('camp');

camp[0].style.border = '2px solid blue';

document.getElementsByTagName('div')[0]
.style.backgroundColor = 'red';



document.querySelector('div').style.backgroundColor = 'grey';

console.log(document.querySelectorAll('div'));

// Assignment
// Add padding to the paragraphs
document.querySelectorAll('.container').forEach(item => {
    console.log(item);
    item.style.backgroundColor = 'green';
});

// Click evenxt
document.querySelector('button').addEventListener('click', () => window.location.href = 'index2.html');


document.querySelector('button').addEventListener('mouseover', () => document.querySelector('button').style.backgroundColor = 'red');

document.querySelector('button').addEventListener('mouseleave', () => document.querySelector('button').style.backgroundColor = 'blue');



// const alertMessage = () => alert('Hello!!!!');