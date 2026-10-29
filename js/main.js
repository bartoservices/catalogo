// WhatsApp da Bartô (DDI + DDD + número, só dígitos)
var WHATSAPP_NUMBER = '5527992690286';

document.querySelectorAll('[data-whatsapp]').forEach(function (el) {
  var assunto = el.getAttribute('data-assunto');
  var texto = 'Olá! Quero solicitar um orçamento para ' + assunto + '.';
  el.href = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(texto);
  el.target = '_blank';
  el.rel = 'noopener';
});

// Indicadores (bolinhas) do slider de fotos no mobile
(function () {
  var slider = document.querySelector('.photos');
  var dots = document.querySelector('.photos-dots');
  if (!slider || !dots) return;
  var slides = slider.querySelectorAll('.photo');

  // distância entre o início de um slide e o do próximo (largura + espaçamento)
  function step() {
    return slides.length > 1 ? slides[1].offsetLeft - slides[0].offsetLeft : slider.clientWidth;
  }

  slides.forEach(function (_, i) {
    var dot = document.createElement('span');
    dot.addEventListener('click', function () {
      slider.scrollTo({ left: i * step(), behavior: 'smooth' });
    });
    dots.appendChild(dot);
  });

  function update() {
    var i = Math.round(slider.scrollLeft / step());
    dots.querySelectorAll('span').forEach(function (d, n) {
      d.classList.toggle('is-active', n === i);
    });
  }
  slider.addEventListener('scroll', update, { passive: true });
  update();
})();
