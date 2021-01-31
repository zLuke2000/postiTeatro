var selezionato = ""
var disabilitati = ["J1", "J2", "J3", "J4", "J23", "J24", "J25", "J26"]
var filePoltrone = [["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10", "A11", "A12", "A13", "A14", "A15", "A16", "A17", "A18", "A19", "A20", "A21", "A22", "A23", "A24", "A25", "A26"],
                    ["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "B10", "B11", "B12", "B13", "B14", "B15", "B16", "B17", "B18", "B19", "B20", "B21", "B22", "B23", "B24", "B25", "B26"],
                    ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10", "C11", "C12", "C13", "C14", "C15", "C16", "C17", "C18", "C19", "C20", "C21", "C22", "C23", "C24", "C25", "C26"],
                    ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10", "D11", "D12", "D13", "D14", "D15", "D16", "D17", "D18", "D19", "D20", "D21", "D22", "D23", "D24", "D25", "D26"],
                    ["E1", "E2", "E3", "E4", "E5", "E6", "E7", "E8", "E9", "E10", "E11", "E12", "E13", "E14", "E15", "E16", "E17", "E18", "E19", "E20", "E21", "E22", "E23", "E24", "E25", "E26"],
                    ["F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "F13", "F14", "F15", "F16", "F17", "F18", "F19", "F20", "F21", "F22", "F23", "F24", "F25", "F26"],
                    ["G1", "G2", "G3", "G4", "G5", "G6", "G7", "G8", "G9", "G10", "G11", "G12", "G13", "G14", "G15", "G16", "G17", "G18", "G19", "G20", "G21", "G22", "G23", "G24", "G25", "G26"],
                    ["H1", "H2", "H3", "H4", "H5", "H6", "H7", "H8", "H9", "H10", "H11", "H12", "H13", "H14", "H15", "H16", "H17", "H18", "H19", "H20", "H21", "H22", "H23", "H24", "H25", "H26"],
                    ["I1", "I2", "I3", "I4", "I5", "I6", "I7", "I8", "I9", "I10", "I11", "I12", "I13", "I14", "I15", "I16", "I17", "I18", "I19", "I20", "I21", "I22", "I23", "I24", "I25", "I26"],
                    ["J1", "J2", "J3", "J4", "J5", "J6", "J7", "J8", "J9", "J10", "J11", "J12", "J13", "J14", "J15", "J16", "J17", "J18", "J19", "J20", "J21", "J22", "J23", "J24", "J25", "J26"]]

function mouseClick(id, postoRAW) {
    if(selezionato.length <= 3 && controllaSelezionato(id)) {
        unlock(postoRAW)
        abilitaTutti()
        selezionato = selezionato.replace(id, "")
    }
    else if(selezionato.length > 0 && controllaSelezionato(id)) {
        unlock(postoRAW)
        selezionato = selezionato.replace(id, "")
    }
    else {
        lock(postoRAW)
        disabilitaAltri(id)
        selezionato += id
    }
}

function lock(x) {
    $(x).removeClass('bg-success').addClass('bg-warning');
}

function unlock(x) {
    $(x).removeClass('bg-warning').addClass('bg-success');
}

function controllaSelezionato(IDposto) {
    if(selezionato.includes(IDposto)) {
        return true
    }
    else {
        return false
    }
}

function disabilitaAltri(IDposto) {
    let lettera = IDposto[0]
    for(let i=1; i<=filePoltrone.length; i++) {
        if(i != lettera.charCodeAt(0)-64) {
            for(let j=1; j<=filePoltrone[0].length; j++) {
                document.getElementById(String.fromCharCode(i+64) + j).removeAttribute('onClick')
                document.getElementById(String.fromCharCode(i+64) + j).style.opacity = "0.5"
            }
        }
        else {
            if(IDposto[2] == undefined || parseInt(IDposto[1] + IDposto[2]) <= 13) {
                for(let j=14; j<=filePoltrone[0].length; j++) {
                    document.getElementById(String.fromCharCode(i+64) + j).removeAttribute('onClick')
                    document.getElementById(String.fromCharCode(i+64) + j).style.opacity = "0.5"
                }
            }
            else {
                for(let j=1; j<=filePoltrone[0].length/2; j++) {
                    document.getElementById(String.fromCharCode(i+64) + j).removeAttribute('onClick')
                    document.getElementById(String.fromCharCode(i+64) + j).style.opacity = "0.5"
                }
            }
        }
    }
}

function abilitaTutti(IDposto) {
    for(let i=1; i<=filePoltrone.length; i++) {
        for(let j=1; j<=filePoltrone[0].length; j++) {
            document.getElementById(String.fromCharCode(i+64) + j).setAttribute('onClick', "mouseClick(this.id, this)")
            document.getElementById(String.fromCharCode(i+64) + j).style.opacity = "1"
        }
    }
}


function generaPosto(lettera, inizio, fine) {
    let idPadre = "r"
    idPadre += lettera.charCodeAt(0)-64 + "c"
    if(inizio >= 0 && fine <= 13) {
        idPadre += "1"
    }
    else {
        idPadre += "2"
    }
    for(let i=inizio; i<= fine; i++) {
        let container = $("<div>")
        container.addClass("posto_" + lettera + i + " mx-1 my-1 bg-success rounded dimensione")
        container.attr("id", lettera + i)
        container.attr("onClick", "mouseClick(this.id, this)")
        $("#" + idPadre).append(container)
    }
    if(lettera == 'J' && inizio > 13) {
        bloccoRiservati()
    }
}

function bloccoRiservati() {
    for(let i=0; i<disabilitati.length; i++) {
        document.getElementById(disabilitati[i]).removeAttribute('onClick')
        $("#" + disabilitati[i]).removeClass('bg-success').addClass('border border-secondary border-5')
    }
}