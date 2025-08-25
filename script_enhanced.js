// متغيرات عامة
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const menuBtn = document.getElementById("menuBtn");
const closeSidebar = document.getElementById("closeSidebar");
const messageInput = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");
const chatMessages = document.getElementById("chatMessages");
const themeToggle = document.getElementById("themeToggle");

// متغيرات مساعد الكتابة
let currentWritingMode = 'chat'; // 'chat', 'improve', 'generate', 'analyze'
let writingStyles = {};

// تحميل أساليب الكتابة المتاحة
async function loadWritingStyles() {
    try {
        const response = await fetch('/api/writing-styles');
        const data = await response.json();
        if (data.success) {
            writingStyles = data.styles;
        }
    } catch (error) {
        console.error('خطأ في تحميل أساليب الكتابة:', error);
    }
}

// ردود الذكاء الاصطناعي المحاكاة
const aiResponses = {
    greetings: [
        "أهلاً وسهلاً! كيف يمكنني مساعدتك اليوم؟ يمكنني مساعدتك في الكتابة، تحسين النصوص، أو أي موضوع آخر!",
        "مرحباً بك! أنا مساعدك الذكي للكتابة والمحادثة. كيف يمكنني خدمتك؟",
        "السلام عليكم! أنا هنا لمساعدتك في كتابة التعبيرات وتحسين النصوص. ما الذي تحتاجه؟"
    ],
    writing: [
        "ممتاز! يمكنني مساعدتك في كتابة تعبيرات رائعة. هل تريد:\n• كتابة تعبير جديد حول موضوع معين\n• تحسين نص موجود\n• تحليل جودة نص\n\nما الذي تفضل؟",
        "الكتابة فن جميل! أستطيع مساعدتك في:\n✍️ كتابة تعبيرات بأساليب مختلفة\n🔧 تحسين النصوص الموجودة\n📊 تحليل جودة الكتابة\n\nأخبرني ماذا تحتاج!",
        "سأساعدك في إنشاء محتوى كتابي متميز! يمكنني العمل بأساليب متنوعة: رسمي، إبداعي، بسيط، إقناعي، سردي، أو تفسيري. ما هو المطلوب؟"
    ],
    improve: [
        "ممتاز! أرسل لي النص الذي تريد تحسينه وسأعمل على:\n• تصحيح الأخطاء النحوية والإملائية\n• تحسين وضوح المعنى\n• تطوير تدفق الأفكار\n• إثراء المفردات\n\nانسخ النص هنا!",
        "رائع! سأساعدك في تحسين نصك. فقط الصق النص وأخبرني:\n• ما الأسلوب المطلوب؟ (رسمي، إبداعي، بسيط...)\n• على أي جوانب تريد التركيز؟\n\nأنا جاهز!",
    ],
    generate: [
        "ممتاز! سأكتب لك تعبيراً رائعاً. أحتاج لمعرفة:\n📝 موضوع التعبير\n🎨 الأسلوب المطلوب (رسمي، إبداعي، بسيط...)\n📏 الطول المطلوب (قصير، متوسط، طويل)\n📋 أي متطلبات خاصة؟\n\nأخبرني بالتفاصيل!",
        "سأكتب لك تعبيراً متميزاً! فقط حدد لي:\n• الموضوع\n• نوع الأسلوب\n• الطول المناسب\n• أي شروط إضافية\n\nوسأبدأ الكتابة فوراً!",
    ],
    math: [
        "يمكنني مساعدتك في حل المسائل الرياضية أيضاً! اعطني المسألة وسأحلها لك خطوة بخطوة.",
        "الرياضيات من تخصصاتي! ما هي المسألة التي تريد حلها؟",
        "أحب الرياضيات! شاركني المسألة وسأساعدك في حلها بالتفصيل."
    ],
    games: [
        "عالم الألعاب واسع ومثير! هل تبحث عن ألعاب معينة، نصائح، مراجعات، أو أخبار عن أحدث الإصدارات؟",
        "ألعاب الفيديو هي شغفي! ما نوع الألعاب التي تفضلها؟ هل تحب ألعاب الأكشن، المغامرات، الألغاز، أم الرياضة؟",
        "يمكنني تزويدك بمعلومات عن أشهر الألعاب، تاريخها، وحتى أسرارها الخفية. فقط اسأل!"
    ],
    general: [
        "هذا سؤال مثير للاهتمام! دعني أبحث عن إجابة شاملة لك.",
        "موضوع رائع للنقاش! يمكنني مساعدتك في استكشاف هذا الأمر بتفصيل أكثر.",
        "سؤال جيد! أحب هذا النوع من الأسئلة التي تحفز التفكير.",
        "هذا يفتح المجال لمناقشة شيقة! ما رأيك لو تعمقنا في الموضوع؟"
    ],
    youtube: [
        "قناة SMSM for Games تقدم محتوى ممتع ومفيد عن الألعاب والتحديات. ادعموها بالاشتراك!",
        "محتوى قناة SMSM for Games يركز على الألعاب والتحديات المثيرة. لا تفوتوا الفرصة للاشتراك!",
        "إذا كنت من محبي الألعاب والتحديات، فقناة SMSM for Games هي وجهتك المثالية على يوتيوب!"
    ]
};

