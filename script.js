/* =========================================================
   Global Dev Style — AR/EN + Dark luxurious default
   ========================================================= */

(function () {
  "use strict";

  const root = document.documentElement;
  const nav = document.getElementById("mainNav");
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");
  const backTop = document.getElementById("backTop");
  const form = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");
  const canvas = document.getElementById("heroCanvas");
  const langToggle = document.getElementById("langToggle");
  const langLabel = document.getElementById("langLabel");
  const bootstrapCss = document.getElementById("bootstrapCss");

  const BOOTSTRAP_RTL = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.rtl.min.css";
  const BOOTSTRAP_LTR = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";

  /* ================= القاموس ================= */
  const I18N = {
    ar: {
      "nav.home": "الرئيسية", "nav.about": "من أنا", "nav.skills": "المهارات",
      "nav.projects": "المشاريع", "nav.experience": "الخبرة", "nav.services": "الخدمات",
      "nav.certificates": "الشهادات", "nav.contact": "تواصل",
      "brand.family": "مخلوفي", "brand.given": "عبد المجيد",
      "hero.kicker": "مرحباً بك في معرض أعمالي",
      "hero.name": "عبد المجيد مخلوفي",
      "hero.title": "مطور برمجيات ومتخصص قواعد بيانات",
      "hero.sub": "خبير في Delphi و SQL Server و MySQL مع اهتمام متقدم بتطوير الويب والذكاء الاصطناعي.",
      "hero.cta1": "عرض المشاريع", "hero.cta2": "تواصل معي",
      "hero.m1": "قواعد بيانات احترافية", "hero.m2": "تطبيقات سطح المكتب", "hero.m3": "ذكاء اصطناعي",
      "about.kicker": "نبذة شخصية", "about.title": "من أنا",
      "about.p1": "أنا مطور برمجيات شغوف بالتكنولوجيا والحلول الرقمية، أمتلك خبرة عملية في تطوير تطبيقات سطح المكتب وقواعد البيانات باستخدام Delphi وMicrosoft SQL Server وMySQL.",
      "about.p2": "أهتم بتصميم الأنظمة المعلوماتية وإدارة قواعد البيانات وتطوير الحلول البرمجية التي تساعد المؤسسات على تحسين الكفاءة والإنتاجية.",
      "about.p3": "كما أعمل على تطوير مهاراتي في Python وFastAPI وتقنيات الويب الحديثة والذكاء الاصطناعي والأتمتة.",
      "about.p4": "أسعى دائماً إلى تحويل الأفكار إلى تطبيقات عملية سهلة الاستخدام وذات قيمة حقيقية.",
      "skills.kicker": "الخبرات التقنية", "skills.title": "المهارات",
      "skills.lang": "لغات البرمجة", "skills.db": "قواعد البيانات", "skills.web": "تطوير الويب",
      "skills.tools": "الأدوات", "skills.env": "بيئات التطوير",
      "projects.kicker": "أعمال مختارة", "projects.title": "المشاريع",
      "proj1.t": "منصة استخراج البيانات بالـ OCR", "proj1.d": "رفع ملفات وصور واستخراج البيانات تلقائياً.",
      "proj2.t": "دليل الأطباء", "proj2.d": "منصة للبحث عن الأطباء حسب التخصص والمنطقة.",
      "proj3.t": "تطبيق القرآن الكريم", "proj3.d": "تطبيق ويب حديث للاستماع وقراءة القرآن الكريم.",
      "proj4.t": "أنظمة قواعد البيانات", "proj4.d": "تطبيقات مكتبية وقواعد بيانات باستخدام Delphi وSQL Server.",
      "proj5.t": "مواقع ويب حديثة", "proj5.d": "تصميم وتطوير مواقع احترافية متجاوبة.",
      "exp.kicker": "المسار المهني", "exp.title": "الخبرة",
      "exp1.t": "تطبيقات سطح المكتب بـ Delphi", "exp1.d": "تطوير أنظمة مكتبية متكاملة باستخدام Delphi 7 وXE3 وRAD Studio، مع واجهات عملية وأداء مستقر للمؤسسات.",
      "exp2.t": "تصميم قواعد البيانات", "exp2.d": "نمذجة البيانات، تطبيع الجداول، بناء العلاقات والفهارس لضمان سلامة البيانات وسرعة الاستعلام.",
      "exp3.t": "إدارة SQL Server", "exp3.d": "إدارة الخوادم، النسخ الاحتياطي، الإجراءات المخزنة، وتحسين الأداء في بيئات Microsoft SQL Server.",
      "exp4.t": "تطوير MySQL", "exp4.d": "بناء قواعد بيانات MySQL وMariaDB لتطبيقات الويب والأنظمة الداخلية مع استعلامات محسّنة.",
      "exp5.t": "تطوير Python", "exp5.d": "كتابة خدمات وأدوات بلغة Python وFastAPI لمعالجة البيانات وربط الأنظمة عبر REST API.",
      "exp6.t": "الذكاء الاصطناعي والأتمتة", "exp6.d": "دمج تقنيات OCR والأتمتة وأدوات الذكاء الاصطناعي لتسريع استخراج البيانات وتقليل العمل اليدوي.",
      "serv.kicker": "ماذا أقدم", "serv.title": "الخدمات",
      "serv1": "تطوير تطبيقات Delphi", "serv2": "تصميم قواعد البيانات",
      "serv3": "تطوير SQL Server", "serv4": "تطوير MySQL",
      "serv5": "تطوير تطبيقات Python", "serv6": "تطوير مواقع ويب",
      "serv7": "أتمتة المهام", "serv8": "دمج الذكاء الاصطناعي",
      "st1": "سنوات التعلم والخبرة", "st2": "المشاريع المنجزة",
      "st3": "التقنيات المستخدمة", "st4": "قواعد البيانات المطورة",
      "cert.kicker": "الإنجازات العلمية", "cert.title": "الشهادات",
      "cert1.t": "قواعد البيانات المتقدمة", "cert1.d": "تصميم وإدارة SQL Server وMySQL",
      "cert2.t": "تطوير تطبيقات Delphi", "cert2.d": "RAD Studio وتطبيقات المؤسسات",
      "cert3.t": "Python وتطوير الويب", "cert3.d": "FastAPI وواجهات برمجية حديثة",
      "cert4.t": "الذكاء الاصطناعي والأتمتة", "cert4.d": "OCR وأدوات الذكاء الاصطناعي",
      "cert.tag": "شهادة",
      "contact.kicker": "لنبدأ مشروعاً", "contact.title": "تواصل معي",
      "contact.h": "يسعدني تواصلك",
      "contact.p": "أرسل رسالتك وسأعود إليك في أقرب وقت لمناقشة مشروعك أو استفسارك التقني.",
      "contact.phone": "أضف رقم هاتف العمل هنا",
      "visitors": "زائر",
      "form.name": "الاسم", "form.email": "البريد الإلكتروني",
      "form.subject": "الموضوع", "form.message": "الرسالة", "form.send": "إرسال الرسالة",
      title: "عبد المجيد مخلوفي | مطور برمجيات ومتخصص قواعد بيانات",
      formEmpty: "يرجى تعبئة جميع الحقول.",
      formEmail: "البريد الإلكتروني غير صالح.",
      formOk: "تم استلام رسالتك بنجاح. شكراً لتواصلك."
    },
    en: {
      "nav.home": "Home", "nav.about": "About", "nav.skills": "Skills",
      "nav.projects": "Projects", "nav.experience": "Experience", "nav.services": "Services",
      "nav.certificates": "Certificates", "nav.contact": "Contact",
      "brand.family": "Makhloufi", "brand.given": "Abdelmajid",
      "hero.kicker": "Welcome to my portfolio",
      "hero.name": "Abdelmajid Makhloufi",
      "hero.title": "Software Developer & Database Specialist",
      "hero.sub": "Expert in Delphi, SQL Server & MySQL with advanced interest in Web Development and AI.",
      "hero.cta1": "View Projects", "hero.cta2": "Contact Me",
      "hero.m1": "Professional Databases", "hero.m2": "Desktop Apps", "hero.m3": "Artificial Intelligence",
      "about.kicker": "Profile", "about.title": "About Me",
      "about.p1": "I am a software developer passionate about technology and digital solutions, with hands-on experience building desktop apps and databases using Delphi, Microsoft SQL Server and MySQL.",
      "about.p2": "I focus on designing information systems, managing databases and building software that helps organizations improve efficiency and productivity.",
      "about.p3": "I am also growing my skills in Python, FastAPI, modern web technologies, AI and automation.",
      "about.p4": "I always strive to turn ideas into practical, easy-to-use applications with real value.",
      "skills.kicker": "Tech Expertise", "skills.title": "Skills",
      "skills.lang": "Programming Languages", "skills.db": "Databases", "skills.web": "Web Development",
      "skills.tools": "Tools", "skills.env": "IDEs",
      "projects.kicker": "Selected Work", "projects.title": "Projects",
      "proj1.t": "OCR Data Extraction Platform", "proj1.d": "Upload files & images and extract data automatically.",
      "proj2.t": "Doctors Directory", "proj2.d": "Platform to find doctors by specialty and region.",
      "proj3.t": "Quran App", "proj3.d": "Modern web app to listen to and read the Holy Quran.",
      "proj4.t": "Database Systems", "proj4.d": "Desktop apps & databases with Delphi and SQL Server.",
      "proj5.t": "Modern Websites", "proj5.d": "Design & development of responsive professional websites.",
      "exp.kicker": "Career Path", "exp.title": "Experience",
      "exp1.t": "Delphi Desktop Applications", "exp1.d": "Building complete enterprise desktop systems with Delphi 7, XE3 and RAD Studio.",
      "exp2.t": "Database Design", "exp2.d": "Data modeling, normalization, relations and indexes for integrity and fast queries.",
      "exp3.t": "SQL Server Administration", "exp3.d": "Server management, backups, stored procedures and performance tuning in SQL Server.",
      "exp4.t": "MySQL Development", "exp4.d": "Building MySQL & MariaDB databases for web apps with optimized queries.",
      "exp5.t": "Python Development", "exp5.d": "Python & FastAPI services for data processing and REST API integrations.",
      "exp6.t": "AI & Automation", "exp6.d": "Integrating OCR, automation and AI tools to speed up extraction and reduce manual work.",
      "serv.kicker": "What I Offer", "serv.title": "Services",
      "serv1": "Delphi App Development", "serv2": "Database Design",
      "serv3": "SQL Server Development", "serv4": "MySQL Development",
      "serv5": "Python App Development", "serv6": "Website Development",
      "serv7": "Task Automation", "serv8": "AI Integration",
      "st1": "Years of Learning & Experience", "st2": "Completed Projects",
      "st3": "Technologies Used", "st4": "Databases Built",
      "cert.kicker": "Achievements", "cert.title": "Certificates",
      "cert1.t": "Advanced Databases", "cert1.d": "SQL Server & MySQL design and administration",
      "cert2.t": "Delphi App Development", "cert2.d": "RAD Studio & enterprise applications",
      "cert3.t": "Python & Web Development", "cert3.d": "FastAPI & modern APIs",
      "cert4.t": "AI & Automation", "cert4.d": "OCR & AI tools",
      "cert.tag": "Certificate",
      "contact.kicker": "Let's start a project", "contact.title": "Contact Me",
      "contact.h": "Glad to hear from you",
      "contact.p": "Send your message and I will get back to you soon to discuss your project.",
      "contact.phone": "Add your work phone number here",
      "visitors": "visitors",
      "form.name": "Name", "form.email": "Email",
      "form.subject": "Subject", "form.message": "Message", "form.send": "Send Message",
      title: "Abdelmajid Makhloufi | Software Developer & Database Specialist",
      formEmpty: "Please fill in all fields.",
      formEmail: "Invalid email address.",
      formOk: "Your message has been received. Thank you!"
    },
    fr: {
      "nav.home": "Accueil", "nav.about": "À propos", "nav.skills": "Compétences",
      "nav.projects": "Projets", "nav.experience": "Expérience", "nav.services": "Services",
      "nav.certificates": "Certificats", "nav.contact": "Contact",
      "brand.family": "Makhloufi", "brand.given": "Abdelmajid",
      "hero.kicker": "Bienvenue sur mon portfolio",
      "hero.name": "Abdelmajid Makhloufi",
      "hero.title": "Développeur Logiciel et Spécialiste Bases de Données",
      "hero.sub": "Expert en Delphi, SQL Server et MySQL, avec un intérêt avancé pour le développement Web et l'IA.",
      "hero.cta1": "Voir les projets", "hero.cta2": "Me contacter",
      "hero.m1": "Bases de données professionnelles", "hero.m2": "Applications desktop", "hero.m3": "Intelligence artificielle",
      "about.kicker": "Profil", "about.title": "À propos de moi",
      "about.p1": "Je suis un développeur logiciel passionné de technologie et de solutions numériques, avec une expérience pratique dans la création d'applications desktop et de bases de données avec Delphi, Microsoft SQL Server et MySQL.",
      "about.p2": "Je me concentre sur la conception de systèmes d'information, la gestion de bases de données et le développement de logiciels qui aident les organisations à améliorer leur efficacité et leur productivité.",
      "about.p3": "Je développe également mes compétences en Python, FastAPI, technologies web modernes, IA et automatisation.",
      "about.p4": "Je m'efforce toujours de transformer les idées en applications pratiques, faciles à utiliser et à réelle valeur ajoutée.",
      "skills.kicker": "Expertise technique", "skills.title": "Compétences",
      "skills.lang": "Langages de programmation", "skills.db": "Bases de données", "skills.web": "Développement Web",
      "skills.tools": "Outils", "skills.env": "Environnements de développement",
      "projects.kicker": "Travaux sélectionnés", "projects.title": "Projets",
      "proj1.t": "Plateforme d'extraction de données OCR", "proj1.d": "Téléchargez fichiers et images et extrayez les données automatiquement.",
      "proj2.t": "Annuaire des médecins", "proj2.d": "Plateforme pour trouver des médecins par spécialité et région.",
      "proj3.t": "Application du Saint Coran", "proj3.d": "Application web moderne pour écouter et lire le Saint Coran.",
      "proj4.t": "Systèmes de bases de données", "proj4.d": "Applications desktop et bases de données avec Delphi et SQL Server.",
      "proj5.t": "Sites web modernes", "proj5.d": "Conception et développement de sites professionnels responsives.",
      "exp.kicker": "Parcours professionnel", "exp.title": "Expérience",
      "exp1.t": "Applications desktop Delphi", "exp1.d": "Développement de systèmes desktop complets avec Delphi 7, XE3 et RAD Studio.",
      "exp2.t": "Conception de bases de données", "exp2.d": "Modélisation des données, normalisation, relations et index pour l'intégrité et des requêtes rapides.",
      "exp3.t": "Administration SQL Server", "exp3.d": "Gestion des serveurs, sauvegardes, procédures stockées et optimisation des performances.",
      "exp4.t": "Développement MySQL", "exp4.d": "Création de bases MySQL et MariaDB pour applications web avec requêtes optimisées.",
      "exp5.t": "Développement Python", "exp5.d": "Services Python et FastAPI pour le traitement des données et les intégrations API REST.",
      "exp6.t": "IA et automatisation", "exp6.d": "Intégration d'OCR, d'automatisation et d'outils IA pour accélérer l'extraction et réduire le travail manuel.",
      "serv.kicker": "Ce que j'offre", "serv.title": "Services",
      "serv1": "Développement d'apps Delphi", "serv2": "Conception de bases de données",
      "serv3": "Développement SQL Server", "serv4": "Développement MySQL",
      "serv5": "Développement d'apps Python", "serv6": "Développement de sites web",
      "serv7": "Automatisation des tâches", "serv8": "Intégration de l'IA",
      "st1": "Années d'apprentissage et d'expérience", "st2": "Projets réalisés",
      "st3": "Technologies utilisées", "st4": "Bases de données créées",
      "cert.kicker": "Réalisations", "cert.title": "Certificats",
      "cert1.t": "Bases de données avancées", "cert1.d": "Conception et administration SQL Server et MySQL",
      "cert2.t": "Développement d'apps Delphi", "cert2.d": "RAD Studio et applications d'entreprise",
      "cert3.t": "Python et développement Web", "cert3.d": "FastAPI et API modernes",
      "cert4.t": "IA et automatisation", "cert4.d": "OCR et outils IA",
      "cert.tag": "Certificat",
      "contact.kicker": "Lançons un projet", "contact.title": "Me contacter",
      "contact.h": "Ravi d'avoir de vos nouvelles",
      "contact.p": "Envoyez votre message et je reviendrai vers vous rapidement pour discuter de votre projet.",
      "contact.phone": "Ajoutez votre numéro professionnel ici",
      "visitors": "visiteurs",
      "form.name": "Nom", "form.email": "E-mail",
      "form.subject": "Sujet", "form.message": "Message", "form.send": "Envoyer le message",
      title: "Abdelmajid Makhloufi | Développeur Logiciel et Spécialiste Bases de Données",
      formEmpty: "Veuillez remplir tous les champs.",
      formEmail: "Adresse e-mail invalide.",
      formOk: "Votre message a été reçu. Merci !"
    }
  };

  const THEME_HINT = { ar: "تبديل المظهر", en: "Toggle theme", fr: "Changer de thème" };
  const MENU_HINT = { ar: "القائمة", en: "Menu", fr: "Menu" };
  const LANG_ORDER = ["ar", "en", "fr"];

  let currentLang = localStorage.getItem("portfolio-lang") || "ar";

  function setLang(lang) {
    currentLang = I18N[lang] ? lang : "ar";
    localStorage.setItem("portfolio-lang", currentLang);
    const dict = I18N[currentLang];
    const isAR = currentLang === "ar";

    root.setAttribute("lang", currentLang);
    root.setAttribute("dir", isAR ? "rtl" : "ltr");
    document.title = dict.title;

    if (bootstrapCss) bootstrapCss.setAttribute("href", isAR ? BOOTSTRAP_RTL : BOOTSTRAP_LTR);
    if (langLabel) langLabel.textContent = currentLang.toUpperCase();
    if (formStatus) { formStatus.textContent = ""; formStatus.className = "form-status"; }

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll("#langMenu [data-lang]").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === currentLang);
    });

    const toggler = document.querySelector(".navbar-toggler");
    if (toggler) toggler.setAttribute("aria-label", MENU_HINT[currentLang] || "Menu");
  }

  const langMenu = document.getElementById("langMenu");
  if (langMenu && langMenu.querySelectorAll) {
    langMenu.querySelectorAll("[data-lang]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLang(btn.getAttribute("data-lang"));
      });
    });
  }
  /* احتياط: تنقّل دائري إن تعذّر تحميل Bootstrap */
  if (langToggle && !window.bootstrap) {
    langToggle.addEventListener("click", function () {
      const next = LANG_ORDER[(LANG_ORDER.indexOf(currentLang) + 1) % LANG_ORDER.length];
      setLang(next);
    });
  }
  setLang(currentLang);

  /* ---------- المظهر: داكن فخم افتراضي ---------- */
  const savedTheme = localStorage.getItem("portfolio-theme");
  setTheme(savedTheme || "dark");

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      setTheme(next);
      localStorage.setItem("portfolio-theme", next);
    });
  }

  function setTheme(mode) {
    if (themeToggle) themeToggle.setAttribute("aria-label", THEME_HINT[currentLang] || "Toggle theme");
    if (mode === "light") {
      root.setAttribute("data-theme", "light");
      if (themeIcon) themeIcon.className = "fa-solid fa-moon";
    } else {
      root.setAttribute("data-theme", "dark");
      if (themeIcon) themeIcon.className = "fa-solid fa-sun";
    }
  }

  /* ---------- تمييز رابط القسم الحالي: تعريف مبكر قبل أي استدعاء ---------- */
  const sections = document.querySelectorAll("section[id], header[id]");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  /* ---------- شريط التنقل والعودة للأعلى ---------- */
  function onScroll() {
    if (nav) nav.classList.toggle("scrolled", window.scrollY > 12);
    if (backTop) backTop.classList.toggle("show", window.scrollY > 500);
    highlightNav();
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (backTop) {
    backTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  function highlightNav() {
    let current = "hero";
    sections.forEach(function (section) {
      if (window.scrollY >= section.offsetTop - 140) current = section.id;
    });
    navLinks.forEach(function (link) {
      link.classList.toggle("active", link.getAttribute("href") === "#" + current);
    });
  }

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      const menu = document.getElementById("navMenu");
      if (menu && menu.classList.contains("show") && window.bootstrap) {
        window.bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });

  /* ---------- الظهور عند الدخول والتمرير ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const revealObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          revealObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) {
      el.addEventListener("animationend", function handler(e) {
        if (e.animationName === "riseIn" || e.animationName === "artIn") {
          el.classList.add("settled");
          el.removeEventListener("animationend", handler);
        }
      });
      revealObs.observe(el);
    });
  } else {
    revealEls.forEach(function (el) { el.classList.add("revealed", "settled"); });
  }

  /* شبكة أمان: إظهار كل العناصر بعد 4 ثوانٍ مهما حدث */
  setTimeout(function () {
    revealEls.forEach(function (el) { el.classList.add("revealed", "settled"); });
  }, 4000);

  /* ---------- خلفية نقطية زرقاء ---------- */
  if (canvas && canvas.getContext) {
    const ctx = canvas.getContext("2d");
    let dots = [];
    let width = 0;
    let height = 0;
    let raf = 0;

    function resize() {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      dots = [];
      const count = Math.min(70, Math.floor((width * height) / 18000));
      for (let i = 0; i < count; i += 1) {
        dots.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(59, 130, 246, 0.7)";
      dots.forEach(function (dot, i) {
        dot.x += dot.vx;
        dot.y += dot.vy;
        if (dot.x < 0 || dot.x > width) dot.vx *= -1;
        if (dot.y < 0 || dot.y > height) dot.vy *= -1;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
        for (let j = i + 1; j < dots.length; j += 1) {
          const other = dots[j];
          const dx = dot.x - other.x;
          const dy = dot.y - other.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 110) {
            ctx.strokeStyle = "rgba(59, 130, 246, " + (1 - dist / 110) * 0.3 + ")";
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }
      });
      raf = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) cancelAnimationFrame(raf);
      else raf = requestAnimationFrame(draw);
    });
  }

  /* ---------- إزالة شاشة الترحيب بعد التحميل (CSS يخفيها وحده) ---------- */
  function removeIntro() {
    const intro = document.getElementById("intro");
    if (intro && intro.remove) intro.remove();
  }
  window.addEventListener("load", function () { setTimeout(removeIntro, 1600); });
  setTimeout(removeIntro, 3000);

  /* ---------- عدّاد الزوار ---------- */
  const visitNum = document.getElementById("visitCount");

  function paintCount(target) {
    if (!visitNum) return;
    const total = Math.max(0, Number(target) || 0);
    const duration = 1200;
    const start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      visitNum.textContent = Math.floor(eased * total).toLocaleString("en-US");
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  async function loadVisits() {
    let local = 0;
    try { local = Number(localStorage.getItem("portfolio-visits")) || 0; } catch (e) { local = 0; }
    local += 1;
    try { localStorage.setItem("portfolio-visits", String(local)); } catch (e) {}
    paintCount(local);
    try {
      const ctrl = new AbortController();
      const timer = setTimeout(function () { ctrl.abort(); }, 4500);
      const res = await fetch("https://abacus.jasoncameron.dev/hit/majid-portfolio/site-visits", { signal: ctrl.signal });
      clearTimeout(timer);
      if (res.ok) {
        const data = await res.json();
        if (data && typeof data.value === "number") paintCount(data.value);
      }
    } catch (e) { /* يبقى العدّاد المحلي */ }
  }
  loadVisits();

  /* ---------- عدادات الإحصائيات ---------- */
  const counters = document.querySelectorAll(".stat-number");
  let counted = false;

  function animateCounters() {
    counters.forEach(function (el) {
      const target = Number(el.getAttribute("data-count")) || 0;
      const duration = 1400;
      const start = performance.now();
      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        el.textContent = Math.floor(progress * target);
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }

  const stats = document.getElementById("stats");
  if (stats && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !counted) {
          counted = true;
          animateCounters();
        }
      });
    }, { threshold: 0.4 });
    observer.observe(stats);
  } else {
    animateCounters();
  }

  /* ---------- نموذج التواصل ---------- */
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const dict = I18N[currentLang];
      formStatus.className = "form-status";
      formStatus.textContent = "";

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const subject = form.subject.value.trim();
      const message = form.message.value.trim();
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!name || !email || !subject || !message) {
        formStatus.classList.add("err");
        formStatus.textContent = dict.formEmpty;
        return;
      }
      if (!emailOk) {
        formStatus.classList.add("err");
        formStatus.textContent = dict.formEmail;
        return;
      }
      formStatus.classList.add("ok");
      formStatus.textContent = dict.formOk;
      form.reset();
    });
  }
})();
