// const buttons = document.querySelectorAll("button");

// buttons.addEventListener('mousemove', () => {
//     buttons.style.opacity='1'
// })

const btn = document.querySelector("#submit");


btn.addEventListener("click", e => {
    e.preventDefault();
    const name = document.querySelector("#nome").value;
    const assunto = document.querySelector("#assunto").value;
    const message = document.querySelector("#mens").value; 
    if(name=== "" || assunto === "" || message === ""){
        alert('Selecione um tratamento')
    }else{
        message.replace(" ", "+")
        console.log(assunto)
        window.location.assign(`mailto:davidalbertcorrea90@gmail.com?subject=&body=Nome:${name}%0AAssunto:${assunto}%0AMensagem:${message}`)
    }
    
})
