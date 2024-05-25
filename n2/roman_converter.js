function convertToRoman(num) {
    let resposta = "";
    let casa = "";
    let resto, mult, vezes;
    let tab = {
        '1': "I",
        '4': "IV",
        '5': "V",
        '9': "IX",
        '10': "X",
        '40': "XL",
        '50': "L",
        '90': "XC",
        '100': "C",
        '400': "CD",
        '500': "D",
        '900': "CM",
        '1000': "M"
    };

    mult = 1;
    while (num >> 0) {
        resto = num % 10;
        num = Math.floor(num / 10);
        if (resto == 0) {
            mult *= 10;
            continue;
        }

        vezes = 0;
        if (resto < 4 && resto > 1) {
            vezes = resto - 1;
            resto = 1;
        }
        if (resto < 9 && resto > 5) {
            vezes = resto - 5;
            resto = 5;
        }

        resto *= mult;
        casa += tab[resto];
        for (let i = 0; i < Math.floor(vezes); i++)
            casa += tab[mult];

        resposta = casa + resposta;
        casa = "";
        mult *= 10;
    }
    console.log(resposta);
    return resposta;
}
