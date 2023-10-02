/*
This project is created by Oskar Molander @2023.
*/


// Nav Bar

const navigation = [
    { name: "Experience", to: "#experience", href: "/#experience" },
    { name: "Projects", to: "#projects", href: "/#projects" },
    { name: "Education", to: "#education", href: "/#education" },
    { name: "Skills", to: "#skills", href: "/#skills" },
    { name: "References", to: "#references", href: "/#references" },
    { name: "Contact", to: "#contact", href: "/#contact" },

];


// HomeBanner

const profile = 'Senior Full Stack Developer with over 8 years of professional experience in software development, emphasizing in React, Next and Node. ' +
'Proficient in all aspects of the development process, from requirement gathering and design to deployment and maintenance. ' +
'Skilled in designing and building scalable and maintainable applications using modern technologies and best practices. ' +
'Passionate about working in a fast-paced, collaborative environment and staying up to date with the latest industry trends.';


// Experiences

const MembitHistory = ["Developed efficient and maintainable software according to business objectives and needs of clients.",
"Used AWS Elastic Beanstalk service for deploying and scaling web applications and services developed with Python.",
"Professional Experience with widely used React, Vue.js, Next.js, Nuxt.js.",
"Identifying and resolving problems discovered through consumer feedback and testing."
];
const QueensLabHistory = ["Assisted with software development for healthcare industry using Python and Selenium.",
"Participated as a member of a team in implementing a new customer relationship management system using Django and MySQL.",
"Assisted with database development and maintenance, including creating new schemas and modifying existing ones.",
"Assisted with debugging and resolution of complex issues in production systems."
];

const MembitSite = {
title: "Membit AB (Remote)",
site: "https://www.membit.se/",
role: "Front-end Developer",
history: "JUNE 2020 – APRIL 2023 | HELSINGBORG, SWEDEN",
experience: MembitHistory
};
const QueensLabSite = {
title: "QueensLab",
site: "https://www.queenslab.co/",
role: "Python Developer",
history: "NOVEMBER 2016 – MARCH 2020 | GÖTEBORG, SWEDEN",
experience: QueensLabHistory
};


// Projects

const projects = [["/projects/React1.png", "/projects/React2.png", "http://realestate.com.au", "React"],
["/projects/React3.png", "/projects/React4.png", "http://hm.com", "React"],
["/projects/Vue1.png", "/projects/Vue2.png", "http://podcasters.spotify.com", "Vue"],
["/projects/Vue3.png", "/projects/Vue4.png", "http://padlet.com", "Vue"],
["/projects/Next1.png", "/projects/Next2.png", "http://connect.agoda.com", "Next"],
["/projects/Django1.png", "/projects/Django2.png", "http://adipositaszentrum-limmattal.ch", "Django"]];


// Educations

const university1 = {
    title: "Campus Helsingborg",
    site: "https://www.ch.lu.se/english/",
    degree: "Bachelor's degree in Computer Science",
    history: "APRIL 2013 – JUNE 2016 | HELSINGBORG, SWEDEN",
    mark: "/educations/campus_helsingborg.png"
};
const university2 = {
    title: "Pluralsight, (online course)",
    site: "https://www.pluralsight.com/",
    degree: "Bachelor's degree in Software Engineer",
    history: "NOVEMBER 2012 – JUNE 2016",
    mark: "/educations/pluralsight.png"
};


// Skills

const skills = [["React", 87], ["Solidity", 81],
["Vue", 82], ["Ethereum", 84],
["Next.js", 92], ["MongoDB", 89],
["Angular", 79], ["MySQL", 83],
["Node.js", 95], ["PostgreSQL", 80],
["Python", 86], ["AWS", 82],
["Django", 87], ["Tailwind", 85]];


// References

const co_worker1 = {
    name: "Thiago Porto",
    role: "CTO / Web Design Company",
    recommend: "Oskar displays exemplary professionalism and is able to take on challenges. He learns quickly and is an asset to any team.",
    img: "/references/Thiago.png"
};
const co_worker2 = {
    name: "Karina Mitchell",
    role: "UI/UX Designer  / Web Design Company",
    recommend: "Oskar is a great co-worker and problem solver. He is quick to extend his helping hand and makes a good team player.",
    img: "/references/Karina.png"
};


// Contact

const contact = {
    ServiceId: "service_9bi0k2a",
    TemplateId: "template_txz1uik",
    PublicKey: "DNiRbZ7UuX64apvaL"
}


// Social Link

const socialLinks = {
    github: 'https://github.com/Oskar0112',
    skype: 'https://join.skype.com/invite/uhbygYzgRJbj',
    discord: 'www.linkedin.com/in/oskar-molander'
}


// Total

const experiences = {
    MembitHistory,
    QueensLabHistory,
    MembitSite,
    QueensLabSite
}

const educations = {
    university1,
    university2,
}

const references = {
    co_worker1,
    co_worker2,
}

export {
    navigation,
    profile,
    experiences,
    projects,
    educations,
    skills,
    references,
    contact,
    socialLinks
}