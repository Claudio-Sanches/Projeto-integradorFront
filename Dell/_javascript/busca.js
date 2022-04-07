$(function(){
    $('#informa').change(function(){
        console.log($("#browsers option[value='" + $('#informa').val() + "']").attr('id'));
    });
});


function buscar() {
    let captura = document.getElementsByName('informa');

    if (captura == "Pessoal") {
        window.location.href = "index.html";
    }

    let input = document.getElementById('informa');

    input.addEventListener('informa', function (evt) {
        if (input.value !== '') {
            alert(this.value)
        }
    }, false)


    var obj_busca = {
        pessoal: "pagina_pessoal.html",
        pessoal_nb: "pagina_pessoal_nb.html",
        pessoal_dt: "pagina_pessoal_dt.html",
        profissional: "pagina_profissional.html",
        profissional_nb: "pagina_profissional_nb.html",
        profissional_dt: "pagina_profissional_dt.html",
        acessorios: "pagina_acessorios.html",
        gamer_monitor: "pagina_gamer_monit.html",
        gamer_nb: "pagina_gamer_nb.html",
        gamer: "pagina_gamer.html"
    }

    let cpf_json = '{"cpf1": "123.456.788-90"}';
    let v_cpf = JSON.parse(cpf_json);
    if (v_cpf.cpf1 == document.form.search.value)
        return true;
    else {
        alert("CPF não confere com JSON!");
        document.form.cpf.focus();
        return false;
    }
}
