function checkCashRegister(price, cash, cid) {
    let change = [];
    let troco;
    let notas;
    let resp = {
        "status": "",
        "change": []
    };
    let teste = true;
    let valores = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.1,
        "QUARTER": 0.25,
        "ONE": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100
    }

    troco = cash - price;
    
    for (let i = 8; i >= 0; i--) {
        if (cid[i][1] > 0) {
            notas = Math.floor(troco/valores[cid[i][0]]); 
            if (notas > 0) {
                if ((cid[i][1] - (valores[cid[i][0]] * notas)) >= 0) {
                    change.push([cid[i][0], (valores[cid[i][0]] * notas)]);
                    troco -= valores[cid[i][0]] * notas;
                    troco = troco.toFixed(2);
                }
                else {
                    while ((cid[i][1] - (valores[cid[i][0]] * notas)) < 0)
                        notas--;
                    change.push([cid[i][0], (valores[cid[i][0]] * notas)]);
                    troco -= valores[cid[i][0]] * notas;
                    troco = troco.toFixed(2);
                }
            }
        }
    }

    let soma_cash = 0;
    let soma_troco = 0;

    soma_cash = cid.reduce((acc, curr) => acc + curr[1], 0);
    soma_troco = change.reduce((acc, curr) => acc + curr[1], 0);

    if (troco > 0) {
        resp["status"] = "INSUFFICIENT_FUNDS";
        resp["change"] = [];
    }
    else 
        if (soma_cash == soma_troco) {
            resp["status"] = "CLOSED";
            resp["change"] = cid;
        }
    else {
        resp["status"] = "OPEN";
        resp["change"] = change;
    }
    return resp;
}
