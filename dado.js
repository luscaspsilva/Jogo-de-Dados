/* Mecanismo para rolar os dados */

function mudar(){

    var numero = Math.floor(Math.random() * 6 + 1);
    switch (numero){
    
        case 1: 
        document.getElementById('dadoBase1').src = "face1.png";
            break;
        case 2:  
        document.getElementById('dadoBase1').src = "face2.png";
            break;
        case 3:  
        document.getElementById('dadoBase1').src = "face3.png";
            break;
        case 4:  
        document.getElementById('dadoBase1').src = "face4.png";
            break;
        case 5:  
        document.getElementById('dadoBase1').src = "face5.png";
            break;
        case 6:  
        document.getElementById('dadoBase1').src = "face6.png";
            break;
        default:
            break;
        }

        var numero = Math.floor(Math.random() * 6 + 1);
        switch (numero){
        
            case 1: 
            document.getElementById('dadoBase2').src = "face1.png";
                break;
            case 2:  
            document.getElementById('dadoBase2').src = "face2.png";
                break;
            case 3:  
            document.getElementById('dadoBase2').src = "face3.png";
                break;
            case 4:  
            document.getElementById('dadoBase2').src = "face4.png";
                break;
            case 5:  
            document.getElementById('dadoBase2').src = "face5.png";
                break;
            case 6:  
            document.getElementById('dadoBase2').src = "face6.png";
                break;
            default:
                break;
            }
        
    }
/* Ativa o botão reiniciar o jogo */

    function refresh(){

        document.getElementById('dadoBase1').src = "face00.png";
        document.getElementById('dadoBase2').src = "face00.png";
    }


    function nickjogador(){
        var nome = document.getElementById('nomeId').value;
        var nick = document.getElementById('nickId').value;
        var idade = document.getElementById('idadeId').value;
        if(document.getElementById('jogador1Id').checked == true){

            document.getElementById('player1').value = nick;

        }

        else if (document.getElementById('jogador2Id').checked == true){
            document.getElementById('player2').value = nick;
        }

        else {
            alert('Por favor selecione Jogador 1 ou Jogador 2');
        }
    }