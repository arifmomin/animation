const chooseCircle = document.querySelector('.choose-circle');
const chooseCircleItems = document.querySelectorAll('.choose-circle-default');
const chooseCircleChild = document.querySelector('.choose-circle-child');
window.addEventListener('scroll', () => {
    const sectionTop = chooseCircle.getBoundingClientRect().top;
  const sectionHeight = chooseCircle.offsetHeight;
  if (sectionTop <= window.innerHeight && sectionTop + sectionHeight >= 0) {
    setTimeout(() => {
      chooseCircleChild.classList.add('chooseCircleChild');
    chooseCircle.classList.add('chooseCircleBorder')
    chooseCircleItems.forEach(item => {
      item.classList.add('choose-circle-item')
      item.classList.remove('choose-circle-default');
    });
    }, 2000);
  } else {
    chooseCircleChild.classList.remove('chooseCircleChild');
    chooseCircle.classList.remove('chooseCircleBorder')
    chooseCircleItems.forEach(item => {
      item.classList.add('choose-circle-default')
        item.classList.remove('choose-circle-item')
    });
  }
});