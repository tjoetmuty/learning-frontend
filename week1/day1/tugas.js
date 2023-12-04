//tugas
//kata kuncinya harus "batu" "gunting" "kertas"
//ada 2 player
//kalau player1 kertas, player2 batu
// 'player 1 win'
//kalau player1 gunting, player2 batu
//'player 2 win'

var player1 = prompt('Player 1')
var player2 = prompt('Player 2')

if(player1 == 'gunting'){
    if(player2 == 'kertas'){
        console.log('player 1 wins')
    }
    else if(player2 == 'batu'){
        console.log('player 2 wins')
    }
    else{
        console.log('coba lagi')
    }
}
else if(player1 == 'batu'){
    if(player2 == 'gunting'){
        console.log('player 1 wins')
    }
    else if(player2 == 'kertas'){
        console.log('player 2 wins')
    }
    else{
        console.log('coba lagi')
    }
}
else{
    if(player2 == 'batu'){
        console.log('player 1 wins')
    }
    else if(player2 == 'gunting'){
        console.log('player 2 wins')
    }
    else{
        console.log('coba lagi')
    }
}
