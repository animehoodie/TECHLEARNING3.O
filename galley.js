// List of image arrays for each gallery
const galleries = [
    ['eye - Copy.png', 'images/wtaremark2.png', 'img3.jpg', 'img4.jpg', 'img5.jpg'],
    ['OIP.jpg', 'img7.jpg', 'img8.jpg', 'img9.jpg', 'img10.jpg'],
    ['img11.jpg', 'img12.jpg', 'img13.jpg', 'img14.jpg', 'img15.jpg'],
    ['img16.jpg', 'img17.jpg', 'img18.jpg', 'img19.jpg', 'img20.jpg'],
    ['img21.jpg', 'img22.jpg', 'img23.jpg', 'img24.jpg', 'img25.jpg'],
    ['img26.jpg', 'img27.jpg', 'img28.jpg', 'img29.jpg', 'img30.jpg']
  ];
  
  let currentGalleryIndex = 0;
  
  function loadGallery(index) {
    const galleryContainer = document.getElementById('gallery-container');
    galleryContainer.innerHTML = ''; // Clear the current gallery
  
    const gallery = document.createElement('div');
    gallery.classList.add('gallery');
  
    galleries[index].forEach(imgSrc => {
      const img = document.createElement('img');
      img.src = imgSrc;
      gallery.appendChild(img);
    });
  
    galleryContainer.appendChild(gallery);
    enableInfiniteScroll();
  }
  
  function enableInfiniteScroll() {
    const gallery = document.querySelector('.gallery');
    const galleryContainer = document.getElementById('gallery-container');
    
    // Add clone of the gallery for infinite scroll effect
    const galleryClone = gallery.cloneNode(true);
    galleryContainer.appendChild(galleryClone);
  
    let scrollAmount = 0;
    let scrollInterval = setInterval(function() {
      galleryContainer.scrollLeft += 1;
      scrollAmount += 1;
  
      // Reset the scroll to create infinite scroll effect
      if (scrollAmount >= gallery.offsetWidth) {
        galleryContainer.scrollLeft = 0;
        scrollAmount = 0;
      }
    }, 20);
  }
  
  function switchGallery(index) {
    currentGalleryIndex = index;
    loadGallery(currentGalleryIndex);
  }
  
  // Initially load the first gallery
  loadGallery(currentGalleryIndex);
  