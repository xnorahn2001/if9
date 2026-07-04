const giftsData = [
    {
        id: 1,
        quote: "كل بداية جديدة فيها خير واجد، تفاءل بالخير دايم وتذكر إن كل يوم فرصة جديدة تكتب فيها قصة نجاحك!",
        omaimaSong: {
            title: "ألفين باب",
            url: "https://www.youtube.com/results?search_query=أميمة+طالب+ألفين+باب"
        },
        riddle: {
            question: "ما هو الشيء الذي يكتب ولا يقرأ؟",
            answer: "القلم ✏️"
        }
    },
    {
        id: 2,
        quote: "أنت بطل قصتك، لا تخلي أي عقبة توقفك عن حلمك، الصعاب هي اللي تصنع القوة الحقيقية وتصقلك.",
        omaimaSong: {
            title: "صاحي إنت",
            url: "https://www.youtube.com/results?search_query=أميمة+طالب+صاحي+إنت"
        },
        riddle: {
            question: "ما هو الشيء الذي كلما أخذت منه كبر وكلما أضفت إليه صغر؟",
            answer: "الحفرة 🕳️"
        }
    },
    {
        id: 3,
        quote: "واجه مخاوفك ولا تخاف، ترى ورا كل تحدي وصعوبة قوة حقيقية تكتشفها في نفسك وتخليك أقوى.",
        omaimaSong: {
            title: "البكى راحة",
            url: "https://www.youtube.com/results?search_query=أميمة+طالب+البكى+راحة"
        },
        riddle: {
            question: "ما هو الشيء الذي له أسنان ولا يعض؟",
            answer: "المشط 💈"
        }
    },
    {
        id: 4,
        quote: "ابنِ أحلامك حبة حبة وبكل حب، الأشياء الرهيبة دايم تاخذ وقتها عشان تكتمل وتظهر بأحسن صورة.",
        omaimaSong: {
            title: "خاطرك",
            url: "https://www.youtube.com/results?search_query=أميمة+طالب+خاطرك"
        },
        riddle: {
            question: "ما هو الشيء الذي اسمه على لونه؟",
            answer: "البيضة أو البرتقال 🍊"
        }
    },
    {
        id: 5,
        quote: "شغل الجماعة والتركيز والتخطيط الذكي هم سر الفوز في أي معركة تخوضها، سواء باللعب أو بالحياة.",
        omaimaSong: {
            title: "منهو غيرك",
            url: "https://www.youtube.com/results?search_query=أميمة+طالب+منهو+غيرك"
        },
        riddle: {
            question: "يسير بلا رجلين ولا يدخل إلا بالأذنين، ما هو؟",
            answer: "الصوت 🔊"
        }
    },
    {
        id: 6,
        quote: "الفشل مو نهاية الطريق، هو مجرد خطوة تعلمك كيف تضبط المرة الجاية، واصل التجربة يا وحش ولا توقف!",
        omaimaSong: {
            title: "أنا شاريك",
            url: "https://www.youtube.com/results?search_query=أميمة+طالب+أنا+شاريك"
        },
        riddle: {
            question: "ما هو الشيء الذي تراه في الليل ثلاث مرات وفي النهار مرة واحدة؟",
            answer: "حرف اللام 🌙"
        }
    },
    {
        id: 7,
        quote: "الناس الطيبة والقلوب النظيفة والتعاون هم أحسن شي يزين رحلتنا بالدنيا ويعاونا نعدي الصعب.",
        omaimaSong: {
            title: "معادلة صعبة",
            url: "https://www.youtube.com/results?search_query=أميمة+طالب+معادلة+صعبة"
        },
        riddle: {
            question: "ابن أمك وابن أبيك، وليس بأختك ولا بأخيك، فمن يكون؟",
            answer: "أنت نفسك 👤"
        }
    },
    {
        id: 8,
        quote: "الأعماق والمجهول فيها دايم أحسن الفرص، استكشف دنيتك بفضول ولا تهاب شي، فالكنوز مخفية بالعمق.",
        omaimaSong: {
            title: "أبوس راسك",
            url: "https://www.youtube.com/results?search_query=أميمة+طالب+أبوس+راسك"
        },
        riddle: {
            question: "ما هو الشيء الذي مليء بالثقوب ولكنه يحتفظ بالماء؟",
            answer: "الإسفنج 🧽"
        }
    },
    {
        id: 9,
        quote: "النجاة مو بس إنك تنحاش، النجاة إنك تفكر بروقان وتخطط صح وتثبت في الأوقات الصعبة والحرجة.",
        omaimaSong: {
            title: "إذا تسمحلي",
            url: "https://www.youtube.com/results?search_query=أميمة+طالب+إذا+تسمحلي"
        },
        riddle: {
            question: "ما هو الشيء الذي يمشي ويقف وليس له أرجل؟",
            answer: "الساعة ⏰"
        }
    },
    {
        id: 10,
        quote: "قراراتك اليوم هي اللي تسوي بكرا، فكر بقلبك وعقلك وامش ورا الشي اللي يسعدك ويرضي ضميرك.",
        omaimaSong: {
            title: "أنا الجسر",
            url: "https://www.youtube.com/results?search_query=أميمة+طالب+أنا+الجسر"
        },
        riddle: {
            question: "ما هو الشيء الذي إذا غليته تجمد？",
            answer: "البيض 🥚"
        }
    },
    {
        id: 11,
        quote: "حتى لو الدنيا زحمة وصجة، خلك دايم على طبيعتك وتفردك اللي يميزك عن غيرك ويخليك مميز.",
        omaimaSong: {
            title: "تركتك",
            url: "https://www.youtube.com/results?search_query=أميمة+طالب+تركتك"
        },
        riddle: {
            question: "شيء موجود في السماء إذا أضفت إليه حرفاً أصبح في الأرض؟",
            answer: "نجم (منجم) ⭐"
        }
    },
    {
        id: 12,
        quote: "دور على الحقيقة بذكاء، وثق بإحساسك وخلك فطن للي حولك واقرأ الشخصيات بذكائك المعتاد.",
        omaimaSong: {
            title: "تذكرني",
            url: "https://www.youtube.com/results?search_query=أميمة+طالب+تذكرني"
        },
        riddle: {
            question: "ما هو الشيء الذي يتحدث جميع لغات العالم؟",
            answer: "صدى الصوت 🗣️"
        }
    },
    {
        id: 13,
        quote: "الدنيا ذي عبارة عن مسرح، اختر دايم الدور اللي يفرح الناس وينشر الطاقة الحلوة والضحكة الصادقة.",
        omaimaSong: {
            title: "أما أكون",
            url: "https://www.youtube.com/results?search_query=أميمة+طالب+أما+أكون"
        },
        riddle: {
            question: "ما هو الشيء الذي كلما طال قصر؟",
            answer: "العمر أو الشمعة 🕯️"
        }
    },
    {
        id: 14,
        quote: "الهدوء والرضا يعطونك راحة بال ما تتقدر بذهب، خذ الأمور بروقان وسهالة وخلي قلبك مرتاح دايم.",
        omaimaSong: {
            title: "يا غايب",
            url: "https://www.youtube.com/results?search_query=أميمة+طالب+يا+غايب"
        },
        riddle: {
            question: "يتحرك دائماً حولك ولكنه لا يرى، ما هو؟",
            answer: "الهواء 💨"
        }
    },
    {
        id: 15,
        quote: "ورا كل مشكلة عقبة حل ذكي ومبتكر، بس غير زاوية شوفك للموضوع وبتلقى المخرج مفتوح قدامك.",
        omaimaSong: {
            title: "السكوت",
            url: "https://www.youtube.com/results?search_query=أميمة+طالب+السكوت"
        },
        riddle: {
            question: "ما هو الشيء الذي إذا لمسته صاح؟",
            answer: "الجرس 🔔"
        }
    },
    {
        id: 16,
        quote: "المغامرة بالبحر أحلى بكثير لما يكونون معاك أخوياك، طاقم مخلص يشاركك الضحك وتحديات الأمواج الكبيرة.",
        omaimaSong: {
            title: "فدوة لك",
            url: "https://www.youtube.com/results?search_query=أميمة+طالب+فدوة+لك"
        },
        riddle: {
            question: "أخت خالتك وليست خالتك، فمن هي؟",
            answer: "أمك ❤️"
        }
    },
    {
        id: 17,
        quote: "السرعة والدقة مع بعض هم اللي يسوون الفرق، ركز على هدفك وسدد ضربتك بكل ثقة وإيمان بمهارتك الرهيبة.",
        omaimaSong: {
            title: "بياع كذاب",
            url: "https://www.youtube.com/results?search_query=أميمة+طالب+بياع+كذاب"
        },
        riddle: {
            question: "ما هو البيت الذي ليس فيه أبواب ولا نوافذ؟",
            answer: "بيت الشعر 🎪"
        }
    },
    {
        id: 18,
        quote: "في اللحظات الصعبة والمواقف القاسية يبين معدنك الأصيل الطيب، خلك قوي ومستمر ولا تتخلى عن قيمك.",
        omaimaSong: {
            title: "الين اليوم",
            url: "https://www.youtube.com/results?search_query=أميمة+طالب+الين+اليوم"
        },
        riddle: {
            question: "له رأس وليس له عين، وله إبرة وليس له خيط، ما هو؟",
            answer: "الدبوس 📍"
        }
    },
    {
        id: 19,
        quote: "التخطيط الاستراتيجي وقراءة الخطوات الجاية بذكاء يخلونك تفوز على أي شي يوقف بوجهك مهما بدا صعب.",
        omaimaSong: {
            title: "أخافك",
            url: "https://www.youtube.com/results?search_query=أميمة+طالب+أخافك"
        },
        riddle: {
            question: "ما هو الشيء الذي يقرصك دون أن تراه؟",
            answer: "الجوع 😋"
        }
    },
    {
        id: 20,
        quote: "بالشدة يبين تماسك الفريق وتفاهمهم، وهو اللي ينجيك من أي ورطة أو خطر يهددكم.",
        omaimaSong: {
            title: "سكتة",
            url: "https://www.youtube.com/results?search_query=أميمة+طالب+سكتة"
        },
        riddle: {
            question: "ما هو الشيء الذي يجري ولا يستطيع المشي؟",
            answer: "الماء أو النهر 💧"
        }
    },
    {
        id: 21,
        quote: "حتى لو الدنيا ظلمة، دور على النور الصغير اللي يوجهك للصح وخلك دايم متفائل وبكرا أحسن إن شاء الله.",
        omaimaSong: {
            title: "خاف الله",
            url: "https://www.youtube.com/results?search_query=أميمة+طالب+خاف+الله"
        },
        riddle: {
            question: "ما هو الشيء الذي إذا أكلته كله تستفيد، وإذا أكلت نصفه تموت؟",
            answer: "السمسم (نصفه سم) 🥯"
        }
    },
    {
        id: 22,
        quote: "أنت اللي تبني مستقبلك، خطط ورتب لغد رهيب ومشرق تفتخر فيه وتفرح من حولك به.",
        omaimaSong: {
            title: "كل عاشق",
            url: "https://www.youtube.com/results?search_query=أميمة+طالب+كل+عاشق"
        },
        riddle: {
            question: "ما هو الشيء الذي يحترق لكي يضيء للآخرين？",
            answer: "الشمعة 🕯️"
        }
    },
    {
        id: 23,
        quote: "الرحلة والذكريات الحلوة اللي عشناها هي اللي تبقى بالقلب دايم، استمتع بكل لحظة تعيشها وصنع ذكريات رهيبة.",
        omaimaSong: {
            title: "ما نقصني",
            url: "https://www.youtube.com/results?search_query=أميمة+طالب+ما+نقصني"
        },
        riddle: {
            question: "ما هو الشيء الذي له عين واحدة ولكنه لا يرى بها؟",
            answer: "الإبرة 🪡"
        }
    },
    {
        id: 24,
        quote: "النجاح الحقيقي والبهجة الحقيقية يجون لما تسوي محتوى يسعد الناس ويرسم الضحكة على وجيههم الكريمة.",
        omaimaSong: {
            title: "خذني على قد قلبي",
            url: "https://www.youtube.com/results?search_query=أميمة+طالب+خذني+على+قد+قلبي"
        },
        riddle: {
            question: "ما هو الشيء الذي يسمع بلا أذن ويتكلم بلا لسان؟",
            answer: "الهاتف (أو التلفون) 📞"
        }
    },
    {
        id: 25,
        quote: "لا تخلي كل شي للصدفة والحظ، احسبها صح وخذ قرارك بثقة وعزيمة وبإذن الله تضبط معاك.",
        omaimaSong: {
            title: "تخيل",
            url: "https://www.youtube.com/results?search_query=أميمة+طالب+تخيل"
        },
        riddle: {
            question: "ما هو الكائن الذي ينام مرتدياً حذاءه ولا يفارقه؟",
            answer: "الحصان 🐴"
        }
    },
    {
        id: 26,
        quote: "انشر الخير والإيجابية والحماس وين ما رحت، وخلك السند اللي يحمي ويساعد الكل بالشدة والرخا.",
        omaimaSong: {
            title: "لا تسأل عيوني",
            url: "https://www.youtube.com/results?search_query=أميمة+طالب+لا+تسأل+عيوني"
        },
        riddle: {
            question: "ما هو الشيء الذي يملك أصابع ولكنه لا يملك لحماً ولا عظاماً؟",
            answer: "القفاز 🧤"
        }
    },
    {
        id: 27,
        quote: "القوة الحقيقية مو بالحجم ولا بالعضل، القوة بالإصرار والشجاعة اللي بقلبك عشان تسوي المستحيل وتكسر الصعاب.",
        omaimaSong: {
            title: "حكم القدر",
            url: "https://www.youtube.com/results?search_query=أميمة+طالب+حكم+القدر"
        },
        riddle: {
            question: "شيء يولد كبيراً ويموت صغيراً، ما هو؟",
            answer: "الشمعة 🕯️"
        }
    }
];

