const toggleactive = document.querySelector("#btn-modal"),
    modalactive = document.querySelector('.card-main'),
    modalshow = document.querySelector(".modal"),
    btnexit = document.querySelector(".exit");

let btndarkmode = document.querySelector(".btn-dark-mode");

toggleactive.addEventListener("click", ()=> {
    modalactive.classList.add('off');
    modalshow.classList.toggle('active')
    modalshow.classList.remove("off")
});

btnexit.addEventListener("click", () => {
    modalshow.classList.remove('active')
    modalactive.classList.remove('off');
})

btndarkmode.addEventListener("click", () => {
    if (btndarkmode.classList.contains("active")== true) {
        btndarkmode.classList.add("offreturn");
        btndarkmode.classList.remove("active");
 
    }else{
        btndarkmode.classList.add("active");
        btndarkmode.classList.remove("offreturn");
    }
    
});
