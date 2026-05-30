/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false,
  useCustomCursor: false,
  googleTrackingID: "",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Amir",
  logo_name: "Amir",
  nickname: "amiranmanesh",
  full_name: "Amir Iranmanesh",
  subTitle:
    "Engineering Manager and Senior Backend Engineer with 7+ years building distributed systems, blockchain platforms, and financial infrastructure at scale.",
  resumeLink: "",
  mail: "mailto:iranmanesh.ah@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/amiranmanesh/",
  linkedin: "https://www.linkedin.com/in/amiranmanesh/",
  gmail: "iranmanesh.ah@gmail.com",
  telegram: "https://t.me/iranmanesh_ah",
  website: "https://amiranmanesh.ir",
};

const skills = {
  data: [
    {
      title: "Programming Languages",
      fileName: "FullStackImg",
      skills: [
        "⚡ Expert in Golang for high-performance backend systems",
        "⚡ Proficient in TypeScript, NodeJS, Python, Java, and Kotlin",
        "⚡ Strong foundation in system programming and distributed computing",
      ],
      softwareSkills: [
        {
          skillName: "Golang",
          fontAwesomeClassname: "simple-icons:go",
          style: {
            color: "#67d0de",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#007acc",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#376c99",
          },
        },
        {
          skillName: "Rust",
          fontAwesomeClassname: "simple-icons:rust",
          style: {
            color: "#dea584",
          },
        },
        {
          skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "Kotlin",
          fontAwesomeClassname: "simple-icons:kotlin",
          style: {
            color: "#756dda",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#7277ad",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
    {
      title: "Databases & Messaging",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ PostgreSQL, MongoDB, Redis, and Memcached for data persistence",
        "⚡ RabbitMQ, NATS, and Kafka for event-driven architectures",
        "⚡ gRPC for high-performance inter-service communication",
      ],
      softwareSkills: [
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: { color: "#336791" },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: { color: "#149b4e" },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "simple-icons:redis",
          style: { color: "#dc382d" },
        },
        {
          skillName: "RabbitMQ",
          fontAwesomeClassname: "simple-icons:rabbitmq",
          style: { color: "#FF6600" },
        },
        {
          skillName: "Kafka",
          fontAwesomeClassname: "simple-icons:apachekafka",
          style: { color: "#4c00ffff" },
        },
        {
          skillName: "Nats",
          fontAwesomeClassname: "simple-icons:natsdotio",
          style: { color: "#4c00ffff" },
        },
      ],
    },
    {
      title: "Blockchain & Security",
      fileName: "FullStackImg",
      skills: [
        "⚡ Stellar, Ethereum, and Hyperledger blockchain platforms",
        "⚡ Smart contracts development with Solidity",
        "⚡ PKI, Shamir Secret Sharing, and secure key management",
      ],
      softwareSkills: [
        {
          skillName: "Blockchain",
          fontAwesomeClassname: "simple-icons:blockchaindotcom",
          style: { color: "#121D33" },
        },
        {
          skillName: "Stellar",
          fontAwesomeClassname: "simple-icons:stellar",
          style: { color: "#7D00FF" },
        },
        {
          skillName: "Ethereum",
          fontAwesomeClassname: "simple-icons:ethereum",
          style: { color: "#3C3C3D" },
        },
      ],
    },
    {
      title: "DevOps & Observability",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Docker and Kubernetes for container orchestration",
        "⚡ AWS services: Cognito, DynamoDB, S3, Lambda",
        "⚡ Elastic Stack, Kibana, Sentry, Prometheus, and Grafana for monitoring",
      ],
      softwareSkills: [
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: { color: "#2496ed" },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: { color: "#326ce5" },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: { color: "#FF9900" },
        },
        {
          skillName: "Elastic",
          fontAwesomeClassname: "simple-icons:elastic",
          style: { color: "#F46800" },
        },
        {
          skillName: "Grafana",
          fontAwesomeClassname: "simple-icons:grafana",
          style: { color: "#F46800" },
        },
        {
          skillName: "Prometheus",
          fontAwesomeClassname: "simple-icons:prometheus",
          style: { color: "#F46800" },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "M.Sc. Artificial Intelligence",
      subtitle: "Science and Research Branch, Azad University, Tehran, Iran",
      logo_path: "uni-azad.png",
      alt_name: "MSC AI",
      duration: "2022 - 2025",
      descriptions: [
        "⚡ Graduate studies with focus on machine learning and applied AI.",
      ],
      website_link: "https://srbiau.ac.ir/",
    },
    {
      title: "B.Sc. Computer Engineering",
      subtitle: "Semnan University, Semnan, Iran",
      logo_path: "semuni-logo.png",
      alt_name: "BSC CE",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ Studied key topics like Data Structures, DBMS, AI, and Security.",
        "⚡ Served as a Teacher Assistant for C++ Programming for 2 years.",
      ],
      website_link: "https://ce.semnan.ac.ir/",
    },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Leadership, backend systems, and blockchain platforms",
  description:
    "Engineering leadership and hands-on backend development across fintech, blockchain, PKI, and national-scale infrastructure—focused on reliability, security, and clear architecture.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Kuknos",
      experiences: [
        {
          title: "Chief Technology Officer (CTO)",
          company: "Kuknos",
          company_url: "https://kuknos.org/",
          logo_path: "",
          duration: "May 2024 – Present",
          location: "Tehran, Iran",
          description:
            "Lead an engineering organization of 15+ across Backend, Frontend, and DevOps. Own technical direction across Kuknos Blockchain, Borna Blockchain (CBDC), payment infrastructure, enterprise wallet systems, PKI/certificate services, and distributed backend platforms. Define OKRs and roadmaps, review architecture, and establish reliability standards through observability and on-call processes.",
          color: "#2563EB",
        },
        {
          title: "Team Lead",
          company: "Kuknos",
          company_url: "https://kuknos.org/",
          logo_path: "",
          duration: "May 2023 – May 2024",
          location: "Tehran, Iran",
          description:
            "Led backend and blockchain engineering for Borna Blockchain, a Hyperledger Fabric-based CBDC platform for the Central Bank of Iran. Worked on secure integrations with banks and financial institutions, reviewed microservice architectures, data consistency models, and secure API layers.",
          color: "#2563EB",
        },
        {
          title: "Backend Developer",
          company: "Kuknos",
          company_url: "https://kuknos.org/",
          logo_path: "",
          duration: "Sep 2021 – May 2023",
          location: "Tehran, Iran",
          description:
            "Worked on Kuknos Blockchain, a fork of Stellar, and built backend services around blockchain operations, tokenization, wallets, and signing flows. Also developed PKI and digital certificate microservices, secure PDF-signing systems, key-management workflows with Shamir Secret Sharing, federated identity services, and encrypted storage using IPFS/Minio.",
          color: "#2563EB",
        },
      ],
    },
    {
      title: "Fintech & Consulting",
      experiences: [
        {
          title: "Technical Consultant",
          company: "Vency",
          company_url: "",
          logo_path: "",
          duration: "Jan 2026 – Apr 2026",
          location: "Part-time",
          description:
            "Designed HubChain, a multi-tenant blockchain middleware and orchestration service for user balances across 30+ cryptocurrencies and 35+ blockchain networks. Built a provider-agnostic architecture for wallet/address management, balance freeze/unfreeze, transfers, withdrawals, real-time sync, audit ledgers, Redis distributed locking, RabbitMQ events, gRPC/REST APIs, and Elastic APM-compatible observability.",
          color: "#2563EB",
        },
        {
          title: "Technical Consultant",
          company: "Dr. Saina",
          company_url: "",
          logo_path: "",
          duration: "Mar 2025 – May 2025",
          location: "Part-time",
          description:
            "Consulted on a high-load communication and messaging system using WebSocket, Redis Redlock, MongoDB, and concurrent processing. Improved real-time chat architecture, fixed CPU/RAM usage problems under heavy user load, and reviewed service reliability and performance.",
          color: "#2563EB",
        },
        {
          title: "Backend Engineer",
          company: "GoldenGate",
          company_url: "",
          logo_path: "",
          duration: "Jan 2025 – Mar 2025",
          location: "",
          description:
            "Designed and developed a blockchain-based precious metal asset platform with a different architecture from ZaryaalGold. Implemented wallet operations, asset issuance workflows, pricing, transaction logic, settlement processes, and blockchain integration using Golang, gRPC, RabbitMQ, Redis, PostgreSQL, Stellar, Elastic/Grafana.",
          color: "#2563EB",
        },
        {
          title: "Backend Engineer",
          company: "ZaryaalGold",
          company_url: "",
          logo_path: "",
          duration: "Jul 2024 – Jan 2025",
          location: "",
          description:
            "Developed a gold asset ecosystem for buying, selling, transferring, and settling user assets. Built backend services for user balances, IPG/payment flows, settlement, asset transfers, and a custom GL (general ledger). Stack: Golang microservices, gRPC, RabbitMQ, Redis, PostgreSQL, Kong Gateway, Elastic/Kibana/Grafana.",
          color: "#2563EB",
        },
        {
          title: "Backend Engineer",
          company: "Lendin",
          company_url: "https://lendin.com/",
          logo_path: "",
          duration: "May 2023 – Oct 2023",
          location: "Remote",
          description:
            "Peer-to-peer lending with installment-based lending and crypto collateral. Led backend team and architected services using Go/Node.js, gRPC, PostgreSQL, RabbitMQ, Redis, NATS; integrated AWS services (Cognito, S3, DynamoDB); implemented loan lifecycle, repayment, wallet operations, and KYC flows.",
          color: "#2563EB",
        },
      ],
    },
    {
      title: "Early Career",
      experiences: [
        {
          title: "Android Developer",
          company: "Early Career",
          company_url: "",
          logo_path: "",
          duration: "2017 – 2021",
          location: "",
          description:
            "Built 10+ Android applications using MVP/MVVM, Room, Firebase, ARCore, and MLKit.",
          color: "#2563EB",
        },
      ],
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact",
    profile_image_path: "me.jpg",
    description:
      "For roles in backend leadership, fintech infrastructure, blockchain platforms, or security-critical systems, feel free to reach out via email or LinkedIn.",
  },
  blogSection: {
    title: "",
    subtitle: "",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Selected projects and products across fintech backends, ledger systems, and platform infrastructure. Some work is summarized at a high level to avoid sharing sensitive details.",
  avatar_image_path: "projects_image.svg",
};

const projects = {
  data: [
    {
      id: "8",
      name: "Weblitics",
      url: "",
      description:
        "Modular Go analytics platform where users create projects/sources and install a frontend SDK that sends events to backend ingestion services. Built with Go workspaces, Redis, PostgreSQL, ClickHouse, Elastic/Kibana, Prometheus, distributed worker pools, Redlock, and reliable high-throughput event processing for thousands of events.",
      languages: [
        {
          name: "Golang",
          iconifyClass: "logos-go",
        },
        {
          name: "Redis",
          iconifyClass: "logos-redis",
        },
        {
          name: "PostgreSQL",
          iconifyClass: "logos-postgresql",
        },
      ],
    },
    {
      id: "7",
      name: "HubChain",
      url: "",
      description:
        "Multi-tenant blockchain middleware for balance management across 30+ currencies and 35+ networks with provider-agnostic integrations.",
      languages: [
        {
          name: "Golang",
          iconifyClass: "logos-go",
        },
        {
          name: "Redis",
          iconifyClass: "logos-redis",
        },
        {
          name: "RabbitMQ",
          iconifyClass: "logos-rabbitmq",
        },
      ],
    },
    {
      id: "6",
      name: "Dr. Saina Messaging",
      url: "",
      description:
        "High-load WebSocket communication system with Redis Redlock, MongoDB concurrency handling, and CPU/RAM usage optimization.",
      languages: [
        {
          name: "Golang",
          iconifyClass: "logos-go",
        },
        {
          name: "Redis",
          iconifyClass: "logos-redis",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
      ],
    },
    {
      id: "5",
      name: "GoldenGate",
      url: "",
      description:
        "Blockchain-based precious metal asset platform with wallet operations, issuance workflows, transaction processing, and settlement.",
      languages: [
        {
          name: "Golang",
          iconifyClass: "logos-go",
        },
        {
          name: "PostgreSQL",
          iconifyClass: "logos-postgresql",
        },
        {
          name: "Stellar",
          iconifyClass: "logos-stellar",
        },
      ],
    },
    {
      id: "4",
      name: "ZaryaalGold",
      url: "",
      description:
        "Gold asset ecosystem for buy, sell, transfer, IPG/payment settlement, user balances, and custom GL/general ledger operations.",
      languages: [
        {
          name: "Golang",
          iconifyClass: "logos-go",
        },
        {
          name: "PostgreSQL",
          iconifyClass: "logos-postgresql",
        },
        {
          name: "RabbitMQ",
          iconifyClass: "logos-rabbitmq",
        },
      ],
    },
    {
      id: "3",
      name: "Lendin",
      url: "https://lendin.com/",
      description:
        "Peer-to-peer lending platform with installment lending, crypto collateral, loan lifecycle, repayment, wallet, and KYC flows.",
      languages: [
        {
          name: "Golang",
          iconifyClass: "logos-go",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "Redis",
          iconifyClass: "logos-redis",
        },
      ],
    },
    {
      id: "2",
      name: "Radgir App",
      url: "https://radgir.net/",
      description:
        "Smart application to track post packages with user-friendly UI & automation.",
      languages: [
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
        {
          name: "Android",
          iconifyClass: "logos-android",
        },
      ],
    },
    {
      id: "1",
      name: "HighFollower App",
      url: "https://highfollower.com/",
      description:
        "Android application for Instagram engagement and follower growth.",
      languages: [
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
        {
          name: "Android",
          iconifyClass: "logos-android",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
