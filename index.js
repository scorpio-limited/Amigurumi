

const sections = document.querySelectorAll("section");


function highlightMenu() {
  const scrollPos = window.scrollY + window.innerHeight / 2; 

  sections.forEach(section => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    const id = section.id;

    const menuBtn = document.querySelector(`.sidebar a[href="#${id}"]`);

    if (scrollPos >= top && scrollPos < bottom) {
      menuBtn.classList.add("active");
    } else {
      menuBtn.classList.remove("active");
    }
  });
}


window.addEventListener("scroll", highlightMenu);


highlightMenu();


const images = document.querySelectorAll('.amigurumi-image img, .poklon-image img');

  images.forEach(img => {
    img.addEventListener('click', () => {
      img.classList.toggle('active');
    });
  });



  
 

const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('.lightbox-img');
const lightboxDesc = lightbox.querySelector('.lightbox-desc');
const closeLightbox = lightbox.querySelector('.close-lightbox');
const lightboxPrev = lightbox.querySelector('.lightbox-prev');
const lightboxNext = lightbox.querySelector('.lightbox-next');

const galleryTrack = document.querySelector('.gallery-track');
const galleryItems = document.querySelectorAll('.gallery-item');
const prevBtn = document.querySelector('.left-btn');
const nextBtn = document.querySelector('.right-btn');
const zoomIcon = document.querySelector('.zoom-icon');
const galleryDescription = document.getElementById('gallery-description');

let currentIndex = 0;


function updateGallery() {
  const wrapperWidth = document.querySelector('.gallery-wrapper').offsetWidth;
  galleryTrack.style.transform = `translateX(-${currentIndex * wrapperWidth}px)`;

  const currentItem = galleryItems[currentIndex];
  const opis = currentItem.querySelector('.opisigracki');
  galleryDescription.innerHTML = opis.innerHTML; 
}


prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateGallery();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < galleryItems.length - 1) {
    currentIndex++;
    updateGallery();
  }
});

window.addEventListener('resize', updateGallery);


function openLightbox(index) {
  const item = galleryItems[index];
  const img = item.querySelector('img');
  const opis = item.querySelector('.opisigracki');

  lightboxImg.src = img.src;
  lightboxDesc.innerHTML = opis.innerHTML; 
  lightbox.style.display = 'flex';
  lightbox.currentIndex = index;
}


zoomIcon.addEventListener('click', () => {
  openLightbox(currentIndex);
});


closeLightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});


lightboxPrev.addEventListener('click', () => {
  if (lightbox.currentIndex > 0) {
    lightbox.currentIndex--;
    openLightbox(lightbox.currentIndex);
    currentIndex = lightbox.currentIndex;
    updateGallery();
  }
});

lightboxNext.addEventListener('click', () => {
  if (lightbox.currentIndex < galleryItems.length - 1) {
    lightbox.currentIndex++;
    openLightbox(lightbox.currentIndex);
    currentIndex = lightbox.currentIndex;
    updateGallery();
  }
});


lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});


updateGallery();




