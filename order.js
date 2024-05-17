let name = document.querySelector(".name")
let city = document.querySelector(".city")
let mobile = document.querySelector(".mobile")
let Address = document.querySelector(".Address")
let btn = document.querySelector(".btn")


let done = ()=>{

    if(name.value && city.value && mobile.value && Address.value ){
        alert("Please Order Successfully")
        window.location.href="index.html";
    }
    else{("Please Fill The Details")}
}
done();

btn.addEventListener("click", done);