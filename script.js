// =====================================================
// ENGLISH PLACEMENT TEST - CAMBRIDGE PRIMARY
// =====================================================

// ===== EXAM DATA =====
const examData = {
    part1: {
        title: "Part 1: Vocabulary – Look & Choose",
        description: "Look at the picture and choose the correct word.",
        questions: [
            { id: 1, image: "http://static.photos/nature/320x240/10", question: "What is this?", options: ["A cat", "A dog", "A bird", "A fish"], correct: 0 },
            { id: 2, image: "http://static.photos/education/320x240/20", question: "What is this?", options: ["A pen", "A book", "A ruler", "A bag"], correct: 1 },
            { id: 3, image: "http://static.photos/food/320x240/30", question: "What fruit is this?", options: ["A banana", "A mango", "An apple", "A grape"], correct: 2 },
            { id: 4, image: "http://static.photos/people/320x240/40", question: "What is the boy doing?", options: ["Running", "Swimming", "Jumping", "Sleeping"], correct: 1 },
            { id: 5, image: "http://static.photos/red/320x240/50", question: "What color is the car?", options: ["Blue", "Green", "Yellow", "Red"], correct: 3 },
            { id: 6, image: "http://static.photos/office/320x240/60", question: "What is this?", options: ["A table", "A chair", "A desk", "A sofa"], correct: 1 },
            { id: 7, image: "http://static.photos/nature/320x240/70", question: "What is the weather like?", options: ["Sunny", "Rainy", "Cloudy", "Snowy"], correct: 0 },
            { id: 8, image: "http://static.photos/people/320x240/80", question: "What is she wearing?", options: ["A dress", "A shirt", "A coat", "A hat"], correct: 0 },
            { id: 9, image: "http://static.photos/nature/320x240/90", question: "What animal is this?", options: ["A tiger", "A lion", "An elephant", "A giraffe"], correct: 3 },
            { id: 10, image: "http://static.photos/education/320x240/100", question: "Where are the children?", options: ["At school", "At home", "At the park", "At the beach"], correct: 0 }
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
let timeRemaining = 40 * 60; // 40 minutes in seconds
let examStarted = false;
let examSubmitted = false;

// All questions flat
const allQuestions = [
    ...examData.part1.questions,
    ...examData.part2.questions,
    ...examData.part3.questions,
    ...examData.part4.questions,
    ...examData.part5.questions
];

// ===== GOOGLE SHEETS CONFIG =====
// ⚠️ IMPORTANT: Replace this URL with your Google Apps Script Web App URL
// Follow these steps to set up:
// 1. Create a Google Sheet with columns: timestamp, parentName, parentPhone, studentName, studentAge, studentClass, score, totalQuestions, level, answers
// 2. Go to Extensions > Apps Script
// 3. Paste the doPost function (see comments at bottom of this file)
// 4. Deploy as Web App (Anyone can access)
// 5. Copy the URL and paste it below
const GOOGLE_SHEET_URL = 'AKfycbwJWfqd590KpV71QGztaMK17XAEZ_J3Vqaq8a7g1v_B7Rd4nSXzRriOPXQOkFMKAu4i';

// ===== PAGE NAVIGATION =====
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('active');
    });
    const page = document.getElementById(pageId);
    if (page) {
        // Small delay for animation
        setTimeout(() => {
            page.classList.add('active');
            window.scrollTo(0, 0);
        }, 100);
    }
    lucide.createIcons();
}

// ===== TOAST =====
function showToast(msg, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-msg');
    toastMsg.textContent = msg;
    
    if (type === 'error') {
        toast.className = 'toast bg-red-50 text-red-700 flex items-center gap-3 border border-red-200 show';
    } else if (type === 'warning') {
        toast.className = 'toast bg-amber-50 text-amber-700 flex items-center gap-3 border border-amber-200 show';
    } else {
        toast.className = 'toast bg-white text-gray-800 flex items-center gap-3 border border-gray-200 show';
    }

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ===== INFO FORM =====
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

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

            // Validate phone
            const phoneRegex = /^[0-9+\s]{9,12}$/;
            if (!phoneRegex.test(parentPhone.replace(/\s/g, ''))) {
                document.getElementById('form-error').classList.remove('hidden');
                document.getElementById('form-error').querySelector('span').textContent = 'Số điện thoại không hợp lệ!';
                return;
            }

            document.getElementById('form-error').classList.add('hidden');

            studentInfo = {
                parentName,
                parentPhone: parentPhone.replace(/\s/g, ''),
                studentName,
                studentAge,
                studentClass,
                timestamp: new Date().toLocaleString('vi-VN')
            };

            // Update exam header
            document.getElementById('exam-student-name').textContent = studentName;
            document.getElementById('exam-student-class').textContent = `${studentClass} • ${studentAge} tuổi`;

            // Send info to Google Sheet
            sendToSheet(studentInfo);

            // Start exam
            showPage('page-exam');
            startTimer();
            buildNavDots();
            renderQuestion();
            examStarted = true;
        });
    }
});

