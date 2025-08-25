// متغيرات عامة
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const menuBtn = document.getElementById("menuBtn");
const closeSidebar = document.getElementById("closeSidebar");
const messageInput = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");
const chatMessages = document.getElementById("chatMessages");
const themeToggle = document.getElementById("themeToggle");

// ردود الذكاء الاصطناعي المحاكاة
const aiResponses = {
    greetings: [
        "أهلاً وسهلاً! كيف يمكنني مساعدتك اليوم?",
        "مرحباً بك! أنا هنا لمساعدتك في أي شيء تحتاجه.",
        "السلام عليكم! كيف حالك اليوم?"
    ],
    math: [
        "يمكنني مساعدتك في حل المسائل الرياضية. اعطني المسألة وسأحلها لك!",
        "الرياضيات من تخصصاتي! ما هي المسألة التي تريد حلها?",
        "أحب الرياضيات! شاركني المسألة وسأساعدك في حلها خطوة بخطوة."
    ],
    writing: [
        "يمكنني مساعدتك في كتابة تعبيرات ومقالات عن أي موضوع تريده.",
        "الكتابة فن جميل! عن أي موضوع تريد أن تكتب?",
        "سأساعدك في كتابة تعبير رائع. ما هو الموضوع المطلوب?"
    ],
    games: [
        "عالم الألعاب واسع ومثير! هل تبحث عن ألعاب معينة، نصائح، مراجعات، أو أخبار عن أحدث الإصدارات?",
        "ألعاب الفيديو هي شغفي! ما نوع الألعاب التي تفضلها? هل تحب ألعاب الأكشن، المغامرات، الألغاز، أم الرياضة?",
        "يمكنني تزويدك بمعلومات عن أشهر الألعاب، تاريخها، وحتى أسرارها الخفية. فقط اسأل!"
    ],
    phones: [
        "الهواتف الذكية أصبحت جزءاً لا يتجزأ من حياتنا. هل تريد معرفة المزيد عن أحدث الهواتف، مقارنات بين الموديلات، أو نصائح للاستخدام الأمثل?",
        "أنا على اطلاع دائم بآخر التطورات في عالم الهواتف. ما هي العلامة التجارية أو الميزة التي تثير اهتمامك?",
        "سواء كنت تبحث عن هاتف جديد، أو تريد استكشاف ميزات هاتفك الحالي، أنا هنا لمساعدتك!"
    ],
    general: [
        "هذا سؤال مثير للاهتمام! دعني أفكر فيه وأقدم لك إجابة مفيدة.",
        "موضوع رائع للنقاش! يمكنني مساعدتك في استكشاف هذا الأمر بتفصيل أكثر.",
        "سؤال جيد! أحب هذا النوع من الأسئلة التي تحفز التفكير.",
        "هذا يفتح المجال لمناقشة شيقة! ما رأيك لو تعمقنا في الموضوع؟",
        "إجابة ممتازة تحتاج إلى تفكير عميق. دعني أشاركك وجهة نظري.",
        "موضوع يستحق الاهتمام! هل تريد أن نناقشه من زوايا مختلفة؟"
    ],
    youtube: [
        "قناة SMSM for Games تقدم محتوى ممتع ومفيد عن الألعاب والتحديات. ادعموها بالاشتراك!",
        "محتوى قناة SMSM for Games يركز على الألعاب والتحديات المثيرة. لا تفوتوا الفرصة للاشتراك!",
        "إذا كنت من محبي الألعاب والتحديات، فقناة SMSM for Games هي وجهتك المثالية على يوتيوب!"
    ],
    youtube_link: [
        "هذه قناة للتحديات والألعاب. يمكنك زيارة قناة SMSM for Games على يوتيوب من خلال هذا الرابط: https://youtube.com/@smsmgames18?si=z6sD-h2o9GVbN7oW"
    ],
    phone: [
        "هاتف سمسم هو Infinix Hot 40i نسخة 16 جيجا رام."
    ],
    creator: [
        "سمسم"
    ],
    chatgpt_topics: [
        "بالتأكيد! يمكنني مساعدتك في مجموعة واسعة من المواضيع مثل ChatGPT. هل لديك سؤال محدد في ذهنك?",
        "أنا نموذج لغوي كبير، مدرب بواسطة جوجل. يمكنني التحدث عن مواضيع مثل الذكاء الاصطناعي، تعلم الآلة، معالجة اللغة الطبيعية، وأكثر من ذلك.",
        "مثل ChatGPT، يمكنني تقديم معلومات، الإجابة على الأسئلة، كتابة النصوص الإبداعية، وحتى المساعدة في البرمجة. ما هو الموضوع الذي يثير اهتمامك?"
    ],
    ai_general: [
        "الذكاء الاصطناعي هو مجال واسع ومثير. هل تريد معرفة المزيد عن تاريخه، تطبيقاته، أو مستقبله?",
        "تعلم الآلة هو جزء أساسي من الذكاء الاصطناعي. يمكنني شرح المفاهيم الأساسية مثل الشبكات العصبية، التعلم العميق، والتعلم المعزز.",
        "معالجة اللغة الطبيعية (NLP) هي ما يسمح لي بفهمك والتفاعل معك. هل تريد الغوص في تفاصيلها?"
    ],
    programming: [
        "أحب البرمجة! ما هي لغة البرمجة التي تعمل عليها? يمكنني المساعدة في Python, JavaScript, Java, وغيرها.",
        "هل تواجه مشكلة في الكود الخاص بك? أو تحتاج إلى شرح لمفهوم برمجي معين? أنا هنا للمساعدة.",
        "البرمجة هي فن حل المشكلات. دعنا نحل مشكلتك البرمجية معاً!"
    ],
    history: [
        "التاريخ مليء بالقصص الشيقة والأحداث الهامة. عن أي فترة زمنية أو شخصية تاريخية تود أن تعرف?",
        "من الحضارات القديمة إلى العصور الحديثة، التاريخ يعلمنا الكثير. ما هو سؤالك التاريخي?"
    ],
    science: [
        "العلم هو مفتاح فهم العالم من حولنا. هل لديك أسئلة عن الفيزياء، الكيمياء، الأحياء، أو الفلك?",
        "من النجوم إلى أصغر الجزيئات، العلم يكشف لنا أسرار الكون. ما هو اكتشافك العلمي المفضل?"
    ],
    health: [
        "الصحة هي الثروة الحقيقية. هل تبحث عن معلومات حول التغذية، اللياقة البدنية، أو الأمراض الشائعة?",
        "يمكنني تقديم معلومات عامة عن الصحة والعافية، ولكن تذكر دائماً استشارة الطبيب المختص للحصول على نصيحة طبية."
    ],
    travel: [
        "السفر يوسع الآفاق! هل تخطط لرحلة? يمكنني مساعدتك في التخطيط، اقتراح الوجهات، أو تقديم نصائح للسفر.",
        "ما هي وجهتك المفضلة? أو أين تحلم أن تسافر? دعنا نستكشف العالم معاً!"
    ],
    image_generation: [
        "يمكنني إنشاء صور بناءً على وصفك! ما هي الصورة التي تود أن أنشئها لك؟",
        "أنا قادر على توليد صور إبداعية. صف لي الصورة التي تتخيلها وسأحاول رسمها لك.",
        "هل تحتاج إلى صورة معينة؟ أخبرني بالتفاصيل وسأقوم بإنشائها."
    ],
    smsm_logo: [
        "<img src=\"ai-logo.png\" alt=\"SMSM for Games Logo\" style=\"width: 150px; height: auto; display: block; margin-bottom: 10px;\">" +
        "هذا هو شعار قناة SMSM for Games. قناة SMSM for Games تقدم محتوى ممتع ومفيد عن الألعاب والتحديات. نهدف إلى تقديم تجربة ترفيهية وتعليمية للمشاهدين من خلال مراجعات الألعاب، النصائح التقنية، والمحتوى التفاعلي." +
        "<br><br>يمكنك زيارة القناة من هنا: <a href=\"https://youtube.com/@smsmgames18?si=z6sD-h2o9GVbN7oW\" target=\"_blank\">قناة SMSM for Games على يوتيوب</a>"
    ],
    image_processing: [
        "يمكنني معالجة الصور! ما نوع التعديل الذي ترغب به؟ (مثل تغيير الحجم، القص، إضافة تأثيرات)",
        "لدي القدرة على تعديل الصور. هل لديك صورة معينة تريد معالجتها؟",
        "أخبرني كيف تريد أن أعالج الصورة وسأقوم بذلك."
    ],
    cooking: [
        "الطبخ فن رائع! هل تبحث عن وصفات معينة، نصائح للطبخ، أم تريد تعلم تقنيات جديدة؟",
        "أحب مساعدة الناس في المطبخ! ما هو الطبق الذي تفكر في تحضيره؟",
        "من الوصفات التقليدية إلى الأطباق العالمية، يمكنني مساعدتك في رحلتك الطبخية!"
    ],
    music: [
        "الموسيقى لغة عالمية! هل تريد التحدث عن أنواع الموسيقى، الآلات الموسيقية، أم الفنانين المفضلين لديك؟",
        "عالم الموسيقى واسع ومتنوع. ما هو النوع الموسيقي الذي يلامس قلبك؟",
        "من الكلاسيكية إلى الحديثة، الموسيقى تثري حياتنا. دعنا نتحدث عن شغفك الموسيقي!"
    ],
    sports: [
        "الرياضة تجمع العالم! هل تتابع رياضة معينة، أم تمارس نشاطاً رياضياً؟",
        "من كرة القدم إلى السباحة، كل رياضة لها جمالها الخاص. ما هي رياضتك المفضلة؟",
        "الرياضة ليست مجرد نشاط بدني، بل أسلوب حياة. دعنا نتحدث عن عالم الرياضة!"
    ],
    movies: [
        "السينما عالم من الخيال والإبداع! ما هو نوع الأفلام المفضل لديك؟",
        "من الدراما إلى الأكشن، كل فيلم يحكي قصة. هل شاهدت فيلماً مؤثراً مؤخراً؟",
        "أحب مناقشة الأفلام والمسلسلات! ما هو آخر عمل سينمائي أعجبك؟"
    ],
    books: [
        "القراءة غذاء الروح والعقل! ما هو نوع الكتب التي تفضل قراءتها؟",
        "من الروايات إلى الكتب العلمية، كل كتاب يفتح آفاقاً جديدة. هل قرأت كتاباً مميزاً مؤخراً؟",
        "الكتب أفضل الأصدقاء! دعني أساعدك في اختيار قراءتك القادمة."
    ],
    weather: [
        "الطقس يؤثر على مزاجنا وأنشطتنا اليومية. كيف هو الطقس في منطقتك اليوم؟",
        "من المطر إلى أشعة الشمس، كل حالة طقس لها جمالها. ما هو طقسك المفضل؟",
        "التغيرات المناخية موضوع مهم في عصرنا. هل تلاحظ تغيرات في طقس منطقتك؟"
    ],
    education: [
        "التعليم أساس التقدم! هل تدرس موضوعاً معيناً أم تريد تعلم مهارة جديدة؟",
        "التعلم رحلة مدى الحياة. ما هو المجال الذي تود التخصص فيه أو تطوير نفسك فيه؟",
        "من المدرسة إلى الجامعة وما بعدها، التعليم يشكل مستقبلنا. كيف يمكنني مساعدتك في رحلتك التعليمية؟"
    ],
    psychology: [
        "علم النفس يساعدنا على فهم أنفسنا والآخرين بشكل أفضل. هل لديك اهتمام بهذا المجال؟",
        "الصحة النفسية مهمة جداً في حياتنا. هل تريد التحدث عن تقنيات الاسترخاء أو إدارة التوتر؟",
        "فهم السلوك البشري موضوع شيق ومعقد. ما الذي يثير فضولك في علم النفس؟"
    ],
    environment: [
        "البيئة هي بيتنا الكبير! هل تهتم بقضايا البيئة والاستدامة؟",
        "من إعادة التدوير إلى الطاقة المتجددة، كل خطوة صغيرة تحدث فرقاً. كيف تساهم في حماية البيئة؟",
        "التغير المناخي تحدٍ عالمي يحتاج جهود الجميع. ما رأيك في الحلول البيئية المبتكرة؟"
    ],
    internet_search: [
        "بحثت عن طلبك ووجدت معلومات مفيدة! هل تريد المزيد من التفاصيل؟",
        "نتائج البحث عن استفسارك تظهر عدة مصادر مثيرة للاهتمام.",
        "وجدت معلومات رائعة حول ما طلبته! دعني أشاركها معك.",
        "الإنترنت مليء بالمعلومات، ويسعدني أن أجد لك ما تبحث عنه."
    ],
    good_pc: [
        "عند اختيار جهاز كمبيوتر جيد، يعتمد الأمر على استخدامك والميزانية. هل تبحث عن جهاز للألعاب، العمل، التصميم، أم الاستخدام اليومي؟",
        "للحصول على أفضل أداء، أنصحك بالبحث عن معالج قوي (مثل Intel Core i7 أو AMD Ryzen 7)، وذاكرة وصول عشوائي (RAM) لا تقل عن 16 جيجابايت، وبطاقة رسومات مخصصة إذا كنت من محبي الألعاب أو التصميم.",
        "يمكنني مساعدتك في بناء قائمة بمواصفات جهاز كمبيوتر مثالي لاحتياجاتك. ما هي أولوياتك؟"
    ],
    good_phone: [
        "اختيار هاتف جيد يعتمد على تفضيلاتك الشخصية وميزانيتك. هل تفضل نظام iOS أم Android؟ وما هي الميزات التي تهمك أكثر: الكاميرا، البطارية، الأداء، أم التصميم؟",
        "للحصول على هاتف ممتاز، ابحث عن شاشة AMOLED عالية الدقة، ومعالج سريع (مثل Snapdragon أو A-series من Apple)، وكاميرا متعددة العدسات مع تثبيت بصري، وبطارية تدوم طويلاً.",
        "يمكنني مقارنة الهواتف المختلفة ومساعدتك في اختيار الأنسب لك. ما هي العلامات التجارية التي تفضلها؟"
    ],
    history: [
        "التاريخ مليء بالقصص الشيقة والأحداث الهامة. أي فترة تاريخية تثير اهتمامك؟",
        "يمكنني أن أقدم لك معلومات عن الحضارات القديمة، الحروب الكبرى، أو الشخصيات التاريخية المؤثرة.",
        "دراسة التاريخ تساعدنا على فهم الحاضر والتخطيط للمستقبل. ما هو سؤالك التاريخي؟"
    ]
};

