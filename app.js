/* --------------------------------------------------
   STATE & INITIALIZATION DATA
   -------------------------------------------------- */
let appState = {
    theme: 'dark',
    profile: {
        name: 'Sarah Jenkins',
        role: 'Head of Science & Chemistry Teacher',
        framework: "Teachers' Standards",
        manager: 'Dr. Helen Harrison (Deputy Head)',
        jobDescription: 'Lead the Science Department, curate Chemistry curriculum for KS3-5, coordinate department CPD, and manage 4 teaching staff and 2 technicians.',
        aspirations: 'Transition to Assistant Headship within 2 years, focusing on academic curriculum development.',
        qualifications: 'BSc Chemistry, PGCE Secondary Science, NPQLT',
        skills: 'A-Level Chemistry, Pedagogy Coaching, Data Analysis, Digital Learning'
    },
    goals: [
        {
            title: 'Optimise KS4 Practical Chemistry logs and pre-lab preparation',
            tag: 'Teaching & Learning',
            status: 'Active',
            successCriteria: '100% completion of student lab portfolios, pre-lab videos created, lab technicians report higher prep efficiency.',
            evidence: [
                {
                    date: '2025-11-12',
                    content: 'Created 4 short pre-lab videos on safety and titrations, uploaded to Canvas LMS.',
                    link: 'https://docs.google.com/presentation/example1',
                    linkLabel: 'Pre-Lab Slides',
                    isCheckpoint: false
                },
                {
                    date: '2026-01-18',
                    content: 'Administered pre-lab quiz showing a 34% decrease in equipment setup errors in Year 10 practicals.',
                    link: 'https://docs.google.com/spreadsheets/example2',
                    linkLabel: 'Practical Quiz Assessment Data',
                    isCheckpoint: true
                }
            ]
        },
        {
            title: 'Lead department coaching on Retrieval Practice spacing techniques',
            tag: 'Leadership',
            status: 'Active',
            successCriteria: 'All science teachers receive peer coaching; retrieval tasks are standard at lesson start; term assessment data shows positive progress score.',
            evidence: [
                {
                    date: '2025-10-22',
                    content: 'Conducted peer observation with Mr. Davis on spacing techniques in physics lessons.',
                    link: '',
                    linkLabel: '',
                    isCheckpoint: false
                },
                {
                    date: '2026-01-10',
                    content: 'Delivered a 30-minute department inset on Retrieval Practice grids and low-stakes testing.',
                    link: 'https://docs.google.com/presentation/example3',
                    linkLabel: 'Retrieval Grid Inset Resources',
                    isCheckpoint: true
                }
            ]
        },
        {
            title: 'Formulate and launch Leicester High Chemistry Olympiad Prep Club',
            tag: 'Strategic Project',
            status: 'Completed',
            successCriteria: 'Club meets weekly; at least 8 KS5 students participate; at least 3 secure certificates in the national competition.',
            evidence: [
                {
                    date: '2025-10-08',
                    content: 'First club meeting held with 11 students attending. Decided on weekly timetable.',
                    link: '',
                    linkLabel: '',
                    isCheckpoint: false
                },
                {
                    date: '2026-02-03',
                    content: 'Olympiad competition sat by 9 students in the school laboratory.',
                    link: '',
                    linkLabel: '',
                    isCheckpoint: false
                },
                {
                    date: '2026-05-15',
                    content: 'National results received: 2 Gold, 3 Silver certificates obtained by our students.',
                    link: 'https://docs.google.com/document/example4',
                    linkLabel: 'Chemistry Olympiad Award Listing',
                    isCheckpoint: true
                }
            ]
        }
    ],
    journal: [
        {
            title: 'Reflecting on KS3 Chemistry Practical Inquiry',
            date: '2025-11-05',
            answers: {
                reflection: 'The chemistry investigation on rates of reaction went very well. Students were highly engaged and worked in collaborative pairs.',
                impact: 'Students demonstrated improved lab safety competency. 92% scored over 80% on the post-practical assessment.',
                practice: 'Implemented visual checklists on whiteboard rather than long text instructions, which simplified lab management.',
                contribution: 'Shared the rates of reaction checklist template with the Science department team.',
                growth: 'Learned that dual coding lab instructions reduces cognitive overload for lower-ability groups.',
                support: 'Would benefit from observing a physics teacher run high-equipment practicals to see their setup.'
            }
        },
        {
            title: 'Reflections on Mid-Term Retrieval Coaching Outcomes',
            date: '2026-01-22',
            answers: {
                reflection: 'The retrieval coaching sessions with Mr. Davis are showing positive shifts in classroom pace and retrieval grid alignment.',
                impact: 'His Year 10 class has settled quicker, with start-of-lesson focus improving significantly.',
                practice: 'Refined my coaching question techniques, focusing more on active listening and scaffolded goal-setting.',
                contribution: 'Spent 2 hours mentoring NQT during their planning block on practical setups.',
                growth: 'Learned that giving a single focus point per coaching cycle leads to more permanent practice changes.',
                support: 'No direct support needed, but would like to explore video coaching tools next term.'
            }
        }
    ],
    cpd: [
        {
            activity: 'AQA A-Level Chemistry Teacher Conference',
            type: 'Conference',
            date: '2025-10-15',
            hours: 6.5,
            cost: 120,
            provider: 'AQA',
            linkedStandard: 'Standard 3: Subject & Curriculum Knowledge',
            linkedGoal: 'Formulate and launch Leicester High Chemistry Olympiad Prep Club',
            reflection: {
                learn: 'Gained insights on new marking schemes for organic mechanism questions and Olympiad preparation questions.',
                change: 'Adjusted our KS5 marking rubrics to match the new examiners\' report guidelines.',
                impact: 'Students report higher clarity in what examiners expect; mock exam marks improved by 8% on average.',
                next: 'Share resources with other chemistry staff in our next planning meeting.'
            }
        },
        {
            activity: 'Cognitive Science in the Classroom Webinar',
            type: 'Webinar',
            date: '2025-11-20',
            hours: 2.0,
            cost: 0,
            provider: 'ResearchEd',
            linkedStandard: 'Standard 4: Plan & Teach Well Structured Lessons',
            linkedGoal: 'Lead department coaching on Retrieval Practice spacing techniques',
            reflection: {
                learn: 'Explored the working memory limits and benefits of spaced retrieval questions.',
                change: 'Implemented a 5-question starter slide format in all GCSE lessons.',
                impact: 'Retrieval score averages rose from 62% to 78% over a six-week period.',
                next: 'Roll this template out across the biology and physics lessons.'
            }
        },
        {
            activity: 'NPQ in Leading Teacher Development (Coaching Modules)',
            type: 'Course',
            date: '2026-02-12',
            hours: 14.0,
            cost: 0,
            provider: 'Best Practice Network',
            linkedStandard: 'Standard 8: Wider Professional Responsibilities',
            linkedGoal: 'Lead department coaching on Retrieval Practice spacing techniques',
            reflection: {
                learn: 'Analysed GROW model framework for teacher coaching and instruction.',
                change: 'Used GROW model during observations with Mr. Davis and Miss Higgins.',
                impact: 'Both teachers expressed feeling more supported; self-directed goal scores rose.',
                next: 'Establish a coaching log template for all department heads.'
            }
        }
    ],
    directReports: [
        {
            name: 'Mr. David Davis',
            role: 'Chemistry Teacher',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
            framework: "Teachers' Standards",
            qualifications: 'BSc Chemistry (Hons), PGCE',
            skills: 'GCSE Chemistry, Lab Safety, Curriculum Planning',
            jobDescription: 'Teaching KS3-5 Chemistry classes, preparing GCSE chemistry labs, and organising departmental resources.',
            aspirations: 'Seeking to coordinate KS4 Chemistry curriculum design next academic year.',
            goals: [
                {
                    title: 'Standardise practical hazard sheets for GCSE Chemistry experiments',
                    tag: 'Teaching & Learning',
                    status: 'Active',
                    successCriteria: 'Hazard sheets laminated for all 12 core practicals; lab technicians report higher prep compliance and safety scores.',
                    evidence: [
                        {
                            date: '2025-11-20',
                            content: 'Drafted first 4 sheets for Year 10 rates of reaction experiments.',
                            link: 'https://docs.google.com/document/example5',
                            linkLabel: 'Rates Hazard Sheets Draft',
                            isCheckpoint: false
                        }
                    ],
                    managerComment: 'Excellent start, David. Make sure to consult the technicians on ease of cleanup and disposal steps.'
                },
                {
                    title: 'Incorporate low-stakes digital quizzes into starter routines',
                    tag: 'Student Outcomes',
                    status: 'Completed',
                    successCriteria: 'Quizzes run in Canvas LMS at the start of every Year 11 lesson; quiz scores improve by 15% on average.',
                    evidence: [
                        {
                            date: '2026-01-28',
                            content: 'Year 11 digital quizzes active on Canvas LMS and completed by all chemistry classes.',
                            link: 'https://docs.google.com/spreadsheets/example6',
                            linkLabel: 'Starter Quiz Analytics',
                            isCheckpoint: true
                        }
                    ],
                    managerComment: 'Well done on completing this target. The KS5 prep grids show a visible transfer of these skills!'
                }
            ],
            cpd: [
                {
                    activity: 'Lab Safety & Chemical Hazards Refresher',
                    type: 'School CPD',
                    date: '2025-09-15',
                    hours: 3.5,
                    cost: 0,
                    provider: 'CLEAPSS',
                    linkedStandard: 'Standard 7: Safe Environment',
                    linkedGoal: 'Standardise practical hazard sheets for GCSE Chemistry experiments',
                    reflection: {
                        learn: 'Learned new storage classifications for volatile organic solvents.',
                        change: 'Organised Chemistry prep room shelf labels and updated hazard symbols.',
                        impact: 'Increased safety compliance score in recent external audit to 100%.',
                        next: 'Draft student-friendly safety warning labels for lab workspaces.'
                    }
                }
            ],
            meetings: [
                {
                    date: '2025-09-08',
                    type: 'Start of Year (Formal)',
                    notes: 'Established targets for standardising GCSE lab sheets and incorporating digital quizzing starter routines. Discussed coaching support needs.',
                    actions: 'David to draft first 4 hazard sheets and launch digital quizzes in LMS by end of term.',
                    support: 'Sarah to coordinate laminator access and printing approvals.'
                },
                {
                    date: '2026-02-12',
                    type: 'Catch-up Check-in (Informal)',
                    notes: 'Digital quizzing goal is completed; Year 11 assessment averages rose. Hazard sheets are in progress.',
                    actions: 'Complete hazard sheets for the remaining 8 core practicals before the May checkpoint.',
                    support: 'Sarah to arrange observation with NQT to observe advanced scaffolding.'
                }
            ]
        },
        {
            name: 'Miss Emily Higgins',
            role: 'Biology Teacher',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
            framework: "Teachers' Standards",
            qualifications: 'BSc Biology, PGCE Secondary Science',
            skills: 'KS3-5 Biology, Ecological Studies, Canvas LMS',
            jobDescription: 'Coordinate KS3 Biology curriculum, manage eco-garden projects, and teach general science classes.',
            aspirations: 'Transition to Head of Biology within 3 years.',
            goals: [
                {
                    title: 'Redesign KS3 Ecology outdoor study materials',
                    tag: 'Curriculum',
                    status: 'Active',
                    successCriteria: 'New outdoor study workbooks printed and tested in school garden; student survey shows 85% positive engagement score.',
                    evidence: [
                        {
                            date: '2026-01-14',
                            content: 'Eco-garden study guide draft completed and reviewed by biology coordinators.',
                            link: 'https://docs.google.com/presentation/example7',
                            linkLabel: 'Eco Workbook Slides',
                            isCheckpoint: false
                        }
                    ],
                    managerComment: ''
                }
            ],
            cpd: [
                {
                    activity: 'Inquiry-Based Outdoor Learning Seminar',
                    type: 'Webinar',
                    date: '2025-11-04',
                    hours: 2.0,
                    cost: 0,
                    provider: 'ASE',
                    linkedStandard: 'Standard 4: Plan and teach lessons',
                    linkedGoal: 'Redesign KS3 Ecology outdoor study materials',
                    reflection: {
                        learn: 'Explored structured vs open-ended ecological survey setups for younger cohorts.',
                        change: 'Added structured quadrants grids to the draft ecology handbook.',
                        impact: 'Anticipate faster task orientation when classes are working outdoors.',
                        next: 'Run a pilot lesson with Year 7 group in spring.'
                    }
                }
            ],
            meetings: [
                {
                    date: '2025-09-10',
                    type: 'Start of Year (Formal)',
                    notes: 'Agreed to target KS3 ecology curriculum redevelopment. Discussion around ecological project coordination.',
                    actions: 'Emily to draft new workbook modules and consult biology coordinators.',
                    support: 'Sarah approved £50 gardening supply budget for eco-garden setups.'
                }
            ]
        },
        {
            name: 'Mr. James Carter',
            role: 'Science Technician',
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
            framework: 'Support Staff Framework',
            qualifications: 'FdSc Laboratory Technology',
            skills: 'Lab Equipment Maintenance, Solution Preparation, Inventory Management',
            jobDescription: 'Prepare all KS3-5 Biology, Chemistry and Physics practical setups; manage chemical inventory.',
            aspirations: 'Complete NVQ Level 4 in Laboratory Science.',
            goals: [
                {
                    title: 'Conduct digital inventory audit of all Science department assets',
                    tag: 'Operational Improvement',
                    status: 'Active',
                    successCriteria: 'All assets tagged and logged in central database; chemical hazard levels updated.',
                    evidence: [
                        {
                            date: '2026-02-18',
                            content: 'Completed audit of Physics prep room, logging 120 assets in inventory software.',
                            link: '',
                            linkLabel: '',
                            isCheckpoint: false
                        }
                    ],
                    managerComment: 'Great organization, James. Let me know when you need help requesting administrative access for other prep room servers.'
                }
            ],
            cpd: [
                {
                    activity: 'CLEAPSS Radiation Safety Course',
                    type: 'Course',
                    date: '2025-10-02',
                    hours: 5.0,
                    cost: 95,
                    provider: 'CLEAPSS',
                    linkedStandard: 'Standard 2: Safe environments',
                    linkedGoal: 'Conduct digital inventory audit of all Science department assets',
                    reflection: {
                        learn: 'Understood regulatory compliance requirements for radioactive source storage.',
                        change: 'Re-audited storage safe logs and updated caution labels.',
                        impact: 'Ensured compliance with local education authority safety regulations.',
                        next: 'Conduct staff briefing on radioactive source handling before practicals start.'
                    }
                }
            ],
            meetings: [
                {
                    date: '2025-09-05',
                    type: 'Start of Year (Formal)',
                    notes: 'Reviewed safety checklists, inventory status, and practical preparation timelines. Set target for digital asset audit.',
                    actions: 'James to create central audit tracker and log Physics assets first.',
                    support: 'Sarah to clear system access issues with IT department.'
                }
            ]
        }
    ]
};

