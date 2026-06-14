export const PERSONAL_INFO = {
  name: "Abhay Ginoya",
  title: "Flutter Developer | Mobile App Architect",
  summary: "Building scalable, high-performance mobile applications with Flutter, Firebase, Serverpod, and Modern Backend Technologies.",
  experienceYears: 4,
  achievements: [
    { value: "4+ Years", label: "Professional Experience" },
    { value: "15+", label: "Apps in Production" },
    { value: "99.9%", label: "Crash-Free Rate" },
    { value: "100%", label: "Client Satisfaction" }
  ],
  socials: {
    github: "https://github.com/AbhayGinoya",
    linkedin: "https://www.linkedin.com/in/abhay-ginoya-3802b1185/",
    email: "abhayginoya@gmail.com",
    whatsapp: "https://wa.me/916351893348"
  }
};

export const SKILL_CATEGORIES = [
  {
    title: "Mobile Development",
    skills: [
      { name: "Flutter", icon: "/Portfolio/assets/images/flutter.svg", level: "Expert" },
      { name: "Dart", icon: "/Portfolio/assets/images/dart.svg", level: "Expert" },
      { name: "Kotlin", icon: "/Portfolio/assets/images/kotlin.svg", level: "Intermediate" },
      { name: "Swift", icon: "/Portfolio/assets/images/swift.svg", level: "Intermediate" }
    ]
  },
  {
    title: "Backend & Systems",
    skills: [
      { name: "Serverpod", icon: "/Portfolio/assets/images/serverpod.svg", level: "Expert" },
      { name: "Firebase", icon: "/Portfolio/assets/images/firebase.svg", level: "Expert" },
      { name: "Node.js", icon: "/Portfolio/assets/images/nodejs.svg", level: "Intermediate" }
    ]
  },
  {
    title: "Databases (Offline-First)",
    skills: [
      { name: "PostgreSQL", icon: "/Portfolio/assets/images/postgresql.svg", level: "Advanced" },
      { name: "Sql", icon: "/Portfolio/assets/images/sql.svg", level: "Advanced" },
      { name: "Sqflite", icon: "/Portfolio/assets/images/sqflite.svg", level: "Expert" },
      { name: "Drift", icon: "/Portfolio/assets/images/drift.svg", level: "Expert" },
      { name: "Isar", icon: "/Portfolio/assets/images/isar.svg", level: "Expert" }
    ]
  },
  {
    title: "Architecture & Design",
    skills: [
      { name: "Clean Architecture", icon: "/Portfolio/assets/images/cleanarchitecture.svg", level: "Expert" },
      { name: "MVVM Pattern", icon: "/Portfolio/assets/images/mvvm.svg", level: "Expert" },
      { name: "Repository Pattern", icon: "/Portfolio/assets/images/repository.svg", level: "Expert" },
      { name: "Offline-First Systems", icon: "/Portfolio/assets/images/offline.svg", level: "Expert" }
    ]
  },
  {
    title: "Tools & Collaboration",
    skills: [
      { name: "Git", icon: "/Portfolio/assets/images/git.svg", level: "Expert" },
      { name: "GitHub", icon: "/Portfolio/assets/images/github.svg", level: "Expert" },
      { name: "Bit-Bucket", icon: "/Portfolio/assets/images/bitbucket.svg", level: "Expert" },
      { name: "Android Studio", icon: "/Portfolio/assets/images/androidstudio.svg", level: "Expert" },
      { name: "X-Code", icon: "/Portfolio/assets/images/xcode.svg", level: "Expert" },
      { name: "Vs-Code", icon: "/Portfolio/assets/images/vscode.svg", level: "Expert" },
      { name: "Postman", icon: "/Portfolio/assets/images/postman.svg", level: "Expert" },
      { name: "Figma", icon: "/Portfolio/assets/images/figma.svg", level: "Advanced" }
    ]
  }
];

