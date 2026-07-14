import type { Lang } from "@/context/LanguageContext";

const strings = {
  /* ── Navbar ── */
  "nav.title": { en: "OCI Enterprise AI", es: "OCI Enterprise AI" },
  "nav.notes": { en: "Notes", es: "Notas" },
  "nav.getStarted": { en: "Get Started", es: "Empezar" },

  /* ── HeroSection ── */
  "hero.oci": { en: "OCI", es: "OCI" },
  "hero.enterpriseAi": { en: "Enterprise AI", es: "Enterprise AI" },
  "hero.oracleCloud": { en: "Oracle Cloud Infrastructure", es: "Oracle Cloud Infrastructure" },
  "hero.getStarted": { en: "Get Started", es: "Empezar" },

  /* ── PlatformPillars ── */
  "platform.label": { en: "The Platform", es: "La Plataforma" },
  "platform.title1": { en: "Two pillars.", es: "Dos pilares." },
  "platform.title2": { en: "One governance layer.", es: "Una capa de gobernanza." },
  "platform.subtitle": {
    en: "Build agents with the Managed AI API. Deploy them with Hosted Deployments. Govern everything from one place.",
    es: "Construye agentes con la API de IA Gestionada. Despliégalos con Hosted Deployments. Gobierna todo desde un solo lugar.",
  },

  /* ── FrameworksSection ── */
  "build.label": { en: "Build", es: "Construir" },
  "build.title1": { en: "Use what you", es: "Usa lo que ya" },
  "build.title2": { en: "already know.", es: "conoces." },
  "build.subtitle": {
    en: "Compatible with every major framework. 3-line migration from OpenAI. Zero vendor lock-in.",
    es: "Compatible con todos los frameworks principales. Migración de 3 líneas desde OpenAI. Sin dependencia de proveedor.",
  },

  /* ── ModelsShowcase ── */
  "models.label": { en: "Models", es: "Modelos" },
  "models.title1": { en: "We don't compete on models.", es: "No competimos en modelos." },
  "models.title2": { en: "You choose.", es: "Tú eliges." },
  "models.subtitle": {
    en: "Pioneering agreements with all major providers. Switch models with one line of code. Your data is never used to train models.",
    es: "Acuerdos pioneros con todos los proveedores principales. Cambia de modelo con una línea de código. Tus datos nunca se usan para entrenar modelos.",
  },
  "models.whatThisMeans": { en: "What this means for you", es: "Lo que esto significa para ti" },
  "models.howToConsume": { en: "Consumption options", es: "Opciones de consumo" },

  /* ── AgentIntroSection ── */
  "agent.label": { en: "What is an Agent", es: "Qué es un Agente" },
  "agent.title1": { en: "What is an Agent,", es: "¿Qué es un Agente," },
  "agent.title2": { en: "Really?", es: "Realmente?" },
  "agent.spectrum": { en: "The Agent Spectrum", es: "El Espectro de Agentes" },
  "agent.notAgent": { en: "Not an agent", es: "No es un agente" },
  "agent.agent": { en: "Agent", es: "Agente" },
  "agent.quizTitle": { en: "Is This an Agent?", es: "¿Es Esto un Agente?" },
  "agent.quizSubtitle": {
    en: "Each scenario adds more capabilities. Swipe right if agent, left if not.",
    es: "Cada escenario añade más capacidades. Desliza a la derecha si es agente, a la izquierda si no.",
  },

  /* ── AgentToolsGrid ── */
  "tools.label": { en: "Agent Tools", es: "Herramientas del Agente" },
  "tools.title1": { en: "Everything an agent needs.", es: "Todo lo que un agente necesita." },
  "tools.title2": { en: "Built in.", es: "Integrado." },
  "tools.subtitle": {
    en: "The platform provides two types of tools. The agent decides which ones to use, when, and in what order.",
    es: "La plataforma proporciona dos tipos de herramientas. El agente decide cuáles usar, cuándo y en qué orden.",
  },
  "tools.nativeTools": { en: "Native Tools", es: "Herramientas Nativas" },
  "tools.nativeDesc": {
    en: "Managed, ready-to-use capabilities built into the platform. Add them to your agent with one line. No infrastructure needed.",
    es: "Capacidades gestionadas y listas para usar integradas en la plataforma. Añádelas a tu agente con una línea. Sin infraestructura adicional.",
  },
  "tools.customTools": { en: "Custom Tools", es: "Herramientas Personalizadas" },
  "tools.customDesc": {
    en: "Connect your own systems, APIs, and logic. The agent calls your code when it needs it.",
    es: "Conecta tus propios sistemas, APIs y lógica. El agente llama a tu código cuando lo necesita.",
  },
  "tools.whatItDoes": { en: "What it does", es: "Qué hace" },
  "tools.howItWorks": { en: "How it works", es: "Cómo funciona" },
  "tools.multiTool": { en: "Multi-Tool Orchestration", es: "Orquestación Multi-Herramienta" },
  "tools.multiToolTitle1": { en: "One API call.", es: "Una llamada API." },
  "tools.multiToolTitle2": { en: "All the tools.", es: "Todas las herramientas." },
  "tools.multiToolDesc": {
    en: "Give your agent access to multiple tools at once. It figures out which ones to use, in what order, all by itself. No orchestration code needed.",
    es: "Dale a tu agente acceso a múltiples herramientas a la vez. Él decide cuáles usar, en qué orden, todo por sí mismo. Sin código de orquestación.",
  },
  "tools.dropIn": { en: "Drop-in OpenAI SDK replacement", es: "Reemplazo directo del SDK de OpenAI" },
  "tools.agentDecides": { en: "Agent decides which tools to call", es: "El agente decide qué herramientas usar" },
  "tools.zeroRetention": { en: "Zero vendor data retention", es: "Cero retención de datos por proveedores" },

  /* ── MemorySection ── */
  "memory.label": { en: "Agent Memory", es: "Memoria del Agente" },
  "memory.title1": { en: "Agents that", es: "Agentes que" },
  "memory.title2": { en: "remember.", es: "recuerdan." },
  "memory.subtitle": {
    en: "Three types of managed memory so your agents don\u2019t start from scratch every time. Click a card to see it in action.",
    es: "Tres tipos de memoria gestionada para que tus agentes no empiecen de cero cada vez. Haz clic en una tarjeta para verlo en acción.",
  },
  "memory.seeExample": { en: "See example", es: "Ver ejemplo" },
  "memory.clickBack": { en: "Click to flip back", es: "Clic para volver" },

  /* ── DeploymentSection ── */
  "deploy.label": { en: "Deploy", es: "Desplegar" },
  "deploy.title1": { en: "All your AI apps.", es: "Todas tus apps de IA." },
  "deploy.title2": { en: "One place.", es: "Un solo lugar." },
  "deploy.subtitle": {
    en: "Three deployment tiers, from full control to zero ops. Pick what fits your team.",
    es: "Tres niveles de despliegue, de control total a operaciones cero. Elige lo que se adapte a tu equipo.",
  },
  "deploy.moreControl": { en: "More control", es: "Más control" },
  "deploy.moreManaged": { en: "More managed", es: "Más gestionado" },
  "deploy.hostedTitle": { en: "Hosted Deployments", es: "Hosted Deployments" },
  "deploy.hostedDesc": {
    en: "Containerize your app, push it, and OCI handles everything else.",
    es: "Conteneriza tu app, súbela, y OCI se encarga del resto.",
  },

  /* ── DataPrivacySection ── */
  "privacy.label": { en: "Data Privacy", es: "Privacidad de Datos" },
  "privacy.title1": { en: "Your data stays yours.", es: "Tus datos son tuyos." },
  "privacy.title2": { en: "Period.", es: "Punto." },
  "privacy.checklist": { en: "Enterprise trust checklist", es: "Lista de confianza empresarial" },
  "privacy.check1": { en: "Your data is never used to train models", es: "Tus datos nunca se usan para entrenar modelos" },
  "privacy.check2": { en: "Full audit logging on every API call", es: "Registro de auditoría completo en cada llamada API" },
  "privacy.check3": { en: "Data residency guaranteed per region", es: "Residencia de datos garantizada por región" },
  "privacy.check4": { en: "SOC 2 Type II & ISO 27001 certified", es: "Certificación SOC 2 Type II & ISO 27001" },
  "privacy.check5": { en: "Customer-managed encryption keys", es: "Claves de cifrado gestionadas por el cliente" },
  "privacy.dataIs": { en: "Your data is", es: "Tus datos" },
  "privacy.never": { en: "never", es: "nunca" },
  "privacy.usedToTrain": { en: "used to train models.", es: "se usan para entrenar modelos." },
  "privacy.mainDesc": {
    en: "This is the #1 question we get from enterprises. Here\u2019s exactly how we handle your data, in plain terms.",
    es: "Esta es la pregunta #1 que recibimos de las empresas. Así es exactamente como manejamos tus datos, en términos claros.",
  },
  "privacy.scrollExplore": { en: "Scroll to explore each principle \u2193", es: "Desplázate para explorar cada principio \u2193" },
  "privacy.flowTitle": { en: "How your data flows through OCI", es: "Cómo fluyen tus datos a través de OCI" },
  "privacy.flowPrompt": { en: "Your Prompt", es: "Tu Prompt" },
  "privacy.flowEncrypted": { en: "Encrypted in transit", es: "Cifrado en tránsito" },
  "privacy.flowProcessing": { en: "Model Processing", es: "Procesamiento del Modelo" },
  "privacy.flowIsolated": { en: "Isolated compute", es: "Cómputo aislado" },
  "privacy.flowResponse": { en: "Response Returned", es: "Respuesta Devuelta" },
  "privacy.flowDiscarded": { en: "Prompt discarded", es: "Prompt descartado" },

  /* ── ObservabilitySection ── */
  "obs.label": { en: "Observability", es: "Observabilidad" },
  "obs.title1": { en: "See everything", es: "Ve todo lo que" },
  "obs.title2": { en: "your agents do.", es: "hacen tus agentes." },
  "obs.subtitle": {
    en: "Think of it as CCTV for your AI. Every tool call, every decision, every response. Logged, traced, and available for review.",
    es: "Piensa en ello como CCTV para tu IA. Cada llamada a herramienta, cada decisión, cada respuesta. Registrado, rastreado y disponible para revisión.",
  },
  "obs.traceFile": { en: "agent_trace.log", es: "agent_trace.log" },
  "obs.footer": {
    en: "Every API call is traced. Every tool invocation is logged. Built in from day one, not optional.",
    es: "Cada llamada API se rastrea. Cada invocación de herramienta se registra. Integrado desde el primer día, no es opcional.",
  },

  /* ── SecurityAuthSection ── */
  "security.label": { en: "Security & Authentication", es: "Seguridad y Autenticación" },
  "security.title1": { en: "Enterprise-grade", es: "Control de acceso" },
  "security.title2": { en: "access control.", es: "empresarial." },
  "security.subtitle": {
    en: "Four authentication methods, from quick-start to production. Choose based on your use case.",
    es: "Cuatro métodos de autenticación, desde inicio rápido hasta producción. Elige según tu caso de uso.",
  },
  "security.compliance": { en: "Compliance & Certifications", es: "Cumplimiento y Certificaciones" },

  /* ── GovernanceSection ── */
  "gov.label": { en: "Governance", es: "Gobernanza" },
  "gov.title1": { en: "Enterprise trust.", es: "Confianza empresarial." },
  "gov.title2": { en: "Built in.", es: "Integrada." },
  "gov.subtitle": {
    en: "Privacy, security, and observability. Managed from a single governance layer.",
    es: "Privacidad, seguridad y observabilidad. Gestionadas desde una única capa de gobernanza.",
  },
  "gov.tabPrivacy": { en: "Data Privacy", es: "Privacidad de Datos" },
  "gov.tabSecurity": { en: "Security & Auth", es: "Seguridad y Auth" },
  "gov.tabObs": { en: "Observability", es: "Observabilidad" },
  "gov.authMethods": { en: "Authentication Methods", es: "Métodos de Autenticación" },
  "gov.compliance": { en: "Compliance & Certifications", es: "Cumplimiento y Certificaciones" },

  /* ── ProblemSection ── */
  "challenge.label": { en: "The Challenge", es: "El Desafío" },

  /* ── UseCasesSection ── */
  "useCases.label": { en: "Use Cases", es: "Casos de Uso" },
  "useCases.title1": { en: "Agents across", es: "Agentes en" },
  "useCases.title2": { en: "every industry.", es: "todas las industrias." },

  /* ── DemoSection ── */
  "demo.label": { en: "Demo", es: "Demo" },
  "demo.title": { en: "See it in action.", es: "Míralo en acción." },
  "demo.subtitle": {
    en: "An agent using MCP to connect to Google Calendar. Search, create, and manage events autonomously.",
    es: "Un agente usando MCP para conectarse a Google Calendar. Busca, crea y gestiona eventos de forma autónoma.",
  },

  /* ── GetStartedSection ── */
  "start.recap": { en: "Recap", es: "Resumen" },
  "start.everything": { en: "Everything you need.", es: "Todo lo que necesitas." },
  "start.onePlatform": { en: "One platform.", es: "Una plataforma." },
  "start.oci": { en: "OCI", es: "OCI" },
  "start.enterpriseAi": { en: "Enterprise AI", es: "Enterprise AI" },
  "start.tagline": { en: "Build, deploy, and govern enterprise AI agents.", es: "Construye, despliega y gobierna agentes de IA empresariales." },
  "start.providers": { en: "6+", es: "6+" },
  "start.providersLabel": { en: "Model providers", es: "Proveedores de modelos" },
  "start.noLockin": { en: "No lock-in", es: "Sin dependencia" },
  "start.toolsNum": { en: "7", es: "7" },
  "start.toolsLabel": { en: "Managed tools", es: "Herramientas gestionadas" },
  "start.readyToUse": { en: "Ready to use", es: "Listas para usar" },
  "start.memory": { en: "Memory", es: "Memoria" },
  "start.memoryDesc": { en: "Multi-turn, long-term, compaction", es: "Multi-turno, largo plazo, compactación" },
  "start.zero": { en: "Zero", es: "Cero" },
  "start.zeroDesc": { en: "Vendor data retention. Your data stays yours.", es: "Retención de datos por proveedores. Tus datos son tuyos." },
  "start.frameworks": { en: "Frameworks", es: "Frameworks" },
  "start.frameworksDesc": { en: "Use what you already know.", es: "Usa lo que ya conoces." },
  "start.deploy": { en: "Deploy", es: "Desplegar" },
  "start.deployDesc": { en: "Three tiers. Your choice.", es: "Tres niveles. Tu elección." },
  "start.selfHost": { en: "Self-Host", es: "Auto-alojado" },
  "start.seamless": { en: "Seamless Deploy", es: "Despliegue Sin Fricción" },
  "start.fullyHosted": { en: "Fully Hosted", es: "Totalmente Alojado" },
  "start.regionsNum": { en: "9", es: "9" },
  "start.regions": { en: "Regions", es: "Regiones" },
  "start.worldwide": { en: "worldwide", es: "en todo el mundo" },
  "start.openaiSdk": { en: "OpenAI SDK", es: "OpenAI SDK" },
  "start.compatible": { en: "Compatible. Same code, new platform.", es: "Compatible. Mismo código, nueva plataforma." },

  /* ── ArchitectureSection ── */
  "arch.label": { en: "Architecture", es: "Arquitectura" },
  "arch.title": { en: "Technical overview.", es: "Vista técnica." },

  /* ── RegionsMap ── */
  "regions.label": { en: "Global Availability", es: "Disponibilidad Global" },
  "regions.title1": { en: "Available in", es: "Disponible en" },
  "regions.title2": { en: "9 regions", es: "9 regiones" },
  "regions.title3": { en: "worldwide.", es: "en todo el mundo." },

  /* ── TinderSwipe ── */
  "swipe.agent": { en: "AGENT", es: "AGENTE" },
  "swipe.nope": { en: "NOPE", es: "NO" },
  "swipe.hint": { en: "Swipe right if agent, left if not", es: "Desliza a la derecha si es agente, a la izquierda si no" },
  "swipe.correct": { en: "Correct!", es: "¡Correcto!" },
  "swipe.notQuite": { en: "Not quite!", es: "¡No del todo!" },
  "swipe.isAgent": { en: "Agent", es: "Agente" },
  "swipe.notAgent": { en: "Not an Agent", es: "No es un Agente" },
  "swipe.hardToTell": { en: "Hard to tell, right?", es: "Difícil de distinguir, ¿verdad?" },
  "swipe.trend": {
    en: "The trend is towards more <agentic> systems. A simple agent and an advanced one are called the same, but they are very different things.",
    es: "La tendencia es hacia sistemas más <agénticos>. Un agente simple y uno avanzado se llaman igual, pero son cosas muy diferentes.",
  },
  "swipe.tryAgain": { en: "Try again", es: "Intentar de nuevo" },

  /* ── Pillar Dividers ── */
  "pillar.prefix": { en: "Pillar", es: "Pilar" },
  "pillar.api.title": { en: "Responses API", es: "Responses API" },
  "pillar.api.subtitle": {
    en: "Models, tools, and memory: everything you need to build agents.",
    es: "Modelos, herramientas y memoria: todo lo que necesitas para construir agentes.",
  },
  "pillar.hosted.title": { en: "Hosted Deployments", es: "Hosted Deployments" },
  "pillar.hosted.subtitle": {
    en: "Build with any framework, deploy, and govern from one place.",
    es: "Construye con cualquier framework, despliega y gobierna desde un solo lugar.",
  },

  /* ── SectionHeader ── */
  "section.prefix": { en: "Section", es: "Sección" },

  /* ── Navbar nav links ── */
  "nav.platform": { en: "Platform", es: "Plataforma" },
  "nav.models": { en: "Models", es: "Modelos" },
  "nav.tools": { en: "Tools", es: "Herramientas" },
  "nav.memory": { en: "Memory", es: "Memoria" },
  "nav.deploy": { en: "Deploy", es: "Desplegar" },

  /* ── IsometricLayers ── */
  "iso.ociInfra": { en: "OCI Infra", es: "Infra OCI" },
  "iso.platform": { en: "Platform", es: "Plataforma" },
  "iso.tools": { en: "Tools", es: "Herramientas" },
  "iso.memory": { en: "Memory", es: "Memoria" },
  "iso.models": { en: "Models", es: "Modelos" },

  /* ── ArchitectureDiagram ── */
  "arch.colHosted": { en: "Hosted Deployment", es: "Hosted Deployment" },
  "arch.colGenai": { en: "Unified GenAI Experience", es: "Experiencia GenAI Unificada" },
  "arch.colTools": { en: "Tools & Storage", es: "Herramientas y Almacenamiento" },
  "arch.colGov": { en: "Governance", es: "Gobernanza" },
  "arch.agentLogic": { en: "Agent Logic", es: "Lógica del Agente" },
  "arch.mcpServers": { en: "MCP Servers", es: "Servidores MCP" },
  "arch.monitoring": { en: "Monitoring", es: "Monitoreo" },
  "arch.openaiCompat": { en: "OpenAI-Compatible", es: "Compatible con OpenAI" },
  "arch.modelsLabel": { en: "Models", es: "Modelos" },
  "arch.ociNative": { en: "OCI Native", es: "Nativo OCI" },
  "arch.webSearch": { en: "Web Search", es: "Búsqueda Web" },
  "arch.fileSearch": { en: "File Search", es: "Búsqueda de Archivos" },
  "arch.codeInterp": { en: "Code Interpreter", es: "Intérprete de Código" },
  "arch.memory": { en: "Memory", es: "Memoria" },
  "arch.convState": { en: "Conversation State", es: "Estado de Conversación" },
  "arch.moderationApi": { en: "Moderation API", es: "API de Moderación" },
  "arch.contentFilter": { en: "Content Filtering", es: "Filtrado de Contenido" },
  "arch.piiDetection": { en: "PII Detection", es: "Detección de PII" },
  "arch.mcpSafety": { en: "MCP Safety", es: "Seguridad MCP" },
  "arch.registry": { en: "Registry", es: "Registro" },
  "arch.mcpRegistry": { en: "MCP Registry", es: "Registro MCP" },
  "arch.agentDiscovery": { en: "Agent Discovery", es: "Descubrimiento de Agentes" },
  "arch.a2aProtocol": { en: "A2A Protocol", es: "Protocolo A2A" },
  "arch.observability": { en: "Observability", es: "Observabilidad" },

  /* ── Teleprompter ── */
  "teleprompter.title": { en: "Speaker Notes", es: "Notas del Presentador" },

  /* ── ConsoleScreenshot captions ── */
  "screenshot.searchGenai": {
    en: "Search 'Generative AI' in the OCI Console to access the service",
    es: "Buscar 'Generative AI' en la consola OCI para acceder al servicio",
  },
  "screenshot.genaiOverview": {
    en: "Generative AI service overview with all resources",
    es: "Vista general del servicio de Generative AI con todos los recursos",
  },
  "screenshot.toolsConfig": {
    en: "Native tools configuration: Web Search, File Search, Code Interpreter, NL2SQL",
    es: "Configuración de herramientas nativas: Web Search, File Search, Code Interpreter, NL2SQL",
  },
  "screenshot.vectorStore": {
    en: "Vector Store creation for File Search",
    es: "Creación de Vector Store para Búsqueda de Archivos",
  },
  "screenshot.memoryConfig": {
    en: "Memory configuration: Long-Term Memory with Memory ID and Short-Term Memory Optimization",
    es: "Configuración de memoria: Long-Term Memory con Memory ID y Short-Term Memory Optimization",
  },
  "screenshot.obsConfig": {
    en: "Observability configuration: OpenTelemetry, LangFuse, Datadog, Grafana",
    es: "Configuración de observabilidad: OpenTelemetry, LangFuse, Datadog, Grafana",
  },
  "screenshot.createProject": {
    en: "Step 1: Create a Generative AI project",
    es: "Paso 1: Crear un proyecto de Generative AI",
  },
  "screenshot.createApiKey": {
    en: "Step 2: Generate an API Key for authentication",
    es: "Paso 2: Generar una API Key para autenticación",
  },
  "screenshot.howToUse": {
    en: "Step 3: Usage instructions with sample code",
    es: "Paso 3: Instrucciones de uso con código de ejemplo",
  },
} as const;

type StringKey = keyof typeof strings;

export function t(key: StringKey, lang: Lang): string {
  return strings[key][lang];
}

export type { StringKey };
