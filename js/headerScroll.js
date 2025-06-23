// Добавляет черный фон к .header__menu при скролле страницы вниз

document.addEventListener('DOMContentLoaded', function() {
  const headerMenu = document.querySelector('.header__menu');
  if (!headerMenu) return;
  const headerLinks = document.querySelectorAll('.header__link');
  const logoPic = document.querySelector('.header__logo-pic');
  const logoDefault = './img/svg/logoDomburg.svg';
  const logoScrolled = './img/svg/logoDomburgScroll.svg';
  const telegramIcon = document.querySelector('.header__communication-telegram img');
  const whatsappIcon = document.querySelector('.header__communication-whatsapp img');
  const numberIcon = document.querySelector('.header__communication-number img');
  const telegramDefault = './img/svg/telegram.svg';
  const telegramScrolled = './img/svg/telegramScroll.svg';
  const whatsappDefault = './img/svg/whatsapp.svg';
  const whatsappScrolled = './img/svg/whatsappScroll.svg';
  const numberDefault = './img/svg/number.svg';
  const numberScrolled = './img/svg/numberScroll.svg';

  window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
      headerMenu.classList.add('header__menu--scrolled');
      headerLinks.forEach(link => link.style.color = '#000');
      if (logoPic) logoPic.src = logoScrolled;
      if (telegramIcon) telegramIcon.src = telegramScrolled;
      if (whatsappIcon) whatsappIcon.src = whatsappScrolled;
      if (numberIcon) numberIcon.src = numberScrolled;
    } else {
      headerMenu.classList.remove('header__menu--scrolled');
      headerLinks.forEach(link => link.style.color = '');
      if (logoPic) logoPic.src = logoDefault;
      if (telegramIcon) telegramIcon.src = telegramDefault;
      if (whatsappIcon) whatsappIcon.src = whatsappDefault;
      if (numberIcon) numberIcon.src = numberDefault;
    }
  });
});
