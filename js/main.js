// Troque pelo número real (DDI + DDD + número, só dígitos)
var WHATSAPP_NUMBER = '5500000000000';

document.querySelectorAll('[data-whatsapp]').forEach(function (el) {
  var assunto = el.getAttribute('data-assunto');
  var texto = 'Olá! Quero solicitar um orçamento para ' + assunto + '.';
  el.href = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(texto);
  el.target = '_blank';
  el.rel = 'noopener';
});