// كلمات مفتاحية لتحديد نوع الرد
const keywords = {
    greetings: ["مرحبا", "أهلا", "السلام", "صباح", "مساء", "كيف حالك", "hello", "hi"],
    writing: ["كتابة", "تعبير", "مقال", "موضوع", "تأليف", "إنشاء", "نص", "كتب", "اكتب"],
    improve: ["تحسين", "تطوير", "تصحيح", "راجع", "عدل", "حسن", "صحح"],
    generate: ["اكتب لي", "أنشئ", "ولد", "اعمل", "كون"],
    math: ["رياضيات", "حساب", "جمع", "طرح", "ضرب", "قسمة", "معادلة", "مسألة"],
    games: ["لعبة", "ألعاب", "جيم", "بلايستيشن", "إكس بوكس", "كمبيوتر", "موبايل"],
    youtube: ["يوتيوب", "قناة", "فيديو", "اشتراك", "SMSM"]
};

// وظائف مساعد الكتابة المتقدمة
async function improveText(text, style = 'formal', focusAreas = ['grammar', 'clarity', 'flow']) {
    try {
        const response = await fetch('/api/improve-text', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                text: text,
                style: style,
                focus_areas: focusAreas
            })
        });
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('خطأ في تحسين النص:', error);
        return null;
    }
}

async function generateEssay(topic, style = 'formal', length = 'medium', requirements = []) {
    try {
        const response = await fetch('/api/generate-essay', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                topic: topic,
                style: style,
                length: length,
                requirements: requirements
            })
        });
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('خطأ في توليد التعبير:', error);
        return null;
    }
}

async function analyzeText(text) {
    try {
        const response = await fetch('/api/analyze-text', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                text: text
            })
        });
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('خطأ في تحليل النص:', error);
        return null;
    }
}

// تحديد نوع الرسالة
function detectMessageType(message) {
    const lowerMessage = message.toLowerCase();
    
    for (const [type, keywordList] of Object.entries(keywords)) {
        if (keywordList.some(keyword => lowerMessage.includes(keyword))) {
            return type;
        }
    }
    
    return 'general';
}

// معالجة الرسائل المتقدمة
async function processAdvancedMessage(message) {
    const messageType = detectMessageType(message);
    
    // تحديد إذا كانت الرسالة تحتوي على طلب تحسين نص
    if (messageType === 'improve' || (messageType === 'writing' && message.includes('تحسين'))) {
        // استخراج النص من الرسالة (بعد كلمات مثل "حسن هذا النص:" أو "صحح:")
        const textMatch = message.match(/(?:حسن|صحح|راجع|طور).*?[:：]\s*(.+)/i);
        if (textMatch && textMatch[1]) {
            const textToImprove = textMatch[1].trim();
            const result = await improveText(textToImprove);
            
            if (result && result.success) {
                return `✨ **تم تحسين النص بنجاح!**

**النص الأصلي:**
${result.original_text}

**النص المحسن:**
${result.improved_text}

**التحسينات المطبقة:**
${result.improvements.map(imp => `• ${imp}`).join('\n')}

**الأسلوب المطبق:** ${result.style_applied}

**اقتراحات إضافية:**
${result.suggestions.map(sug => `• ${sug}`).join('\n')}`;
            }
        }
    }
    
    // تحديد إذا كانت الرسالة تحتوي على طلب كتابة تعبير
    if (messageType === 'generate' || (messageType === 'writing' && (message.includes('اكتب') || message.includes('أنشئ')))) {
        // استخراج الموضوع من الرسالة
        const topicMatch = message.match(/(?:اكتب|أنشئ|كون).*?(?:تعبير|موضوع|مقال).*?(?:عن|حول)\s*(.+)/i);
        if (topicMatch && topicMatch[1]) {
            const topic = topicMatch[1].trim();
            const result = await generateEssay(topic);
            
            if (result && result.success) {
                return `📝 **${result.title}**

${result.essay}

---
**إحصائيات:**
• عدد الكلمات: ${result.word_count}
• الأسلوب المستخدم: ${result.style_used}

**هيكل التعبير:**
• **المقدمة:** ${result.structure.introduction}
• **العرض:** ${result.structure.body}  
• **الخاتمة:** ${result.structure.conclusion}`;
            }
        }
    }
    
    // إذا لم تكن رسالة متقدمة، استخدم الردود العادية
    return null;
}

