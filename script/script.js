const form = document.getElementById('form');
const pictures = [];

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // получаем данные из формы
  const name = event.target.name.value;
  const nameOfPic = event.target.nameOfPic.value;
  const link = event.target.link.value;

  pictures.push({
    name,
    nameOfPic,
    link,
  });

  rerender();
  event.target.reset();
});

function getPictureNode(name, nameOfPic, link) {
  const container = document.createElement('div');
  const nameNode = document.createElement('p');
  const nameOfPicNode = document.createElement('p');
  const linkNode = document.createElement('img');

  // укажем класс hidden, чтобы карточка появлялась скрытой
  container.className = 'picture-card hidden';
  nameNode.innerText = name;
  nameOfPicNode.innerText = nameOfPic;
  linkNode.src = link;

  container.append(nameNode, nameOfPicNode, linkNode);

  // Удалим класс hidden, чтобы карточка появилась с анимацией
  // Без setTimeout не получится, здесь пока не будем лезть глубоко в то как работает js
  // вы поймёте этот момент позже
  setTimeout(() => {
    container.classList.remove('hidden');
  }, 0);

  return container;
}

function rerender() {
  const container = document.querySelector('#picturesContainer');
  container.innerText = '';
  pictures.forEach(({ name, nameOfPic, link }) =>
    container.append(getPictureNode(name, nameOfPic, link))
  );
}
