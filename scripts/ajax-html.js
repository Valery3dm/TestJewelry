
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
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
                past.innerHTML = xhr.responseText;
        } 
    }

    if (clickedButton == "rhino") {
        let past = document.getElementById('get-html-rhino');
		let openXHR = xhr.open('GET', 'form/rhino-form.html', true);
		let changeClass = document.querySelector('.rhinoLess').classList.toggle('rhinoDel');
	} else if (clickedButton == "zbrush") {
        let past = document.getElementById('get-html-zbrush');
		let openXHR = xhr.open('GET', 'form/zbrush-html.html', true);
		let changeClass = document.querySelector('.zbrushLess').classList.toggle('zbrushDel');
	} else if (clickedButton == "matrix") {
        let past = document.getElementById('matrixLess');
		let openXHR = xhr.open('GET', 'form/matrix-html.html', true);
		let changeClass = document.querySelector('.matrixLess').classList.toggle('matrixDel');
	} else {
        let past = document.getElementById('get-html-design');
		let openXHR = xhr.open('GET', 'form/design-html.html', true);
		let changeClass = document.querySelector('.designLess').classList.toggle('designDel');
	}
    openXHR;
    xhr.send();
	changeClass;

}
