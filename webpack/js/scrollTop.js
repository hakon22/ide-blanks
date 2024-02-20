const uppenButton = document.querySelector('.uppen-button');

const scrollTop = () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

const onScroll = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    uppenButton.style.display = 'block';
  } else {
    uppenButton.style.display = 'none';
  }
};

uppenButton.addEventListener('click', scrollTop);
window.addEventListener('scroll', onScroll);