/* Standards Framework data definitions */
const frameworksData = {
    "Teachers' Standards": [
        "Standard 1: Set high expectations which inspire, motivate and challenge pupils",
        "Standard 2: Promote good progress and outcomes by pupils",
        "Standard 3: Demonstrate good subject and curriculum knowledge",
        "Standard 4: Plan and teach well structured lessons",
        "Standard 5: Adapt teaching to respond to the strengths and needs of all pupils",
        "Standard 6: Make accurate and productive use of assessment",
        "Standard 7: Manage behaviour effectively to ensure a good and safe learning environment",
        "Standard 8: Fulfill wider professional responsibilities (e.g. CPD, mentoring, team collaboration)"
    ],
    "Leadership Standards": [
        "Domain 1: School Culture (Establish vision, safe environment, inclusivity)",
        "Domain 2: Teaching & Curriculum Leadership (High-quality learning systems)",
        "Domain 3: Staff Development & Coaching (Growth framework, peer learning)",
        "Domain 4: Organisational Management (Resource allocation, safety compliance)",
        "Domain 5: Accountability & Governance (Ethical standards, strategic metrics)",
        "Domain 6: Community Partnerships (Parents, external community engagement)"
    ],
    "Support Staff Framework": [
        "Standard 1: Core support duties (Reliability, operational execution)",
        "Standard 2: Safe & healthy environments (Compliance, safeguarding)",
        "Standard 3: Resource management (Procurement, equipment care)",
        "Standard 4: Collaborative teamwork (Support teachers, administrative cohesion)",
        "Standard 5: Continuous skill growth (Technical CPD, system updates)"
    ],
    "Custom Leicester High Model": [
        "Standard 1: Academic excellence (Rigour, critical thinking)",
        "Standard 2: Holistic pastoral care (Wellbeing, active coaching)",
        "Standard 3: Dynamic co-curricular activity (Extension, clubs)",
        "Standard 4: Continuous professional growth (Reflective journal, research-led)",
        "Standard 5: Collaborative community (Respect, support for colleagues)"
    ]
};

/* --------------------------------------------------
   LOAD AND SAVE OPERATIONS (LocalStorage)
   -------------------------------------------------- */
function loadState() {
    const saved = localStorage.getItem('growth_portfolio_state');
    if (saved) {
        try {
            appState = JSON.parse(saved);
        } catch (e) {
            console.error("Failed to parse saved state", e);
        }
    }
}

function saveState() {
    localStorage.setItem('growth_portfolio_state', JSON.stringify(appState));
    // Trigger save status animation in footer
    const dot = document.querySelector('.indicator-dot');
    const txt = document.querySelector('.indicator-text');
    if (dot && txt) {
        dot.style.background = 'var(--accent)';
        dot.style.boxShadow = '0 0 8px var(--accent-light)';
        txt.textContent = 'Saving changes...';
        setTimeout(() => {
            dot.style.background = 'var(--success)';
            dot.style.boxShadow = '0 0 8px var(--success-light)';
            txt.textContent = 'All changes saved';
        }, 800);
    }
}

