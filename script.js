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
        'Asia': ['China', 'India', 'Japan', 'South Korea', 'Thailand'],
        'Europe': ['Germany', 'France', 'Italy', 'Spain', 'United Kingdom'],
        'Africa': ['Nigeria', 'Egypt', 'South Africa', 'Morocco', 'Kenya']
    };
    return data[continent];
}

function displayCountries(countries) {
    const displayDiv = document.querySelector('.displayCountries');
    displayDiv.innerHTML = countries.map(country => `<p>${country}</p>`).join('');
}


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

// dropdown menu test

document.addEventListener('DOMContentLoaded', function() {
    var dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    var nestedToggles = document.querySelectorAll('.nested-toggle');
  
    dropdownToggles.forEach(function(toggle) {
      toggle.addEventListener('click', function(event) {
        event.preventDefault();
        var dropdownMenu = toggle.nextElementSibling;
        dropdownMenu.classList.toggle('show');
      });
    });
  
    nestedToggles.forEach(function(toggle) {
      toggle.addEventListener('click', function(event) {
        event.preventDefault();
        var nestedMenu = toggle.nextElementSibling;
        nestedMenu.classList.toggle('show');
      });
    });
  });

  // pop-up destination MOBIL

  function openPopup(showcaseId) {
    var popup = document.getElementById("popup" + showcaseId.slice(-1));
    popup.style.display = "block";
  }
  
  function closePopup(showcaseId) {
    var popup = document.getElementById("popup" + showcaseId.slice(-1));
    popup.style.display = "none";
  }



