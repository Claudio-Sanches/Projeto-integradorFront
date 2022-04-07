var time = setInterval(contartempo, 1000);
var contador = 100;

function contartempo() {
    if (contador < 1) {
        encerra();
    } else if (contador < 26) {
        const inicio = {
            inicio: "<div class='progress-bar bg-danger' role='progressbar' style='width: ",
            meio: "%;' aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'>",
            fim: "%</div>",
        }
        const total = {
            fullname: function () {
                return this.inicio + contador + this.meio + contador + this.fim;
            }
        }
        document.getElementsByClassName('progress')[0].innerHTML = total.fullname.apply(inicio);
    } else if (contador < 51) {
        const inicio = {
            inicio: "<div class='progress-bar bg-warning' role='progressbar' style='width: ",
            meio: "%;' aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'>",
            fim: "%</div>",
        }
        const total = {
            fullname: function () {
                return this.inicio + contador + this.meio + contador + this.fim;
            }
        }
        document.getElementsByClassName('progress')[0].innerHTML = total.fullname.apply(inicio);
    } else if (contador < 76) {
        const inicio = {
            inicio: "<div class='progress-bar bg-info' role='progressbar' style='width: ",
            meio: "%;' aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'>",
            fim: "%</div>",
        }
        const total = {
            fullname: function () {
                return this.inicio + contador + this.meio + contador + this.fim;
            }
        }
        document.getElementsByClassName('progress')[0].innerHTML = total.fullname.apply(inicio);
    } else if (contador < 101) {
        const inicio = {
            inicio: "<div class='progress-bar bg-success' role='progressbar' style='width: ",
            meio: "%;' aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'>",
            fim: "%</div>",
        }
        const total = {
            fullname: function () {
                return this.inicio + contador + this.meio + contador + this.fim;
            }
        }
        document.getElementsByClassName('progress')[0].innerHTML = total.fullname.apply(inicio);
    }
    contador--;
}
function encerra() {
    clearInterval(time);
    alert("Por questão de sergurança, essa tela será reiniciada!!!");
    location.href = "index.html";
}

