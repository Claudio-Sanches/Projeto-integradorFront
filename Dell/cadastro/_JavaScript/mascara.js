// a  Representa caracteres alfabéticos (letras) (A-Z,a-z)
// a  Porém 'a' não permite acentuação nem ç 
// 9  Representa caracteres numéricos (números) (0-9)
// *  Representa caracteres alfanuméricos (letras e números) (A-Z,a-z,0-9)
//$(function () {
//    $('#cpfcnpj').mask('000.000.000-00', {
//        onKeyPress: function (cpfcnpj, e, field,options) {
//            const masks = ['000.000.000-00', '00.000.000/0000-00'];
//            const mask = (cpfcnpj.length > 14) ? masks[1] : masks[0];
//            $('#cpfcnpj').mask(mask, options);
//        }
//    });
   // $('.mask-cep').mask('99.999-999'); // CEP
   // $('.mask-cel').mask('(99)99999-9999'); // Celular
   // $('.mask-tel').mask('(99)9999-9999'); // Telefone
   //https://pt.stackoverflow.com/questions/94956/m%C3%A1scara-para-cpf-e-cnpj-no-mesmo-campo
//});

$(function () {
    $('#cpfcnpj').mask('000.000.000-00', {
        onKeyPress: function (cpfcnpj, e, field, options) {
            const masks = ['000.000.000-000', '00.000.000/0000-00'];
            const mask = (cpfcnpj.length > 14) ? masks[1] : masks[0];
            $('#cpfcnpj').mask(mask, options);
        }
    });
    $('.mask-cep').mask('99.999-999'); // CEP
    $('.mask-cel').mask('(99)99999-9999'); // Celular
    $('.mask-tel').mask('(99)9999-9999'); // Telefone
});
