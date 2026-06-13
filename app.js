/* --------------------------------------------------
   STATE & INITIALIZATION DATA
   -------------------------------------------------- */
let appState = {
    currentUser: 'sarah_jenkins',
    theme: 'dark',
    cpdCalendar: [
        {
            id: 'e1',
            title: 'Leicester High School Annual Pedagogy Conference',
            date: '2026-09-03',
            time: '09:00 - 15:30',
            location: 'Main Hall',
            description: 'Keynote speakers on cognitive load theory, retrieval spacing practice, and interactive science simulations.',
            type: 'Conference',
            targetGroup: 'all',
            required: true,
            rsvps: ['sarah_jenkins', 'emily_higgins', 'david_davis', 'james_carter']
        },
        {
            id: 'e2',
            title: 'Safeguarding & Welfare Autumn Update',
            date: '2026-09-10',
            time: '16:00 - 17:30',
            location: 'Staff Room / Zoom',
            description: 'Mandatory annual DSL safeguarding refresher training, KCSIE updates, and student mental health referral pathways.',
            type: 'Workshop',
            targetGroup: 'all',
            required: true,
            rsvps: ['sarah_jenkins']
        },
        {
            id: 'e3',
            title: 'Early Years Foundation Stage (EYFS) Play Pedagogy',
            date: '2026-09-18',
            time: '14:00 - 16:00',
            location: 'Junior School Nursery',
            description: 'Refining assessment indicators during child-led play activities in early years learning.',
            type: 'Workshop',
            targetGroup: 'junior',
            required: true,
            rsvps: []
        },
        {
            id: 'e4',
            title: 'Finance & Compliance Procedures Briefing',
            date: '2026-09-24',
            time: '10:00 - 11:30',
            location: 'Bursary Boardroom',
            description: 'Compliance checks for procurement, invoice approvals, and internal audit preparations.',
            type: 'Briefing',
            targetGroup: 'support',
            required: true,
            rsvps: []
        }
    ],
    cpdArticles: [
        {
            id: 'art1',
            title: 'Implementing Retrieval Practice: Beyond the Five-Question Starter',
            category: 'Pedagogy',
            readingTime: 6,
            publishedDate: '2026-06-10',
            author: 'Mrs. C Wagner-Lees',
            summary: 'Practical guide to designing spaced retrieval practice activities and tracking knowledge retention over terms.',
            content: 'Retrieval practice is one of the most robust learning principles in educational psychology. However, simply using a 5-question starter is only the beginning. To truly exploit this, we must ensure spacing—testing material learned 1 week, 1 month, and 1 term ago. Teachers should design question blocks that draw from past units, ensuring students are forced to retrieve older information rather than relying on short-term memory cache.',
            targetGroup: 'all',
            reads: ['sarah_jenkins']
        },
        {
            id: 'art2',
            title: 'A Leaders Guide to GROW Model Coaching Conversations',
            category: 'Leadership',
            readingTime: 8,
            publishedDate: '2026-06-12',
            author: 'Mrs. S Rastall',
            summary: 'How middle leaders can use the GROW framework to facilitate self-directed improvement during peer observations.',
            content: 'The GROW model (Goal, Reality, Options, Will) is designed to empower the coachee, not the coach. During observations, avoid simply giving feedback. Instead, ask: "What did you set out to achieve? What actually happened? What options did you consider? What are your concrete commitments next week?" This shift ensures staff take ownership of their professional growth.',
            targetGroup: 'senior',
            reads: []
        }
    ],
    cpdQuestions: [
        {
            id: 'q1',
            text: 'How confident do you feel applying cognitive load theory to slide designs?',
            type: 'scale',
            targetGroup: 'all',
            publishedDate: '2026-06-13',
            options: ['1 - Not Confident', '2', '3', '4', '5 - Extremely Confident'],
            responses: [
                { staffId: 'david_davis', staffName: 'Mr. David Davis', answer: '4' },
                { staffId: 'james_carter', staffName: 'Mr. James Carter', answer: '3' },
                { staffId: 'emily_higgins', staffName: 'Miss Emily Higgins', answer: '5' }
            ]
        },
        {
            id: 'q2',
            text: 'What is your primary training need for the upcoming academic year?',
            type: 'text',
            targetGroup: 'all',
            publishedDate: '2026-06-13',
            responses: [
                { staffId: 'david_davis', staffName: 'Mr. David Davis', answer: 'Developing interactive simulation models for chemistry lab rates of reaction.' },
                { staffId: 'james_carter', staffName: 'Mr. James Carter', answer: 'Server safety administration and asset tracking software updates.' }
            ]
        }
    ],
    upcomingCpd: [
        {
            id: 'c1',
            title: 'CLEAPSS Radiation Safety Officer Training',
            type: 'Course',
            provider: 'CLEAPSS',
            hours: 5.0,
            cost: 120,
            date: '2026-06-25',
            linkedStandard: 'Standard 7: Safe Environment',
            description: 'Essential certification for managing school radioactive sources, safety records, and local authority compliance audits.'
        },
        {
            id: 'c2',
            title: 'Differentiating Practical Work in GCSE Chemistry',
            type: 'Workshop',
            provider: 'Royal Society of Chemistry',
            hours: 3.0,
            cost: 45,
            date: '2026-06-30',
            linkedStandard: 'Standard 5: Adapt teaching to needs',
            description: 'Scaffolding complex practical tasks for students with diverse learning needs, including resource modifications and sensory sheets.'
        },
        {
            id: 'c3',
            title: 'GROW Coaching Model in School Environments',
            type: 'Webinar',
            provider: 'Leicester High School Leadership',
            hours: 2.5,
            cost: 0,
            date: '2026-07-02',
            linkedStandard: 'Standard 8: Wider responsibilities',
            description: 'Implementing the Goal-Reality-Options-Will (GROW) framework during peer observations, teacher catch-ups, and student mentoring.'
        }
    ],
    cpdRequests: [
        {
            id: 'r1',
            courseId: 'c2',
            staffName: 'Miss Emily Higgins',
            staffId: 'emily_higgins',
            dateRequested: '2026-06-11',
            status: 'Pending',
            comment: ''
        }
    ],
    observations: [
        {
            id: 'o1',
            observerName: 'Miss Emily Higgins',
            observerId: 'emily_higgins',
            observedName: 'Sarah Jenkins',
            observedId: 'sarah_jenkins',
            date: '2026-05-18',
            classObserved: 'Year 12 Chemistry Lab',
            focusArea: 'Safety briefing compliance and titration setups',
            status: 'Completed',
            growFeedback: {
                goal: 'Ensure all students independently verify glassware safety checklist before titrations.',
                reality: 'Two student groups forgot the safety goggles; titrations were set up quickly but cleanup was slightly cluttered.',
                options: 'Use physical laminated checklist cards placed directly on workstations; run a 1-minute safety quiz before lab access.',
                will: 'Introduce the titration check-cards next Tuesday; evaluate compliance at the next lesson observation.'
            }
        }
    ],
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
        },
        {
            name: 'Mrs. Clara Oswald',
            role: 'Physics Teacher',
            avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
            framework: "Teachers' Standards",
            qualifications: 'BSc Physics (Hons), PGCE',
            skills: 'GCSE Physics, A-Level Physics, Coding, Practical Mechanics',
            jobDescription: 'Teaching KS4-5 Physics classes, coordinating physics Olympiad prep, and managing lab equipment calibration.',
            aspirations: 'Aspirations to coordinate department curriculum innovation and digital learning integrations next year.',
            goals: [
                {
                    title: 'Implement new KS5 Physics practical assessment tracking framework',
                    tag: 'Teaching & Learning',
                    status: 'Active',
                    successCriteria: 'Tracking grid adopted for all KS5 classes; student practical portfolios completed with safety annotations.',
                    evidence: [
                        {
                            date: '2026-02-10',
                            content: 'Developed online tracking spreadsheet and tested with Year 12 Physics class.',
                            link: 'https://docs.google.com/spreadsheets/example_physics',
                            linkLabel: 'Physics CPAC Sheet',
                            isCheckpoint: false
                        }
                    ],
                    managerComment: 'Superb initiative, Clara. This really streamlines our CPAC verification requirements for exam boards.'
                },
                {
                    title: 'Deliver cross-departmental coding and instrumentation workshops',
                    tag: 'Personal Development',
                    status: 'Completed',
                    successCriteria: 'Conducted 3 lunch sessions on Raspberry Pi and Arduino instrumentation; attended by 6 staff members.',
                    evidence: [
                        {
                            date: '2026-01-15',
                            content: 'Completed the third training session on electronics setup and shared resources.',
                            link: 'https://github.com/example_electronics',
                            linkLabel: 'Workshop Assets',
                            isCheckpoint: true
                        }
                    ],
                    managerComment: 'Feedback from colleagues was incredibly positive. It has inspired chemistry and biology teachers to use data logging.'
                }
            ],
            cpd: [
                {
                    activity: 'A-Level Physics Practical Assessment Training',
                    type: 'Course',
                    date: '2025-10-18',
                    hours: 4.5,
                    cost: 120,
                    provider: 'AQA Exam Board',
                    linkedStandard: 'Standard 6: Make accurate and productive use of assessment',
                    linkedGoal: 'Implement new KS5 Physics practical assessment tracking framework',
                    reflection: {
                        learn: 'Learned the specific criteria for passing the Practical Endorsement (CPAC) in AQA Physics.',
                        change: 'Redesigned pre-lab safety questions to ensure students document their planning skills explicitly.',
                        impact: 'Students are demonstrating greater independence during A-level practical setups.',
                        next: 'Audit Year 13 practical folders next half term to verify evidence consistency.'
                    }
                }
            ],
            meetings: [
                {
                    date: '2025-09-08',
                    type: 'Start of Year (Formal)',
                    notes: 'Discussed goals: implementing practical endorsement tracking and running digital instrumentation CPD. Discussed resources.',
                    actions: 'Clara to design the tracker; Sarah to help source budget for Raspberry Pi kits.',
                    support: 'Sarah to seek department budget sign-off from Headmaster.'
                },
                {
                    date: '2026-02-04',
                    type: 'Informal Catch-up',
                    notes: 'Reviewed Raspberry Pi workshop outcomes and Year 12 practical progress. Feedback comments updated.',
                    actions: 'Clara to prepare final audit for Year 13 folders.',
                    support: 'Sarah to arrange cover for Clara to observe a senior examiner.'
                }
            ]
        },
        {
            name: 'Mr. Alan Turing',
            role: 'Computer Science & Science Teacher',
            avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200',
            framework: "Custom Leicester High Model",
            qualifications: 'BSc Computer Science, PGCE Science',
            skills: 'Python Simulations, KS3 Science, Computational Physics',
            jobDescription: 'Teaching GCSE Computer Science and KS3 general science, and leading the Digital Pioneers school club.',
            aspirations: 'Develop cross-curricular software tools to assist department teachers with data analytics.',
            goals: [
                {
                    title: 'Integrate Python simulations into KS4 Physics curriculum',
                    tag: 'Curriculum',
                    status: 'Active',
                    successCriteria: 'Three custom physics interactive models (waves, orbits, energy) built and tested in lessons.',
                    evidence: [
                        {
                            date: '2026-02-28',
                            content: 'Launched orbit model and ran trial with Year 10 physics class.',
                            link: 'https://github.com/example_simulations',
                            linkLabel: 'Physics Orbit Sim',
                            isCheckpoint: false
                        }
                    ],
                    managerComment: 'An outstanding integration of computational thinking into general science lessons, Alan!'
                }
            ],
            cpd: [
                {
                    activity: 'Computational Modelling in Secondary Science',
                    type: 'Webinar',
                    date: '2025-11-12',
                    hours: 6.0,
                    cost: 0,
                    provider: 'Institute of Physics',
                    linkedStandard: 'Standard 4: Continuous professional growth',
                    linkedGoal: 'Integrate Python simulations into KS4 Physics curriculum',
                    reflection: {
                        learn: 'Learned methods to scaffold coding exercises so non-programmers can grasp physical concepts.',
                        change: 'Designed drag-and-drop code blocks for the wave simulation starter task.',
                        impact: 'Lower ability pupils engaged significantly better with wave equations using the visual models.',
                        next: 'Develop a chemistry kinetics simulator next month.'
                    }
                }
            ],
            meetings: [
                {
                    date: '2025-09-11',
                    type: 'Start of Year (Formal)',
                    notes: 'Reviewed role balance between Computer Science and KS3 Science. Set targets for Python models.',
                    actions: 'Alan to prepare waved simulator for November review.',
                    support: 'Sarah to facilitate collaboration with Physics lead.'
                }
            ]
        }
    ],
    veracrossConfig: {
        schoolRoute: '',
        clientId: '',
        clientSecret: '',
        status: 'Unconfigured', // 'Unconfigured', 'Ready', 'Syncing', 'Synced'
        lastSynced: null
    },
    veracrossDb: [
        {
            id: 'david_davis',
            name: 'Mr. David Davis',
            role: 'Chemistry Teacher (Veracross Synced)',
            email: 'd.davis@leicesterhigh.co.uk'
        },
        {
            id: 'emily_higgins',
            name: 'Miss Emily Higgins',
            role: 'Biology Teacher (Veracross Synced)',
            email: 'e.higgins@leicesterhigh.co.uk'
        },
        {
            id: 'james_carter',
            name: 'Mr. James Carter',
            role: 'Science Technician (Veracross Synced)',
            email: 'j.carter@leicesterhigh.co.uk'
        },
        {
            id: 'clara_oswald',
            name: 'Mrs. Clara Oswald',
            role: 'Physics Teacher (Veracross Synced)',
            email: 'c.oswald@leicesterhigh.co.uk'
        },
        {
            id: 'alan_turing',
            name: 'Mr. Alan Turing',
            role: 'Computer Science Lead (Veracross Synced)',
            email: 'a.turing@leicesterhigh.co.uk'
        },
        {
            id: 'rosalind_franklin',
            name: 'Dr. Rosalind Franklin',
            role: 'Biophysics Teacher & KS5 Coordinator',
            email: 'r.franklin@leicesterhigh.co.uk',
            avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
            framework: "Teachers' Standards",
            qualifications: 'PhD Biophysics, PGCE Secondary Science',
            skills: 'Biophysics research, X-ray crystallography simulation, KS5 Biology',
            jobDescription: 'Teach A-Level biology and biophysics seminars; coordinate KS5 department assessments.',
            aspirations: 'Transition to Biophysics Curriculum Coordinator next cycle.',
            goals: [
                {
                    title: 'Establish X-ray crystallography simulation models for A-Level Biophysics modules',
                    tag: 'Curriculum',
                    status: 'Active',
                    successCriteria: 'Three web models tested with Year 13 pupils; assessment averages show 10% gain in structural chemistry understanding.',
                    evidence: [],
                    managerComment: ''
                }
            ],
            cpd: [
                {
                    activity: 'Biophysics and Structural Biology Inset',
                    type: 'School CPD',
                    date: '2025-10-10',
                    hours: 4.0,
                    cost: 0,
                    provider: 'Leicester High School Science Dept',
                    linkedStandard: 'Standard 3: Demonstrate good subject and curriculum knowledge',
                    linkedGoal: 'Establish X-ray crystallography simulation models for A-Level Biophysics modules',
                    reflection: {
                        learn: 'Explored A-level Biophysics syllabus structures and exam board guidelines.',
                        change: 'Redesigned structural chemistry visual aids.',
                        impact: 'Pupils report higher comprehension on molecular geometry models.',
                        next: 'Draft simulation handouts for secondary groups.'
                    }
                }
            ],
            meetings: [
                {
                    date: '2025-09-12',
                    type: 'Start of Year (Formal)',
                    notes: 'Rosalind joins the department. Discussed biophysics module alignment and set A-level simulator targets.',
                    actions: 'Rosalind to setup the visual crystallography models by mid-spring.',
                    support: 'Sarah Jenkins to assist with lab server access requests.'
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

const defaultConstanzePortfolio = {
    profile: {
        name: 'Mrs. C Wagner-Lees',
        role: 'Deputy Head & CPD Leader',
        framework: 'Leadership Standards',
        manager: 'Mr. J Partridge (Headteacher)',
        jobDescription: 'Oversee school curriculum, lead CPD strategy and coaching systems, line manage middle leaders, and teach social sciences.',
        aspirations: 'Continue to enhance school-wide professional development and prepare for headship.',
        qualifications: 'MA Education, NPQH, PGCE History & Social Sciences',
        skills: 'CPD Coordination, Leadership Development, GROW Model Coaching, Curriculum Design'
    },
    goals: [
        {
            title: 'Establish a collaborative school-wide CPD Leadership Hub',
            tag: 'Leadership',
            status: 'Active',
            successCriteria: 'Launch interactive portal, aggregate staff survey feedback, and coordinate co-leaders (Sarah R, Sarah D, Stef S).',
            evidence: [
                {
                    date: '2026-06-13',
                    content: 'Created the digital CPD portal and published initial pedagogy calendar events and readings.',
                    link: '',
                    linkLabel: '',
                    isCheckpoint: false
                }
            ],
            managerComment: 'Great progress on the digital hub, Constanze. This will greatly improve alignment.'
        }
    ],
    cpd: [
        {
            activity: 'National CPD Leaders Summit',
            type: 'Conference',
            date: '2026-05-10',
            hours: 6.0,
            cost: 150,
            provider: 'CPD Leadership UK',
            linkedStandard: 'Domain Domain 3: Staff Development & Coaching (Growth framework, peer learning)',
            linkedGoal: 'Establish a collaborative school-wide CPD Leadership Hub',
            reflection: {
                learn: 'Explored peer-to-peer coaching models and digital platform tools.',
                change: 'Planned the online integration for Leicester High CPD tracking.',
                impact: 'Helped draft the requirements for our digital portfolios.',
                next: 'Launch the staff survey to assess school training needs.'
            }
        }
    ],
    journal: [
        {
            id: 'j1',
            date: '2026-06-13',
            answers: {
                reflection: 'The digital CPD platform is now online and ready for staff testing.',
                impact: 'Staff can now log CPD and complete surveys in real-time, reducing admin overhead.',
                practice: 'Refined our training evaluation feedback loop using a 1-5 scale.',
                contribution: 'Collaborated with Stef, Sarah D, and Sarah R to design the system.',
                growth: 'Learned about digital interactive charts integration.',
                support: 'Will need feedback from the Senior Leadership Team.'
            }
        }
    ]
};

const defaultEmilyPortfolio = {
    profile: {
        name: 'Miss Emily Higgins',
        role: 'Biology Teacher',
        framework: "Teachers' Standards",
        manager: 'Sarah Jenkins (Head of Science)',
        jobDescription: 'Teach KS3-5 Biology classes, coordinate eco-club, and maintain greenhouse lab equipment.',
        aspirations: 'Become KS3 Science Coordinator next year.',
        qualifications: 'BSc Biology, PGCE Secondary Science',
        skills: 'GCSE Biology, A-Level Biology, Ecology, Greenhouse Management'
    },
    goals: [
        {
            title: 'Enhance GCSE Biology student confidence in genetics problems',
            tag: 'Student Outcomes',
            status: 'Active',
            successCriteria: 'Genetics exam section scores increase by 10% on average; students demonstrate high confidence in homework logs.',
            evidence: [
                {
                    date: '2026-02-15',
                    content: 'Distributed Punnett square cheat-sheets and ran 3 practice sessions.',
                    link: '',
                    linkLabel: '',
                    isCheckpoint: false
                }
            ],
            managerComment: 'Laminated cards look great, Emily. Keep a close eye on understanding of recessive alleles.'
        }
    ],
    cpd: [
        {
            activity: 'A-Level Biology Genetic Engineering Update',
            type: 'Webinar',
            date: '2025-11-20',
            hours: 2.0,
            cost: 0,
            provider: 'Stem Learning',
            linkedStandard: 'Standard 3: Demonstrate good subject and curriculum knowledge',
            linkedGoal: 'Enhance GCSE Biology student confidence in genetics problems',
            reflection: {
                learn: 'Learned the latest CRISPR techniques and curriculum application updates.',
                change: 'Created a classroom poster detailing gene therapy stages.',
                impact: 'A-Level biology group was highly engaged and scored full marks on subsequent tests.',
                next: 'Invite a university guest lecturer for KS5 group observation.'
            }
        }
    ],
    journal: [
        {
            id: 'j1',
            date: '2026-01-20',
            answers: {
                reflection: 'Genetics unit has started well; pupils are adapting to Punnett squares.',
                impact: 'Lower ability groups benefit significantly from physical color-coded alleles.',
                practice: 'Improved my explanations of codominance and sex-linked traits.',
                contribution: 'Shared the physical allele model with other science teachers.',
                growth: 'Refined my pedagogical questioning strategies for complex genetics logic.',
                support: 'Would love some department budget for genetic modeling kits.'
            }
        }
    ]
};

function syncStateReferences() {
    if (!appState.portfolios) {
        appState.portfolios = {
            sarah_jenkins: {
                profile: appState.profile,
                goals: appState.goals,
                cpd: appState.cpd,
                journal: appState.journal
            },
            emily_higgins: JSON.parse(JSON.stringify(defaultEmilyPortfolio)),
            constanze_wagner: JSON.parse(JSON.stringify(defaultConstanzePortfolio))
        };
    }
    
    // Ensure Constanze is initialized in existing portfolios (from localStorage cache)
    if (!appState.portfolios.constanze_wagner) {
        appState.portfolios.constanze_wagner = JSON.parse(JSON.stringify(defaultConstanzePortfolio));
    }
    
    // Bind active references
    appState.profile = appState.portfolios[appState.currentUser].profile;
    appState.goals = appState.portfolios[appState.currentUser].goals;
    appState.cpd = appState.portfolios[appState.currentUser].cpd;
    appState.journal = appState.portfolios[appState.currentUser].journal;
    
    // Sync Emily direct report to her portfolio
    if (appState.directReports && appState.directReports.length > 1) {
        appState.directReports[1].goals = appState.portfolios.emily_higgins.goals;
        appState.directReports[1].cpd = appState.portfolios.emily_higgins.cpd;
    }
}

function switchSimulatedRole(roleId) {
    appState.currentUser = roleId;
    syncStateReferences();
    saveState();

    // Update simulator dropdown selection
    const simulatorSelect = document.getElementById('role-simulator');
    if (simulatorSelect) {
        simulatorSelect.value = roleId;
    }

    // Update sidebar profile card details
    const sidebarName = document.getElementById('sidebar-name');
    const sidebarRole = document.getElementById('sidebar-role');
    const sidebarAvatar = document.getElementById('sidebar-avatar');

    const lmBtn = document.getElementById('nav-line-management');
    const ocBtn = document.getElementById('nav-org-chart');
    const cpdLeaderLi = document.getElementById('menu-cpd-leader');

    if (roleId === 'constanze_wagner') {
        if (sidebarName) sidebarName.textContent = 'Mrs. C Wagner-Lees';
        if (sidebarRole) sidebarRole.textContent = 'Deputy Head & CPD Leader';
        if (sidebarAvatar) sidebarAvatar.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200';
        
        if (lmBtn) lmBtn.parentElement.style.display = 'block';
        if (ocBtn) ocBtn.parentElement.style.display = 'block';
        if (cpdLeaderLi) cpdLeaderLi.style.display = 'block';
    } else if (roleId === 'emily_higgins') {
        if (sidebarName) sidebarName.textContent = 'Emily Higgins';
        if (sidebarRole) sidebarRole.textContent = 'Biology Teacher';
        if (sidebarAvatar) sidebarAvatar.src = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200';
        
        if (lmBtn) lmBtn.parentElement.style.display = 'none';
        if (ocBtn) ocBtn.parentElement.style.display = 'none';
        if (cpdLeaderLi) cpdLeaderLi.style.display = 'none';
    } else {
        if (sidebarName) sidebarName.textContent = 'Sarah Jenkins';
        if (sidebarRole) sidebarRole.textContent = 'Head of Science & Chemistry Teacher';
        if (sidebarAvatar) sidebarAvatar.src = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200';
        
        if (lmBtn) lmBtn.parentElement.style.display = 'block';
        if (ocBtn) ocBtn.parentElement.style.display = 'block';
        if (cpdLeaderLi) cpdLeaderLi.style.display = 'none';
    }

    // Refresh current view or redirect if the active view is now hidden
    const activeBtn = document.querySelector('.nav-btn.active');
    if (activeBtn) {
        const activeTab = activeBtn.getAttribute('data-tab');
        if (roleId === 'emily_higgins' && (activeTab === 'line-management' || activeTab === 'org-chart' || activeTab === 'cpd-leader')) {
            switchTab('dashboard');
            return;
        }
        if (roleId === 'sarah_jenkins' && activeTab === 'cpd-leader') {
            switchTab('dashboard');
            return;
        }
        if (activeTab) switchTab(activeTab);
    }
}

/* --------------------------------------------------
   LOAD AND SAVE OPERATIONS (LocalStorage)
   -------------------------------------------------- */
function loadState() {
    const saved = localStorage.getItem('growth_portfolio_state');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            if (parsed) {
                if (parsed.profile) appState.profile = parsed.profile;
                if (parsed.goals) appState.goals = parsed.goals;
                if (parsed.journal) appState.journal = parsed.journal;
                if (parsed.cpd) appState.cpd = parsed.cpd;
                if (parsed.theme) appState.theme = parsed.theme;
                if (parsed.currentUser) appState.currentUser = parsed.currentUser;
                if (parsed.upcomingCpd) appState.upcomingCpd = parsed.upcomingCpd;
                if (parsed.cpdRequests) appState.cpdRequests = parsed.cpdRequests;
                if (parsed.observations) appState.observations = parsed.observations;
                if (parsed.portfolios) appState.portfolios = parsed.portfolios;
                if (parsed.veracrossConfig) appState.veracrossConfig = parsed.veracrossConfig;
                if (parsed.veracrossDb) appState.veracrossDb = parsed.veracrossDb;
                if (parsed.cpdCalendar) appState.cpdCalendar = parsed.cpdCalendar;
                if (parsed.cpdArticles) appState.cpdArticles = parsed.cpdArticles;
                if (parsed.cpdQuestions) appState.cpdQuestions = parsed.cpdQuestions;
                
                // Keep default directReports if they are not in the saved state
                if (parsed.directReports && parsed.directReports.length > 0) {
                    appState.directReports = parsed.directReports;
                }
            }
        } catch (e) {
            console.error("Failed to parse saved state", e);
        }
    }
    syncStateReferences();
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
            'line-management': 'Line Management Dashboard',
            'org-chart': 'School Organisation Chart',
            'cpd-leader': 'CPD & L&D Leadership Hub'
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
    if (tabId === 'journal') {
        const obsTab = document.getElementById('journal-tab-observations');
        const surveyTab = document.getElementById('journal-tab-surveys');
        if (obsTab && obsTab.classList.contains('active')) {
            populateColleagueSelect();
            renderObservations();
        } else if (surveyTab && surveyTab.classList.contains('active')) {
            renderStaffSurveys();
        } else {
            renderJournal();
        }
    }
    if (tabId === 'cpd') {
        populateCpdDropdowns();
        renderCpd();
    }
    if (tabId === 'timeline') renderTimeline();
    if (tabId === 'line-management') renderLineManagement();
    if (tabId === 'org-chart') renderOrgChart();
    if (tabId === 'cpd-leader') renderCpdLeaderHub();

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
    renderStaffCpdInteractions();
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

    renderUpcomingCpd();
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

    // Aggregate Completed Peer Observations
    appState.observations.forEach(obs => {
        if (obs.status === 'Completed') {
            if (obs.observerId === appState.currentUser) {
                timeline.push({
                    date: obs.date,
                    title: `Conducted Peer Observation of ${obs.observedName}`,
                    label: `Peer Observation (Observer)`,
                    content: `
                        <p><strong>Class:</strong> ${obs.classObserved}</p>
                        <p><strong>Focus:</strong> ${obs.focusArea}</p>
                        <p><strong>GROW Reflection:</strong> G: "${obs.growFeedback.goal.substring(0, 80)}...", W: "${obs.growFeedback.will.substring(0, 80)}..."</p>
                    `,
                    source: 'observation'
                });
            } else if (obs.observedId === appState.currentUser) {
                timeline.push({
                    date: obs.date,
                    title: `Observed by Colleague: ${obs.observerName}`,
                    label: `Peer Observation (Observed)`,
                    content: `
                        <p><strong>Class:</strong> ${obs.classObserved}</p>
                        <p><strong>Focus:</strong> ${obs.focusArea}</p>
                        <p><strong>Feedback Received (GROW):</strong> G: "${obs.growFeedback.goal.substring(0, 80)}...", W: "${obs.growFeedback.will.substring(0, 80)}..."</p>
                    `,
                    source: 'observation'
                });
            }
        }
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
        if (timelineFilter === 'reflections') return item.source === 'journal' || item.source === 'observation';
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
        } else if (item.source === 'observation') {
            nodeClass = 'node-observation';
            iconSvg = `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>`;
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
                            <h3>${r.name}${appState.veracrossConfig && appState.veracrossConfig.status === 'Synced' ? `<span style="display:inline-flex; align-items:center; justify-content:center; width:14px; height:14px; background:#10b981; color:white; font-size:9px; font-weight:bold; border-radius:50%; margin-left:6px; vertical-align:middle;" title="Synced with Veracross">✓</span>` : ''}</h3>
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

    renderCpdApprovals();
    renderVeracrossPanel();
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

/* --------------------------------------------------
   ORGANISATION CHART GENERATOR
   -------------------------------------------------- */
const orgChartData = {
    name: "Mr. J Partridge",
    role: "Headteacher",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=120",
    dept: "leadership",
    reports: [
        {
            name: "Mrs. C Wagner-Lees",
            role: "Deputy Head",
            avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120",
            dept: "leadership",
            reports: [
                {
                    name: "Mrs. S Rastall",
                    role: "SENDCo & Learning Development",
                    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120",
                    dept: "support",
                    reports: [
                        { name: "Mrs. F Ptohopoulos", role: "Food Technician", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=120", dept: "support" }
                    ]
                },
                {
                    name: "Mrs. J Wallis",
                    role: "Head of English",
                    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120",
                    dept: "english",
                    reports: [
                        { name: "Mrs. A Umerji", role: "English Teacher [Temp]", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=120", dept: "english" },
                        { name: "Dr. N Taylor", role: "English Teacher [Temp]", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120", dept: "english" }
                    ]
                },
                { name: "Miss. R Proctor", role: "Head of Music, Y8 & Y9 Head", avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=120", dept: "humanities" },
                {
                    name: "Mr. A Newell",
                    role: "Head of Maths & Careers",
                    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120",
                    dept: "maths",
                    reports: [
                        { name: "Dr. Z Washington", role: "Maths Teacher & Timetabler", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120", dept: "maths" },
                        { name: "Miss. C Taylor", role: "Maths Teacher", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=120", dept: "maths" }
                    ]
                },
                { name: "Mr. D Ingram", role: "Head of RE", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=120", dept: "humanities" },
                { name: "Mrs. Y Chan", role: "Examinations Officer", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=120", dept: "support" },
                { name: "Mrs. S Timms", role: "Resources Assistant & Cover", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120", dept: "support" }
            ]
        },
        {
            name: "Ms. S Shaw",
            role: "School Bursar",
            avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120",
            dept: "leadership",
            reports: [
                { name: "Mrs. K Allen", role: "School Accountant", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120", dept: "support" },
                { name: "Mrs. F Mulla", role: "Finance Officer", avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=120", dept: "support" },
                { name: "Ms. K Kotadia", role: "Admin & Data Officer", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120", dept: "support" },
                { name: "Mr. T Fage", role: "Network Manager", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120", dept: "support" },
                { name: "Miss. R Hansrod", role: "Late Supervision & Cleaner", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=120", dept: "support" },
                { name: "Mrs. R Buswell", role: "Late Supervision Specialist", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120", dept: "support" },
                {
                    name: "Mr. D Parmar",
                    role: "Site Manager",
                    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120",
                    dept: "support",
                    reports: [
                        { name: "Mr. G Neary", role: "Premises Officer", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=120", dept: "support" },
                        { name: "Mr. M Panter", role: "Premises Officer", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120", dept: "support" },
                        { name: "Mr. P Dunn", role: "Groundsman", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120", dept: "support" },
                        { name: "Mr. A Clay", role: "Security & Cleaner", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=120", dept: "support" },
                        { name: "Mr. A Mensak", role: "Site Cleaner", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120", dept: "support" },
                        { name: "Mrs. D Mensak", role: "Site Cleaner", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120", dept: "support" },
                        { name: "Mrs. D Patel", role: "Site Cleaner", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120", dept: "support" },
                        { name: "Mrs. Diane Allsop", role: "Site Cleaner", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=120", dept: "support" },
                        { name: "Mrs. S Patel", role: "Site Cleaner", avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=120", dept: "support" },
                        { name: "Mrs. D Kaur", role: "Site Cleaner", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120", dept: "support" },
                        { name: "Ms. G Mann", role: "Site Cleaner", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=120", dept: "support" },
                        { name: "Mr. Bharat Kava", role: "Site Cleaner", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120", dept: "support" },
                        { name: "Manjulaben Patel", role: "Site Staff", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=120", dept: "support" },
                        { name: "Ivor Frank", role: "Site Staff", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120", dept: "support" }
                    ]
                }
            ]
        },
        {
            name: "Mrs. S Davies",
            role: "Head of Juniors",
            avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=120",
            dept: "leadership",
            reports: [
                {
                    name: "Mrs. L Heywood",
                    role: "Head of EYFS & Highly Able",
                    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120",
                    dept: "juniors",
                    reports: [
                        { name: "Mrs. J Jethwa", role: "EYFS Lead, BSC Manager", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120", dept: "juniors" },
                        { name: "Mrs. X Ma", role: "EYFS Support Practitioner", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=120", dept: "juniors" },
                        { name: "Mrs. R Dye", role: "EYFS Support Practitioner", avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=120", dept: "juniors" },
                        { name: "Mrs. J Solanki", role: "EYFS Support Practitioner", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120", dept: "juniors" }
                    ]
                },
                {
                    name: "Mrs. P Gascoigne",
                    role: "Assistant Head [Juniors] & Pastoral",
                    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120",
                    dept: "juniors",
                    reports: [
                        { name: "Mrs. L Dunn", role: "EYFS Support Practitioner", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120", dept: "juniors" },
                        { name: "Miss. C Loomes", role: "EYFS Support Practitioner", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=120", dept: "juniors" }
                    ]
                },
                { name: "Mrs. C Dryland", role: "Junior Teacher & Culture Lead", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=120", dept: "juniors" },
                { name: "Miss. F Wood", role: "Junior Teacher & STEM Lead", avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=120", dept: "juniors" },
                { name: "Mrs. S Neuberg", role: "Junior Teacher & Global Lead", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120", dept: "juniors" },
                { name: "Miss. E Stell", role: "Junior Teacher & Arts Lead", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=120", dept: "juniors" },
                { name: "Mrs. M Singh", role: "Junior Admin Officer", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120", dept: "support" }
            ]
        },
        {
            name: "Mr. M Ryman",
            role: "Sixth Form Director & Social Science",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120",
            dept: "leadership",
            reports: [
                { name: "Mrs. K Haresign", role: "Head of Geography & Business", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120", dept: "humanities" },
                {
                    name: "Miss. A Paul",
                    role: "Head of History",
                    avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=120",
                    dept: "humanities",
                    reports: [
                        { name: "Mrs. F Lodder", role: "History Teacher & EPQ Lead", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120", dept: "humanities" }
                    ]
                }
            ]
        },
        {
            name: "Mrs. J Rose",
            role: "Assistant Head & Drama",
            avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120",
            dept: "leadership",
            reports: [
                {
                    name: "Mrs. A Corcoran",
                    role: "Head of PE",
                    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=120",
                    dept: "humanities",
                    reports: [
                        { name: "Mr. S Tratt", role: "Sports Coach", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120", dept: "humanities" }
                    ]
                },
                {
                    name: "Mrs. N Vicente Lorente",
                    role: "Head of MFL & Y7 Transition",
                    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120",
                    dept: "mfl",
                    reports: [
                        { name: "Mrs. G Wheeler", role: "MFL Teacher", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=120", dept: "mfl" }
                    ]
                }
            ]
        },
        {
            name: "Mr. A McMurray",
            role: "Head of Science & Assistant Head",
            avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=120",
            dept: "leadership",
            reports: [
                { name: "Mr. B Ahmed", role: "Computing Teacher in Charge", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120", dept: "maths" },
                {
                    name: "Mr. A Rose",
                    role: "Head of Art",
                    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120",
                    dept: "humanities",
                    reports: [
                        { name: "Mrs. Z Ravat", role: "Art Technician", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=120", dept: "support" }
                    ]
                },
                { name: "Mrs. J Whalley", role: "Head of Food", avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=120", dept: "humanities" },
                { name: "Mrs. H Rai", role: "Biology Lead", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120", dept: "science" },
                { name: "Mrs. K Greenwood", role: "Chemistry Lead & Houses", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=120", dept: "science" },
                { name: "Miss. E Tyler", role: "Science Teacher & Enterprise", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120", dept: "science" },
                { name: "Mrs. T Johnson", role: "Senior Science Lab Tech", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120", dept: "support" }
            ]
        },
        {
            name: "Mrs. J Wright",
            role: "Assistant Head & DSL Welfare",
            avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=120",
            dept: "leadership",
            reports: [
                { name: "Miss. E Ikin", role: "Head of PSHCE", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120", dept: "humanities" }
            ]
        },
        { name: "Miss. L Burbeck", role: "Head of Marketing", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120", dept: "support" },
        { name: "Mrs. K Sheikh", role: "Compliance & HR Manager", avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=120", dept: "support" },
        { name: "Mr. A McGoff", role: "Admissions & Student Lifecycle", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120", dept: "support" }
    ]
};

// Interactive Org Chart collapsing state
const collapsedOrgNodes = new Set([
    "Mrs. S Rastall",
    "Mrs. J Wallis",
    "Mr. A Newell",
    "Mr. D Parmar",
    "Mrs. L Heywood",
    "Mrs. P Gascoigne",
    "Miss. A Paul",
    "Mrs. A Corcoran",
    "Mrs. N Vicente Lorente",
    "Mr. A Rose"
]);

function toggleOrgNode(nodeName) {
    if (collapsedOrgNodes.has(nodeName)) {
        collapsedOrgNodes.delete(nodeName);
    } else {
        collapsedOrgNodes.add(nodeName);
    }
    renderOrgChart();
}
window.toggleOrgNode = toggleOrgNode;

function expandOrgToLevel(maxLevel) {
    collapsedOrgNodes.clear();
    
    function traverse(node, currentLevel) {
        const hasReports = node.reports && node.reports.length > 0;
        if (hasReports) {
            if (currentLevel >= maxLevel) {
                collapsedOrgNodes.add(node.name);
            }
            node.reports.forEach(child => {
                traverse(child, currentLevel + 1);
            });
        }
    }
    
    traverse(orgChartData, 1);
    renderOrgChart();
}
window.expandOrgToLevel = expandOrgToLevel;

function expandAllOrgNodes() {
    collapsedOrgNodes.clear();
    renderOrgChart();
}
window.expandAllOrgNodes = expandAllOrgNodes;

function collapseAllOrgNodes() {
    collapsedOrgNodes.clear();
    function traverse(node) {
        if (node.reports && node.reports.length > 0) {
            collapsedOrgNodes.add(node.name);
            node.reports.forEach(traverse);
        }
    }
    traverse(orgChartData);
    renderOrgChart();
}
window.collapseAllOrgNodes = collapseAllOrgNodes;

function renderOrgChart() {
    const container = document.getElementById('org-chart-container');
    if (!container) return;
    
    function buildNodeHtml(node) {
        const hasReports = node.reports && node.reports.length > 0;
        const isCollapsed = hasReports && collapsedOrgNodes.has(node.name);
        
        let html = `<li class="${isCollapsed ? 'org-collapsed' : ''}">`;
        
        let cardClass = "org-node-card";
        if (hasReports) {
            cardClass += " org-node-has-reports";
        }
        
        html += `
            <div class="${cardClass}" ${hasReports ? `onclick="toggleOrgNode('${node.name.replace(/'/g, "\\'")}')" style="cursor: pointer;"` : ''}>
                <img class="org-node-avatar" src="${node.avatar}" alt="${node.name}">
                <div class="org-node-name">${node.name}</div>
                <div class="org-node-role">${node.role}</div>
                <span class="org-dept-badge org-dept-${node.dept}">${node.dept.charAt(0).toUpperCase() + node.dept.slice(1)}</span>
                ${hasReports ? `
                    <div class="org-reports-toggle">
                        ${isCollapsed ? `<span>Show ${node.reports.length} reports</span>` : `<span>Hide reports</span>`}
                        <svg class="toggle-icon ${isCollapsed ? '' : 'expanded'}" viewBox="0 0 24 24" width="12" height="12">
                            <path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                        </svg>
                    </div>
                ` : ''}
            </div>
        `;
        
        if (hasReports && !isCollapsed) {
            html += `<ul>`;
            node.reports.forEach(child => {
                html += buildNodeHtml(child);
            });
            html += `</ul>`;
        }
        
        html += `</li>`;
        return html;
    }
    
    container.innerHTML = `
        <div class="org-tree">
            <ul>
                ${buildNodeHtml(orgChartData)}
            </ul>
        </div>
    `;
}

/* --------------------------------------------------
   CPD BOOKING AND MANAGER APPROVAL SYSTEMS
   -------------------------------------------------- */
function renderUpcomingCpd() {
    const listContainer = document.getElementById('cpd-upcoming-list');
    if (!listContainer) return;
    listContainer.innerHTML = '';
    
    appState.upcomingCpd.forEach(course => {
        const userRequest = appState.cpdRequests.find(r => r.courseId === course.id && r.staffId === appState.currentUser);
        
        let buttonHtml = '';
        if (userRequest) {
            if (userRequest.status === 'Pending') {
                buttonHtml = `<button class="btn btn-secondary btn-sm" disabled style="opacity: 0.7; cursor: not-allowed;">Pending Approval</button>`;
            } else if (userRequest.status === 'Approved') {
                buttonHtml = `<button class="btn btn-success btn-sm" disabled style="background-color: var(--success); color: white; cursor: not-allowed;">Booked & Approved</button>`;
            } else if (userRequest.status === 'Declined') {
                buttonHtml = `<span class="tag tag-danger" style="background-color: rgba(239, 68, 68, 0.15); color: var(--danger); padding: 4px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: 600;">Booking Declined</span>`;
            }
        } else {
            buttonHtml = `<button class="btn btn-primary btn-sm btn-iconic" onclick="requestCpdBooking('${course.id}')">
                <svg viewBox="0 0 24 24" width="14" height="14" style="margin-right: 4px;"><path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
                Request Booking
            </button>`;
        }
        
        listContainer.innerHTML += `
            <div class="cpd-upcoming-card" style="background: var(--bg-card); border: 1px solid var(--border-color); padding: 16px; border-radius: var(--radius-md); margin-bottom: 12px; display: flex; justify-content: space-between; align-items: center; gap: 16px; flex-wrap: wrap; transition: transform var(--transition-fast);">
                <div style="flex: 1; min-width: 250px;">
                    <div style="display: flex; gap: 8px; align-items: center;">
                        <span class="tag tag-framework" style="font-size: 0.7rem; padding: 2px 6px; font-weight: 600;">${course.type}</span>
                        <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 500;">${formatDate(course.date)}</span>
                    </div>
                    <h4 style="margin: 6px 0; font-size: 0.95rem; font-weight: 700; color: var(--text-primary);">${course.title}</h4>
                    <p style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 6px;">${course.description}</p>
                    <div style="font-size: 0.75rem; color: var(--text-muted); line-height: 1.4;">
                        Provider: <strong>${course.provider}</strong> &nbsp;|&nbsp; Cost: <strong>${course.cost > 0 ? `£${course.cost}` : 'Free'}</strong> &nbsp;|&nbsp; Hours: <strong>${course.hours} hrs</strong><br>
                        Aligned: <strong>${course.linkedStandard}</strong>
                    </div>
                </div>
                <div>
                    ${buttonHtml}
                </div>
            </div>
        `;
    });
}

function requestCpdBooking(courseId) {
    const alreadyRequested = appState.cpdRequests.find(r => r.courseId === courseId && r.staffId === appState.currentUser);
    if (alreadyRequested) return;
    
    const newRequest = {
        id: 'req_' + Date.now(),
        courseId: courseId,
        staffName: appState.profile.name,
        staffId: appState.currentUser,
        dateRequested: new Date().toISOString().split('T')[0],
        status: 'Pending',
        comment: ''
    };
    
    appState.cpdRequests.push(newRequest);
    saveState();
    
    renderCpd();
}

function renderCpdApprovals() {
    const listContainer = document.getElementById('lm-cpd-requests-list');
    if (!listContainer) return;
    listContainer.innerHTML = '';
    
    const approvalsCard = document.getElementById('lm-cpd-approvals-card');
    if (appState.currentUser !== 'sarah_jenkins') {
        if (approvalsCard) approvalsCard.style.display = 'none';
        return;
    } else {
        if (approvalsCard) approvalsCard.style.display = 'block';
    }
    
    const deptMemberIds = ['david_davis', 'emily_higgins', 'james_carter', 'clara_oswald', 'alan_turing'];
    
    const pendingRequests = appState.cpdRequests.filter(req => 
        req.status === 'Pending' && deptMemberIds.includes(req.staffId)
    );
    
    if (pendingRequests.length === 0) {
        listContainer.innerHTML = '<p style="text-align: center; padding: 24px; color: var(--text-muted); font-style: italic;">No pending training requests at this time.</p>';
        return;
    }
    
    pendingRequests.forEach(req => {
        const course = appState.upcomingCpd.find(c => c.id === req.courseId);
        if (!course) return;
        
        listContainer.innerHTML += `
            <div class="approval-request-card" style="background: var(--bg-card); border: 1px solid var(--border-color); padding: 16px; border-radius: var(--radius-md); margin-bottom: 12px; display: flex; justify-content: space-between; align-items: center; gap: 16px; flex-wrap: wrap;">
                <div style="flex: 1; min-width: 250px;">
                    <div style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 4px;">
                        <strong style="color: var(--text-primary);">${req.staffName}</strong> requested course booking on ${formatDate(req.dateRequested)}
                    </div>
                    <h4 style="margin: 4px 0 6px; font-size: 0.95rem; font-weight: 700; color: var(--primary);">${course.title}</h4>
                    <div style="font-size: 0.75rem; color: var(--text-muted); display: flex; gap: 12px; flex-wrap: wrap;">
                        <span>Provider: <strong>${course.provider}</strong></span>
                        <span>Date: <strong>${formatDate(course.date)}</strong></span>
                        <span>Hours: <strong>${course.hours} hrs</strong></span>
                        <span>Cost: <strong>${course.cost > 0 ? `£${course.cost}` : 'Free'}</strong></span>
                    </div>
                </div>
                <div style="display: flex; gap: 8px;">
                    <button class="btn btn-secondary btn-sm" onclick="processCpdRequest('${req.id}', 'Declined')">Decline</button>
                    <button class="btn btn-primary btn-sm" onclick="processCpdRequest('${req.id}', 'Approved')">Approve</button>
                </div>
            </div>
        `;
    });
}

function processCpdRequest(requestId, status) {
    const req = appState.cpdRequests.find(r => r.id === requestId);
    if (!req) return;
    
    req.status = status;
    
    if (status === 'Approved') {
        const course = appState.upcomingCpd.find(c => c.id === req.courseId);
        if (course) {
            const staffPortfolio = appState.portfolios[req.staffId];
            if (staffPortfolio) {
                const newCpdLog = {
                    activity: course.title,
                    type: course.type,
                    date: course.date,
                    hours: course.hours,
                    cost: course.cost,
                    provider: course.provider,
                    linkedStandard: course.linkedStandard,
                    linkedGoal: 'General L&D',
                    reflection: {
                        learn: `Participated in ${course.provider} training course. Explored standard guidelines and practical applications.`,
                        change: 'Planning implementation in next term courses.',
                        impact: 'Awaiting implementation and department observation review.',
                        next: 'Review with line manager at next catch-up check-in.'
                    }
                };
                staffPortfolio.cpd.unshift(newCpdLog);
                
                if (req.staffId === appState.currentUser) {
                    appState.cpd = staffPortfolio.cpd;
                }
            }
        }
    }
    
    saveState();
    renderLineManagement();
}

/* --------------------------------------------------
   PEER OBSERVATION AND GROW MODEL FEEDBACK SYSTEMS
   -------------------------------------------------- */
function switchJournalSubTab(subTabId) {
    const tabReflections = document.getElementById('journal-tab-reflections');
    const tabObservations = document.getElementById('journal-tab-observations');
    const tabSurveys = document.getElementById('journal-tab-surveys');
    
    if (tabReflections) tabReflections.classList.toggle('active', subTabId === 'reflections');
    if (tabObservations) tabObservations.classList.toggle('active', subTabId === 'observations');
    if (tabSurveys) tabSurveys.classList.toggle('active', subTabId === 'surveys');
    
    const reflectionsContainer = document.getElementById('journal-reflections-container');
    const observationsContainer = document.getElementById('journal-observations-container');
    const surveysContainer = document.getElementById('journal-surveys-container');
    
    if (reflectionsContainer) reflectionsContainer.style.display = subTabId === 'reflections' ? 'flex' : 'none';
    if (observationsContainer) observationsContainer.style.display = subTabId === 'observations' ? 'flex' : 'none';
    if (surveysContainer) surveysContainer.style.display = subTabId === 'surveys' ? 'flex' : 'none';
    
    if (subTabId === 'observations') {
        populateColleagueSelect();
        renderObservations();
    } else if (subTabId === 'surveys') {
        renderStaffSurveys();
    }
}

function populateColleagueSelect() {
    const select = document.getElementById('obs-colleague');
    if (!select) return;
    select.innerHTML = '';
    
    const colleagues = [
        { id: 'sarah_jenkins', name: 'Sarah Jenkins (Chemistry)' },
        { id: 'emily_higgins', name: 'Emily Higgins (Biology)' },
        { id: 'david_davis', name: 'David Davis (Chemistry)' },
        { id: 'clara_oswald', name: 'Clara Oswald (Physics)' },
        { id: 'alan_turing', name: 'Alan Turing (Computer Science)' },
        { id: 'james_carter', name: 'James Carter (Technician)' }
    ];
    
    colleagues.forEach(col => {
        if (col.id !== appState.currentUser) {
            select.innerHTML += `<option value="${col.id}">${col.name}</option>`;
        }
    });
}

function initObservationView() {
    const form = document.getElementById('observation-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const colleagueSelect = document.getElementById('obs-colleague');
            const observedId = colleagueSelect.value;
            const observedName = colleagueSelect.options[colleagueSelect.selectedIndex].text.split(' (')[0];
            
            const date = document.getElementById('obs-date').value;
            const classObserved = document.getElementById('obs-class').value;
            const focusArea = document.getElementById('obs-focus').value;
            
            createObservationRequest(observedId, observedName, date, classObserved, focusArea);
            
            form.reset();
            document.getElementById('obs-date').value = new Date().toISOString().split('T')[0];
        });
    }
    
    const growClose = document.getElementById('observation-grow-modal-close');
    const growCancel = document.getElementById('observation-grow-modal-cancel');
    const growForm = document.getElementById('observation-grow-form');
    
    if (growClose) growClose.addEventListener('click', closeGrowModal);
    if (growCancel) growCancel.addEventListener('click', closeGrowModal);
    
    if (growForm) {
        growForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const obsId = document.getElementById('grow-obs-id').value;
            
            const growNotes = {
                goal: document.getElementById('grow-q-goal').value,
                reality: document.getElementById('grow-q-reality').value,
                options: document.getElementById('grow-q-options').value,
                will: document.getElementById('grow-q-will').value
            };
            
            submitObservationFeedback(obsId, growNotes);
        });
    }
    
    // Set default date to today
    const obsDateInput = document.getElementById('obs-date');
    if (obsDateInput) {
        obsDateInput.value = new Date().toISOString().split('T')[0];
    }
}

function createObservationRequest(observedId, observedName, date, classObserved, focusArea) {
    const newObs = {
        id: 'obs_' + Date.now(),
        observerName: appState.profile.name,
        observerId: appState.currentUser,
        observedName: observedName,
        observedId: observedId,
        date: date,
        classObserved: classObserved,
        focusArea: focusArea,
        status: 'Scheduled',
        growFeedback: null
    };
    
    appState.observations.unshift(newObs);
    saveState();
    renderObservations();
}

function renderObservations() {
    const feed = document.getElementById('observations-feed-list');
    if (!feed) return;
    feed.innerHTML = '';
    
    const myObservations = appState.observations.filter(obs => 
        obs.observerId === appState.currentUser || obs.observedId === appState.currentUser
    );
    
    if (myObservations.length === 0) {
        feed.innerHTML = '<p style="text-align: center; padding: 40px; color: var(--text-muted); font-style: italic;">No peer observations scheduled or logged yet.</p>';
        return;
    }
    
    myObservations.forEach(obs => {
        const isObserver = obs.observerId === appState.currentUser;
        
        let statusBadge = '';
        let actionButtonsHtml = '';
        
        if (obs.status === 'Scheduled') {
            statusBadge = `<span class="tag tag-framework" style="background-color: rgba(59, 130, 246, 0.15); color: #3b82f6;">Scheduled</span>`;
            if (isObserver) {
                actionButtonsHtml = `
                    <div style="margin-top: 12px; text-align: right;">
                        <button class="btn btn-primary btn-sm btn-iconic" onclick="openGrowModal('${obs.id}')">
                            <svg viewBox="0 0 24 24" width="14" height="14" style="margin-right: 4px;"><path fill="currentColor" d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
                            Log GROW Feedback
                        </button>
                    </div>
                `;
            } else {
                actionButtonsHtml = `<div style="margin-top: 10px; font-size: 0.8rem; color: var(--text-muted); font-style: italic;">Waiting for observer feedback logs...</div>`;
            }
        } else {
            statusBadge = `<span class="tag tag-success">Completed</span>`;
        }
        
        let growFeedbackHtml = '';
        if (obs.growFeedback) {
            growFeedbackHtml = `
                <div class="observation-grow-results" style="margin-top: 12px; padding-top: 12px; border-top: 1px dashed var(--border-color); display: grid; gap: 8px;">
                    <div style="font-size: 0.8rem;">
                        <strong style="color: var(--primary);">Goal:</strong> <span style="color: var(--text-secondary);">${obs.growFeedback.goal}</span>
                    </div>
                    <div style="font-size: 0.8rem;">
                        <strong style="color: var(--primary);">Reality:</strong> <span style="color: var(--text-secondary);">${obs.growFeedback.reality}</span>
                    </div>
                    <div style="font-size: 0.8rem;">
                        <strong style="color: var(--primary);">Options:</strong> <span style="color: var(--text-secondary);">${obs.growFeedback.options}</span>
                    </div>
                    <div style="font-size: 0.8rem;">
                        <strong style="color: var(--primary);">Will:</strong> <span style="color: var(--text-secondary);">${obs.growFeedback.will}</span>
                    </div>
                </div>
            `;
        }
        
        feed.innerHTML += `
            <div class="cpd-item-card" style="cursor: default; margin-bottom: 16px;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 8px; width: 100%;">
                    <div style="flex: 1;">
                        <div style="display: flex; gap: 8px; align-items: center; margin-bottom: 4px;">
                            ${statusBadge}
                            <span style="font-size: 0.75rem; color: var(--text-muted);">${formatDate(obs.date)}</span>
                        </div>
                        <h4 class="cpd-item-title" style="margin: 0; font-size: 1rem; color: var(--text-primary);">
                            ${isObserver ? `Observing <strong>${obs.observedName}</strong>` : `Observed by <strong>${obs.observerName}</strong>`}
                        </h4>
                        <div style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 4px;">
                            Class: <strong>${obs.classObserved}</strong> &nbsp;|&nbsp; Focus: <strong>${obs.focusArea}</strong>
                        </div>
                    </div>
                    <div style="text-align: right;">
                        <span class="cpd-item-badge" style="background-color: var(--primary-glow); color: var(--primary); font-size: 0.7rem; font-weight: 600; padding: 2px 6px; border-radius: 4px;">Peer Visit</span>
                    </div>
                </div>
                
                ${growFeedbackHtml}
                ${actionButtonsHtml}
            </div>
        `;
    });
}

function openGrowModal(obsId) {
    const obs = appState.observations.find(o => o.id === obsId);
    if (!obs) return;
    
    document.getElementById('grow-obs-id').value = obsId;
    document.getElementById('grow-observed-name').textContent = obs.observedName;
    document.getElementById('grow-observed-date').textContent = formatDate(obs.date);
    document.getElementById('grow-observed-focus').textContent = obs.focusArea;
    
    document.getElementById('grow-q-goal').value = '';
    document.getElementById('grow-q-reality').value = '';
    document.getElementById('grow-q-options').value = '';
    document.getElementById('grow-q-will').value = '';
    
    document.getElementById('observation-grow-modal').classList.add('active');
}

function closeGrowModal() {
    document.getElementById('observation-grow-modal').classList.remove('active');
}

function submitObservationFeedback(obsId, growNotes) {
    const obs = appState.observations.find(o => o.id === obsId);
    if (!obs) return;
    
    obs.growFeedback = growNotes;
    obs.status = 'Completed';
    
    saveState();
    closeGrowModal();
    renderObservations();
    
    alert("GROW coaching feedback logged and synced successfully! The observation has been recorded to your professional growth timeline.");
}

/* --------------------------------------------------
   VERACROSS DIRECTORY SYNC SYSTEM
   -------------------------------------------------- */
function renderVeracrossPanel() {
    const statusText = document.getElementById('veracross-sync-status');
    const syncButton = document.getElementById('btn-vx-sync');
    
    const config = appState.veracrossConfig || { schoolRoute: '', clientId: '', clientSecret: '', status: 'Unconfigured' };
    
    const routeInput = document.getElementById('vx-school-route');
    const clientIdInput = document.getElementById('vx-client-id');
    const clientSecretInput = document.getElementById('vx-client-secret');
    
    if (routeInput) routeInput.value = config.schoolRoute || '';
    if (clientIdInput) clientIdInput.value = config.clientId || '';
    if (clientSecretInput && config.clientSecret) {
        clientSecretInput.value = config.clientSecret;
    }
    
    if (statusText) {
        statusText.textContent = config.status;
        statusText.className = 'sync-status status-' + config.status.toLowerCase();
        
        if (config.status === 'Unconfigured') {
            statusText.style.background = 'rgba(148, 163, 184, 0.15)';
            statusText.style.color = 'var(--text-secondary)';
        } else if (config.status === 'Ready') {
            statusText.style.background = 'rgba(59, 130, 246, 0.15)';
            statusText.style.color = '#3b82f6';
        } else if (config.status === 'Syncing') {
            statusText.style.background = 'rgba(245, 158, 11, 0.15)';
            statusText.style.color = 'var(--accent)';
        } else if (config.status === 'Synced') {
            statusText.style.background = 'rgba(16, 185, 129, 0.15)';
            statusText.style.color = 'var(--success)';
        }
    }
    
    if (syncButton) {
        syncButton.disabled = (config.status === 'Unconfigured' || config.status === 'Syncing');
    }
}

function saveVeracrossConfig(event) {
    event.preventDefault();
    
    const route = document.getElementById('vx-school-route').value.trim();
    const client = document.getElementById('vx-client-id').value.trim();
    const secret = document.getElementById('vx-client-secret').value.trim();
    
    appState.veracrossConfig = {
        schoolRoute: route,
        clientId: client,
        clientSecret: secret,
        status: 'Ready',
        lastSynced: appState.veracrossConfig ? appState.veracrossConfig.lastSynced : null
    };
    
    saveState();
    renderVeracrossPanel();
    
    const consoleBox = document.getElementById('veracross-terminal-console');
    if (consoleBox) {
        consoleBox.innerHTML = `
            <div style="color: #64748b;">[System] Credentials configured successfully.</div>
            <div style="color: #3b82f6;">[Config] Target OAuth: accounts.veracross.com/oauth/token</div>
            <div style="color: #3b82f6;">[Config] API Route: api.veracross.com/${route}/v3/directory/staff_faculty</div>
            <div style="color: #10b981; font-weight: bold;">[System] System is ready. Click "Sync Directory Now" to establish link.</div>
        `;
    }
}

function runVeracrossSync() {
    const config = appState.veracrossConfig;
    if (!config || config.status === 'Unconfigured' || config.status === 'Syncing') return;
    
    config.status = 'Syncing';
    renderVeracrossPanel();
    
    const consoleBox = document.getElementById('veracross-terminal-console');
    if (!consoleBox) return;
    
    consoleBox.innerHTML = '';
    
    const logs = [
        { time: 0, text: `[Info] Initialising directory sync with Veracross system...`, color: '#64748b' },
        { time: 400, text: `[HTTP] POST https://accounts.veracross.com/oauth/token HTTP/1.1`, color: '#f59e0b' },
        { time: 800, text: `[HTTP] Host: accounts.veracross.com<br>[HTTP] Content-Type: application/x-www-form-urlencoded<br>[HTTP] grant_type=client_credentials&scope=staff_faculty:list`, color: '#94a3b8' },
        { time: 1400, text: `[HTTP] HTTP/1.1 200 OK<br>[HTTP] Content-Type: application/json<br>[HTTP] { "access_token": "vx_token_a9b23f82de801...", "expires_in": 3600 }`, color: '#10b981' },
        { time: 1800, text: `[System] OAuth token generated successfully. Retrieving department directory...`, color: '#10b981' },
        { time: 2200, text: `[HTTP] GET https://api.veracross.com/${config.schoolRoute}/v3/directory/staff_faculty?department=Science HTTP/1.1`, color: '#f59e0b' },
        { time: 2500, text: `[HTTP] Authorization: Bearer vx_token_a9b23f82de801...`, color: '#94a3b8' },
        { time: 3200, text: `[HTTP] HTTP/1.1 200 OK<br>[HTTP] Content-Type: application/json<br>[HTTP] Directory fetch returned 6 staff profiles.`, color: '#10b981' },
        { time: 3700, text: `[Sync] Mapping reporting hierarchy nodes...`, color: '#10b981' },
        { time: 4100, text: `[Sync] Synced matching directory entries: David Davis, Emily Higgins, James Carter, Clara Oswald, Alan Turing.`, color: '#3b82f6' },
        { time: 4500, text: `[Sync] Found 1 new department member: Dr. Rosalind Franklin (Biophysics Teacher). Importing...`, color: '#a855f7' },
        { time: 5000, text: `[Success] Sync complete! Synced 6 staff records successfully. Names and roles updated in local state.`, color: '#10b981' }
    ];
    
    logs.forEach(log => {
        setTimeout(() => {
            consoleBox.innerHTML += `<div style="color: ${log.color};">${log.text}</div>`;
            consoleBox.scrollTop = consoleBox.scrollHeight;
            
            if (log.time === 5000) {
                applyVeracrossDataUpdates();
            }
        }, log.time);
    });
}

function applyVeracrossDataUpdates() {
    appState.veracrossConfig.status = 'Synced';
    appState.veracrossConfig.lastSynced = new Date().toISOString();
    
    appState.directReports.forEach(report => {
        let match = null;
        if (report.name.includes("David Davis")) {
            match = appState.veracrossDb.find(d => d.id === 'david_davis');
        } else if (report.name.includes("Emily Higgins")) {
            match = appState.veracrossDb.find(d => d.id === 'emily_higgins');
        } else if (report.name.includes("James Carter")) {
            match = appState.veracrossDb.find(d => d.id === 'james_carter');
        } else if (report.name.includes("Clara Oswald")) {
            match = appState.veracrossDb.find(d => d.id === 'clara_oswald');
        } else if (report.name.includes("Alan Turing")) {
            match = appState.veracrossDb.find(d => d.id === 'alan_turing');
        }
        
        if (match) {
            report.name = match.name;
            report.role = match.role;
        }
    });
    
    const hasRosalind = appState.directReports.some(r => r.name.includes("Rosalind Franklin"));
    if (!hasRosalind) {
        const rosalindDb = appState.veracrossDb.find(r => r.id === 'rosalind_franklin');
        if (rosalindDb) {
            const newReport = JSON.parse(JSON.stringify(rosalindDb));
            appState.directReports.push(newReport);
            
            if (appState.portfolios) {
                appState.portfolios.rosalind_franklin = {
                    profile: {
                        name: rosalindDb.name,
                        role: rosalindDb.role,
                        framework: rosalindDb.framework,
                        manager: 'Sarah Jenkins (Head of Science)',
                        jobDescription: rosalindDb.jobDescription,
                        aspirations: rosalindDb.aspirations,
                        qualifications: rosalindDb.qualifications,
                        skills: rosalindDb.skills
                    },
                    goals: rosalindDb.goals,
                    cpd: rosalindDb.cpd,
                    journal: []
                };
            }
            
            if (orgChartData && orgChartData.reports) {
                const mcMurrayNode = orgChartData.reports.find(r => r.name.includes("McMurray"));
                if (mcMurrayNode && mcMurrayNode.reports) {
                    const chartList = mcMurrayNode.reports;
                    const hasChartRosalind = chartList.some(r => r.name.includes("Rosalind Franklin"));
                    if (!hasChartRosalind) {
                        chartList.push({
                            name: "Dr. Rosalind Franklin",
                            role: "Biophysics Teacher",
                            avatar: rosalindDb.avatar,
                            dept: "science"
                        });
                    }
                }
            }
        }
    }
    
    saveState();
    renderLineManagement();
    renderVeracrossPanel();
    
    const badge = document.querySelector('.bell-badge');
    if (badge) {
        const currentCount = parseInt(badge.textContent) || 0;
        badge.textContent = currentCount + 1;
        badge.style.display = 'flex';
    }
}

// Global hooks for tab transitions in HTML buttons
window.switchTab = switchTab;
window.requestCpdBooking = requestCpdBooking;
window.processCpdRequest = processCpdRequest;
window.switchJournalSubTab = switchJournalSubTab;
window.openGrowModal = openGrowModal;
window.closeGrowModal = closeGrowModal;
window.openEvidenceModal = openEvidenceModal;
window.editGoal = editGoal;
window.toggleCpdCollapse = toggleCpdCollapse;
window.renderOrgChart = renderOrgChart;
window.switchSimulatedRole = switchSimulatedRole;
window.saveVeracrossConfig = saveVeracrossConfig;
window.runVeracrossSync = runVeracrossSync;
window.renderVeracrossPanel = renderVeracrossPanel;

// Line management hooks
window.openReportDetail = openReportDetail;
window.exitReportDetail = exitReportDetail;
window.switchLmDetailTab = switchLmDetailTab;
window.saveGoalComment = saveGoalComment;
window.openRecordMeeting = openRecordMeeting;
window.exitMeetingsPanel = exitMeetingsPanel;

/* --------------------------------------------------
   CPD LEADERSHIP HUB SYSTEMS (Admin & Staff Views)
   -------------------------------------------------- */
let activeCpdLeaderSubTab = 'events';
function switchCpdLeaderSubTab(subTabId) {
    activeCpdLeaderSubTab = subTabId;
    
    // Toggle active classes on buttons
    const btnEv = document.getElementById('btn-tab-vx-events');
    const btnArt = document.getElementById('btn-tab-vx-articles');
    const btnSurv = document.getElementById('btn-tab-vx-surveys');
    
    if (btnEv) btnEv.classList.toggle('active', subTabId === 'events');
    if (btnArt) btnArt.classList.toggle('active', subTabId === 'articles');
    if (btnSurv) btnSurv.classList.toggle('active', subTabId === 'surveys');
    
    // Toggle active sections
    const secEv = document.getElementById('cpd-leader-view-events');
    const secArt = document.getElementById('cpd-leader-view-articles');
    const secSurv = document.getElementById('cpd-leader-view-surveys');
    
    if (secEv) secEv.style.display = subTabId === 'events' ? 'block' : 'none';
    if (secArt) secArt.style.display = subTabId === 'articles' ? 'block' : 'none';
    if (secSurv) secSurv.style.display = subTabId === 'surveys' ? 'block' : 'none';
    
    renderCpdLeaderHub();
}
window.switchCpdLeaderSubTab = switchCpdLeaderSubTab;

function renderCpdLeaderHub() {
    if (activeCpdLeaderSubTab === 'events') {
        renderCpdAdminEvents();
    } else if (activeCpdLeaderSubTab === 'articles') {
        renderCpdAdminArticles();
    } else if (activeCpdLeaderSubTab === 'surveys') {
        renderCpdAdminSurveys();
    }
}
window.renderCpdLeaderHub = renderCpdLeaderHub;

function renderCpdAdminEvents() {
    const list = document.getElementById('cpd-admin-events-list');
    if (!list) return;
    list.innerHTML = '';
    
    if (!appState.cpdCalendar || appState.cpdCalendar.length === 0) {
        list.innerHTML = `<div style="text-align:center; padding:32px; color:var(--text-muted); font-style:italic;">No published events.</div>`;
        return;
    }
    
    const sorted = [...appState.cpdCalendar].sort((a, b) => new Date(a.date) - new Date(b.date));
    
    sorted.forEach(ev => {
        const targetLabels = {
            'all': 'All Staff',
            'senior': 'Senior Teachers',
            'junior': 'Junior Teachers',
            'support': 'Support Staff'
        };
        const targetLabel = targetLabels[ev.targetGroup] || ev.targetGroup;
        const rsvpCount = ev.rsvps ? ev.rsvps.length : 0;
        
        list.innerHTML += `
            <div class="cpd-upcoming-card" style="background:var(--bg-app); border:1px solid var(--border-color); padding:16px; border-radius:var(--radius-md); display:flex; flex-direction:column; gap:10px; margin-bottom:12px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <div style="display:flex; gap:8px; align-items:center;">
                        <span class="tag tag-framework" style="font-size:0.7rem; padding:2px 6px; font-weight:600;">${ev.type}</span>
                        ${ev.required ? `<span class="tag tag-danger" style="background-color:rgba(239, 68, 68, 0.15); color:var(--danger); border:1px solid rgba(239, 68, 68, 0.2); font-size:0.7rem; padding:2px 6px; font-weight:700;">Required</span>` : ''}
                    </div>
                    <span style="font-size:0.75rem; color:var(--text-muted); font-weight:600;">Target: ${targetLabel}</span>
                </div>
                <h4 style="margin:4px 0 2px; font-size:0.95rem; font-weight:700; color:var(--text-primary);">${ev.title}</h4>
                <p style="font-size:0.8rem; color:var(--text-secondary); margin:0; line-height:1.4;">${ev.description}</p>
                
                <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; border-top:1px solid var(--border-color); padding-top:10px; font-size:0.75rem; color:var(--text-muted);">
                    <div>
                        📅 <strong>${formatDate(ev.date)}</strong> &nbsp;|&nbsp; 🕒 <strong>${ev.time}</strong> &nbsp;|&nbsp; 📍 <strong>${ev.location}</strong>
                    </div>
                    <div style="font-weight:600; color:var(--primary);">
                        👥 ${rsvpCount} RSVP(s) logged
                    </div>
                </div>
            </div>
        `;
    });
}

function renderCpdAdminArticles() {
    const list = document.getElementById('cpd-admin-articles-list');
    if (!list) return;
    list.innerHTML = '';
    
    if (!appState.cpdArticles || appState.cpdArticles.length === 0) {
        list.innerHTML = `<div style="text-align:center; padding:32px; color:var(--text-muted); font-style:italic;">No published readings.</div>`;
        return;
    }
    
    appState.cpdArticles.forEach(art => {
        const targetLabels = {
            'all': 'All Staff',
            'senior': 'Senior Teachers',
            'junior': 'Junior Teachers',
            'support': 'Support Staff'
        };
        const targetLabel = targetLabels[art.targetGroup] || art.targetGroup;
        const readCount = art.reads ? art.reads.length : 0;
        
        list.innerHTML += `
            <div class="cpd-upcoming-card" style="background:var(--bg-app); border:1px solid var(--border-color); padding:16px; border-radius:var(--radius-md); display:flex; flex-direction:column; gap:10px; margin-bottom:12px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span class="tag tag-framework" style="font-size:0.7rem; padding:2px 6px; font-weight:600;">📖 ${art.category}</span>
                    <span style="font-size:0.75rem; color:var(--text-muted); font-weight:600;">Target: ${targetLabel}</span>
                </div>
                <h4 style="margin:4px 0 2px; font-size:0.95rem; font-weight:700; color:var(--text-primary);">${art.title}</h4>
                <p style="font-size:0.8rem; color:var(--text-secondary); margin:0; line-height:1.4;">${art.summary}</p>
                
                <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; border-top:1px solid var(--border-color); padding-top:10px; font-size:0.75rem; color:var(--text-muted);">
                    <div>
                        ✍️ Published by <strong>${art.author}</strong> on ${formatDate(art.publishedDate)} &nbsp;|&nbsp; ⏱️ <strong>${art.readingTime} min read</strong>
                    </div>
                    <div style="font-weight:600; color:var(--primary);">
                        👁️ ${readCount} Read acknowledgements
                    </div>
                </div>
            </div>
        `;
    });
}

function renderCpdAdminSurveys() {
    const list = document.getElementById('cpd-admin-surveys-list');
    if (!list) return;
    list.innerHTML = '';
    
    if (!appState.cpdQuestions || appState.cpdQuestions.length === 0) {
        list.innerHTML = `<div style="text-align:center; padding:32px; color:var(--text-muted); font-style:italic;">No active surveys.</div>`;
        return;
    }
    
    appState.cpdQuestions.forEach(q => {
        const responses = q.responses || [];
        const totalResp = responses.length;
        
        let graphHtml = '';
        let responsesHtml = '';
        
        if (q.type === 'scale') {
            const counts = { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0 };
            let sum = 0;
            responses.forEach(r => {
                const rating = r.answer;
                if (counts[rating] !== undefined) {
                    counts[rating]++;
                    sum += parseInt(rating);
                }
            });
            const avg = totalResp > 0 ? (sum / totalResp).toFixed(1) : '0.0';
            
            graphHtml = `<div style="margin: 12px 0; background:rgba(0,0,0,0.1); padding:12px; border-radius:6px; display:flex; flex-direction:column; gap:8px;">
                <div style="font-weight:700; font-size:0.85rem; color:var(--primary); margin-bottom:4px;">Average Score: ${avg} / 5.0 (${totalResp} responses)</div>`;
            
            for (let i = 5; i >= 1; i--) {
                const count = counts[i.toString()];
                const percent = totalResp > 0 ? (count / totalResp * 100).toFixed(0) : 0;
                graphHtml += `
                    <div style="display:flex; align-items:center; gap:8px; font-size:0.75rem;">
                        <span style="width:14px; font-weight:700; color:var(--text-secondary);">${i}★</span>
                        <div style="flex:1; height:8px; background:var(--border-color); border-radius:4px; overflow:hidden;">
                            <div style="width:${percent}%; height:100%; background:var(--primary); border-radius:4px;"></div>
                        </div>
                        <span style="width:30px; text-align:right; color:var(--text-muted); font-weight:600;">${percent}%</span>
                    </div>
                `;
            }
            graphHtml += `</div>`;
        } else {
            responsesHtml = `<div style="margin-top:10px; display:flex; flex-direction:column; gap:8px; max-height:200px; overflow-y:auto; padding-right:4px;">`;
            if (responses.length === 0) {
                responsesHtml += `<div style="font-size:0.75rem; color:var(--text-muted); font-style:italic;">No text responses yet.</div>`;
            } else {
                responses.forEach(r => {
                    responsesHtml += `
                        <div style="background:rgba(0,0,0,0.1); border-left:3px solid var(--primary); padding:8px 12px; border-radius:0 6px 6px 0; font-size:0.75rem;">
                            <div style="font-weight:700; color:var(--text-primary); margin-bottom:2px;">${r.staffName}</div>
                            <div style="color:var(--text-secondary); line-height:1.4;">"${r.answer}"</div>
                        </div>
                    `;
                });
            }
            responsesHtml += `</div>`;
        }
        
        list.innerHTML += `
            <div style="background:var(--bg-app); border:1px solid var(--border-color); padding:16px; border-radius:var(--radius-md); display:flex; flex-direction:column; margin-bottom:16px;">
                <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.7rem; color:var(--text-muted); margin-bottom:8px;">
                    <span>📅 Survey active since ${formatDate(q.publishedDate)}</span>
                    <span style="font-weight:700; color:var(--primary); text-transform:uppercase;">Target: ${q.targetGroup.toUpperCase()}</span>
                </div>
                <h4 style="margin:0; font-size:0.95rem; font-weight:700; color:var(--text-primary); line-height:1.4;">${q.text}</h4>
                ${graphHtml}
                ${responsesHtml}
            </div>
        `;
    });
}

function publishCpdEvent(e) {
    e.preventDefault();
    const title = document.getElementById('event-title').value.trim();
    const date = document.getElementById('event-date').value;
    const time = document.getElementById('event-time').value.trim();
    const location = document.getElementById('event-location').value.trim();
    const type = document.getElementById('event-type').value;
    const targetGroup = document.getElementById('event-target').value;
    const description = document.getElementById('event-desc').value.trim();
    const required = document.getElementById('event-required').checked;
    
    const newEvent = {
        id: 'e_' + Date.now(),
        title,
        date,
        time,
        location,
        type,
        targetGroup,
        description,
        required,
        rsvps: []
    };
    
    if (!appState.cpdCalendar) appState.cpdCalendar = [];
    appState.cpdCalendar.push(newEvent);
    saveState();
    
    document.getElementById('cpd-event-form').reset();
    renderCpdLeaderHub();
    alert(`CPD Event published successfully to ${targetGroup} staff!`);
}
window.publishCpdEvent = publishCpdEvent;

function publishCpdArticle(e) {
    e.preventDefault();
    const title = document.getElementById('article-title').value.trim();
    const category = document.getElementById('article-category').value.trim();
    const readingTime = parseInt(document.getElementById('article-readtime').value) || 5;
    const targetGroup = document.getElementById('article-target').value;
    const summary = document.getElementById('article-summary').value.trim();
    const content = document.getElementById('article-content').value.trim();
    
    const newArticle = {
        id: 'art_' + Date.now(),
        title,
        category,
        readingTime,
        targetGroup,
        summary,
        content,
        publishedDate: new Date().toISOString().split('T')[0],
        author: 'Mrs. C Wagner-Lees',
        reads: []
    };
    
    if (!appState.cpdArticles) appState.cpdArticles = [];
    appState.cpdArticles.push(newArticle);
    saveState();
    
    document.getElementById('cpd-article-form').reset();
    renderCpdLeaderHub();
    alert(`CPD Article published successfully to ${targetGroup} staff!`);
}
window.publishCpdArticle = publishCpdArticle;

function publishCpdQuestion(e) {
    e.preventDefault();
    const text = document.getElementById('question-text').value.trim();
    const type = document.getElementById('question-type').value;
    const targetGroup = document.getElementById('question-target').value;
    
    const newQuestion = {
        id: 'q_' + Date.now(),
        text,
        type,
        targetGroup,
        publishedDate: new Date().toISOString().split('T')[0],
        options: type === 'scale' ? ['1 - Not Confident', '2', '3', '4', '5 - Extremely Confident'] : [],
        responses: []
    };
    
    if (!appState.cpdQuestions) appState.cpdQuestions = [];
    appState.cpdQuestions.push(newQuestion);
    saveState();
    
    document.getElementById('cpd-question-form').reset();
    renderCpdLeaderHub();
    alert(`CPD Feedback question published successfully to ${targetGroup} staff!`);
}
window.publishCpdQuestion = publishCpdQuestion;

function renderStaffCpdInteractions() {
    const calendarCard = document.getElementById('staff-cpd-calendar-card');
    const calendarList = document.getElementById('staff-cpd-calendar-list');
    const readingsCard = document.getElementById('staff-cpd-readings-card');
    const readingsList = document.getElementById('staff-cpd-readings-list');
    
    if (!calendarCard || !calendarList || !readingsCard || !readingsList) return;
    
    let userGroup = 'support';
    if (appState.currentUser === 'sarah_jenkins' || appState.currentUser === 'emily_higgins' || appState.currentUser === 'constanze_wagner') {
        userGroup = 'senior';
    }
    
    // 1. Render Calendar
    const events = appState.cpdCalendar || [];
    const filteredEvents = events.filter(e => e.targetGroup === 'all' || e.targetGroup === userGroup);
    
    if (filteredEvents.length > 0) {
        calendarCard.style.display = 'flex';
        calendarList.innerHTML = '';
        filteredEvents.forEach(ev => {
            const hasRsvped = ev.rsvps && ev.rsvps.includes(appState.currentUser);
            calendarList.innerHTML += `
                <div style="background:var(--bg-app); border:1px solid var(--border-color); padding:16px; border-radius:var(--radius-md); display:flex; justify-content:space-between; align-items:center; gap:16px; flex-wrap:wrap; margin-bottom:10px;">
                    <div style="flex:1; min-width:220px;">
                        <div style="display:flex; gap:6px; align-items:center;">
                            <span class="tag tag-framework" style="font-size:0.7rem; padding:2px 6px; font-weight:600;">${ev.type}</span>
                            ${ev.required ? `<span class="tag tag-danger" style="background-color:rgba(239, 68, 68, 0.15); color:var(--danger); border:1px solid rgba(239, 68, 68, 0.2); font-size:0.7rem; padding:2px 6px; font-weight:700;">Required</span>` : ''}
                        </div>
                        <h4 style="margin:6px 0; font-size:0.95rem; font-weight:700; color:var(--text-primary);">${ev.title}</h4>
                        <p style="font-size:0.8rem; color:var(--text-secondary); margin-bottom:6px; line-height:1.4;">${ev.description}</p>
                        <div style="font-size:0.75rem; color:var(--text-muted);">
                            📅 <strong>${formatDate(ev.date)}</strong> &nbsp;|&nbsp; 🕒 <strong>${ev.time}</strong> &nbsp;|&nbsp; 📍 <strong>${ev.location}</strong>
                        </div>
                    </div>
                    <div>
                        <button class="btn ${hasRsvped ? 'btn-secondary' : 'btn-primary'} btn-sm" onclick="rsvpToCpdEvent('${ev.id}')">
                            ${hasRsvped ? '✓ RSVP Registered' : 'RSVP for Event'}
                        </button>
                    </div>
                </div>
            `;
        });
    } else {
        calendarCard.style.display = 'none';
    }
    
    // 2. Render Readings
    const articles = appState.cpdArticles || [];
    const filteredArticles = articles.filter(a => a.targetGroup === 'all' || a.targetGroup === userGroup);
    
    if (filteredArticles.length > 0) {
        readingsCard.style.display = 'flex';
        readingsList.innerHTML = '';
        filteredArticles.forEach(art => {
            const hasRead = art.reads && art.reads.includes(appState.currentUser);
            readingsList.innerHTML += `
                <div style="background:var(--bg-app); border:1px solid var(--border-color); padding:16px; border-radius:var(--radius-md); display:flex; justify-content:space-between; align-items:center; gap:16px; flex-wrap:wrap; margin-bottom:10px;">
                    <div style="flex:1; min-width:220px;">
                        <span class="tag tag-framework" style="font-size:0.7rem; padding:2px 6px; font-weight:600;">📖 ${art.category}</span>
                        <h4 style="margin:6px 0; font-size:0.95rem; font-weight:700; color:var(--text-primary);">${art.title}</h4>
                        <p style="font-size:0.8rem; color:var(--text-secondary); margin-bottom:6px; line-height:1.4;">${art.summary}</p>
                        
                        <div id="art-body-${art.id}" style="display:none; font-size:0.8rem; line-height:1.5; color:var(--text-primary); background:rgba(0,0,0,0.1); padding:12px; border-radius:6px; margin:8px 0; border-left:3px solid var(--primary);">
                            ${art.content}
                        </div>
                        
                        <div style="font-size:0.75rem; color:var(--text-muted);">
                            ✍️ Published by <strong>${art.author}</strong> &nbsp;|&nbsp; ⏱️ <strong>${art.readingTime} min read</strong>
                        </div>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        <button class="btn btn-secondary btn-sm" onclick="toggleArticleBody('${art.id}')" id="btn-read-art-${art.id}">
                            View Content
                        </button>
                        <button class="btn ${hasRead ? 'btn-success' : 'btn-primary'} btn-sm" onclick="markArticleAsRead('${art.id}')" ${hasRead ? 'disabled style="background-color:var(--success); color:white;"' : ''}>
                            ${hasRead ? '✓ Completed' : 'Acknowledge Read'}
                        </button>
                    </div>
                </div>
            `;
        });
    } else {
        readingsCard.style.display = 'none';
    }
}
window.renderStaffCpdInteractions = renderStaffCpdInteractions;

function toggleArticleBody(artId) {
    const div = document.getElementById(`art-body-${artId}`);
    const btn = document.getElementById(`btn-read-art-${artId}`);
    if (div && btn) {
        const isHidden = div.style.display === 'none';
        div.style.display = isHidden ? 'block' : 'none';
        btn.textContent = isHidden ? 'Hide Content' : 'View Content';
    }
}
window.toggleArticleBody = toggleArticleBody;

function rsvpToCpdEvent(eventId) {
    const ev = appState.cpdCalendar.find(e => e.id === eventId);
    if (ev) {
        if (!ev.rsvps) ev.rsvps = [];
        const idx = ev.rsvps.indexOf(appState.currentUser);
        if (idx > -1) {
            ev.rsvps.splice(idx, 1);
        } else {
            ev.rsvps.push(appState.currentUser);
        }
        saveState();
        renderStaffCpdInteractions();
    }
}
window.rsvpToCpdEvent = rsvpToCpdEvent;

function markArticleAsRead(articleId) {
    const art = appState.cpdArticles.find(a => a.id === articleId);
    if (art) {
        if (!art.reads) art.reads = [];
        if (!art.reads.includes(appState.currentUser)) {
            art.reads.push(appState.currentUser);
            saveState();
            renderStaffCpdInteractions();
        }
    }
}
window.markArticleAsRead = markArticleAsRead;

function renderStaffSurveys() {
    const list = document.getElementById('staff-surveys-list');
    if (!list) return;
    list.innerHTML = '';
    
    let userGroup = 'support';
    if (appState.currentUser === 'sarah_jenkins' || appState.currentUser === 'emily_higgins' || appState.currentUser === 'constanze_wagner') {
        userGroup = 'senior';
    }
    
    const questions = appState.cpdQuestions || [];
    const filtered = questions.filter(q => q.targetGroup === 'all' || q.targetGroup === userGroup);
    
    if (filtered.length === 0) {
        list.innerHTML = `<div style="text-align:center; padding:32px; color:var(--text-muted); font-style:italic;">No active surveys or feedback requests targeted at your role.</div>`;
        return;
    }
    
    filtered.forEach(q => {
        const myResponse = q.responses ? q.responses.find(r => r.staffId === appState.currentUser) : null;
        
        let responseArea = '';
        if (myResponse) {
            responseArea = `
                <div style="background:rgba(16, 185, 129, 0.1); border-left:3px solid #10b981; padding:12px; border-radius:0 6px 6px 0; font-size:0.8rem; margin-top:8px;">
                    <div style="font-weight:700; color:#10b981;">✓ Survey Response Submitted</div>
                    <div style="color:var(--text-secondary); margin-top:4px;">Your Answer: <strong>${myResponse.answer}</strong></div>
                </div>
            `;
        } else {
            if (q.type === 'scale') {
                responseArea = `
                    <div style="display:flex; flex-direction:column; gap:8px; margin-top:10px;">
                        <span style="font-size:0.75rem; color:var(--text-muted); font-weight:600;">Choose a rating:</span>
                        <div style="display:flex; gap:8px;">
                            ${[1,2,3,4,5].map(v => `
                                <button class="btn btn-secondary btn-sm" onclick="submitSurveyResponse('${q.id}', '${v}')" style="min-width:32px; justify-content:center;">${v}★</button>
                            `).join('')}
                        </div>
                    </div>
                `;
            } else {
                responseArea = `
                    <form onsubmit="submitSurveyTextResponse(event, '${q.id}')" style="display:flex; gap:8px; margin-top:10px;">
                        <input type="text" id="survey-text-ans-${q.id}" required placeholder="Write your response..." style="flex:1; padding:8px; border:1px solid var(--border-color); border-radius:4px; background:var(--bg-app); color:var(--text-primary); font-size:0.8rem;">
                        <button type="submit" class="btn btn-primary btn-sm">Submit</button>
                    </form>
                `;
            }
        }
        
        list.innerHTML += `
            <div style="background:var(--bg-app); border:1px solid var(--border-color); padding:16px; border-radius:var(--radius-md); display:flex; flex-direction:column; gap:6px; margin-bottom:12px;">
                <div style="font-size:0.7rem; color:var(--text-muted);">CPD Survey Request • Published ${formatDate(q.publishedDate)}</div>
                <h4 style="margin:0; font-size:0.95rem; font-weight:700; color:var(--text-primary); line-height:1.4;">${q.text}</h4>
                ${responseArea}
            </div>
        `;
    });
}
window.renderStaffSurveys = renderStaffSurveys;

function submitSurveyResponse(questionId, value) {
    const q = appState.cpdQuestions.find(qu => qu.id === questionId);
    if (q) {
        if (!q.responses) q.responses = [];
        
        const existing = q.responses.find(r => r.staffId === appState.currentUser);
        if (!existing) {
            let name = 'Staff Member';
            if (appState.currentUser === 'sarah_jenkins') name = 'Sarah Jenkins';
            if (appState.currentUser === 'emily_higgins') name = 'Emily Higgins';
            if (appState.currentUser === 'constanze_wagner') name = 'Mrs. C Wagner-Lees';
            
            q.responses.push({
                staffId: appState.currentUser,
                staffName: name,
                answer: value
            });
            saveState();
            renderStaffSurveys();
            alert("Feedback submitted successfully. Thank you!");
        }
    }
}
window.submitSurveyResponse = submitSurveyResponse;

function submitSurveyTextResponse(e, questionId) {
    e.preventDefault();
    const input = document.getElementById(`survey-text-ans-${questionId}`);
    if (input) {
        const val = input.value.trim();
        if (val) {
            submitSurveyResponse(questionId, val);
        }
    }
}
window.submitSurveyTextResponse = submitSurveyTextResponse;

// Document Ready Initialization
document.addEventListener('DOMContentLoaded', () => {
    loadState();
    switchSimulatedRole(appState.currentUser);
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
    initObservationView();

    // Render initial view
    switchTab('dashboard');
});