// ===== TIMER =====
function startTimer() {
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        timeRemaining--;
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            timeRemaining = 0;
            submitExam();
            showToast('Hết thời gian làm bài!', 'warning');
        }
        updateTimerDisplay();
        
        // Warning when < 5 min
        if (timeRemaining <= 300 && timeRemaining > 0) {
            document.getElementById('timer-display').classList.add('timer-warning');
            document.getElementById('timer').classList.remove('text-gray-800');
            document.getElementById('timer').classList.add('text-danger-600');
        }
    }, 1000);
}

function updateTimerDisplay() {
    const min = Math.floor(timeRemaining / 60).toString().padStart(2, '0');
    const sec = (timeRemaining % 60).toString().padStart(2, '0');
    const timerEl = document.getElementById('timer');
    if (timerEl) timerEl.textContent = `${min}:${sec}`;
}

// ===== NAV DOTS =====
function buildNavDots() {
    const container = document.getElementById('nav-dots');
    container.innerHTML = '';
    allQuestions.forEach((q, i) => {
        const partNum = getPartNumber(i);
        const colors = {
            1: 'bg-blue-400',
            2: 'bg-green-400',
            3: 'bg-purple-400',
            4: 'bg-orange-400',
            5: 'bg-pink-400'
        };
        const dot = document.createElement('button');
        dot.className = `nav-dot w-2.5 h-2.5 rounded-full ${colors[partNum]} opacity-50 hover:opacity-100 transition-all flex-shrink-0`;
        dot.title = `Câu ${i + 1}`;
        dot.onclick = () => {
            currentQuestion = i;
            renderQuestion();
            updateNavDots();
        };
        dot.id = `nav-dot-${i}`;
        container.appendChild(dot);
    });
    updateNavDots();
}

function updateNavDots() {
    allQuestions.forEach((_, i) => {
        const dot = document.getElementById(`nav-dot-${i}`);
        if (!dot) return;
        
        const isActive = i === currentQuestion;
        const isAnswered = answers[i] !== undefined;
        
        dot.className = `nav-dot rounded-full transition-all flex-shrink-0 ${
            isActive ? 'w-6 h-2.5 opacity-100 ring-2 ring-offset-1' : 'w-2.5 h-2.5'
        } ${
            isAnswered ? 'opacity-100' : 'opacity-50'
        }`;

        if (isActive) {
            const partNum = getPartNumber(i);
            const ringColors = { 1: 'ring-blue-400', 2: 'ring-green-400', 3: 'ring-purple-400', 4: 'ring-orange-400', 5: 'ring-pink-400' };
            dot.className += ` ${ringColors[partNum]}`;
        }
    });
}

function getPartNumber(questionIndex) {
    if (questionIndex < 10) return 1;
    if (questionIndex < 20) return 2;
    if (questionIndex < 25) return 3;
    if (questionIndex < 30) return 4;
    return 5;
}

