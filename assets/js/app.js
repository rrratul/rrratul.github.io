document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement;

    // ============================================================
    //  SCROLL LOCK — iOS-safe: position:fixed preserves position
    // ============================================================
    let _scrollY = 0;
    const lockScroll = () => {
        _scrollY = window.scrollY;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${_scrollY}px`;
        document.body.style.left = '0';
        document.body.style.right = '0';
        document.body.style.overflow = 'hidden';
    };
    const unlockScroll = () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.overflow = '';
        window.scrollTo(0, _scrollY);
    };

    // ============================================================
    //  DETAIL REGISTRY — project & research case study data
    // ============================================================
    const detailRegistry = {
        intellisense: {
            kicker: 'Project Case Study',
            title: 'IntelliSense: AI-Assisted Smart Wheelchair for Paralysis Patients',
            subtitle: '1st Runner-up, UIU Electronics Lab Competition',
            summary: 'Gesture and voice-controlled wheelchair concept that combines embedded sensing, safety automation, and assistive reminders for patients with limited mobility. The system integrates multiple input modalities with real-time health monitoring to support independent mobility.',
            meta: {
                Role: 'Project Lead',
                Focus: 'Embedded systems, IoT sensors, computer vision',
                Outcome: '1st Runner-up — UIU Electronics Lab Competition',
                Stack: 'Raspberry Pi, IoT sensors, assistive controls'
            },
            highlights: [
                'Multi-modal control: gesture recognition, voice commands, and manual fallback.',
                'Safety suite: real-time pulse monitoring, obstacle detection, and fall alert system.',
                'Caregiver integration: medication reminders and health notification pipeline.',
                'Modular embedded hardware design for adaptability across patient profiles.'
            ],
            slides: [
                { label: 'Project Showcase', src: 'assets/img/IntelliSense AI-Assisted Smart Wheelchair for Paralysis Patients_project_photo.jpg', caption: 'IntelliSense wheelchair prototype at UIU lab showcase.' },
                { label: 'Award Ceremony', src: 'assets/img/IntelliSense AI-Assisted Smart Wheelchair for Paralysis Patients_award_winning_photo.jpg', caption: '1st Runner-up award ceremony at UIU Electronics Lab Competition.' },
                { label: 'Team & Presentation', src: 'assets/img/Microprocessor_lab_award.jpg', caption: 'Project presentation and team recognition at UIU lab competition.' }
            ],
            videoUrl: 'https://www.youtube.com/embed/OdWYdE4hC9M',
            links: [
                { label: 'Project Video', href: 'https://www.youtube.com/watch?v=OdWYdE4hC9M' }
            ]
        },
        astha: {
            kicker: 'Project Case Study',
            title: 'Astha: Elderly Health Monitoring Application',
            subtitle: '1st Runner-up, UIU System Analysis Design Lab Competition',
            summary: 'Healthcare application for continuous monitoring of vital signs, health records, and caregiver alerts with early-risk detection support. Designed to improve quality of care for elderly patients through data-driven health tracking and timely alerts.',
            meta: {
                Role: 'ML Engineer & Builder',
                Focus: 'Healthcare AI, monitoring workflows, clinical data',
                Outcome: '1st Runner-up — UIU System Analysis Design Lab',
                Stack: 'Python, machine learning, health tracking APIs'
            },
            highlights: [
                'Continuous tracking of blood pressure, heart rate, and patient health records.',
                'Threshold-based caregiver notification system for critical health events.',
                'Early-risk ML model detecting anomalies before clinical escalation.',
                'Designed for accessibility and ease of use by elderly patients and caregivers.'
            ],
            slides: [
                { label: 'App Prototype — Screen 1', src: 'assets/img/prototype_Astha_picture_01 .png', caption: 'Astha app prototype: main health monitoring dashboard.' },
                { label: 'App Prototype — Screen 2', src: 'assets/img/prototype_Astha_picture_02.png', caption: 'Astha app prototype: vital signs tracking and history view.' },
                { label: 'App Prototype — Screen 3', src: 'assets/img/prototype_Astha_picture_03.png', caption: 'Astha app prototype: caregiver alert and notification interface.' },
                { label: 'Award Ceremony', src: 'assets/img/System_Analysis_Lab_award.jpg', caption: '1st Runner-up at UIU System Analysis Design Lab Competition.' },
                { label: 'UIU Campus Showcase', src: 'assets/img/Accerating_Bangladesh_moment.jpg', caption: 'Presented at an Accelerating Bangladesh innovation showcase.' }
            ],
            links: [
                { label: 'Pitch Slides (PDF)', href: 'assets/img/Astha_pitch_silde.pdf' }
            ]
        },
        'waste-segmentation': {
            kicker: 'Research Project',
            title: 'Image Segmentation and Classification — Waste Dataset',
            subtitle: 'Ongoing research project',
            summary: 'Ensemble segmentation models trained on multi-class waste imagery, with experiments and ablation studies that transfer methodology to broader medical-imaging style workflows. The goal is to push the state-of-the-art in segmentation accuracy for real-world unstructured datasets.',
            meta: {
                Role: 'Researcher',
                Focus: 'Deep learning, segmentation, transfer learning',
                Outcome: 'Ongoing research project',
                Stack: 'PyTorch, U-Net variants, ensemble methods'
            },
            highlights: [
                'Ensemble of segmentation models for robust multi-class waste classification.',
                'Comprehensive ablation studies across backbone architectures.',
                'Methodology transferable to medical imaging segmentation pipelines.',
                'Targeting journal submission upon experimental completion.'
            ],
            slides: [
                { label: 'Research Preview', src: null, icon: '🔬', caption: 'Dataset samples and segmentation model outputs — visuals in preparation.' },
                { label: 'Experiment Board', src: null, icon: '📊', caption: 'Training curves and evaluation metrics — in preparation.' }
            ],
            links: []
        },
        landlytics: {
            kicker: 'Project Case Study',
            title: 'Landlytics: Intelligent Land Analytics Platform',
            subtitle: 'Full-stack agricultural analytics web application',
            summary: 'Laravel-based web platform for agricultural analysis, crop recommendation, weather monitoring, and data-driven land planning. Designed to empower farmers and land managers with actionable insights derived from real-time and historical agricultural data.',
            meta: {
                Role: 'Full-stack Developer',
                Focus: 'Agritech, analytics, decision support',
                Outcome: 'GitHub repository available',
                Stack: 'Laravel, PHP, SQL, JavaScript'
            },
            highlights: [
                'Agricultural analysis dashboard for land productivity tracking.',
                'Crop recommendation engine based on soil and weather data.',
                'Integrated weather monitoring for real-time agricultural alerts.',
                'Data-driven land planning tools for optimizing yield and resource use.'
            ],
            slides: [
                { label: 'Platform Preview', src: null, icon: '🌾', caption: 'Web application dashboard — screenshot in preparation.' },
                { label: 'Architecture', src: null, icon: '⚙️', caption: 'System architecture and data flow diagram.' }
            ],
            links: [{ label: 'GitHub Repository', href: 'https://github.com/Rezaur16' }]
        },
        'soundids-sp': {
            kicker: 'Research Project',
            title: 'SoundIDS-SP: Audio-Domain Network Intrusion Detection via Dual-Branch Wav2Vec2 + ResNet-18',
            subtitle: 'Targeting IEEE Symposium on Security and Privacy (S&P) 2026',
            summary: 'A dual-branch neural architecture that converts tabular network flow records into synthetic audio waveforms, then applies Wav2Vec2 and ResNet-18 in parallel to extract complementary representations for intrusion classification. A novel cross-modal bridge between signal processing and cybersecurity.',
            meta: {
                Role: 'Researcher & Lead Author',
                Focus: 'Intrusion detection, audio representation learning, cybersecurity',
                Outcome: 'Targeting IEEE S&P 2026',
                Stack: 'PyTorch, Wav2Vec2, ResNet-18, Python'
            },
            highlights: [
                'Novel approach: transforms tabular network flows into synthetic audio for IDS.',
                'Dual-branch architecture fusing Wav2Vec2 and ResNet-18 feature extractors.',
                'Evaluated on NSL-KDD, CIC-IDS2017, and UNSW-NB15 benchmark datasets.',
                'Cross-modal bridge connecting network security with audio signal processing.',
                'Targeting IEEE Symposium on Security and Privacy (top-tier venue) 2026.'
            ],
            slides: [
                { label: 'Model Architecture', src: null, icon: '🏗️', caption: 'Dual-branch Wav2Vec2 + ResNet-18 architecture diagram — in preparation.' },
                { label: 'Audio Representation', src: null, icon: '🔊', caption: 'Synthetic audio waveforms generated from network flow data.' },
                { label: 'Benchmark Results', src: null, icon: '📈', caption: 'Evaluation results on NSL-KDD, CIC-IDS2017, and UNSW-NB15.' }
            ],
            links: []
        },
        'sqli-detection': {
            kicker: 'Research Project',
            title: 'Web Security Vulnerability Detection with a Large-Scale SQL Injection Dataset',
            subtitle: '1M+ sample cybersecurity dataset',
            summary: 'A large-scale SQL injection dataset containing over one million samples spanning diverse attack categories, curated to support the development and evaluation of machine learning-based vulnerability detection frameworks. Aims to fill the gap in publicly available large-scale web security benchmarks.',
            meta: {
                Role: 'Researcher & Dataset Author',
                Focus: 'Cybersecurity, dataset curation, ML-based detection',
                Outcome: '1M+ samples curated — paper in preparation',
                Stack: 'Python, SQL, security analytics, NLP'
            },
            highlights: [
                'Over one million SQL injection samples across diverse attack categories.',
                'Covers union-based, blind, error-based, and time-based injection patterns.',
                'Designed to support both classical ML and deep learning detection models.',
                'Largest publicly available SQL injection benchmark in scope.'
            ],
            slides: [
                { label: 'Dataset Overview', src: null, icon: '🗄️', caption: 'Dataset statistics and category breakdown — in preparation.' },
                { label: 'Attack Taxonomy', src: null, icon: '🔒', caption: 'Attack category taxonomy and sample distribution.' },
                { label: 'Detection Results', src: null, icon: '📊', caption: 'Baseline ML model performance on the dataset.' }
            ],
            links: []
        },
        shohochor: {
            kicker: 'Project Case Study',
            title: 'SHOHOCHOR — CCTV-Based Child Monitoring for Daycare Centers',
            subtitle: 'Top 4 nationally, University Innovation Hub Program (UIHP)',
            summary: 'Prototype CCTV-based child monitoring and safety solution designed for daycare centers. The system provides real-time supervision through computer vision, alerting caregivers to safety incidents and providing a transparent record of childcare activities.',
            meta: {
                Role: 'Founding Member',
                Focus: 'Computer vision, embedded systems, childcare safety',
                Outcome: 'Top 4 nationally, UIHP — 20,000 BDT award',
                Stack: 'Computer vision, CCTV integration, embedded systems'
            },
            highlights: [
                'Real-time CCTV-based supervision system for daycare environments.',
                'Automated alert generation for safety incidents and anomalous behavior.',
                'Transparent activity recording for parental review and caregiver accountability.',
                'National recognition: Top 4 in the University Innovation Hub Program.'
            ],
            slides: [
                { label: 'Award Ceremony', src: 'assets/img/Launch_pad_award_Giving.jpg', caption: 'UIHP Launchpad award ceremony — Top 4 nationally.' },
                { label: 'Team at UIHP', src: 'assets/img/Launch_pad_photos_with_team.jpg', caption: 'SHOHOCHOR team at the UIHP Launchpad national program.' },
                { label: 'Innovation Showcase', src: 'assets/img/Accerating_Bangladesh_moment.jpg', caption: 'Presented at Accelerating Bangladesh innovation event.' }
            ],
            links: []
        },
        'voice-reconstruction': {
            kicker: 'Research Highlight — Undergraduate Thesis',
            title: 'Voice Reconstruction from Lip Movements for Stroke Patients',
            subtitle: 'Champion — UIU Final Year Design Project Competition 2025',
            summary: 'Undergraduate thesis developing a deep learning pipeline for visual speech reconstruction. The system learns to reconstruct intelligible voice output from silent lip movement videos, targeting assistive communication for stroke patients who have lost the ability to vocalize.',
            meta: {
                Role: 'Thesis Researcher & Lead Author',
                Focus: 'Visual speech, assistive communication, healthcare AI',
                Outcome: 'Champion — UIU Final Year Design Project (FYDP) 2025',
                Stack: 'Deep learning, computer vision, signal processing'
            },
            highlights: [
                'Reconstructs voice from silent lip movements using deep learning.',
                'Combines computer vision (lip detection) with audio signal synthesis.',
                'Evaluated against healthcare-grade benchmarks for clinical viability.',
                'Targets stroke rehabilitation and AAC (augmentative communication) use cases.',
                'Champion at UIU Final Year Design Project (FYDP) Competition 2025.'
            ],
            slides: [
                { label: 'Project Award', src: 'assets/img/Final_year_project_lab_award.jpg', caption: 'Champion trophy and recognition at UIU FYDP Competition 2025.' },
                { label: 'Research Team with Supervisor', src: 'assets/img/Groupmember_with_supervisor.jpg', caption: 'Research group with thesis supervisor at UIU.' },
                { label: 'Research Team with Co-supervisor', src: 'assets/img/Groupmember_with_Co_supervisor.jpg.jpg', caption: 'Research group with co-supervisor at UIU.' }
            ],
            links: []
        },
        bdwatersurfaceset: {
            kicker: 'Research Highlight — Dataset + Journal Paper',
            title: 'BdWaterSurfaceSet: Automated Land Water-Surface Detection in Bangladesh',
            subtitle: 'Dataset published on Figshare (DOI: 10.6084/M9.FIGSHARE.32032830) · Paper in submission, Data in Brief 2026',
            summary: 'Benchmark satellite imagery dataset and evaluation study comparing modern vision transformer and convolutional backbones for automated inland water-surface detection in Bangladesh. The dataset is published on Figshare and ORCID-indexed, with an accompanying journal paper in submission to Data in Brief (Elsevier).',
            meta: {
                Role: 'Research Author',
                Focus: 'Remote sensing, satellite imagery, benchmark datasets',
                Outcome: 'Dataset published (Figshare, Apr 2026) · Paper in submission',
                DOI: '10.6084/M9.FIGSHARE.32032830',
                Stack: 'ViT, DeiT, Swin-Tiny, ConvNeXt-Tiny, Python'
            },
            highlights: [
                'Dataset published on Figshare — DOI: 10.6084/M9.FIGSHARE.32032830.',
                'Indexed on ORCID (0009-0002-9172-9982) — April 2026.',
                'Curated satellite imagery benchmark for Bangladesh inland water surfaces.',
                'Benchmarks ViT, DeiT, Swin-Tiny, and ConvNeXt-Tiny architectures.',
                'Addresses critical gap in remote sensing datasets for Bangladesh.',
                'Companion journal paper in submission to Data in Brief (Elsevier).'
            ],
            slides: [
                { label: 'Dataset on Figshare', src: null, icon: '🛰️', caption: 'BdWaterSurfaceSet on Figshare — DOI: 10.6084/M9.FIGSHARE.32032830.' },
                { label: 'Model Comparison', src: null, icon: '📊', caption: 'Benchmark: ViT vs DeiT vs Swin-Tiny vs ConvNeXt-Tiny on water surface detection.' },
                { label: 'Geographic Coverage', src: null, icon: '🗺️', caption: 'Dataset geographic coverage across Bangladesh inland water bodies.' }
            ],
            links: [
                { label: 'Figshare Dataset', href: 'https://figshare.com/articles/dataset/BdWaterSurfaceSet_Automated_Land_Watersurface_Detection_in_Bangladesh/32032830' },
                { label: 'DOI', href: 'https://doi.org/10.6084/M9.FIGSHARE.32032830' }
            ]
        },
        'compost-ai': {
            kicker: 'Publication — NSysS 2025, ACM Digital Library',
            title: 'An Explainable and Scalable Framework for Compost Maturity Prediction Using Ensemble Learning and Conversational AI',
            subtitle: 'Published · NSysS 2025 · ACM Digital Library pp. 29–34',
            summary: 'Conference paper presenting an ensemble learning pipeline paired with a conversational AI interface for explaining compost maturity predictions to field users. The system bridges the explainability gap in agricultural AI, enabling non-expert users to interact with model predictions in natural language.',
            meta: {
                Role: 'Co-author',
                Focus: 'Explainable AI, ensemble learning, agritech, conversational AI',
                Outcome: 'Published — NSysS 2025, ACM Digital Library',
                Stack: 'Ensemble learning, NLP, conversational AI framework'
            },
            highlights: [
                'Published at the 12th International Conference on Next Generation Computing (NSysS 2025).',
                'ACM Digital Library — pp. 29–34.',
                'Combines ensemble learning predictive models with LLM-based explanation interface.',
                'Enables field users without ML expertise to interpret model predictions.',
                'Targets practical deployment in agricultural decision support systems.'
            ],
            slides: [
                { label: 'Conference Paper', src: null, icon: '📄', caption: 'NSysS 2025, ACM Digital Library — paper preview.' },
                { label: 'System Architecture', src: null, icon: '🏗️', caption: 'Ensemble learning + conversational AI architecture diagram.' },
                { label: 'Evaluation Results', src: null, icon: '📊', caption: 'Model accuracy and explainability evaluation across test scenarios.' }
            ],
            links: []
        },
        bdroadscenes: {
            kicker: 'Open Dataset — IEEE DataPort',
            title: 'BDRoadScenes: A Real-World Dataset for Multi-Class Vehicle Detection',
            subtitle: 'Published · IEEE DataPort · DOI: 10.21227/DH1A-4C18 · March 2026',
            summary: 'A real-world dataset for multi-class vehicle detection captured on Bangladeshi roads. Addresses the critical gap in South Asian traffic datasets by providing labeled imagery across diverse vehicle categories, weather conditions, and road environments typical of urban Bangladesh.',
            meta: {
                Role: 'Dataset Author',
                Focus: 'Computer vision, vehicle detection, autonomous systems',
                Outcome: 'Published — IEEE DataPort (March 2026)',
                DOI: '10.21227/DH1A-4C18',
                Stack: 'Computer vision, annotation tools, Python'
            },
            highlights: [
                'Real-world imagery from Bangladeshi road environments.',
                'Multi-class annotations covering diverse vehicle types.',
                'Addresses South Asian traffic dataset gap for autonomous driving research.',
                'Indexed on IEEE DataPort and ORCID (0009-0002-9172-9982).',
                'Supports transfer learning and domain adaptation for low-resource road scenes.'
            ],
            slides: [
                { label: 'Dataset on IEEE DataPort', src: null, icon: '🚗', caption: 'BDRoadScenes available on IEEE DataPort — DOI: 10.21227/DH1A-4C18.' },
                { label: 'Sample Road Scenes', src: null, icon: '🛣️', caption: 'Multi-class vehicle annotations on Bangladeshi roads — visuals in preparation.' },
                { label: 'Class Distribution', src: null, icon: '📊', caption: 'Dataset class distribution and annotation statistics.' }
            ],
            links: [
                { label: 'IEEE DataPort', href: 'https://ieee-dataport.org/documents/bdroadscenes-real-world-dataset-multi-class-vehicle-detection' },
                { label: 'DOI: 10.21227/DH1A-4C18', href: 'https://doi.org/10.21227/DH1A-4C18' }
            ]
        },
        wastesegcluster: {
            kicker: 'Open Dataset — Figshare',
            title: 'WasteSegCluster: Annotated Waste Images from Urban Water Bodies in Bangladesh',
            subtitle: 'Published · Figshare · DOI: 10.6084/m9.figshare.31878643 · March 2026',
            summary: 'An annotated dataset of waste images collected from urban water bodies across Bangladesh, designed to support image segmentation and classification for environmental monitoring and urban cleanup AI systems. Fills a critical gap in South Asian environmental computer vision benchmarks.',
            meta: {
                Role: 'Dataset Author',
                Focus: 'Waste segmentation, environmental monitoring, computer vision',
                Outcome: 'Published — Figshare (March 2026)',
                DOI: '10.6084/m9.figshare.31878643',
                Stack: 'Image annotation, segmentation models, Python'
            },
            highlights: [
                'Annotated waste imagery from urban water bodies in Bangladesh.',
                'Supports multi-class segmentation and classification for environmental AI.',
                'Directly connected to the Waste Segmentation research project.',
                'Published on Figshare and ORCID-indexed (0009-0002-9172-9982).',
                'Enables transfer of waste segmentation methods to medical imaging tasks.'
            ],
            slides: [
                { label: 'Dataset on Figshare', src: null, icon: '🗑️', caption: 'WasteSegCluster on Figshare — DOI: 10.6084/m9.figshare.31878643.' },
                { label: 'Sample Annotations', src: null, icon: '🔬', caption: 'Annotated waste images from Bangladesh urban water bodies — visuals in preparation.' },
                { label: 'Segmentation Results', src: null, icon: '📊', caption: 'Model segmentation results on sample images.' }
            ],
            links: [
                { label: 'Figshare', href: 'https://figshare.com/articles/dataset/_b_WasteSegCluster_b_b_b_dataset_of_annotated_waste_images_from_urban_water_bodies_in_Bangladesh/31878643' },
                { label: 'DOI', href: 'https://doi.org/10.6084/m9.figshare.31878643' }
            ]
        },
        digidignity: {
            kicker: 'Project Case Study — Blockchain Olympiad 2025',
            title: 'DigiDignity — AI-Integrated Blockchain Identity System for Refugees',
            subtitle: 'National Finalist — Blockchain Olympiad Bangladesh 2025 · Team Unchained',
            summary: 'DigiDignity addresses the global identity crisis for displaced populations — 100M+ forcibly displaced people and 4.4M stateless individuals who cannot prove they exist. The system combines Self-Sovereign Identity (SSI), a dual-chain blockchain architecture, and AI-enhanced biometric verification (99.7% accuracy, 30-second verification) with Zero-Knowledge Proofs to provide secure, portable, and verifiable digital IDs that are free for refugees and sustainably funded through institutional partners.',
            meta: {
                Role: 'Founding Member (Team Unchained)',
                Focus: 'Blockchain SSI, AI biometrics, Zero-Knowledge Proofs, humanitarian tech',
                Outcome: 'National Finalist — Blockchain Olympiad Bangladesh 2025',
                Stack: 'Dual-Chain Blockchain, AI/ML Biometrics, ZKPs, Self-Sovereign Identity'
            },
            highlights: [
                'Self-Sovereign Identity (SSI): individuals own and control their own identity data — no central authority required.',
                'Dual-chain architecture (private + public blockchain) for enhanced security and tamper-proof record keeping.',
                'AI-enhanced biometric verification achieving 99.7% accuracy with 30-second identity checks.',
                'Zero-Knowledge Proofs (ZKPs) for privacy-preserving verification — prove identity without revealing personal data.',
                'Free for refugees; sustainably funded via micro-commissions from banks, healthcare providers, and universities.',
                'Cross-border portability targeting 88.3M forcibly displaced and stateless persons across Africa, Europe, Asia, and the Americas.',
                'Market opportunity: $1.5B TAM, $44M SAM, $10M SOM annually based on UNHCR and World Bank data.',
                'National Finalist — Blockchain Olympiad Bangladesh 2025.'
            ],
            slides: [
                { label: 'The Problem — "I Don\'t Exist"', src: null, icon: '🌍', caption: 'Maya, 12 — born in Dadaab Refugee Camp, Kenya, with no birth certificate. 4.4M stateless individuals worldwide live without legal nationality, locked out of education, healthcare, and employment.' },
                { label: 'Maya\'s Impossible Journey', src: null, icon: '📖', caption: 'Age 6: School denied (no documents). Age 8: Mother dies — medical verification took 3 weeks. Age 10: Border crossing — previous camp ID invalid. Age 11: Lost in system, no services, no future.' },
                { label: 'Core Components', src: null, icon: '⛓️', caption: 'Five pillars: Self-Sovereign Identity (SSI), Dual-Chain Architecture, AI-Enhanced Verification (99.7% accuracy), Zero-Knowledge Proofs (ZKPs), and Cross-Border Portability.' },
                { label: 'Primary Actors', src: null, icon: '🤝', caption: 'Serves refugees & stateless populations (free), governments & UN agencies, NGOs, financial institutions, healthcare providers, and education providers.' },
                { label: 'Market Size (TAM · SAM · SOM)', src: null, icon: '📈', caption: 'TAM: $1.5B (1.5B people lack official ID). SAM: $44M (88.3M displaced/stateless in key regions). SOM: $10M annually (10% early-adoption pilot via UNHCR & WFP partners).' },
                { label: 'Business Model Canvas', src: null, icon: '💼', caption: 'Revenue from financial micro-commissions (0.1–0.3%), healthcare verification fees (0.2–0.4%), credential verification (0.3–0.5%), and anonymous analytics — covering 80–100% of operating costs while keeping the service free for refugees.' },
                { label: 'Risk & Mitigation', src: null, icon: '🛡️', caption: 'Four key risks addressed: Technological Accessibility → Privacy-Preserving Architecture; Financial Sustainability → Diversified Revenue Model; Operational Adoption → Multi-stakeholder Governance; AI Bias → Fairness & Accountability framework.' },
                { label: 'Full Presentation Slides (PDF)', src: null, icon: '📄', caption: 'Click "View Slides" below to open the complete Blockchain Olympiad 2025 competition deck (15 slides).' }
            ],
            links: [
                { label: 'View Slides (PDF)', href: 'assets/img/DigiDignity_presentation_sildes.pdf' }
            ]
        }
    };

    window.portfolioDetailRegistry = detailRegistry;

    // ============================================================
    //  ESCAPE HTML helper
    // ============================================================
    const esc = v => String(v)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');

    // ============================================================
    //  BUILD PROJECT DETAILS HTML (with image slider)
    // ============================================================
    const buildProjectDetailsHTML = item => {
        const slides = item.slides || item.photos || [];
        const linkPills = (item.links || []).map(l => {
            const isYT = l.href && l.href.includes('youtube.com');
            const cls = isYT ? 'yt-watch-btn' : 'link-pill';
            const icon = isYT ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.498 6.186a2.998 2.998 0 0 0-2.11-2.123C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.388.563A2.998 2.998 0 0 0 .502 6.186 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .502 5.814 2.998 2.998 0 0 0 2.11 2.123C4.5 20.5 12 20.5 12 20.5s7.5 0 9.388-.563a2.998 2.998 0 0 0 2.11-2.123A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.502-5.814zM9.75 15.5V8.5l6.25 3.5-6.25 3.5z"/></svg>` : '';
            return `<a class="${cls}" href="${esc(l.href)}" target="_blank" rel="noopener">${icon}${esc(l.label)}</a>`;
        }).join('');
        const metaEntries = Object.entries(item.meta || {});

        // Build slider HTML
        let sliderHTML = '';
        if (slides.length > 0) {
            const slideItems = slides.map((s, i) => {
                const imgContent = s.src
                    ? `<img src="${encodeURI(s.src)}" alt="${esc(s.label || 'Slide ' + (i + 1))}" loading="lazy">`
                    : `<div class="slide-item-placeholder"><span class="slide-icon">${esc(s.icon || '🖼️')}</span><span>${esc(s.label || 'Visual')}</span></div>`;
                return `<div class="slide-item" role="group" aria-label="Slide ${i + 1} of ${slides.length}">${imgContent}</div>`;
            }).join('');

            const dotButtons = slides.length > 1
                ? slides.map((_, i) => `<button class="slide-dot${i === 0 ? ' active' : ''}" type="button" aria-label="Go to slide ${i + 1}" data-slide-to="${i}"></button>`).join('')
                : '';

            const prevNext = slides.length > 1 ? `
                <div class="slide-controls" aria-hidden="true">
                    <button class="slide-btn" type="button" data-slide-prev aria-label="Previous slide">‹</button>
                    <button class="slide-btn" type="button" data-slide-next aria-label="Next slide">›</button>
                </div>
            ` : '';

            const counter = slides.length > 1 ? `<span class="slide-count">1 / ${slides.length}</span>` : '';

            const captionHTML = `
                <div class="slide-caption" data-slide-caption>
                    <strong>${esc(slides[0].label || '')}</strong>
                    <span>${esc(slides[0].caption || '')}</span>
                </div>
            `;

            sliderHTML = `
                <div class="slide-gallery" data-slider>
                    <div class="slide-track" data-slide-track style="transform: translateX(0%);">
                        ${slideItems}
                    </div>
                    ${prevNext}
                    ${counter ? `${counter}` : ''}
                    ${captionHTML}
                    ${dotButtons ? `<div class="slide-dots">${dotButtons}</div>` : ''}
                </div>
            `;
        }

        const quickLinksHTML = linkPills ? `
            <div class="project-modal__quick-links">${linkPills}</div>
        ` : '';

        const videoHTML = item.videoUrl ? `
            <div class="modal-video-wrap">
                <iframe class="modal-video-frame" src="${esc(item.videoUrl)}" title="Project Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
            </div>
        ` : '';

        return `
            <article class="project-modal__card">
                <header class="project-modal__header">
                    <p class="project-modal__kicker">${esc(item.kicker || 'Project')}</p>
                    <h3>${esc(item.title || '')}</h3>
                    <p class="project-modal__subtitle">${esc(item.subtitle || '')}</p>
                    ${quickLinksHTML}
                </header>
                <div class="project-modal__layout">
                    <div class="project-modal__main">
                        <p class="project-modal__summary">${esc(item.summary || '')}</p>
                        <dl class="project-modal__meta">
                            ${metaEntries.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}
                        </dl>
                        <section class="project-modal__highlights">
                            <h4>Highlights</h4>
                            <ul>${(item.highlights || []).map(p => `<li>${esc(p)}</li>`).join('')}</ul>
                        </section>
                    </div>
                    <aside class="project-modal__media">
                        ${videoHTML}
                        <h4>Visual Gallery &amp; Slides</h4>
                        ${sliderHTML || '<p style="color:var(--text-muted);font-size:0.88rem;">No visuals available yet.</p>'}
                    </aside>
                </div>
            </article>
        `;
    };

    // ============================================================
    //  SLIDER LOGIC
    // ============================================================
    const initSlider = container => {
        const track = container.querySelector('[data-slide-track]');
        const dots = container.querySelectorAll('.slide-dot');
        const counter = container.querySelector('.slide-count');
        const captionEl = container.querySelector('[data-slide-caption]');
        const slides = container.querySelectorAll('.slide-item');
        if (!track || slides.length < 2) return;

        const registry = window.portfolioDetailRegistry;
        // Get current item's slides for captions
        let currentIndex = 0;
        const total = slides.length;

        // Find the slides data from the active modal item
        const activeKey = document.querySelector('.project-modal__card')
            ? null : null; // will be resolved via closure in openProjectViewer

        const goTo = idx => {
            currentIndex = (idx + total) % total;
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
            dots.forEach((d, i) => d.classList.toggle('active', i === currentIndex));
            if (counter) counter.textContent = `${currentIndex + 1} / ${total}`;
            if (captionEl) {
                const slideItem = slides[currentIndex];
                const label = slideItem.querySelector('img')?.alt || slideItem.querySelector('span:last-child')?.textContent || '';
                // Use data from the slide-item if possible; otherwise leave as is
                // Captions are embedded per-slide in the HTML via data-caption approach
                // We'll read it from a sibling data structure stored on the container
                const captionsData = JSON.parse(container.dataset.captions || '[]');
                if (captionsData[currentIndex]) {
                    captionEl.querySelector('strong').textContent = captionsData[currentIndex].label || '';
                    captionEl.querySelector('span').textContent = captionsData[currentIndex].caption || '';
                }
            }
        };

        container.querySelector('[data-slide-prev]')?.addEventListener('click', () => goTo(currentIndex - 1));
        container.querySelector('[data-slide-next]')?.addEventListener('click', () => goTo(currentIndex + 1));
        dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));

        // Touch swipe support
        let touchStartX = 0;
        track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
        track.addEventListener('touchend', e => {
            const dx = e.changedTouches[0].clientX - touchStartX;
            if (Math.abs(dx) > 50) goTo(currentIndex + (dx < 0 ? 1 : -1));
        }, { passive: true });

        // Keyboard on focused slider
        container.setAttribute('tabindex', '0');
        container.addEventListener('keydown', e => {
            if (e.key === 'ArrowLeft') goTo(currentIndex - 1);
            if (e.key === 'ArrowRight') goTo(currentIndex + 1);
        });
    };

    // ============================================================
    //  PROJECT VIEWER MODAL
    // ============================================================
    const projectViewerState = { modal: null, body: null };

    const ensureProjectViewer = () => {
        if (projectViewerState.modal) return projectViewerState;

        const modal = document.createElement('div');
        modal.className = 'project-modal';
        modal.hidden = true;
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-modal', 'true');
        modal.setAttribute('aria-labelledby', 'project-modal-title');
        modal.innerHTML = `
            <div class="project-modal__backdrop" data-close-project-viewer style="position:absolute;inset:0;"></div>
            <div class="project-modal__panel">
                <div class="project-modal__topbar">
                    <div>
                        <p class="project-modal__eyebrow" id="project-modal-eyebrow"></p>
                        <h3 id="project-modal-title"></h3>
                    </div>
                    <button class="project-modal__close" type="button" data-close-project-viewer aria-label="Close">✕ Close</button>
                </div>
                <div class="project-modal__body"></div>
            </div>
        `;
        document.body.appendChild(modal);

        projectViewerState.modal = modal;
        projectViewerState.body = modal.querySelector('.project-modal__body');

        modal.addEventListener('click', e => {
            if (e.target.closest('[data-close-project-viewer]') || e.target === modal) {
                closeProjectViewer();
            }
        });
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape' && !modal.hidden) closeProjectViewer();
        });

        return projectViewerState;
    };

    const closeProjectViewer = () => {
        const v = ensureProjectViewer();
        v.modal.hidden = true;
        unlockScroll();
    };

    const openProjectViewer = key => {
        const item = detailRegistry[key];
        if (!item) return;

        const v = ensureProjectViewer();
        v.modal.querySelector('#project-modal-eyebrow').textContent = item.kicker || 'Case study';
        v.modal.querySelector('#project-modal-title').textContent = item.title || 'Project details';

        // Inject captions data into slider container via dataset
        v.body.innerHTML = buildProjectDetailsHTML(item);

        // Store captions on slider container for goTo function
        const slider = v.body.querySelector('[data-slider]');
        if (slider && item.slides) {
            slider.dataset.captions = JSON.stringify(item.slides.map(s => ({ label: s.label, caption: s.caption })));
            initSlider(slider);
        }

        v.modal.hidden = false;
        lockScroll();
        v.modal.querySelector('.project-modal__close')?.focus();
    };

    // ============================================================
    //  DOCUMENT VIEWER MODAL (PDF/PPTX)
    // ============================================================
    const documentViewerState = { modal: null, title: null, frame: null, helper: null, download: null };

    const ensureDocumentViewer = () => {
        if (documentViewerState.modal) return documentViewerState;

        const modal = document.createElement('div');
        modal.className = 'document-viewer';
        modal.hidden = true;
        modal.innerHTML = `
            <div class="document-viewer__backdrop" data-close-document-viewer style="position:absolute;inset:0;"></div>
            <div class="document-viewer__panel" role="dialog" aria-modal="true" aria-labelledby="document-viewer-title">
                <div class="document-viewer__header">
                    <div>
                        <p class="document-viewer__eyebrow">Document preview</p>
                        <h3 id="document-viewer-title"></h3>
                    </div>
                    <div class="document-viewer__actions">
                        <a class="btn tertiary document-viewer__download" href="#" download>⬇ Download</a>
                        <button class="document-viewer__close" type="button" data-close-document-viewer aria-label="Close">✕ Close</button>
                    </div>
                </div>
                <p class="document-viewer__helper"></p>
                <iframe class="document-viewer__frame" title="Document preview" loading="lazy"></iframe>
            </div>
        `;
        document.body.appendChild(modal);

        documentViewerState.modal = modal;
        documentViewerState.title = modal.querySelector('#document-viewer-title');
        documentViewerState.frame = modal.querySelector('.document-viewer__frame');
        documentViewerState.helper = modal.querySelector('.document-viewer__helper');
        documentViewerState.download = modal.querySelector('.document-viewer__download');

        modal.addEventListener('click', e => {
            if (e.target.closest('[data-close-document-viewer]') || e.target === modal) closeDocumentViewer();
        });
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape' && !modal.hidden) closeDocumentViewer();
        });

        return documentViewerState;
    };

    const closeDocumentViewer = () => {
        const v = ensureDocumentViewer();
        v.modal.hidden = true;
        v.frame.src = 'about:blank';
        unlockScroll();
    };

    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const isMobile = () => window.innerWidth <= 720;

    const openDocumentViewer = ({ href, title }) => {
        const v = ensureDocumentViewer();
        const url = new URL(href, window.location.href);
        const ext = url.pathname.split('.').pop().toLowerCase();
        const absoluteUrl = url.href;

        v.title.textContent = title;
        v.download.href = absoluteUrl;

        // iOS Safari cannot display PDFs inside iframes — open directly instead
        if (ext === 'pdf' && (isIOS || isMobile())) {
            window.open(absoluteUrl, '_blank', 'noopener');
            return;
        }

        v.helper.textContent = ext === 'pdf'
            ? 'PDF preview — use Download to save a local copy.'
            : 'Presentation preview — if it does not render, use Download to open locally.';

        if (ext === 'pdf') {
            v.frame.src = 'about:blank';
            requestAnimationFrame(() => { v.frame.src = `${absoluteUrl}${absoluteUrl.includes('?') ? '&' : '?'}v=${Date.now()}#page=1&zoom=page-width`; });
        } else if (['ppt', 'pptx'].includes(ext)) {
            v.frame.src = `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(absoluteUrl)}`;
        } else {
            v.frame.src = absoluteUrl;
        }

        v.modal.hidden = false;
        lockScroll();
        v.modal.querySelector('.document-viewer__close')?.focus();
    };

    // ============================================================
    //  BIND DETAIL TRIGGERS (cards → project viewer)
    // ============================================================
    const bindDetailTriggers = () => {
        document.querySelectorAll('[data-detail-key]').forEach(trigger => {
            if (trigger.tagName === 'TR') return; // publications table rows handled separately

            if (!trigger.getAttribute('role')) trigger.setAttribute('role', 'button');
            if (!trigger.getAttribute('tabindex')) trigger.setAttribute('tabindex', '0');

            const handleActivate = e => {
                if (e.type === 'keydown' && e.key !== 'Enter' && e.key !== ' ') return;
                const interactive = e.target.closest('a, button, input, select, textarea');
                if (interactive && interactive !== trigger) return;
                if (e.type === 'keydown') e.preventDefault();
                openProjectViewer(trigger.dataset.detailKey);
            };

            trigger.addEventListener('click', handleActivate);
            trigger.addEventListener('keydown', handleActivate);
        });
    };

    // ============================================================
    //  BIND DOCUMENT LINKS (PDF, PPTX → document viewer)
    // ============================================================
    const bindDocumentLinks = () => {
        const pattern = /\.(pdf|pptx?)(?:[?#].*)?$/i;
        document.addEventListener('click', e => {
            const link = e.target.closest('a[href]');
            if (!link || link.hasAttribute('download')) return;
            const href = link.getAttribute('href') || '';
            if (!pattern.test(href)) return;
            e.preventDefault();
            openDocumentViewer({ href, title: link.textContent.trim() || 'Document preview' });
        }, true);
    };

    // ============================================================
    //  MOBILE NAV TOGGLE
    // ============================================================
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('#primary-navigation');
    const navIcon = navToggle?.querySelector('[aria-hidden]');

    const closeNav = () => {
        if (!nav) return;
        nav.classList.remove('is-open');
        navToggle?.setAttribute('aria-expanded', 'false');
        if (navIcon) navIcon.textContent = '☰';
        document.body.style.overflow = '';
    };

    if (navToggle && nav) {
        navToggle.addEventListener('click', () => {
            const isOpen = nav.classList.contains('is-open');
            if (isOpen) {
                closeNav();
            } else {
                navToggle.setAttribute('aria-expanded', 'true');
                nav.classList.add('is-open');
                if (navIcon) navIcon.textContent = '✕';
                document.body.style.overflow = 'hidden';
            }
        });

        // Close when a nav link is clicked
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => closeNav());
        });

        // Close on Escape key
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape' && nav.classList.contains('is-open')) closeNav();
        });
    }

    // ============================================================
    //  THEME TOGGLE
    // ============================================================
    const themeToggle = document.querySelector('[data-toggle-theme]');
    if (themeToggle) {
        const setIcon = theme => {
            themeToggle.querySelector('[aria-hidden]').textContent = theme === 'dark' ? '🌙' : '🌞';
            themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Enable light mode' : 'Enable dark mode');
        };
        setIcon(root.dataset.theme || 'light');
        themeToggle.addEventListener('click', () => {
            const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
            root.dataset.theme = next;
            localStorage.setItem('theme', next);
            setIcon(next);
        });
    }

    // ============================================================
    //  HEADER SCROLL SHADOW
    // ============================================================
    const header = document.querySelector('.site-header');
    if (header) {
        const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    // ============================================================
    //  ACTIVE NAV LINK TRACKING
    // ============================================================
    const navLinks = document.querySelectorAll('.primary-nav a[href^="#"]');
    if (navLinks.length && 'IntersectionObserver' in window) {
        const sectionMap = new Map();
        document.querySelectorAll('section[id]').forEach(s => sectionMap.set(s.id, s));
        let activeSectionId = '';

        const navObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    activeSectionId = entry.target.id;
                    navLinks.forEach(a => {
                        a.classList.toggle('active', a.getAttribute('href') === `#${activeSectionId}`);
                    });
                }
            });
        }, { rootMargin: '-30% 0px -60% 0px', threshold: 0 });

        sectionMap.forEach(s => navObserver.observe(s));
    }

    // ============================================================
    //  LAZY-LOAD IFRAMES
    // ============================================================
    const lazyObserver = 'IntersectionObserver' in window
        ? new IntersectionObserver((entries, obs) => {
            entries.forEach(e => {
                if (!e.isIntersecting) return;
                e.target.src = e.target.dataset.lazySrc;
                e.target.removeAttribute('data-lazy-src');
                obs.unobserve(e.target);
            });
        }, { rootMargin: '100px' }) : null;

    document.querySelectorAll('iframe[data-lazy-src]').forEach(f => {
        lazyObserver ? lazyObserver.observe(f) : (f.src = f.dataset.lazySrc);
    });

    // ============================================================
    //  CONTACT FORM HONEYPOT GUARD
    // ============================================================
    document.querySelectorAll('[data-contact-form]').forEach(form => {
        form.addEventListener('submit', e => {
            const honey = form.querySelector('input[name="_honey"]');
            if (honey && honey.value.trim() !== '') e.preventDefault();
        });
    });

    // ============================================================
    //  SCROLL REVEAL
    // ============================================================
    if ('IntersectionObserver' in window) {
        const revealObs = new IntersectionObserver((entries, obs) => {
            entries.forEach((entry, i) => {
                if (!entry.isIntersecting) return;
                setTimeout(() => entry.target.classList.add('is-visible'), i * 60);
                obs.unobserve(entry.target);
            });
        }, { threshold: 0.10, rootMargin: '0px 0px -50px 0px' });

        document.querySelectorAll('.reveal').forEach(t => revealObs.observe(t));
    } else {
        document.querySelectorAll('.reveal').forEach(t => t.classList.add('is-visible'));
    }

    // ============================================================
    //  ACHIEVEMENT FILTER TABS
    // ============================================================
    const filterTabs = document.querySelectorAll('.filter-tab');
    const achievementCards = document.querySelectorAll('#awards .stat-card[data-category]');
    if (filterTabs.length && achievementCards.length) {
        filterTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                filterTabs.forEach(t => t.classList.remove('is-active'));
                tab.classList.add('is-active');
                const filter = tab.dataset.filter;
                achievementCards.forEach(card => {
                    card.classList.toggle('is-hidden', filter !== 'all' && card.dataset.category !== filter);
                });
            });
        });
    }

    // ============================================================
    //  GALLERY — FILTER + LIGHTBOX
    // ============================================================
    const initGallery = () => {
        const filterBtns = document.querySelectorAll('[data-gallery-filter]');
        const galleryItems = document.querySelectorAll('.gallery-item[data-category]');
        if (!galleryItems.length) return;

        // Filter logic
        if (filterBtns.length) {
            filterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    filterBtns.forEach(b => b.classList.remove('is-active'));
                    btn.classList.add('is-active');
                    const filter = btn.dataset.galleryFilter;
                    galleryItems.forEach(item => {
                        item.classList.toggle(
                            'is-hidden',
                            filter !== 'all' && item.dataset.category !== filter
                        );
                    });
                });
            });
        }

        // Build lightbox
        const lb = document.createElement('div');
        lb.className = 'gallery-lightbox';
        lb.setAttribute('role', 'dialog');
        lb.setAttribute('aria-modal', 'true');
        lb.setAttribute('aria-label', 'Photo viewer');
        lb.hidden = true;
        lb.innerHTML = `
            <button class="gallery-lightbox__close" type="button" aria-label="Close photo viewer">✕</button>
            <button class="gallery-lightbox__nav gallery-lightbox__prev" type="button" aria-label="Previous photo">&#8249;</button>
            <button class="gallery-lightbox__nav gallery-lightbox__next" type="button" aria-label="Next photo">&#8250;</button>
            <div class="gallery-lightbox__inner">
                <div class="gallery-lightbox__img-wrap">
                    <img class="gallery-lightbox__img" src="" alt="">
                </div>
                <p class="gallery-lightbox__caption"></p>
                <p class="gallery-lightbox__counter"></p>
            </div>
        `;
        document.body.appendChild(lb);

        const lbImg     = lb.querySelector('.gallery-lightbox__img');
        const lbCaption = lb.querySelector('.gallery-lightbox__caption');
        const lbCounter = lb.querySelector('.gallery-lightbox__counter');
        let current = 0;

        const visible = () => Array.from(galleryItems).filter(el => !el.classList.contains('is-hidden'));

        const render = (list) => {
            const item = list[current];
            const img  = item.querySelector('img');
            const cap  = item.querySelector('.gallery-caption-title');
            lbImg.src = img ? img.src : '';
            lbImg.alt = img ? img.alt : '';
            lbCaption.textContent = cap ? cap.textContent : '';
            lbCounter.textContent = `${current + 1} / ${list.length}`;
        };

        const openLb = (item) => {
            const list = visible();
            current = list.indexOf(item);
            if (current < 0) current = 0;
            render(list);
            lb.hidden = false;
            lockScroll();
            lb.querySelector('.gallery-lightbox__close').focus();
        };

        const closeLb = () => {
            lb.hidden = true;
            unlockScroll();
        };

        const nav = (dir) => {
            const list = visible();
            if (!list.length) return;
            current = (current + dir + list.length) % list.length;
            render(list);
        };

        lb.querySelector('.gallery-lightbox__close').addEventListener('click', closeLb);
        lb.querySelector('.gallery-lightbox__prev').addEventListener('click', () => nav(-1));
        lb.querySelector('.gallery-lightbox__next').addEventListener('click', () => nav(1));
        lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });

        document.addEventListener('keydown', e => {
            if (lb.hidden) return;
            if (e.key === 'Escape') closeLb();
            if (e.key === 'ArrowLeft') nav(-1);
            if (e.key === 'ArrowRight') nav(1);
        });

        // Touch swipe
        let swipeX = 0;
        lb.addEventListener('touchstart', e => { swipeX = e.touches[0].clientX; }, { passive: true });
        lb.addEventListener('touchend', e => {
            const dx = e.changedTouches[0].clientX - swipeX;
            if (Math.abs(dx) > 48) nav(dx < 0 ? 1 : -1);
        }, { passive: true });

        // Activate on click / Enter / Space
        galleryItems.forEach(item => {
            const activate = e => {
                if (e.type === 'keydown' && e.key !== 'Enter' && e.key !== ' ') return;
                if (e.type === 'keydown') e.preventDefault();
                openLb(item);
            };
            item.addEventListener('click', activate);
            item.addEventListener('keydown', activate);
        });
    };

    // Init everything
    bindDetailTriggers();
    bindDocumentLinks();
    initGallery();
});
