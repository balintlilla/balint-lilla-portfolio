export type SkillGroup = {
  title: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    title: "SaaS & Architecture",
    items: [
      "SaaS platforms",
      "Microservices",
      "Distributed systems",
      "Event-driven architecture",
      "API-first design",
      "Real-time systems",
      "Serverless patterns",
    ],
  },
  {
    title: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "HTML5 / CSS3",
      "Responsive UI",
      "Component architecture",
      "Frontend performance",
    ],
  },
  {
    title: "Backend & APIs",
    items: [
      "Python",
      "FastAPI",
      "Django",
      "Node.js",
      "Express.js",
      "NestJS",
      "REST / GraphQL",
      "Webhooks",
    ],
  },
  {
    title: "AI / LLM / RAG",
    items: [
      "OpenAI APIs",
      "Azure OpenAI",
      "Generative AI",
      "RAG pipelines",
      "Embeddings",
      "Vector databases",
      "Prompt orchestration",
      "AI automation",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    items: [
      "AWS",
      "Azure",
      "GCP",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Infrastructure as Code",
    ],
  },
  {
    title: "Delivery & Quality",
    items: [
      "GitHub Actions",
      "GitLab CI/CD",
      "Jenkins",
      "Jest / Vitest",
      "Pytest",
      "Playwright / Cypress",
      "OAuth 2.0 / JWT / RBAC",
    ],
  },
  {
    title: "Data & Messaging",
    items: [
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Kafka",
      "RabbitMQ",
      "WebSockets / Socket.IO",
      "MongoDB",
    ],
  },
  {
    title: "Leadership",
    items: [
      "Technical leadership",
      "Architecture reviews",
      "Mentoring",
      "Engineering standards",
      "Production ownership",
    ],
  },
];
