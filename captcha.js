let generate=()=>{
    let a="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    //console.log(a[0]);
    let res=''
    for(let i=0;i<6;i++){
       
       let index=Math.floor(Math.random()*a.length);
         res+=a[index];

    }
    //console.log(res);
    document.getElementById("box1").value=res;
}
generate();

let check=()=>{
    let userInput=document.getElementById("box2").value;
    let captchaValue=document.getElementById("box1").value;
    if(userInput===captchaValue){
        alert("Captcha matched");
    }else{
        alert("Captcha not matched");
        generate(); // Regenerate captcha if not matched
        
    }

}
check();