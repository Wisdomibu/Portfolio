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
    mobileName: 'Multi Post Stories',
    desktopName: 'Keeping track of hundreds  of components website',
    technology: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    img: 'resources/Snapshoot Portfolio (1).png',
    describe:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    desktopDescribe1:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    desktopDescribe2:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    liveLink: '#',
    liveSource: '#',
  },
  {
    desktopName: 'Multi-Post Stories',
    technology: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    img: 'resources/Img Placeholder.png',
    describe:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  },
  {
    desktopName: 'Profesional Art Printing Data',
    technology: ['HTML', 'Bootstrap', 'Ruby'],
    img: 'resources/Img Placeholder (1).png',
    deskImg1: 'resources/Img Placeholder (3).png',
    deskImg2: 'resources/Img Placeholder (2).png',
    describe:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
  },
  {
    desktopName: 'Data Dashboard Healthcare',
    technology: ['HTML', 'Bootstrap', 'Ruby'],
    img: 'resources/Img Placeholder (1).png',
    deskImg1: 'resources/Img Placeholder (3).png',
    deskImg2: 'resources/Img Placeholder (2).png',
    describe:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
  },

  {
    desktopName: 'Website Portfolio',
    technology: ['HTML', 'Bootstrap', 'Ruby'],
    img: 'resources/Img Placeholder (1).png',
    deskImg1: 'resources/Img Placeholder (3).png',
    deskImg2: 'resources/Img Placeholder (2).png',
    describe:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
  },
];

const ul = document.createElement('ul');
const projectHead = document.createElement('div');
const popupMenu = document.querySelector('.popupMenu');
const btn = document.querySelectorAll('.btn');
const img = document.createElement('img');
const description = document.createElement('p');
const description2 = document.createElement('p');
const popupBtns = document.createElement('div');
const popupParent = document.querySelector('.popupParent');
const imgWrapforDesk = document.createElement('div');
const descripDiv = document.createElement('div');
const icon = document.createElement('i');
//  Class Names
icon.className = 'fa-solid fa-xmark menuCancel';
ul.className = 'menuList';
imgWrapforDesk.className = 'imgWrap';
//  Closing

const createEl = () => {
  // heading;
  if (window.innerWidth <= 768) {
    projectHead.innerHTML = `<h2>${projectInfo[0].mobileName}</h2>`;
    description.innerText = projectInfo[0].describe;
  } else {
    projectHead.innerHTML = `<h2>${projectInfo[0].desktopName}</h2>`;
    description.innerText = projectInfo[0].desktopDescribe1;
    description2.innerText = projectInfo[0].desktopDescribe2;
    description2.classList.add('description2');
    descripDiv.append(description, description2, popupBtns);
  }
  projectHead.append(icon);
  popupMenu.append(projectHead);
  projectHead.className = 'project';

  // Unorder List
  ul.innerHTML = `<li>${projectInfo[0].technology[0]}</li>
                     <li>${projectInfo[0].technology[1]}</li>
                    <li>${projectInfo[0].technology[2]}</li>`;
  popupMenu.append(ul);
  img.src = projectInfo[0].img;
  descripDiv.append(description, popupBtns);
  descripDiv.classList.add('descriptDiv');
  imgWrapforDesk.append(img, descripDiv);
  popupMenu.append(imgWrapforDesk);

  popupBtns.innerHTML = `<button class="button1"><a href="${projectInfo[0].liveLink}">See live</a><img src="resources/Icon - Export.png"/></button>
                         <button class="button1"><a href="${projectInfo[0].liveSource}">See source</a><img src="resources/Icon -GitHub.png"/></button>`;
  popupBtns.className = 'popupBtn';
};

//  Render the project when see Project clicked
const showProject = () => {
  createEl();
  popupParent.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
  popupParent.style.position = 'fixed';
  popupParent.style.height = '100vh';
  popupMenu.style.height = '80vh';
  popupParent.style.display = 'flex';
};
// Event
btn.forEach((item) => {
  item.addEventListener('click', showProject);
});

//  cancel button for projects
icon.addEventListener('click', () => {
  popupParent.style.display = 'none';
});

// showing project dynamically
const projectOne = document.querySelector('.card1');