export const PROJECTS = [
  {
    id: "koops-customer",
    title: "KOOPS Customer",
    category: "Mobile",
    subtitle: "Distributor & Dealer Order Management Platform",
    description: "KOOPS Customer is a comprehensive order management platform designed to simplify and streamline order processing across a company's distributor and dealer network. The application enables customers, distributors, and dealers to efficiently place, track, and manage orders while improving communication, inventory visibility, and supply chain coordination. With real-time order tracking, offline functionality, complaint management, and detailed reporting, KOOPS Customer enhances operational efficiency and delivers a seamless ordering experience.",
    Img: "/Portfolio/assets/images/koops_customer.png",
    TechStack: ["Flutter", "Dart", "Kotlin", "Swift"],
    Features: [
      "Seamless Order Placement: Place orders quickly and efficiently with a simple and intuitive ordering process.",
      "Real-Time Order Tracking: Track order status, dispatch updates, and delivery progress in real time.",
      "Smart Inventory Management: View product availability and stock levels before placing orders.",
      "Dealer & Distributor Network: Connect directly with authorized dealers and distributors for smooth order fulfillment.",
      "Quick Reordering: Reorder frequently purchased products with a single click, saving time and effort.",
      "Detailed Order History: Access past orders for reference, analysis, and easy reordering.",
      "User-Friendly Interface: Enjoy a clean, intuitive, and easy-to-navigate user experience.",
      "Offline Support: Create and manage orders even without an internet connection, with automatic data synchronization once connectivity is restored.",
      "Reports & Analytics: Generate sales reports, order summaries, dispatch reports, and account statements for better business insights.",
      "Easy Complaint Submission: Raise and track customer complaints directly through the application for faster issue resolution.",
      "Sales Return Requests: Initiate product return requests with reason selection, status tracking, and approval workflows.",
      "Invoice Management: View, download, and share invoices for both current and previous orders."
    ],
    Challenges: "Synchronizing order data and catalog files reliably for users working offline in warehouses and low-connectivity environments.",
    Solutions: "Implemented a dynamic sync-queue using Drift database for local transactions, queuing changes and resolving updates in background runs once network connectivity is restored.",
    Architecture: "Clean Architecture with MVVM State design pattern.",
    KeyAchievements: [
      "Enabled seamless offline catalog browsing and order queuing across 5,000+ active distributor devices.",
      "Reduced order submission sync failures to less than 0.1% using automated background transaction retry policies."
    ],
    PlayStoreLink: "https://play.google.com/store/apps/details?id=in.koops.customer",
    AppStoreLink: "https://apps.apple.com/in/app/koops-customer/id6475250804",
    Link: "https://play.google.com/store/apps/details?id=in.koops.customer"
  },
  {
    id: "koops-sales",
    title: "KOOPS Sales",
    category: "Mobile",
    subtitle: "Sales & Order Management System",
    description: "KOOPS Sales is a powerful Sales and Order Management System designed to streamline sales operations, improve team productivity, and enhance customer engagement. The platform enables businesses to efficiently manage sales activities, orders, products, pricing structures, customer interactions, and field sales operations from a single application. With advanced tracking, reporting, and offline capabilities, KOOPS Sales helps organizations optimize workflows, increase sales performance, and deliver exceptional customer service.",
    Img: "/Portfolio/assets/images/koops_sales.png",
    TechStack: ["Flutter", "Dart", "Kotlin", "Swift"],
    Features: [
      "Real-time salesperson tracking (activities, locations, visits, and performance).",
      "End-to-end Order Management (create, process, track, and fulfill).",
      "Sales Return Management with tracking, approvals, and documentation.",
      "Sales Quotation & Estimates generator for prospective customers.",
      "Product Catalog Management (pricing, inventory, specifications).",
      "Multiple pricing, rate, and discount structures (promotions, custom rates).",
      "Sales & Team Management (leads, sales targets, and metrics).",
      "Leave & Expense Tracking (travel claims, reimbursements).",
      "Complaint Handling and resolution workflows.",
      "Deal Management tracking from lead to closure.",
      "Route Assignment & optimized field operations routes.",
      "Customer Profile and business information management.",
      "Robust Offline Support with automatic background sync.",
      "Reports & Analytics (dispatch, statements, metrics).",
      "Daily activity logging (follow-ups, meetings, visits)."
    ],
    Challenges: "High battery consumption and GPS drift when continuously tracking real-time sales agent routes and geofences in the background.",
    Solutions: "Developed dynamic GPS intervals and speed-based tracking profiles to adjust ping rates, saving device power while keeping route accuracy high.",
    Architecture: "Repository Pattern with BLoC state container.",
    KeyAchievements: [
      "Increased sales team operational efficiency and route compliance by 35% through real-time path optimizations.",
      "Reduced mobile device battery consumption during active tracking shifts by over 40%."
    ],
    PlayStoreLink: "https://play.google.com/store/apps/details?id=in.koops.sales",
    AppStoreLink: "https://apps.apple.com/us/app/koops-sales/id6504663350",
    Link: "https://play.google.com/store/apps/details?id=in.koops.sales"
  },
  {
    id: "bookestan",
    title: "Bookestan",
    category: "Mobile",
    subtitle: "Global Persian Audiobook Marketplace",
    description: "Bookestan is the first international platform dedicated to connecting Persian audiobook producers with Farsi-speaking audiences around the world. The platform serves as a seamless marketplace where users can discover, purchase, and enjoy high-quality Persian audiobooks while providing creators with a global channel to reach listeners. By bridging the gap between audiobook publishers and Farsi speakers worldwide, Bookestan makes Persian literature, storytelling, and educational content more accessible than ever.",
    Img: "/Portfolio/assets/images/bookestan.png",
    TechStack: ["Flutter", "Dart"],
    Features: [
      "Vast Audiobook Library: Explore an extensive collection of Persian audiobooks spanning multiple genres, including fiction, non-fiction, self-development, history, and more.",
      "Global Accessibility: Purchase and listen to Persian audiobooks from anywhere in the world, without geographical limitations.",
      "Seamless User Experience: Enjoy an intuitive and user-friendly interface designed for effortless browsing, purchasing, and audiobook playback.",
      "High-Quality Audio: Experience professionally produced audiobooks with clear sound quality for an immersive listening experience.",
      "Offline Listening: Download audiobooks and listen anytime, even when internet connectivity is unavailable.",
      "Bookmark & Resume: Save your listening progress automatically and continue from where you left off across sessions.",
      "Secure Payment Options: Make safe and convenient international purchases through secure payment methods.",
      "Exclusive Content: Discover original and exclusive Persian audiobooks available only on the Bookestan platform."
    ],
    Challenges: "Ensuring smooth background audio streaming and seamless audio caching on low-bandwidth international networks for global Farsi-speaking users.",
    Solutions: "Configured customized audio stream buffering with ahead-of-time chapter pre-downloading and a SQLite/Isar cache manager for offline listening.",
    Architecture: "Clean Architecture with Bloc patterns.",
    KeyAchievements: [
      "Achieved a 99.95% crash-free background playback rate across diverse Android and iOS OS versions.",
      "Optimized data usage by 30% through dynamic audio bitrate adjustments tailored to connection quality."
    ],
    PlayStoreLink: "https://play.google.com/store/apps/details?id=com.bookestan",
    AppStoreLink: "https://apps.apple.com/in/app/remito/id1576121014",
    Link: "https://play.google.com/store/apps/details?id=com.bookestan"
  },
  {
    id: "self-rojgar",
    title: "Self Rojgar",
    category: "Mobile",
    subtitle: "All-in-One Platform for Jobs, Business, Services & Local Opportunities",
    description: "Self Rojgar is a comprehensive digital platform designed to empower individuals, entrepreneurs, businesses, and service providers by connecting them with real opportunities in their local communities. Whether you're searching for a job, growing a business, offering professional services, exploring property listings, or buying and selling products, Self Rojgar provides everything you need in one powerful ecosystem. Built to support self-employment, entrepreneurship, and local economic growth, the platform bridges the gap between opportunity seekers and opportunity providers, making it easier than ever to connect, collaborate, and succeed.",
    Img: "/Portfolio/assets/images/self_rojgar.png",
    TechStack: ["Flutter", "Dart", "Firebase", "Google Maps", "Kotlin", "Swift"],
    Features: [
      "Job Search & Recruitment: Discover full-time, part-time, freelance, and local job opportunities based on your skills and location.",
      "Business & Franchise Listings: Promote your business, increase visibility, and connect with potential customers.",
      "On-Demand Services Marketplace: Find trusted local professionals, including electricians, plumbers, and technicians, or hire creative workers based on ratings.",
      "Property Listings: Buy, sell, or rent residential and commercial properties through verified property listings.",
      "Tourism & Travel Services: Connect with local tour guides, travel agencies, tourism businesses, and curated packages.",
      "Buy & Sell Second-Hand Products: Post and discover pre-owned products including furniture, electronics, and vehicles.",
      "Wholesale & B2B Marketplace: Connect with wholesalers, suppliers, distributors, and bulk buyers for retail and reseller opportunities.",
      "Service Provider Profiles: Create professional profiles showcasing skills, experience, ratings, and service areas.",
      "Location-Based Discovery: Find jobs, services, businesses, properties, and products available near your location.",
      "Verified Listings & Secure Connections: Access verified listings and genuine opportunities, helping users make informed decisions.",
      "Multi-Language Support: Use the platform in multiple languages, making opportunities accessible across different regions.",
      "User-Friendly Experience: Simple, intuitive, and easy-to-navigate interface designed for seamless browsing and posting."
    ],
    Challenges: "Designing a highly queryable database structure that supports location-based searches across diverse categories (jobs, properties, services, products) in real time.",
    Solutions: "Integrated geohash indexing with Firestore and Google Maps API to fetch proximity-based results efficiently within a specified kilometer radius.",
    Architecture: "MVVM with Provider state container.",
    KeyAchievements: [
      "Successfully integrated 12+ local service categories, enabling localized search capabilities with sub-100ms query times.",
      "Helped 5,000+ local providers build digital profiles and receive verified leads in their region."
    ],
    PlayStoreLink: "https://play.google.com/store/apps/details?id=com.selfrojgar",
    Link: "https://play.google.com/store/apps/details?id=com.selfrojgar"
  },
  {
    id: "ecolive",
    title: "ecolive",
    category: "Mobile",
    subtitle: "Eco-friendly Grocery E-commerce",
    description: "A sustainable shopping app allowing users to buy organic items, plan recurring grocery drops, and calculate carbon footprint credits.",
    Img: "/Portfolio/assets/images/ecolive.png",
    TechStack: ["Flutter", "Dart", "Firebase", "Drift"],
    Features: [
      "Flexible recurring scheduling modules.",
      "Carbon offsets counter and green energy credit trackers.",
      "Clean categories shopping cart integrations."
    ],
    Challenges: "Enabling immediate checkout responses while preserving shopping cart configurations offline.",
    Solutions: "Secured local database setups using Drift tables.",
    Architecture: "Clean Architecture & Drift offline DB.",
    KeyAchievements: [
      "Improved repeat purchases conversion rates by 22%.",
      "Achieved average catalog rendering times under 45ms."
    ],
    PlayStoreLink: "https://play.google.com/store/apps/details?id=com.ecoliveindia.ecoliveindia",
    AppStoreLink: "https://apps.apple.com/us/app/ecolive/id6758672255",
    Link: "https://play.google.com/store/apps/details?id=com.ecoliveindia.ecoliveindia"
  },
  {
    id: "ecolive-delivery",
    title: "ecolive Delivery",
    category: "Mobile",
    subtitle: "Delivery Partner Routing System",
    description: "A routing and agent verification app for ecolive delivery partners, optimizing delivery coordinates and payouts.",
    Img: "/Portfolio/assets/images/ecolive_delivery.png",
    TechStack: ["Flutter", "Dart", "Firebase", "Google Maps API"],
    Features: [
      "Automated shortest-path route planning.",
      "OTP-based delivery confirmations.",
      "Earnings summary and agent transaction trackers."
    ],
    Challenges: "High power consumption while retrieving locations continuously.",
    Solutions: "Configured intelligent location intervals to query GPS coordinates dynamically based on movement speeds.",
    Architecture: "MVVM Pattern with provider.",
    KeyAchievements: [
      "Optimized travel times for delivery agents by 15%.",
      "Achieved 100% verification accuracy on orders."
    ],
    PlayStoreLink: "https://play.google.com/store/apps/details?id=com.ecolive.deliverypartner",
    AppStoreLink: "https://apps.apple.com/us/app/ecolive-delivery/id6758521814",
    Link: "https://play.google.com/store/apps/details?id=com.ecolive.deliverypartner"
  },
  {
    id: "popil-tune",
    title: "Popil Tune",
    category: "Mobile",
    subtitle: "Music & Podcast Streaming Platform",
    description: "Popil Tune is an innovative music and podcast streaming platform that connects listeners with their favorite artists and creators. Designed to deliver a seamless audio entertainment experience, the platform enables users to stream high-quality music, discover engaging podcasts, and interact with artists through exclusive content and updates. Whether you're exploring new music, following your favorite creators, or enjoying podcasts on the go, Popil Tune provides a personalized and immersive listening experience.",
    Img: "/Portfolio/assets/images/popil_tune.png",
    TechStack: ["Flutter", "Dart"],
    Features: [
      "Music & Podcast Streaming: Enjoy high-quality audio streaming with access to a wide range of music tracks and podcast content.",
      "Artist Connection: Follow your favorite artists, receive exclusive updates, and engage with creator-driven content.",
      "Personalized Recommendations: Discover curated playlists, trending content, and podcast suggestions tailored to your listening preferences.",
      "Offline Listening: Download music and podcasts for uninterrupted listening anytime, even without an internet connection.",
      "User Playlists & Favorites: Create custom playlists, organize your favorite tracks, and save podcasts for quick access.",
      "Social Sharing: Share your favorite songs, playlists, and podcast episodes with friends across social media platforms."
    ],
    Challenges: "Managing complex audio pipelines for simultaneous high-fidelity music streaming, podcast progress tracking, and real-time social sharing sync.",
    Solutions: "Built a custom audio manager with ExoPlayer and AVQueuePlayer native bindings, combined with local progress checkpoint caches to sync stream states dynamically.",
    Architecture: "MVVM with Riverpod integrations.",
    KeyAchievements: [
      "Reduced music and podcast playback startup latency by 45% using adaptive streaming chunk pre-caching.",
      "Maintained a 99.8% playback reliability rate even under highly unstable cellular network connections."
    ],
    PlayStoreLink: "https://play.google.com/store/apps/details?id=com.popil.tunes",
    AppStoreLink: "https://apps.apple.com/us/app/popil-tunes/id1665703854",
    Link: "https://play.google.com/store/apps/details?id=com.popil.tunes"
  }
];

