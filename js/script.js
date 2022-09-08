PizzasJ.map((item, index) => {
    let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true)

    document.querySelector('.pizza-area').append(pizzaItem)

    pizzaItem.querySelector('.pizza-item--img img').src = item.img
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description

    pizzaItem.querySelector('.pizza-item a').addEventListener('click', (e) => {
        e.preventDefault()
        console.log('clicou na pizza')

        // abrir janela modal
        document.querySelector('.pizzaWindowArea').style.display = 'flex'

        // preenchimento dos dados

        document.querySelector('.pizzaBig img').src = item.img
        document.querySelector('.pizzaInfo h1').innerHTML = item.name
        document.querySelector('.pizzaInfo--desc').innerHTML = item.description
        document.querySelector('.pizzaInfo--actualPrice').innerHTML = `R${item.price.toFixed(2)}`
        
    })
})

document.querySelector('.pizzaInfo--cancelButton').addEventListener('click', () => {
    document.querySelector('.pizzaWindowArea').style.display = 'none'
})

document.querySelector('.pizzaInfo--cancelMobileButton').addEventListener('click', () => {
    document.querySelector('.pizzaWindowArea').style.display = 'none'
})

/*Botão upper*/

function buttonUpper() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function definirBotao() {
    if (window.scrollY === 0) {
        document.querySelector('.button-upper').style.display = 'none';
    } else {
        document.querySelector('.button-upper').style.display = 'block';
    }
}

window.addEventListener('scroll', definirBotao);

// pizza clicada

