// Main JS - Ahmed Sayed Portfolio

// --- Translations ---
const translations = {
    en: {
        nav_about: "About",
        nav_skills: "Skills",
        nav_experience: "Experience",
        nav_projects: "Projects",
        nav_contact: "Contact",

        hero_title: "Ahmed Sayed | Performance Marketing & Social Media Specialist",
        hero_subtitle: "5+ years managing Meta & Google Ads across Egypt and the GCC",
        hero_btn_work: "View My Work",
        hero_btn_hire: "Hire Me",

        section_about: "About Me",
        about_bio_1: "Performance Marketing & Social Media Specialist with 5+ years managing paid campaigns on Meta, Google and other digital platforms for travel, medical, beauty, and home services brands in Egypt and the GCC.",
        about_bio_2: "Proven track record optimizing 40+ ad accounts—driving engagement uplifts of up to 30% and reducing cost per conversion by around 10%. Skilled at A/B testing and analytics.",
        timeline_title: "Career Timeline",
        role_elmaali: "Elmaali Tours",
        role_tiehouse: "Tie House",
        role_nogget: "Nogget Tours",
        role_shaymaa: "Dr. Shaymaa Salman",
        role_amir: "Amir Eldomiaty",
        role_marketing: "Markting.Limitd",

        section_skills: "Skills & Expertise",
        skill_meta: "Meta Ads",
        skill_google: "Google Ads",
        skill_campaign: "Campaign Optimization",
        skill_lead: "Lead Generation",
        skill_whatsapp: "WhatsApp Marketing",
        skill_copy: "Ad Copywriting",
        skill_analytics: "Performance Analysis",
        skill_gcc: "Egypt & GCC Markets",

        section_experience: "Professional Experience",
        exp_title_1: "Social Media Specialist & Media Buyer",
        exp_desc_1_1: "Orchestrated paid campaigns transforming the brand from inactive to high-visibility.",
        exp_desc_1_2: "Built strong demand leading to fully booked summer packages.",
        exp_desc_1_3: "Designed creative content leading to 30% increase in CTR.",

        exp_title_2: "Media Buyer",
        exp_desc_2_1: "Managed 40+ ad accounts; achieved ~30% increase in ad engagement.",
        exp_desc_2_2: "Reduced cost per conversion by ~10% across brands.",
        exp_desc_2_3: "Strong results in Bahrain and UAE markets.",

        exp_title_3: "Social Media Marketer",
        exp_desc_3_1: "Led creative campaigns delivering ~10% growth in engagement.",
        exp_desc_3_2: "Optimized campaigns leading to ~15% increase in key metrics.",

        exp_title_4: "Social Media Specialist",
        exp_desc_4_1: "Built strategies for medical & cosmetic services.",
        exp_desc_4_2: "Achieved ~20% reduction in CPL via Facebook & Instagram ads.",

        exp_title_5: "Social Media Specialist & Media Buyer",
        exp_desc_5_1: "Nogget: Increased brand engagement by ~25% and improved ROI by ~15%.",
        exp_desc_5_2: "Tie House: Increased reach by ~30% and brand visibility by 20%.",

        section_projects: "Key Results & Projects",
        proj_1_title: "Gulf Art Furniture (GCC)",
        proj_1_desc: "High volume profile visits campaign targeting UAE/GCC market.",
        proj_2_title: "Home Care Services (UAE)",
        proj_2_desc: "Lead generation and conversation campaigns for home services.",
        proj_3_title: "Service Campaigns (Bahrain)",
        proj_3_desc: "Efficient messaging campaigns for local service providers.",

        proj_4_title: "Elmaali Tours (Egypt)",
        proj_4_desc: "Always-on messaging campaigns generating 98k+ leads.",
        kpi_4_1_label: "Conversations",
        kpi_4_1_val: "98,496",
        kpi_4_2_label: "Spend",
        kpi_4_2_val: "22,577 EGP",
        kpi_4_3_label: "Cost/Conv",
        kpi_4_3_val: "0.23 EGP",
        kpi_4_4_label: "Avg CTR",
        kpi_4_4_val: "8%",

        // GCC Projects 5-16
        proj_5_title: "Gulf Art Furniture (GCC)",
        proj_5_desc: "Generated over 5.4k profile visits and 191 high-intent furniture inquiries.",
        kpi_5_1_label: "Visits", kpi_5_1_val: "5,407",
        kpi_5_2_label: "Conversations", kpi_5_2_val: "191",
        kpi_5_3_label: "Cost/Visit", kpi_5_3_val: "$0.057",
        kpi_5_4_label: "Cost/Conv.", kpi_5_4_val: "$2.71",

        proj_6_title: "Perfect Skin Clinic (UAE)",
        proj_6_desc: "WhatsApp campaigns for aesthetic treatments driving 1.8k+ conversations.",
        kpi_6_1_label: "Conversations", kpi_6_1_val: "1,808",
        kpi_6_2_label: "Spend", kpi_6_2_val: "31k+ AED",
        kpi_6_3_label: "Cost/Conv.", kpi_6_3_val: "6.96 AED",

        proj_7_title: "ByLeila Skin Care (GCC)",
        proj_7_desc: "Scaled skin care messaging funnel to 762+ conversations at efficient rates.",
        kpi_7_1_label: "Conversations", kpi_7_1_val: "762",
        kpi_7_2_label: "Spend", kpi_7_2_val: "$2,172",
        kpi_7_3_label: "Cost/Conv.", kpi_7_3_val: "$2.85",

        proj_8_title: "Best Clean (UAE)",
        proj_8_desc: "Home cleaning lead gen delivering 2.7k visits and hundreds of booking msgs.",
        kpi_8_1_label: "Visits", kpi_8_1_val: "2,719",
        kpi_8_2_label: "Conversations", kpi_8_2_val: "550+",
        kpi_8_3_label: "Cost/Visit", kpi_8_3_val: "$0.14",
        kpi_8_4_label: "Cost/Conv.", kpi_8_4_val: "$2.63 - $4.78",

        proj_9_title: "Silver Shine (GCC)",
        proj_9_desc: "Cleaning services push achieving 958 conversations at just $1.60 each.",
        kpi_9_1_label: "Conversations", kpi_9_1_val: "958",
        kpi_9_2_label: "Cost/Conv.", kpi_9_2_val: "$1.60",
        kpi_9_3_label: "Spend", kpi_9_3_val: "$1,530",

        proj_10_title: "Fixer.bh (Bahrain)",
        proj_10_desc: "Maintenance services campaign driving 4.5k visits and 615 leads.",
        kpi_10_1_label: "Visits", kpi_10_1_val: "4,530",
        kpi_10_2_label: "Conversations", kpi_10_2_val: "615",
        kpi_10_3_label: "Cost/Visit", kpi_10_3_val: "$0.091",
        kpi_10_4_label: "Cost/Conv.", kpi_10_4_val: "$1.88",

        proj_11_title: "RIX Car Services (KSA)",
        proj_11_desc: "Broad targeting strategy for car care services in Saudi Arabia.",
        kpi_11_1_label: "Visits", kpi_11_1_val: "706",
        kpi_11_2_label: "Conversations", kpi_11_2_val: "109",
        kpi_11_3_label: "Cost/Visit", kpi_11_3_val: "0.40 SAR",
        kpi_11_4_label: "Cost/Conv.", kpi_11_4_val: "6.05 SAR",

        proj_12_title: "Toyzania (GCC)",
        proj_12_desc: "E-commerce toy store scaling to ~1,970 purchases with 84x ROAS.",
        kpi_12_1_label: "Purchases", kpi_12_1_val: "1,970",
        kpi_12_2_label: "Cost/Purch.", kpi_12_2_val: "11.44 AED",
        kpi_12_3_label: "Spend", kpi_12_3_val: "22.5k AED",
        kpi_12_4_label: "ROAS", kpi_12_4_val: "~84.24",

        proj_13_title: "Salawat App (Multi-Country)",
        proj_13_desc: "App promotion in KSA, Bahrain, Iraq via low-cost messaging.",
        kpi_13_1_label: "Conversations", kpi_13_1_val: "1,231",
        kpi_13_2_label: "Cost (KSA)", kpi_13_2_val: "$0.42",
        kpi_13_3_label: "Cost (BH)", kpi_13_3_val: "$0.88",

        proj_14_title: "Maen Jarrar Clinics (GCC)",
        proj_14_desc: "Targeted laser & dental messaging campaigns.",
        kpi_14_1_label: "Laser Conv.", kpi_14_1_val: "22",
        kpi_14_2_label: "Dental Conv.", kpi_14_2_val: "37",
        kpi_14_3_label: "Cost/Conv.", kpi_14_3_val: "$2.86 - $4.15",

        proj_15_title: "Sakura Active (GCC)",
        proj_15_desc: "Fashion brand awareness: 8k+ visits and 72k+ engagements.",
        kpi_15_1_label: "Visits", kpi_15_1_val: "8,659",
        kpi_15_2_label: "Engagements", kpi_15_2_val: "72,576",
        kpi_15_3_label: "Visit Cost", kpi_15_3_val: "$0.033",
        kpi_15_4_label: "Eng. Cost", kpi_15_4_val: "$0.0014",

        proj_16_title: "Dr. Beauty (UAE)",
        proj_16_desc: "High-volume cosmetic clinic campaign driving 1,738 purchases.",
        kpi_16_1_label: "Purchases", kpi_16_1_val: "1,738",
        kpi_16_2_label: "Cost/Purch.", kpi_16_2_val: "11.76 AED",
        kpi_16_3_label: "Spend", kpi_16_3_val: "20.4k AED",


        kpi_16_3_label: "Spend", kpi_16_3_val: "20.4k AED",

        // Testimonials
        section_testimonials: "Testimonials",
        testi_1_text: "Ahmed helped us turn a quiet Facebook page into a constant source of high-quality bookings. Our summer packages started selling out weeks in advance thanks to his Meta campaigns and ongoing optimization.",
        testi_1_author: "– Tourism Company Owner, Egypt",

        testi_2_text: "We were impressed by how efficiently Ahmed drove WhatsApp leads for our cleaning services across the UAE. He kept our cost per conversation under control while maintaining strong volume and intent.",
        testi_2_author: "– Operations Manager, Home Services Brand (UAE)",

        testi_3_text: "Ahmed understands how to speak to our target audience. His campaigns consistently bring us qualified WhatsApp consultations, and he always backs his decisions with clear numbers and dashboards.",
        testi_3_author: "– Clinic Marketing Manager, Dubai",

        testi_4_text: "Working with Ahmed allowed us to scale our online sales in the GCC without losing profitability. He tracks every purchase, tests creatives fast, and knows exactly which campaigns to push or pause.",
        testi_4_author: "– Founder, E-commerce Brand (GCC)",

        testi_5_text: "Ahmed is the kind of performance marketer you trust with your ad accounts. He treats each campaign like his own money, reports transparently, and proactively suggests new ideas to grow results.",
        testi_5_author: "– Agency Partner, GCC Region",

        section_services: "My Services",
        serv_1_title: "Performance Marketing",
        serv_1_desc: "Data-driven campaigns focused on ROI and conversions.",
        serv_2_title: "Meta & Google Ads",
        serv_2_desc: "Full management of ad accounts, pixels, and targeting.",
        serv_3_title: "Lead Generation",
        serv_3_desc: "High-quality leads for Egypt & GCC markets.",
        serv_4_title: "Strategy & Content",
        serv_4_desc: "Creative briefing and ad copywriting that sells.",

        section_testimonials: "Testimonials",
        testi_text: "\"Ahmed transformed our online presence. His campaigns are efficient and data-backed. Highly recommended!\"",

        section_contact: "Get In Touch",
        contact_intro: "Ready to scale your business? Let's talk.",
        btn_send: "Send Message"
    },

    ar: {
        nav_about: "عنّي",
        nav_skills: "المهارات",
        nav_experience: "الخبرة",
        nav_projects: "أعمالي",
        nav_contact: "تواصل معي",

        hero_title: "أحمد سيد | متخصص تسويق أداء وسوشيال ميديا",
        hero_subtitle: "خبرة أكثر من 5 سنوات في إدارة إعلانات ميتا وجوجل في مصر والخليج",
        hero_btn_work: "شاهد أعمالي",
        hero_btn_hire: "وظفني",

        section_about: "عنّي",
        about_bio_1: "متخصص في تسويق الأداء ووسائل التواصل الاجتماعي مع خبرة تزيد عن 5 سنوات في إدارة الحملات المدفوعة على ميتا وجوجل لعلامات تجارية في مجالات السياحة، الطب، التجميل، والخدمات المنزلية في مصر والخليج.",
        about_bio_2: "سجل حافل في تحسين أكثر من 40 حساب إعلاني—مما أدى لزيادة التفاعل بنسبة تصل إلى 30% وتقليل تكلفة التحويل بنسبة 10%. مهارة عالية في اختبار الإعلانات (A/B testing) والتحليل.",
        timeline_title: "المسار المهني",
        role_elmaali: "المعالي تورز",
        role_tiehouse: "تاي هاوس",
        role_nogget: "نوجيت تورز",
        role_shaymaa: "د. شيماء سلمان",
        role_amir: "أمير الدمياطي",
        role_marketing: "ماركتينج ليمتد",

        section_skills: "المهارات والخبرات",
        skill_meta: "إعلانات ميتا",
        skill_google: "إعلانات جوجل",
        skill_campaign: "تحسين الحملات",
        skill_lead: "توليد العملاء (Leads)",
        skill_whatsapp: "تسويق واتساب",
        skill_copy: "كتابة الإعلانات",
        skill_analytics: "تحليل الأداء",
        skill_gcc: "أسواق مصر والخليج",

        section_experience: "الخبرة العملية",
        exp_title_1: "أخصائي سوشيال ميديا وميديا باير",
        exp_desc_1_1: "أدرت حملات مدفوعة حولت العلامة التجارية من صفحة غير نشطة إلى علامة تجارية ذات ظهور عالي.",
        exp_desc_1_2: "بنيت طلباً قوياً أدى لحجز باقات الصيف بالكامل قبل أشهر.",
        exp_desc_1_3: "صممت محتوى إبداعي أدى لزيادة 30% في معدل النقر وزيادة في المبيعات.",

        exp_title_2: "ميديا باير",
        exp_desc_2_1: "أدرت أكثر من 40 حساب إعلاني وحققت زيادة 30% في التفاعل.",
        exp_desc_2_2: "قللت تكلفة التحويل بنسبة 10% لعلامات تجارية خدمية.",
        exp_desc_2_3: "نتائج قوية في أسواق البحرين والإمارات.",

        exp_title_3: "مسوق سوشيال ميديا",
        exp_desc_3_1: "قمت بقيادة حملات إبداعية حققت نمواً 10% في التفاعل.",
        exp_desc_3_2: "حسنت الحملات لزيادة 15% في المؤشرات الرئيسية.",

        exp_title_4: "أخصائي سوشيال ميديا",
        exp_desc_4_1: "بنيت استراتيجيات لخدمات طبية وتجميلية.",
        exp_desc_4_2: "حققت تخفيض 20% في تكلفة الـ Lead عبر فيسبوك وانستجرام.",

        exp_title_5: "أخصائي سوشيال ميديا وميديا باير",
        exp_desc_5_1: "نوجيت: زيادة تفاعل العلامة التجارية 25% وتحسين العائد 15%.",
        exp_desc_5_2: "تاي هاوس: زيادة الوصول 30% وظهور العلامة التجارية 20%.",

        section_projects: "أبرز النتائج والمشاريع",
        proj_1_title: "جلف آرت للأثاث (الخليج)",
        proj_1_desc: "حملة زيارات بروفايل عالية الكثافة تستهدف الإمارات.",
        proj_2_title: "خدمات منزلية (الإمارات)",
        proj_2_desc: "حملات توليد عملاء ومحادثات للخدمات المنزلية.",
        proj_3_title: "حملات خدمات (البحرين)",
        proj_3_desc: "حملات رسائل فعالة لمزودي الخدمات المحليين.",

        proj_4_title: "المعالي تورز (مصر)",
        proj_4_desc: "حملات رسائل مستمرة حققت أكثر من 98 ألف محادثة.",
        kpi_4_1_label: "محادثات",
        kpi_4_1_val: "98,496",
        kpi_4_2_label: "إنفاق",
        kpi_4_2_val: "22,577 ج.م",
        kpi_4_3_label: "تكلفة/محادثة",
        kpi_4_3_val: "0.23 ج.م",
        kpi_4_4_label: "نسبة النقر",
        kpi_4_4_val: "8%",

        // GCC Projects 5-16 (Arabic)
        proj_5_title: "جلف آرت للأثاث (الخليج)",
        proj_5_desc: "أكثر من 5,400 زيارة للبروفايل و 191 استفسار شراء أثاث.",
        kpi_5_1_label: "زيارات", kpi_5_1_val: "5,407",
        kpi_5_2_label: "محادثات", kpi_5_2_val: "191",
        kpi_5_3_label: "ت. زيارة", kpi_5_3_val: "$0.057",
        kpi_5_4_label: "ت. رسالة", kpi_5_4_val: "$2.71",

        proj_6_title: "عيادة بيرفكت سكين (الإمارات)",
        proj_6_desc: "حملات واتساب للعلاجات التجميلية حققت أكثر من 1800 محادثة.",
        kpi_6_1_label: "محادثات", kpi_6_1_val: "1,808",
        kpi_6_2_label: "إنفاق", kpi_6_2_val: "+31 ألف درهم",
        kpi_6_3_label: "ت. رسالة", kpi_6_3_val: "6.96 درهم",

        proj_7_title: "باي ليلى للعناية بالبشرة (الخليج)",
        proj_7_desc: "توسيع مسار رسائل المبيعات لـ 762 محادثة بتكلفة فعالة.",
        kpi_7_1_label: "محادثات", kpi_7_1_val: "762",
        kpi_7_2_label: "إنفاق", kpi_7_2_val: "$2,172",
        kpi_7_3_label: "ت. رسالة", kpi_7_3_val: "$2.85",

        proj_8_title: "بست كلين (الإمارات)",
        proj_8_desc: "توليد عملاء للتنظيف المنزلي: 2700 زيارة ومئات الحجوزات.",
        kpi_8_1_label: "زيارات", kpi_8_1_val: "2,719",
        kpi_8_2_label: "محادثات", kpi_8_2_val: "550+",
        kpi_8_3_label: "ت. زيارة", kpi_8_3_val: "$0.14",
        kpi_8_4_label: "ت. رسالة", kpi_8_4_val: "$2.63 - $4.78",

        proj_9_title: "سيلفر شاين (الخليج)",
        proj_9_desc: "تسويق خدمات تنظيف حقق 958 محادثة بتكلفة 1.60$ فقط.",
        kpi_9_1_label: "محادثات", kpi_9_1_val: "958",
        kpi_9_2_label: "ت. رسالة", kpi_9_2_val: "$1.60",
        kpi_9_3_label: "إنفاق", kpi_9_3_val: "$1,530",

        proj_10_title: "Fixer.bh (البحرين)",
        proj_10_desc: "خدمات صيانة: 4500 زيارة بروفايل و 615 عميل محتمل.",
        kpi_10_1_label: "زيارات", kpi_10_1_val: "4,530",
        kpi_10_2_label: "محادثات", kpi_10_2_val: "615",
        kpi_10_3_label: "ت. زيارة", kpi_10_3_val: "$0.091",
        kpi_10_4_label: "ت. رسالة", kpi_10_4_val: "$1.88",

        proj_11_title: "RIX لخدمات السيارات (السعودية)",
        proj_11_desc: "استهداف واسع لخدمات العناية بالسيارات في المملكة.",
        kpi_11_1_label: "زيارات", kpi_11_1_val: "706",
        kpi_11_2_label: "محادثات", kpi_11_2_val: "109",
        kpi_11_3_label: "ت. زيارة", kpi_11_3_val: "0.40 ريال",
        kpi_11_4_label: "ت. رسالة", kpi_11_4_val: "6.05 ريال",

        proj_12_title: "تويزانيا (الخليج)",
        proj_12_desc: "متجر ألعاب إلكتروني: 1970 عملية شراء وعائد 84 ضعفاً.",
        kpi_12_1_label: "شراء", kpi_12_1_val: "1,970",
        kpi_12_2_label: "ت. شراء", kpi_12_2_val: "11.44 درهم",
        kpi_12_3_label: "إنفاق", kpi_12_3_val: "22.5 ألف درهم",
        kpi_12_4_label: "عائد", kpi_12_4_val: "~84.24",

        proj_13_title: "تطبيق صلوات (عدة دول)",
        proj_13_desc: "تسويق تطبيق في السعودية، البحرين والعراق عبر الرسائل.",
        kpi_13_1_label: "محادثات", kpi_13_1_val: "1,231",
        kpi_13_2_label: "ت. (السعودية)", kpi_13_2_val: "$0.42",
        kpi_13_3_label: "ت. (البحرين)", kpi_13_3_val: "$0.88",

        proj_14_title: "عيادات معن جرار (الخليج)",
        proj_14_desc: "استهداف دقيق لخدمات الليزر والأسنان.",
        kpi_14_1_label: "ليزر", kpi_14_1_val: "22",
        kpi_14_2_label: "أسنان", kpi_14_2_val: "37",
        kpi_14_3_label: "ت. رسالة", kpi_14_3_val: "$2.86 - $4.15",

        proj_15_title: "ساكورا أكتيف (الخليج)",
        proj_15_desc: "براند أزياء: 8 آلاف زيارة و 72 ألف تفاعل.",
        kpi_15_1_label: "زيارات", kpi_15_1_val: "8,659",
        kpi_15_2_label: "تفاعل", kpi_15_2_val: "72,576",
        kpi_15_3_label: "ت. زيارة", kpi_15_3_val: "$0.033",
        kpi_15_4_label: "ت. تفاعل", kpi_15_4_val: "$0.0014",

        proj_16_title: "دكتور بيوتي (الإمارات)",
        proj_16_desc: "حملة ضخمة لعيادة تجميل حققت 1738 حجز/شراء.",
        kpi_16_1_label: "شراء", kpi_16_1_val: "1,738",
        kpi_16_2_label: "ت. شراء", kpi_16_2_val: "11.76 درهم",
        kpi_16_3_label: "إنفاق", kpi_16_3_val: "20.4 ألف درهم",

        kpi_16_3_label: "إنفاق", kpi_16_3_val: "20.4 ألف درهم",

        // Testimonials (Arabic)
        section_testimonials: "آراء العملاء",

        testi_1_text: "ساعدنا Ahmed في تحويل صفحة فيسبوك هادئة إلى مصدر دائم للحجوزات عالية الجودة. بدأت باقاتنا الصيفية تنفد قبل أسابيع بفضل حملات Meta التي أدارها والتحسين المستمر.",
        testi_1_author: "– مالك شركة سياحة، مصر",

        testi_2_text: "أُعجبنا بكفاءة Ahmed في جلب عملاء محتملين عبر WhatsApp لخدمات التنظيف الخاصة بنا في جميع أنحاء UAE. لقد حافظ على تكلفة المحادثة تحت السيطرة مع الحفاظ على حجم ونوايا شراء قوية.",
        testi_2_author: "– مدير العمليات، علامة تجارية للخدمات المنزلية (UAE)",

        testi_3_text: "يفهم Ahmed جيداً كيفية التحدث إلى جمهورنا المستهدف. تجلب حملاته باستمرار استشارات WhatsApp مؤهلة، ويدعم قراراته دائماً بأرقام ولوحات بيانات واضحة.",
        testi_3_author: "– مدير تسويق عيادة، دبي",

        testi_4_text: "العمل مع Ahmed سمح لنا بتوسيع مبيعاتنا عبر الإنترنت في GCC دون خسارة الربحية. إنه يتتبع كل عملية شراء، ويختبر الإعلانات بسرعة، ويعرف بالضبط أي الحملات يجب تعزيزها أو إيقافها.",
        testi_4_author: "– مؤسس، علامة تجارية للتجارة الإلكترونية (GCC)",

        testi_5_text: "Ahmed هو نوع المسوقين بالأداء الذي تثق به في حساباتك الإعلانية. إنه يعامل كل حملة وكأنها ماله الخاص، ويقدم تقارير بشفافية، ويقترح أفكاراً جديدة لنمو النتائج بشكل استباقي.",
        testi_5_author: "– شريك وكالة، منطقة GCC",

        section_services: "خدماتي",
        serv_1_title: "تسويق الأداء",
        serv_1_desc: "حملات مبنية على البيانات تركز على العائد والتحويلات.",
        serv_2_title: "إدارة إعلانات",
        serv_2_desc: "إدارة كاملة لحسابات ميتا وجوجل والاستهداف.",
        serv_3_title: "توليد العملاء",
        serv_3_desc: "عملاء محتملين بجودة عالية لمصر والخليج.",
        serv_4_title: "استراتيجية ومحتوى",
        serv_4_desc: "كتابة إعلانات بيعية وتخطيط إبداعي.",

        section_testimonials: "ماذا يقول العملاء",
        testi_text: "\"أحمد غيّر تواجدنا الرقمي بالكامل. حملاته فعالة ومبنية على الأرقام. أنصح بالتعامل معه!\"",

        section_contact: "تواصل معي",
        contact_intro: "جاهز لتنمية عملك؟ دعنا نتحدث.",
        btn_send: "إرسال الرسالة"
    }
};

