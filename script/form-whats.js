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
        window.location.assign(`https://wa.me/5535998876688%text=Nome:+${name}%0AAssunto:+${assunto}%0AMensagem:+${message}`)
    }
    
})
