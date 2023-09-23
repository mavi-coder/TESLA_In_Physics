let videoList = document.querySelectorAll('.list-content .list');

videoList.forEach(vid =>{
   vid.onclick = () =>{
      videoList.forEach(remove =>{remove.classList.remove('active')});
      vid.classList.add('active');
      let src = vid.querySelector('.list-item').src;
      let title = vid.querySelector('.list-title').innerHTML;
      document.querySelector('.main-content .main-item').src = src;
      document.querySelector('.main-content .main-item').play();
      document.querySelector('.main-content .main-vid-title').innerHTML = title;
   };
});