/* --------------------------------------------------
   TAB NAV ROUTING
   -------------------------------------------------- */
function switchTab(tabId) {
    // Hide all views
    document.querySelectorAll('.tab-view').forEach(view => {
        view.classList.remove('active');
    });
    // Remove active from nav buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Show selected view
    const targetView = document.getElementById(`view-${tabId}`);
    if (targetView) {
        targetView.classList.add('active');
    }

    // Set active button
    const targetBtn = document.querySelector(`[data-tab="${tabId}"]`);
    if (targetBtn) {
        targetBtn.classList.add('active');
    }

    // Update Header title
    const headerTitle = document.getElementById('page-title');
    if (headerTitle) {
        const titles = {
            'dashboard': 'Dashboard Overview',
            'profile': 'Professional Profile & Lens',
            'goals': 'Goals & Priorities Portfolio',
            'journal': 'Practice Journal & Reflections',
            'cpd': 'L&D (CPD) Reflection Log',
            'timeline': 'Professional Growth Timeline',
            'annual-review': 'Annual Synthesis & Appraisal',
            'line-management': 'Line Management Dashboard'
        };
        headerTitle.textContent = titles[tabId] || 'Growth Portfolio';
    }

    // Close mobile menu if open
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.classList.remove('open');
    }

    // Refresh dynamic views
    if (tabId === 'dashboard') renderDashboard();
    if (tabId === 'goals') renderGoals();
    if (tabId === 'journal') renderJournal();
    if (tabId === 'cpd') {
        populateCpdDropdowns();
        renderCpd();
    }
    if (tabId === 'timeline') renderTimeline();
    if (tabId === 'line-management') renderLineManagement();

    // Scroll main panel to top
    document.querySelector('.main-content').scrollTop = 0;
}

/* --------------------------------------------------
   THEME TOGGLE
   -------------------------------------------------- */
function initTheme() {
    document.documentElement.setAttribute('data-theme', appState.theme);
    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            appState.theme = appState.theme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', appState.theme);
            saveState();
        });
    }
}

/* --------------------------------------------------
   DASHBOARD RENDER
   -------------------------------------------------- */
function renderDashboard() {
    // 1. Update Profile elements
    document.getElementById('sidebar-name').textContent = appState.profile.name;
    document.getElementById('sidebar-role').textContent = appState.profile.role;
    document.getElementById('hero-name').textContent = appState.profile.name.split(' ')[0];
    
    document.getElementById('dash-lens-framework').textContent = appState.profile.framework;
    document.getElementById('dash-lens-manager').textContent = appState.profile.manager;
    document.getElementById('dash-lens-aspirations').textContent = appState.profile.aspirations;

    // Calculate goals progress circle
    const totalGoals = appState.goals.length;
    const completedGoals = appState.goals.filter(g => g.status === 'Completed').length;
    const progressPercent = totalGoals > 0 ? Math.round((completedGoals / totalGoals) * 100) : 0;
    
    const circ = document.querySelector('.circular-chart .circle');
    const percTxt = document.querySelector('.circular-chart .percentage');
    if (circ && percTxt) {
        circ.setAttribute('stroke-dasharray', `${progressPercent}, 100`);
        percTxt.textContent = `${progressPercent}%`;
    }

    // Calculate CPD total hours
    const cpdHours = appState.cpd.reduce((sum, item) => sum + parseFloat(item.hours), 0);
    document.getElementById('dash-cpd-hours').textContent = cpdHours.toFixed(1);

    // Render CPD categories
    const categoriesContainer = document.getElementById('dash-cpd-categories');
    if (categoriesContainer) {
        categoriesContainer.innerHTML = '';
        const cats = {};
        appState.cpd.forEach(c => {
            cats[c.type] = (cats[c.type] || 0) + parseFloat(c.hours);
        });

        // Sort categories by hours
        const sortedCats = Object.entries(cats).sort((a,b) => b[1] - a[1]);
        sortedCats.slice(0, 3).forEach(([cat, hours]) => {
            const pct = Math.min(Math.round((hours / 25) * 100), 100); // normalized against a 25-hour baseline
            categoriesContainer.innerHTML += `
                <div class="cpd-cat-bar">
                    <div class="cpd-cat-header">
                        <span class="cpd-cat-name">${cat}</span>
                        <span class="cpd-cat-hours">${hours.toFixed(1)} hrs</span>
                    </div>
                    <div class="cpd-cat-meter">
                        <div class="cpd-cat-fill" style="width: ${pct}%;"></div>
                    </div>
                </div>
            `;
        });
        if (sortedCats.length === 0) {
            categoriesContainer.innerHTML = '<p style="font-size: 0.8rem; color: var(--text-muted);">No hours logged yet.</p>';
        }
    }

    // Render active goals snapshot
    const goalsContainer = document.getElementById('dashboard-goals-list');
    if (goalsContainer) {
        goalsContainer.innerHTML = '';
        appState.goals.forEach((g, idx) => {
            const tagClass = getTagClass(g.tag);
            const evCount = g.evidence.length;
            const progressPct = g.status === 'Completed' ? 100 : Math.min(evCount * 33, 90); // arbitrary based on evidence count
            goalsContainer.innerHTML += `
                <div class="goal-snapshot-item">
                    <div class="goal-snap-header">
                        <span class="goal-snap-title">${g.title}</span>
                        <span class="tag ${tagClass}">${g.tag}</span>
                    </div>
                    <div class="goal-progress-bar">
                        <div class="goal-progress-fill" style="width: ${progressPct}%;"></div>
                    </div>
                    <div class="goal-snap-evidence-count">${evCount} evidence update${evCount !== 1 ? 's' : ''}</div>
                </div>
            `;
        });
        if (appState.goals.length === 0) {
            goalsContainer.innerHTML = '<p style="font-size: 0.85rem; color: var(--text-muted); text-align: center; padding: 20px;">No goals created yet.</p>';
        }
    }

    // Render recent timeline activity (top 3 entries)
    const timelineContainer = document.getElementById('dashboard-timeline-list');
    if (timelineContainer) {
        timelineContainer.innerHTML = '';
        const timelineData = getAggregatedTimeline().slice(0, 3);
        timelineData.forEach(item => {
            let iconSvg = '';
            let colorVar = 'var(--text-muted)';
            if (item.source === 'cpd') {
                iconSvg = `<svg viewBox="0 0 24 24"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>`;
                colorVar = 'var(--color-cpd)';
            } else if (item.source === 'journal') {
                iconSvg = `<svg viewBox="0 0 24 24"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z"/></svg>`;
                colorVar = 'var(--color-journal)';
            } else if (item.source === 'evidence') {
                iconSvg = `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/></svg>`;
                colorVar = 'var(--color-goal)';
            }

            timelineContainer.innerHTML += `
                <div class="timeline-compact-item">
                    <div class="timeline-compact-dot" style="color: ${colorVar};">
                        ${iconSvg}
                    </div>
                    <div class="timeline-compact-content">
                        <h4 class="timeline-compact-title">${item.title}</h4>
                        <p class="timeline-compact-meta">${formatDate(item.date)} • ${item.label}</p>
                    </div>
                </div>
            `;
        });
        if (timelineData.length === 0) {
            timelineContainer.innerHTML = '<p style="font-size: 0.85rem; color: var(--text-muted); text-align: center; padding: 20px;">No activities recorded yet.</p>';
        }
    }
}

/* Helper to get tag class */
function getTagClass(tag) {
    switch(tag) {
        case 'Teaching & Learning': return 'tag-teaching';
        case 'Leadership': return 'tag-leadership';
        case 'Student Outcomes': return 'tag-outcomes';
        case 'Pastoral': return 'tag-pastoral';
        case 'Personal Development':
        case 'Operational Improvement':
        case 'Curriculum':
        case 'Strategic Project':
        default:
            return 'tag-development';
    }
}

/* --------------------------------------------------
   PROFESSIONAL PROFILE CONTROLLER
   -------------------------------------------------- */
function initProfileView() {
    const form = document.getElementById('profile-edit-form');
    const frameworkSelect = document.getElementById('prof-framework');

    // Populate inputs from state
    document.getElementById('prof-name').value = appState.profile.name;
    document.getElementById('prof-role').value = appState.profile.role;
    frameworkSelect.value = appState.profile.framework;
    document.getElementById('prof-manager').value = appState.profile.manager;
    document.getElementById('prof-job-desc').value = appState.profile.jobDescription;
    document.getElementById('prof-aspirations').value = appState.profile.aspirations;
    document.getElementById('prof-qualifications').value = appState.profile.qualifications;
    document.getElementById('prof-skills').value = appState.profile.skills;

    // Load framework points list
    renderFrameworkPoints(frameworkSelect.value);

    frameworkSelect.addEventListener('change', (e) => {
        renderFrameworkPoints(e.target.value);
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        appState.profile.name = document.getElementById('prof-name').value;
        appState.profile.role = document.getElementById('prof-role').value;
        appState.profile.framework = frameworkSelect.value;
        appState.profile.manager = document.getElementById('prof-manager').value;
        appState.profile.jobDescription = document.getElementById('prof-job-desc').value;
        appState.profile.aspirations = document.getElementById('prof-aspirations').value;
        appState.profile.qualifications = document.getElementById('prof-qualifications').value;
        appState.profile.skills = document.getElementById('prof-skills').value;

        saveState();

        const status = document.getElementById('profile-save-status');
        status.textContent = 'Profile saved successfully!';
        status.style.opacity = 1;
        setTimeout(() => {
            status.style.opacity = 0;
        }, 2000);

        // Update dashboard values in background
        renderDashboard();
    });
}

