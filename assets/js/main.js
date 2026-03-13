/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills() {
    let itemClass = this.parentNode.className

    for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close'
    }
    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(t => {
            t.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})

// Close modal when clicking outside
modalViews.forEach((modalView) => {
    modalView.addEventListener('click', (e) => {
        if (e.target.classList.contains('services__modal')) {
            modalViews.forEach(mv => mv.classList.remove('active-modal'))
        }
    })
})

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        modalViews.forEach(mv => mv.classList.remove('active-modal'))
    }
})

/*==================== PORTFOLIO SWIPER ====================*/
let swiperPortfolio = new Swiper('.portfolio__container', {
    loop: true,
    spaceBetween: 30,
    grabCursor: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        350: {
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 30,
        }
    }
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id')
        const navEl = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (navEl) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navEl.classList.add('active-link')
            } else {
                navEl.classList.remove('active-link')
            }
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.getElementById('header')
    if (this.scrollY >= 80) nav.classList.add('scroll-header')
    else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll')
    else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*==================== LANGUAGE TOGGLE (ID / EN) ====================*/
const translations = {
    id: {
        home_greeting: 'Halo, Saya',
        home_title: 'Moch. Zuhrul Umam',
        home_subtitle: 'Web Developer | AI Enthusiast | Informatics Educator',
        home_description: 'Sarjana Teknik Informatika yang berfokus pada pengembangan teknologi web, kecerdasan buatan, dan literasi digital.',
        contact_me: 'Hubungi Saya',
        download_cv: 'Unduh CV',
        about_title: 'Tentang Saya',
        about_subtitle: 'Profil & Latar Belakang',
        about_description: 'Lulusan S1 Teknik Informatika Universitas Islam Lamongan dengan IPK 3.70/4.00. Memiliki pengalaman lebih dari dua tahun mengajar Informatika serta aktif dalam pengembangan sistem informasi di lingkungan instansi pemerintahan dan universitas. Saya adalah pribadi yang teliti, adaptif, dan berorientasi pada hasil dalam setiap proyek teknologi.',
        special_interest: 'Minat Khusus:',
        years_exp: 'Tahun Pengalaman',
        completed_projects: 'Proyek Selesai',
        tech_certs: 'Sertifikasi Teknologi',
        skills_title: 'Keahlian',
        skills_subtitle: 'Kemampuan Teknis Saya',
        programming_subtitle: 'Web & Logic',
        ai_subtitle: 'Machine Learning & Data',
        design_subtitle: 'Design & Office',
        soft_skills: 'Soft Skills',
        soft_skills_subtitle: 'Collaboration & Communication',
        comm_skill: 'Komunikasi Efektif',
        problem_solving: 'Problem Solving',
        journey_title: 'Perjalanan',
        journey_subtitle: 'Pengalaman & Pendidikan',
        education: 'Pendidikan',
        experience: 'Pengalaman',
        tech_cert_title: 'Sertifikasi Teknologi',
        lpm_desc: 'Efisiensi Audit Mutu Internal Digital',
        teacher_admin: 'Guru & Admin',
        speaker: 'Pemateri',
        speaker_desc: 'Seminar Coding & Blog',
        portfolio_title: 'Portofolio',
        portfolio_subtitle: 'Proyek & Prestasi',
        sippasla_title: 'SIPPASLA',
        leaf_title: 'AI Leaf Detection',
        vehicle_title: 'Vehicle Overload Detection',
        audit_title: 'Web Audit Internal',
        research_title: 'Research: Depression Detection',
        award_title: 'Award: MagangHub Best Participant',
        sippasla_desc: 'Sistem Informasi Pelayanan Lapas Lamongan. Membangun dan mengelola sistem layanan publik digital termasuk e-Kunjungan, e-Pengaduan, dan Layanan Integrasi.',
        leaf_desc: 'Sistem Deteksi Penyakit Daun Padi menggunakan metode CNN. Akurasi tinggi dalam klasifikasi penyakit tanaman padi.',
        vehicle_desc: 'Aplikasi deteksi muatan berlebih berbasis Flask + CNN untuk optimasi logistik dan keselamatan transportasi.',
        audit_desc: 'Sistem informasi audit mutu digital untuk Lembaga Penjaminan Mutu (LPM) UNISLA. Meningkatkan efisiensi audit mutu internal.',
        research_desc: 'Kontributor penelitian "Deteksi Depresi pada Siswa Berbasis Web" yang terindeks Google Scholar.',
        award_desc: 'Peserta MagangHub Batch 3 Terbaik di Lapas Kelas IIB Lamongan.',
        demo: 'Lihat Demo',
        detail: 'Lihat Detail',
        services_title: 'Layanan',
        services_subtitle: 'Yang Saya Tawarkan',
        web_dev_service: 'Pengembangan Web',
        ai_service: 'AI & Machine Learning',
        edu_service: 'Pelatihan & Edukasi',
        view_more: 'Lihat Detail',
        web_s1: 'Pengembangan sistem berbasis Laravel/PHP.',
        web_s2: 'Pembuatan website profil, portal, dan sistem informasi.',
        web_s3: 'Perancangan UI/UX dengan Figma & Canva.',
        ai_s1: 'Implementasi model Deep Learning (CNN).',
        ai_s2: 'Analisis Data menggunakan Python & Data Science.',
        ai_s3: 'Pengembangan aplikasi berbasis Flask + AI.',
        edu_s1: 'Mengajar mata pelajaran Informatika.',
        edu_s2: 'Seminar dan workshop coding.',
        edu_s3: 'Mentoring pengembangan web & pembuatan blog.',
        contact_title: 'Kontak',
        contact_subtitle: 'Hubungi Saya',
        location: 'Lokasi',
        form_name: 'Nama',
        form_project: 'Topik / Proyek',
        form_message: 'Pesan',
        send_message: 'Kirim Pesan',
        all_rights: 'Hak cipta dilindungi.'
    },
    en: {
        home_greeting: 'Hello, I am',
        home_title: 'Moch. Zuhrul Umam',
        home_subtitle: 'Web Developer | AI Enthusiast | Informatics Educator',
        home_description: 'Bachelor of Informatics Engineering focused on web technology development, artificial intelligence, and digital literacy.',
        contact_me: 'Contact Me',
        download_cv: 'Download CV',
        about_title: 'About Me',
        about_subtitle: 'Profile & Background',
        about_description: 'Graduate of Bachelor of Informatics Engineering at Islamic University of Lamongan with a GPA of 3.70/4.00. Over two years of experience teaching Informatics and actively developing information systems for government institutions and universities. A meticulous, adaptive, and result-oriented individual in every technology project.',
        special_interest: 'Special Interest:',
        years_exp: 'Years of Experience',
        completed_projects: 'Completed Projects',
        tech_certs: 'Tech Certifications',
        skills_title: 'Skills',
        skills_subtitle: 'My Technical Abilities',
        programming_subtitle: 'Web & Logic',
        ai_subtitle: 'Machine Learning & Data',
        design_subtitle: 'Design & Office',
        soft_skills: 'Soft Skills',
        soft_skills_subtitle: 'Collaboration & Communication',
        comm_skill: 'Effective Communication',
        problem_solving: 'Problem Solving',
        journey_title: 'Journey',
        journey_subtitle: 'Experience & Education',
        education: 'Education',
        experience: 'Experience',
        tech_cert_title: 'Tech Certifications',
        lpm_desc: 'Digital Internal Quality Audit Efficiency',
        teacher_admin: 'Teacher & Admin',
        speaker: 'Speaker',
        speaker_desc: 'Coding & Blogging Seminar',
        portfolio_title: 'Portfolio',
        portfolio_subtitle: 'Projects & Achievements',
        sippasla_title: 'SIPPASLA',
        leaf_title: 'AI Leaf Detection',
        vehicle_title: 'Vehicle Overload Detection',
        audit_title: 'Web Audit Internal',
        research_title: 'Research: Depression Detection',
        award_title: 'Award: MagangHub Best Participant',
        sippasla_desc: 'Lamongan Correctional Facility Information System. Built and managed digital public service systems including e-Visit, e-Complaints, and Integration Services.',
        leaf_desc: 'Rice Leaf Disease Detection System using CNN method. High accuracy in plant disease classification.',
        vehicle_desc: 'Overload detection application based on Flask + CNN for logistics optimization and transportation safety.',
        audit_desc: 'Digital quality audit information system for the Quality Assurance Institute (LPM) UNISLA.',
        research_desc: 'Contributor to the research "Web-Based Depression Detection in Students" indexed in Google Scholar.',
        award_desc: 'Best MagangHub Batch 3 Participant at Lamongan Class IIB Correctional Facility.',
        demo: 'View Demo',
        detail: 'View Detail',
        services_title: 'Services',
        services_subtitle: 'What I Offer',
        web_dev_service: 'Web Development',
        ai_service: 'AI & Machine Learning',
        edu_service: 'Training & Education',
        view_more: 'View Details',
        web_s1: 'System development based on Laravel/PHP.',
        web_s2: 'Building profile websites, portals, and information systems.',
        web_s3: 'UI/UX design with Figma & Canva.',
        ai_s1: 'Deep Learning model implementation (CNN).',
        ai_s2: 'Data analysis using Python & Data Science.',
        ai_s3: 'Application development based on Flask + AI.',
        edu_s1: 'Teaching Informatics subjects.',
        edu_s2: 'Coding seminars and workshops.',
        edu_s3: 'Mentoring web development & blogging.',
        contact_title: 'Contact',
        contact_subtitle: 'Get In Touch',
        location: 'Location',
        form_name: 'Name',
        form_project: 'Topic / Project',
        form_message: 'Message',
        send_message: 'Send Message',
        all_rights: 'All rights reserved.'
    }
}