// --- Language Toggle Logic ---
const langBtn = document.getElementById('lang-toggle');
let currentLang = 'en';

langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    updateLanguage(currentLang);
});

function updateLanguage(lang) {
    // 1. Update HTML attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // 2. Toggle Body Class
    if (lang === 'ar') {
        document.body.classList.add('rtl');
        langBtn.textContent = 'English';
    } else {
        document.body.classList.remove('rtl');
        langBtn.textContent = 'عربي';
    }

    // 3. Update Text Content
    const items = document.querySelectorAll('[data-i18n]');
    items.forEach(item => {
        const key = item.getAttribute('data-i18n');
        if (translations[lang][key]) {
            item.textContent = translations[lang][key];
        }
    });

    // 4. Update Input Placeholders (Optional/manual check)
    if (lang === 'ar') {
        document.querySelector('input[type="text"]').placeholder = 'الاسم';
        document.querySelector('input[type="email"]').placeholder = 'البريد الإلكتروني';
        document.querySelector('textarea').placeholder = 'الرسالة';
    } else {
        document.querySelector('input[type="text"]').placeholder = 'Name';
        document.querySelector('input[type="email"]').placeholder = 'Email';
        document.querySelector('textarea').placeholder = 'Message';
    }
}


// --- Mobile Menu ---
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});


