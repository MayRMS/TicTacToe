
let turn = false
const defaultBackground = 'aquamarine'
const players = [
    {
        name: "player 1",
        turn: false,
        tokens: 3,
        color: 'red',
        tablePlayer: []
    },
    {
        name: "player 2",
        turn: true,
        tokens: 3,
        color: 'yellow',
        tablePlayer: []
    }
];

//condición de victoria


const arrContains = (playerTable,contains)=> {
    let winCondition = 0
    for (let i=0; i<= contains.length; i++ ){
        if (playerTable.includes(contains[i])) {
            winCondition= winCondition +1
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
    currentPlayer.tokens = currentPlayer.tokens -1
}



//cambiar el turno

const changeTurn= ()=>{
    if (turn===false){
     turn=true
    }else{
     turn=false
    }
 }

const casilla1= document.getElementById('1')
casilla1.addEventListener('click',()=> {
    const currentPlayer = turn ? players[1] : players[0]
    if (currentPlayer.tokens !== 0 && !players.find(e => e.tablePlayer.includes(0))) {
        currentPlayer.tablePlayer.push(0)
        placeToken(casilla1)
        if(winCondition(currentPlayer.tablePlayer)){
        alert('VICTORY!')
        }
        changeTurn(casilla1)
    }
    else{
        if(currentPlayer.tokens === 0 && currentPlayer.tablePlayer.includes(0)){
            console.log(':V')
            currentPlayer.tablePlayer = currentPlayer.tablePlayer.filter(e=> e!=0)
            casilla1.style.background = defaultBackground
            currentPlayer.tokens=currentPlayer.tokens +1
        }
    }

})

const casilla2 = document.getElementById('2')
casilla2.addEventListener('click',()=> {
    const currentPlayer = turn ? players[1] : players[0]

    if (currentPlayer.tokens !== 0 && !players.find(e => e.tablePlayer.includes(1))) {
        currentPlayer.tablePlayer.push(1)
        placeToken(casilla2)
        if(winCondition(currentPlayer.tablePlayer)){
        alert('VICTORY!')
        }
        changeTurn(casilla2)
    } else {    
        if(currentPlayer.tokens === 0 && currentPlayer.tablePlayer.includes(1)){
        currentPlayer.tablePlayer = currentPlayer.tablePlayer.filter(e=> e!=1)
        casilla2.style.background = defaultBackground
        currentPlayer.tokens=currentPlayer.tokens +1
    }}

    
})

const casilla3= document.getElementById('3')
casilla3.addEventListener('click',()=> {
    const currentPlayer = turn ? players[1] : players[0]
    if (currentPlayer.tokens !== 0 && !players.find(e => e.tablePlayer.includes(2))) {
        currentPlayer.tablePlayer.push(2)
        placeToken(casilla3)
        if(winCondition(currentPlayer.tablePlayer)){
        alert('VICTORY!')
        }
        changeTurn(casilla3)
    } else {
        if(currentPlayer.tokens === 0 && currentPlayer.tablePlayer.includes(2)){
            currentPlayer.tablePlayer = currentPlayer.tablePlayer.filter(e=> e!=2)
            casilla3.style.background = defaultBackground
            currentPlayer.tokens=currentPlayer.tokens +1
        }
    }

  
})

const casilla4= document.getElementById('4')
casilla4.addEventListener('click',()=> {
    const currentPlayer = turn ? players[1] : players[0]

    if (currentPlayer.tokens !== 0 && !players.find(e => e.tablePlayer.includes(3))) {
        currentPlayer.tablePlayer.push(3)
        placeToken(casilla4)
        if(winCondition(currentPlayer.tablePlayer)){
        alert('VICTORY!')
        }
        changeTurn(casilla4)
    } else {
        if(currentPlayer.tokens === 0 && currentPlayer.tablePlayer.includes(3)){
            currentPlayer.tablePlayer = currentPlayer.tablePlayer.filter(e=> e!=3)
            casilla4.style.background = defaultBackground
            currentPlayer.tokens=currentPlayer.tokens +1
        }
    }

    
})

const casilla5= document.getElementById('5')
casilla5.addEventListener('click',()=> {
    const currentPlayer = turn ? players[1] : players[0]

    if (currentPlayer.tokens !== 0 && !players.find(e => e.tablePlayer.includes(4))) {
        currentPlayer.tablePlayer.push(4)
        placeToken(casilla5)
        if(winCondition(currentPlayer.tablePlayer)){
        alert('VICTORY!')
        }
        changeTurn(casilla5)
    } else {
        if(currentPlayer.tokens === 0 && currentPlayer.tablePlayer.includes(4)){
            currentPlayer.tablePlayer = currentPlayer.tablePlayer.filter(e=> e!=4)
            casilla5.style.background = defaultBackground
            currentPlayer.tokens=currentPlayer.tokens +1
        }
    }

    
})

const casilla6= document.getElementById('6')
casilla6.addEventListener('click',()=> {
    const currentPlayer = turn ? players[1] : players[0]
 
    if (currentPlayer.tokens !== 0 && !players.find(e => e.tablePlayer.includes(5))) {
        currentPlayer.tablePlayer.push(5)
        placeToken(casilla6)
        if(winCondition(currentPlayer.tablePlayer)){
        alert('VICTORY!')
        }
        changeTurn(casilla6)
    } else {   
        if(currentPlayer.tokens === 0 && currentPlayer.tablePlayer.includes(5)){
        currentPlayer.tablePlayer = currentPlayer.tablePlayer.filter(e=> e!=5)
        casilla6.style.background = defaultBackground
        currentPlayer.tokens=currentPlayer.tokens +1
    }}

    
})

const casilla7= document.getElementById('7')
casilla7.addEventListener('click',()=> {
    const currentPlayer = turn ? players[1] : players[0]

    if (currentPlayer.tokens !== 0 && !players.find(e => e.tablePlayer.includes(6))) {
        currentPlayer.tablePlayer.push(6)
        placeToken(casilla7)
        if(winCondition(currentPlayer.tablePlayer)){
        alert('VICTORY!')
        }
        changeTurn(casilla7)
    } else {    
        if(currentPlayer.tokens === 0 && currentPlayer.tablePlayer.includes(6)){
        currentPlayer.tablePlayer = currentPlayer.tablePlayer.filter(e=> e!=6)
        casilla7.style.background = defaultBackground
        currentPlayer.tokens=currentPlayer.tokens +1
    }}
   
})

const casilla8= document.getElementById('8')
casilla8.addEventListener('click',()=> {
    const currentPlayer = turn ? players[1] : players[0]

    if (currentPlayer.tokens !== 0 && !players.find(e => e.tablePlayer.includes(7))) {
        currentPlayer.tablePlayer.push(7)
        placeToken(casilla8)
        if(winCondition(currentPlayer.tablePlayer)){
        alert('VICTORY!')
        }
        changeTurn(casilla8)
    }else {
        if(currentPlayer.tokens === 0 && currentPlayer.tablePlayer.includes(7)){
            currentPlayer.tablePlayer = currentPlayer.tablePlayer.filter(e=> e!=7)
            casilla8.style.background = defaultBackground
            currentPlayer.tokens=currentPlayer.tokens +1
        }
    }
    
})

const casilla9= document.getElementById('9')
casilla9.addEventListener('click',()=> {

    const currentPlayer = turn ? players[1] : players[0]

    if (currentPlayer.tokens !== 0 && !players.find(e => e.tablePlayer.includes(8))) {
        currentPlayer.tablePlayer.push(8)
        placeToken(casilla9)
        if(winCondition(currentPlayer.tablePlayer)){
        alert('VICTORY!')
        }
        changeTurn(casilla9)
    } else {    
        if(currentPlayer.tokens === 0 && currentPlayer.tablePlayer.includes(8)){
        currentPlayer.tablePlayer = currentPlayer.tablePlayer.filter(e=> e!=8)
        casilla9.style.background = defaultBackground
        currentPlayer.tokens=currentPlayer.tokens +1
    }}

    
})


//quitar de las anteriores y poner
//guarruzo contra maquina




