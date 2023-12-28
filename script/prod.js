const prod = document.querySelectorAll(".p-im");
const modal = document.getElementById("modal_container");
const fechar = document.getElementById("fechar");

prod.forEach(produtos => {
    produtos.onclick = () => {
        let selectedProdutos = produtos.dataset.produtos;
        
        modal.querySelector("h2").innerHTML = produtosinfo[selectedProdutos].title;
        modal.querySelector("p").innerHTML = produtosinfo[selectedProdutos].text;

        modal.dataset.active = "true"

    }
})

fechar.onclick = () => {
    modal.dataset.active = "false"
}

const produtosinfo = {
    caminhao_grande: {
        title: "Caminhão grande",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur quos labore, minus ullam nobis quibusdam, perspiciatis fugiat repellat voluptatum iste vel numquam dolorum assumenda quis. Corrupti aspernatur odit omnis enim!",
    },
    barco: {
        title: "Barco",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur quos labore, minus ullam nobis quibusdam, perspiciatis fugiat repellat voluptatum iste vel numquam dolorum assumenda quis. Corrupti aspernatur odit omnis enim!",
    },
    caroboi: {
        title: "Carro de boi",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur quos labore, minus ullam nobis quibusdam, perspiciatis fugiat repellat voluptatum iste vel numquam dolorum assumenda quis. Corrupti aspernatur odit omnis enim!",
    },
    fusca: {
        title: "Fusca",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur quos labore, minus ullam nobis quibusdam, perspiciatis fugiat repellat voluptatum iste vel numquam dolorum assumenda quis. Corrupti aspernatur odit omnis enim!",
    },
    aviao: {
        title: "Avião",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur quos labore, minus ullam nobis quibusdam, perspiciatis fugiat repellat voluptatum iste vel numquam dolorum assumenda quis. Corrupti aspernatur odit omnis enim!",
    },
    opala: {
        title: "Opala",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur quos labore, minus ullam nobis quibusdam, perspiciatis fugiat repellat voluptatum iste vel numquam dolorum assumenda quis. Corrupti aspernatur odit omnis enim!",
    },
    opalasom: {
        title: "Opala com som",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur quos labore, minus ullam nobis quibusdam, perspiciatis fugiat repellat voluptatum iste vel numquam dolorum assumenda quis. Corrupti aspernatur odit omnis enim!",
    },
    robo: {
        title: "Robô",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur quos labore, minus ullam nobis quibusdam, perspiciatis fugiat repellat voluptatum iste vel numquam dolorum assumenda quis. Corrupti aspernatur odit omnis enim!",
    },
    cararobo: {
        title: "Cara robótica",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur quos labore, minus ullam nobis quibusdam, perspiciatis fugiat repellat voluptatum iste vel numquam dolorum assumenda quis. Corrupti aspernatur odit omnis enim!",
    },
    suporte_not: {
        title: "Suporte para notebook",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur quos labore, minus ullam nobis quibusdam, perspiciatis fugiat repellat voluptatum iste vel numquam dolorum assumenda quis. Corrupti aspernatur odit omnis enim!",
    },

}