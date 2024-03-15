function comecar(){
    var nome = document.getElementById("exampleFormControlInput1").value;
    show(nome);
}

function show(nome){
    document.getElementById("nomePrint").textContent = nome;
    var div = document.getElementById("selects-div")
    if(nome && nome.trim !==""){
        div.style.display = "flex"
        document.getElementById("exampleFormControlInput1").style.background = "none"
    }else{
        document.getElementById("error").style.display = "block"
    }
   
}

function fechar(){
    document.getElementById("error").style.display ="none"
    document.getElementById("exampleFormControlInput1").style.display = "lightpink";
}

function calcularTotal(){
    var selecta = document.getElementById("select-antigos");
    var selectb = document.getElementById("select-porsches");
    var selectc = document.getElementById("select-caminhões");
    var selectd = document.getElementById("select-exóticos");
    var selecte = document.getElementById("select-jdm");
    var resultadoSpan = document.getElementById("resultado");

    var total = 0;
    var a = 0;
    var b = 0;
    var c = 0;
    var d = 0;
    var e = 0;
    
    switch (selecta.value) {
        case "Carrinho1A":
            total =  total + 54.90;
            a = 54.90;
            break;
            case "Carrinho2a":
            total =  total + 44.90;
            a = 44.90;
            break;
            case "Carrinho3a":
            total =  total + 39.90;
            a = 39.90;
            break;
            case "Carrinho4a":
            total =  total + 42.90;
            a = 42.90;
            break;
            case "Carrinho5a":
            total =  total + 69.90;
            a = 69.90;
            break;

    }

    switch (selectb.value) {
        case "Carrinho1b":
            total =  total + 34.90;
            b = 34.90;
            break;
            case "Carrinho2b":
            total =  total + 34.90;
            b = 34.90;
            break;
            case "Carrinho3b":
            total =  total + 42.90;
            b = 42.90;
            break;
            case "Carrinho4b":
            total =  total + 24.90;
            b = 24.90;
            break;
            case "Carrinho5b":
            total =  total + 159.90;
            b = 159.90;
            break;

    }

    switch (selectc.value) {
        case "Carrinho1c":
            total =  total + 26.90;
            c = 26.90;
            break;
        case "Carrinho2c":
            total =  total + 26.90;
            c = 26.90;
            break;
        case "Carrinho3c":
            total =  total + 20.90;
            c = 20.90;
        break;
        case "Carrinho4c":
            total =  total + 69.90;
            c = 69.90;
            break;
        case "Carrinho5c":
            total =  total + 89.90;
            c = 89.90;
        break;

    }
    switch (selectd.value) {
        case "Carrinho1d":
            total =  total + 29.90;
            d = 29.90;
            break;
        case "Carrinho2d":
            total =  total + 26.90;
            d = 26.90;
            break;
        case "Carrinho3d":
            total =  total + 29.90;
            d = 29.90;
        break;
        case "Carrinho4d":
            total =  total +21.90;
            d = 7.90;
            break;
        case "Carrinho5d":
            total =  total + 29.90;
            d = 29.90;
        break;

    }
    switch (selecte.value) {
        case "Carrinho1e":
            total =  total + 32.90;
            e = 32.90;
            break;
        case "Carrinho2e":
            total =  total + 27.90;
            e = 27.90;
            break;
        case "Carrinho3e":
            total =  total + 21.90;
            e = 21.90;
        break;
        case "Carrinho4e":
            total =  total + 36.90;
            e = 36.90;
            break;
        case "Carrinho5e":
            total =  total + 21.90;
            e = 21.90;
        break;

    }
    document.getElementById("pedido-pronto").style.display = "block" 
    document.getElementById("carrinhoa-pronto").textContent = selecta.value + " R$ " + a.toFixed(2); 
    document.getElementById("carrinhob-pronto").textContent = selectb.value + " R$ " + b.toFixed(2); 
    document.getElementById("carrinhoc-pronto").textContent = selectc.value + " R$ " + c.toFixed(2);
    document.getElementById("carrinhod-pronto").textContent = selectd.value + " R$ " + d.toFixed(2); 
    document.getElementById("carrinhoe-pronto").textContent = selecte.value + " R$ " + e.toFixed(2);  
    resultadoSpan.textContent = "R$" + total.toFixed(2);
}

function limpar(){
    document.getElementById("pedido-pronto").style.display = "none";
    document.getElementById("selects-div").style.display = "none";
    document.getElementById("exampleFormControlInput1").value = "";
    document.getElementById("resultado").value = "";
    document.getElementById("select-antigos").value = "Selecione sua miniatura";
    document.getElementById("select-porsches").value = "Selecione sua miniatura";
    document.getElementById("select-caminhões").value = "Selecione sua miniatura";
    document.getElementById("select-exóticos").value = "Selecione sua miniatura";
    document.getElementById("select-jdm").value = "Selecione sua miniatura";
}

const DataAtual = new Date();

const dia = DataAtual.getDate();
const mes = DataAtual.getMonth() + 1;
const ano = DataAtual.getFullYear();
const data = dia + "/" + mes + "/" + ano

function conferirMensagemWhatsApp(){

    document.getElementById("total").textContent = totalGlobal;
}

function enviar(){
    if (totalGlobal != ""){

        var numeroTelefone = "5541999994614";

        var linkWhatsApp = "https://wa.me/" + numeroTelefone + "text=Total da Compra: " + totalGlobal + " - " + "Dia da Compra: " + data

        window.open(linkWhatsApp, "_blank")
    }
}