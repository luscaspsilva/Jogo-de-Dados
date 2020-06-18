/* Mecanismo para rolar os dados */
var numero1 = 0, numero2 = 0;
var score1 = 10, score2 = 10;

function mudar1(){

    numero1 = Math.floor(Math.random() * 6 + 1);   
    switch (numero1){
    
        case 1: 
        document.getElementById('dadoBase1').src = "images/face1.png";
            break;
        case 2:  
        document.getElementById('dadoBase1').src = "images/face2.png";
            break;
        case 3:  
        document.getElementById('dadoBase1').src = "images/face3.png";
            break;
        case 4:  
        document.getElementById('dadoBase1').src = "images/face4.png";
            break;
        case 5:  
        document.getElementById('dadoBase1').src = "images/face5.png";
            break;
        case 6:  
        document.getElementById('dadoBase1').src = "images/face6.png";
            break;
        default:
            break;
        }
    }

    function mudar2(){

        numero2 = Math.floor(Math.random() * 6 + 1);
        switch (numero2){
        
            case 1: 
            document.getElementById('dadoBase2').src = "images/face1.png";
                break;
            case 2:  
            document.getElementById('dadoBase2').src = "images/face2.png";
                break;
            case 3:  
            document.getElementById('dadoBase2').src = "images/face3.png";
                break;
            case 4:  
            document.getElementById('dadoBase2').src = "images/face4.png";
                break;
            case 5:  
            document.getElementById('dadoBase2').src = "images/face5.png";
                break;
            case 6:  
            document.getElementById('dadoBase2').src = "images/face6.png";
                break;
            default:
                break;
            }
        
    }


    function totalResultado(){
        if(numero1 > numero2){ // Se o resultado for maior que o do outro jogador
            score1++,score2--; // o valor vai ser adicionado +1 e o outro jogador vai ser -1
        }else if(numero1 < numero2){ // mesma coisa da de cima mas com outro sinal.
            score2++,score1--;
        }
}

    $('#total1').html('score:'+score1+'');
    $('#total2').html('score:'+score2+'');

    $('#Jogador1').html(getJogador1()+' ');
    $('#Jogador2').html(getJogador2()+' ');

    

