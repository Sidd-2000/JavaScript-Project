let movies = [{
        name: "falcon and the winter sholder",
        des: "lorem ispsum dolor sit amet, consectetur adipiscing elit, sed diam nonum",
        image: "Images/slider 2.png"
    },
    {
        name: "loki",
        des: "lorem ispsum dolor sit amet, consectetur adipiscing elit, sed diam nonum",
        image: "Images/slider 1.png"
    },
    {
        name: "wanda vision",
        des: "lorem ispsum dolor sit amet, consectetur adipiscing elit, sed diam nonum",
        image: "Images/slider 3.png"
    },
    {
        name: "raya and the last dragon",
        des: "lorem ispsum dolor sit amet, consectetur adipiscing elit, sed diam nonum",
        image: "Images/slider 4.png"
    },
    {
        name: "luca",
        des: "lorem ispsum dolor sit amet, consectetur adipiscing elit, sed diam nonum",
        image: "Images/slider 5.png"
    }

];
const caraousal = document.querySelector('.caraousal');
let sliders = [];
let slideIndex = 0; //! to track sliders index in

const createSlide = () => {
    if (slideIndex >= movies.length) {
        slideIndex = 0;
    }

    // ! create dom element
    let slide = document.createElement('div');
    var imgElement = document.createElement('img');
    var content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    // attach all the elements

    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    caraousal.appendChild(slide);

    // setting up images

    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    // ! setting up the elements class name

    slide.className = 'slider';
    content.className = 'slide-content';
    h1.className = 'movie-title';
    p.className = 'movie-description';

    sliders.push(slide);

    if (sliders.length) {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length -2)}% - ${30 * (sliders.length -2 )
        }px)`;
    }
}
setInterval(() => {
    createSlide();
}, 3000);

// ! video cards

const videoCards = document.querySelectorAll('.video-card');

videoCards.forEach((videoCard) => {
    videoCard.addEventListener('mouseover', () => {
        let video = videoCard.children[1];
        video.play();
    });
    videoCard.addEventListener('mouseleave', () => {
        let video = videoCard.children[1];
        video.pause();
    });
});

// card slider

let cardcontainer = [...document.querySelectorAll('.card-container')];
let nextbtn = [...document.querySelectorAll('.nextBtn')];
let prebtn = [...document.querySelectorAll('.preBtn')];
cardcontainer.forEach((items, i) => {
    let containerDimentions = items.getBoundingClientRect();
    let containerWidth = containerDimentions.width;
    nextbtn[i].addEventListener('click', () => {
        items.scrollLeft += containerWidth - 200;
    })
    prebtn[i].addEventListener('click', () => {
        items.scrollLeft -= containerWidth + 200;
    })
})