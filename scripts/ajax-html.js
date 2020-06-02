
    /* document.getElementById('rhino')
        .addEventListener('click',rhino);
    document.getElementById('zbrush')
        .addEventListener('click',zbrush);
    document.getElementById('matrix')
        .addEventListener('click',matrix);
    document.getElementById('design')
        .addEventListener('click',design);

    function rhino(){
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                document.getElementById('get-html-rhino')
                    .innerHTML = xhr.responseText;
            } 
        }
        xhr.open('GET','form/rhino-form.html',true);
        xhr.send();
        document.querySelector('.rhinoLess').classList.toggle('rhinoDel');  
    }

    function zbrush(){
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                document.getElementById('get-html-zbrush')
                    .innerHTML = xhr.responseText;
            } 
        }
        xhr.open('GET','form/zbrush-html.html',true);
        xhr.send();
        document.querySelector('.zbrushLess').classList.toggle('zbrushDel'); 
    }


    function matrix(){
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                document.getElementById('get-html-matrix')
                    .innerHTML = xhr.responseText;
            } 
        }
        xhr.open('GET','form/matrix-html.html',true);
        xhr.send();
        document.querySelector('.matrixLess').classList.toggle('matrixDel'); 
    }

    function design(){
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                document.getElementById('get-html-design')
                    .innerHTML = xhr.responseText;
            } 
        }
        xhr.open('GET','form/design-html.html',true);
        xhr.send();
        document.querySelector('.designLess').classList.toggle('designDel'); 
    } */

    document.querySelectorAll('#but')
	    .forEach(element => element.addEventListener('click', getAjaxElement));

function getAjaxElement(e) {
	let clickedButton = e.target.value;
	const xhr = new XMLHttpRequest();
	let past;
	let openXHR;
	let changeClass;
	if (clickedButton == "rhino") {
		past = document.getElementById('get-html-rhino');
		openXHR = xhr.open('GET', 'form/rhino-form.html', true);
		changeClass = document.querySelector('.rhinoLess').classList.toggle('rhinoDel');
	} else if (clickedButton == "zbrush") {
		past = document.getElementById('get-html-zbrush');
		openXHR = xhr.open('GET', 'form/zbrush-html.html', true);
		changeClass = document.querySelector('.zbrushLess').classList.toggle('zbrushDel');
	} else if (clickedButton == "matrix") {
		past = document.getElementById('get-html-matrix');
		openXHR = xhr.open('GET', 'form/matrix-html.html', true);
		changeClass = document.querySelector('.matrixLess').classList.toggle('matrixDel');
	} else {
		past = document.getElementById('get-html-design');
		openXHR = xhr.open('GET', 'form/design-html.html', true);
		changeClass = document.querySelector('.designLess').classList.toggle('designDel');
	}
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status === 200) {
			past.innerHTML = xhr.responseText;
		}
	}
	openXHR;
	xhr.send();
	changeClass;

}
