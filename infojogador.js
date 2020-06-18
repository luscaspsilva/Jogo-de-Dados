function gohome(){
    window.location="index.html"
}

/* Verifica se a opção jogador 1 e 2 foram selecionadas */

function radioJogador1(){
    return ($('input[value=jogador1]:checked').val() == 'jogador1'); 
}

function radioJogador2(){
    return ($('input[value=jogador2]:checked').val() == 'jogador2');
}

function save(){
    if(!radioJogador1() && !radioJogador2()){
        alert('Selecione o jogador 1 ou 2!');
        return;
    } 
    if($('#nome').val() == ''){
        alert('Digite o seu nome!');
        return;
    }
    if($('#nick').val() == ''){
        alert('Digite o seu nick!');
        return;
    }
    if($('#idade').val() == ''){
        alert('Digite sua idade!');
        return;
    }
    if(radioJogador1()){
       window.localStorage.setItem('NickJogador1', $('#nick').val());  
    }else{        
       window.localStorage.setItem('NickJogador2', $('#nick').val());               
    }
    
}

function getJogador1(){
    if(window.localStorage.getItem('NickJogador1') == null){ // Estou indo no local de armazenamento e estou pegando o valor não definido ainda.
        return '';
    }
    return new String(window.localStorage.getItem('NickJogador1')); // retornando uma nova referencia ao item.
}

function getJogador2(){
    if(window.localStorage.getItem('NickJogador2') == null){ // Estou indo no logal de armazenamento e estou pegando o valor não definido ainda.
        return '';
    }
    return new String(window.localStorage.getItem('NickJogador2')); // retornando uma nova referencia ao item.
}

function podeJogar(){
    if(getJogador1() == '' || getJogador2() == ''){
        window.history.back();
    }
}

function refresh(){
    if(getJogador1() != '' && getJogador2() != ''){     
    apagar(); 
    }
}

function apagar(){ 
    window.localStorage.removeItem('NickJogador1'); 
    window.localStorage.removeItem('NickJogador2');
}