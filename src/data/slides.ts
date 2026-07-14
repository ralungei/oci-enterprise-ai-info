import type { SlideSection } from "./types";

export const slides: SlideSection[] = [
  /* ── 1. HERO ── */
  {
    id: "hero",
    sectionLabel: "Introduction",
    title: "One Platform. Any Model. Any Agent.",
    type: "hero",
    theme: "dark",
    speakerNotes: [
      "Welcome everyone, and thank you for joining us today. I'm excited to walk you through OCI Enterprise AI - Oracle's comprehensive platform for building, deploying, and managing enterprise-grade AI agents.",
      "Over the next 45 minutes or so, we'll cover a lot of ground. But before we show you any product, let's start with something fundamental: what actually IS an AI agent? Because if we're going to build agents, we should agree on what we mean.",
      "Everything I'm showing you today is generally available on OCI right now. Let's get started.",
    ],
    content: {
      badge: "Generally Available | 2026",
      titleLines: ["One Platform.", "Any Model.", "Any Agent."],
      subtitle:
        "Build, deploy, and govern enterprise AI agents with the models you choose and the tools you need.",
    },
  },

  /* ── 2. WHAT IS AN AGENT ── */
  {
    id: "what-is-agent",
    sectionLabel: "What is an Agent",
    title: "What is an Agent, Really?",
    type: "what-is-agent",
    theme: "light",
    speakerNotes: [
      "Before we show you the platform, let's be honest about what an agent is, and what it isn't. The term 'agent' has become the most overloaded word in tech right now. Everyone claims to have agents. So let's be precise.",
      "An AI agent is a system that has a goal, can reason about how to achieve it, has access to tools to take actions, and has memory to learn and persist context. If any of these pieces is missing, it's probably not an agent. It might be a chatbot, a workflow, or an automation with an LLM step.",
      "Think of it as a spectrum. On the left you have a simple chatbot. It responds to questions, no tools, no memory across sessions. Then you have copilots that assist humans with suggestions but don't take autonomous action. Then agents that can reason, plan, use tools, and complete tasks autonomously. And at the far end, autonomous agents operate continuously, monitoring and acting proactively.",
      "Let's test your intuition with a progression. Imagine an HR assistant that uses GPT-4o with a great system prompt to answer policy questions. Is that an agent? Now add web search so it can look up the latest labor regulations. Is it an agent now? What if it also searches your internal docs, checks the CRM, drafts emails, and remembers each employee's history? And then imagine a financial close system with 30 specialized prompts, planning, reasoning, multiple tools, and autonomous background execution.",
      "The truth is, it's genuinely hard to draw the line. What we see is a trend towards more 'agentic' systems. A simple agent and an advanced one are both called agents, but they're very different things. The important thing is that the platform supports the full spectrum, from a simple tool-using assistant all the way to a fully autonomous multi-step agent.",
    ],
    content: {
      definition:
        "An AI agent is a system that has a goal, reasons about how to achieve it, uses tools to take action, and has memory to learn from context.",
      components: [
        {
          icon: "solar:target-bold-duotone",
          name: "Goal",
          desc: "A clear objective, not just responding to prompts.",
        },
        {
          icon: "solar:lightbulb-bolt-bold-duotone",
          name: "Reasoning",
          desc: "Plans, breaks down tasks, decides next steps.",
        },
        {
          icon: "solar:settings-bold-duotone",
          name: "Tools",
          desc: "APIs, databases, web search, code execution.",
        },
        {
          icon: "solar:database-bold-duotone",
          name: "Memory",
          desc: "Persistent context across turns and sessions.",
        },
      ],
      spectrum: [
        {
          label: "Chatbot",
          desc: "Responds to questions. No tools, no persistent memory.",
          isAgent: false,
        },
        {
          label: "Copilot",
          desc: "Assists humans with suggestions. Doesn't act autonomously.",
          isAgent: false,
        },
        {
          label: "Agent",
          desc: "Reasons, plans, uses tools, completes tasks autonomously.",
          isAgent: true,
        },
        {
          label: "Autonomous Agent",
          desc: "Operates continuously. Monitors, decides, and acts proactively.",
          isAgent: true,
        },
      ],
      quiz: [
        {
          scenario:
            "An internal HR assistant that uses GPT-4o with a detailed system prompt to answer employee questions about company policies",
          isAgent: false,
          explanation:
            "Good system prompt, but no tools, no memory, no autonomous decisions. It's a well-configured LLM call.",
        },
        {
          scenario:
            "The same HR assistant, but now with web search enabled to look up the latest labor regulations before answering",
          isAgent: false,
          explanation:
            "It uses a tool, so it's more agentic. But it still just responds to questions reactively. No planning, no autonomy.",
        },
        {
          scenario:
            "A customer support system that searches your docs, checks the CRM, drafts response emails, and remembers each customer's history across sessions",
          isAgent: true,
          explanation:
            "Multiple tools, cross-session memory, autonomous decisions about which actions to take. This is clearly agentic.",
        },
        {
          scenario:
            "A financial close app with 30 specialized prompts, reasoning, planning, access to ERP/CRM/email/calendar, long-term memory, and autonomous background execution",
          isAgent: true,
          explanation:
            "Advanced agent. Multi-step planning, diverse tools, persistent memory, runs autonomously in the background.",
        },
      ],
    },
  },

  /* ── 3. CHALLENGE ── */
  {
    id: "challenge",
    sectionLabel: "The Challenge",
    title: "The Generative AI Scramble",
    type: "challenge",
    theme: "mesh-1",
    speakerNotes: [
      "Now that we agree on what an agent is, let's talk about what's happening in the real world. It's a scramble. Every week there's a new framework, a new model provider, a new 'agent platform.' And enterprises are caught in the middle.",
      "Here are the numbers that matter: half of all GenAI pilots stall before reaching production. The average large enterprise is juggling more than five different AI providers. 44% have already experienced data privacy incidents during pilots. And inference costs are climbing 25-45% year over year.",
      "What enterprises actually need is simple: a platform that's scalable, extensible, gives you value fast, and has unified governance. Not another framework-of-the-month.",
      "We see the journey in three phases. 2023 was experimentation - one-off GenAI tasks. 2025 is adoption - AI built into business processes. 2027 and beyond is acceleration - proactive, autonomous agents driving real business outcomes.",
    ],
    content: {
      headline: "The Generative AI",
      headlineAccent: "Scramble.",
      subtext:
        "Too many providers. New frameworks every week. Pilots that never reach production. Sound familiar?",
      stats: [
        { num: "5+", text: "GenAI providers per enterprise" },
        { num: "<25%", text: "cross-vendor AI interoperability" },
        { num: "50%", text: "of GenAI pilots stall before production" },
        { num: "25‑45%", text: "annual increase in inference costs" },
        { num: "44%", text: "report data-privacy incidents" },
      ],
      timeline: [
        {
          year: "2023",
          phase: "Experimentation",
          desc: "One-off GenAI tasks improving individual productivity",
        },
        {
          year: "2025",
          phase: "Adoption",
          desc: "GenAI built into business processes for measurable impact",
        },
        {
          year: "2027+",
          phase: "Acceleration",
          desc: "Proactive, autonomous agents driving business outcomes",
        },
      ],
    },
  },

  /* ── 4. PLATFORM PILLARS ── */
  {
    id: "platform",
    sectionLabel: "The Platform",
    title: "Two pillars. One governance layer.",
    type: "platform",
    theme: "dark",
    speakerNotes: [
      "So here's our answer. OCI Enterprise AI is organized into two pillars and a governance base.",
      "Pillar one: Managed AI API. This is where you build agents. It gives you access to models from all major providers, the Responses API for orchestration, built-in tools like web search, file search, code interpreter, NL2SQL, and managed memory. Everything you need to go from idea to working agent.",
      "Pillar two: Hosted Deployments. This is where you deploy agents. Containerize your app - whether it's LangGraph, LangChain, CrewAI, or your own code - push it, and OCI handles the rest. Auto-scaling, managed storage, networking, all taken care of.",
      "And underneath both: Governance. Security, compliance, observability, and data privacy. Not as an afterthought - as the foundation. Zero vendor data retention, dedicated compute, full tracing.",
      "The agent lifecycle flows through seven stages: Ideate, Build, Test, Deploy, Orchestrate, Execute, and Observe. Our platform covers every stage, so you're never cobbling together disparate tools.",
    ],
    content: {
      pillars: [
        {
          num: "01",
          name: "Responses API",
          tagline: "Build Agents",
          desc: "All major providers. Responses API. Built-in tools. Managed memory.",
          gradient: "from-red-500/20 via-red-500/5 to-transparent",
        },
        {
          num: "02",
          name: "Hosted Deployments",
          tagline: "Deploy Agents",
          desc: "Containerize, push, deploy. Auto-scaling and networking handled.",
          gradient: "from-orange-500/15 via-orange-500/5 to-transparent",
        },
      ],
      lifecycle: [
        { icon: "solar:lightbulb-bold-duotone", label: "Ideate" },
        { icon: "solar:code-bold-duotone", label: "Build" },
        { icon: "solar:test-tube-bold-duotone", label: "Test" },
        { icon: "solar:rocket-2-bold-duotone", label: "Deploy" },
        { icon: "solar:shuffle-bold-duotone", label: "Orchestrate" },
        { icon: "solar:play-bold-duotone", label: "Execute" },
        { icon: "solar:eye-bold-duotone", label: "Observe" },
      ],
    },
  },

  /* ── 5. MODELS ── */
  {
    id: "models",
    sectionLabel: "Models",
    title: "No lock-in. Your choice.",
    type: "models",
    theme: "mesh-2",
    speakerNotes: [
      "Let's talk about models. And let's start with the most important message: you don't have to choose a provider. We have pioneering agreements with OpenAI, Google, xAI, Meta, and Cohere. All accessible through a single API.",
      "Privacy - and this is non-negotiable: your data is NEVER used to train models. Zero vendor data retention. Your prompts, your responses, your data stays yours. Period.",
      "No lock-in. Want to switch from one model to another? Change one line of code. Same API, same SDK, same application. No rewrites.",
      "For regulated industries and production workloads, Dedicated AI Clusters give you isolated GPU capacity reserved for you, full data sovereignty, predictable performance.",
    ],
    content: {
      providers: [
        { provider: "OpenAI", models: "GPT-4o, GPT-4.1, o-series", badge: "6+ models" },
        { provider: "Google", models: "Gemini 2.0 Flash & Pro", badge: "3 models" },
        { provider: "xAI", models: "Grok 4.x series", badge: "4 models" },
        { provider: "Meta", models: "Llama 4 open-source", badge: "2+ models" },
        { provider: "Cohere", models: "Command A, R/R+, Embed, Rerank", badge: "4 models" },
        { provider: "BYOM", models: "Bring Your Own Model", badge: "Unlimited" },
      ],
      codeExample: `from openai import OpenAI

client = OpenAI(
    base_url="https://inference.generativeai
      .us-chicago-1.oci.oraclecloud.com/v1",
    api_key="YOUR_OCI_API_KEY",
)

# Switch models - just change this line
response = client.responses.create(
    model="openai.gpt-4o",
    input="Analyze our Q1 pipeline."
)`,
      deploymentModes: [
        {
          title: "On-Demand",
          subtitle: "Pay per token, auto-scaling",
          desc: "Shared infrastructure with auto-scaling. Ideal for dev and variable workloads.",
          accent: false,
          icon: "solar:bolt-bold-duotone",
        },
        {
          title: "Dedicated AI Clusters",
          subtitle: "Reserved GPU capacity",
          desc: "Isolated compute, full data sovereignty. For production and regulated industries.",
          accent: false,
          icon: "solar:server-bold-duotone",
        },
      ],
      keyMessages: [
        {
          icon: "solar:shield-check-bold-duotone",
          title: "Your Data Is Never Used to Train Models",
          desc: "Prompts processed and discarded. Zero vendor retention. Your business intelligence stays yours.",
        },
        {
          icon: "solar:lock-keyhole-unlocked-bold-duotone",
          title: "Zero Lock-In, Real Portability",
          desc: "Switch models by changing one line. Same API, same SDK. Your code works as-is with OpenAI SDK.",
        },
      ],
    },
  },

  /* ── 6. TOOLS ── */
  {
    id: "tools",
    sectionLabel: "Agent Tools",
    title: "Everything an agent needs. Built in.",
    type: "tools",
    theme: "gray",
    speakerNotes: [
      "Remember the four components of an agent? Goal, Reasoning, Tools, Memory. This is the Tools layer - everything managed by the platform, all accessible through the Responses API.",
      "Web Search gives agents real-time access to the internet with source citations. File Search provides enterprise RAG - your agent can search through your company's documents intelligently. The Connector API lets you connect File Search to external data sources like Oracle Object Storage, keeping everything in sync.",
      "Code Interpreter runs Python code safely in a sandbox. NL2SQL lets your agent query databases by just asking questions in plain English - and your data never moves.",
      "Function Calling lets agents trigger actions in your own systems - your APIs, your business logic. Remote MCP is the emerging standard for connecting to external tools - and with A2A (Agent-to-Agent) protocol support, your agents can discover and collaborate with other agents.",
      "The real power is combining multiple tools in one request. The agent figures out which tools to use, in what order, all by itself.",
    ],
    content: {
      tools: [
        {
          icon: "solar:globus-bold-duotone",
          name: "Web Search",
          desc: "Real-time web retrieval with source citations",
          whatItDoes: "Real-time web access. Agent decides when to search. Results include source URLs for verification.",
          howItWorks: "Add web_search to tools array. Platform searches, injects results, generates cited responses.",
        },
        {
          icon: "solar:documents-bold-duotone",
          name: "File Search",
          desc: "Search your company docs intelligently",
          whatItDoes: "Upload docs or connect via Connector API. Agent searches thousands of pages. Auto-syncs with Object Storage.",
          howItWorks: "Create Vector Store, upload or connect sources. Auto chunking, embedding, and indexing.",
        },
        {
          icon: "solar:code-bold-duotone",
          name: "Code Interpreter",
          desc: "Run Python code safely in a sandbox",
          whatItDoes: "Agent writes and runs Python for data analysis, charts, and file processing. 420+ pre-installed libraries.",
          howItWorks: "Writes code → executes in sandbox → reviews results → iterates. No network access.",
        },
        {
          icon: "solar:database-bold-duotone",
          name: "NL2SQL",
          desc: "Ask your database questions in plain English",
          whatItDoes: "Natural language to SQL. Understands your schema and business terms. Data never moves.",
          howItWorks: "Queries run in your existing database with existing permissions. No pipelines, no copies.",
        },
        {
          icon: "solar:programming-bold-duotone",
          name: "Function Calling",
          desc: "Trigger actions in your own systems",
          whatItDoes: "Call your own APIs, databases, and business logic. You define what the agent can do.",
          howItWorks: "Describe functions + parameters → agent decides when to call → your app executes.",
        },
        {
          icon: "solar:link-round-bold-duotone",
          name: "Remote MCP",
          desc: "Connect to external tools via open standard",
          whatItDoes: "Open standard for AI-to-tool connectivity. Auto-discover MCP tools. A2A protocol for agent collaboration.",
          howItWorks: "Point to MCP server URL → agent discovers tools → calls them directly. No extra code.",
        },
      ],
      multiToolCode: `response = client.responses.create(
    model="openai.gpt-4o",
    tools=[
        {"type": "web_search"},
        {"type": "file_search",
         "vector_store_ids": ["vs_catalog"]},
        {"type": "code_interpreter"},
        {"type": "sql",
         "connection": {"db_type": "oracle"}},
        {"type": "mcp",
         "server_url": "https://jira.co/mcp"},
    ],
    input="Analyze Q1 sales vs market trends.
           Create chart and Jira tickets for
           underperforming regions."
)`,
    },
  },

  /* ── 7. MEMORY ── */
  {
    id: "memory",
    sectionLabel: "Agent Memory",
    title: "Agents that remember.",
    type: "memory",
    theme: "light",
    speakerNotes: [
      "Memory is what separates a real agent from a stateless API call. We provide three types of managed memory, each addressing a different need.",
      "Multi-Turn Conversations preserve context across turns. Ask a question, get an answer, then say 'tell me more about that' - the agent knows what 'that' refers to. The platform handles this automatically.",
      "Long-Term Memory persists across conversations. Your agent remembers what a user discussed last week. Like having a colleague who actually reads the meeting notes.",
      "Compaction solves the cost problem. Long conversations accumulate thousands of tokens. Auto-compaction condenses history while keeping the important stuff - 80% cost reduction with no quality loss.",
    ],
    content: {
      types: [
        {
          title: "Multi-Turn",
          sub: "Short-term memory",
          desc: "Keeps conversation context. Follow-ups and references just work. No database setup.",
          code: "User: What were our Q1 results?\nAgent: Revenue was $4.2M, up 15%...\nUser: How does that compare to Q4?\nAgent: Q4 was $3.8M, so Q1 shows a 10.5% improvement quarter-over-quarter.",
        },
        {
          title: "Long-Term",
          sub: "Cross-conversation",
          desc: "Remembers across sessions. Monday's context available on Thursday.",
          code: "Monday:\nUser: I'm working on the ACME deal, $500K.\nAgent: Got it. I'll track the ACME opportunity.\n\nThursday:\nUser: Any updates on that deal?\nAgent: The ACME deal ($500K). I see new activity in the CRM since Monday...",
        },
        {
          title: "Compaction",
          sub: "80% cost reduction",
          desc: "Auto-condenses long conversations. Same quality, 80% fewer tokens.",
          code: "Turn 1-5: Full context (2,000 tokens)\nTurn 6-10: Important points summarized\nTurn 15: Still has all key context\nTurn 20: Only 1,800 tokens vs 10,000+\n\nSame quality. 80% less cost.",
        },
      ],
    },
  },

  /* ── 8. BUILD ── */
  {
    id: "build",
    sectionLabel: "Build",
    title: "Use what you already know.",
    type: "build",
    theme: "dark",
    speakerNotes: [
      "One of our core design principles is that you should be able to build with the frameworks your team already knows. We don't force you into a proprietary SDK.",
      "We're compatible with all the major agent frameworks - OpenAI Agents SDK (recommended), LangChain, LangGraph, CrewAI, AutoGen, Semantic Kernel, LlamaIndex, Pydantic, and BYOF.",
      "Migration is three lines of code. Same import, same SDK methods, same response objects. Change the base_url, the api_key, and add a project parameter. That's it.",
      "And if you're coming from the older OCI Generative AI Agents service - the migration path is straightforward. The new Responses API is a superset of the old capabilities. We provide a step-by-step migration guide.",
    ],
    content: {
      frameworks: [
        "OpenAI Agents SDK",
        "LangChain",
        "LangGraph",
        "CrewAI",
        "AutoGen",
        "Semantic Kernel",
        "LlamaIndex",
        "Pydantic",
        "BYOF",
      ],
      migrationCode: `from openai import OpenAI  # same import

client = OpenAI(
-   api_key="sk-openai-key",
+   base_url="https://inference...
+     .oci.oraclecloud.com/openai/v1",
+   api_key="YOUR_OCI_API_KEY",
+   project="ocid1.genai..."
)

# Everything else stays the same
response = client.responses.create(
    model="openai.gpt-4o",
    input="Hello!"
)`,
    },
  },

  /* ── 9. DEPLOY ── */
  {
    id: "deploy",
    sectionLabel: "Deploy",
    title: "All your AI apps. One place.",
    type: "deploy",
    theme: "light",
    speakerNotes: [
      "Let's talk about deployment. The key message here is simple: all your AI applications in one place, managed by OCI.",
      "Hosted Deployments is the standout feature. Think of it as Heroku for your AI agents - but with enterprise security and OCI's networking built in. You containerize your app, push it, and we handle everything else.",
      "What can you deploy? Anything. Your LangGraph agent, your CrewAI multi-agent system, your custom FastAPI service, even your own MCP servers. Standard OCI containers - no proprietary runtime.",
      "The sweet spot is 'Seamless Deploy.' Your code, any framework, containerized. OCI handles infrastructure, scaling from zero during quiet periods, auto-scaling during spikes. Dev, staging, prod environments built in.",
      "How do services connect? By default, each deployed app gets a public endpoint with authentication. But for enterprise use cases, you create a Private Endpoint - your agent gets a private IP and internal DNS, accessible only from your VCN, on-premises networks via FastConnect or VPN, or peered networks. Zero internet exposure.",
      "Authentication for deployed apps uses Resource Principal (RPST) - credentials are auto-provisioned by OCI. No API keys to manage, no secrets to rotate. Your deployed app automatically has the right permissions.",
      "Three tiers depending on how much control you want: Self-Host for maximum flexibility, Seamless Deploy for the sweet spot, Fully Hosted for zero-ops.",
    ],
    content: {
      tiers: [
        {
          tier: "Self-Host",
          sub: "Maximum flexibility",
          items: [
            "Use any framework or SDK",
            "OCI as inference backend only",
            "You manage your infrastructure",
          ],
          accent: false,
        },
        {
          tier: "Seamless Deploy",
          sub: "Containerize, push, done",
          items: [
            "Your code, any framework, containerized",
            "OCI handles infra, scaling, networking",
            "Dev / staging / prod environments",
          ],
          accent: true,
        },
        {
          tier: "Fully Hosted",
          sub: "Zero ops overhead",
          items: [
            "Operated & scaled entirely by OCI",
            "Enterprise governance built in",
            "Fastest time-to-value",
          ],
          accent: false,
        },
      ],
      operations: [
        {
          icon: "solar:rocket-2-bold-duotone",
          title: "Auto-scaling",
          bullets: [
            "Scales from zero during quiet periods",
            "Handles traffic spikes automatically",
            "No manual capacity planning needed",
          ],
        },
        {
          icon: "solar:server-square-bold-duotone",
          title: "Managed Storage",
          bullets: [
            "Oracle Database for vectors & memory",
            "PostgreSQL for application state",
            "Redis for caching, all auto-provisioned",
          ],
        },
        {
          icon: "solar:global-bold-duotone",
          title: "Networking",
          bullets: [
            "Public endpoint by default with auth controls",
            "Private Endpoints for zero internet exposure",
            "On-prem access via FastConnect/VPN",
          ],
        },
      ],
      hostedFeatures: [
        {
          icon: "solar:box-bold-duotone",
          title: "Deploy Any Framework",
          desc: "LangGraph, CrewAI, AutoGen, FastAPI. Anything in a standard OCI container.",
        },
        {
          icon: "solar:server-path-bold-duotone",
          title: "Deploy MCP Servers",
          desc: "Host MCP servers alongside agents. Discoverable via standard protocol.",
        },
        {
          icon: "solar:tuning-2-bold-duotone",
          title: "Auto-Scaling from Zero",
          desc: "No traffic → zero cost. Spike → auto-scale. No capacity planning.",
        },
        {
          icon: "solar:share-circle-bold-duotone",
          title: "Private Endpoints",
          desc: "Zero internet exposure. Access agents from your VCN, on-prem via FastConnect/VPN, or peered networks. Internal DNS resolution.",
        },
        {
          icon: "solar:key-bold-duotone",
          title: "Resource Principal Auth",
          desc: "Auto-provisioned credentials. No API keys to manage or rotate.",
        },
        {
          icon: "solar:shield-network-bold-duotone",
          title: "API Gateway",
          desc: "Rate limiting, auth, and monitoring. All managed. Control who calls your agents.",
        },
      ],
    },
  },

  /* ── 10. DATA PRIVACY ── */
  {
    id: "data-privacy",
    sectionLabel: "Data Privacy",
    title: "Your data stays yours. Period.",
    type: "data-privacy",
    theme: "gray",
    speakerNotes: [
      "Let's talk about data privacy - and let's be direct. This is the number one concern we hear from enterprises, and rightly so.",
      "Your data is never used to train models. When you send a prompt through OCI, it gets processed by the model and the output is returned to you. The prompt is then discarded. Not stored for training. Not used to improve the model. Not shared with the model provider. Period.",
      "Zero vendor data retention means exactly what it says. Neither Oracle nor any of the model providers retain your prompts or responses. Your business intelligence stays yours.",
      "With Dedicated AI Clusters, your compute is physically isolated. No shared GPUs, no noisy neighbors, no chance of data leakage between tenants. This is critical for regulated industries - healthcare, finance, government.",
      "Data residency is guaranteed. Your data stays in the OCI region you choose. If you're in Frankfurt, your data stays in Frankfurt. Full compliance with GDPR, local data sovereignty laws, and industry regulations.",
    ],
    content: {
      principles: [
        {
          icon: "solar:shield-check-bold-duotone",
          title: "Zero Vendor Data Retention",
          desc: "Prompts processed and discarded. No storage, no training, no sharing with providers.",
        },
        {
          icon: "solar:server-bold-duotone",
          title: "Dedicated AI Clusters",
          desc: "Isolated GPU compute. No shared infrastructure, no cross-tenant leakage.",
        },
        {
          icon: "solar:map-point-bold-duotone",
          title: "Data Residency Guaranteed",
          desc: "Data stays in your chosen OCI region. Full GDPR and sovereignty compliance.",
        },
        {
          icon: "solar:lock-keyhole-bold-duotone",
          title: "Customer-Managed Encryption Keys",
          desc: "You control encryption keys. Bring your own, rotate on your schedule. OCI Vault integrated.",
        },
        {
          icon: "solar:danger-triangle-bold-duotone",
          title: "Guardrails",
          desc: "Content filtering, PII detection, and topic management. Control what goes in and out of your agents.",
        },
      ],
    },
  },

  /* ── 11. OBSERVABILITY ── */
  {
    id: "observability",
    sectionLabel: "Observability",
    title: "See everything your agents do.",
    type: "observability",
    theme: "light",
    speakerNotes: [
      "Observability is about seeing exactly what your agent does. Think of it like CCTV for your AI. Every tool call, every decision, every response - all logged and traceable.",
      "We support OpenTelemetry - the industry standard for collecting traces and metrics. Think of it as a flight recorder for every agent interaction. It works with whatever monitoring tools you already use - Datadog, Grafana, Splunk, you name it.",
      "For AI-specific monitoring, we integrate with LangFuse and LangSmith. These give you step-by-step replays of your agent's thought process: which tools it called, what it decided, how long each step took, and what the final output was.",
      "Every request gets a unique Correlation ID that follows it from start to finish. If something goes wrong, you can trace the entire chain - from user request to tool calls to final response - in seconds.",
      "This isn't optional or premium. Every API call is traced. Every tool invocation is logged. It's built into the platform from day one.",
    ],
    content: {
      tools: [
        {
          icon: "solar:chart-bold-duotone",
          name: "OpenTelemetry",
          desc: "Industry-standard tracing. Works with Datadog, Grafana, Splunk, any OTLP backend.",
        },
        {
          icon: "solar:monitor-bold-duotone",
          name: "LangFuse & LangSmith",
          desc: "Step-by-step replays of agent decisions, tool calls, and timing.",
        },
        {
          icon: "solar:link-round-bold-duotone",
          name: "Correlation IDs",
          desc: "Unique ID per request. Trace the full chain end-to-end in seconds.",
        },
        {
          icon: "solar:chart-square-bold-duotone",
          name: "Cost & Performance Tracking",
          desc: "Token usage, latency, cost per request. All tracked automatically.",
        },
      ],
      traceLog: [
        "// Agent trace - correlation ID: req_7f3a...",
        "14:32:01 User request received",
        "14:32:01 Reasoning: need sales data + market context",
        "14:32:02 Tool: file_search → 3 docs found (120ms)",
        "14:32:03 Tool: web_search → 5 results (340ms)",
        "14:32:04 Tool: code_interpreter → chart generated (890ms)",
        "14:32:05 Response generated → 340 tokens",
        "14:32:05 Total: 4.2s | Cost: $0.003 | Tools: 3",
      ],
    },
  },

  /* ── 12. SECURITY & AUTH ── */
  {
    id: "security-auth",
    sectionLabel: "Security & Auth",
    title: "Enterprise-grade access control.",
    type: "security-auth",
    theme: "dark",
    speakerNotes: [
      "Security covers who can access what, and how. We provide four authentication methods depending on your use case.",
      "GenAI API Key is the simplest - like an API password for your project. Great for getting started quickly in development. Python, TypeScript, Java, Go, .NET support.",
      "OCI IAM is for production. Full identity management with granular policies - control who can access what, down to individual models and tools. You define policies like 'team X can only use GPT-4o in the staging environment.'",
      "OAuth 2.0 for web apps - your users log in through your existing identity provider. Standard token exchange.",
      "And the most powerful: Resource Principal. For apps deployed on OCI, credentials are auto-provisioned. No API keys to manage, no secrets to rotate. The app automatically gets exactly the permissions it needs.",
      "On the compliance side - SOC 2 Type II certified, ISO 27001, and ready for HIPAA and FedRAMP workloads with Dedicated AI Clusters.",
    ],
    content: {
      authMethods: [
        {
          method: "GenAI API Key",
          desc: "Simple API key. Generate, copy, use.",
          languages: "Python, TypeScript, Java, Go, .NET",
          useCase: "Development & testing",
        },
        {
          method: "OCI IAM",
          desc: "Granular policies down to individual models and tools.",
          languages: "Python, Java",
          useCase: "Production workloads",
        },
        {
          method: "OAuth 2.0",
          desc: "Standard web auth via your existing identity provider.",
          languages: "All languages via token exchange",
          useCase: "Web apps & integrations",
        },
        {
          method: "Resource Principal",
          desc: "Auto-provisioned credentials for OCI-deployed apps. No keys to manage.",
          languages: "Python, Java (auto-provisioned)",
          useCase: "Deployed apps on OCI",
        },
      ],
      compliance: [
        {
          icon: "solar:verified-check-bold-duotone",
          title: "SOC 2 Type II",
          desc: "Independently audited security controls. Updated annually.",
        },
        {
          icon: "solar:document-add-bold-duotone",
          title: "ISO 27001",
          desc: "International security standard for the full service lifecycle.",
        },
        {
          icon: "solar:hospital-bold-duotone",
          title: "HIPAA Ready",
          desc: "BAA-eligible with Dedicated AI Clusters. Full audit logging.",
        },
        {
          icon: "solar:buildings-bold-duotone",
          title: "Government Ready",
          desc: "FedRAMP-eligible with dedicated compute and data residency.",
        },
      ],
    },
  },

  /* ── 13. USE CASES ── */
  {
    id: "use-cases",
    sectionLabel: "Use Cases",
    title: "Agents across every industry.",
    type: "use-cases",
    theme: "light",
    speakerNotes: [
      "Let's look at how enterprise agents are being applied across industries - including inside Oracle itself.",
      "Financial Services - back-office automation with potential 40% reduction in close cycle time through agent-driven reconciliation, audit preparation, and KYC/AML triage.",
      "Supply Chain - agents that monitor disruptions in real-time and autonomously re-route shipments, rebalance inventory, and manage supplier communications.",
      "Customer Experience - 80% decrease in resolution time. Autonomous resolution agents handle the full lifecycle of common issues without human handoff.",
      "Manufacturing - predictive maintenance, PLC debugging, and plant layout synthesis. Minimizing unplanned downtime through proactive agent monitoring.",
      "And we practice what we preach. Oracle itself uses this platform internally - NetSuite is building agents for financial close automation, Fusion Apps for procurement and HR workflows, and Oracle Health for clinical documentation and decision support. This is the same platform, the same APIs.",
    ],
    content: {
      industries: [
        {
          industry: "Financial Services",
          impact: "40% reduction in close cycle time",
          cases: ["Reconciliation", "Audit preparation", "KYC/AML triage"],
          border: "",
          details:
            "Agents autonomously match transactions across ledgers, compile audit evidence, and triage KYC cases. What took teams of analysts days gets done in hours with full audit trails.",
        },
        {
          industry: "Supply Chain",
          impact: "Real-time disruption response",
          cases: [
            "Self-healing logistics",
            "Inventory rebalancing",
            "Supplier negotiation",
          ],
          border: "",
          details:
            "Self-Healing Logistics agents monitor disruptions and autonomously re-route shipments. Inventory agents predict stockouts and execute transfers proactively.",
        },
        {
          industry: "Customer Experience",
          impact: "80% decrease in resolution time",
          cases: [
            "Autonomous resolution",
            "Post-call CRM actions",
            "Personalized triage",
          ],
          border: "",
          details:
            "Autonomous agents handle billing errors end-to-end - accessing CRM, checking policies, and executing resolutions without human handoff. Post-call agents save 5-10 minutes per interaction.",
        },
        {
          industry: "Manufacturing",
          impact: "Minimized unplanned downtime",
          cases: [
            "Plant layout synthesis",
            "PLC debugging",
            "Predictive maintenance",
          ],
          border: "",
          details:
            "Plant Layout agents propose optimal floor plans. PLC Debugging agents analyze controller logs. Maintenance agents predict failures from sensor data and schedule preventive work.",
        },
        {
          industry: "Oracle Internal (Dogfooding)",
          impact: "Same platform, same APIs",
          cases: [
            "NetSuite financial close",
            "Fusion Apps procurement & HR",
            "Oracle Health clinical support",
          ],
          border: "",
          details:
            "Oracle uses OCI Enterprise AI internally across its product suite. NetSuite builds financial close agents, Fusion Apps automates procurement workflows, and Oracle Health powers clinical documentation - all on the same platform available to you.",
        },
      ],
    },
  },

  /* ── 14. REGIONS ── */
  {
    id: "regions",
    sectionLabel: "Global Availability",
    title: "Available in 9 regions worldwide.",
    type: "regions",
    theme: "dark",
    speakerNotes: [
      "OCI Enterprise AI is available today in nine OC1 regions across the globe.",
      "In the Americas: Ashburn on the East Coast, Chicago in the Midwest, Phoenix on the West Coast, and São Paulo in Brazil.",
      "In Europe and Middle East: Frankfurt in Germany, London in the UK, and Riyadh in Saudi Arabia.",
      "In Asia Pacific: Osaka in Japan and Hyderabad in India. More regions are on the roadmap.",
    ],
    content: {
      cities: [
        { name: "Ashburn", region: "United States East", photo: "https://images.unsplash.com/photo-1501466044931-62695aada8e9?w=600&h=400&fit=crop" },
        { name: "Chicago", region: "United States Central", photo: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=400&fit=crop" },
        { name: "Phoenix", region: "United States West", photo: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop" },
        { name: "São Paulo", region: "Brazil", photo: "https://images.unsplash.com/photo-1543059080-f9b1272213d5?w=600&h=400&fit=crop" },
        { name: "Frankfurt", region: "Germany", photo: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&h=400&fit=crop" },
        { name: "London", region: "United Kingdom", photo: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop" },
        { name: "Riyadh", region: "Saudi Arabia", photo: "https://images.unsplash.com/photo-1578895101408-1a36b834405b?w=600&h=400&fit=crop" },
        { name: "Osaka", region: "Japan", photo: "https://images.unsplash.com/photo-1590559899731-a382839e5549?w=600&h=400&fit=crop" },
        { name: "Hyderabad", region: "India", photo: "https://images.unsplash.com/photo-1572435555646-7ad9a149ad91?w=600&h=400&fit=crop" },
      ],
    },
  },

  /* ── 15. GET STARTED ── */
  {
    id: "get-started",
    sectionLabel: "Get Started",
    title: "Ready to build?",
    type: "get-started",
    theme: "dark",
    speakerNotes: [
      "Here's your concrete path to getting started - five steps from zero to production.",
      "Step one: try the quickstart. Create a project, get an API key, and run your first agent call. You can do this in under 10 minutes.",
      "Step two: explore the tools. Add Web Search, File Search, Code Interpreter, and NL2SQL. Use your own data - that's when it gets exciting.",
      "Step three: integrate with your systems via Function Calling and MCP. Step four: deploy using Seamless Deploy. Step five: scale with governance, monitoring, and dedicated clusters.",
      "If you're migrating from the older OCI Generative AI Agents service - the Responses API is a superset. We have a step-by-step migration guide that maps every old API call to the new one.",
      "Thank you for your time today. OCI Enterprise AI is production-ready, generally available in nine regions. Everything I showed you works right now.",
    ],
    content: {
      steps: [
        { step: "1", label: "Create Project", desc: "Set up a Generative AI Project in the OCI Console" },
        { step: "2", label: "Generate API Key", desc: "Create a Generative AI API Key for authentication" },
        { step: "3", label: "Set IAM Permissions", desc: "Configure identity and access management policies" },
        { step: "4", label: "Install OpenAI SDK", desc: "pip install openai. Same SDK you already use" },
        { step: "5", label: "Call Responses API", desc: "Run your first agent call in under 10 minutes" },
      ],
    },
  },
];
