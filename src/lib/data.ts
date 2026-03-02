export interface Project {
    id: string;
    title: string;
    slug: string;
    project_category: string;
    project_type: string;
    industry_domain: string; // Added field
    short_description: string;
    description: string; // Rich Text (Full Description)
    problem_statement: string; // Restored
    solution_overview: string; // Restored
    tech_stack: string[];
    architecture_type: string;
    deployment_method: string;
    methodology: string; // Added field
    your_role: string;
    core_features: string[];
    technical_challenges: string[];
    how_challenges_were_solved: string[];
    measurable_results: string[];
    github_link?: string;
    live_demo_link?: string;
    video_demo_link?: string;
    thumbnail_image: string; // Gradient class or image path
    gallery_images?: string[]; // Added field
    tags: string[];
    start_date: string;
    end_date: string;
    status: 'published' | 'draft' | 'ongoing' | 'completed';
}

export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    category: string;
    author: string;
    publishDate: string;
    status: 'published' | 'draft';
    short_description: string;
    content: string;
    thumbnail_image: string;
    tags: string[];
}

export interface PortalLink {
    id: string;
    name: string;
    url: string;
    category: string;
    status: 'active' | 'inactive';
    icon?: string;
}

export const DUMMY_PROJECTS: Project[] = [
    {
        id: "1",
        title: "Nova Analytics Dashboard",
        slug: "nova-analytics",
        project_category: "Enterprise Software",
        project_type: "Full Stack Development",
        industry_domain: "Logistics & Supply Chain",
        short_description: "A high-performance real-time data visualization platform for enterprise logistics handling millions of events.",
        description: `
            <h1>The Architecture of Speed</h1>
            <p>Nova Analytics was designed to bridge the gap between complex data streams and actionable insights. In the world of logistics, every second matters, and delayed data is effectively dead data.</p>
            <h2>Strategic Objectives</h2>
            <ul>
                <li>Consolidate 15+ disparate data sources into a single source of truth.</li>
                <li>Reduce decision-making latency from 24 hours to sub-5 seconds.</li>
                <li>Provide predictive analytics for supply chain disruptions.</li>
            </ul>
        `,
        problem_statement: "Logistics companies struggled with 24-hour delayed reports, making immediate tactical changes impossible during supply chain disruptions.",
        solution_overview: "We implemented an event-driven architecture that processes data as it arrives, rendering it instantly on high-end interactive charts with predictive modeling.",
        tech_stack: ["Next.js", "TypeScript", "Tailwind CSS", "TanStack Query", "Redis", "Apache Kafka"],
        architecture_type: "Event-Driven Microservices",
        deployment_method: "AWS EKS (Kubernetes)",
        methodology: "Agile / Scrum",
        your_role: "Lead Frontend Engineer",
        core_features: [
            "Real-time Fleet Tracking",
            "Predictive Delay Modeling",
            "Automated PDF Report Generation",
            "Custom Visualization Engine"
        ],
        technical_challenges: [
            "Processing 1M+ live events per second without UI blocking.",
            "Maintaining 100% data consistency across distributed cache layers."
        ],
        how_challenges_were_solved: [
            "Leveraged WebWorkers for heavy data processing outside the main thread.",
            "Implemented optimistic UI updates for zero-lag interaction feedback."
        ],
        measurable_results: [
            "42% Reduction in reporting latency",
            "Supported $50M in monthly logistics volume",
            "100% Client retention post-launch"
        ],
        github_link: "https://github.com/example/nova",
        live_demo_link: "https://nova-demo.com",
        thumbnail_image: "from-violet-600 to-indigo-700",
        gallery_images: [
            "from-violet-400 to-indigo-500",
            "from-violet-500 to-indigo-600",
            "from-violet-600 to-indigo-700"
        ],
        tags: ["Big Data", "Real-time", "Enterprise"],
        start_date: "2023-01-15",
        end_date: "2023-08-20",
        status: "completed"
    },
    {
        id: "2",
        title: "Ethereal NFT Marketplace",
        slug: "ethereal-nft",
        project_category: "Web3 / Blockchain",
        project_type: "End-to-End Client Project",
        industry_domain: "Digital Art & Collectibles",
        short_description: "A premium, design-driven marketplace with immersive 3D previews and seamless wallet integrations.",
        description: `
            <h1>Redefining Digital Ownership</h1>
            <p>Ethereal was born from the need for a marketplace that treats digital art with the same reverence as physical masterpieces in a gallery. It's not just a shop; it's a curated experience.</p>
            <blockquote>"The UI stays out of the way, letting the art speak for itself." - Lead Collector</blockquote>
        `,
        problem_statement: "Existing marketplaces were cluttered and felt budget, devaluing high-end digital art and confusing high-ticket collectors.",
        solution_overview: "A minimal, white-label style interface with zero distractions, immersive WebGL previews, and seamless multi-wallet connection stability.",
        tech_stack: ["React", "Solidity", "Ether.js", "Framer Motion", "IPFS", "The Graph"],
        architecture_type: "Decentralized Application (DApp)",
        deployment_method: "Vercel + Alchemy",
        methodology: "Design-First Development",
        your_role: "Full Stack Web3 Developer",
        core_features: [
            "3D Model Interactive Viewer",
            "Lazy-Minting Engine",
            "Dutch Auction Bidding System",
            "Social Gallery Sharing Suite"
        ],
        technical_challenges: [
            "Ensuring mobile-responsive wallet connections (Wagmi/RainbowKit).",
            "Optimizing heavy 4K metadata for fast loading on edge networks."
        ],
        how_challenges_were_solved: [
            "Implemented custom image-proxy for on-the-fly resizing of IPFS assets.",
            "Used Framer Motion for highly optimized layout animations."
        ],
        measurable_results: [
            "$2M Total Volume Locked in first month",
            "15k Active daily collectors",
            "Winner of 'Best Web3 UI' Award 2023"
        ],
        github_link: "https://github.com/example/ethereal",
        live_demo_link: "https://ethereal.art",
        thumbnail_image: "from-emerald-500 to-teal-700",
        gallery_images: [
            "from-emerald-300 to-teal-500",
            "from-emerald-400 to-teal-600",
            "from-emerald-500 to-teal-700"
        ],
        tags: ["Web3", "Blockchain", "Art"],
        start_date: "2023-06-10",
        end_date: "2024-01-05",
        status: "published"
    }
];

export const DUMMY_BLOGS: BlogPost[] = [
    {
        id: "1",
        title: "The Future of Web3 Architecture",
        slug: "future-of-web3",
        category: "Technology",
        author: "Sarah Johnson",
        publishDate: "2024-02-15",
        status: "published",
        short_description: "Exploring how decentralized architectures are reshaping the digital landscape.",
        content: "Draft content here...",
        thumbnail_image: "from-blue-600 to-indigo-700",
        tags: ["Web3", "Architecture", "Blockchain"]
    },
    {
        id: "2",
        title: "Design Systems for Enterprise SaaS",
        slug: "enterprise-design-systems",
        category: "Design",
        author: "Mike Chen",
        publishDate: "2024-02-10",
        status: "published",
        short_description: "Scaling design across large-scale enterprise platforms.",
        content: "Draft content here...",
        thumbnail_image: "from-purple-600 to-pink-700",
        tags: ["Design", "SaaS", "Enterprise"]
    }
];

export const DUMMY_PORTALS: PortalLink[] = [
    {
        id: "1",
        name: "GitHub",
        url: "https://github.com",
        category: "Development",
        status: "active"
    },
    {
        id: "2",
        name: "Figma",
        url: "https://figma.com",
        category: "Design",
        status: "active"
    }
];

