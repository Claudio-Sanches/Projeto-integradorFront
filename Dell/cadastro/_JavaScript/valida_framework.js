//Validação com REGEX
function validar_texto() {
  let value = document.getElementById("Nome").value;
  let re = /^[a-zA-ZéúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ\-\ \s]+$/;
  if (!re.test(value)) {
    // campo inválido, retorna false para o formulário não ser submetido
    alert('Somente caracteres alfabéticos são válidos');
    document.form.Nome.focus();
    return false;
  }
  return true;
};
//Validação com JQUERY
function validar_numero() {
  let value = document.getElementById("numero").value;
  if (value == "" || value == null) {
    // campo inválido, retorna false para o formulário não ser submetido
    alert('Conteúdo numérico não informado');
    document.form.numero.focus();
    return false;
  }
  return true;
};
//Validação com JQUERY
function validar_cpf() {
  let value = document.getElementById("cpfcnpj").value;
  if (value == "" || value == null) {
    // campo inválido, retorna false para o formulário não ser submetido
    alert('CPF não informado');
    document.form.cpfcnpj.focus();
    return false;
  }
  return true;
};
//Validação com JSON
//Confere se CPF digitado é igual ao válido do JSON
function confere_cpf() {
  let cpf_json = '{"cpf1": "123.456.788-90"}';
  let v_cpf = JSON.parse(cpf_json);
  let cnpj_json = '{"cnpj1": "12.345.678/0001-00"}';
  let v_cnpj = JSON.parse(cnpj_json);
  if (v_cnpj.cnpj1 == document.form.cpfcnpj.value || v_cpf.cpf1 == document.form.cpfcnpj.value)
    return true;
  else {
    alert("CPF / CNPJ não confere com JSON!");
    document.form.cpfcnpj.focus();
    return false;
  }
}
//Validação com JQUERY
function confere_nome() {
  let value = document.getElementById("Nome").value;
  if (value == "" || value == null) {
    // campo inválido, retorna false para o formulário não ser submetido
    alert('Nome não informado');
    document.form.Nome.focus();
    return false;
  }
  return true;
};

//Validação com JQUERY
function confere_numero() {
  let value = document.getElementById("rua_numero").value;
  if (value == "" || value == null) {
    // campo inválido, retorna false para o formulário não ser submetido
    alert('Número do endereço não informado');
    document.form.rua_numero.focus();
    return false;
  }
  return true;
};

//Validação com JQUERY
function confere_cep() {
  let value = document.getElementById("cep").value;
  if (value == "" || value == null) {
    // campo inválido, retorna false para o formulário não ser submetido
    alert('Número do CEP não foi informado');
    document.form.cep.focus();
    return false;
  }
  return true;
};

//valida todos os campos
function validar_tudo() {
  // se um deles for inválido, retorna false e o form não é submetido
  return validar_texto() && confere_nome() && validar_cpf() && confere_cpf() && confere_numero() && verify_form () ;
}