function renderFrameworkPoints(frameworkName) {
    const title = document.getElementById('framework-info-title');
    const list = document.getElementById('framework-points-list');
    if (title && list) {
        title.textContent = `${frameworkName} Framework`;
        list.innerHTML = '';
        const points = frameworksData[frameworkName] || [];
        points.forEach(pt => {
            list.innerHTML += `<li>${pt}</li>`;
        });
    }
}

/* --------------------------------------------------
   GOALS & PRIORITIES CONTROLLER
   -------------------------------------------------- */
let activeGoalFilter = 'all';

function initGoalsView() {
    const addGoalBtn = document.getElementById('btn-add-goal');
    const modal = document.getElementById('goal-modal');
    const closeBtn = document.getElementById('goal-modal-close');
    const cancelBtn = document.getElementById('goal-modal-cancel');
    const form = document.getElementById('goal-form');

    // Filter clicks
    document.querySelectorAll('[data-goal-filter]').forEach(tab => {
        tab.addEventListener('click', (e) => {
            document.querySelectorAll('[data-goal-filter]').forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');
            activeGoalFilter = e.target.getAttribute('data-goal-filter');
            renderGoals();
        });
    });

    addGoalBtn.addEventListener('click', () => {
        document.getElementById('goal-modal-title').textContent = 'Create New Goal';
        document.getElementById('goal-edit-index').value = "-1";
        form.reset();
        modal.classList.add('active');
    });

    const closeModal = () => modal.classList.remove('active');
    closeBtn.addEventListener('click', closeModal);
    cancelBtn.addEventListener('click', closeModal);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const editIdx = parseInt(document.getElementById('goal-edit-index').value);
        const newGoal = {
            title: document.getElementById('goal-title').value,
            tag: document.getElementById('goal-tag').value,
            status: document.getElementById('goal-status').value,
            successCriteria: document.getElementById('goal-success').value,
            evidence: editIdx >= 0 ? appState.goals[editIdx].evidence : []
        };

        if (editIdx >= 0) {
            appState.goals[editIdx] = newGoal;
        } else {
            appState.goals.push(newGoal);
        }

        saveState();
        closeModal();
        renderGoals();
    });

    // Evidence Form Submit
    const evidenceModal = document.getElementById('evidence-modal');
    const evForm = document.getElementById('evidence-form');
    evForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const goalIdx = parseInt(document.getElementById('evidence-goal-index').value);
        if (goalIdx >= 0) {
            const newEv = {
                date: new Date().toISOString().split('T')[0],
                content: document.getElementById('ev-title').value,
                link: document.getElementById('ev-link').value,
                linkLabel: document.getElementById('ev-link-label').value || 'Link',
                isCheckpoint: document.getElementById('ev-is-checkpoint').checked
            };
            appState.goals[goalIdx].evidence.push(newEv);
            saveState();
        }
        evidenceModal.classList.remove('active');
        renderGoals();
    });

    document.getElementById('evidence-modal-close').addEventListener('click', () => {
        evidenceModal.classList.remove('active');
    });
    document.getElementById('evidence-modal-cancel').addEventListener('click', () => {
        evidenceModal.classList.remove('active');
    });
}

function renderGoals() {
    const grid = document.getElementById('goals-card-grid');
    if (!grid) return;
    grid.innerHTML = '';

    appState.goals.forEach((g, idx) => {
        // Apply filter
        if (activeGoalFilter === 'active' && g.status === 'Completed') return;
        if (activeGoalFilter === 'completed' && g.status !== 'Completed') return;

        const tagClass = getTagClass(g.tag);
        const evListHtml = g.evidence.map(ev => `
            <div class="evidence-pill-item ${ev.isCheckpoint ? 'milestone' : ''}">
                <span class="ev-date">${formatDate(ev.date)}</span>
                <p class="ev-desc">${ev.content}</p>
                ${ev.link ? `<a href="${ev.link}" target="_blank" class="ev-link">🔗 ${ev.linkLabel}</a>` : ''}
            </div>
        `).join('');

        grid.innerHTML += `
            <div class="goal-card">
                <div>
                    <div class="goal-card-header">
                        <span class="tag ${tagClass}">${g.tag}</span>
                        <span class="tag tag-framework">${g.status}</span>
                    </div>
                    <h4 class="goal-card-title">${g.title}</h4>
                    <div class="goal-card-body mt-md">
                        <span class="goal-section-label">Success Criteria:</span>
                        <p class="goal-criteria-text">${g.successCriteria}</p>
                    </div>
                </div>

                <div class="goal-card-footer">
                    <div class="goal-evidence-summary">
                        <span class="goal-section-label">Evidence logged:</span>
                        <span class="evidence-count-badge">${g.evidence.length} entries</span>
                    </div>
                    <div class="goal-actions">
                        <button class="btn-card-action primary" onclick="openEvidenceModal(${idx})">+ Add Evidence</button>
                        <button class="btn-card-action secondary" onclick="editGoal(${idx})">Edit Goal</button>
                    </div>
                </div>
            </div>
        `;
    });

    if (grid.innerHTML === '') {
        grid.innerHTML = `
            <div class="grid-col-12" style="text-align: center; padding: 60px; color: var(--text-muted);">
                <h4>No goals found matching this filter.</h4>
                <p>Click "Create New Goal" to begin setting targets.</p>
            </div>
        `;
    }
}

function openEvidenceModal(goalIdx) {
    const modal = document.getElementById('evidence-modal');
    document.getElementById('evidence-goal-index').value = goalIdx;
    document.getElementById('evidence-form').reset();
    modal.classList.add('active');
}

function editGoal(goalIdx) {
    const goal = appState.goals[goalIdx];
    const modal = document.getElementById('goal-modal');
    
    document.getElementById('goal-modal-title').textContent = 'Edit Goal';
    document.getElementById('goal-edit-index').value = goalIdx;
    
    document.getElementById('goal-title').value = goal.title;
    document.getElementById('goal-tag').value = goal.tag;
    document.getElementById('goal-status').value = goal.status;
    document.getElementById('goal-success').value = goal.successCriteria;
    
    modal.classList.add('active');
}

/* --------------------------------------------------
   PRACTICE JOURNAL CONTROLLER
   -------------------------------------------------- */
