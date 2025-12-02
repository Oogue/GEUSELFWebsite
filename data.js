// --- DATA: Resources ---
const resources = [
    {
        type: 'study',
        title: "Healing a Broken Spirit: A Look into Institutional Trauma and Spiritual Resilience",
        source: "Concordia University, St. Paul",
        snippet: "Explores the role of spirituality and therapy in recovery from religious institutional trauma, highlighting how spiritual education and exposure can strengthen resilience and coping mechanisms",
        url: "https://digitalcommons.csp.edu/human-services_masters/2",
        image: "https://www.mayoclinichealthsystem.org/-/media/national-files/images/hometown-health/2022/meditating-by-the-ocean.jpg?sc_lang=en"
    },
    {
        type: 'article',
        title: "How to Heal From Religious Trauma: Breaking Away From Restriction and Discovering Who You Are",
        source: "Momwell — Maternal Mental Health",
        snippet: "Restrictive religious environments can leave lasting spiritual and emotional scars. Dr. Quincee Gideon shares signs of religious trauma and strategies to rebuild identity and well being.",
        url: "https://momwell.com/blog/how-to-heal-from-religious-trauma",
        image: "https://cdn.prod.website-files.com/67b79012b6a52cb056172c0b/67b79012b6a52cb056173929_639b573bbd459c7389b0f9f8_6398ef175747b4a210766537_130_%252520How%252520to%252520Heal%252520From%252520Religious%252520Trauma.png"
    },
    {
        type: 'article',
        title: "How to Break Free from Religious Trauma: 7 Steps to Spiritual Freedom",
        source: "James Scott Official Website — Blogs",
        snippet: "Spiritual and emotional wounds from controlling religious environments can be healed. Scott outlines ways to separate faith from fear, rebuild identity, and embrace grace.",
        url: "https://stjamesscottofficial.com/how-to-break-free-from-religious-trauma-7-steps-to-spiritual-freedom/",
        image: "https://stjamesscottofficial.com/wp-content/uploads/2025/07/blg-james-1.png"
    },
    {
        type: 'study',
        title: "From Inherited Belief to Owned Faith: Mentoring Emerging Adults Through Fowler's Faith Stages",
        source: "Taylor University",
        snippet: "This paper explores strategies for guiding emerging adults as they transition from inherited beliefs to a personal, reflective faith, combining Fowler's stages of faith with Dunn's mentoring approach.",
        url: "https://pillars.taylor.edu/christian-ministries-all-student-projects/2/",
        image: "https://www.taylor.edu/_images/studentconsumerinfo-imagebanner-sammy.webp"
    },
    {
        type: 'article',
        title: "Exploring the Notion of Being Spiritual but Not Religious",
        source: "Dharma College",
        snippet: "This article examines the growing trend of identifying as spiritual but not religious, highlighting how individuals seek personal meaning, ethical living, and inner connection outside traditional religious structures.",
        url: "https://dharma-college.com/exploring-the-notion-of-being-spiritual-but-not-religious/",
        image: "https://dharma-college.com/wp-content/uploads/2025/07/bb3eac49aabc553caf1ee428401d4751-1536x864.png"        
    },
    {
        type: 'video',
        title: "What Is The Point of Spirituality",
        source: "The School of Life",
        snippet: "This video provides a perspective that spirituality's point is to offer a deeply sustaining relief from the burdens and blindness of the ego",
        url: "https://www.youtube.com/watch?v=xum35-XplNY",
        image: "https://i.ytimg.com/vi/xum35-XplNY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC0SMFepmcrvkc7jDoMg4NFevZbCQ"        
    },
    {
        type: 'video',
        title: "What is the difference between being Religious and being Spiritual? Religion Vs Spirituality",
        source: "Illustrate to Educate",
        snippet: "This video explains that contrasts religion, which offers a ready-made communal framework with set beliefs and rituals, with spirituality, which is an inner, flexible, and personal journey for meaning and connection.",
        url: "https://www.youtube.com/watch?v=fij13jP0Wno",
        image: "https://i.ytimg.com/vi/fij13jP0Wno/sddefault.jpg"
    },
    {
        type: 'news',
        title: "Spiritual but not religious",
        source: "Inquirer.net",
        snippet: "This news states that religion involves adhering to doctrines, dogmas, and the authority of tradition, while spirituality is a personal, spontaneous experience of the divine or a higher power.",
        url: "https://opinion.inquirer.net/51425/spiritual-but-not-religious",
        image: "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/4000x3000+0+0/resize/900/quality/85/format/webp/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Fc5%2Ffe%2F396f5fdb444dbcdd5e56bb63ce44%2Flk-spiritual-practice-changyu-zou.jpg"
    }
];

// --- DATA: Quiz ---
const questions = [
    "I follow religious rules because I'm expected to.",
    "I worry about disappointing others when my beliefs differ.",
    "I feel pressured by family, school, or community to follow certain beliefs.",
    "I stay silent about my spiritual questions to avoid conflict.",
    "I feel guilty when I think differently from what I was taught.",
    "I was taught to fear punishment or consequences for questioning.",
    "I avoid exploring other beliefs because I feel it isn't allowed.",
    "I follow traditions even when they don't feel meaningful to me.",
    "I choose beliefs based on what others expect, not what I truly feel.",
    "I practice my faith out of obligation more than personal desire."
];

// 0-based index of questions where "Agree" = Lower score (More Dogmatic/Traditional)
const invertIndices = [2, 7]; 

// --- DATA: Wall (Initial Seed) ---
let wallNotes = [
    { text: "I finally admitted to myself that I don't believe in hell anymore. The relief was instant.", rotation: -2, color: "#fffef0" },
    { text: "Missing the community, but not the judgment. Trying to find a middle ground.", rotation: 1, color: "#fdf2f8" },
    { text: "Nature is my cathedral now.", rotation: 3, color: "#eff6ff" }
];