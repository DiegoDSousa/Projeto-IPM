
function verificar(){
    var email=document.getElementById("email").value
    var password=document.getElementById("password").value
    var terminacao="@gmail.com"
    if(email.search(terminacao)!=-1){
        if(password!=""){
            window.location="../HTML/feed.html"
        }else{
            document.getElementById("email").value=""
            window.alert("digite uma password")
        }
    }else{
        window.alert("digite um email valido")
        document.getElementById("password").value=""
    }
    
}