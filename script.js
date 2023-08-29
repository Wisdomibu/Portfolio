// Menu bar
const menu = document.querySelector('.fa-bars');
const navMobile = document.querySelector('.navMobile');
const cancel = document.querySelector('.fa-xmark');

menu.addEventListener('click', () => {
  navMobile.style.display = 'block';
  navMobile.style.width = '100%';
  navMobile.style.height = '97vh';
  navMobile.style.top = '0';
  navMobile.style.left = '0';
  navMobile.style.backgroundColor = '#3C3A39';
});

cancel.addEventListener('click', () => {
  navMobile.style.display = 'none';
});

// Project

const projectInfo = [
  {
    name: 'Multi Post Stories',
    technology: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    img: 'resources/Snapshoot Portfolio (1).png',
    describe:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    liveLink: '#',
    liveSource: '#',
  },
];

const ul = document.createElement('ul');
const projectHead = document.createElement('div');
const popupMenu = document.querySelector('.popupMenu');
const btn = document.querySelectorAll('.btn');
const img = document.createElement('img');
const description = document.createElement('p');
const popupBtns = document.createElement('div');
const popupParent = document.querySelector('.popupParent');

const icon = document.createElement('i');

icon.className = 'fa-solid fa-xmark menuCancel';

ul.className = 'menuList';

const createEl = () => {
  // heading;
  projectHead.innerHTML = `<h2>${projectInfo[0].name}</h2>`;
  projectHead.append(icon);
  popupMenu.append(projectHead);
  projectHead.className = 'project';

  // Unorder List
  ul.innerHTML = `<li>${projectInfo[0].technology[0]}</li>
                     <li>${projectInfo[0].technology[1]}</li>
                    <li>${projectInfo[0].technology[2]}</li>`;

  popupMenu.append(ul);
  img.src = projectInfo[0].img;
  popupMenu.append(img);
  description.innerText = projectInfo[0].describe;
  popupMenu.append(description);
  popupBtns.innerHTML = `<button class="button1"><a href="${projectInfo[0].liveLink}">See live</a><img src="resources/Icon - Export.png"/></button>
                         <button class="button1"><a href="${projectInfo[0].liveSource}">See source</a><img src="resources/Icon -GitHub.png"/></button>`;
  popupBtns.className = 'popupBtn';
  popupMenu.append(popupBtns);
};

//  Render the project when see Project clicked
const showProject = () => {
  createEl();
  popupParent.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  popupParent.style.position = 'fixed';
  popupParent.style.display = 'block';
};
// Event
btn.forEach((item) => {
  item.addEventListener('click', showProject);
});

//  cancel button for projects
icon.addEventListener('click', () => {
  popupParent.style.display = 'none';
});