// ===== RENDER QUESTION =====
function renderQuestion() {
    const container = document.getElementById('exam-content');
    const q = allQuestions[currentQuestion];
    const partNum = getPartNumber(currentQuestion);
    const partNames = { 1: 'Part 1: Vocabulary', 2: 'Part 2: Grammar', 3: 'Part 3: Reading', 4: 'Part 4: Matching', 5: 'Part 5: Fill in Blanks' };
    const partColors = {
        1: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', badge: 'bg-blue-100 text-blue-700' },
        2: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-700', badge: 'bg-green-100 text-green-700' },
        3: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700', badge: 'bg-purple-100 text-purple-700' },
        4: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700', badge: 'bg-orange-100 text-orange-700' },
        5: { bg: 'bg-pink-50', border: 'border-pink-200', text: 'text-pink-700', badge: 'bg-pink-100 text-pink-700' }
    };

    const colors = partColors[partNum];

    // Update header
    document.getElementById('current-part-label').textContent = `Part ${partNum}/5`;
    document.getElementById('current-part-name').textContent = partNames[partNum].split(': ')[1];

    // Update progress
    const progress = ((currentQuestion + 1) / allQuestions.length) * 100;
    document.getElementById('progress-bar').style.width = `${progress}%`;

    // Update counter
    document.getElementById('question-counter').textContent = `${currentQuestion + 1} / ${allQuestions.length}`;

    // Nav buttons
    document.getElementById('btn-prev').disabled = currentQuestion === 0;
    const isLast = currentQuestion === allQuestions.length - 1;
    const btnNext = document.getElementById('btn-next');
    if (isLast) {
        btnNext.innerHTML = 'Nộp bài <i data-lucide="send" class="w-4 h-4"></i>';
        btnNext.onclick = confirmSubmit;
    } else {
        btnNext.innerHTML = 'Câu sau <i data-lucide="chevron-right" class="w-4 h-4"></i>';
        btnNext.onclick = () => navigateQuestion(1);
    }

    // Build question HTML
    let html = '';

    // Part header (only on first question of each part or always show)
    const partKeys = ['part1', 'part2', 'part3', 'part4', 'part5'];
    const partStartIndices = [0, 10, 20, 25, 30];
    const partIndex = partStartIndices.indexOf(currentQuestion);
    
    if (partIndex !== -1) {
        const partKey = partKeys[partIndex];
        const partData = examData[partKey];
        html += `
            <div class="${colors.bg} ${colors.border} border-2 rounded-2xl p-4 mb-6">
                <div class="flex items-center gap-2 mb-2">
                    <span class="${colors.badge} text-xs font-bold px-2.5 py-1 rounded-lg">PART ${partNum}</span>
                    <h3 class="${colors.text} font-bold text-lg">${partData.title}</h3>
                </div>
                <p class="${colors.text} text-sm opacity-80">${partData.description}</p>
            </div>
        `;
    }

    // Reading passage for Part 3
    if (currentQuestion >= 20 && currentQuestion <= 24) {
        if (currentQuestion === 20) {
            html += `
                <div class="bg-purple-50 border-2 border-purple-200 rounded-2xl p-5 mb-6">
                    <div class="flex items-start gap-3">
                        <div class="w-8 h-8 bg-purple-200 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <i data-lucide="book-open" class="w-4 h-4 text-purple-700"></i>
                        </div>
                        <div>
                            <p class="text-purple-700 font-semibold text-sm mb-2">Read the passage carefully:</p>
                            <p class="text-gray-700 leading-relaxed">${examData.part3.passage}</p>
                        </div>
                    </div>
                </div>
            `;
        }
    }

    // Question card
    const qNum = currentQuestion + 1;
    html += `
        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-4">
            <div class="p-5">
                <div class="flex items-start gap-3 mb-5">
                    <span class="bg-gray-100 text-gray-600 text-sm font-bold w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">${qNum}</span>
                    <h4 class="text-gray-800 font-semibold text-lg leading-relaxed">${q.question}</h4>
                </div>
    `;

    // Image for Part 1
    if (currentQuestion < 10 && q.image) {
        html += `
            <div class="flex justify-center mb-5">
                <img src="${q.image}" alt="Question ${qNum}" class="question-img" onerror="this.style.display='none'">
            </div>
        `;
    }

    // Options
    html += `<div class="space-y-3">`;
    q.options.forEach((opt, optIdx) => {
        const isSelected = answers[currentQuestion] === optIdx;
        const optLabels = ['A', 'B', 'C', 'D'];
        html += `
            <div class="option-card ${isSelected ? 'selected' : ''} rounded-xl px-4 py-3.5 flex items-center gap-3" onclick="selectAnswer(${optIdx})">
                <div class="option-dot ${isSelected ? '' : ''}">
                    ${isSelected ? '<div style="width:10px;height:10px;background:white;border-radius:50%;"></div>' : ''}
                </div>
                <span class="text-sm font-medium text-gray-500 mr-1">${optLabels[optIdx]}.</span>
                <span class="text-gray-800 font-medium">${opt}</span>
            </div>
        `;
    });
    html += `</div>`;

    html += `
            </div>
        </div>
    `;

    container.innerHTML = html;
    updateNavDots();
    lucide.createIcons();

    // Scroll to top of content
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== SELECT ANSWER =====
function selectAnswer(optIdx) {
    answers[currentQuestion] = optIdx;
    renderQuestion();
}

// ===== NAVIGATE =====
function navigateQuestion(dir) {
    const newQ = currentQuestion + dir;
    if (newQ >= 0 && newQ < allQuestions.length) {
        currentQuestion = newQ;
        renderQuestion();
    }
}

// ===== CONFIRM SUBMIT =====
function confirmSubmit() {
    const unanswered = allQuestions.length - Object.keys(answers).length;
    const modal = document.getElementById('modal-submit');
    const msg = document.getElementById('modal-unanswered');
    
    if (unanswered > 0) {
        msg.textContent = `Bạn còn ${unanswered} câu chưa trả lời!`;
    } else {
        msg.textContent = 'Bạn đã trả lời tất cả câu hỏi.';
    }
    
    modal.style.display = 'flex';
}

function closeSubmitModal() {
    document.getElementById('modal-submit').style.display = 'none';
}

// ===== SUBMIT EXAM =====
function submitExam() {
    closeSubmitModal();
    
    if (examSubmitted) return;
    examSubmitted = true;
    
    // Stop timer
    clearInterval(timerInterval);
    
    // Calculate score
    let correct = 0;
    let partScores = { 1: { correct: 0, total: 10 }, 2: { correct: 0, total: 10 }, 3: { correct: 0, total: 5 }, 4: { correct: 0, total: 5 }, 5: { correct: 0, total: 5 } };

    allQuestions.forEach((q, i) => {
        const part = getPartNumber(i);
        if (answers[i] === q.correct) {
            correct++;
            partScores[part].correct++;
        }
    });

    const totalQuestions = allQuestions.length;
    const percentage = Math.round((correct / totalQuestions) * 100);

    // Determine level
    let level, levelColor, levelDesc, emoji;
    if (percentage >= 90) {
        level = 'Movers (A1+)';
        levelColor = 'text-green-600';
        levelDesc = 'Xuất sắc! Học viên có nền tảng tiếng Anh rất tốt, sẵn sàng cho chương trình Movers.';
        emoji = '🏆';
    } else if (percentage >= 70) {
        level = 'Starters (A1)';
        levelColor = 'text-blue-600';
        levelDesc = 'Tốt! Học viên có nền tảng vững chắc, phù hợp với chương trình Starters/Movers.';
        emoji = '🌟';
    } else if (percentage >= 50) {
        level = 'Pre-Starters';
        levelColor = 'text-amber-600';
        levelDesc = 'Khá! Học viên cần bổ sung thêm từ vựng và ngữ pháp cơ bản trước khi học Starters.';
        emoji = '💪';
    } else {
        level = 'Beginner';
        levelColor = 'text-red-600';
        levelDesc = 'Học viên cần bắt đầu học từ gốc với chương trình Phonics và từ vựng cơ bản.';
        emoji = '🌱';
    }

    // Render results
    document.getElementById('result-emoji').textContent = emoji;
    document.getElementById('result-student-info').textContent = `${studentInfo.studentName} • ${studentInfo.studentClass} • ${studentInfo.studentAge} tuổi`;

    // Animate score
    const scoreNum = document.getElementById('score-number');
    animateNumber(scoreNum, 0, correct, 1500);

    // Animate ring
    const circumference = 2 * Math.PI * 70; // 440
    const offset = circumference - (correct / totalQuestions) * circumference;
    setTimeout(() => {
        document.getElementById('score-ring').style.strokeDashoffset = offset;
    }, 200);

    // Part breakdown
    const breakdown = document.getElementById('score-breakdown');
    const partNames = ['Vocabulary', 'Grammar', 'Reading', 'Matching', 'Fill Blanks'];
    const partIcons = ['book-open', 'pencil', 'read', 'link', 'file-pen'];
    const breakdownColors = [
        { bg: 'bg-blue-50', text: 'text-blue-700', bar: 'bg-blue-500' },
        { bg: 'bg-green-50', text: 'text-green-700', bar: 'bg-green-500' },
        { bg: 'bg-purple-50', text: 'text-purple-700', bar: 'bg-purple-500' },
        { bg: 'bg-orange-50', text: 'text-orange-700', bar: 'bg-orange-500' },
        { bg: 'bg-pink-50', text: 'text-pink-700', bar: 'bg-pink-500' }
    ];
    
    let breakdownHtml = '';
    for (let i = 1; i <= 5; i++) {
        const ps = partScores[i];
        const pct = Math.round((ps.correct / ps.total) * 100);
        const c = breakdownColors[i-1];
        breakdownHtml += `
            <div class="${c.bg} rounded-xl p-3 text-center">
                <i data-lucide="${partIcons[i-1]}" class="w-5 h-5 ${c.text} mx-auto mb-1"></i>
                <p class="text-xs text-gray-500 mb-1">${partNames[i-1]}</p>
                <p class="${c.text} font-bold text-lg">${ps.correct}/${ps.total}</p>
                <div class="w-full bg-white/50 rounded-full h-1.5 mt-2">
                    <div class="${c.bar} h-1.5 rounded-full" style="width: ${pct}%"></div>
                </div>
            </div>
        `;
    }
    breakdown.innerHTML = breakdownHtml;

    // Level badge
    document.getElementById('level-badge').innerHTML = `
        <div class="text-center">
            <p class="text-gray-500 text-sm mb-2">Trình độ được đánh giá</p>
            <p class="font-fredoka text-3xl ${levelColor} font-bold mb-2">${level}</p>
            <p class="text-gray-600 text-sm">${levelDesc}</p>
            <div class="flex justify-center gap-4 mt-4 text-sm">
                <div class="text-center">
                    <p class="text-2xl font-bold text-gray-800">${percentage}%</p>
                    <p class="text-gray-400">Tỉ lệ đúng</p>
                </div>
                <div class="text-center">
                    <p class="text-2xl font-bold text-gray-800">${Math.floor((totalQuestions * 40 * 60 - timeRemaining) / 60)}</p>
                    <p class="text-gray-400">Phút làm bài</p>
                </div>
            </div>
        </div>
    `;

    // Answers review
    const reviewContainer = document.getElementById('answers-review');
    let reviewHtml = '';
    allQuestions.forEach((q, i) => {
        const userAnswer = answers[i];
        const isCorrect = userAnswer === q.correct;
        const part = getPartNumber(i);
        const optLabels = ['A', 'B', 'C', 'D'];
        
        reviewHtml += `
            <div class="px-4 py-3 flex items-start gap-3 ${isCorrect ? 'bg-green-50/50' : 'bg-red-50/50'}">
                <div class="flex-shrink-0 mt-0.5">
                    ${isCorrect 
                        ? '<div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center"><i data-lucide="check" class="w-3.5 h-3.5 text-green-600"></i></div>'
                        : '<div class="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center"><i data-lucide="x" class="w-3.5 h-3.5 text-red-600"></i></div>'
                    }
                </div>
                <div class="flex-1 min-w-0">
                    <p class="text-sm text-gray-800 font-medium">${i + 1}. ${q.question}</p>
                    <p class="text-sm ${isCorrect ? 'text-green-600' : 'text-red-600'} mt-0.5">
                        ${userAnswer !== undefined ? `Bạn chọn: ${optLabels[userAnswer]}. ${q.options[userAnswer]}` : 'Chưa trả lời'}
                    </p>
                    ${!isCorrect ? `<p class="text-sm text-green-600 mt-0.5">Đáp án đúng: ${optLabels[q.correct]}. ${q.options[q.correct]}</p>` : ''}
                </div>
                <span class="text-xs text-gray-400 flex-shrink-0">P${part}</span>
            </div>
        `;
    });
    reviewContainer.innerHTML = reviewHtml;

    // Send results to sheet
    const resultData = {
        ...studentInfo,
        score: correct,
        totalQuestions,
        percentage,
        level,
        timeUsed: Math.floor((totalQuestions * 40 * 60 - timeRemaining) / 60) + ' phút',
        p1Score: `${partScores[1].correct}/${partScores[1].total}`,
        p2Score: `${partScores[2].correct}/${partScores[2].total}`,
        p3Score: `${partScores[3].correct}/${partScores[3].total}`,
        p4Score: `${partScores[4].correct}/${partScores[4].total}`,
        p5Score: `${partScores[5].correct}/${partScores[5].total}`,
        answers: JSON.stringify(answers)
    };
    sendToSheet(resultData);

    // Show results page
    showPage('page-results');

    // Confetti for good scores
    if (percentage >= 70) {
        createConfetti();
    }
}

// ===== ANIMATE NUMBER =====
function animateNumber(el, start, end, duration) {
    const startTime = performance.now();
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
        const current = Math.round(start + (end - start) * eased);
        el.textContent = current;
        if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
}

// ===== CONFETTI =====
function createConfetti() {
    const colors = ['#3b82f6', '#f59e0b', '#10b981', '#ef4444', '#8b5cf6', '#ec4899'];
    for (let i = 0; i < 80; i++) {
        setTimeout(() => {
            const piece = document.createElement('div');
            piece.className = 'confetti-piece';
            piece.style.left = Math.random() * 100 + 'vw';
            piece.style.background = colors[Math.floor(Math.random() * colors.length)];
            piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
            piece.style.width = Math.random() * 8 + 5 + 'px';
            piece.style.height = Math.random() * 8 + 5 + 'px';
            piece.style.animationDuration = Math.random() * 2 + 2 + 's';
            piece.style.animationDelay = Math.random() * 0.5 + 's';
            document.body.appendChild(piece);
            setTimeout(() => piece.remove(), 4000);
        }, i * 30);
    }
}

// ===== SEND TO GOOGLE SHEET =====
function sendToSheet(data) {
    // If URL not configured, save locally
    if (GOOGLE_SHEET_URL === 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE') {
        console.log('📊 Data to send to Google Sheet:', data);
        // Save to localStorage as fallback
        const existingData = JSON.parse(localStorage.getItem('examResults') || '[]');
        existingData.push(data);
        localStorage.setItem('examResults', JSON.stringify(existingData));
        return;
    }

    const formData = new FormData();
    Object.keys(data).forEach(key => {
        formData.append(key, data[key]);
    });

    fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        body: formData
    })
    .then(res => {
        if (res.ok) {
            console.log('✅ Data sent to Google Sheet successfully!');
        }
    })
    .catch(err => {
        console.error('❌ Error sending data to Google Sheet:', err);
        // Fallback: save locally
        const existingData = JSON.parse(localStorage.getItem('examResults') || '[]');
        existingData.push(data);
        localStorage.setItem('examResults', JSON.stringify(existingData));
    });
}

