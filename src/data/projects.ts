export type Project = {
  slug: string;
  title: string;
  tag: string;
  summary: string;
  outcome: string;
  stack: string[];
  note: string;
};

/**
 * Capability-led case studies synthesized from professional experience.
 * Replace with named product narratives when client-safe details are available.
 */
export const projects: Project[] = [
  {
    slug: "ai-rag-platforms",
    title: "Production LLM & RAG platforms",
    tag: "AI Systems",
    summary:
      "End-to-end AI features spanning retrieval pipelines, embeddings, prompt orchestration, and structured model outputs — wired into real product workflows.",
    outcome:
      "Reliable Generative AI capabilities integrated with backend services, auth boundaries, and observable production operations.",
    stack: [
      "OpenAI",
      "Azure OpenAI",
      "RAG",
      "Python",
      "FastAPI",
      "Vector search",
      "Next.js",
    ],
    note: "Portfolio study based on production AI work at Evrone and prior roles.",
  },
  {
    slug: "cloud-native-saas",
    title: "Cloud-native SaaS & APIs",
    tag: "Platform",
    summary:
      "API-first platforms with clear service boundaries, event-driven coordination, and cloud-native delivery across multi-cloud environments.",
    outcome:
      "Scalable microservice architectures with CI/CD automation, Kubernetes delivery, and Terraform-managed infrastructure.",
    stack: [
      "TypeScript",
      "NestJS",
      "Node.js",
      "Kafka",
      "Kubernetes",
      "Terraform",
      "AWS",
    ],
    note: "Portfolio study reflecting platform engineering across Evrone and Timspark.",
  },
  {
    slug: "realtime-product-surfaces",
    title: "Realtime product interfaces",
    tag: "Full Stack",
    summary:
      "React/Next.js product surfaces tightly coupled to backend and AI services — with WebSockets, resilient state, and performance-aware UI.",
    outcome:
      "Responsive experiences for live updates, collaboration, and AI-assisted workflows with strong testing coverage.",
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "WebSockets",
      "PostgreSQL",
      "Redis",
      "Playwright",
    ],
    note: "Portfolio study drawn from full-stack product delivery across roles.",
  },
];