// الحصول على رد الذكاء الاصطناعي
async function getAIResponse(message) {
    // محاولة معالجة الرسالة كطلب متقدم أولاً
    const advancedResponse = await processAdvancedMessage(message);
    if (advancedResponse) {
        return advancedResponse;
    }
    
    // إذا لم تكن رسالة متقدمة، استخدم الردود العادية
    const messageType = detectMessageType(message);
    const responses = aiResponses[messageType] || aiResponses.general;
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    
    return randomResponse;
}

// إضافة رسالة إلى المحادثة
function addMessage(content, isUser = false) {
    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${isUser ? "user-message" : "ai-message"}`;
    
    if (isUser) {
        messageDiv.innerHTML = `
            <div class="message-content">
                <p>${content}</p>
            </div>
        `;
    } else {
        messageDiv.innerHTML = `
            <img src="ai-logo.png" alt="SMSM AI" class="message-avatar">
            <div class="message-content">
                <p>${content.replace(/\n/g, '<br>')}</p>
            </div>
        `;
    }
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// إرسال رسالة
async function sendMessage() {
    const message = messageInput.value.trim();
    if (!message) return;
    
    // إضافة رسالة المستخدم
    addMessage(message, true);
    
    // مسح حقل الإدخال
    messageInput.value = "";
    
    // إظهار مؤشر الكتابة
    const typingDiv = document.createElement("div");
    typingDiv.className = "message ai-message typing";
    typingDiv.innerHTML = `
        <img src="ai-logo.png" alt="SMSM AI" class="message-avatar">
        <div class="message-content">
            <p>يكتب...</p>
        </div>
    `;
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    try {
        // الحصول على رد الذكاء الاصطناعي
        const response = await getAIResponse(message);
        
        // إزالة مؤشر الكتابة
        chatMessages.removeChild(typingDiv);
        
        // إضافة رد الذكاء الاصطناعي
        addMessage(response);
        
    } catch (error) {
        console.error('خطأ في الحصول على الرد:', error);
        chatMessages.removeChild(typingDiv);
        addMessage("عذراً، حدث خطأ. يرجى المحاولة مرة أخرى.");
    }
}

// وظائف الواجهة
function toggleSidebar() {
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
}

function showSection(sectionId) {
    // إخفاء جميع الأقسام
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // إظهار القسم المحدد
    document.getElementById(sectionId).classList.add('active');
    
    // إغلاق القائمة الجانبية
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
}

function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    themeToggle.querySelector('.theme-icon').textContent = isDark ? '☀️' : '🌙';
    
    // تغيير صورة زر الإرسال حسب الوضع
    updateSendButtonImage(isDark);
    
    // حفظ تفضيل المستخدم
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// وظيفة تحديث صورة زر الإرسال
function updateSendButtonImage(isDark) {
    if (isDark) {
        sendBtn.src = 'send_button_light.png'; // صورة فاتحة للوضع الداكن
    } else {
        sendBtn.src = 'send_button.png'; // صورة داكنة للوضع الفاتح
    }
}

// مستمعي الأحداث
menuBtn.addEventListener("click", toggleSidebar);
closeSidebar.addEventListener("click", toggleSidebar);
overlay.addEventListener("click", toggleSidebar);
themeToggle.addEventListener("click", toggleTheme);

messageInput.addEventListener("input", function() {
    const isDark = document.body.classList.contains("dark-mode");
    if (messageInput.value.trim() !== "") {
        sendBtn.src = "send_button_active.png";
    } else {
        updateSendButtonImage(isDark);
    }
});

sendBtn.addEventListener("click", sendMessage);
messageInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});

// تحميل تفضيلات المستخدم عند بدء التطبيق
document.addEventListener('DOMContentLoaded', function() {
    // تحميل الثيم المحفوظ
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.querySelector('.theme-icon').textContent = '☀️';
        updateSendButtonImage(true); // تحديث صورة الزر للوضع الداكن
    } else {
        updateSendButtonImage(false); // تحديث صورة الزر للوضع الفاتح
    }
    
    // تحميل أساليب الكتابة
    loadWritingStyles();
    
    // التركيز على حقل الإدخال
    messageInput.focus();
});