function initJournalView() {
    const form = document.getElementById('journal-form');
    const search = document.getElementById('journal-search');

    // Handle Accordion titles
    document.querySelectorAll('.accordion-title').forEach(title => {
        title.addEventListener('click', () => {
            const item = title.parentElement;
            const isExpanded = item.classList.contains('expanded');
            
            // Collapse others
            document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('expanded'));
            
            if (!isExpanded) {
                item.classList.add('expanded');
            }
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const entry = {
            title: document.getElementById('journal-title').value,
            date: new Date().toISOString().split('T')[0],
            answers: {
                reflection: document.getElementById('q-reflection').value,
                impact: document.getElementById('q-impact').value,
                practice: document.getElementById('q-practice').value,
                contribution: document.getElementById('q-contribution').value,
                growth: document.getElementById('q-growth').value,
                support: document.getElementById('q-support').value
            }
        };

        appState.journal.unshift(entry); // add to top
        saveState();
        form.reset();
        
        // Reset accordion expanded state to first item
        document.querySelectorAll('.accordion-item').forEach((i, idx) => {
            if (idx === 0) i.classList.add('expanded');
            else i.classList.remove('expanded');
        });

        renderJournal();
    });

    search.addEventListener('input', () => {
        renderJournal(search.value);
    });
}

function renderJournal(searchQuery = '') {
    const feed = document.getElementById('journal-feed-list');
    if (!feed) return;
    feed.innerHTML = '';

    const filtered = appState.journal.filter(entry => {
        if (!searchQuery) return true;
        const q = searchQuery.toLowerCase();
        return entry.title.toLowerCase().includes(q) || 
               entry.answers.reflection.toLowerCase().includes(q) ||
               entry.answers.practice.toLowerCase().includes(q);
    });

    filtered.forEach(entry => {
        feed.innerHTML += `
            <div class="journal-card-entry">
                <div class="journal-entry-header">
                    <h4 class="journal-entry-title">${entry.title}</h4>
                    <span class="journal-entry-date">${formatDate(entry.date)}</span>
                </div>
                <div class="journal-entry-grid">
                    <div class="journal-answer-block">
                        <span class="journal-q-label">1. Reflection (Went Well)</span>
                        <p class="journal-q-ans">${entry.answers.reflection}</p>
                    </div>
                    <div class="journal-answer-block">
                        <span class="journal-q-label">2. Impact (Beneficiaries)</span>
                        <p class="journal-q-ans">${entry.answers.impact || 'N/A'}</p>
                    </div>
                    <div class="journal-answer-block">
                        <span class="journal-q-label">3. Practice Improvements</span>
                        <p class="journal-q-ans">${entry.answers.practice || 'N/A'}</p>
                    </div>
                    <div class="journal-answer-block">
                        <span class="journal-q-label">4. Peer Support/Contribution</span>
                        <p class="journal-q-ans">${entry.answers.contribution || 'N/A'}</p>
                    </div>
                    <div class="journal-answer-block">
                        <span class="journal-q-label">5. Ongoing Learning</span>
                        <p class="journal-q-ans">${entry.answers.growth || 'N/A'}</p>
                    </div>
                    <div class="journal-answer-block">
                        <span class="journal-q-label">6. Support Required</span>
                        <p class="journal-q-ans">${entry.answers.support || 'None requested'}</p>
                    </div>
                </div>
            </div>
        `;
    });

    if (filtered.length === 0) {
        feed.innerHTML = '<p style="text-align: center; padding: 40px; color: var(--text-muted);">No reflections match your search.</p>';
    }
}

/* --------------------------------------------------
   CPD LOG CONTROLLER
   -------------------------------------------------- */
function populateCpdDropdowns() {
    const stdSelect = document.getElementById('cpd-linked-standard');
    const goalSelect = document.getElementById('cpd-linked-goal');

    if (stdSelect) {
        stdSelect.innerHTML = '<option value="">None / General Professionalism</option>';
        const currentFramework = appState.profile.framework;
        const points = frameworksData[currentFramework] || [];
        points.forEach(pt => {
            const shortName = pt.split(' (')[0]; // clean up brackets if any
            stdSelect.innerHTML += `<option value="${shortName}">${shortName}</option>`;
        });
    }

    if (goalSelect) {
        goalSelect.innerHTML = '<option value="">General L&D (No active goal)</option>';
        appState.goals.forEach(g => {
            goalSelect.innerHTML += `<option value="${g.title}">${g.title}</option>`;
        });
    }
}

function initCpdView() {
    const form = document.getElementById('cpd-form');
    const search = document.getElementById('cpd-search');
    const filterType = document.getElementById('cpd-filter-type');

    // Set today as default date
    document.getElementById('cpd-date').value = new Date().toISOString().split('T')[0];

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const entry = {
            activity: document.getElementById('cpd-activity').value,
            type: document.getElementById('cpd-type').value,
            date: document.getElementById('cpd-date').value,
            hours: parseFloat(document.getElementById('cpd-hours').value),
            cost: parseFloat(document.getElementById('cpd-cost').value || 0),
            provider: document.getElementById('cpd-provider').value || 'Internal',
            linkedStandard: document.getElementById('cpd-linked-standard').value || 'General Professionalism',
            linkedGoal: document.getElementById('cpd-linked-goal').value || 'General L&D',
            reflection: {
                learn: document.getElementById('cpd-q-learn').value,
                change: document.getElementById('cpd-q-change').value,
                impact: document.getElementById('cpd-q-impact').value,
                next: document.getElementById('cpd-q-next').value
            }
        };

        appState.cpd.unshift(entry);
        saveState();
        form.reset();
        
        // Reset date
        document.getElementById('cpd-date').value = new Date().toISOString().split('T')[0];
        
        populateCpdDropdowns();
        renderCpd();
    });

    search.addEventListener('input', renderCpdFromInputs);
    filterType.addEventListener('change', renderCpdFromInputs);
}

function renderCpdFromInputs() {
    const searchVal = document.getElementById('cpd-search').value;
    const filterVal = document.getElementById('cpd-filter-type').value;
    renderCpd(searchVal, filterVal);
}

function renderCpd(searchQuery = '', filterType = 'all') {
    const feed = document.getElementById('cpd-feed-list');
    if (!feed) return;
    feed.innerHTML = '';

    const filtered = appState.cpd.filter(c => {
        const matchesSearch = searchQuery === '' || 
            c.activity.toLowerCase().includes(searchQuery.toLowerCase()) ||
            c.reflection.learn.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesFilter = filterType === 'all' || c.type === filterType;
        return matchesSearch && matchesFilter;
    });

    filtered.forEach((c, idx) => {
        feed.innerHTML += `
            <div class="cpd-item-card" onclick="toggleCpdCollapse(${idx})">
                <div class="cpd-item-left">
                    <h4 class="cpd-item-title">${c.activity}</h4>
                    <div class="cpd-item-details">
                        <span class="cpd-item-badge">${c.type}</span>
                        <span>${formatDate(c.date)}</span>
                        <span>Provider: <strong>${c.provider}</strong></span>
                        ${c.cost > 0 ? `<span>Cost: £${c.cost}</span>` : ''}
                    </div>
                    <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 4px;">
                        Aligned: <strong>${c.linkedStandard}</strong>
                    </div>
                </div>
                <div class="cpd-item-right">
                    <span class="cpd-hours-badge">${c.hours} hrs</span>
                    <span class="cpd-hours-sub">Logged</span>
                </div>
                
                <div class="cpd-item-reflections">
                    <div class="cpd-ref-row">
                        <span class="cpd-ref-q">1. Learning Takeaways:</span>
                        <p>${c.reflection.learn}</p>
                    </div>
                    <div class="cpd-ref-row">
                        <span class="cpd-ref-q">2. Implemented Changes:</span>
                        <p>${c.reflection.change}</p>
                    </div>
                    <div class="cpd-ref-row">
                        <span class="cpd-ref-q">3. Evaluation of Impact:</span>
                        <p>${c.reflection.impact}</p>
                    </div>
                    <div class="cpd-ref-row">
                        <span class="cpd-ref-q">4. Planned Next Steps:</span>
                        <p>${c.reflection.next}</p>
                    </div>
                </div>
            </div>
        `;
    });

    if (filtered.length === 0) {
        feed.innerHTML = '<p style="text-align: center; padding: 40px; color: var(--text-muted);">No CPD activities logged matching filters.</p>';
    }
}

function toggleCpdCollapse(idx) {
    const cards = document.querySelectorAll('.cpd-item-card');
    if (cards[idx]) {
        cards[idx].classList.toggle('expanded');
    }
}

/* --------------------------------------------------
   GROWTH TIMELINE CONTROLLER
   -------------------------------------------------- */
let timelineFilter = 'all';

function initTimelineView() {
    document.querySelectorAll('[data-timeline-filter]').forEach(chip => {
        chip.addEventListener('click', (e) => {
            document.querySelectorAll('[data-timeline-filter]').forEach(c => c.classList.remove('active'));
            e.target.classList.add('active');
            timelineFilter = e.target.getAttribute('data-timeline-filter');
            renderTimeline();
        });
    });
}

function shortenGoalTitle(title) {
    if (!title) return 'General Development';
    if (title.includes('Optimise KS4 Practical Chemistry')) return 'KS4 Chemistry Practical Logs';
    if (title.includes('Lead department coaching on Retrieval')) return 'Retrieval Practice Coaching';
    if (title.includes('Chemistry Olympiad Prep Club')) return 'Chemistry Olympiad Club';
    return title.length > 45 ? title.substring(0, 42) + '...' : title;
}

function getAggregatedTimeline() {
    let timeline = [];

    // Aggregate CPD
    appState.cpd.forEach(c => {
        const goalTag = c.linkedGoal && c.linkedGoal !== 'General L&D' 
            ? `<div style="display: flex; margin-top: 10px;">
                <span class="tag tag-framework" style="font-size: 0.75rem; padding: 2px 8px; border-radius: 4px;">🎯 Goal: ${shortenGoalTitle(c.linkedGoal)}</span>
               </div>` 
            : '';
        timeline.push({
            date: c.date,
            title: c.activity,
            label: `${c.type} (${c.hours} hrs)`,
            content: `<p><strong>Key Learning:</strong> ${c.reflection.learn.substring(0, 150)}...</p>${goalTag}`,
            source: 'cpd'
        });
    });

    // Aggregate Reflections
    appState.journal.forEach(j => {
        timeline.push({
            date: j.date,
            title: j.title,
            label: 'Ongoing Reflection',
            content: `
                <p><strong>Practice:</strong> ${j.answers.practice.substring(0, 150)}...</p>
                <p><strong>Impact:</strong> ${j.answers.impact.substring(0, 150)}...</p>
            `,
            source: 'journal'
        });
    });

    // Aggregate Goal Evidence Updates
    appState.goals.forEach(g => {
        g.evidence.forEach(ev => {
            const metaHtml = `
                <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap; margin-top: 10px;">
                    ${ev.link ? `<a href="${ev.link}" target="_blank" class="text-link" style="font-size: 0.8rem; font-weight: 600;">🔗 ${ev.linkLabel}</a>` : ''}
                    <span class="tag tag-framework" style="font-size: 0.75rem; padding: 2px 8px; border-radius: 4px;">🎯 Goal: ${shortenGoalTitle(g.title)}</span>
                </div>
            `;
            timeline.push({
                date: ev.date,
                title: ev.content,
                label: ev.isCheckpoint ? 'Milestone Progress Update' : 'Goal Progress Update',
                content: metaHtml,
                source: 'evidence'
            });
        });

        // If goal is completed, add a completing node
        if (g.status === 'Completed') {
            const compDate = g.evidence.length > 0 ? g.evidence[g.evidence.length - 1].date : '2026-05-15';
            timeline.push({
                date: compDate,
                title: `Goal Completed: ${shortenGoalTitle(g.title)} 🎉`,
                label: 'Milestone Achieved',
                content: `<p><strong>Success Outcome:</strong> ${g.successCriteria}</p>`,
                source: 'evidence'
            });
        }
    });

    // Sort timeline chronologically (latest first)
    return timeline.sort((a,b) => new Date(b.date) - new Date(a.date));
}

