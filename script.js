// get Students name and go to next page

const logName = document.getElementById('login-name');
const logSubmit = document.getElementById('login-submit');
const loginPage = document.querySelector('.login-page');
const logAlert = document.getElementById('login-alert');
const homeInstruct = document.querySelector('.home');
const startQuiz = document.getElementById('start-quiz');



logSubmit.addEventListener('click', () => {
    console.log(logName.value);
    loginPage.style.display = 'none';
    homeInstruct.style.display = 'flex';
});

logName.addEventListener('keyup', () => {
    if (logName.value.length < 5) {
        logSubmit.disabled = true
        logSubmit.style.opacity = ".4"
        logAlert.style.display = "block"
    } else {
        logSubmit.disabled = false
        logSubmit.style.opacity = "1"
        logAlert.style.display = "none"
    }
});

// start Quiz
startQuiz.addEventListener('click', () => {
    homeInstruct.style.display = 'none';
    // countdown timer

var sec = 1200,
countDiv = document.getElementById('countDown'),
questionsBox = document.querySelector('.Questions'),
submitRequest = document.querySelector('.submit-request'),
secpass,
countDown = setInterval(() => {
    'use strict'

    secpass();
}, 1000);

function secpass() {
    'use strict'

    var min = Math.floor(sec / 60),
        remSec = sec % 60,
        remMili = sec % sec % 60;

    if (remSec < 10) {
        remSec = '0' + remSec;
    }

    if (remMili < 10) {
        remMili = '0' + remMili;
    }

    if (min < 10) {
        min = '0' + min;
    }

    if (min < 10 ) {
        countDiv.classList.add('roundUp')
    }

    countDiv.innerHTML = min + "<span class='spacer'></span>" + ":" + "<span class='spacer'></span>" + remSec;

    if (sec > 0) {
        sec = sec - 1;
    }else {
        clearInterval(countDown);
        questionsBox.style.display = "none";
        submitRequest.style.display = "none";
        document.getElementById('submitted').innerHTML = 'Time Up'
        function add() {
            var sum = 0;
            var inputs = document.querySelectorAll('.q-input');
            for (let i = 0; i < inputs.length; i++) {
                if ( parseFloat(inputs[i].value)) {
                    sum += parseFloat(inputs[i].value);
                }
                document.getElementById('score').value = sum;
                
            }
        };
        add();
    }


    
};

});

// Next and Prev buttons

let currentQuestion = 0;
let questions = document.querySelectorAll(".question");
let questionButtons = document.querySelectorAll('.nav > li');
let nextButton = document.querySelector('.next');
let previousButton = document.querySelector('.previous');
let submit = document.getElementById('start-submit');

for (let i = 0; i < questionButtons.length; i++) {
    questionButtons[i].addEventListener('click', () => {
        questions[currentQuestion].classList.remove("active");
        questionButtons[currentQuestion].classList.remove("active");
        questions[currentQuestion = i].classList.add("active");
        questionButtons[currentQuestion].classList.add("active");

        if (i === 0) {
            if (previousButton.className.split(" ").indexOf("disabled") < 0) {
                previousButton.classList.add("disabled");
            } 
        }else {
            if (previousButton.className.split(" ").indexOf("disabled") >= 0) {
                previousButton.classList.remove("disabled");
            } 
        }
         if (i === questionButtons.length - 1) {
            if (nextButton.className.split(" ").indexOf("disabled") < 0) {
                nextButton.classList.add("disabled");
                nextButton.style.display = 'none';
                submit.style.display = 'block';
            } 
        }else {
            if (nextButton.className.split(" ").indexOf("disabled") >= 0) {
                nextButton.classList.remove("disabled");
                nextButton.style.display = 'block';
                submit.style.display = 'none';
            } 
        }
    });
};