// وظائف القائمة الجانبية
function openSidebar() {
    sidebar.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeSidebarFunc() {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "auto";
}

// أحداث القائمة الجانبية
if (menuBtn) {
    menuBtn.addEventListener("click", openSidebar);
}
if (closeSidebar) {
    closeSidebar.addEventListener("click", closeSidebarFunc);
}
if (overlay) {
    overlay.addEventListener("click", closeSidebarFunc);
}

// وظيفة التبديل بين الأقسام
function showSection(sectionId) {
    // إخفاء جميع الأقسام
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => {
        section.classList.remove("active");
    });
    
    // إظهار القسم المطلوب
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add("active");
    }
    
    // إغلاق القائمة الجانبية
    closeSidebarFunc();
}

// وظيفة إضافة رسالة إلى المحادثة
function addMessage(content, isUser = false) {
    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${isUser ? "user-message" : "ai-message"}`;
    
    const avatar = isUser ? "" : "<img src=\"ai-logo.png\" alt=\"SMSM AI\" class=\"message-avatar\">";
    
    messageDiv.innerHTML = `
        ${avatar}
        <div class="message-content">
            <p>${content}</p>
        </div>
    `;
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return messageDiv; // إضافة هذه السطر لإرجاع العنصر
}

// وظيفة البحث على الويب
async function performWebSearch(query) {
    try {
        const response = await fetch('/api/web-search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query: query })
        });

        if (!response.ok) {
            throw new Error('فشل في البحث');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('خطأ في البحث:', error);
        return null;
    }
}

// وظيفة تنسيق نتائج البحث
function formatSearchResults(searchData) {
    if (!searchData || !searchData.results) {
        return "عذراً، لم أتمكن من العثور على نتائج للبحث.";
    }

    let formattedResponse = `<div class="search-results">`;
    
    // إضافة الملخص
    if (searchData.summary) {
        formattedResponse += `<div class="search-summary">
            <h4>📋 ملخص النتائج:</h4>
            <p>${searchData.summary}</p>
        </div>`;
    }

    // إضافة النتائج
    if (searchData.results && searchData.results.length > 0) {
        formattedResponse += `<div class="search-links">
            <h4>🔗 مصادر مفيدة:</h4>`;
        
        searchData.results.slice(0, 5).forEach((result, index) => {
            formattedResponse += `
                <div class="search-result-item">
                    <h5><a href="${result.url}" target="_blank">${result.title}</a></h5>
                    <p class="search-snippet">${result.snippet}</p>
                    <small class="search-source">المصدر: ${result.source}</small>
                </div>
            `;
        });
        
        formattedResponse += `</div>`;
    }

    formattedResponse += `</div>`;
    return formattedResponse;
}

// وظيفة البحث على الويب وتنسيق النتائج
async function performWebSearchAndFormat(query) {
    const searchData = await performWebSearch(query);
    if (searchData) {
        return formatSearchResults(searchData);
    } else {
        return `عذراً، لم أتمكن من البحث عن "${query}" في الوقت الحالي. يرجى المحاولة مرة أخرى لاحقاً.`;
    }
}

// وظيفة تحليل الرسالة وإرجاع رد مناسب
function analyzeMessage(message) {
    const lowerMessage = message.toLowerCase();

    // البحث على الإنترنت
    if (lowerMessage.includes("ابحث عن") || lowerMessage.includes("بحث عن") || lowerMessage.includes("search for") || 
        lowerMessage.includes("معلومات عن") || lowerMessage.includes("ما هو") || lowerMessage.includes("what is") ||
        lowerMessage.includes("أخبرني عن") || lowerMessage.includes("tell me about")) {
        
        // استخراج موضوع البحث
        let searchQuery = message;
        
        // إزالة كلمات البحث الشائعة
        searchQuery = searchQuery.replace(/ابحث عن|بحث عن|search for|معلومات عن|ما هو|what is|أخبرني عن|tell me about/gi, '').trim();
        
        if (searchQuery) {
            return performWebSearchAndFormat(searchQuery);
        }
    }

    // التحيات
    if (lowerMessage.includes("مرحبا") || lowerMessage.includes("السلام") || lowerMessage.includes("أهلا") || lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
        return getRandomResponse("greetings");
    }

    // من صنعك؟
    if (lowerMessage.includes("من صنعك") || lowerMessage.includes("من صممك") || lowerMessage.includes("من بناك")) {
        return getRandomResponse("creator");
    }

    // شعار سمسم
    if (lowerMessage.includes("شعار سمسم") || lowerMessage.includes("لوجو سمسم") || lowerMessage.includes("صورة سمسم") || lowerMessage.includes("smsm logo") || lowerMessage.includes("smsm image")) {
        return getRandomResponse("smsm_logo");
    }

    // يوتيوب رابط
    if (lowerMessage.includes("رابط قناة") || lowerMessage.includes("قناة يوتيوب") || lowerMessage.includes("لينك قناة") || lowerMessage.includes("youtube link")) {
        return getRandomResponse("youtube_link");
    }

    // هاتف سمسم
    if (lowerMessage.includes("هاتف سمسم") || lowerMessage.includes("جوال سمسم") || lowerMessage.includes("موبايل سمسم") || lowerMessage.includes("سمسم فون")) {
        return getRandomResponse("phone");
    }

    // الرياضيات
    if (lowerMessage.includes("رياضيات") || lowerMessage.includes("حساب") || lowerMessage.includes("مسألة") || lowerMessage.includes("math") || lowerMessage.includes("+") || lowerMessage.includes("-") || lowerMessage.includes("×") || lowerMessage.includes("÷")) {
        return getRandomResponse("math");
    }

    // الكتابة
    if (lowerMessage.includes("كتابة") || lowerMessage.includes("تعبير") || lowerMessage.includes("مقال") || lowerMessage.includes("موضوع") || lowerMessage.includes("write") || lowerMessage.includes("essay")) {
        return getRandomResponse("writing");
    }

    // الألعاب
    if (lowerMessage.includes("لعبة") || lowerMessage.includes("ألعاب") || lowerMessage.includes("فيديو جيم") || lowerMessage.includes("بلاي ستيشن") || lowerMessage.includes("اكس بوكس") || lowerMessage.includes("نينتندو") || lowerMessage.includes("game") || lowerMessage.includes("gaming") || lowerMessage.includes("videogame")) {
        return getRandomResponse("games");
    }

    // الهواتف
    if (lowerMessage.includes("هاتف") || lowerMessage.includes("جوال") || lowerMessage.includes("موبايل") || lowerMessage.includes("ايفون") || lowerMessage.includes("سامسونج") || lowerMessage.includes("اندرويد") || lowerMessage.includes("phone") || lowerMessage.includes("mobile") || lowerMessage.includes("smartphone")) {
        return getRandomResponse("phones");
    }

    // يوتيوب
    if (lowerMessage.includes("يوتيوب") || lowerMessage.includes("قناة") || lowerMessage.includes("smsm") || lowerMessage.includes("youtube") || lowerMessage.includes("subscribe")) {
        return getRandomResponse("youtube");
    }

    // مواضيع ChatGPT عامة
    if (lowerMessage.includes("chatgpt") || lowerMessage.includes("نموذج لغوي") || lowerMessage.includes("ذكاء اصطناعي") || lowerMessage.includes("ai") || lowerMessage.includes("google")) {
        return getRandomResponse("chatgpt_topics");
    }

    // الذكاء الاصطناعي والتعلم الآلي
    if (lowerMessage.includes("ذكاء اصطناعي") || lowerMessage.includes("تعلم آلة") || lowerMessage.includes("معالجة لغة طبيعية") || lowerMessage.includes("شبكات عصبية") || lowerMessage.includes("تعلم عميق") || lowerMessage.includes("ai") || lowerMessage.includes("machine learning") || lowerMessage.includes("nlp")) {
        return getRandomResponse("ai_general");
    }

    // البرمجة
    if (lowerMessage.includes("برمجة") || lowerMessage.includes("كود") || lowerMessage.includes("بايثون") || lowerMessage.includes("جافاسكريبت") || lowerMessage.includes("جافا") || lowerMessage.includes("programming") || lowerMessage.includes("code") || lowerMessage.includes("python") || lowerMessage.includes("javascript") || lowerMessage.includes("java")) {
        return getRandomResponse("programming");
    }

    // التاريخ
    if (lowerMessage.includes("تاريخ") || lowerMessage.includes("حضارة") || lowerMessage.includes("شخصية تاريخية") || lowerMessage.includes("history") || lowerMessage.includes("ancient")) {
        return getRandomResponse("history");
    }

    // العلوم
    if (lowerMessage.includes("علم") || lowerMessage.includes("فيزياء") || lowerMessage.includes("كيمياء") || lowerMessage.includes("أحياء") || lowerMessage.includes("فلك") || lowerMessage.includes("science") || lowerMessage.includes("physics") || lowerMessage.includes("chemistry") || lowerMessage.includes("biology") || lowerMessage.includes("astronomy")) {
        return getRandomResponse("science");
    }

    // الصحة
    if (lowerMessage.includes("صحة") || lowerMessage.includes("تغذية") || lowerMessage.includes("لياقة بدنية") || lowerMessage.includes("مرض") || lowerMessage.includes("health") || lowerMessage.includes("nutrition") || lowerMessage.includes("fitness")) {
        return getRandomResponse("health");
    }

    // السفر
    if (lowerMessage.includes("سفر") || lowerMessage.includes("رحلة") || lowerMessage.includes("وجهة") || lowerMessage.includes("travel") || lowerMessage.includes("trip") || lowerMessage.includes("destination")) {
        return getRandomResponse("travel");
    }

    // صنع الصور
    if (lowerMessage.includes("صورة") || lowerMessage.includes("صور") || lowerMessage.includes("رسم") || lowerMessage.includes("إنشاء صورة") || lowerMessage.includes("توليد صورة") || lowerMessage.includes("image") || lowerMessage.includes("picture") || lowerMessage.includes("draw") || lowerMessage.includes("generate image")) {
        return getRandomResponse("image_generation");
    }

    // معالجة الصور
    if (lowerMessage.includes("معالجة صورة") || lowerMessage.includes("تعديل صورة") || lowerMessage.includes("قص صورة") || lowerMessage.includes("تغيير حجم صورة") || lowerMessage.includes("image process") || lowerMessage.includes("edit image") || lowerMessage.includes("resize image") || lowerMessage.includes("crop image")) {
        return getRandomResponse("image_processing");
    }

    // الطبخ
    if (lowerMessage.includes("طبخ") || lowerMessage.includes("وصفة") || lowerMessage.includes("طعام") || lowerMessage.includes("مطبخ") || lowerMessage.includes("cooking") || lowerMessage.includes("recipe") || lowerMessage.includes("food")) {
        return getRandomResponse("cooking");
    }

    // الموسيقى
    if (lowerMessage.includes("موسيقى") || lowerMessage.includes("أغنية") || lowerMessage.includes("مطرب") || lowerMessage.includes("آلة موسيقية") || lowerMessage.includes("music") || lowerMessage.includes("song") || lowerMessage.includes("singer")) {
        return getRandomResponse("music");
    }

    // الرياضة
    if (lowerMessage.includes("رياضة") || lowerMessage.includes("كرة قدم") || lowerMessage.includes("سباحة") || lowerMessage.includes("جري") || lowerMessage.includes("sport") || lowerMessage.includes("football") || lowerMessage.includes("swimming") || lowerMessage.includes("running")) {
        return getRandomResponse("sports");
    }

    // الأفلام والسينما
    if (lowerMessage.includes("فيلم") || lowerMessage.includes("سينما") || lowerMessage.includes("مسلسل") || lowerMessage.includes("ممثل") || lowerMessage.includes("movie") || lowerMessage.includes("cinema") || lowerMessage.includes("series") || lowerMessage.includes("actor")) {
        return getRandomResponse("movies");
    }

    // الكتب والقراءة
    if (lowerMessage.includes("كتاب") || lowerMessage.includes("قراءة") || lowerMessage.includes("رواية") || lowerMessage.includes("مؤلف") || lowerMessage.includes("book") || lowerMessage.includes("reading") || lowerMessage.includes("novel") || lowerMessage.includes("author")) {
        return getRandomResponse("books");
    }

    // الطقس
    if (lowerMessage.includes("طقس") || lowerMessage.includes("مطر") || lowerMessage.includes("شمس") || lowerMessage.includes("برد") || lowerMessage.includes("weather") || lowerMessage.includes("rain") || lowerMessage.includes("sun") || lowerMessage.includes("cold")) {
        return getRandomResponse("weather");
    }

    // التعليم
    if (lowerMessage.includes("تعليم") || lowerMessage.includes("دراسة") || lowerMessage.includes("مدرسة") || lowerMessage.includes("جامعة") || lowerMessage.includes("education") || lowerMessage.includes("study") || lowerMessage.includes("school") || lowerMessage.includes("university")) {
        return getRandomResponse("education");
    }

    // علم النفس
    if (lowerMessage.includes("نفس") || lowerMessage.includes("نفسية") || lowerMessage.includes("سلوك") || lowerMessage.includes("شخصية") || lowerMessage.includes("psychology") || lowerMessage.includes("behavior") || lowerMessage.includes("personality")) {
        return getRandomResponse("psychology");
    }

    // البيئة
    if (lowerMessage.includes("بيئة") || lowerMessage.includes("تلوث") || lowerMessage.includes("إعادة تدوير") || lowerMessage.includes("مناخ") || lowerMessage.includes("environment") || lowerMessage.includes("pollution") || lowerMessage.includes("recycling") || lowerMessage.includes("climate")) {
        return getRandomResponse("environment");
    }

    // البحث في الإنترنت
    if (lowerMessage.includes("ابحث عن") || lowerMessage.includes("ما هو") || lowerMessage.includes("معلومات عن") || lowerMessage.includes("كيف") || lowerMessage.includes("متى") || lowerMessage.includes("أين") || lowerMessage.includes("من") || lowerMessage.includes("بحث") || lowerMessage.includes("find") || lowerMessage.includes("search") || lowerMessage.includes("what is") || lowerMessage.includes("how to")) {
        return getRandomResponse("internet_search");
    }

    // كمبيوتر جيد
    if (lowerMessage.includes("كمبيوتر جيد") || lowerMessage.includes("افضل كمبيوتر") || lowerMessage.includes("مواصفات كمبيوتر") || lowerMessage.includes("pc good") || lowerMessage.includes("best pc")) {
        return getRandomResponse("good_pc");
    }

    // هاتف جيد
    if (lowerMessage.includes("هاتف جيد") || lowerMessage.includes("افضل هاتف") || lowerMessage.includes("مواصفات هاتف") || lowerMessage.includes("phone good") || lowerMessage.includes("best phone")) {
        return getRandomResponse("good_phone");
    }

    // التاريخ
    if (lowerMessage.includes("تاريخ") || lowerMessage.includes("تاريخي") || lowerMessage.includes("حضارة") || lowerMessage.includes("حرب") || lowerMessage.includes("شخصية تاريخية") || lowerMessage.includes("history") || lowerMessage.includes("historical") || lowerMessage.includes("civilization") || lowerMessage.includes("war") || lowerMessage.includes("historical figure")) {
        return getRandomResponse("history");
    }
    
    // رد عام (يجب أن يكون هذا هو الخيار الأخير)
    return getRandomResponse("general");
}

// وظيفة الحصول على رد عشوائي
function getRandomResponse(category) {
    const responses = aiResponses[category];
    return responses[Math.floor(Math.random() * responses.length)];
}

// وظيفة إرسال الرسالة
function sendMessage() {
    const message = messageInput.value.trim();
    
    if (message === "") {
        return;
    }
    
    // إضافة رسالة المستخدم
    addMessage(message, true);
    
    // مسح مربع الإدخال
    messageInput.value = "";

    // إضافة رسالة انتظار
    const thinkingMessageDiv = addMessage("SMSM AI يفكر...", false); // AI thinking message
    
    // محاكاة تأخير الرد
    setTimeout(() => {
        // إزالة رسالة الانتظار
        if (thinkingMessageDiv && thinkingMessageDiv.parentNode) {
            thinkingMessageDiv.parentNode.removeChild(thinkingMessageDiv);
        }
        const aiResponse = analyzeMessage(message);
        addMessage(aiResponse, false);
    }, 1000 + Math.random() * 2000); // تأخير عشوائي بين 1-3 ثواني
}

// أحداث الإرسال
if (sendBtn) {
    sendBtn.addEventListener("click", sendMessage);
}

if (messageInput) {
    messageInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            sendMessage();
        }
    });

    // تأثيرات إضافية للتفاعل
    messageInput.addEventListener("focus", () => {
        messageInput.style.borderColor = "#3498db";
        messageInput.style.boxShadow = "0 0 0 3px rgba(52, 152, 219, 0.1)";
    });

    messageInput.addEventListener("blur", () => {
        messageInput.style.borderColor = "#ddd";
        messageInput.style.boxShadow = "none";
    });
}

// تأثير الكتابة للزر
if (sendBtn) {
    sendBtn.addEventListener("mousedown", () => {
        sendBtn.style.transform = "translateY(2px)";
    });

    sendBtn.addEventListener("mouseup", () => {
        sendBtn.style.transform = "translateY(-2px)";
    });
}

// تأثيرات القائمة الجانبية
const sidebarLinks = document.querySelectorAll(".sidebar-nav a");
sidebarLinks.forEach(link => {
    link.addEventListener("mouseenter", () => {
        link.style.paddingRight = "30px";
    });
    
    link.addEventListener("mouseleave", () => {
        link.style.paddingRight = "20px";
    });
});

// تأثيرات بطاقات الميزات
const featureCards = document.querySelectorAll(".feature-card");
featureCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px) scale(1.02)";
    });
    
    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0) scale(1)";
    });
});

// رسالة ترحيب إضافية عند تحميل الصفحة
window.addEventListener("load", () => {
    setTimeout(() => {
        addMessage("أهلاً بك في SMSM AI! يمكنك سؤالي عن أي شيء تريده. جرب أن تسألني عن الرياضيات، الكتابة، الألعاب، أو أي موضوع آخر!", false);
    }, 1500);
});

// وظائف إضافية للتفاعل المحسن
document.addEventListener("DOMContentLoaded", () => {
    // تأثير التمرير السلس
    document.querySelectorAll("a[href^=\"#\"]").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
    
    // تأثير الظهور التدريجي للعناصر
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(30px)"; // Initial state for animation
                entry.target.style.transition = "opacity 0.6s ease, transform 0.6s ease";
                setTimeout(() => {
                    entry.target.style.transform = "translateY(0)";
                }, 100);
            }
        });
    }, observerOptions);
    
    // مراقبة بطاقات الميزات
    featureCards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        observer.observe(card);
    });
});

// وظيفة خاصة لمحاكاة البحث في الإنترنت
function simulateSearch(query) {
    const searchResponses = [
        `بحثت عن "${query}" ووجدت معلومات مفيدة! هل تريد المزيد من التفاصيل?`,
        `نتائج البحث عن "${query}" تظهر عدة مصادر مثيرة للاهتمام.`,
        `وجدت معلومات رائعة حول "${query}"! دعني أشاركها معك.`
    ];
    
    return searchResponses[Math.floor(Math.random() * searchResponses.length)];
}

// وظيفة لتطبيق الوضع الداكن
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    const isDarkMode = document.body.classList.contains("dark-mode");
    
    // حفظ التفضيل في localStorage
    localStorage.setItem("darkMode", isDarkMode);
    
    // تحديث أيقونة الزر
    const themeIcon = document.querySelector(".theme-icon");
    if (themeIcon) {
        themeIcon.textContent = isDarkMode ? "☀️" : "🌙";
    }
}

// وظيفة لتطبيق الوضع المحفوظ عند تحميل الصفحة
function applyStoredTheme() {
    const storedTheme = localStorage.getItem("darkMode");
    
    if (storedTheme === "true") {
        document.body.classList.add("dark-mode");
        const themeIcon = document.querySelector(".theme-icon");
        if (themeIcon) {
            themeIcon.textContent = "☀️";
        }
    } else if (storedTheme === "false") {
        document.body.classList.remove("dark-mode");
        const themeIcon = document.querySelector(".theme-icon");
        if (themeIcon) {
            themeIcon.textContent = "🌙";
        }
    } else {
        // إذا لم يكن هناك تفضيل محفوظ، استخدم تفضيلات النظام
        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
            document.body.classList.add("dark-mode");
            const themeIcon = document.querySelector(".theme-icon");
            if (themeIcon) {
                themeIcon.textContent = "☀️";
            }
        }
    }
}

// إضافة مستمع الأحداث لزر التبديل
if (themeToggle) {
    themeToggle.addEventListener("click", toggleDarkMode);
}

// تطبيق الوضع المحفوظ عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", applyStoredTheme);





// وظيفة البحث والتلخيص الحقيقية
async function performSearchAndSummarize(query) {
    try {
        // إرسال طلب إلى API الخلفية
        const response = await fetch('/api/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query: query })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        if (data.error) {
            return `عذراً، حدث خطأ: ${data.error}`;
        }

        // تنسيق النتائج
        let result = `🔍 <strong>نتائج البحث عن "${query}":</strong><br><br>`;
        result += `📝 <strong>الملخص:</strong><br>${data.summary}<br><br>`;
        
        if (data.sources && data.sources.length > 0) {
            result += `📚 <strong>المصادر:</strong><br>`;
            data.sources.forEach((source, index) => {
                result += `${index + 1}. <strong>${source.title}</strong><br>`;
                result += `&nbsp;&nbsp;&nbsp;${source.snippet}<br>`;
                if (source.url) {
                    result += `&nbsp;&nbsp;&nbsp;🔗 <a href="${source.url}" target="_blank">اقرأ المزيد</a><br>`;
                }
                result += `&nbsp;&nbsp;&nbsp;📖 المصدر: ${source.source}<br><br>`;
            });
        }

        return result;
        
    } catch (error) {
        console.error('خطأ في البحث:', error);
        return `عذراً، حدث خطأ أثناء البحث: ${error.message}. يرجى المحاولة مرة أخرى.`;
    }
}

// تعديل وظيفة analyzeMessage لاستدعاء دالة البحث
const originalAnalyzeMessage = analyzeMessage;
analyzeMessage = async (message) => {
    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes("ابحث عن") || lowerMessage.includes("ما هو") || lowerMessage.includes("معلومات عن")) {
        const query = lowerMessage.replace(/^(ابحث عن|ما هو|معلومات عن)\s*/, '').trim();
        if (query) {
            addMessage("جاري البحث عن " + query + "...", false);
            const result = await performSearchAndSummarize(query);
            return result;
        } else {
            return "الرجاء تحديد ما تريد البحث عنه.";
        }
    }

    return originalAnalyzeMessage(message);
};

// إضافة معالج حدث لزر الإرسال للتعامل مع البحث
sendBtn.removeEventListener("click", sendMessage); // إزالة المستمع القديم إذا كان موجوداً
sendBtn.addEventListener("click", async () => {
    const userMessage = messageInput.value.trim();
    if (userMessage) {
        addMessage(userMessage, true);
        messageInput.value = "";
        
        // إظهار مؤشر الكتابة
        const typingIndicator = addMessage("جاري الكتابة...", false);
        
        try {
            const aiResponse = await analyzeMessage(userMessage);
            typingIndicator.remove();
            addMessage(aiResponse, false);
        } catch (error) {
            typingIndicator.remove();
            addMessage("عذراً، حدث خطأ أثناء معالجة رسالتك.", false);
        }
    }
});

// إضافة معالج حدث لزر Enter في حقل الإدخال
messageInput.removeEventListener("keypress", handleKeyPress); // إزالة المستمع القديم إذا كان موجوداً
messageInput.addEventListener("keypress", async (e) => {
    if (e.key === "Enter") {
        const userMessage = messageInput.value.trim();
        if (userMessage) {
            addMessage(userMessage, true);
            messageInput.value = "";
            
            // إظهار مؤشر الكتابة
            const typingIndicator = addMessage("جاري الكتابة...", false);
            
            try {
                const aiResponse = await analyzeMessage(userMessage);
                typingIndicator.remove();
                addMessage(aiResponse, false);
            } catch (error) {
                typingIndicator.remove();
                addMessage("عذراً، حدث خطأ أثناء معالجة رسالتك.", false);
            }
        }
    }
});

// وظيفة sendMessage الأصلية (للتأكد من وجودها إذا تم استدعاؤها في مكان آخر)
async function sendMessage() {
    const userMessage = messageInput.value.trim();
    if (userMessage) {
        addMessage(userMessage, true);
        messageInput.value = "";
        
        // إظهار مؤشر الكتابة
        const typingIndicator = addMessage("جاري الكتابة...", false);
        
        try {
            const aiResponse = await analyzeMessage(userMessage);
            typingIndicator.remove();
            addMessage(aiResponse, false);
        } catch (error) {
            typingIndicator.remove();
            addMessage("عذراً، حدث خطأ أثناء معالجة رسالتك.", false);
        }
    }
}

// وظيفة getRandomResponse (للتأكد من وجودها)
function getRandomResponse(type) {
    const responses = aiResponses[type];
    if (responses) {
        return responses[Math.floor(Math.random() * responses.length)];
    }
    return aiResponses.general[Math.floor(Math.random() * aiResponses.general.length)];
}