// ===== KEYBOARD SHORTCUTS =====
document.addEventListener('keydown', (e) => {
    if (!examStarted || examSubmitted) return;
    
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        navigateQuestion(1);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        navigateQuestion(-1);
    } else if (e.key >= '1' && e.key <= '4') {
        const optIdx = parseInt(e.key) - 1;
        selectAnswer(optIdx);
    }
});

/*
====================================================================
GOOGLE APPS SCRIPT CODE - Paste this into your Google Sheet's Apps Script
====================================================================

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // If sheet doesn't have headers, add them
  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      'Timestamp', 'Parent Name', 'Parent Phone', 'Student Name', 
      'Student Age', 'Student Class', 'Score', 'Total Questions', 
      'Percentage', 'Level', 'Time Used', 'P1 Score', 'P2 Score',
      'P3 Score', 'P4 Score', 'P5 Score', 'Answers'
    ]);
  }
  
  sheet.appendRow([
    e.parameter.timestamp || new Date().toLocaleString(),
    e.parameter.parentName || '',
    e.parameter.parentPhone || '',
    e.parameter.studentName || '',
    e.parameter.studentAge || '',
    e.parameter.studentClass || '',
    e.parameter.score || '',
    e.parameter.totalQuestions || '',
    e.parameter.percentage || '',
    e.parameter.level || '',
    e.parameter.timeUsed || '',
    e.parameter.p1Score || '',
    e.parameter.p2Score || '',
    e.parameter.p3Score || '',
    e.parameter.p4Score || '',
    e.parameter.p5Score || '',
    e.parameter.answers || ''
  ]);
  
  return ContentService.createTextOutput(
    JSON.stringify({ status: 'success' })
  ).setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return ContentService.createTextOutput(
    JSON.stringify({ status: 'active' })
  ).setMimeType(ContentService.MimeType.JSON);
}

// After pasting this code:
// 1. Click Deploy > New deployment
// 2. Select type: Web app
// 3. Set "Who has access" to "Anyone"
// 4. Click Deploy
// 5. Copy the URL and paste it in the GOOGLE_SHEET_URL constant above
====================================================================
*/