function multiPurpose() {
  projectOne.innerHTML = ` <img src="${projectInfo[1].img}" alt="" />
  <div class="card1-text">
    <h2>${projectInfo[1].desktopName}</h2>
    <p>
      ${projectInfo[1].describe}
    </p>
    <ul class="box">
      <li>${projectInfo[1].technology[0]}</li>
      <li>${projectInfo[1].technology[1]}</li>
      <li>${projectInfo[1].technology[2]}</li>
      <li>${projectInfo[1].technology[3]}</li>
    </ul>
    <button class="button1 btn">See project</button>
  </div>
</div>`;
}
multiPurpose();
const cardParent = document.querySelector('.card2-parent');

function mobileProject() {
  cardParent.innerHTML = ` <div class="card2">
          <img src="${projectInfo[2].img}" alt="" />
          <button class="button2 btn">See Project</button>
          <div class="card-text">
            <h2>${projectInfo[2].desktopName}</h2>
            <p>
            ${projectInfo[2].describe}
            </p>
            <ul class="box2">
              <li>${projectInfo[2].technology[0]}</li>
              <li>${projectInfo[2].technology[1]}</li>
              <li>${projectInfo[2].technology[2]}</li>
            </ul>
          </div>
        </div>
        <div class="card2">
          <img src="${projectInfo[2].img}" alt="" />
          <div class="card-text">
            <h2>${projectInfo[2].desktopName}</h2>
            <p>
            ${projectInfo[2].describe}
            </p>
            <ul class="box2">
              <li>${projectInfo[2].technology[0]}</li>
              <li>${projectInfo[2].technology[1]}</li>
              <li>${projectInfo[2].technology[2]}</li>
            </ul>
          </div>
          <button class="button2 btn">See Project</button>
        </div>
        <div class="card2">
          <img src="${projectInfo[2].img}" alt="" />
          <div class="card-text">
            <h2>${projectInfo[2].desktopName}</h2>
            <p>
            ${projectInfo[2].describe}
            </p>
            <ul class="box2">
              <li>${projectInfo[2].technology[0]}</li>
              <li>${projectInfo[2].technology[1]}</li>
              <li>${projectInfo[2].technology[2]}</li>
            </ul>
          </div>
          <button class="button2 btn">See Project</button>
        </div>
        <div class="card2">
          <img src="${projectInfo[2].img}" alt="" />
          <div class="card-text">
            <h2>${projectInfo[2].desktopName}</h2>
            <p>
            ${projectInfo[2].describe}
            </p>
            <ul class="box2">
              <li>${projectInfo[2].technology[0]}</li>
              <li>${projectInfo[2].technology[1]}</li>
              <li>${projectInfo[2].technology[2]}</li>
            </ul>
          </div>
          <button class="button2 btn">See Project</button>
        </div>
        <div class="card2">
          <img src="${projectInfo[2].img}" alt="" />
          <div class="card-text">
            <h2>${projectInfo[2].desktopName}</h2>
            <p>
            ${projectInfo[2].describe}
            </p>
            <ul class="box2">
              <li>${projectInfo[2].technology[0]}</li>
              <li>${projectInfo[2].technology[1]}</li>
              <li>${projectInfo[2].technology[2]}</li>
            </ul>
          </div>
          <button class="button2 btn">See Project</button>
        </div>
        <div class="card2">
          <img src="${projectInfo[2].img}" alt="" />
          <div class="card-text">
            <h2>${projectInfo[2].desktopName}</h2>
            <p>
            ${projectInfo[2].describe}
            </p>
            <ul class="box2">
              <li>${projectInfo[2].technology[0]}</li>
              <li>${projectInfo[2].technology[1]}</li>
              <li>${projectInfo[2].technology[2]}</li>
            </ul>
          </div>
          <button class="button2 btn">See Project</button>
        </div>
      </div>`;
}
mobileProject();
const desktopHtml = document.querySelector('.desktopHtml');

