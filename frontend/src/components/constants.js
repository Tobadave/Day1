// constants.js
import partner1 from "../assets/icons/futureAfrica.jpeg"
import partner2 from "../assets/icons/01Edu.jpeg"
import partner3 from "../assets/icons/3MTT.jpeg"
import partner4 from "../assets/icons/Riverbank.jpeg"
import partner5 from "../assets/icons/KrystalDigital.jpeg"
import partner6 from "../assets/icons/saillab.jpeg"

// image
import bgimg from "../assets/pic22.jpeg"
//logo
import cash from "../assets/icons/cashless.png"
import net from "../assets/icons/internet.png"
import placment from "../assets/icons/placement.png"
import global from "../assets/icons/global.png"
import peer from "../assets/icons/peer.png"
import game from "../assets/icons/gamified.png"
import campus from "../assets/icons/campus.png"
import logo from "../assets/icons/mainlogo.png"

import internet from "../assets/icons/internet.png"
import secure from "../assets/icons/secure.png"

// icons2
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


export const mainlogo = logo;

export const navbar = [
    {name:"Home", path:"/"},
    {name:"Our Program", path:"/program"},
    {name:"The Piscine", path: "/piscine"},
    {name:"About Us", path: "/about"},
    {name:"Contact Us", path: "/contact"}
];

export const heroData = [
  {
    info: "⚡ Application now open in Lagos, Ilorin & Otukpo. Limited slots available. Play the Selection Game today to qualify.",
    title: "Become a world class",
    title2 : "full-stack developer",
    subtitle:
      "Train for excellence with Learn2Earn. Join a globally proven, AI-focused digital skills training program designed to launch your tech career. Gain real-world experience, earn stipends while you learn, and secure a guaranteed 2-year job placement — all at zero cost to you.",
    btnText : ["Play the Game", "Learn More"],
    },
];

export const partners = [
    {
        title: "Our Partners",
        partners: [partner1, partner2,partner3, partner4, partner5, partner6 ],

        aboutText : `Learn2Earn isn't just another education platform — it's a gateway to a new future.`,
        abouth2 : `We're a global movement redefining how digital talent is discovered, trained, and launched. Through our cutting-edge, AI-focused learning experience, we equip you with world-class skills and connect you to real, international career opportunities in tech — transforming your life, not just your résumé`,
        
        details : [
            {num: "$0", title: "Tution fee"},
            {num: "2", title: "Training"},
            {num: "2", title: "Min job placement"},
            {num: "95%", title: "Job placement"},
            {num: "$2k", title: "Average salary"},
        ]
    }
];

export const about = [
    {
        h1: "Our Program at a Glance",
        h2: `What Makes Learn2Earn Different?`,

        lists : 
        [{
            icon: cash,
            title:`Zero Tuition, No Barriers`,
            details:`We believe world-class education should be accessible to everyone — no upfront costs, no student debt.`
        },
        { 
            icon: placment,
            title:`Guaranteed Job Placement`,
            details:`Get placed for a minimum of 2 years with top global tech firms — real jobs, not just promises.`
        },
        {
            icon: net,
            title:`Real Tech Skills, Built for the Future`,
            details:`Master Software Engineering, DevOps, UI/UX, and more — with a focus on AI and cutting-edge technologies.`
        },
        {
            icon: global,
            title:`Global Network & Opportunities`,
            details:`Join a worldwide community of coders, startups, and tech leaders — opening doors to life-changing opportunities.`
        },
        {
            icon: peer,
            title:`Peer-to-Peer Learning`,
            details:`No lectures. No teachers. Just real-world coding challenges, teamwork, and continuous collaboration.`
        },
        {
            icon: game,
            title:`Gamified, Challenge-Based Curriculum`,
            details:`Progress through levels, earn rewards, and stay engaged with a curriculum designed to be immersive and motivating.`
        },
        {
            icon: campus,
            title:`On-Campus Experience`,
            details:`Learn in-person at our state-of-the-art campuses in Lagos, Otukpo (Benue), and Ilorin`
        },
        
    ],
    btnText : "Play the Game"
    }
];

export const carousel = [
    {
        h1: "Life at Learn2Earn",
        h2: `Experience the energy, collaboration, and community that define our campuses.
            Browse snapshots from events, workshops, and everyday moments across Nigeria.`
    }
];

