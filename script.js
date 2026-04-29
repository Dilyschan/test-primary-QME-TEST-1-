// =====================================================
// ENGLISH PLACEMENT TEST - CAMBRIDGE PRIMARY
// =====================================================

// 1. KHAI BÁO MẢNG ẢNH
const photoFiles = [
    'image1.jpeg', 'image2.jpeg', 'image3.jpeg', 'image4.jpeg', 'image5.jpeg',
    'image6.jpeg', 'image7.jpeg', 'image8.jpeg', 'image9.jpeg', 'image10.jpeg'
];

// 2. DỮ LIỆU BÀI THI
const examData = {
    part1: {
        title: "Part 1: Vocabulary – Look & Choose",
        description: "Look at the picture and choose the correct word.",
        questions: [
            { id: 1, image: photoFiles[0], question: "What is this?", options: ["A cat", "A dog", "A bird", "A fish"], correct: 0 },
            { id: 2, image: photoFiles[1], question: "What is this?", options: ["A pen", "A book", "A ruler", "A bag"], correct: 1 },
            { id: 3, image: photoFiles[2], question: "What fruit is this?", options: ["A banana", "A mango", "An apple", "A grape"], correct: 2 },
            { id: 4, image: photoFiles[3], question: "What is the boy doing?", options: ["Running", "Swimming", "Jumping", "Sleeping"], correct: 1 },
            { id: 5, image: photoFiles[4], question: "What color is the car?", options: ["Blue", "Green", "Yellow", "red"], correct: 3 },
            { id: 6, image: photoFiles[5], question: "What is this?", options: ["A table", "A chair", "A desk", "A sofa"], correct: 1 },
            { id: 7, image: photoFiles[6], question: "What is the weather like?", options: ["Sunny", "Rainy", "Cloudy", "Snowy"], correct: 0 },
            { id: 8, image: photoFiles[7], question: "What is she wearing?", options: ["A dress", "A shirt", "A coat", "A hat"], correct: 0 },
            { id: 9, image: photoFiles[8], question: "What animal is this?", options: ["A tiger", "A lion", "An elephant", "A giraffe"], correct: 3 },
            { id: 10, image: photoFiles[9], question: "Where are the children?", options: ["At school", "At home", "At the park", "At the beach"], correct: 0 }
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
            { id: 20, question: "I like ___ to music.", options: ["listen", "listening", "listens", "listened"], correct: 1 },
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
            { id: 25, question: "When does Lily's family go to the supermarket?", options: ["Every morning", "On weekdays", "After school", "On weekends"], correct: 3 },
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
            { id: 30, question: '"Explore" means:', options: ["To stay at home", "To travel and discover new places", "To sleep", "To eat quickly"], correct: 1 },
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
            { id: 35, question: "I ___ born in 2016.", options: ["am", "is", "was", "were"], correct: 2 },
        ]
    }
};

// ===== STATE (TRẠNG THÁI) =====
let currentQuestion = 0;
let answers = {};
let studentInfo = {};
let timerInterval = null;
let timeRemaining = 40 * 60; 
let examStarted = false;
let examSubmitted = false;

const allQuestions = [
    ...examData.part1.questions,
    ...examData.part2.questions,
    ...examData.part3.questions,
    ...examData.part4.questions,
    ...examData.part5.questions,
];

// 3. GOOGLE SHEETS CONFIG 
const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbyP9EC5AonkB_vhsW4q3ZAWHRNtU3yawAdu8NVeywK5WAZIZSbIIN8hKfpADb-dt4sC/exec';

// ===== TOAST THÔNG BÁO =====
function showToast(msg, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-msg');
    if (!toast || !toastMsg) return;
    toastMsg.textContent = msg;
    toast.className = `toast flex items-center gap-3 border show ${type === 'error' ? 'bg-red-50 text-red-700 border-red-200' : type === 'warning' ? 'bg-amber-50 text-amber-700 border-amber-200' : 'bg-white text-gray-800 border-gray-200'}`;
    setTimeout(() => toast.classList.remove('show'), 3000);
}

// ===== CHUYỂN TRANG =====
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

