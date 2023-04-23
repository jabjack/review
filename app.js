//local data review

const review = [

    {
        id: 1,
        name: "Nora Kennedy",
        job: "Fullstack Developer",
        img: './img/prueba1.jpg',
        text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas vitae perferendis ullam cupiditate nemo reiciendis eveniet non eos numquam eaque est, quae mollitia iste veniam? Itaque, ipsam earum? Dolorum, quibusdam?",
    },
    {
        id: 2,
        name: "Ana Jons",
        job: "Web Developer",
        img: "./img/prueba2.jpg",
        text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },

    {
        id: 3,
        name: "Laura Perez",
        job: "backend Developer",
        img: "./img/prueba3.jpg",
        text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas vitae perferendis ",
    }

]


//Select item  4 elementos

const img = document.getElementById('person-img')
const author = document.getElementById('author')
const job = document.getElementById('job')
const info = document.getElementById('info')

//add the functionality button preview

const prevBtn = document.querySelector('.prev-btn')

const nextBtn = document.querySelector('.next-btn')

const randomBtn = document.querySelector('.random-btn')

//set starting item

let currentItem = 0;

//load initial item

window.addEventListener('DOMContentLoaded', function () {

    showPerson()

});

//show person based on item

function showPerson() {

    const item = review[currentItem];

    img.src = item.img;
    
    author.textContent = item.name;

    job.textContent = item.job;
    
    info.textContent = item.text;

}

//show next person button


nextBtn.addEventListener("click", function () {

    currentItem++;

    if (currentItem > review.length - 1) {

        currentItem = 0;

    }

    showPerson();

});


//show prev person button

prevBtn.addEventListener("click", function () {

    currentItem--;

    if (currentItem < 0) {

        currentItem = review.length - 1;

    }

    showPerson();

})


// random person

randomBtn.addEventListener("click", function () {

    currentItem = Math.floor(Math.random() * review.length)

    console.log(currentItem);
    showPerson();

});










