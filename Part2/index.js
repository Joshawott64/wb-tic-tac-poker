const id = document.querySelector('#id')
const cardColor = document.querySelector('#cardColor')


// set card
const setCard = () => {
    const card = document.querySelector(`#${id.value}`)
    card.style.color = cardColor.value
}

document.querySelector('#editBtn').addEventListener('click', setCard)