// ===== XỬ LÝ FORM ĐĂNG KÝ =====
document.addEventListener('DOMContentLoaded', () => {
    if (window.lucide) lucide.createIcons();
    const form = document.getElementById('info-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const parentName = document.getElementById('parent-name').value.trim();
            const parentPhone = document.getElementById('parent-phone').value.trim();
            const studentName = document.getElementById('student-name').value.trim();
            const studentAge = document.getElementById('student-age').value;
            const studentClass = document.getElementById('student-class').value;

            if (!parentName || !parentPhone || !studentName || !studentAge || !studentClass) {
                document.getElementById('form-error').classList.remove('hidden');
                return;
            }

            const phoneRegex = /^[0-9+\s]{9,12}$/;
            if (!phoneRegex.test(parentPhone.replace(/\s/g, ''))) {
                const err = document.getElementById('form-error');
                err.classList.remove('hidden');
                err.querySelector('span').textContent = 'Số điện thoại không hợp lệ!';
                return;
            }

            studentInfo = {
                parentName,
                parentPhone: parentPhone.replace(/\s/g, ''),
                studentName,
                studentAge,
                studentClass,
                timestamp: new Date().toLocaleString('vi-VN')
            };

            document.getElementById('exam-student-name').textContent = studentName;
            document.getElementById('exam-student-class').textContent = `${studentClass} • ${studentAge} tuổi`;

            // CHUYỂN TRANG TRƯỚC ĐỂ TRÁNH ĐỨNG MÁY
            showPage('page-exam');
            startTimer();
            buildNavDots();
            renderQuestion();
            examStarted = true;

            // GỬI DỮ LIỆU CHẠY NGẦM
            sendToSheet(studentInfo);
        });
    }
});

// ===== ĐỒNG HỒ =====
function startTimer() {
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        timeRemaining--;
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            submitExam();
            showToast('Hết thời gian làm bài!', 'warning');
        }
        updateTimerDisplay();
    }, 1000);
}

function updateTimerDisplay() {
    const min = Math.floor(timeRemaining / 60).toString().padStart(2, '0');
    const sec = (timeRemaining % 60).toString().padStart(2, '0');
    const timerEl = document.getElementById('timer');
    if (timerEl) timerEl.textContent = `${min}:${sec}`;
}

// ===== ĐIỀU HƯỚNG CÂU HỎI =====
function buildNavDots() {
    const container = document.getElementById('nav-dots');
    if (!container) return;
    container.innerHTML = '';
    allQuestions.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.id = `nav-dot-${i}`;
        dot.onclick = () => { currentQuestion = i; renderQuestion(); };
        container.appendChild(dot);
    });
    updateNavDots();
}

function updateNavDots() {
    allQuestions.forEach((_, i) => {
        const dot = document.getElementById(`nav-dot-${i}`);
        if (!dot) return;
        const partNum = getPartNumber(i);
        const colors = { 1: 'bg-blue-400', 2: 'bg-green-400', 3: 'bg-purple-400', 4: 'bg-orange-400', 5: 'bg-pink-400' };
        const isActive = i === currentQuestion;
        const isAnswered = answers[i] !== undefined;
        dot.className = `nav-dot rounded-full transition-all flex-shrink-0 ${colors[partNum]} ${isActive ? 'w-6 h-2.5 opacity-100 ring-2 ring-offset-1' : 'w-2.5 h-2.5'} ${isAnswered ? 'opacity-100' : 'opacity-40'}`;
    });
}

function getPartNumber(idx) {
    if (idx < 10) return 1; if (idx < 20) return 2; if (idx < 25) return 3; if (idx < 30) return 4; return 5;
}