// --- Admin Panel / Image Management (LocalStorage) ---

const imgIds = ['hero-img', 'about-img', 'project-img-1', 'project-img-2', 'project-img-3', 'project-img-4'];

// Load images on start
window.addEventListener('scroll', () => {
    // Reveal admin logic if needed, currently using anchor link
});

document.addEventListener('DOMContentLoaded', () => {
    // 1. Check for Admin hash to show panel (optional UX)
    if (window.location.hash === '#admin') {
        document.getElementById('admin-panel').style.display = 'block';
    }
    // Also show if clicked from footer
    document.getElementById('admin-link').addEventListener('click', () => {
        document.getElementById('admin-panel').style.display = 'block';
    });

    // 2. Load stored images
    loadImages();
});

function handleImageUpload(event, storageKey, previewId, targetImgId) {
    const file = event.target.files[0];
    if (!file) return;

    // Check size limit (e.g. 2MB) to prevent LS quota exceeded
    if (file.size > 2 * 1024 * 1024) {
        alert("Image is too large for local storage! Please pick a smaller image (under 2MB).");
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        const dataUrl = e.target.result;

        // Save to LS
        try {
            localStorage.setItem(storageKey, dataUrl);

            // Update Preview
            document.getElementById(previewId).src = dataUrl;

            // Update Live Site Image
            const target = document.getElementById(targetImgId);
            if (target) target.src = dataUrl;

        } catch (err) {
            alert("Error saving image. LocalStorage might be full.");
            console.error(err);
        }
    };
    reader.readAsDataURL(file);
}

function loadImages() {
    // Map keys to IDs
    const map = {
        'portfolio_heroImage': ['hero-img', 'preview-hero'],
        'portfolio_aboutImage': ['about-img', 'preview-about'],
        'portfolio_p1': ['project-img-1', 'preview-p1'],
        'portfolio_p2': ['project-img-2', 'preview-p2'],
        'portfolio_p3': ['project-img-3', 'preview-p3'],
        'portfolio_p4': ['project-img-4', 'preview-p4']
    };

    for (const [key, ids] of Object.entries(map)) {
        const stored = localStorage.getItem(key);
        if (stored) {
            // Update Main Image
            const mainImg = document.getElementById(ids[0]);
            if (mainImg) mainImg.src = stored;

            // Update Admin Preview
            const previewImg = document.getElementById(ids[1]);
            if (previewImg) previewImg.src = stored;
        }
    }
}

function resetImages() {
    if (confirm("Are you sure? This will delete all custom images from your browser.")) {
        localStorage.clear(); // Or specific keys remove
        location.reload();
    }
}
