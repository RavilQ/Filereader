let file = document.getElementById("file");
let read = document.getElementById("read");


read.addEventListener("click",()=>{

    let reader = new FileReader();
    for (let index = 0; index <file.files.length; index++) {
        reader.readAsText(file.files[index]);
    }
        
    reader.onload = function () {
        console.log(reader.result);
    }
    reader.onerror = function () {
        console.log(reader.error);
    }
})