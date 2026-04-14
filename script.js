// =====================================================
// ENGLISH PLACEMENT TEST - CAMBRIDGE PRIMARY
// =====================================================

// ===== CONFIGURATION =====
const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbwUsWHXI9bpXU_M7Ku8yZBfM5cjo35Qm2rTyFDvD7-OuPmHayCyfMctI3wRp0mQBvGf/exec';

// ===== EXAM DATA =====
const examData = {
    part1: {
        title: "Part 1: Vocabulary – Look & Choose",
        description: "Look at the picture and choose the correct word.",
        questions: [
            { id: 1, image: "https://picsum.photos/id/237/320/240", question: "What is this?", options: ["A cat", "A dog", "A bird", "A fish"], correct: 1 },
            { id: 2, image: "https://picsum.photos/id/24/320/240", question: "What is this?", options: ["A pen", "A book", "A ruler", "A bag"], correct: 1 },
            { id: 3, image: "https://picsum.photos/id/42/320/240", question: "What fruit is this?", options: ["A banana", "A mango", "An apple", "A grape"], correct: 2 },
            { id: 4, image: "https://picsum.photos/id/103/320/240", question: "What is the boy doing?", options: ["Running", "Swimming", "Jumping", "Sleeping"], correct: 1 },
            { id: 5, image: "https://picsum.photos/id/111/320/240", question: "What color is the car?", options: ["Blue", "Green", "Yellow", "Red"], correct: 3 },
            { id: 6, image: "https://picsum.photos/id/160/320/240", question: "What is this?", options: ["A table", "A chair", "A desk", "A sofa"], correct: 1 },
            { id: 7, image: "https://picsum.photos/id/28/320/240", question: "What is the weather like?", options: ["Sunny", "Rainy", "Cloudy", "Snowy"], correct: 0 },
            { id: 8, image: "https://picsum.photos/id/64/320/240", question: "What is she wearing?", options: ["A dress", "A shirt", "A coat", "A hat"], correct: 0 },
            { id: 9, image: "https://picsum.photos/id/219/320/240", question: "What animal is this?", options: ["A tiger", "A lion", "An elephant", "A giraffe"], correct: 3 },
            { id: 10, image: "https://picsum.photos/id/0/320/240", question: "Where are the children?", options: ["At school", "At home", "At the park", "At the beach"], correct: 0 }
        ]
    },
    part2: {
        title: "Part 2: Grammar – Choose the Correct Answer",
        description: "Choose the best answer to complete each sentence.",
        questions: [
            { id: 11, question: "I ___ a student.", options: ["am", "is", "are", "be"], correct: 0 },
            { id: 12, question: "She ___ to school every day.", options: ["go", "goes", "going", "gone"], correct: 1 },
            { id: 13, question: "There ___ two cats under the table.", options: ["is", "are", "have", "has"], correct: 1 },
            { id: 14, question: "___ you like ice cream?", options: ["Do", "Does", "Are", "Is"], correct: 0 },
            { id: 15, question: "He can ___ very fast.", options: ["run", "runs", "running", "ran"], correct: 0 },
            { id: 16, question: "My mother ___ cooking dinner now.", options: ["is", "are", "am", "was"], correct: 0 },
            { id: 17, question: "This is ___ apple.", options: ["a", "an", "the", "some"], correct: 1 },
            { id: 18, question: "They ___ playing football yesterday.", options: ["was", "were", "are", "is"], correct: 1 },
            { id: 19, question: "___ many students are there in your class?", options: ["What", "How", "Where", "When"], correct: 1 },
            { id: 20, question: "I like ___ to music.", options: ["listen", "listening", "listens", "listened"], correct: 1 }
        ]
    },
    part3: {
        title: "Part 3: Reading – Read & Answer",
        description: "Read the passage and answer the questions.",
        passage: "Hello! My name is Lily. I am eight years old. I live in a small house with my parents and my little brother, Tom. Tom is five years old. Every morning, I walk to school with my friend, Mai. My favorite subject is English because I like learning new words. After school, I usually play in the park with my friends. On weekends, my family goes to the supermarket to buy food. I love my family very much!",
        questions: [
            { id: 21, question: "How old is Lily?", options: ["Seven", "Eight", "Nine", "Ten"], correct: 1 },
            { id: 22, question: "Who is Tom?", options: ["Lily's friend", "Lily's brother", "Lily's father", "Lily's cousin"], correct: 1 },
            { id: 23, question: "What is Lily's favorite subject?", options: ["Math", "Art", "English", "Science"], correct: 2 },
            { id: 24, question: "Where does Lily usually play after school?", options: ["At home", "At school", "In the park", "At the supermarket"], correct: 2 },
            { id: 25, question: "When does Lily's family go to the supermarket?", options: ["Every morning", "On weekdays", "After school", "On weekends"], correct: 3 }
        ]
    },
    part4: {
        title: "Part 4: Matching – Match the Words",
        description: "Choose the correct definition for each word.",
        questions: [
            { id: 26, question: '"Beautiful" means:', options: ["Very pretty", "Very fast", "Very big", "Very small"], correct: 0 },
            { id: 27, question: '"Hungry" means:', options: ["Want to sleep", "Want to eat", "Want to drink", "Want to play"], correct: 1 },
            { id: 28, question: '"Brave" means:', options: ["Scared of everything", "Not afraid of danger", "Very quiet", "Very funny"], correct: 1 },
            { id: 29, question: '"Delicious" means:', options: ["Very bad", "Very cold", "Very tasty", "Very long"], correct: 2 },
            { id: 30, question: '"Explore" means:', options: ["To stay at home", "To travel and discover new places", "To sleep", "To eat quickly"], correct: 1 }
        ]
    },
    part5: {
        title: "Part 5: Fill in the Blanks",
        description: "Choose the correct word to fill in each blank.",
        questions: [
            { id: 31, question: "We go to school ___ Monday ___ Friday.", options: ["from / to", "in / on", "at / on", "on / at"], correct: 0 },
            { id: 32, question: "The book is ___ the table.", options: ["in", "on", "under", "behind"], correct: 1 },
            { id: 33, question: "She ___ TV every evening.", options: ["watch", "watches", "watching", "watched"], correct: 1 },
            { id: 34, question: "___ there any milk in the fridge?", options: ["Is", "Are", "Do", "Does"], correct: 0 },
            { id: 35, question: "I ___ born in 2016.", options: ["am", "is", "was", "were"], correct: 2 }
        ]
    }
};