export const section = [
    {
        title:`From Learner to Leader`,
        p :`At Learn2Earn, your education is built around real-world projects, not theory. You'll work hands-on with today's most in-demand technologies — no fluff, no filler — just practical, job-ready skills,
        
        Our dynamic, peer-driven approach is designed to be interactive, immersive, and genuinely engaging, empowering you to learn by doing and grow with every challenge.`
    }
];

export const footer = [
  { 
    top: 'Powered by 01Edu',
    abt: 'Learn2Earn proudly partners with 01Edu to deliver a cutting-edge, project-based curriculum that prepares you for real-world success.',
    
    h1:'Ready to Start Your Journey?',
    details: "Whether you’re new to coding or already passionate about tech, our program takes you from beginner to job-ready — with real skills, global opportunities, and zero upfront cost.",
    btnText : 'Play the Game',

    h2:`Quick Links`,
    info: `Empowering everyone with world-class tech training and career opportunities.`,
    down : [
    {
        name:'Facebook',
        icons: FaFacebook,
        path: '/'
    },
    {
        name:'instagram',
        icons: FaInstagram,
        path: '/'
    },
    {
        name:'linkedin',
        icons: FaLinkedin,
        path: '/'
    },
    {
        name:'twitter',
        icons: FaSquareXTwitter,
        path: '/'
    },
    {
        name:'Youtube',
        icons: FaYoutube,
        path: '/'
    },
    
        
    ]
    }
];

export const faq = [
    {
        h1: "Frequently asked questions",
        abt: "Find everything you need to know to get started on your earning journey",

        questions : [
            {
                title: "How do I join Learn2Earn?",
                p1:`Start by playing our free, fun online selection game — it tests your logic, memory, and problem-solving skills.`,
                p2:`If you pass, you’ll be invited to join the Piscine — a 30-day, in-person coding bootcamp that challenges your grit, collaboration, and learning ability. Only top performers from the Piscine are admitted into the full Learn2Earn program. Think you’ve got what it takes? Play the Game`

            },
            {
                title : "Is there an enrolment or application fee?",
                p1:`No — there are no fees at all. The selection game, the training, and even the job placement are completely free to you.`,
                p2:`Instead of paying tuition upfront, you’ll repay the cost of your free education by joining our global talent agency after graduation — where you’ll work on exciting international tech projects for a minimum period of 2 years. It’s your chance to gain real-world experience, earn a salary, and give back`
            },
            {
                title : "How does the selection process work?",
                p1:`It starts with our online selection game — a free, fun challenge designed to test your logic, memory, and problem-solving skills.
                    If you perform well, you’ll be invited to the Piscine — a 30-day, in-person coding bootcamp held at one of our campuses.`,

                p2:`The Piscine is intense, collaborative, and immersive. You don’t need any tech background — just grit, curiosity, and the ability to learn fast. You’ll work on real coding challenges in a peer-to-peer environment that mimics real-world problem solving. Only the top performers from the Piscine are selected to join the full Learn2Earn program. Think of it as your audition for a life-changing opportunity.`
            },
            {
                title : "Do I need prior programming experience to play the game?",
                p1:`Not at all. You don’t need any coding background to get started. The game is designed to measure your natural aptitude — things like logic, memory, and problem-solving — not your existing technical skills. If you’re curious, determined, and love a good challenge, you’re exactly who we’re looking for.`,
                p2:`No experience. Just potential.`
            },
            {
                title : "How long does the game take to complete?",
                p1:`The game is adaptive, adjusting to your pace and skill level. Most players complete it within a few hours to a couple of days, depending on how much time you commit.`,
                p2:`Top performers usually complete it in just 1 to 2 hours. But don’t worry — you can take breaks and play at your own speed. There’s no rush — just focus, play, and enjoy the challenge.`
            }
        ]
    }
];

export const info = [
    {
        head:"Our Campuses",
        p:"Step into a space built for focus, collaboration, and growth. All Learn2Earn campuses offer",

        ft : [
            {icon:internet, p:"High-speed internet"},
            {icon:secure, p:"24/7 secure access" },
            {icon:peer, p:'Peer learning zones'},
            {icon:campus, p:'Modern, purpose-built infrastructure'}
        ],

        head2:"But it's more than just the facilities",
        info: "Every day, you'll connect with a supportive community of learners, mentors, and friends who challenge and encourage you. From shared coding challenges to team wins, our campuses are where you grow, belong, and thrive together.",
        image : bgimg,
 
        button :["Lagos", "Ilorin", "Benue"] 
    },

    {

    }

]

