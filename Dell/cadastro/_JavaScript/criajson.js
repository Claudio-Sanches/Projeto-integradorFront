var verify_form = () => {

    var obj_form = {
      nome: "",
      cpf_cnpj: "",
      tel: "",
      cel: "",
      cep: "",
      rua: "",
      rua_numero: "",
      rua_numero_complemento: "",
      bairro: "",
      cidade: "",
      uf: ""
    }
  
    var el_nome = document.getElementById("Nome");
    if (el_nome.value == "")
      return null;
    obj_form.nome = el_nome.value;
  
    var el_cpf_cnpj = document.getElementById("cpfcnpj");
    obj_form.cpf_cnpj = el_cpf_cnpj.value;
  
    var el_tel = document.getElementById("tel");
    obj_form.tel = el_tel.value;
  
    var el_cel = document.getElementById("cel");
    obj_form.cel = el_cel.value;
  
    var el_cep = document.getElementById("cep");
    obj_form.cep = el_cep.value;
  
    var el_rua = document.getElementById("rua");
    obj_form.rua = el_rua.value;
  
    var el_rua_numero = document.getElementById("rua_numero");
    obj_form.rua_numero = el_rua_numero.value;
  
    var el_rua_numero_complemento = document.getElementById("rua_numero_complemento");
    obj_form.rua_numero_complemento = el_rua_numero_complemento.value;
  
    var el_bairro = document.getElementById("bairro");
    obj_form.bairro = el_bairro.value;

    var el_cidade = document.getElementById("cidade");
    obj_form.cidade = el_cidade.value;
    
    var el_uf = document.getElementById("uf");
    obj_form.uf = el_uf.value;

    console.log(obj_form);
  
    var json = JSON.stringify(obj_form);
    console.log(json);

    document.write("<h1>Dados em Json</h1>");
    document.write(json);

    return json;
  }
  