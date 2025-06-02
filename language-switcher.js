// language-switcher.js
document.addEventListener('DOMContentLoaded', () => {
    const languageSelectorBtn = document.getElementById('languageSelectorBtn');
    const languageDropdownContent = document.getElementById('languageDropdownContent');
    const selectedLanguageFlag = document.getElementById('selectedLanguageFlag');

    // --- Translations Object ---
    const translations = {
        en: {
            nav_about: "About",
            nav_solutions: "Solutions",
            nav_why_hamoniq: "Why Hamoniq?",
            nav_contact: "Contact",
            nav_request_demo: "Request a Demo",
            hero_title_main: "Innovate. Connect. ", 
            hero_title_span: "Empower.", 
            hero_subtitle: "Hamoniq delivers intelligent software solutions that bridge communities and authorities, and drive safety and efficiency in industrial operations.",
            hero_cta_explore: "Explore Solutions",
            hero_cta_touch: "Get In Touch",
            about_badge: "Our Mission",
            about_title: "Pioneering a Smarter, Safer Future",
            about_subtitle: "At Hamoniq, we are driven by the conviction that technology can create profound positive impacts. Our mission is to architect and deploy sophisticated applications that tackle pressing challenges in public service delivery and industrial safety management.",
            about_feature1_title: "Innovation at Core",
            about_feature1_text: "We continuously explore emergent technologies to build solutions that are not just current, but future-ready.",
            about_feature2_title: "User-Centric Design",
            about_feature2_text: "Our platforms are meticulously crafted for intuitive interaction, ensuring ease of adoption and maximum utility.",
            about_feature3_title: "Impactful Results",
            about_feature3_text: "We focus on delivering measurable improvements in safety, efficiency, and community engagement.",
        },
        nl: {
            nav_about: "Over ons",
            nav_solutions: "Oplossingen",
            nav_why_hamoniq: "Waarom Hamoniq?",
            nav_contact: "Contact",
            nav_request_demo: "Demo Aanvragen",
            hero_title_main: "Innoveren. Verbinden. ",
            hero_title_span: "Versterken.",
            hero_subtitle: "Hamoniq levert intelligente softwareoplossingen die gemeenschappen en autoriteiten overbruggen, en veiligheid en efficiëntie in industriële operaties stimuleren.",
            hero_cta_explore: "Ontdek Oplossingen",
            hero_cta_touch: "Neem Contact Op",
            about_badge: "Onze Missie",
            about_title: "Pionieren Voor Een Slimmere, Veiligere Toekomst",
            about_subtitle: "Bij Hamoniq worden we gedreven door de overtuiging dat technologie diepgaande positieve effecten kan creëren. Onze missie is het ontwerpen en implementeren van geavanceerde applicaties die urgente uitdagingen aanpakken in openbare dienstverlening en industrieel veiligheidsbeheer.",
            about_feature1_title: "Kerninnovatie",
            about_feature1_text: "We verkennen continu opkomende technologieën om oplossingen te bouwen die niet alleen actueel, maar ook toekomstbestendig zijn.",
            about_feature2_title: "Gebruikersgericht Ontwerp",
            about_feature2_text: "Onze platforms zijn zorgvuldig ontworpen voor intuïtieve interactie, wat zorgt voor eenvoudige adoptie en maximale bruikbaarheid.",
            about_feature3_title: "Impactvolle Resultaten",
            about_feature3_text: "We richten ons op het leveren van meetbare verbeteringen in veiligheid, efficiëntie en gemeenschapsbetrokkenheid.",
        },
        fr: {
            nav_about: "À propos",
            nav_solutions: "Solutions",
            nav_why_hamoniq: "Pourquoi Hamoniq?",
            nav_contact: "Contact",
            nav_request_demo: "Demander une démo",
            hero_title_main: "Innover. Connecter. ",
            hero_title_span: "Renforcer.",
            hero_subtitle: "Hamoniq fournit des solutions logicielles intelligentes qui relient les communautés et les autorités, et améliorent la sécurité et l'efficacité des opérations industrielles.",
            hero_cta_explore: "Découvrir les solutions",
            hero_cta_touch: "Nous contacter",
            about_badge: "Notre Mission",
            about_title: "Pionnier d'un avenir plus intelligent et plus sûr",
            about_subtitle: "Chez Hamoniq, nous sommes convaincus que la technologie peut avoir des impacts positifs profonds. Notre mission est de concevoir et de déployer des applications sophistiquées qui relèvent les défis urgents de la prestation de services publics et de la gestion de la sécurité industrielle.",
            about_feature1_title: "L'innovation au cœur",
            about_feature1_text: "Nous explorons continuellement les technologies émergentes pour construire des solutions qui ne sont pas seulement actuelles, mais prêtes pour l'avenir.",
            about_feature2_title: "Conception centrée sur l'utilisateur",
            about_feature2_text: "Nos plateformes sont méticuleusement conçues pour une interaction intuitive, garantissant une facilité d'adoption et une utilité maximale.",
            about_feature3_title: "Résultats percutants",
            about_feature3_text: "Nous nous concentrons sur la fourniture d'améliorations mesurables en matière de sécurité, d'efficacité et d'engagement communautaire.",
        },
        de: {
            nav_about: "Über uns",
            nav_solutions: "Lösungen",
            nav_why_hamoniq: "Warum Hamoniq?",
            nav_contact: "Kontakt",
            nav_request_demo: "Demo anfordern",
            hero_title_main: "Innovieren. Verbinden. ",
            hero_title_span: "Stärken.",
            hero_subtitle: "Hamoniq liefert intelligente Softwarelösungen, die Gemeinschaften und Behörden verbinden und Sicherheit und Effizienz in industriellen Betrieben fördern.",
            hero_cta_explore: "Lösungen entdecken",
            hero_cta_touch: "Kontakt aufnehmen",
            about_badge: "Unsere Mission",
            about_title: "Wegweisend für eine intelligentere, sicherere Zukunft",
            about_subtitle: "Bei Hamoniq sind wir davon überzeugt, dass Technologie tiefgreifende positive Auswirkungen haben kann. Unsere Mission ist es, hochentwickelte Anwendungen zu entwickeln und bereitzustellen, die dringende Herausforderungen bei der Erbringung öffentlicher Dienstleistungen und im industriellen Sicherheitsmanagement angehen.",
            about_feature1_title: "Innovation im Kern",
            about_feature1_text: "Wir erforschen kontinuierlich neue Technologien, um Lösungen zu entwickeln, die nicht nur aktuell, sondern auch zukunftssicher sind.",
            about_feature2_title: "Benutzerzentriertes Design",
            about_feature2_text: "Unsere Plattformen sind sorgfältig für eine intuitive Interaktion gestaltet, die eine einfache Einführung und maximale Benutzerfreundlichkeit gewährleistet.",
            about_feature3_title: "Wirkungsvolle Ergebnisse",
            about_feature3_text: "Wir konzentrieren uns darauf, messbare Verbesserungen in Sicherheit, Effizienz und Community-Engagement zu erzielen.",
        },
        es: {
            nav_about: "Acerca de",
            nav_solutions: "Soluciones",
            nav_why_hamoniq: "¿Por qué Hamoniq?",
            nav_contact: "Contacto",
            nav_request_demo: "Solicitar una demostración",
            hero_title_main: "Innovar. Conectar. ",
            hero_title_span: "Empoderar.",
            hero_subtitle: "Hamoniq ofrece soluciones de software inteligentes que unen a comunidades y autoridades, e impulsan la seguridad y la eficiencia en las operaciones industriales.",
            hero_cta_explore: "Explorar soluciones",
            hero_cta_touch: "Ponerse en contacto",
            about_badge: "Nuestra Misión",
            about_title: "Pioneros en un futuro más inteligente y seguro",
            about_subtitle: "En Hamoniq, nos impulsa la convicción de que la tecnología puede crear profundos impactos positivos. Nuestra misión es diseñar e implementar aplicaciones sofisticadas que aborden desafíos apremiantes en la prestación de servicios públicos y la gestión de la seguridad industrial.",
            about_feature1_title: "Innovación en el núcleo",
            about_feature1_text: "Exploramos continuamente tecnologías emergentes para construir soluciones que no solo sean actuales, sino también preparadas para el futuro.",
            about_feature2_title: "Diseño centrado en el usuario",
            about_feature2_text: "Nuestras plataformas están meticulosamente diseñadas para una interacción intuitiva, garantizando la facilidad de adopción y la máxima utilidad.",
            about_feature3_title: "Resultados impactantes",
            about_feature3_text: "Nos enfocamos en ofrecer mejoras medibles en seguridad, eficiencia y participación comunitaria.",
        },
        sv: {
            nav_about: "Om oss",
            nav_solutions: "Lösningar",
            nav_why_hamoniq: "Varför Hamoniq?",
            nav_contact: "Kontakt",
            nav_request_demo: "Begär en demo",
            hero_title_main: "Innovera. Ansluta. ",
            hero_title_span: "Stärka.",
            hero_subtitle: "Hamoniq levererar intelligenta mjukvarulösningar som överbryggar samhällen och myndigheter, och driver säkerhet och effektivitet i industriella verksamheter.",
            hero_cta_explore: "Utforska lösningar",
            hero_cta_touch: "Kontakta oss",
            about_badge: "Vårt Uppdrag",
            about_title: "Banbrytande för en smartare, säkrare framtid",
            about_subtitle: "På Hamoniq drivs vi av övertygelsen att teknik kan skapa djupgående positiva effekter. Vårt uppdrag är att arkitektera och distribuera sofistikerade applikationer som tacklar angelägna utmaningar inom offentlig service och industriell säkerhetshantering.",
            about_feature1_title: "Innovation i kärnan",
            about_feature1_text: "Vi utforskar kontinuerligt framväxande tekniker för att bygga lösningar som inte bara är aktuella, utan också framtidssäkra.",
            about_feature2_title: "Användarcentrerad design",
            about_feature2_text: "Våra plattformar är noggrant utformade för intuitiv interaktion, vilket säkerställer enkel adoption och maximal nytta.",
            about_feature3_title: "Effektfulla resultat",
            about_feature3_text: "Vi fokuserar på att leverera mätbara förbättringar inom säkerhet, effektivitet och samhällsengagemang.",
        }
    };

    function applyTranslations(languageCode) {
        const langTranslations = translations[languageCode];
        if (!langTranslations) {
            console.warn(`No translations found for language: ${languageCode}`);
            return;
        }

        document.querySelectorAll('[data-translate-key]').forEach(element => {
            const key = element.dataset.translateKey;
            
            if (key === "hero_title") { 
                const mainText = langTranslations["hero_title_main"] || "";
                const spanText = langTranslations["hero_title_span"] || "";
                const spanElement = element.querySelector('span[data-translate-key="hero_title_span_only"]');
                if (spanElement) {
                    element.childNodes[0].nodeValue = mainText; 
                    spanElement.textContent = spanText; 
                } else {
                     element.textContent = mainText + spanText; 
                }
            } else if (langTranslations[key]) {
                element.textContent = langTranslations[key];
            } else {
                console.warn(`No translation found for key: ${key} in language: ${languageCode}`);
            }
        });
    }


    if (languageSelectorBtn && languageDropdownContent && selectedLanguageFlag) {
        const languageLinks = languageDropdownContent.querySelectorAll('a[data-lang]');

        function setLanguageDisplay(lang, flagUrl, langName) {
            if (selectedLanguageFlag) {
                selectedLanguageFlag.src = flagUrl;
                selectedLanguageFlag.alt = langName + " Flag";
            }
            
            applyTranslations(lang); 
            
            localStorage.setItem('hamoniq-language', lang);
            localStorage.setItem('hamoniq-language-flag', flagUrl);
            localStorage.setItem('hamoniq-language-name', langName);
            
            if (languageDropdownContent) {
                languageDropdownContent.style.display = 'none';
                languageDropdownContent.classList.remove('active');
            }
            if (languageSelectorBtn) {
                languageSelectorBtn.setAttribute('aria-expanded', 'false');
                const chevronIcon = languageSelectorBtn.querySelector('.fa-chevron-down');
                if (chevronIcon) {
                    chevronIcon.classList.remove('rotate-180');
                }
            }
        }

        languageLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const lang = this.dataset.lang;
                const flagUrl = this.dataset.flag;
                const langName = this.textContent.trim(); 
                setLanguageDisplay(lang, flagUrl, langName);
            });
        });
        
        const savedLang = localStorage.getItem('hamoniq-language') || 'en';
        const savedFlag = localStorage.getItem('hamoniq-language-flag') || 'https://flagcdn.com/us.svg';
        const savedLangName = localStorage.getItem('hamoniq-language-name') || 'English';
        setLanguageDisplay(savedLang, savedFlag, savedLangName); 

        languageSelectorBtn.addEventListener('click', (event) => {
            event.stopPropagation(); 
            const isActive = languageDropdownContent.classList.toggle('active');
            languageDropdownContent.style.display = isActive ? 'block' : 'none'; 
            languageSelectorBtn.setAttribute('aria-expanded', isActive ? 'true' : 'false');
            const chevronIcon = languageSelectorBtn.querySelector('.fa-chevron-down');
            if (chevronIcon) {
                chevronIcon.classList.toggle('rotate-180', isActive);
            }
        });

        document.addEventListener('click', function(event) {
            if (languageDropdownContent && languageDropdownContent.classList.contains('active')) {
                if (!languageSelectorBtn.contains(event.target) && !languageDropdownContent.contains(event.target)) {
                    languageDropdownContent.classList.remove('active');
                    languageDropdownContent.style.display = 'none'; 
                    languageSelectorBtn.setAttribute('aria-expanded', 'false');
                    const chevronIcon = languageSelectorBtn.querySelector('.fa-chevron-down');
                    if (chevronIcon) {
                        chevronIcon.classList.remove('rotate-180');
                    }
                }
            }
        });
    } else {
        console.error("Language switcher elements not found.");
    }
});
