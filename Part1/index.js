let player = 'X'

const determineWinner = () => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    for (const line of lines) {
        const [a, b, c] = line

        const squareAText = squares[a].innerText
        const squareBText = squares[b].innerText
        const squareCText = squares[c].innerText

        if (squareAText !== '' && squareAText === squareBText && squareAText === squareCText) {
            return alert(`${squareAText} is the winner!`)
        } 
        else if (fullBoard()) {
            return alert("Cat!")
        }
    }

    return undefined
}

const fullBoard = () => {
    for (const square of squares) {
        if (square.innerText === '') {
            return false
        }
    }
    return true
}

const play = (evt) => {
    switch (player) {
        case 'X':
            evt.target.innerText = `${player}`
            player = 'O'
            document.querySelector('#current-player').innerHTML = `<span>${player}</span>`
            determineWinner()
            break
        case 'O':
            evt.target.innerText = `${player}`
            player = 'X'
            document.querySelector('#current-player').innerHTML = `<span>${player}</span>`
            determineWinner()
            break
        default:
            evt.target.innerText = `${player}`
            player = 'X'
            document.querySelector('#current-player').innerHTML = `<span>${player}</span>`
            determineWinner()
    }
}

const squares = document.querySelectorAll('.square')

for (const square of squares) {
    square.addEventListener('click', play)
}
