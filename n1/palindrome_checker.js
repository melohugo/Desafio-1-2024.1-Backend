function rmNaoAlpha(inputString) {
    return inputString.replace(/[^a-zA-Z0-9]/g, '');
}

function palindrome(str) {
    let invertido = "";

    str = rmNaoAlpha(str);

    for (var i = str.length - 1; i >= 0; i--) { 
        invertido += str[i]; 
    }

    return str.toLowerCase() == invertido.toLowerCase();
}
