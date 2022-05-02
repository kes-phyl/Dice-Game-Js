
//generate the random numbers from 1-6(same as the dice).

const firstRandomNumber = Math.floor(Math.random() *6) + 1;
 
//getting the picture
//same as images/dice1.png to images/dice6.png.
/* interpolating strings*/
//const firstDiceImage =  'assets/dice' + firstRandomNumber + '.png';
const firstDiceImage = `assets/dice${firstRandomNumber}.png`;

//targetting the image.

document.querySelectorAll('img')[0].setAttribute('src', firstDiceImage);


//creating the second random numbers.

const secondRandomNumber = Math.floor(Math.random() *6 )+1;

//getting the second dice image.
//same as writing images/dice1.png up to images/dice6.png.
/* interpolating strings*/
//const secondDiceImage = 'assets/dice' + secondRandomNumber + '.png';
const secondDiceImage = `assets/dice${secondRandomNumber}.png`;
//targetting the image.

document.querySelectorAll('img')[1].setAttribute('src', secondDiceImage);

if(firstDiceImage > secondDiceImage){
    document.querySelector('h1').innerHTML = 'Winner is User1!';
}else if(firstDiceImage < secondDiceImage){
    document.querySelector('h1').innerHTML = 'Winner is User 2!';
}else {
    document.querySelector('h1').innerHTML = 'Its a Draw!';
}