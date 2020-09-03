var char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var low = 'abcdefghijklmnopqrstuvwxyz';
var upp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var num = '0123456789';
var sym = '!@#$%^&*=-_';

var charNum = document.getElementById("charNum");
var lowBox = document.getElementById("low");
var uppBox = document.getElementById("num");
var numBox = document.getElementById("num");
var symBox = document.getElementById("sym");
var submit = document.getElementById("submit");
var yourPw = document.getElementById("yourPw");

submit.addEventListener("click",function(e){
    var characters = char;  
    (lowBox.checked) ? characters += low : '';
    (uppBox.checked) ? characters += upp : '';
    (numBox.checked) ? characters += num : '';
    (symBox.checked) ? characters += sym : '';
    yourPw.value = password(charNum.value, characters);
});

function password(l,characters){
		var pwd = '';
    for(var i = 0; i<l; i++){
    		pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pwd;
}