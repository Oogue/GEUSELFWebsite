// --- STATE MANAGEMENT ---
let currentView = 'home';
let quizState = {
    active: false,
    currentQuestion: 0,
    answers: []
};

// --- ROUTER LOGIC ---
function router(viewName) {
    currentView = viewName;
    
    // Update Navigation Styling
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('onclick').includes(viewName)) {
            link.classList.add('active');
        }
    });

    // Render the View
    const app = document.getElementById('app-container');
    const template = document.getElementById(`view-${viewName}`);
    
    if(template) {
        app.innerHTML = '';
        app.appendChild(template.content.cloneNode(true));
        window.scrollTo(0, 0);

        if(viewName === 'articles') renderResources();
        if(viewName === 'wall') renderWall();
    }
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// --- ARTICLES PAGE LOGIC ---
function renderResources(filter = 'all') {
    const grid = document.getElementById('resource-grid');
    if(!grid) return;
    
    grid.innerHTML = '';
    
    const filtered = filter === 'all' 
        ? resources 
        : resources.filter(r => r.type === filter);

    filtered.forEach(res => {
        const card = document.createElement('div');
        card.className = "bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full fade-in";
        
        let icon = res.type === 'video' ? 'play_circle' : (res.type === 'study' ? 'science' : 'article');
        let color = res.type === 'video' ? 'text-red-500' : (res.type === 'study' ? 'text-blue-500' : 'text-emerald-500');

        card.innerHTML = `
            <div class="h-48 overflow-hidden relative">
                <img src="${res.image}" class="w-full h-full object-cover" alt="${res.title}">
                <div class="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider flex items-center gap-1 ${color}">
                    <span class="material-symbols-outlined text-sm">${icon}</span>
                    ${res.type}
                </div>
            </div>
            <div class="p-6 flex flex-col flex-grow">
                <h3 class="text-xl font-bold text-slate-900 mb-2 font-serif">${res.title}</h3>
                <p class="text-sm text-indigo-600 mb-3 font-semibold">${res.source}</p>
                <p class="text-slate-600 text-sm mb-4 flex-grow leading-relaxed">${res.snippet}</p>
                <a href="${res.url}" target="_blank" class="mt-auto inline-flex items-center text-sm font-bold text-indigo-600 hover:text-indigo-800 transition-colors">
                    Read / Watch Source <span class="material-symbols-outlined text-sm ml-1">open_in_new</span>
                </a>
            </div>
        `;
        grid.appendChild(card);
    });
}

function filterResources(type, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => {
        b.classList.remove('bg-indigo-600', 'text-white', 'active');
        b.classList.add('bg-white', 'text-slate-600');
    });
    btn.classList.remove('bg-white', 'text-slate-600');
    btn.classList.add('bg-indigo-600', 'text-white', 'active');
    renderResources(type);
}

// --- QUIZ LOGIC ---
function startQuiz() {
    quizState.active = true;
    quizState.currentQuestion = 0;
    quizState.answers = new Array(questions.length).fill(null);
    
    document.getElementById('quiz-intro').classList.add('hidden');
    document.getElementById('quiz-interface').classList.remove('hidden');
    renderQuestion();
}

function renderQuestion() {
    const qIndex = quizState.currentQuestion;
    document.getElementById('question-tracker').innerText = `Question ${qIndex + 1} of ${questions.length}`;
    document.getElementById('progress-bar').style.width = `${((qIndex + 1) / questions.length) * 100}%`;
    document.getElementById('question-text').innerText = questions[qIndex];

    const container = document.getElementById('options-container');
    container.innerHTML = '';

    const labels = ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"];
    
    labels.forEach((label, idx) => {
        const val = idx + 1;
        const btn = document.createElement('button');
        btn.className = "w-full text-left p-4 rounded-lg border border-slate-200 hover:border-indigo-500 hover:bg-indigo-50 transition-all flex items-center group";
        btn.onclick = () => selectAnswer(val);
        
        btn.innerHTML = `
            <div class="w-6 h-6 rounded-full border-2 border-slate-300 group-hover:border-indigo-600 mr-4 flex items-center justify-center">
                <div class="w-3 h-3 rounded-full bg-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <span class="text-slate-700 font-medium group-hover:text-indigo-900">${label}</span>
        `;
        container.appendChild(btn);
    });
}

function selectAnswer(value) {
    quizState.answers[quizState.currentQuestion] = value;
    
    if (quizState.currentQuestion < questions.length - 1) {
        quizState.currentQuestion++;
        document.getElementById('options-container').classList.add('opacity-50');
        setTimeout(() => {
            document.getElementById('options-container').classList.remove('opacity-50');
            renderQuestion();
        }, 200);
    } else {
        calculateResults();
    }
}