// ===== STATE =====
let currentQuestion = 0;
let answers = {};
let studentInfo = {};
let timerInterval = null;
let timeRemaining = 40 * 60; // 40 minutes
let examStarted = false;
let examSubmitted = false;

const allQuestions = [
    ...examData.part1.questions,
    ...examData.part2.questions,
    ...examData.part3.questions,
    ...examData.part4.questions,
    ...examData.part5.questions
];

// ===== CORE FUNCTIONS =====

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const page = document.getElementById(pageId);
    if (page) {
        setTimeout(() => {
            page.classList.add('active');
            window.scrollTo(0, 0);
        }, 100);
    }
    if (window.lucide) lucide.createIcons();
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.lucide) lucide.createIcons();
    const form = document.getElementById('info-form');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
});

async function handleFormSubmit(e) {
    e.preventDefault();
    const data = {
        parentName: document.getElementById('parent-name').value.trim(),
        parentPhone: document.getElementById('parent-phone').value.trim().replace(/\s/g, ''),
        studentName: document.getElementById('student-name').value.trim(),
        studentAge: document.getElementById('student-age').value,
        studentClass: document.getElementById('student-class').value,
        timestamp: new Date().toLocaleString('vi-VN')
    };

    if (!data.parentName || !data.parentPhone || !data.studentName) {
        document.getElementById('form-error').classList.remove('hidden');
        return;
    }

    studentInfo = data;
    document.getElementById('exam-student-name').textContent = data.studentName;
    document.getElementById('exam-student-class').textContent = `${data.studentClass} • ${data.studentAge} tuổi`;

    // Send initial info to Sheet
    sendToSheet({ ...studentInfo, status: "Started" });

    showPage('page-exam');
    startTimer();
    buildNavDots();
    renderQuestion();
    examStarted = true;
}

// ===== EXAM LOGIC =====

function renderQuestion() {
    const container = document.getElementById('exam-content');
    const q = allQuestions[currentQuestion];
    const partNum = getPartNumber(currentQuestion);
    
    // Update Progress
    const progress = ((currentQuestion + 1) / allQuestions.length) * 100;
    document.getElementById('progress-bar').style.width = `${progress}%`;
    document.getElementById('question-counter').textContent = `${currentQuestion + 1} / ${allQuestions.length}`;
    document.getElementById('current-part-label').textContent = `Part ${partNum}/5`;

    let html = '';
    
    // Add Reading Passage for Part 3
    if (currentQuestion >= 20 && currentQuestion <= 24 && currentQuestion === 20) {
        html += `<div class="bg-purple-50 p-4 rounded-xl mb-4 text-sm border border-purple-200">
                    <p class="font-bold mb-2 text-purple-700">Read the passage:</p>
                    <p class="italic text-gray-700">${examData.part3.passage}</p>
                 </div>`;
    }

    html += `
        <div class="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
            <h4 class="text-lg font-bold mb-4">${currentQuestion + 1}. ${q.question}</h4>
            ${(currentQuestion < 10 && q.image) ? `<img src="${q.image}" class="w-full max-w-xs mx-auto mb-4 rounded-lg shadow-sm">` : ''}
            <div class="space-y-3">
                ${q.options.map((opt, i) => `
                    <div class="option-card ${answers[currentQuestion] === i ? 'selected' : ''} p-3 border rounded-xl cursor-pointer hover:bg-blue-50 transition-all" onclick="selectAnswer(${i})">
                        <span class="font-bold mr-2">${String.fromCharCode(65 + i)}.</span> ${opt}
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    container.innerHTML = html;
    
    // Update buttons
    document.getElementById('btn-prev').disabled = currentQuestion === 0;
    const btnNext = document.getElementById('btn-next');
    if (currentQuestion === allQuestions.length - 1) {
        btnNext.innerHTML = 'Nộp bài';
        btnNext.onclick = confirmSubmit;
    } else {
        btnNext.innerHTML = 'Câu sau';
        btnNext.onclick = () => { currentQuestion++; renderQuestion(); buildNavDots(); };
    }
}

