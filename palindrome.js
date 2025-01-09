function isPalindrome(str){
    let revStr = "";
    for(let i = str.length-1;i>=0;i--){
        revStr += str[i];
    }
    if(str==revStr){
        console.log("Palindrome");

    }else{
        console.log("not palindrome");
    }
}
isPalindrome("madam");
isPalindrome("snjds");