function renderTimeline() {
    const timelineList = document.getElementById('timeline-list');
    if (!timelineList) return;
    timelineList.innerHTML = '';

    const data = getAggregatedTimeline().filter(item => {
        if (timelineFilter === 'all') return true;
        if (timelineFilter === 'cpd') return item.source === 'cpd';
        if (timelineFilter === 'goals') return item.source === 'evidence';
        if (timelineFilter === 'reflections') return item.source === 'journal';
        return true;
    });

    data.forEach(item => {
        let nodeClass = 'node-cpd';
        let iconSvg = '';
        
        if (item.source === 'cpd') {
            nodeClass = 'node-cpd';
            iconSvg = `<svg viewBox="0 0 24 24"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>`;
        } else if (item.source === 'journal') {
            nodeClass = 'node-journal';
            iconSvg = `<svg viewBox="0 0 24 24"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>`;
        } else if (item.source === 'evidence') {
            nodeClass = 'node-goal';
            iconSvg = `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/></svg>`;
        }

        timelineList.innerHTML += `
            <div class="timeline-node ${nodeClass}">
                <div class="timeline-node-marker">${iconSvg}</div>
                <div class="timeline-node-box">
                    <div class="timeline-node-header">
                        <span class="timeline-node-type-label">${item.label}</span>
                        <span class="timeline-node-date">${formatDate(item.date)}</span>
                    </div>
                    <h4 class="timeline-node-title">${item.title}</h4>
                    <div class="timeline-node-content">${item.content}</div>
                </div>
            </div>
        `;
    });

    if (data.length === 0) {
        timelineList.innerHTML = '<p style="text-align: center; padding: 40px; color: var(--text-muted);">No events found in this timeline category.</p>';
    }
}

/* --------------------------------------------------
   ANNUAL REVIEW SYNTHESIS GENERATOR
   -------------------------------------------------- */
function initAnnualReviewView() {
    const btnGen = document.getElementById('btn-generate-review');
    const placeholder = document.getElementById('review-placeholder');
    const output = document.getElementById('review-output');
    const headerActions = document.getElementById('review-actions-header');

    btnGen.addEventListener('click', () => {
        // Run review generator compiler
        generateSynthesisedReview();
        
        // Hide placeholder and show document
        placeholder.style.display = 'none';
        output.style.display = 'block';
        headerActions.style.display = 'flex';
    });

    // Copy to Clipboard
    document.getElementById('btn-copy-review').addEventListener('click', () => {
        const textToCopy = getReviewPlainText();
        navigator.clipboard.writeText(textToCopy).then(() => {
            const copyBtn = document.getElementById('btn-copy-review');
            copyBtn.textContent = 'Copied!';
            setTimeout(() => {
                copyBtn.innerHTML = `
                    <svg viewBox="0 0 24 24" width="16" height="16"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
                    Copy to Clipboard
                `;
            }, 1500);
        });
    });

    // Save Review
    document.getElementById('btn-save-review').addEventListener('click', () => {
        alert("Portfolio synthesis report saved. You can now access this under your school appraisal documents list.");
    });
}

function generateSynthesisedReview() {
    // Populate Headers from State
    document.getElementById('rev-meta-name').textContent = appState.profile.name;
    document.getElementById('rev-meta-role').textContent = appState.profile.role;
    document.getElementById('rev-meta-manager').textContent = appState.profile.manager;
    document.getElementById('rev-meta-framework').textContent = appState.profile.framework;
    document.getElementById('rev-meta-date').textContent = new Date().toLocaleDateString('en-GB', {
        year: 'numeric', month: 'long', day: 'numeric'
    });

    const totalCpd = appState.cpd.reduce((sum, item) => sum + parseFloat(item.hours), 0);
    const completedGoalsList = appState.goals.filter(g => g.status === 'Completed');
    const activeGoalsList = appState.goals.filter(g => g.status !== 'Completed');

    // Section 1: Executive Summary
    let summaryHtml = `
        <div class="review-sec-block">
            <h3>Executive Portfolio Summary</h3>
            <p>During the current academic year, <strong>${appState.profile.name}</strong>, serving in the role of <strong>${appState.profile.role}</strong>, has maintained a continuous reflective portfolio focused on professional growth, classroom impact, and department leadership. The portfolio demonstrates complete alignment with the <strong>${appState.profile.framework}</strong>, showing sustained reflection and evidence-gathering throughout the appraisal periods.</p>
        </div>
    `;

    // Section 2: Goals Outcomes
    let goalsHtml = `
        <div class="review-sec-block">
            <h3>1. Progress Against Strategic Goals & Priorities</h3>
            <p>A total of <strong>${appState.goals.length}</strong> goals were established at the beginning of the academic cycle in September. Ongoing evidence and checkpoints have been recorded dynamically:</p>
            <ul>
    `;

    appState.goals.forEach(g => {
        const statusIcon = g.status === 'Completed' ? '✅' : '⏳';
        const evPoints = g.evidence.map(ev => `"${ev.content}"`).join(', ');
        goalsHtml += `
            <li>
                <strong>${statusIcon} ${g.title} (${g.status})</strong><br>
                <em>Success Criteria:</em> ${g.successCriteria}<br>
                <em>Evidence Logged:</em> ${g.evidence.length} entries. Key milestones include: ${evPoints || 'No milestones recorded.'}
            </li>
        `;
    });
    goalsHtml += `
            </ul>
        </div>
    `;

    // Section 3: CPD Undertaken
    let cpdHtml = `
        <div class="review-sec-block">
            <h3>2. Learning & Development (CPD) Syntheses</h3>
            <p>A total of <strong>${totalCpd.toFixed(1)} hours</strong> of professional development activities were undertaken and evaluated across various modalities (including courses, conferences, and mentoring):</p>
            <ul>
    `;
    appState.cpd.forEach(c => {
        cpdHtml += `
            <li>
                <strong>${c.activity}</strong> (${c.hours} hrs via ${c.provider}) - <em>Aligned Standard: ${c.linkedStandard}</em><br>
                <em>Impact & Implementation:</em> "${c.reflection.impact}"
            </li>
        `;
    });
    cpdHtml += `
            </ul>
        </div>
    `;

    // Section 4: Professional Practice Reflections
    let journalSummaryText = "";
    if (appState.journal.length > 0) {
        journalSummaryText = appState.journal.map(j => `"${j.answers.reflection}" (focusing on: ${j.title})`).join(" Also, ");
    } else {
        journalSummaryText = "No direct entries recorded in the reflective practice log.";
    }

    let practiceHtml = `
        <div class="review-sec-block">
            <h3>3. Ongoing Reflection & Classroom Impact</h3>
            <p>Structured practice reflections indicate a continuous evaluation cycle. Key areas of success recorded in the journal emphasize:</p>
            <p><em>Classroom Outcomes:</em> ${journalSummaryText}</p>
            <p>Specific improvements in teaching methodology include dual coding, restructured practical checklists, and targeted spacing grids during Retrieval Practice.</p>
        </div>
    `;

    // Section 5: Future Aspirations & Development Needs
    let aspirationsHtml = `
        <div class="review-sec-block">
            <h3>4. Forward-Looking Development Priorities</h3>
            <p>Reviewing future career aspirations (<em>"${appState.profile.aspirations}"</em>), the following priorities are set for the upcoming academic year:</p>
            <ul>
                <li>Consolidate department coaching practices and standardise retrieval structures across all GCSE classrooms.</li>
                <li>Acquire administrative training and peer observation opportunities regarding whole-school curriculum design.</li>
                <li>Focus CPD resources on senior leadership modules, specifically around organisational change management.</li>
            </ul>
        </div>
    `;

    // Output all together
    const container = document.getElementById('review-report-sections');
    if (container) {
        container.innerHTML = summaryHtml + goalsHtml + cpdHtml + practiceHtml + aspirationsHtml;
    }
}

