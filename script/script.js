const form = document.getElementById('form');

// задаём начальные карточки
const pictures = [
  {
    name: 'Ван Гог',
    nameOfPic: 'Звёздная ночь',
    link: 'https://www.hse.ru/data/2017/05/17/1171369516/zvezdnoe_nebo.jpeg'
  },
  {
    name: 'Босх',
    nameOfPic:'Сад земных наслаждений',
    link:'https://upload.wikimedia.org/wikipedia/commons/a/ae/El_jard%C3%ADn_de_las_Delicias%2C_de_El_Bosco.jpg'
  }
];

// сразу рендерим начальные карточки на страницу
rerender();

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
  const container = document.createElement('article');
  const nameNode = document.createElement('footer');
  const nameOfPicNode = document.createElement('header');
  const linkNode = document.createElement('img');

  container.className = 'picture-card';
  nameNode.innerText = name;
  nameOfPicNode.innerText = nameOfPic;
  linkNode.src = link;

  container.append(nameOfPicNode, linkNode, nameNode);

  return container;
}

function rerender() {
  const container = document.querySelector('#picturesContainer');
  container.innerText = '';
  pictures.forEach(({ name, nameOfPic, link }) =>
    container.append(getPictureNode(name, nameOfPic, link))
  );
}
