function squares(){

    const classeElemento = document.createElement('div');
    classeElemento.classList.add('box')
    return classeElemento

}

// INIZIO NUMERO RANDOM CON BLACKLIST

function bombe(min,max){
    let bombs = [];
    let i= 0;
    while(i < 16){
        let numero= Math.floor(Math.random() * (max - min + 1) + min )
        
        if(!bombs.includes(numero)){
            bombs.push(numero);
            i++
        }
    }
    return bombs;
}
// FINE NUMERO RANDOM CON BLACKLIST


let bottone = document.getElementById('spawn')
let contentboxes = document.getElementById('content-box')
bottone.addEventListener('click', function(){
contentboxes.innerHTML= " ";

// INIZIO ARRAY BOMBE
let arrayBombe;
arrayBombe= bombe(1,100);
console.log(arrayBombe)
// FINE ARRAY BOMBE

    for(let i = 1; i<=100 ; i++){
        const numeri = i
        const createboxes= squares();
        createboxes.innerText += numeri
        contentboxes.appendChild(createboxes);

        createboxes.addEventListener('click', function(){
        console.log(this.innerText)
        this.classList.toggle('pulsante')
        
        //AGGIUNGO LE BOMBE 

        if(arrayBombe.includes(parseInt(this.innerText))){
            alert('hai cliccato una bomba' + this.innerText)
        }

        })
    }
})




