function Cadastro(){
    var cad = document.getElementById("form1").submit;
    alert('Parabéns Seu Cadastro Foi Realizado Com Sucesso Muito Obrigado!!! ');
}

 function validasenha(senha2){
        var senha1 = document.getElementById("senha1");
            if(senha1.value != senha2.value){
                senha1.value="";
                senha2.value="";
               alert('senhas diferentes!')
            }
    }

function verificaNumero(e){
    if(e.which != 8 && e.which != 0 && (e.which<48 || e.which > 57)){
        return false;
    }
}

function validaemail(repemail){
        var emai = document.getElementById("email");
        if(repemail.value != email.value){
            email.value="";
            repemail.value="";
            alert('os E-mails sao diferentes')
        }
}
    $(document).ready(function(){
                      $("#cpf").keypress(verificaNumero);
                      })

function formataCpf(evt){
    vr = (navigator.appName=='Netscape') ?evt.target.value : evt.srcElement.value;
        if(vr.length == 3) vr = vr+".";
        if(vr.length == 7) vr = vr+".";
        if(vr.length == 11) vr = vr+"-";
    return vr;
}
function formataCel(evt){
    vr = (navigator.appName=='Netscape') ?evt.target.value : evt.srcElement.value;
    if(vr.length == 0) vr = vr+"(";
    if(vr.length == 3) vr = vr+")";
        if(vr.length == 9) vr = vr+"-";
    return vr;
}

function telEmergencia(evt){
    vr = (navigator.appName=='Netscape') ?evt.target.value : evt.srcElement.value;
    if(vr.length == 0) vr = vr+"(";
    if(vr.length == 3) vr = vr+")";
        if(vr.length == 8) vr = vr+"-";
    return vr;
}

function contEmergencia(evt){
    vr = (navigator.appName=='Netscape') ?evt.target.value : evt.srcElement.value;
    if(vr.length == 0) vr = vr+"(";
    if(vr.length == 3) vr = vr+")";
        if(vr.length == 9) vr = vr+"-";
    return vr;
}



 function CaptchaGenerator(){
                     var alpha = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
                     var i;
                     for (i=0;i<6;i++){
                       var a = alpha[Math.floor(Math.random() * alpha.length)];
                       var b = alpha[Math.floor(Math.random() * alpha.length)];
                       var c = alpha[Math.floor(Math.random() * alpha.length)];
                       var d = alpha[Math.floor(Math.random() * alpha.length)];
                       var e = alpha[Math.floor(Math.random() * alpha.length)];
                       var f = alpha[Math.floor(Math.random() * alpha.length)];
                       var g = alpha[Math.floor(Math.random() * alpha.length)];
                      }
                    var res = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' '+ f + ' ' + g;
                    document.getElementById("mainCaptcha").value = res
                  }
                  
                  function removeSpaces(string){
                    return string.split(' ').join('');
                  }
   