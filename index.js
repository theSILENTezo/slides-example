const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'];

let currentIndex = 0;
/* Buttons */
    const prevBtn = document.getElementById('previousBtn');
    const nextBtn = document.getElementById('nextBtn');

const image = document.getElementById('image');

//Adding an event listener to prev button
    prevBtn.addEventListener('click',() => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;

        image.src = images[currentIndex];

        //console.log('test');
    });

//Adding an event listener to next button
    nextBtn.addEventListener('click',() => {
        currentIndex = (currentIndex + 1) % images.length;

        image.src = images[currentIndex];

        //console.log('test');
    });