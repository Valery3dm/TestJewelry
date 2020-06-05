(function () { 

document.querySelectorAll('#but')
	.forEach(element => element.addEventListener('click', getAjaxElement));

    function getAjaxElement(e) {
    
	const clickedButton = e.target.value;
    const xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById(`get-html-${clickedButton}`)
                .innerHTML = xhr.responseText;
        } 
    }
    xhr.open('GET',`form/${clickedButton}-form.html`,true);
    xhr.send();
    document.querySelector(`.${clickedButton}Less`).classList.toggle(`${clickedButton}Del`); 
}

}());
