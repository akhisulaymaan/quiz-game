const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons') 
const scoreDiv = document.getElementById("scoreContainer")
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

nextButton.addEventListener('click', ()=>{ 
    currentQuestionIndex++ 
    setNextQuestion()
}) 

function startGame(){
startButton.classList.add('hide'); 
shuffledQuestions = questions.sort(() => Math.random() - .5) 
currentQuestionIndex = 0 
questionContainerElement.classList.remove('hide'); 
setNextQuestion();
} 

function setNextQuestion(){ 
    resetState() 
    showQuestion(shuffledQuestions[currentQuestionIndex]);
} 

function showQuestion(question){ 
    questionElement.innerHTML = question.question 
    question.answers.forEach(answer => { 
        const button = document.createElement('button') 
        button.innerHTML = answer.text 
        button.classList.add('btn') 
        if(answer.correct){ 
            button.dataset.correct = answer.correct 
        } 
        
        button.addEventListener('click', selectAnswer) 
        answerButtonsElement.appendChild(button) 
    })} 
    
    function selectAnswer(e){ 
        const selectedButton = e.target 
        const correct = selectedButton.dataset.correct 

        Array.from(answerButtonsElement.children).forEach(button => { 
            setStatusClass(button, button.dataset.correct) 
        }) 
        
        if(shuffledQuestions.length > currentQuestionIndex + 1){ 
            nextButton.classList.remove('hide') 
        }else{ 
            startButton.innerText = 'Restart' 
            startButton.classList.remove('hide') 
        } 
    } 
    function resetState(){ 
        
        clearStatusClass(document.body) 
        nextButton.classList.add('hide') 
        while(answerButtonsElement.firstChild){ 
            answerButtonsElement.removeChild(answerButtonsElement.firstChild) 
        } 
    } 
        
    function setStatusClass(element, correct){ 
        clearStatusClass(element) 
        if(correct){ 
            element.classList.add('correct') 
    }else{ 
        element.classList.add('wrong') 
    }
} 

// function scoreRender(){ 
//             scoreDiv.style.display = "block"; 
       
//         // calculate the amount of question percent answered by the user 
        
//         const scorePerCent = Math.round(100 * score/questions.length); 
        
//     }

    function clearStatusClass(element){ 
        element.classList.remove('correct') 
        element.classList.remove('wrong')} 
        const questions = [ 
            { question: 'What is the capital of Chad?',
                answers: [ { text: 'NDjamena', correct: true }, 
                    { text: 'Abuja', correct: false }, 
                    { text: 'Diffa', correct: false }, 
                    { text: 'Lagos', correct: false }, ] }, 
            { question: 'At what temperature does water boil?', 
                answers: [ { text: '120c', correct: false }, 
                    { text: '220c', correct: false }, 
                    { text: '100c', correct: true }, 
                    { text: '200c', correct: false }, ] }, 
            { question: 'How many bones are there in Human body?', 
                answers: [ { text: '206', correct: true }, 
                { text: '306', correct: false }, 
                { text: '406', correct: false }, 
                { text: '506', correct: false }, ] }, 
            { question: 'What planet is closest to Sun?', 
                answers: [ { text: 'Moon', correct: false }, 
                { text: 'Mercury', correct: true }, 
                { text: 'Jupiter', correct: false }, 
                { text: 'Earth', correct: false }, ] }, 
            { question: 'When did the Titanic sink?', 
                answers: [ { text: '1712', correct: false }, 
                { text: '1812', correct: false }, 
                { text: '1912', correct: true }, 
                { text: '2012', correct: false }, ] },
            { question: 'What is the symbol of Sodium?', 
                answers: [ { text: 'Na', correct: true }, 
                { text: 'Sd', correct: false }, 
                { text: 'Pk', correct: false }, 
                { text: 'Gd', correct: false }, ] },
            { question: 'DNA stands for what?', 
                answers: [ { text: 'Deoxyribonucleic Acid', correct: true }, 
                { text: 'Dehydro Nucleic Acid', correct: false }, 
                { text: 'Denutri Nucleic Acid', correct: false }, 
                { text: 'Detri Nucleo Acid', correct: false }, ] },
            { question: '1 byte is equal to how many bits?', 
                answers: [ { text: '8 bits', correct: true }, 
                { text: '9 bits', correct: false }, 
                { text: '10 bits', correct: false }, 
                { text: '11 bits', correct: false }, ] },
            { question: 'COVID-19 started from where in China?', 
                answers: [ { text: 'Shanghai', correct: false }, 
                { text: 'Beijing', correct: false }, 
                { text: 'Wuhan', correct: true }, 
                { text: 'Lagos', correct: false }, ] },
            { question: 'What is the fastest growing religion in the world?', 
                answers: [ { text: 'Hindu', correct: false }, 
                { text: 'Christianity', correct: false }, 
                { text: 'Islam', correct: true }, 
                { text: 'Judaism', correct: false }, ] }
            ];