const targetDate = new Date('2026-07-04T00:00:00');

let openedGifts = [];
let timerClicksCount = 0;

const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Particle {
    constructor(x, y, isConfetti = false) {
        this.x = x || Math.random() * canvas.width;
        this.y = y || (x ? y : canvas.height + 20);
        this.size = isConfetti ? Math.random() * 8 + 4 : Math.random() * 4 + 1;
        this.speedX = isConfetti ? (Math.random() * 6 - 3) : (Math.random() * 1 - 0.5);
        this.speedY = isConfetti ? (Math.random() * -10 - 3) : (Math.random() * -1.5 - 0.5);
        this.gravity = isConfetti ? 0.25 : 0;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = Math.random() * 10 - 5;
        
        const colors = [
            'rgba(168, 85, 247, ', // Purple
            'rgba(236, 72, 153, ', // Pink
            'rgba(234, 179, 8, ',  // Gold
            'rgba(6, 182, 212, '   // Cyan
        ];
        this.colorBase = colors[Math.floor(Math.random() * colors.length)];
        this.alpha = isConfetti ? 1 : Math.random() * 0.5 + 0.2;
        this.fadeSpeed = isConfetti ? Math.random() * 0.015 + 0.005 : 0;
        this.isConfetti = isConfetti;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.speedY += this.gravity;
        this.rotation += this.rotationSpeed;
        
        if (this.isConfetti) {
            this.alpha -= this.fadeSpeed;
        } else {
            if (this.y < -10 || this.x < -10 || this.x > canvas.width + 10) {
                this.x = Math.random() * canvas.width;
                this.y = canvas.height + 20;
                this.speedY = Math.random() * -1.5 - 0.5;
                this.alpha = Math.random() * 0.5 + 0.2;
            }
        }
    }

    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.fillStyle = this.colorBase + this.alpha + ')';
        
        if (this.isConfetti) {
            ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        } else {
            ctx.beginPath();
            ctx.arc(0, 0, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.restore();
    }
}

function initParticles() {
    particles = [];
    const count = Math.min(60, Math.floor(window.innerWidth / 20));
    for (let i = 0; i < count; i++) {
        particles.push(new Particle());
    }
}
initParticles();

function createConfettiBurst(x, y) {
    const burstCount = 60;
    for (let i = 0; i < burstCount; i++) {
        particles.push(new Particle(x, y, true));
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles = particles.filter(p => {
        p.update();
        p.draw();
        return !p.isConfetti || p.alpha > 0;
    });
    
    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);

const lockScreen = document.getElementById('lock-screen');
const splashScreen = document.getElementById('splash-screen');
const mainContent = document.getElementById('main-content');
const timerUnlockBtn = document.getElementById('timer-unlock-btn');

function updateCountdown() {
    if (timerClicksCount > 0) return; // Don't overwrite the click countdown text
    const now = new Date();
    const diff = targetDate - now;
    
    if (diff <= 0) {
        document.getElementById('timer-days').textContent = '00';
        document.getElementById('timer-hours').textContent = '00';
        document.getElementById('timer-minutes').textContent = '00';
        document.getElementById('timer-seconds').textContent = '00';
        document.querySelector('.lock-hint').textContent = 'مبروك! خلص الوقت، اضغط الزر بالأسفل 27 مرة لفتح هداياك 😍🎉';
        
        if (timerUnlockBtn) {
            timerUnlockBtn.classList.remove('locked-btn');
        }
        return;
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('timer-days').textContent = String(days).padStart(2, '0');
    document.getElementById('timer-hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('timer-minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('timer-seconds').textContent = String(seconds).padStart(2, '0');
    
    const isBypassed = localStorage.getItem('faisal_bypass_timer') === 'true';
    if (isBypassed) {
        document.querySelector('.lock-hint').innerHTML = '<strong>طور المعاينة مفعل: اضغط الزر بالأسفل 27 مرة لتخطي التايمر والدخول 🛠️</strong>';
        if (timerUnlockBtn) {
            timerUnlockBtn.classList.remove('locked-btn');
        }
    } else {
        document.querySelector('.lock-hint').textContent = 'هداياك بتفتح هنا تلقائياً بـ 4 يوليو الساعة 12:00 ص تماماً! 🤫';
    }
}

function checkTimer() {
    if (window.location.search.includes('reset=true')) {
        localStorage.removeItem('faisal_bypass_timer');
    }
    
    if (window.location.search.includes('preview=true')) {
        localStorage.setItem('faisal_bypass_timer', 'true');
    }
    
    lockScreen.classList.remove('hidden');
    splashScreen.classList.add('hidden');
    mainContent.classList.add('hidden');
    
    updateCountdown();
}

timerUnlockBtn.addEventListener('click', (e) => {
    const now = new Date();
    const isBypassed = localStorage.getItem('faisal_bypass_timer') === 'true';
    
    if (now >= targetDate || isBypassed) {
        timerClicksCount++;
        
        if (timerClicksCount < 27) {
            musicBox.playChime();
            const rect = timerUnlockBtn.getBoundingClientRect();
            createConfettiBurst(rect.left + rect.width / 2, rect.top + rect.height / 2);
            
            const remaining = 27 - timerClicksCount;
            let countText = '';
            if (remaining === 1) {
                countText = 'باقي ضغطة واحدة فقط! 😱';
            } else if (remaining === 2) {
                countText = 'باقي ضغطتين! ✌️';
            } else if (remaining <= 10) {
                countText = `باقي ${remaining} ضغطات! ⏳`;
            } else {
                countText = `باقي ${remaining} ضغطة! ⏳`;
            }
            
            document.querySelector('.lock-hint').innerHTML = `<strong>كفووو! اضغط الزر بالأسفل 27 مرة لفتح هداياك! (${countText}) 😍🎉</strong>`;
            timerUnlockBtn.querySelector('span').textContent = `اضغطني! (باقي ${remaining})`;
        } else {
            // UNLOCK! Transition to the Splash Page
            musicBox.playChime(); 
            createConfettiBurst(window.innerWidth / 2, window.innerHeight / 2);
            timerUnlockBtn.querySelector('span').textContent = `تم الفتح! 🚀`;
            
            lockScreen.classList.add('fade-out');
            setTimeout(() => {
                lockScreen.classList.add('hidden');
                lockScreen.classList.remove('fade-out');
                splashScreen.classList.remove('hidden');
                mainContent.classList.add('hidden');
            }, 800);
        }
    } else {
        musicBox.playChime();
        
        const rect = timerUnlockBtn.getBoundingClientRect();
        createConfettiBurst(rect.left + rect.width / 2, rect.top + rect.height / 2);
        
        document.querySelector('.lock-hint').innerHTML = '<strong>توّ الوقت ما خلّص يا بطل! ارجع يوم 4 يوليو الساعة 12:00 ص تماماً 😉⏳</strong>';
        setTimeout(() => {
            if (new Date() < targetDate && localStorage.getItem('faisal_bypass_timer') !== 'true') {
                document.querySelector('.lock-hint').textContent = 'هداياك بتفتح هنا تلقائياً بـ 4 يوليو الساعة 12:00 ص تماماً! 🤫';
            }
        }, 4000);
    }
});

let timerInterval = setInterval(() => {
    if (lockScreen.classList.contains('hidden')) {
        clearInterval(timerInterval);
    } else {
        updateCountdown();
    }
}, 1000);

const startBtn = document.getElementById('start-btn');
const musicToggle = document.getElementById('music-toggle');
const giftsGrid = document.getElementById('gifts-grid');
const progressBar = document.getElementById('progress-bar');
const giftsOpenedCount = document.getElementById('gifts-opened-count');

const giftModal = document.getElementById('gift-modal');
const modalGiftId = document.getElementById('modal-gift-id');
const modalQuote = document.getElementById('modal-quote');
const modalSongLink = document.getElementById('modal-song-link');
const modalRiddleQuestion = document.getElementById('modal-riddle-question');
const modalRiddleAnswer = document.getElementById('modal-riddle-answer');
const revealAnswerBtn = document.getElementById('reveal-answer-btn');
const closeModalBtn = document.getElementById('close-modal-btn');

startBtn.addEventListener('click', () => {
    musicBox.start();
    
    splashScreen.classList.add('fade-out');
    setTimeout(() => {
        splashScreen.classList.add('hidden');
        mainContent.classList.remove('hidden');
        
        createConfettiBurst(window.innerWidth / 2, window.innerHeight / 2);
    }, 800);
});

musicToggle.addEventListener('click', () => {
    const playing = musicBox.toggle();
    if (playing) {
        musicToggle.classList.remove('muted');
        musicToggle.innerHTML = '<i class="fa-solid fa-music"></i>';
    } else {
        musicToggle.classList.add('muted');
        musicToggle.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
    }
});

function renderGifts() {
    giftsGrid.innerHTML = '';
    giftsData.forEach(gift => {
        const isOpened = openedGifts.includes(gift.id);
        const card = document.createElement('div');
        card.className = `gift-card ${isOpened ? 'opened' : ''}`;
        card.dataset.id = gift.id;
        
        card.innerHTML = `
            <div class="gift-card-icon-container">
                <i class="fa-solid ${isOpened ? 'fa-gift-open' : 'fa-gift'}"></i>
            </div>
            <span class="gift-card-number">${gift.id}</span>
            <span class="gift-card-label">البطاقة 🎁</span>
        `;
        
        card.addEventListener('click', (e) => openGift(gift.id, e));
        giftsGrid.appendChild(card);
    });
    
    updateProgress();
}

function updateProgress() {
    const total = giftsData.length;
    const openedCount = openedGifts.length;
    const percent = (openedCount / total) * 100;
    
    progressBar.style.width = `${percent}%`;
    giftsOpenedCount.textContent = openedCount;
}

function openGift(id, event) {
    const gift = giftsData.find(g => g.id === id);
    if (!gift) return;
    
    if (!openedGifts.includes(id)) {
        openedGifts.push(id);
        
        const card = document.querySelector(`.gift-card[data-id="${id}"]`);
        if (card) {
            card.classList.add('opened');
            const icon = card.querySelector('.gift-card-icon-container i');
            if (icon) {
                icon.className = 'fa-solid fa-gift-open';
            }
        }
        
        updateProgress();
    }
    
    const rect = event.currentTarget.getBoundingClientRect();
    const clickX = rect.left + rect.width / 2;
    const clickY = rect.top + rect.height / 2; 
    createConfettiBurst(clickX, clickY);
    
    musicBox.playChime();
    
    modalGiftId.textContent = gift.id;
    modalQuote.textContent = gift.quote;
    modalSongLink.href = gift.omaimaSong.url; 
    modalRiddleQuestion.textContent = gift.riddle.question;
    modalRiddleAnswer.textContent = gift.riddle.answer;
    
    // Reset answer toggle state when opening the gift modal
    modalRiddleAnswer.classList.add('hidden');
    revealAnswerBtn.textContent = 'كشف الإجابة 🔓';
    
    giftModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    giftModal.classList.add('hidden');
    document.body.style.overflow = ''; 
    // Also reset answer toggle state when closing the modal
    modalRiddleAnswer.classList.add('hidden');
    revealAnswerBtn.textContent = 'كشف الإجابة 🔓';
}

closeModalBtn.addEventListener('click', closeModal);
giftModal.addEventListener('click', (e) => {
    if (e.target === giftModal) {
        closeModal();
    }
});

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !giftModal.classList.contains('hidden')) {
        closeModal();
    }
});

// Event listener for revealing/hiding the riddle answer
revealAnswerBtn.addEventListener('click', () => {
    const isHidden = modalRiddleAnswer.classList.contains('hidden');
    if (isHidden) {
        modalRiddleAnswer.classList.remove('hidden');
        revealAnswerBtn.textContent = 'إخفاء الإجابة 🔒';
        musicBox.playChime(); // Play celebration chime on reveal
    } else {
        modalRiddleAnswer.classList.add('hidden');
        revealAnswerBtn.textContent = 'كشف الإجابة 🔓';
    }
});

checkTimer();
renderGifts();
