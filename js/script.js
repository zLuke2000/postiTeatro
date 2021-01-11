var selezionato = false;

function mouseClick(postoRAW) {
    selezionato = !selezionato;
    posto = getPosto(postoRAW);
    if(posto == '.posto_L1' || posto == '.posto_L2' || posto == '.posto_L3' || posto == '.posto_L4' || posto == '.posto_L23' || posto == '.posto_L24' || posto == '.posto_L25'|| posto == '.posto_L26') {
        alert("Contattare: test@mail.it per prenotare il posto");
    } else {
        var posti = postiCorretti(controlloDivisioni(posto), posto);
        for(var i=0; i<posti.length; i++) {
            if(selezionato) {
                lock(posti[i]);
            }
            else {
                unlock(posti[i]);
            }
            
        }
    }
    
}

function lock(x) {
    if(x == '.posto_L1' || x == '.posto_L2' || x == '.posto_L3' || x == '.posto_L4' || x == '.posto_L23' || x == '.posto_L24' || x == '.posto_L25'|| x == '.posto_L26') {
    }
    else {
        $(x).removeClass('bg-success').addClass('bg-warning');
    }
}
function unlock(x) {
    if(x == '.posto_L1' || x == '.posto_L2' || x == '.posto_L3' || x == '.posto_L4' || x == '.posto_L23' || x == '.posto_L24' || x == '.posto_L25'|| x == '.posto_L26') {
    }
    else {
        $(x).removeClass('bg-warning').addClass('bg-success');
    }
}

function mouseOver(x) {
    posto = getPosto(x);
    if(selezionato == false) {
        var posti = postiCorretti(controlloDivisioni(posto), posto);
        for(var i=0; i<posti.length; i++) {
            lock(posti[i]);
        }
    }
}
function mouseOut(x) {
    posto = getPosto(x);
    if(selezionato == false) {
        var posti = postiCorretti(controlloDivisioni(posto), posto);
        for(var i=0; i<posti.length; i++) {
                unlock(posti[i]);
        }
    }
}
function getPosto(postoRAW) {
    postoRAW = postoRAW.outerHTML;
    postoRAW = postoRAW.split('<div class="');
    postoRAW = postoRAW[1].split(' mx-1 my-1');
    postoRAW = '.' + postoRAW[0];
    return postoRAW;
}
function controlloDivisioni(inputPosto) {
    inputPosto = inputPosto.split('.posto_');
    inputPosto = inputPosto[1];
    if(inputPosto.length == 2) {
        inputPosto = parseInt(inputPosto[1]);
    }
    else if(inputPosto.length == 3) {
        inputPosto = parseInt(inputPosto[1] + inputPosto[2]);
    }
    numeroPosti = document.getElementById('numeroPosti').value;
    postiSX = Math.floor(numeroPosti/2);
    postiDX = numeroPosti - postiSX - 1;
    if(numeroPosti > 1) {
        if(inputPosto <= 13 && inputPosto + postiDX > 13) {
            while(true) {
                if(inputPosto + postiDX > 13) {
                    postiSX++;
                    postiDX--;
                }
                else {
                    break;
                }
            }
        }
        else if(inputPosto >= 14 && inputPosto - postiSX < 14) {
            while(true) {
                if(inputPosto - postiSX < 14) {
                    postiSX--;
                    postiDX++;
                }
                else {
                    break;
                }
            }
        }
        else {
            while(true) {
                if(inputPosto - postiSX <= 0) {
                    postiSX--;
                    postiDX++;
                }
                else if(inputPosto + postiDX >= 27) {
                    postiSX++;
                    postiDX--;
                }
                else {
                    break;
                }
            }
        }
    }
    var totPosti = [];
    totPosti.push(postiSX);
    totPosti.push(postiDX);
    return totPosti;
}
function postiCorretti(inputTotPosti, postoSelezionato) {
    var posti = [];
    posti.push(postoSelezionato);
    var letteraPostoSelezionato = postoSelezionato[7];
    var numeroPostoSelezionato = 0;
    
    postoSelezionato = postoSelezionato.split('.posto_');
    postoSelezionato = postoSelezionato[1];
    letteraPostoSelezionato = postoSelezionato[0];
    if(postoSelezionato.length == 2) {
        numeroPostoSelezionato = postoSelezionato[1];
    }
    else if(postoSelezionato.length == 3) {
        numeroPostoSelezionato = postoSelezionato[1] + postoSelezionato[2];
    }
    for(var i=1; i<=inputTotPosti[0]; i++) {
        var temp = parseInt(numeroPostoSelezionato) - i;
        posti.push('.posto_' + letteraPostoSelezionato + temp)
    }
    for(var i=1; i<=inputTotPosti[1]; i++) {
        var temp = i + parseInt(numeroPostoSelezionato);
        posti.push('.posto_' + letteraPostoSelezionato + temp)
    }
    return posti;
}