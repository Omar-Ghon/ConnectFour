'use strict'

const helpBtn = document.querySelector('.btnHelp');
const help = document.querySelector('.help--window');
const overlay = document.querySelector('.overlay');

helpBtn.addEventListener('click', function () {
    help.classList.remove('hidden');
    overlay.classList.remove('hidden');
});

overlay.addEventListener('click', function() {
    help.classList.add('hidden');
    overlay.classList.add('hidden');
});
