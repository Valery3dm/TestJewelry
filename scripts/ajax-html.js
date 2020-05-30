(function () {
    document.getElementById('rhino')
    .addEventListener('click',rhino);
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
    }

document.getElementById('zbrush')
    .addEventListener('click',zbrush);
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
    }

document.getElementById('matrix')
    .addEventListener('click',matrix);
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
    }

document.getElementById('design')
    .addEventListener('click',design);
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
    }

 }());
