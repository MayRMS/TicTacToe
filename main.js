
// en la pantalla select mode, coger el nombre de los dos jugadores, o en caso de que
// ** elija la máquina, máquina. 

let turn = false
const player1Name = localStorage.getItem('name1');
const player1Id = document.getElementById('namePlayer1')
if (player1Name && player1Id) {
    player1Id.innerHTML = player1Name
}
const player2Name = localStorage.getItem('name2');
const player2Id = document.getElementById('namePlayer2')
if (player2Name && player2Id) {
    player2Id.innerHTML = player2Name
}

const winnerName = localStorage.getItem('winner');
const winnerId = document.getElementById('winnerName')
if (winnerName && winnerId) {
    winnerId.innerHTML = winnerName
}

document.getElementById('mode2players')?.addEventListener('click', () => {
    window.localStorage.setItem('name1', document.getElementById('txtName1').value)
    window.localStorage.setItem('name2', document.getElementById('txtName2').value)
    window.localStorage.setItem('machine', false)
    // tiene que ir a la vista de juego

})

document.getElementById('mode1player')?.addEventListener('click', () => {
    window.localStorage.setItem('name1', document.getElementById('txtName1').value)
    window.localStorage.setItem('name2', document.getElementById('txtName2').value)
    window.localStorage.setItem('machine', true)

    // tiene que ir a la vista de juego
})
// conseguir que el boton de "siguiente" cargue la siguiente vista de html



const defaultBackground = 'transparent'
const players = [
    {
        name: localStorage.getItem('name1') || "player 1",
        turn: false,
        tokens: 3,
        color:'rgba(0, 255, 255, 0.467)',
        tablePlayer: []
    },
    {
        name: localStorage.getItem('name2') || "player 2",
        turn: true,
        tokens: 3,
        color: 'rgba(250, 53, 214, 0.735)',
        tablePlayer: []
    }
];

//condición de victoria

const arrContains = (playerTable, contains)=> {
    let winCondition = 0
    for (let i = 0; i <= contains.length; i++){
        if (playerTable.includes(contains[i])) {
            winCondition = winCondition +1
        }
    }
    return winCondition === 3 
}

const winCondition = (playerTable)=> {
    if( arrContains(playerTable,[0,1,2]) ||
        arrContains(playerTable,[3,4,5]) ||
        arrContains(playerTable,[6,7,8]) ||
        arrContains(playerTable,[0,3,6]) ||
        arrContains(playerTable,[1,4,7]) ||
        arrContains(playerTable,[2,5,8]) ||
        arrContains(playerTable,[0,4,8]) ||
        arrContains(playerTable,[2,4,6])
    ) return true
    return false
}

//contador por jugador maximo 3

const placeToken=(place)=> {
    const currentPlayer = players[turn ? 1 : 0]
    console.log(currentPlayer)
    place.style.background = currentPlayer.color
    currentPlayer.tokens = currentPlayer.tokens - 1
}

//cambiar el turno

const changeTurn= ()=>{
    if (turn===false){ 
     turn=true
    }else{  
     turn=false
    }
 }

 //funcionmachineRandom
 const machineRandom = (min, max)=> {
    let randTurn = true
    let randWork;
    while (randTurn) {
        let a = Math.floor(Math.random() * (max - min) ) + min;
        if( !players[0].tablePlayer.includes(a) && !players[1].tablePlayer.includes(a)){
            randWork = a
            randTurn = false
        }
     }
    return randWork;
  }
const machineTurn = () => {
    const machine = players[1]
    if (machine.tokens > 0) {
        const rand = machineRandom(0, 8)
        const box = document.getElementById(String(rand + 1));
        machine.tablePlayer.push(rand)
        box.style.background = machine.color
        machine.tokens = machine.tokens - 1
        if(winCondition(machine.tablePlayer)){
            localStorage.setItem('winner', 'MACHINE')
            window.location.assign('http://127.0.0.1:5500/hmtl/winnerView.html')
        }
        changeTurn()
    } else {
        const rand = Math.floor(Math.random() * (3 - 0) ) + 0;
        const value = machine.tablePlayer[rand]
        const randElement = document.getElementById(String(machine.tablePlayer[rand] + 1))
        machine.tablePlayer = machine.tablePlayer.filter(e => e != value)
        randElement.style.background = defaultBackground;
        machine.tokens = machine.tokens + 1
        const rand2 = machineRandom(0, 8)
        const box = document.getElementById(String(rand2 + 1));
        machine.tablePlayer.push(rand2)
        box.style.background = machine.color
        machine.tokens = machine.tokens - 1
        if(winCondition(machine.tablePlayer)){
            localStorage.setItem('winner', 'MACHINE')
            window.location.assign('http://127.0.0.1:5500/hmtl/winnerView.html')
        }
        changeTurn()
    }

}
const machine = localStorage.getItem('machine')
for(let i = 1; i <= 9; i++){
    const box = document.getElementById(`${i}`);
    box?.addEventListener('click', () => {
        console.log(players)
        const currentPlayer = turn ? players[1] : players[0];
        player1Id.innerHTML = !turn ? player1Name : `${player1Name} 's turn`
        player2Id.innerHTML = turn ? player2Name : `${player2Name} 's turn`
        const boxValue = i - 1;
        if (currentPlayer.tokens !== 0 && !players.find(e => e.tablePlayer.includes(boxValue))){
            currentPlayer.tablePlayer.push(boxValue)
            placeToken(box)
            if(winCondition(currentPlayer.tablePlayer)){
                localStorage.setItem('winner', currentPlayer.name)
                window.location.assign('http://127.0.0.1:5500/hmtl/winnerView.html')
            }
            changeTurn()
        } else {
            if (currentPlayer.tokens === 0 && currentPlayer.tablePlayer.includes(boxValue)){
                currentPlayer.tablePlayer = currentPlayer.tablePlayer.filter(e => e != boxValue)
                box.style.background = defaultBackground
                currentPlayer.tokens = 1
            }
        }
        if (machine === 'true' && turn) {
            machineTurn()
        }
        

    })
}






