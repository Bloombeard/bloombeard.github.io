import { TDevInfoBlock, TDevInfoBlockContent } from "../types/types";

export const devInfoBlocks: TDevInfoBlock = {
    about: {
        header: 'About',
        sections: [{
            bodyText: "Forrest is a highly motivated software engineer looking to expand beyond the front end, and seeking opportunities to make a grater impact with his work. In his off hours, Forrest can usually be found writing stories, baking, or saying hello to other people's dogs.",
        }],
    },
    skills: {
        header: 'Skills',
        sections: [
            {
                sectionHeader: 'tools',
                bodyText: 'Git, React, Typescript, Redux, Fluxible, NextJS, HTML5, Sass, Less, Redux, Fluxible, Material UI, Playwright, Jest, Javascript, Markdown, VS Code, Storybook, Figma, Jira, Asana, Affinity Design Suite, Adobe Design Suite, Google office, Microsoft office'
            },
            {
                sectionHeader: 'methodologies',
                bodyText: 'A/B testing, unit testing, end-to-end testing, Agile, scrum, test-driven development, mobile-first web design, responsive web design',
            },
            {
                sectionHeader: 'learning',
                bodyText: 'Go, Python, SQL, microservices, pgAdmin, Postman',
            },
        ],
    },
    experience: {
        header: 'Experience',
        sections: [
            {
                preHeader: 'software engineer (front end)',
                sectionHeader: 'Niche Inc.',
                subHeader: 'Feb 2020 - Present | niche.com',
                bullets: [
                    'Built systems and interfaces for Niche Direct Admissions, including user profile validations, multi-tab modals, and recommendation interfaces.',
                    'Built user profile page, including forms architecture and modals for editing profiles.',
                    'Made many changes to user registration interface over time, working with A/B tests in a complex flow of forms and validations.',
                    'Built new home page during company rebrand, in conjunction with two other engineers and communicating with design and product team members.',
                ],
            },
            {
                preHeader: 'coding project',
                sectionHeader: 'Game Not Included',
                subHeader: 'Jul 2024 | gamenotincluded.fun',
                bullets: [
                    'Wrote piece of software for digital arts curriculum startup.',
                    'Used Python to parse a .psd file to allow a student to upload a filled-out photoshop template and have their artwork pulled into the web app.',
                ],
            },
            {
                preHeader: 'coding project',
                sectionHeader: 'Personal Portfolio Website',
                subHeader: 'Mar 2024 | forreststorrs.com',
                bodyText: 'Beyond his career as a software engineer, Forrest also writes fiction, comics, and material for tabletop role-playing games. He built his writing portfolio website from scratch using Nextjs, React, Typescript, and sass, and hosted it using github pages and github actions.',
            },
        ],
    },
    contact: {
        header: 'Contact',
        sections: [
            {
                sectionHeader: 'email',
                bodyText: 'F.Storrs19@gmail.com',
            },
            {
                sectionHeader: 'phone number',
                bodyText: '847-946-3714',
            },
        ],
    },
    none: {},
}