nextButton.addEventListener("click", () => {
    if (currentQuestion < questionButtons.length - 1) {
        questionButtons[currentQuestion + 1].click();
    };
    if (currentQuestion === 19) {
        nextButton.style.display = 'none';
        submit.style.display = 'block';
    };
});

previousButton.addEventListener("click", () => {
    if (currentQuestion > 0) {
        questionButtons[currentQuestion - 1].click();
    }
    if (currentQuestion < 19) {
        nextButton.style.display = 'block';
        submit.style.display = 'none';
    };
});


// score on record
ques1 = document.querySelector('.question-box-1');
num1a = ques1.querySelector('#option-1');
num1b = document.getElementById('option-2-1');
num1c = ques1.querySelector('#option-3');
num1d = ques1.querySelector('#option-4');

ques2 = document.querySelector('.question-box-2');
num2a = ques2.querySelector('#option-1');
num2b = ques2.querySelector('#option-2');
num2c = ques2.querySelector('#option-3');
num2d = ques2.querySelector('#option-4');

ques3 = document.querySelector('.question-box-3');
num3a = ques3.querySelector('#option-1');
num3b = ques3.querySelector('#option-2');
num3c = ques3.querySelector('#option-3');
num3d = ques3.querySelector('#option-4');

ques4 = document.querySelector('.question-box-4');
num4a = ques4.querySelector('#option-1');
num4b = ques4.querySelector('#option-2');
num4c = ques4.querySelector('#option-3');
num4d = ques4.querySelector('#option-4');

ques5 = document.querySelector('.question-box-5');
num5a = ques5.querySelector('#option-1');
num5b = ques5.querySelector('#option-2');
num5c = ques5.querySelector('#option-3');
num5d = ques5.querySelector('#option-4');

ques6 = document.querySelector('.question-box-6');
num6a = ques6.querySelector('#option-1');
num6b = ques6.querySelector('#option-2');
num6c = ques6.querySelector('#option-3');
num6d = ques6.querySelector('#option-4');

ques7 = document.querySelector('.question-box-7');
num7a = ques7.querySelector('#option-1');
num7b = ques7.querySelector('#option-2');
num7c = ques7.querySelector('#option-3');
num7d = ques7.querySelector('#option-4');

ques8 = document.querySelector('.question-box-8');
num8a = ques8.querySelector('#option-1');
num8b = ques8.querySelector('#option-2');
num8c = ques8.querySelector('#option-3');
num8d = ques8.querySelector('#option-4');

ques9 = document.querySelector('.question-box-9');
num9a = ques9.querySelector('#option-1');
num9b = ques9.querySelector('#option-2');
num9c = ques9.querySelector('#option-3');
num9d = ques9.querySelector('#option-4');

ques10 = document.querySelector('.question-box-10');
num10a = ques10.querySelector('#option-1');
num10b = ques10.querySelector('#option-2');
num10c = ques10.querySelector('#option-3');
num10d = ques10.querySelector('#option-4');

ques11 = document.querySelector('.question-box-11');
num11a = ques11.querySelector('#option-1');
num11b = ques11.querySelector('#option-2');
num11c = ques11.querySelector('#option-3');
num11d = ques11.querySelector('#option-4');

ques12 = document.querySelector('.question-box-12');
num12a = ques12.querySelector('#option-1');
num12b = ques12.querySelector('#option-2');
num12c = ques12.querySelector('#option-3');
num12d = ques12.querySelector('#option-4');

ques13 = document.querySelector('.question-box-13');
num13a = ques13.querySelector('#option-1');
num13b = ques13.querySelector('#option-2');
num13c = ques13.querySelector('#option-3');
num13d = ques13.querySelector('#option-4');

ques14 = document.querySelector('.question-box-14');
num14a = ques14.querySelector('#option-1');
num14b = ques14.querySelector('#option-2');
num14c = ques14.querySelector('#option-3');
num14d = ques14.querySelector('#option-4');

