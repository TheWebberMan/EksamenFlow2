// Destinationer megamenu start

document.querySelectorAll('.continent').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.continent').forEach(c => c.classList.remove('active'));
        this.classList.add('active'); 
        const continent = this.getAttribute('data-continent');
        const countries = getCountriesByContinent(continent);
        displayCountries(countries);
    });
});

function getCountriesByContinent(continent) {
    const data = {
        'Asia': [
            { name: 'Japan', url: '/destinationer-japan.html' },
            { name: 'Thailand', url: '/destinationer-thailand.html' }
        ],
        'Europe': [
            { name: 'Spanien', url: '/destinationer-spanien.html' },
            { name: 'Grækenland', url: '/destinationer-graekenland.html' }
        ],
        'Southamerica': [
            { name: 'Brasilien', url: '/destinationer-brasilien.html' },
            { name: 'Chile', url: '/destinationer-chile.html' }
        ]
    };
    return data[continent] || [];
}

function generateCountryLinks(continent) {
    const countries = getCountriesByContinent(continent);
    const container = document.getElementById('country-links');
    container.innerHTML = ''; // Clear previous links

    countries.forEach(country => {
        const link = document.createElement('a');
        link.href = country.url;
        link.textContent = country.name;
        link.className = 'country-link';
        container.appendChild(link);
    });
}

document.querySelectorAll('.continent').forEach(item => {
    item.addEventListener('click', event => {
        const continent = event.target.getAttribute('data-continent');
        generateCountryLinks(continent);
    });
});


function displayCountries(countries) {
    const displayDiv = document.querySelector('.displayCountries');
    displayDiv.innerHTML = countries.map(country => `<p>${country}</p>`).join('');
}

// Destinationer megamenu slut


// Ressourcer megamenu start



// Ressourcer megamenu slut



// Funktion til at vise destinationer, Den er display: none; som default i css.
document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const continents = document.querySelectorAll('.continent-menu');

    dropdownToggle.addEventListener('click', function() {
        continents.forEach(continent => {
            continent.style.display = continent.style.display === 'none' ? 'block' : 'none';
        });
    });
});



document.querySelectorAll('.continent-menu p').forEach(item => {
    item.addEventListener('click', function() {
        // Fjern active-continent klassen fra alle kontinenter
        document.querySelectorAll('.continent-menu p').forEach(p => {
            p.classList.remove('active-continent');
        });

        // Skjul alle lande menuer
        document.querySelectorAll('.continent-menu .countries').forEach(country => {
            country.style.display = 'none';
        });

        // Vis denne continents lande, hvis de var skjult
        const countriesDiv = this.nextElementSibling;
        if (countriesDiv.style.display === 'none') {
            countriesDiv.style.display = 'block';
            this.classList.add('active-continent'); // Tilføj klassen kun hvis kontinentet åbnes
        } else {
            countriesDiv.style.display = 'none';
            this.classList.remove('active-continent'); // Fjern klassen hvis kontinentet lukkes
        }
    });
});


  
  
  



var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    navigation: {
      nextEl: ".next-slide",
      prevEl: ".prev-slide",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });


  /* quiz start */

  var questions = [
    {
        question: "En rejseplan bør omfatte detaljer om flyrejser, hotelreservationer og andre transportmidler?",
        answer: true
    },
    {
        question: "Det er vigtigt at have en nødprocedure og nødkontakter tilgængelige under rejsen?",
        answer: true
    },
    {
        question: "At have et gyldigt pas er ikke afgørende for rejser udenlands?",
        answer: false
    },
    {
        question: "Rejseadaptere er nødvendige for at oplade elektroniske enheder i udlandet?",
        answer: true
    },
    {
        question: "At lære grundlæggende fraser på det lokale sprog kan være nyttigt under rejsen?",
        answer: true
    },
    {
        question: "Det er en god idé at veksle til lokal valuta inden rejsen for at undgå gebyrer?",
        answer: true
    },
    {
        question: "Det er ikke nødvendigt at organisere din kuffert for at maksimere pladsen og lette pakningen?",
        answer: false
    }
];

var currentQuestion = 0;
var userAnswers = [];
var score = 0;

// Funktion til at vise det aktuelle spørgsmål
function showQuestion() {
    var question = questions[currentQuestion];
    var output = `<div class="question">${currentQuestion + 1}. ${question.question}</div>`;
    output += `<div><input type="radio" name="answer" value="true"> Sand</div>`;
    output += `<div><input type="radio" name="answer" value="false"> Falsk</div>`;
    output += `<button onclick="submitAnswer()">Næste</button>`;
    document.getElementById('quiz').innerHTML = output;
}

function submitAnswer() {
    var selectedOption = document.querySelector('input[name="answer"]:checked');

    if (selectedOption) {
        var userAnswer = selectedOption.value === "true"; // Konverter brugerens svar til en boolesk værdi
        userAnswers.push(userAnswer);
        
        if (userAnswer === questions[currentQuestion].answer) { // Sammenlign som booleske værdier
            score++;
        }
        currentQuestion++;
        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    } else {
        alert("Vælg venligst et svar.");
    }
}


// Funktion til at vise resultatet
function showResult() {
    var result = "";
    if (score <= 4) {
        result = "Du har brug for mere forberedelse til din rejse. Tag dig tid til at læse op på rejseforberedelser.";
    } else if (score <= 6) {
        result = "Godt gået! Du har et godt kendskab til rejseforberedelse, men der er altid plads til forbedringer.";
    } else {
        result = "Fantastisk! Du er en rejseforberedelsesmester. Du er klar til din næste rejse!";
    }

    var output = `<h2>Resultat</h2>`;
    questions.forEach((question, index) => {
        output += `<div class="question">${index + 1}. ${question.question}</div>`;
        output += `<div>Dit svar: ${userAnswers[index] ? "Sand" : "Falsk"}</div>`;
        output += `<div>Korrekt svar: ${question.answer ? "Sand" : "Falsk"}</div><br>`;
    });
    output += `<div class="result">${result}<br><br>Din score er: ${score} ud af ${questions.length}</div>`; // Added extra <br> for spacing
    document.getElementById('quiz').innerHTML = output;
    document.getElementById('reset-button-container').style.display = 'block';
}


// Funktion til at nulstille quizzen
function resetQuiz() {
    currentQuestion = 0;
    userAnswers = [];
    score = 0;
    showQuestion();
    document.getElementById('reset-button-container').style.display = 'none';
}

// Start quizzen
showQuestion();

/* quiz slut */


  // pop-up destination MOBIL

  function openPopup(showcaseId) {
    var popup = document.getElementById("popup" + showcaseId.slice(-1));
    popup.style.display = "block";
  }
  
  function closePopup(showcaseId) {
    var popup = document.getElementById("popup" + showcaseId.slice(-1));
    popup.style.display = "none";
  }


  // ny mobil nav test

  let menuToggle = document.querySelector('.menuToggle')
  let header = document.querySelector('header')
  menuToggle.onclick = function(){
      header.classList.toggle('active')
  }

  
