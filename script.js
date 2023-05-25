'use strict';
var current = 0;
var scores = [0,0];
var active = 0;
var playing = 0;
var rollDice = function()
{
    var dice = ["dice-1.png", "dice-2.png", "dice-3.png", "dice-4.png", "dice-5.png", "dice-6.png"];
    var a = Math.floor(Math.random() * 6);
    document.querySelector('img').src = dice[a];
    current = a + 1;
}
var updateCurrent = function()
{
    scores[active] += current;
    document.getElementById('current--' + active).textContent = scores[active];
    current = 0;
    console.log('current--' + active);
}
var switchPlayer = function()
{
    document.querySelector('.player--' + active).classList.remove('player--active');
    if(active == 0)
    {
        active = 1;
    }
    else
        active = 0;
    
    document.querySelector('.player--' + active).classList.add('player--active');
}

document.querySelector(".btn--roll").addEventListener('click', function(){
    if(playing == 0) 
    {   
        document.querySelector('.dice').classList.remove('hidden');
        rollDice();
        if(current == 1)
        {
            document.getElementById('current--' + active).textContent = 0;
            current = 0;
            switchPlayer();
            return;
        }
        updateCurrent();
    }
});
document.querySelector(".btn--hold").addEventListener('click', function(){
    if(playing == 0)
    {
        current = 0;
        document.getElementById('score--' + active).textContent = scores[active];
        document.getElementById('current--' + active).textContent = 0;
        if(scores[active] >= 30)
        {
            playing = 1;
            document.querySelector('.player--' + active).classList.add('player--winner');
            document.querySelector('.dice').classList.add('hidden');
            return;
        }
        switchPlayer();
        document.querySelector('.dice').classList.add('hidden');
    }
});
document.querySelector('.btn--new').addEventListener('click', function()
{
    current = 0;
    document.querySelector('.player--' + active).classList.remove('player--winner');
    document.querySelector('#score--0').textContent = 0;
    document.querySelector('#score--1').textContent = 0;
    document.querySelector('#current--0').textContent = 0;
    document.querySelector('#current--1').textContent = 0;
    scores[0] = 0;
    scores[1] = 0;
    active = 0;
    playing = 0;
    document.querySelector('.player--' + active).classList.add('player--active');
    active = 1;
    document.querySelector('.player--' + active).classList.remove('player--active');
    active = 0;
    document.querySelector('.dice').classList.add('hidden');
})
