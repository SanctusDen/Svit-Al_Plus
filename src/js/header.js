window.onscroll = () => changeHeaderBackground();

function changeHeaderBackground() {
  const header = document.getElementById('data-header');
  const headerOffsetTrigger = header.offsetHeight;
  const pageOffset = window.pageYOffset;

  if (pageOffset > headerOffsetTrigger) {
    header.classList.add('no-transparency');
  } else {
    header.classList.remove('no-transparency');
  }
};