function getReviewPlainText() {
    const totalCpd = appState.cpd.reduce((sum, item) => sum + parseFloat(item.hours), 0);
    const goalsList = appState.goals.map((g, idx) => `${idx + 1}. [${g.status}] ${g.title}\n   Criteria: ${g.successCriteria}\n   Evidence entries: ${g.evidence.length}`).join('\n');
    const cpdList = appState.cpd.map((c) => `- ${c.activity} (${c.hours} hrs): Aligned: ${c.linkedStandard}`).join('\n');
    
    return `
LEICESTER HIGH SCHOOL FOR GIRLS
PROFESSIONAL GROWTH & DEVELOPMENT SYNTHESIS REPORT

Staff Member: ${appState.profile.name}
Role: ${appState.profile.role}
Reviewer: ${appState.profile.manager}
Standards Framework: ${appState.profile.framework}
Date Synthesised: ${new Date().toLocaleDateString()}

==================================================
EXECUTIVE SUMMARY
==================================================
During the academic year, ${appState.profile.name} has maintained an active reflective growth portfolio. This document compiles evidence, journal items, and CPD courses completed to present an aggregated overview of performance and development.

==================================================
GOALS OUTCOMES
==================================================
Total Goals: ${appState.goals.length}
${goalsList}

==================================================
CPD UNDERTAKEN
==================================================
Total CPD Hours: ${totalCpd.toFixed(1)} hours
${cpdList}

==================================================
PROFESSIONAL PRACTICE SUMMARY
==================================================
Journal reflections focus on classroom Dual Coding, practical laboratory checklists, and the rollout of Retrieval Practice spacing techniques to secondary science staff.

==================================================
DEVELOPMENT PRIORITIES & ASPIRATIONS
==================================================
Aspiration Focus: ${appState.profile.aspirations}
Priorities:
1. Consolidate department coaching frameworks.
2. Attend curriculum design seminars.
3. Access senior leadership coaching modules.
`;
}

/* --------------------------------------------------
   HELPERS & GENERAL TRIGGERS
   -------------------------------------------------- */
function formatDate(dateStr) {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-GB', {
        day: 'numeric', month: 'short', year: 'numeric'
    });
}

/* --------------------------------------------------
   8. LINE MANAGEMENT CONTROLLER
   -------------------------------------------------- */
let activeLmDetailReportIdx = -1;
let activeLmDetailTab = 'lens';

function initLineManagementView() {
    const meetingForm = document.getElementById('lm-meeting-form');
    if (meetingForm) {
        meetingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const reportIdx = parseInt(document.getElementById('meet-report-index').value);
            if (reportIdx >= 0) {
                const type = document.getElementById('meet-type').value;
                const date = document.getElementById('meet-date').value;
                const notes = document.getElementById('meet-notes').value;
                const actions = document.getElementById('meet-actions').value;
                const support = document.getElementById('meet-support').value;

                const newMeeting = { date, type, notes, actions, support };
                appState.directReports[reportIdx].meetings.unshift(newMeeting);
                saveState();
                
                meetingForm.reset();
                // Set today's date back
                document.getElementById('meet-date').value = new Date().toISOString().split('T')[0];
                renderMeetingsHistory(reportIdx);
            }
        });
    }
}

function renderLineManagement() {
    const grid = document.getElementById('direct-reports-grid');
    if (!grid) return;
    grid.innerHTML = '';

    appState.directReports.forEach((r, idx) => {
        const activeGoalsCount = r.goals.filter(g => g.status !== 'Completed').length;
        const completedGoalsCount = r.goals.filter(g => g.status === 'Completed').length;
        const cpdHours = r.cpd.reduce((sum, c) => sum + parseFloat(c.hours), 0);
        
        let lastCheckIn = 'No meetings recorded';
        if (r.meetings && r.meetings.length > 0) {
            // Sort meetings to find the latest
            const sortedMeetings = [...r.meetings].sort((a,b) => new Date(b.date) - new Date(a.date));
            lastCheckIn = `${formatDate(sortedMeetings[0].date)} (${sortedMeetings[0].type.split(' (')[0]})`;
        }

        grid.innerHTML += `
            <div class="report-card">
                <div>
                    <div class="report-card-header">
                        <div class="avatar-container">
                            <img src="${r.avatar}" alt="${r.name}">
                            <div class="status-indicator online"></div>
                        </div>
                        <div class="report-card-info">
                            <h3>${r.name}</h3>
                            <p>${r.role}</p>
                        </div>
                    </div>
                    
                    <div style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 12px;">
                        Framework: <strong>${r.framework}</strong>
                    </div>

                    <div class="report-card-stats">
                        <div class="report-stat-item">
                            <span class="report-stat-label">Active Goals</span>
                            <span class="report-stat-val">${activeGoalsCount} active</span>
                        </div>
                        <div class="report-stat-item">
                            <span class="report-stat-label">CPD Hours</span>
                            <span class="report-stat-val">${cpdHours.toFixed(1)} hrs</span>
                        </div>
                        <div class="report-stat-item" style="grid-column: span 2; border-top: 1px dashed var(--border-color); padding-top: 8px; margin-top: 4px;">
                            <span class="report-stat-label">Last Check-in</span>
                            <span class="report-stat-val" style="font-size: 0.8rem; font-weight: 600; color: var(--text-secondary);">${lastCheckIn}</span>
                        </div>
                    </div>
                </div>

                <div class="report-card-actions">
                    <button class="btn btn-primary btn-sm btn-iconic" onclick="openReportDetail(${idx})">
                        <svg viewBox="0 0 24 24" width="14" height="14"><path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
                        Review
                    </button>
                    <button class="btn btn-secondary btn-sm btn-iconic" onclick="openRecordMeeting(${idx})">
                        <svg viewBox="0 0 24 24" width="14" height="14"><path fill="currentColor" d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/></svg>
                        Meetings
                    </button>
                </div>
            </div>
        `;
    });
}

function openReportDetail(reportIdx) {
    activeLmDetailReportIdx = reportIdx;
    const report = appState.directReports[reportIdx];
    
    document.getElementById('lm-list-panel').style.display = 'none';
    document.getElementById('lm-detail-panel').style.display = 'block';

    // Populate header details
    document.getElementById('report-avatar').src = report.avatar;
    document.getElementById('report-name').textContent = report.name;
    document.getElementById('report-role').textContent = report.role;
    document.getElementById('report-framework-val').textContent = report.framework;
    document.getElementById('report-qual-val').textContent = report.qualifications;

    // Sub-tab: Aspiration Lens details
    document.getElementById('report-job-desc-text').textContent = report.jobDescription;
    document.getElementById('report-aspirations-text').textContent = report.aspirations;
    document.getElementById('report-skills-text').textContent = report.skills;

    // Switch to 'lens' sub-tab by default
    switchLmDetailTab('lens');
}

function exitReportDetail() {
    document.getElementById('lm-detail-panel').style.display = 'none';
    document.getElementById('lm-list-panel').style.display = 'block';
    renderLineManagement(); // refresh overview stats
}

function switchLmDetailTab(tabId) {
    activeLmDetailTab = tabId;
    
    // Toggle active tab buttons
    document.querySelectorAll('#lm-detail-panel .filter-tab').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`lm-tab-${tabId}`).classList.add('active');

    // Toggle subviews
    document.querySelectorAll('.lm-sub-view').forEach(view => {
        view.style.display = 'none';
    });
    document.getElementById(`lm-sub-view-${tabId}`).style.display = 'block';

    // Render contents based on tab
    if (tabId === 'goals') renderLmReportGoals(activeLmDetailReportIdx);
    if (tabId === 'cpd') renderLmReportCpd(activeLmDetailReportIdx);
    if (tabId === 'timeline') renderLmReportTimeline(activeLmDetailReportIdx);
}

function renderLmReportGoals(reportIdx) {
    const container = document.getElementById('lm-report-goals-grid');
    if (!container) return;
    container.innerHTML = '';

    const report = appState.directReports[reportIdx];
    report.goals.forEach((g, goalIdx) => {
        const tagClass = getTagClass(g.tag);
        
        let managerCommentHtml = '';
        if (g.managerComment) {
            managerCommentHtml = `
                <div class="manager-comment-content">
                    "${g.managerComment}"
                </div>
            `;
        } else {
            managerCommentHtml = `<p style="font-size: 0.8rem; color: var(--text-muted); font-style: italic;">No feedback recorded yet.</p>`;
        }

        const evidenceHtml = g.evidence.map(ev => `
            <div class="evidence-pill-item ${ev.isCheckpoint ? 'milestone' : ''}" style="background-color: var(--bg-app); border: 1px solid var(--border-color); padding: 10px; border-radius: var(--radius-sm); margin-top: 8px;">
                <span class="ev-date" style="font-size: 0.75rem; color: var(--text-muted);">${formatDate(ev.date)}</span>
                <p class="ev-desc" style="font-size: 0.8rem; margin: 4px 0;">${ev.content}</p>
                ${ev.link ? `<a href="${ev.link}" target="_blank" class="ev-link" style="font-size: 0.75rem; color: var(--primary);">🔗 ${ev.linkLabel}</a>` : ''}
            </div>
        `).join('');

        container.innerHTML += `
            <div class="goal-card" style="height: auto; min-height: 340px;">
                <div>
                    <div class="goal-card-header">
                        <span class="tag ${tagClass}">${g.tag}</span>
                        <span class="tag tag-framework">${g.status}</span>
                    </div>
                    <h4 class="goal-card-title">${g.title}</h4>
                    <div class="goal-card-body mt-md">
                        <span class="goal-section-label">Success Criteria:</span>
                        <p class="goal-criteria-text" style="-webkit-line-clamp: 2;">${g.successCriteria}</p>
                        
                        <div class="goal-evidence mt-md">
                            <span class="goal-section-label">Evidence Logs (${g.evidence.length}):</span>
                            ${evidenceHtml || '<p style="font-size: 0.8rem; color: var(--text-muted); font-style: italic; margin-top: 4px;">No evidence logged by staff yet.</p>'}
                        </div>
                    </div>
                </div>

                <div class="manager-comments-section">
                    <span class="manager-comment-title">Manager Growth Feedback</span>
                    ${managerCommentHtml}
                    <form class="manager-comment-form" onsubmit="saveGoalComment(event, ${reportIdx}, ${goalIdx})">
                        <textarea required placeholder="Add coaching advice, encouragement, or review comments..." rows="2"></textarea>
                        <button type="submit" class="btn btn-secondary btn-sm" style="align-self: flex-end;">Save Feedback</button>
                    </form>
                </div>
            </div>
        `;
    });
}

