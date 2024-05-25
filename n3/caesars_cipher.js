function rot13(str) {
    let cod = "";
    let char;

    for (let i = 0; i < str.length; i++) {
        char = str.charCodeAt(i)
        if (char >= 65 && char <= 90) {
            char = (((char - 65) + 13) % 26) + 65;
            cod += String.fromCharCode(char);
        }
        else 
            cod += String.fromCharCode(char);
    }
    return cod;
}
