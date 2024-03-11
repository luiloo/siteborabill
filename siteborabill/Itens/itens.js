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
            total =  total + 25.90;
            a = 25.90;
            break;
            case "Carrinho2a":
            total =  total + 24.90;
            a = 24.90;
            break;
            case "Carrinho3a":
            total =  total + 31.90;
            a = 31.90;
            break;
            case "Carrinho4a":
            total =  total + 24.90;
            a = 24.90;
            break;
            case "Carrinho5a":
            total =  total + 31.90;
            a = 31.90;
            break;

    }

    switch (selectb.value) {
        case "Carrinho1b":
            total =  total + 6.90;
            b = 6.90;
            break;
            case "Carrinho2b":
            total =  total + 8.90;
            b = 8.90;
            break;
            case "Carrinho3b":
            total =  total + 6.90;
            b = 6.90;
            break;
            case "Carrinho4b":
            total =  total + 8.90;
            b = 8.90;
            break;
            case "Carrinho5b":
            total =  total + 6.90;
            b = 6.90;
            break;

    }

    switch (selectc.value) {
        case "Carrinho1c":
            total =  total + 19.90;
            c = 19.90;
            break;
        case "Carrinho2c":
            total =  total + 7.90;
            c = 7.90;
            break;
        case "Carrinho3c":
            total =  total + 15.90;
            c = 15.90;
        break;
        case "Carrinho4c":
            total =  total + 7.90;
            c = 7.90;
            break;
        case "Carrinho5c":
            total =  total + 15.90;
            c = 15.90;
        break;

    }
    switch (selectd.value) {
        case "Carrinho1d":
            total =  total + 19.90;
            d = 19.90;
            break;
        case "Carrinho2d":
            total =  total + 7.90;
            d = 7.90;
            break;
        case "Carrinho3d":
            total =  total + 15.90;
            d = 15.90;
        break;
        case "Carrinho4d":
            total =  total + 7.90;
            d = 7.90;
            break;
        case "Carrinho5d":
            total =  total + 15.90;
            d = 15.90;
        break;

    }
    switch (selecte.value) {
        case "Carrinho1e":
            total =  total + 19.90;
            e = 19.90;
            break;
        case "Carrinho2e":
            total =  total + 7.90;
            e = 7.90;
            break;
        case "Carrinho3e":
            total =  total + 15.90;
            e = 15.90;
        break;
        case "Carrinho4e":
            total =  total + 7.90;
            e = 7.90;
            break;
        case "Carrinho5e":
            total =  total + 15.90;
            e = 15.90;
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
