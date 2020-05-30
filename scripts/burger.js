(function () { 
    document.getElementById('burgerImg')
    .addEventListener('click',burger);
function burger() {
    const classList = document.querySelector('.active ul').classList.toggle('hidden');   
}
}());
