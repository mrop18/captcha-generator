let captchaCode;

(function() {
            generateCaptcha();
        })();

function generateCaptcha() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    captchaCode = chars[Math.floor(Math.random()*chars.length)];
    for(let i=0; i<6; i++){
        captchaCode = captchaCode + chars[Math.floor(Math.random() * chars.length)];

    }
    document.getElementById("captchaOutput").textContent = captchaCode;
}

function checkCaptcha(){
    var check = document.getElementById("captchaInput").value;
    var val1 = "--Welcome! You are Human--";
    var val2 = "--Are you HUMAN?? Check Again--";
    if(captchaCode == check){
        // alert("valid Captcha");
        document.getElementById("validation").textContent = val1;
        // document.getElementById("captchaInput").value = "";
    }else{
        // alert("Invalid Captcha");
        document.getElementById("validation").textContent = val2;
        document.getElementById("captchaInput").value = "";
    }
    
    generateCaptcha();
}
