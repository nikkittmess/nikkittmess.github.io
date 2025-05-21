// DOM Elements with type annotations
const hamburger: HTMLElement | null = document.getElementById('hamburger');
const navLinks: HTMLElement | null = document.getElementById('nav-links');

// Mobile menu toggle with type safety
const toggleMenu = (): void => {
    if (navLinks && hamburger) {
        navLinks.classList.toggle('active');
        
        // Change icon based on menu state
        const icon = hamburger.querySelector('i') as HTMLElement;
        if (navLinks.classList.contains('active')) {
            icon.classList.replace('fa-bars', 'fa-times');
        } else {
            icon.classList.replace('fa-times', 'fa-bars');
        }
    }
};

// Event listener with type check
if (hamburger) {
    hamburger.addEventListener('click', toggleMenu);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor: Element) => {
    anchor.addEventListener('click', function(e: Event) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (!targetId) return;
        
        const targetElement = document.querySelector(targetId) as HTMLElement;
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for scroll animations
interface ObserverOptions {
    root: null;
    rootMargin: string;
    threshold: number;
}

const observerOptions: ObserverOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const animateOnScroll = (entries: IntersectionObserverEntry[]): void => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
};

const observer = new IntersectionObserver(animateOnScroll, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Type for project data
interface Project {
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    link: string;
}

// Example of typed data (could be fetched from API)
const projects: Project[] = [
    {
        title: "AI Legal Assistant",
        description: "Chatbot that scrapes Indian legal sources using LLMs",
        technologies: ["Python", "LLMs", "Web Scraping"],
        imageUrl: "https://via.placeholder.com/600x400",
        link: "#"
    }
    // Add more projects here
];