function saveGoalComment(event, reportIdx, goalIdx) {
    event.preventDefault();
    const form = event.target;
    const commentText = form.querySelector('textarea').value;
    
    appState.directReports[reportIdx].goals[goalIdx].managerComment = commentText;
    saveState();
    
    form.reset();
    renderLmReportGoals(reportIdx);
}

function renderLmReportCpd(reportIdx) {
    const feed = document.getElementById('lm-report-cpd-feed');
    if (!feed) return;
    feed.innerHTML = '';

    const report = appState.directReports[reportIdx];
    report.cpd.forEach(c => {
        feed.innerHTML += `
            <div class="cpd-item-card" style="cursor: default;">
                <div class="cpd-item-left">
                    <h4 class="cpd-item-title">${c.activity}</h4>
                    <div class="cpd-item-details">
                        <span class="cpd-item-badge">${c.type}</span>
                        <span>${formatDate(c.date)}</span>
                        <span>Provider: <strong>${c.provider}</strong></span>
                    </div>
                    <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 6px; line-height: 1.4;">
                        Aligned: <strong>${c.linkedStandard}</strong><br>
                        <strong>Key Learning:</strong> ${c.reflection.learn}<br>
                        <strong>Impact:</strong> ${c.reflection.impact}
                    </div>
                </div>
                <div class="cpd-item-right">
                    <span class="cpd-hours-badge">${c.hours} hrs</span>
                    <span class="cpd-hours-sub">Logged</span>
                </div>
            </div>
        `;
    });

    if (report.cpd.length === 0) {
        feed.innerHTML = '<p style="text-align: center; padding: 40px; color: var(--text-muted);">No CPD activities logged yet.</p>';
    }
}

function renderLmReportTimeline(reportIdx) {
    const list = document.getElementById('lm-report-timeline-list');
    if (!list) return;
    list.innerHTML = '';

    const report = appState.directReports[reportIdx];
    let timeline = [];

    // CPD
    report.cpd.forEach(c => {
        timeline.push({
            date: c.date,
            title: c.activity,
            label: `${c.type} (${c.hours} hrs)`,
            content: `<p><strong>Reflection Summary:</strong> ${c.reflection.learn}</p>`,
            source: 'cpd'
        });
    });

    // Evidence
    report.goals.forEach(g => {
        g.evidence.forEach(ev => {
            timeline.push({
                date: ev.date,
                title: ev.content,
                label: ev.isCheckpoint ? 'Milestone Progress Update' : 'Goal Progress Update',
                content: `<span class="tag tag-framework">🎯 Goal: ${shortenGoalTitle(g.title)}</span>`,
                source: 'evidence'
            });
        });
        
        if (g.status === 'Completed') {
            const compDate = g.evidence.length > 0 ? g.evidence[g.evidence.length - 1].date : '2026-05-15';
            timeline.push({
                date: compDate,
                title: `Goal Completed: ${shortenGoalTitle(g.title)} 🎉`,
                label: 'Milestone Achieved',
                content: `<p><strong>Outcome:</strong> ${g.successCriteria}</p>`,
                source: 'evidence'
            });
        }
    });

    // Sort timeline chronologically (latest first)
    timeline.sort((a,b) => new Date(b.date) - new Date(a.date));

    timeline.forEach(item => {
        let nodeClass = 'node-cpd';
        let iconSvg = '';
        
        if (item.source === 'cpd') {
            nodeClass = 'node-cpd';
            iconSvg = `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>`;
        } else if (item.source === 'evidence') {
            nodeClass = 'node-goal';
            iconSvg = `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/></svg>`;
        }

        list.innerHTML += `
            <div class="timeline-node ${nodeClass}">
                <div class="timeline-node-marker">${iconSvg}</div>
                <div class="timeline-node-box">
                    <div class="timeline-node-header">
                        <span class="timeline-node-type-label">${item.label}</span>
                        <span class="timeline-node-date">${formatDate(item.date)}</span>
                    </div>
                    <h4 class="timeline-node-title">${item.title}</h4>
                    <div class="timeline-node-content">${item.content}</div>
                </div>
            </div>
        `;
    });

    if (timeline.length === 0) {
        list.innerHTML = '<p style="text-align: center; padding: 40px; color: var(--text-muted);">No timeline items logged yet.</p>';
    }
}

function openRecordMeeting(reportIdx) {
    const report = appState.directReports[reportIdx];
    document.getElementById('lm-list-panel').style.display = 'none';
    document.getElementById('lm-meetings-panel').style.display = 'block';

    // Header info
    document.getElementById('meet-avatar').src = report.avatar;
    document.getElementById('meet-report-name').textContent = report.name;
    document.getElementById('meet-report-role').textContent = report.role;

    // Form setup
    document.getElementById('meet-report-index').value = reportIdx;
    document.getElementById('meet-date').value = new Date().toISOString().split('T')[0];
    document.getElementById('lm-meeting-form').reset();
    document.getElementById('meet-date').value = new Date().toISOString().split('T')[0];

    renderMeetingsHistory(reportIdx);
}

function exitMeetingsPanel() {
    document.getElementById('lm-meetings-panel').style.display = 'none';
    document.getElementById('lm-list-panel').style.display = 'block';
    renderLineManagement(); // refresh overview stats
}

function renderMeetingsHistory(reportIdx) {
    const feed = document.getElementById('lm-meetings-feed-list');
    if (!feed) return;
    feed.innerHTML = '';

    const report = appState.directReports[reportIdx];
    if (report.meetings && report.meetings.length > 0) {
        // Sort meetings: latest first
        const sorted = [...report.meetings].sort((a,b) => new Date(b.date) - new Date(a.date));
        
        sorted.forEach(m => {
            let typeClass = 'type-informal';
            let badgeClass = 'badge-informal';
            if (m.type.includes('Start of Year')) {
                typeClass = 'type-formal-start';
                badgeClass = 'badge-formal-start';
            } else if (m.type.includes('End of Year')) {
                typeClass = 'type-formal-end';
                badgeClass = 'badge-formal-end';
            }

            feed.innerHTML += `
                <div class="meeting-log-card ${typeClass}">
                    <div class="meeting-log-header">
                        <span class="badge-meeting-type ${badgeClass}">${m.type}</span>
                        <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 500;">${formatDate(m.date)}</span>
                    </div>
                    <div class="meeting-log-body">
                        <div>
                            <span class="meet-block-label">Discussion Notes:</span>
                            <p>${m.notes}</p>
                        </div>
                        <div>
                            <span class="meet-block-label">Agreed Actions:</span>
                            <p>${m.actions}</p>
                        </div>
                        ${m.support ? `
                            <div>
                                <span class="meet-block-label">Support & Resources:</span>
                                <p>${m.support}</p>
                            </div>
                        ` : ''}
                    </div>
                </div>
            `;
        });
    } else {
        feed.innerHTML = '<p style="text-align: center; padding: 40px; color: var(--text-muted); font-style: italic;">No meetings recorded yet.</p>';
    }
}

// Global hooks for tab transitions in HTML buttons
window.switchTab = switchTab;
window.openEvidenceModal = openEvidenceModal;
window.editGoal = editGoal;
window.toggleCpdCollapse = toggleCpdCollapse;

// Line management hooks
window.openReportDetail = openReportDetail;
window.exitReportDetail = exitReportDetail;
window.switchLmDetailTab = switchLmDetailTab;
window.saveGoalComment = saveGoalComment;
window.openRecordMeeting = openRecordMeeting;
window.exitMeetingsPanel = exitMeetingsPanel;

// Document Ready Initialization
document.addEventListener('DOMContentLoaded', () => {
    loadState();
    initTheme();
    
    // Sidebar Hamburger Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
    }

    // Sidebar navigation buttons hook
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const btnTarget = e.currentTarget;
            const tabId = btnTarget.getAttribute('data-tab');
            if (tabId) {
                switchTab(tabId);
            }
        });
    });

    // Sub-modules init
    initProfileView();
    initGoalsView();
    initJournalView();
    initCpdView();
    initTimelineView();
    initAnnualReviewView();
    initLineManagementView();

    // Render initial view
    switchTab('dashboard');
});
