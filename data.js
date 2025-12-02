// --- DATA: Resources ---
const resources = [
    {
        type: 'study',
        title: "Religion, Spirituality, and Mental Health",
        source: "Johns Hopkins University",
        snippet: "Research demonstrates that while many find strength in faith, others experience religious struggles that negatively impact well-being.",
        url: "#", 
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
    },
    {
        type: 'article',
        title: "Faith After Deconstruction",
        source: "Faith+Lead",
        snippet: "Exploring the process of deconstruction not as a loss of faith, but as a critical spiritual formation process leading to a more authentic reconstruction.",
        url: "#",
        image: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=2070&auto=format&fit=crop"
    },
    {
        type: 'video',
        title: "Unchurching: The Exodus from Institutional Forms",
        source: "TEDx Talks",
        snippet: "Richard Jacobson discusses the trend of people leaving institutional churches not to abandon spirituality, but to find new, more authentic ways to express it.",
        url: "#",
        image: "https://images.unsplash.com/photo-1475721027760-f7560570ed7d?q=80&w=2070&auto=format&fit=crop"
    },
    {
        type: 'study',
        title: "Religiosity: Linked to Mental Health?",
        source: "MDPI Journal",
        snippet: "A deep dive into how 'healthy' vs 'unhealthy' religiosity affects the human psyche, distinguishing between supportive community and guilt-inducing dogma.",
        url: "#",
        image: "https://images.unsplash.com/photo-1555375729-1a61322047d7?q=80&w=2070&auto=format&fit=crop"
    }
];

// --- DATA: Quiz ---
const questions = [
    "I follow religious rules because I’m expected to.",
    "I worry about disappointing others when my beliefs differ.",
    "I feel pressured by family, school, or community to follow certain beliefs.",
    "I stay silent about my spiritual questions to avoid conflict.",
    "I feel guilty when I think differently from what I was taught.",
    "I was taught to fear punishment or consequences for questioning.",
    "I avoid exploring other beliefs because I feel it isn’t allowed.",
    "I follow traditions even when they don’t feel meaningful to me.",
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