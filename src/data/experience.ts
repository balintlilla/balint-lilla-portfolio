export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Evrone",
    role: "Senior Full-Stack Engineer / AI Engineer",
    period: "08/2021 – Present",
    location: "Berlin, Germany",
    highlights: [
      "Design and implement backend platforms with Python, FastAPI, Node.js, TypeScript, Express, and NestJS — clear service boundaries, validation, and async workflows.",
      "Ship AI/LLM features with OpenAI and Azure OpenAI: RAG pipelines, embeddings, vector retrieval, prompt orchestration, structured outputs, and AI-driven automation.",
      "Build production React/Next.js experiences with TypeScript, reusable patterns, and tight integration with backend and AI services.",
      "Shape end-to-end architecture across frontend, backend, AI, data, messaging, infrastructure, and production operations.",
      "Operate cloud-native apps on AWS, Azure, and GCP with Docker, Kubernetes, Terraform, and automated CI/CD.",
      "Lead architecture discussions, mentor engineers, review designs, and own production reliability.",
    ],
  },
  {
    company: "Timspark",
    role: "Full Stack Engineer",
    period: "01/2019 – 07/2021",
    location: "London, United Kingdom",
    highlights: [
      "Delivered end-to-end applications with Python, FastAPI, Django, TypeScript, Node.js, and NestJS.",
      "Built modern web apps with React, Next.js, and TypeScript from product requirements to maintainable UI.",
      "Automated build, test, and release workflows with GitHub-based DevOps across AWS and Azure.",
      "Delivered AI-powered applications, APIs, and automation tools as AI capabilities entered product workflows.",
      "Led technical design discussions and peer code reviews across delivered features.",
    ],
  },
  {
    company: "Uvik Software",
    role: "Software Engineer",
    period: "06/2016 – 12/2018",
    location: "London, United Kingdom",
    highlights: [
      "Built full-stack applications with Python, FastAPI, TypeScript, Node.js, React, and Next.js.",
      "Created scalable REST APIs and contributed to microservice-oriented architectures.",
      "Containerized services with Docker and contributed to CI/CD pipelines for repeatable delivery.",
      "Integrated AI services, CRM systems, third-party APIs, and authentication providers.",
      "Optimized MySQL, PostgreSQL, SQL Server, and MongoDB data models and queries.",
    ],
  },
  {
    company: "ITS",
    role: "Software Developer | Intern",
    period: "01/2014 – 04/2016",
    location: "Ann Arbor, MI, USA",
    highlights: [
      "Contributed to full-stack web development with JavaScript, Python, Node.js, and React.",
      "Created and maintained scalable REST APIs and backend services for business workflows.",
      "Built responsive frontend interfaces with modern UI practices and CI/CD participation.",
    ],
  },
];
