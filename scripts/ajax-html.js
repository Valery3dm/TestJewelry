
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

    document.querySelectorAll('but')
        .forEach(element =>
            element.addEventListener('click',getAjaxElement));
        
        let buttonName = document.getElementById('but').value;
        
        function getAjaxElement(){

            if (buttonName == "rhino") {
                console.log("rhino")
            }else if(buttonName == "zbrush"){
                console.log("zbrush")
            }else if(buttonName == "matrix"){
                console.log("matrix")
            }else if(buttonName == "3Design"){
                console.log("3Design")
            }else{
                console.log("ERORR")
            }
        }