ques15 = document.querySelector('.question-box-15');
num15a = ques15.querySelector('#option-1');
num15b = ques15.querySelector('#option-2');
num15c = ques15.querySelector('#option-3');
num15d = ques15.querySelector('#option-4');

ques16 = document.querySelector('.question-box-16');
num16a = ques16.querySelector('#option-1');
num16b = ques16.querySelector('#option-2');
num16c = ques16.querySelector('#option-3');
num16d = ques16.querySelector('#option-4');

ques17 = document.querySelector('.question-box-17');
num17a = ques17.querySelector('#option-1');
num17b = ques17.querySelector('#option-2');
num17c = ques17.querySelector('#option-3');
num17d = ques17.querySelector('#option-4');

ques18 = document.querySelector('.question-box-18');
num18a = ques18.querySelector('#option-1');
num18b = ques18.querySelector('#option-2');
num18c = ques18.querySelector('#option-3');
num18d = ques18.querySelector('#option-4');

ques19 = document.querySelector('.question-box-19');
num19a = ques19.querySelector('#option-1');
num19b = ques19.querySelector('#option-2');
num19c = ques19.querySelector('#option-3');
num19d = ques19.querySelector('#option-4');

ques20 = document.querySelector('.question-box-20');
num20a = ques20.querySelector('#option-1');
num20b = ques20.querySelector('#option-2');
num20c = ques20.querySelector('#option-3');
num20d = ques20.querySelector('#option-4');


// Number 1
const answers1 = ques1.querySelectorAll('input');

for (const answer1 of answers1) {
    answer1.onclick = (e) => {
        console.log(e.target.value);
        document.getElementById('q-input-1').value = e.target.value;
    }
};


// Number 2
const answers2 = ques2.querySelectorAll('input');

for (const answer2 of answers2) {
    answer2.onclick = (e) => {
        console.log(e.target.value);
        document.getElementById('q-input-2').value = e.target.value;
    }
};


// Number 3
const answers3 = ques3.querySelectorAll('input');

for (const answer3 of answers3) {
    answer3.onclick = (e) => {
        console.log(e.target.value);
        document.getElementById('q-input-3').value = e.target.value;
    }
};


// Number 4
const answers4 = ques4.querySelectorAll('input');

for (const answer4 of answers4) {
    answer4.onclick = (e) => {
        console.log(e.target.value);
        document.getElementById('q-input-4').value = e.target.value;
    }
};


// Number 5
const answers5 = ques5.querySelectorAll('input');

for (const answer5 of answers5) {
    answer5.onclick = (e) => {
        console.log(e.target.value);
        document.getElementById('q-input-5').value = e.target.value;
    }
};


// Number 6
const answers6 = ques6.querySelectorAll('input');

for (const answer6 of answers6) {
    answer6.onclick = (e) => {
        console.log(e.target.value);
        document.getElementById('q-input-6').value = e.target.value;
    }
};


// Number 7
const answers7 = ques7.querySelectorAll('input');

for (const answer7 of answers7) {
    answer7.onclick = (e) => {
        console.log(e.target.value);
        document.getElementById('q-input-7').value = e.target.value;
    }
};


// Number 8
const answers8 = ques8.querySelectorAll('input');

for (const answer8 of answers8) {
    answer8.onclick = (e) => {
        console.log(e.target.value);
        document.getElementById('q-input-8').value = e.target.value;
    }
};


// Number 9
const answers9 = ques9.querySelectorAll('input');

for (const answer9 of answers9) {
    answer9.onclick = (e) => {
        console.log(e.target.value);
        document.getElementById('q-input-9').value = e.target.value;
    }
};


// Number 10
const answers10 = ques10.querySelectorAll('input');

for (const answer10 of answers10) {
    answer10.onclick = (e) => {
        console.log(e.target.value);
        document.getElementById('q-input-10').value = e.target.value;
    }
};


// Number 11
const answers11 = ques11.querySelectorAll('input');