export const EXPERIENCE_TIMELINE = [
  {
    role: "Senior Flutter Developer / Lead Developer",
    company: "Koops Technologies",
    duration: "Aug 2023 - Present",
    type: "Work Experience",
    points: [
      "Developed and maintained premium enterprise Flutter applications, including KOOPS Customer and KOOPS Sales systems.",
      "Implemented robust offline-first synchronization modules using Drift SQLite databases to ensure zero data loss during field transactions.",
      "Architected background tracking algorithms using optimized GPS geolocation intervals, reducing device battery consumption by 40%.",
      "Led the integration of dynamic rate configurations, B2B wholesale order processors, and route optimization systems."
    ]
  },
  {
    role: "Independent Freelance Flutter Developer",
    company: "Upwork & Direct Clients",
    duration: "Sept 2022 - Present",
    type: "Freelance Projects",
    points: [
      "Designed and published high-performance Flutter applications, including Popil Tune and Bookestan audio streaming platforms, on Google Play Store and Apple App Store.",
      "Engineered customizable audio playback and cached download queues with native Swift and Kotlin wrappers.",
      "Developed geolocation route mapping and sustainably-focused grocery delivery applications with advanced API bridges.",
      "Earned consistent 5-star client ratings for delivering scalable MVVM/Clean Architecture patterns and modular source codes."
    ]
  },
  {
    role: "Junior Flutter Developer",
    company: "Virva Infotech",
    duration: "Jul 2022 - Aug 2023",
    type: "Work Experience",
    points: [
      "Assisted in building cross-platform mobile applications using Flutter and Dart, maintaining 99.9% crash-free session metrics.",
      "Optimized screen rendering frame rates (to 60fps/120fps) by cleaning widget build methods and fixing memory leak allocations.",
      "Integrated Firebase services (Auth, Firestore, Cloud Messaging, Crashlytics) for real-time app events.",
      "Created custom responsive UI designs adapting smoothly across diverse mobile viewports."
    ]
  },
  {
    role: "Flutter Intern",
    company: "Aelius Technologies",
    duration: "Apr 2022 - Jul 2022",
    type: "Internship",
    points: [
      "Acquired hands-on experience in Flutter widgets, Dart language fundamentals, and mobile app lifecycle management.",
      "Collaborated with senior engineers to implement UI mockups, mock JSON data testing, and API integration paths.",
      "Participated in debugging runs, resolving UI rendering issues, and testing core features across multiple device simulators."
    ]
  },
  {
    role: "Professional Growth & Open Source Contributor",
    company: "Flutter Community",
    duration: "2020 - Present",
    type: "Professional Growth",
    points: [
      "Contributed bug fixes and feature enhancements to popular Flutter packages.",
      "Acquired expertise in modern database paradigms, including Drift (SQLite) and object databases like Isar.",
      "Trained in backend technologies including Serverpod (Dart-native backend), Node.js, and relational schema designing."
    ]
  }
];

