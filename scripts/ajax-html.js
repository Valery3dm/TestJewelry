document.getElementById('rhino')
    .addEventListener('click',getHTML);
    function getHTML(){
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                document.getElementById('get-html-rhino')
                    .innerHTML = xhr.responseText;
            } 
        }
        xhr.open('GET','rhino-form.html',true);
        xhr.send();
    }

document.getElementById('zbrush')
    .addEventListener('click',getHTML);
    function getHTML(){
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                document.getElementById('get-html-zbrush')
                    .innerHTML = xhr.responseText;
            } 
        }
        xhr.open('GET','zbrush-html.html',true);
        xhr.send();
    }

document.getElementById('matrix')
    .addEventListener('click',getHTML);
    function getHTML(){
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                document.getElementById('get-html-matrix')
                    .innerHTML = xhr.responseText;
            } 
        }
        xhr.open('GET','matrix-html.html',true);
        xhr.send();
    }

document.getElementById('design')
    .addEventListener('click',getHTML);
    function getHTML(){
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                document.getElementById('get-html-design')
                    .innerHTML = xhr.responseText;
            } 
        }
        xhr.open('GET','design-html.html',true);
        xhr.send();
    }