for (const answer11 of answers11) {
    answer11.onclick = (e) => {
        console.log(e.target.value);
        document.getElementById('q-input-11').value = e.target.value;
    }
};


// Number 12
const answers12 = ques12.querySelectorAll('input');

for (const answer12 of answers12) {
    answer12.onclick = (e) => {
        console.log(e.target.value);
        document.getElementById('q-input-12').value = e.target.value;
    }
};


// Number 13
const answers13 = ques13.querySelectorAll('input');

for (const answer13 of answers13) {
    answer13.onclick = (e) => {
        console.log(e.target.value);
        document.getElementById('q-input-13').value = e.target.value;
    }
};


// Number 14
const answers14 = ques14.querySelectorAll('input');

for (const answer14 of answers14) {
    answer14.onclick = (e) => {
        console.log(e.target.value);
        document.getElementById('q-input-14').value = e.target.value;
    }
};


// Number 15
const answers15 = ques15.querySelectorAll('input');

for (const answer15 of answers15) {
    answer15.onclick = (e) => {
        console.log(e.target.value);
        document.getElementById('q-input-15').value = e.target.value;
    }
};


// Number 16
const answers16 = ques16.querySelectorAll('input');

for (const answer16 of answers16) {
    answer16.onclick = (e) => {
        console.log(e.target.value);
        document.getElementById('q-input-16').value = e.target.value;
    }
};


// Number 17
const answers17 = ques17.querySelectorAll('input');

for (const answer17 of answers17) {
    answer17.onclick = (e) => {
        console.log(e.target.value);
        document.getElementById('q-input-17').value = e.target.value;
    }
};


// Number 18
const answers18 = ques18.querySelectorAll('input');

for (const answer18 of answers18) {
    answer18.onclick = (e) => {
        console.log(e.target.value);
        document.getElementById('q-input-18').value = e.target.value;
    }
};


// Number 19
const answers19 = ques19.querySelectorAll('input');

for (const answer19 of answers19) {
    answer19.onclick = (e) => {
        console.log(e.target.value);
        document.getElementById('q-input-19').value = e.target.value;
    }
};


// Number 20
const answers20 = ques20.querySelectorAll('input');

for (const answer20 of answers20) {
    answer20.onclick = (e) => {
        console.log(e.target.value);
        document.getElementById('q-input-20').value = e.target.value;
    }
};


//Observer

const rotaters = document.querySelectorAll('.rotate');


const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -200px 0px"
};

const appearOnScroll = new IntersectionObserver (function(entries,appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);

rotaters.forEach(rotater => {
    appearOnScroll.observe(rotater);
});

// submit request
const submitNo = document.getElementById('submit-no');
const submitYes = document.getElementById('submit-yes');
var questionsBox = document.querySelector('.Questions');
var submitRequest = document.querySelector('.submit-request');
const result = document.querySelector('.result');
const submittedUser = document.getElementById('users-name');
const score = document.getElementById('score');




submit.addEventListener('click', () => {
    questionsBox.style.display = 'none';
    result.style.display = 'none';
    submitRequest.style.display = 'flex';
});

submitNo.addEventListener('click', () => {
    questionsBox.style.display = 'block';
    result.style.display = 'none';
    submitRequest.style.display = 'none';
});

submitYes.addEventListener('click', () => {
    questionsBox.style.display = 'none';
    result.style.display = 'flex';
    submitRequest.style.display = 'none';
    submittedUser.innerHTML = logName.value;
    function add() {
        var sum = 0;
        var inputs = document.querySelectorAll('.q-input');
        for (let i = 0; i < inputs.length; i++) {
            if ( parseFloat(inputs[i].value)) {
                sum += parseFloat(inputs[i].value);
            }
            document.getElementById('score').value = sum;
            
        }
    };
    add();

    if (score.value > 9) {
        score.classList.add('passed')
    } else{
        score.classList.remove('passed')
    };
   
});









