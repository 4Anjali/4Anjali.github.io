'use strict';

const MAX = {

    deleteCookiesForDomains: ['.maxspeicher.com'], // necessary to be able to keep GDPR requirements to a minimum
    productionHostname: 'www.maxspeicher.com',

    header: {
        title: {
            content: 'Anjali Sharma', // pick TWO letters that should be rotated on hover via {x}
            href: 'index.html'
        },
        menu: [
            {
                text: 'Newsletter',
                href: 'https://www.maxspeicher.com/newsletter'
            },
            {
                text: 'Essays',
                href: 'https://maxspeicher.medium.com/membership'
            },
            {
                text: 'Consulting',
                href: 'consulting.html'
            }/*,
            {
                text: 'Poetry',
                href: 'https://maxspeicher.substack.com/p/poems'
            }*/
        ]
    },
    content: {
        research: {
            highlightAuthor: 'A. Sharma',
            publications: [
                {
                    title: 'The Good, the Bad and the Ugly: An Open Image Dataset for Automated Sorting of Good, Bad, and Imperfect Produce.',
                    authors: ['A. Sharma', 'Dr. V. Kumar', 'Dr. L.P. Musunur'],
                    link: 'https://osf.io/epwq9',
                    award: 'Under Second Round Review at Sustainability Journal'
                },
                {
                    title: 'Online Appendix to Imperfect Foods Paper-list of Articles from Literature Review',
                    authors: ['A. Sharma'],
                    link: 'https://osf.io/m5tyw',
                    award: 'OSF Preprints. 2023'
                },    
                {
                    title: 'Using Generative Art from Brain Signals for Enabling Self Expression in the Differently Abled',
                    authors: ['A. Sharma', 'A. Kushagra'],
                    link: 'https://osf.io/nf3cr',
                    award: 'OSF Preprints. 2022'
                },
                {
                    title: 'Artificial Intelligence and Robotics for Reducing Waste in the Food Supply Chain: Systematic Literature Review,Theoretical Framework, and Research Agenda',
                    authors: ['A. Sharma', 'Dr. P.V. Singh', 'Dr. L.P. Musunur'],
                    link: 'https://osf.io/7kbu3',
                    award: 'OSF Preprints. 2023'
                } 
            ]
        },
        work: [
            {
                when: ['09/21', 'present'],
                where: 'BestSecret Group',
                what: ['Director of Product Design'],
                link: 'http://www.bestsecret.com/'
            },
            {
                when: ['10/18', '08/21'],
                where: 'C&A',
                what: ['UX Manager', 'Knowledge Lead', 'Product Owner'],
                link: 'http://www.c-a.com/'
            },
            {
                when: ['03/17', '09/18'],
                where: 'University of Michigan',
                what: ['Post-Doctoral Researcher'],
                link: 'https://www.mi2lab.com/'
            },
            {
                when: ['03/15', '02/17'],
                where: 'bitstars',
                what: ['VP of Customer & Data Analytics & Optimization'],
                link: 'https://www.holobuilder.com/'
            },
            {
                when: ['06/12', '12/14'],
                where: 'Unister',
                what: ['Researcher', 'Ph.D. Student'],
                link: 'https://web.archive.org/web/20130215000000*/http://www.bluekiwi.de/'
            }
        ],
   
        writing: [
            {
                title: 'An Actionable And Reliable Usability Questionnaire With Only 7 Items: §Inuit§',
                publication: 'Smashing Magazine',
                isNew: true,
                link: 'https://www.smashingmagazine.com/2023/10/actionable-reliable-usability-questionnaire-inuit/'
            },
            {
                title: 'So, How _Can_ We Measure UX?',
                publication: 'ACM Interactions',
                link: 'https://interactions.acm.org/blog/view/so-how-ican-i-we-measure-ux'
            },
            {
                title: 'Beyond form and function: Design is poetry',
                publication: 'DOC',
                link: 'https://www.doc.cc/articles/design-is-poetry'
            },
            {
                title: 'One Formula To Rule Them All: The ROI Of A Design System',
                publication: 'Smashing Magazine',
                link: 'https://www.smashingmagazine.com/2022/09/formula-roi-design-system/'
            },
            {
                title: 'Listen to users, but only 85% of the time: How Black Swans Can Save Innovation in a Data-Driven World',
                publication: 'UX Collective',
                link: 'https://uxdesign.cc/listen-to-users-but-only-85-of-the-time-da96c2f9dde6'
            },
            {
                title: 'We Need to Get Rid of Significance in A/B Testing, Seriously!',
                publication: 'ACM Interactions',
                link: 'https://interactions.acm.org/archive/view/march-april-2022/we-need-to-get-rid-of-significance-in-a-b-testing-seriously'
            },
            /*{
                title: 'Conversion rate & average order value are not UX metrics',
                publication: 'UX Collective',
                link: 'https://uxdesign.cc/conversion-rate-average-order-value-are-not-ux-metrics-9d6e7e40e286'
            },*/
            {
                title: 'Growth Marketing Considered Harmful',
                publication: 'i-com ‒ Journal of Interactive Media',
                link: 'https://www.degruyter.com/document/doi/10.1515/icom-2020-0016/html'
            },
            /*{
                title: 'KPI-centered design',
                publication: 'UX Collective',
                link: 'https://uxdesign.cc/kpi-centered-design-8d1f4e231a5'
            },*/
            {
                title: 'How to become a UX designer — no matter what you studied at uni',
                publication: 'The Next Web',
                link: 'https://thenextweb.com/growth-quarters/2020/09/28/how-to-become-a-ux-designer-no-matter-what-you-studied-at-uni/'
            },
            /*{
                title: 'How to build and lead user experience (UX) teams',
                publication: 'UX Collective',
                link: 'https://uxdesign.cc/how-to-build-and-lead-user-experience-ux-teams-6d4b802071d0'
            },
            {
                title: 'How usability impacts profit: The Conversion/Usability Framework',
                publication: 'UX Collective',
                link: 'https://uxdesign.cc/the-conversion-usability-framework-3e2068edebbc'
            },*/
            {
                title: 'On Design Thinking',
                publication: 'The UX Blog',
                link: 'https://medium.theuxblog.com/on-design-thinking-4a4980aebe8d'
            }
            /*{
                title: 'What is Design Thinking?',
                publication: 'Muzli',
                link: 'https://medium.muz.li/what-is-design-thinking-4afa067cb986'
            },*/
        ],
        poetry: [
            {
                title: 'The Mirrored Sky',
                publication: 'The Orchards Poetry Journal',
                // isNew: true,
                link: 'https://tinyurl.com/msTopjTms'
            },
            {
                title: '6 Poems',
                publication: 'The Magnolia Review',
                link: 'https://tinyurl.com/msTmrSp'
            },
            {
                title: 'Memories of California',
                publication: 'Avalon Literary Review',
                link: 'https://tinyurl.com/msAlrMoc'
            },
            {
                title: 'Temples',
                publication: 'Last Stanza Poetry Journal',
                link: 'https://tinyurl.com/msLspjTe'
            },
            {
                title: '_Cava_, _Pimientos de Padrón_, _Burrata_, _Pasta al Tartufo_',
                publication: 'The Whisky Blot',
                link: 'https://tinyurl.com/msWbCppbpt'
            },
            {
                title: 'Vacation ◦ by the Pool • Three Variations',
                publication: 'The Disappointed Housewife',
                link: 'https://tinyurl.com/msDhVbtptv'
            },
            {
                title: 'Five Stanzas for Hemingway',
                publication: 'The Whisky Blot',
                link: 'https://tinyurl.com/msWbFsfh'
            },
            {
                title: 'A Tale of Trees',
                publication: 'Otoliths Magazine',
                link: 'https://tiny.one/mr2264v2'
            },
            {
                title: 'Life',
                publication: 'Otoliths Magazine',
                link: 'https://tiny.one/5fmw36aa',
                nft: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/19936394212209241966299193836316547310851424672911172681285785828191654379521/'
            },
            {
                title: 'On Freedom',
                publication: 'Impspired',
                link: 'https://tiny.one/cfcftrrp'
            },
            {
                title: 'Four Stars',
                publication: 'Impspired',
                link: 'https://tiny.one/cfcftrrp'
            }
        ],
        openSource: [
            {
                title: 'This Website Template',
                link: 'https://github.com/maxspeicher/maxspeicher.github.io'
            },
            {
                title: 'MaxSpeicher.com',
                multipleLinks: {
                    v1: 'https://github.com/maxspeicher/v1',
                    v2: 'https://github.com/maxspeicher/v2',
                    v3: 'https://github.com/maxspeicher/v3'
                }
            },
            {
                title: '360theater',
                link: 'https://github.com/mi2lab/360theater',
                groupProject: true
            },
            {
                title: 'MRAT (Mixed Reality Analytics Toolkit)',
                link: 'https://github.com/mi2lab/mrat',
                groupProject: true
            },
            {
                title: 'GestureWiz',
                link: 'https://github.com/mi2lab/gesturewiz',
                groupProject: true
            },
            {
                title: 'Search Interaction Optimization (my Ph.D. thesis)',
                link: 'https://www.maxspeicher.com/phdthesis'
            }
        ],
        ringtennis: [
            {
                when: '2003‒10',
                title: 'Xyx',
                discipline: 'Placeholder'
            },
            {
                when: '2023',
                title: '🏆 Xyz',
                discipline: 'Placeholder'
            }
        ]
    },
    footer: {},
    privacyPolicy: {
        name: 'Dr.-Ing. Maximilian Speicher',
        addressLine1: '℅ Best Secret GmbH',
        addressLine2: 'Margaretha-Ley-Ring 10',
        zipAndCity: '85609 Aschheim',
        stateAndOrCountry: 'Germany',
        email: '__maximilian.speicher__@bestsecret.com (underscores have been added for spam protection)'
    }

};