function desktopProject() {
  desktopHtml.innerHTML = `<div class="card2-parent-desktop hide-mobile">
<div class="card2">
  <img src="${projectInfo[3].deskImg1}" alt="" class="img a"/>
  <img src="${projectInfo[3].deskImg2}" alt="" class="img b"/>
  <div class="card-text">
    <h2>${projectInfo[3].desktopName}</h2>
    <p>
      ${projectInfo[3].describe}
    </p>
    <ul class="box2">
      <li>${projectInfo[3].technology[0]}</li>
      <li>${projectInfo[3].technology[1]}</li>
      <li>${projectInfo[3].technology[2]}</li>
    </ul>
  </div>
  <button class="button2 btn">See Project</button>
</div>
<div class="card2">
  <img src="${projectInfo[3].deskImg1}" alt="" class="img a"/>
  <img src="${projectInfo[3].deskImg2}" alt="" class="img b"/>
  <div class="card-text">
    <h2>${projectInfo[3].desktopName}</h2>
    <p>
      ${projectInfo[3].describe}
     
    </p>
    <ul class="box2">
      <li>${projectInfo[3].technology[0]}</li>
      <li>${projectInfo[3].technology[1]}</li>
      <li>${projectInfo[3].technology[2]}</li>
    </ul>
  </div>
  <button class="button2 btn">See Project</button>
</div>
<div class="card2">
  <img src="${projectInfo[4].deskImg1}" alt="" class="img a"/>
  <img src="${projectInfo[4].deskImg2}" alt="" class="img b"/>
  <div class="card-text">
    <h2>${projectInfo[4].desktopName}</h2>
    <p>
      ${projectInfo[4].describe}
    </p>
    <ul class="box2">
      <li>${projectInfo[4].technology[0]}</li>
      <li>${projectInfo[4].technology[1]}</li>
      <li>${projectInfo[4].technology[2]}</li>
    </ul>
  </div>
  <button class="button2 btn">See Project</button>
</div>
<div class="card2">
  <img src="${projectInfo[2].deskImg1}" alt="" class="img a"/>
  <img src="${projectInfo[2].deskImg2}" alt="" class="img b"/>
  <div class="card-text">
    <h2>${projectInfo[2].desktopName}</h2>
    <p>
     ${projectInfo[2].describe}
    </p>
    <ul class="box2">
      <li>${projectInfo[2].technology[0]}</li>
      <li>${projectInfo[2].technology[1]}</li>
      <li>${projectInfo[2].technology[2]}</li>
    </ul>
  </div>
  <button class="button2 btn">See Project</button>
</div>
<div class="card2">
  <img src="${projectInfo[3].deskImg1}" alt="" class="img a"/>
  <img src="${projectInfo[3].deskImg2}" alt="" class="img b"/>
  <div class="card-text">
    <h2>${projectInfo[3].desktopName}</h2>
    <p>
    ${projectInfo[3].describe}
    </p>
    <ul class="box2">
      <li>${projectInfo[3].technology[0]}</li>
      <li>${projectInfo[3].technology[1]}</li>
      <li>${projectInfo[3].technology[2]}</li>
    </ul>
  </div>
  <button class="button2 btn">See Project</button>
</div>
<div class="card2">
  <img src="${projectInfo[4].deskImg1}" alt="" class="img a"/>
  <img src="${projectInfo[4].deskImg1}" alt="" class="img b"/>
  <div class="card-text">
    <h2>${projectInfo[4].desktopName}</h2>
    <p>
    ${projectInfo[3].describe}
    </p>
    <ul class="box2">
      <li>${projectInfo[4].technology[0]}</li>
      <li>${projectInfo[4].technology[1]}</li>
      <li>${projectInfo[4].technology[2]}</li>
    </ul>
  </div>
  <button class="button2 btn">See Project</button>
</div>
</div>`;
}
desktopProject();

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('btn')) {
    showProject();
  }
});

const email = document.getElementById('email');
const form = document.querySelector('form');
const submitBtn = document.querySelector('.submitBtn');
const small = document.querySelector('small');
const userName = document.getElementById('name');
const textArea = document.getElementById('textArea');
let isValid = true;

submitBtn.addEventListener('click', () => {
  const emailValue = email.value.trim();
  if (emailValue !== emailValue.toLowerCase()) {
    small.innerText = 'Email should be in lowercase';
    isValid = false;
  } else {
    small.innerText = '';
    isValid = true;
  }
});

function storeData() {
  const formObj = {
    email: email.value,
    userName: userName.value,
    textArea: textArea.value,
  };
  localStorage.setItem('formData', JSON.stringify(formObj));
}
form.addEventListener('input', storeData);

function retrieveData() {
  const storedData = localStorage.getItem('formData');
  if (storedData) {
    const formData = JSON.parse(storedData);
    email.value = formData.email;
    userName.value = formData.userName;
    textArea.value = formData.textArea;
  }
}

window.addEventListener('load', retrieveData);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  storeData();
  if (isValid) {
    form.submit();
  }
});