export const SERVICES = [
  {
    title: "Mobile App Development",
    description: "Creating highly interactive, native-grade cross-platform apps for iOS and Android using Flutter & Dart. Pixel-perfect designs with fluid animations.",
    icon: "Phone"
  },
  {
    title: "Backend Development",
    description: "Developing robust API services and secure servers with Serverpod (Dart-native) and Node.js. Designing robust relational PostgreSQL databases.",
    icon: "Server"
  },
  {
    title: "API Development & Integration",
    description: "Designing RESTful and GraphQL APIs. Integrating third-party gateways (Stripe, PayPal, Auth0, Maps) with security validation layers.",
    icon: "Cpu"
  },
  {
    title: "Offline-First Architecture",
    description: "Structuring applications that remain fully operational without internet connectivity. Implementing Drift/Isar databases and CRDT conflict resolution.",
    icon: "Database"
  },
  {
    title: "Performance Optimization",
    description: "Analyzing frame rates, memory footprints, and asset load cycles. Enhancing startup latency, image caching, and local database speeds.",
    icon: "Zap"
  },
  {
    title: "UI/UX Implementation",
    description: "Translating Figma designs into responsive code with beautiful micro-interactions, dark modes, animations, and high accessibility standards.",
    icon: "Layout"
  }
];

export const TESTIMONIALS = [
  {
    name: "Sarah Jenkins",
    role: "Founder, Bookiestan Co.",
    content: "Abhay transformed our product vision into a flawless mobile app. His implementation of the background audio caching in Flutter is incredibly stable, and his architectural planning saved us months of development.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
  },
  {
    name: "David Chen",
    role: "CTO, SportsConnect",
    content: "We hired Abhay to redesign the tournament bracket logic on Atlatik. Not only did he optimize the database queries, but he built a highly responsive frontend that our users love. A true mobile architect.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
  },
  {
    name: "Elena Rostova",
    role: "Product Manager, PopilTune",
    content: "Abhay's command over Flutter and state management is outstanding. He led the integration of our audio synchronization feature and delivered clean, highly maintainable code with comprehensive test coverages.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150"
  }
];