function calculateResults() {
    let totalScore = 0;
    quizState.answers.forEach((ans, index) => {
        if (invertIndices.includes(index)) {
            totalScore += (6 - ans); 
        } else {
            totalScore += ans;
        }
    });

    document.getElementById('quiz-interface').classList.add('hidden');
    const resultContainer = document.getElementById('quiz-results');
    resultContainer.classList.remove('hidden');

    let resultData = {};

    if (totalScore <= 23) {
        resultData = {
            title: "The Pressure Stage",
            desc: "You might currently experience faith as something shaped by expectations, rules, or fear of disappointing others. Your beliefs may feel more like obligations than choices. This stage often includes guilt, pressure, or uncertainty about speaking your truth, and that’s completely human. Many people start their journey here.",
            img: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1527&auto=format&fit=crop",
            color: "text-emerald-700",
            advice: "It is okay to ask questions without losing your roots. Curiosity can strengthen faith, not just dismantle it."
        };
    } else if (totalScore <= 36) {
        resultData = {
            title: "The Deconstruction Stage",
            desc: "You are starting to think, question, and reevaluate what you grew up with. You are not rejecting everything, you are just still trying to understand what genuinely feels right for you. This stage is marked by curiosity, reflection, and the courage to explore beyond old expectations.",
            img: "https://images.unsplash.com/photo-1502421897748-305647490083?q=80&w=1632&auto=format&fit=crop",
            color: "text-amber-700",
            advice: "Be patient with yourself. Deconstruction is not a race. Allow yourself to mourn the certainty you lost."
        };
    } else {
        resultData = {
            title: "The Personal Spirituality Stage",
            desc: "Your spirituality comes from within. Instead of fear or pressure, you choose beliefs and practices that feel meaningful, calming, and authentic to you. You’re finding your voice, defining what faith means on your own terms, and building something grounded in understanding and growth.",
            img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1494&auto=format&fit=crop",
            color: "text-indigo-700",
            advice: "Your challenge now is to find community without compromising your freedom. Look for others who speak your language of the heart."
        };
    }

    resultContainer.innerHTML = `
        <div class="bg-white rounded-2xl shadow-2xl overflow-hidden border-t-8 border-indigo-500">
            <div class="grid md:grid-cols-2">
                <div class="h-64 md:h-auto relative">
                    <img src="${resultData.img}" class="w-full h-full object-cover">
                </div>
                <div class="p-8 md:p-12 flex flex-col justify-center">
                    <span class="uppercase tracking-widest text-sm font-bold text-slate-400 mb-2">Your Archetype</span>
                    <h2 class="text-4xl font-serif font-bold ${resultData.color} mb-6">${resultData.title}</h2>
                    <p class="text-slate-600 text-lg leading-relaxed mb-6">${resultData.desc}</p>
                    
                    <div class="bg-slate-50 p-6 rounded-lg border-l-4 ${resultData.color.replace('text', 'border')}">
                        <h3 class="font-bold text-slate-800 mb-2">Reflective Thought</h3>
                        <p class="italic text-slate-600">${resultData.advice}</p>
                    </div>
                    
                    <div class="mt-8 flex gap-4">
                        <button onclick="router('wall')" class="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold shadow transition-colors">
                            Share Thoughts on Wall
                        </button>
                        <button onclick="startQuiz()" class="px-6 py-3 text-slate-500 hover:text-indigo-600 font-bold">
                            Retake
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// --- WALL LOGIC ---
function renderWall() {
    const container = document.getElementById('wall-container');
    if(!container) return;
    
    container.innerHTML = '';
    
    wallNotes.forEach(note => {
        const el = document.createElement('div');
        // We only use "sticky-note" class. Layout is handled by the parent grid.
        el.className = "sticky-note"; 
        
        // Random rotation is applied here via inline styles
        el.style.setProperty('--rotation', `${note.rotation}deg`);
        el.style.backgroundColor = note.color;
        
        // Random transform to give that "messy corkboard" look
        el.style.transform = `rotate(${note.rotation}deg)`;
        
        el.innerHTML = `
            <p>"${note.text}"</p>
        `;
        container.appendChild(el);
    });
}

function postNote() {
    const input = document.getElementById('wall-input');
    const text = input.value.trim();
    
    if(text) {
        // Add to array (Ephemeral)
        wallNotes.unshift({
            text: text,
            rotation: Math.random() * 6 - 3, // Random tilt between -3 and +3 degrees
            color: ["#fffef0", "#fdf2f8", "#eff6ff", "#f0fdf4"][Math.floor(Math.random() * 4)]
        });
        
        input.value = '';
        renderWall(); 
        
        // Scroll to the wall so they see their note appear
        document.getElementById('wall-container').scrollIntoView({ behavior: 'smooth' });
    }
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    router('home');
});