function selectAnswer(idx) {
    answers[currentQuestion] = idx;
    renderQuestion();
    buildNavDots();
}

function getPartNumber(idx) {
    if (idx < 10) return 1;
    if (idx < 20) return 2;
    if (idx < 25) return 3;
    if (idx < 30) return 4;
    return 5;
}

function buildNavDots() {
    const container = document.getElementById('nav-dots');
    container.innerHTML = allQuestions.map((_, i) => `
        <div class="w-2.5 h-2.5 rounded-full ${i === currentQuestion ? 'bg-blue-600 scale-125' : (answers[i] !== undefined ? 'bg-green-400' : 'bg-gray-200')} transition-all"></div>
    `).join('');
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeRemaining--;
        if (timeRemaining <= 0) { submitExam(); }
        const min = Math.floor(timeRemaining / 60).toString().padStart(2, '0');
        const sec = (timeRemaining % 60).toString().padStart(2, '0');
        document.getElementById('timer').textContent = `${min}:${sec}`;
    }, 1000);
}

// ===== SUBMISSION =====

function confirmSubmit() {
    if (confirm("Bạn có chắc chắn muốn nộp bài?")) {
        submitExam();
    }
}

function submitExam() {
    if (examSubmitted) return;
    examSubmitted = true;
    clearInterval(timerInterval);

    let correct = 0;
    let partScores = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

    allQuestions.forEach((q, i) => {
        if (answers[i] === q.correct) {
            correct++;
            partScores[getPartNumber(i)]++;
        }
    });

    const percentage = Math.round((correct / allQuestions.length) * 100);
    const timeUsed = 40 - Math.floor(timeRemaining / 60);

    const resultData = {
        ...studentInfo,
        score: correct,
        totalQuestions: allQuestions.length,
        percentage: percentage + "%",
        level: getLevel(percentage),
        timeUsed: `${timeUsed} phút`,
        p1Score: `${partScores[1]}/10`,
        p2Score: `${partScores[2]}/10`,
        p3Score: `${partScores[3]}/5`,
        p4Score: `${partScores[4]}/5`,
        p5Score: `${partScores[5]}/5`,
        answers: JSON.stringify(answers)
    };

    renderResults(resultData);
    sendToSheet(resultData);
    showPage('page-results');
}

function getLevel(pct) {
    if (pct >= 90) return "Movers (A1+)";
    if (pct >= 70) return "Starters (A1)";
    if (pct >= 50) return "Pre-Starters";
    return "Beginner";
}

function renderResults(data) {
    document.getElementById('score-number').textContent = data.score;
    document.getElementById('level-badge').innerHTML = `<p class="text-2xl font-bold text-blue-600">${data.level}</p>`;
    document.getElementById('result-student-info').textContent = `${data.studentName} - ${data.percentage}`;
}

// ===== GOOGLE SHEET SEND =====

function sendToSheet(data) {
    const searchParams = new URLSearchParams();
    
    // Mapping keys to match the Apps Script logic
    searchParams.append('timestamp', data.timestamp || new Date().toLocaleString());
    searchParams.append('parentName', data.parentName || '');
    searchParams.append('parentPhone', data.parentPhone || '');
    searchParams.append('studentName', data.studentName || '');
    searchParams.append('studentAge', data.studentAge || '');
    searchParams.append('studentClass', data.studentClass || '');
    searchParams.append('score', data.score || '0');
    searchParams.append('totalQuestions', data.totalQuestions || '35');
    searchParams.append('percentage', data.percentage || '0%');
    searchParams.append('level', data.level || '');
    searchParams.append('timeUsed', data.timeUsed || '');
    
    // Concatenate Part Scores for the "P1-P5 Score" column
    const pScores = `${data.p1Score || '0/10'}, ${data.p2Score || '0/10'}, ${data.p3Score || '0/5'}, ${data.p4Score || '0/5'}, ${data.p5Score || '0/5'}`;
    searchParams.append('partScores', pScores);
    searchParams.append('answers', data.answers || '');

    fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: searchParams.toString()
    })
    .then(() => console.log("📊 Data sent successfully"))
    .catch(e => console.error("❌ Sheet Error:", e));
}
