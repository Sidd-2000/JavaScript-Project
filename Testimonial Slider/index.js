const testimonial = [{
        name: 'Ivette A.',
        photoURL: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        text: "I don't always clop, but when I do, it's because of apple. Apple has completely surpassed our expectations. It's just amazing. "
    },
    {
        name: "Andrus Y.",
        photoURL: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        text: "I wish I would have thought of it first. I love samsung.",

    },
    {
        name: "Rosene T.",
        photoURL: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        text: "Dude, your stuff is the bomb! It's really wonderful. I made back the purchase price in just 48 hours! ",

    },
    {
        name: "Sarita B.",
        photoURL: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        text: "Dude, your stuff is the bomb! I was amazed at the quality of samsung. The best on the net!",

    },
    {
        name: "Judd R.",
        photoURL: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        text: "I STRONGLY recommend samsung to EVERYONE interested in running a successful online business! Wow what great service, I love it!",

    },
    {
        name: "Blinnie R.",
        photoURL: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        text: "I wish I would have thought of it first. I love samsung.",

    },
    {
        name: "Darrell V.",
        photoURL: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        text: "Samsung is both attractive and highly adaptable.",

    },
    {
        name: "Mitzi B.",
        photoURL: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        text: "Banana is the most valuable business resource we have EVER purchased. Thanks guys, keep up the good work!",

    },
    {
        name: "Jeromy E.",
        photoURL: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
        text: "It really saves me time and effort. banana is exactly what our business has been lacking. I use banana often. Just what I was looking for.",

    },
    {
        name: "Aura C.",
        photoURL: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        text: "The very best. Very easy to use. We've used banana for the last five years. Banana should be nominated for service of the year.",

    }
];


const testimonialContainerEl = document.querySelector('.testimonial-container');
let idx = 0;
setInterval(() => {
    testimonialContainerEl.innerHTML = `
    <img src="${testimonial[idx].photoURL}" alt="User Image">
    <p class="text">${testimonial[idx].text}</p>
    <h4 class="username">${testimonial[idx].name}</h4>`
    idx++;
    if (idx >= testimonial.length) {
        idx = 0;
    }
}, 5000)