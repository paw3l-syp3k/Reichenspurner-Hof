const photos = document.querySelectorAll('.wrapper-2-photos-item');
const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.modal-close-btn');

function modalClose() {
  modal.classList.remove('modal-active');
  document.body.classList.remove('body-active');
  modal.removeChild(img);
}

let img = document.createElement('img');
photos.forEach((photo) => {
  photo.addEventListener('click', (e) => {
    let imgName = e.target.classList[1];
    img.src = `./assets/images/products/big/${imgName}.jpg`;
    img.classList.add('modal-img');
    modal.appendChild(img);
    modal.classList.add('modal-active');
    document.body.classList.add('body-active');
  });
});

modalCloseBtn.addEventListener('click', modalClose);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') modalClose();
});

modal.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) modalClose();
});