let currentLang = localStorage.getItem('selected-lang') || 'id'

function applyTranslations(lang) {
    const t = translations[lang]
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate')
        if (t[key]) {
            el.textContent = t[key]
        }
    })
}

// Apply on load
applyTranslations(currentLang)

const langButton = document.getElementById('language-button')
if (langButton) {
    langButton.addEventListener('click', () => {
        currentLang = currentLang === 'id' ? 'en' : 'id'
        applyTranslations(currentLang)
        localStorage.setItem('selected-lang', currentLang)

        // Visual feedback
        langButton.style.transform = 'rotate(180deg)'
        setTimeout(() => {
            langButton.style.transform = ''
        }, 400)
    })
}

/*==================== CONTACT FORM ====================*/
const contactForm = document.querySelector('.contact__form')

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault()

        const name = document.getElementById('contact-name').value
        const submitBtn = document.getElementById('contact-submit-btn')

        // Visual feedback
        submitBtn.innerHTML = '<i class="uil uil-check-circle button__icon"></i> Terkirim!'
        submitBtn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)'

        setTimeout(() => {
            submitBtn.innerHTML = '<span>Kirim Pesan</span> <i class="uil uil-message button__icon"></i>'
            submitBtn.style.background = ''
            contactForm.reset()
        }, 3000)
    })
}

/*==================== SCROLL FADE-IN ANIMATION ====================*/
const fadeEls = document.querySelectorAll('.section, .about__img, .skills__content, .services__content')
fadeEls.forEach(el => el.classList.add('fade-in'))

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible')
            }, i * 80)
        }
    })
}, { threshold: 0.1 })

fadeEls.forEach(el => observer.observe(el))