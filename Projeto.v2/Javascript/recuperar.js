function verificar(){
    var email=document.getElementById("email").value
    var sms="Foi enviado um codigo de recuperacao para o e-mail "+email
    var terminacao="@gmail.com"
    if(email.search(terminacao)!=-1){
        window.alert(sms)
    }else{
        window.alert("digite um email valido")
        
    }
    
}