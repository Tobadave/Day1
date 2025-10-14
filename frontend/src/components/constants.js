// constants.js
import partner1 from "../assets/icons/futureAfrica.jpeg"
import partner2 from "../assets/icons/01Edu.jpeg"
import partner3 from "../assets/icons/3MTT.jpeg"
import partner4 from "../assets/icons/Riverbank.jpeg"
import partner5 from "../assets/icons/KrystalDigital.jpeg"
import partner6 from "../assets/icons/saillab.jpeg"

//logo
import cash from "../assets/icons/cashless.png"
import net from "../assets/icons/internet.png"
import placment from "../assets/icons/placement.png"
import global from "../assets/icons/global.png"
import peer from "../assets/icons/peer.png"
import game from "../assets/icons/gamified.png"
import campus from "../assets/icons/campus.png"
import logo from "../assets/icons/mainlogo.png"
// import path from "path"

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

