var selezionato = ""

function mouseClick(postoRAW) {
    console.log(postoRAW)
    if(selezionato.length > 0) {
        controllaSelezionato()
    }
    else {
        lock()
    }
}

function lock(x) {
}

function unlock(x) {
}

function controllaSelezionato() {
    let temp = selezionato.split()
    console.log(temp)
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
        container.attr("onClick", "mouseClick(this.id)")
        $("#" + idPadre).append(container)
    }
    if(lettera == 'J') {
        bloccoRiservati()
    }
}

function bloccoRiservati() {
    document.getElementById("J1").classList.remove('bg-success');
    document.getElementById("J1").classList.add('bg-secondary');
    document.getElementById("J2").classList.remove('bg-success');
    document.getElementById("J2").classList.add('bg-secondary');
    document.getElementById("J3").classList.remove('bg-success');
    document.getElementById("J3").classList.add('bg-secondary');
    document.getElementById("J4").classList.remove('bg-success');
    document.getElementById("J4").classList.add('bg-secondary');
    document.getElementById("J23").classList.remove('bg-success');
    document.getElementById("J23").classList.add('bg-secondary');
    document.getElementById("J24").classList.remove('bg-success');
    document.getElementById("J24").classList.add('bg-secondary');
    document.getElementById("J25").classList.remove('bg-success');
    document.getElementById("J25").classList.add('bg-secondary');
    document.getElementById("J26").classList.remove('bg-success');
    document.getElementById("J26").classList.add('bg-secondary');
}