// ===== HIỂN THỊ CÂU HỎI =====
function renderQuestion() {
    const container = document.getElementById('exam-content');
    const q = allQuestions[currentQuestion];
    const partNum = getPartNumber(currentQuestion);
    
    document.getElementById('current-part-label').textContent = `Part ${partNum}/5`;
    document.getElementById('progress-bar').style.width = `${((currentQuestion + 1) / allQuestions.length) * 100}%`;
    document.getElementById('question-counter').textContent = `${currentQuestion + 1} / ${allQuestions.length}`;

    const btnNext = document.getElementById('btn-next');
    document.getElementById('btn-prev').disabled = currentQuestion === 0;
    
    if (currentQuestion === allQuestions.length - 1) {
        btnNext.innerHTML = 'Nộp bài <i data-lucide="send" class="w-4 h-4"></i>';
        btnNext.onclick = confirmSubmit;
    } else {
        btnNext.innerHTML = 'Câu sau <i data-lucide="chevron-right" class="w-4 h-4"></i>';
        btnNext.onclick = () => { currentQuestion++; renderQuestion(); };
    }

    let html = '';
    // Hiển thị phần Reading cho Part 3
    if (currentQuestion >= 20 && currentQuestion <= 24) {
        html += `<div class="bg-purple-50 border-2 border-purple-200 rounded-2xl p-5 mb-6 text-gray-700"><p class="font-bold mb-2">Reading Passage:</p>${examData.part3.passage}</div>`;
    }

    html += `<div class="bg-white rounded-2xl shadow-sm border p-5">
        <div class="flex gap-3 mb-5"><span class="bg-gray-100 font-bold w-8 h-8 rounded-lg flex items-center justify-center">${currentQuestion + 1}</span><h4 class="font-semibold text-lg">${q.question}</h4></div>`;
    
    if (q.image) html += `<div class="flex justify-center mb-5"><img src="${q.image}" class="max-h-64 rounded-lg shadow-sm"></div>`;

    html += `<div class="space-y-3">`;
    q.options.forEach((opt, idx) => {
        const isSel = answers[currentQuestion] === idx;
        html += `<div class="option-card ${isSel ? 'selected' : ''} border rounded-xl px-4 py-3 flex items-center gap-3 cursor-pointer" onclick="selectAnswer(${idx})">
            <div class="w-4 h-4 rounded-full border flex items-center justify-center">${isSel ? '<div class="w-2 h-2 bg-blue-500 rounded-full"></div>' : ''}</div>
            <span class="text-gray-800">${opt}</span>
        </div>`;
    });
    html += `</div></div>`;

    container.innerHTML = html;
    updateNavDots();
    if (window.lucide) lucide.createIcons();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function selectAnswer(idx) { answers[currentQuestion] = idx; renderQuestion(); }

function confirmSubmit() { document.getElementById('modal-submit').style.display = 'flex'; }
function closeSubmitModal() { document.getElementById('modal-submit').style.display = 'none'; }

// ===== NỘP BÀI VÀ TÍNH ĐIỂM =====
function submitExam() {
    closeSubmitModal();
    if (examSubmitted) return;
    examSubmitted = true;
    clearInterval(timerInterval);
    
    let correct = 0;
    let pScores = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    allQuestions.forEach((q, i) => {
        if (answers[i] === q.correct) {
            correct++;
            pScores[getPartNumber(i)]++;
        }
    });

    const percent = Math.round((correct / allQuestions.length) * 100);
    let level = percent >= 90 ? 'Movers (A1+)' : percent >= 70 ? 'Starters (A1)' : percent >= 50 ? 'Pre-Starters' : 'Beginner';

    document.getElementById('score-number').textContent = correct;
    document.getElementById('result-student-info').textContent = `${studentInfo.studentName} • ${percent}%`;
    
    const resultData = {
        ...studentInfo,
        score: correct,
        totalQuestions: allQuestions.length,
        percentage: percent,
        level: level,
        timeUsed: Math.floor((40 * 60 - timeRemaining) / 60) + ' phút',
        p1Score: `${pScores[1]}/10`, p2Score: `${pScores[2]}/10`, p3Score: `${pScores[3]}/5`, p4Score: `${pScores[4]}/5`, p5Score: `${pScores[5]}/5`,
        answers: JSON.stringify(answers)
    };

    sendToSheet(resultData);
    showPage('page-results');
    if (percent >= 70) createConfetti();
}

// ===== SEND TO GOOGLE SHEET (ĐÃ FIX LỖI) =====
function sendToSheet(data) {
    // Sửa lỗi so sánh === thay vì gán =
    if (!GOOGLE_SHEET_URL || GOOGLE_SHEET_URL.includes('AKfycbzj6LZz7KAM57f9xb77cZnUtrEbBznDefCJGHwTGw63zsoxY1RU1SRF4mE2f7af3LXB')) {
        console.log('📊 Lưu cục bộ (URL chưa đổi):', data);
        saveLocal(data);
        return;
    }

    const formData = new URLSearchParams();
    Object.keys(data).forEach(key => formData.append(key, data[key]));

    fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors' 
    }).catch(e => saveLocal(data));
}

function saveLocal(data) {
    const db = JSON.parse(localStorage.getItem('examResults') || '[]');
    db.push(data);
    localStorage.setItem('examResults', JSON.stringify(db));
}

function createConfetti() {
    for (let i = 0; i < 50; i++) {
        const p = document.createElement('div');
        p.className = 'confetti-piece';
        p.style.left = Math.random() * 100 + 'vw';
        p.style.background = ['#3b82f6', '#f59e0b', '#10b981'][Math.floor(Math.random() * 3)];
        document.body.appendChild(p);
        setTimeout(() => p.remove(), 3000);
    }
}
