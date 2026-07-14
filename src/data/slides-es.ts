import type { SlideSection } from "./types";

export const slidesEs: SlideSection[] = [
  /* ── 1. HERO ── */
  {
    id: "hero",
    sectionLabel: "Introducción",
    title: "Una Plataforma. Cualquier Modelo. Cualquier Agente.",
    type: "hero",
    theme: "dark",
    speakerNotes: [
      "Bienvenidos a todos, y gracias por acompañarnos hoy. Me emociona guiarlos a través de OCI Enterprise AI - la plataforma integral de Oracle para construir, desplegar y gestionar agentes de IA empresariales.",
      "En los próximos 45 minutos aproximadamente, cubriremos mucho terreno. Pero antes de mostrarles cualquier producto, comencemos con algo fundamental: ¿qué ES realmente un agente de IA? Porque si vamos a construir agentes, deberíamos ponernos de acuerdo en lo que queremos decir.",
      "Todo lo que les muestro hoy está disponible de forma general en OCI ahora mismo. Comencemos.",
    ],
    content: {
      badge: "Disponible | 2026",
      titleLines: ["Una Plataforma.", "Cualquier Modelo.", "Cualquier Agente."],
      subtitle:
        "Construye, despliega y gobierna agentes de IA empresariales con los modelos que elijas y las herramientas que necesitas.",
    },
  },

  /* ── 2. QUÉ ES UN AGENTE ── */
  {
    id: "what-is-agent",
    sectionLabel: "Qué es un Agente",
    title: "¿Qué es un Agente, Realmente?",
    type: "what-is-agent",
    theme: "light",
    speakerNotes: [
      "Antes de mostrarles la plataforma, seamos honestos sobre qué es un agente, y qué no es. El término 'agente' se ha convertido en la palabra más sobrecargada en tecnología ahora mismo. Todos dicen tener agentes. Así que seamos precisos.",
      "Un agente de IA es un sistema que tiene un objetivo, puede razonar sobre cómo alcanzarlo, tiene acceso a herramientas para tomar acciones, y tiene memoria para aprender y persistir contexto. Si falta alguna de estas piezas, probablemente no es un agente. Podría ser un chatbot, un flujo de trabajo, o una automatización con un paso de LLM.",
      "Piénsalo como un espectro. A la izquierda tienes un chatbot simple. Responde preguntas, sin herramientas, sin memoria entre sesiones. Luego tienes copilots que asisten a humanos con sugerencias pero no toman acciones autónomas. Luego agentes que pueden razonar, planificar, usar herramientas y completar tareas de forma autónoma. Y en el extremo, agentes autónomos que operan continuamente, monitoreando y actuando proactivamente.",
      "Probemos tu intuición con una progresión. Imagina un asistente de RRHH que usa GPT-4o con un buen prompt de sistema para responder preguntas de políticas. ¿Es un agente? Ahora añade búsqueda web para consultar las últimas regulaciones laborales. ¿Es un agente ahora? ¿Y si también busca en tus documentos internos, verifica el CRM, redacta correos y recuerda el historial de cada empleado? Y luego imagina un sistema de cierre financiero con 30 prompts especializados, planificación, razonamiento, múltiples herramientas y ejecución autónoma en segundo plano.",
      "La verdad es que es genuinamente difícil trazar la línea. Lo que vemos es una tendencia hacia sistemas más 'agénticos'. Un agente simple y uno avanzado ambos se llaman agentes, pero son cosas muy diferentes. Lo importante es que la plataforma soporte todo el espectro, desde un asistente simple con herramientas hasta un agente multi-paso totalmente autónomo.",
    ],
    content: {
      definition:
        "Un agente de IA es un sistema que tiene un objetivo, razona sobre cómo alcanzarlo, usa herramientas para tomar acciones, y tiene memoria para mantener el contexto.",
      components: [
        {
          icon: "solar:target-bold-duotone",
          name: "Objetivo",
          desc: "Un objetivo claro, no solo responder a prompts.",
        },
        {
          icon: "solar:lightbulb-bolt-bold-duotone",
          name: "Razonamiento",
          desc: "Planifica, descompone tareas, decide los siguientes pasos.",
        },
        {
          icon: "solar:settings-bold-duotone",
          name: "Herramientas",
          desc: "APIs, bases de datos, búsqueda web, ejecución de código.",
        },
        {
          icon: "solar:database-bold-duotone",
          name: "Memoria",
          desc: "Contexto persistente entre turnos y sesiones.",
        },
      ],
      spectrum: [
        {
          label: "Chatbot",
          desc: "Responde preguntas. Sin herramientas, sin memoria persistente.",
          isAgent: false,
        },
        {
          label: "Copilot",
          desc: "Asiste a humanos con sugerencias. No actúa de forma autónoma.",
          isAgent: false,
        },
        {
          label: "Agente",
          desc: "Razona, planifica, usa herramientas, completa tareas de forma autónoma.",
          isAgent: true,
        },
        {
          label: "Agente Autónomo",
          desc: "Opera continuamente. Monitorea, decide y actúa proactivamente.",
          isAgent: true,
        },
      ],
      quiz: [
        {
          scenario:
            "Un asistente interno de RRHH que usa GPT-4o con un prompt de sistema detallado para responder preguntas de empleados sobre políticas de la empresa",
          isAgent: false,
          explanation:
            "Buen prompt de sistema, pero sin herramientas, sin memoria, sin decisiones autónomas. Es una llamada LLM bien configurada.",
        },
        {
          scenario:
            "El mismo asistente de RRHH, pero ahora con búsqueda web habilitada para consultar las últimas regulaciones laborales antes de responder",
          isAgent: false,
          explanation:
            "Usa una herramienta, así que es más agéntico. Pero sigue solo respondiendo preguntas reactivamente. Sin planificación, sin autonomía.",
        },
        {
          scenario:
            "Un sistema de soporte al cliente que busca en tus documentos, verifica el CRM, redacta correos de respuesta, y recuerda el historial de cada cliente entre sesiones",
          isAgent: true,
          explanation:
            "Múltiples herramientas, memoria entre sesiones, decisiones autónomas sobre qué acciones tomar. Esto es claramente agéntico.",
        },
        {
          scenario:
            "Una app de cierre financiero con 30 prompts especializados, razonamiento, planificación, acceso a ERP/CRM/email/calendario, memoria a largo plazo, y ejecución autónoma en segundo plano",
          isAgent: true,
          explanation:
            "Agente avanzado. Planificación multi-paso, herramientas diversas, memoria persistente, ejecuta de forma autónoma en segundo plano.",
        },
      ],
    },
  },

  /* ── 3. DESAFÍO ── */
  {
    id: "challenge",
    sectionLabel: "El Desafío",
    title: "La Carrera de la IA Generativa",
    type: "challenge",
    theme: "mesh-1",
    speakerNotes: [
      "Ahora que estamos de acuerdo en qué es un agente, hablemos de lo que está pasando en el mundo real. Es una carrera. Cada semana hay un nuevo framework, un nuevo proveedor de modelos, una nueva 'plataforma de agentes.' Y las empresas están atrapadas en el medio.",
      "Aquí están los números que importan: la mitad de todos los pilotos de GenAI se estancan antes de llegar a producción. La empresa grande promedio maneja más de cinco proveedores de IA diferentes. El 44% ya ha experimentado incidentes de privacidad de datos durante pilotos. Y los costos de inferencia suben un 25-45% año tras año.",
      "Lo que las empresas realmente necesitan es simple: una plataforma que sea escalable, extensible, dé valor rápido, y tenga gobernanza unificada. No otro framework-del-mes.",
      "Vemos el viaje en tres fases. 2023 fue experimentación - tareas GenAI individuales. 2025 es adopción - IA integrada en procesos de negocio. 2027 y más allá es aceleración - agentes proactivos y autónomos generando resultados de negocio reales.",
    ],
    content: {
      headline: "La IA Generativa",
      headlineAccent: "en Carrera.",
      subtext:
        "Demasiados proveedores. Nuevos frameworks cada semana. Pilotos que nunca llegan a producción. ¿Te suena familiar?",
      stats: [
        { num: "5+", text: "Proveedores de GenAI por empresa" },
        { num: "<25%", text: "Interoperabilidad entre proveedores de IA" },
        { num: "50%", text: "De pilotos GenAI se estancan antes de producción" },
        { num: "25‑45%", text: "Aumento anual en costos de inferencia" },
        { num: "44%", text: "Reportan incidentes de privacidad de datos" },
      ],
      timeline: [
        {
          year: "2023",
          phase: "Experimentación",
          desc: "Tareas GenAI individuales mejorando la productividad personal",
        },
        {
          year: "2025",
          phase: "Adopción",
          desc: "GenAI integrada en procesos de negocio para impacto medible",
        },
        {
          year: "2027+",
          phase: "Aceleración",
          desc: "Agentes proactivos y autónomos generando resultados de negocio",
        },
      ],
    },
  },

  /* ── 4. PILARES DE LA PLATAFORMA ── */
  {
    id: "platform",
    sectionLabel: "La Plataforma",
    title: "Dos pilares. Una capa de gobernanza.",
    type: "platform",
    theme: "dark",
    speakerNotes: [
      "Así que aquí está nuestra respuesta. OCI Enterprise AI está organizado en dos pilares y una base de gobernanza.",
      "Pilar uno: API de IA Gestionada. Aquí es donde construyes agentes. Te da acceso a modelos de todos los proveedores principales, la API de Responses para orquestación, herramientas integradas como búsqueda web, búsqueda de archivos, intérprete de código, NL2SQL, y memoria gestionada. Todo lo que necesitas para ir de la idea a un agente funcional.",
      "Pilar dos: Hosted Deployments. Aquí es donde despliegas agentes. Conteneriza tu app - ya sea LangGraph, LangChain, CrewAI, o tu propio código - súbelo, y OCI se encarga del resto. Auto-escalado, almacenamiento gestionado, networking, todo resuelto.",
      "Y debajo de ambos: Gobernanza. Seguridad, cumplimiento, observabilidad y privacidad de datos. No como una ocurrencia tardía - como la base. Cero retención de datos por proveedores, cómputo dedicado, trazabilidad completa.",
      "El ciclo de vida del agente fluye a través de siete etapas: Idear, Construir, Probar, Desplegar, Orquestar, Ejecutar y Observar. Nuestra plataforma cubre cada etapa, para que nunca estés ensamblando herramientas dispares.",
    ],
    content: {
      pillars: [
        {
          num: "01",
          name: "API de IA Gestionada",
          tagline: "Construir Agentes",
          desc: "Todos los proveedores principales. API de Responses. Herramientas integradas. Memoria gestionada.",
          gradient: "from-red-500/20 via-red-500/5 to-transparent",
        },
        {
          num: "02",
          name: "Hosted Deployments",
          tagline: "Desplegar Agentes",
          desc: "Conteneriza, sube, despliega. Auto-escalado y networking resueltos.",
          gradient: "from-orange-500/15 via-orange-500/5 to-transparent",
        },
      ],
      lifecycle: [
        { icon: "solar:lightbulb-bold-duotone", label: "Idear" },
        { icon: "solar:code-bold-duotone", label: "Construir" },
        { icon: "solar:test-tube-bold-duotone", label: "Probar" },
        { icon: "solar:rocket-2-bold-duotone", label: "Desplegar" },
        { icon: "solar:shuffle-bold-duotone", label: "Orquestar" },
        { icon: "solar:play-bold-duotone", label: "Ejecutar" },
        { icon: "solar:eye-bold-duotone", label: "Observar" },
      ],
    },
  },

  /* ── 5. MODELOS ── */
  {
    id: "models",
    sectionLabel: "Modelos",
    title: "Sin dependencia. Tu elección.",
    type: "models",
    theme: "mesh-2",
    speakerNotes: [
      "Hablemos de modelos. Y comencemos con el mensaje más importante: no tienes que elegir un proveedor. Tenemos acuerdos pioneros con OpenAI, Google, xAI, Meta y Cohere. Todos accesibles a través de una sola API.",
      "Privacidad - y esto es innegociable: tus datos NUNCA se usan para entrenar modelos. Cero retención de datos por proveedores. Tus prompts, tus respuestas, tus datos son tuyos. Punto.",
      "Sin dependencia. ¿Quieres cambiar de un modelo a otro? Cambia una línea de código. Misma API, mismo SDK, misma aplicación. Sin reescrituras.",
      "Para industrias reguladas y cargas de trabajo de producción, los Clusters de IA Dedicados te dan capacidad GPU aislada reservada para ti, soberanía total de datos, rendimiento predecible.",
    ],
    content: {
      providers: [
        { provider: "OpenAI", models: "GPT-4o, GPT-4.1, serie-o", badge: "6+ modelos" },
        { provider: "Google", models: "Gemini 2.0 Flash & Pro", badge: "3 modelos" },
        { provider: "xAI", models: "Serie Grok 4.x", badge: "4 modelos" },
        { provider: "Meta", models: "Llama 4 código abierto", badge: "2+ modelos" },
        { provider: "Cohere", models: "Command A, R/R+, Embed, Rerank", badge: "4 modelos" },
        { provider: "BYOM", models: "Trae Tu Propio Modelo", badge: "Ilimitado" },
      ],
      codeExample: `from openai import OpenAI

client = OpenAI(
    base_url="https://inference.generativeai
      .us-chicago-1.oci.oraclecloud.com/v1",
    api_key="TU_CLAVE_API_OCI",
)

# Cambia de modelo - solo cambia esta línea
response = client.responses.create(
    model="openai.gpt-4o",
    input="Analiza nuestro pipeline del Q1."
)`,
      deploymentModes: [
        {
          title: "Bajo Demanda",
          subtitle: "Pago por token, auto-escalado",
          desc: "Infraestructura compartida con auto-escalado. Ideal para desarrollo y cargas variables.",
          accent: false,
          icon: "solar:bolt-bold-duotone",
        },
        {
          title: "Clusters de IA Dedicados",
          subtitle: "Capacidad GPU reservada",
          desc: "Cómputo aislado, soberanía total de datos. Para producción e industrias reguladas.",
          accent: false,
          icon: "solar:server-bold-duotone",
        },
      ],
      keyMessages: [
        {
          icon: "solar:shield-check-bold-duotone",
          title: "Tus Datos Nunca Se Usan Para Entrenar Modelos",
          desc: "Prompts procesados y descartados. Cero retención por proveedores. Tu inteligencia de negocio sigue siendo tuya.",
        },
        {
          icon: "solar:lock-keyhole-unlocked-bold-duotone",
          title: "Cero Dependencia, Portabilidad Real",
          desc: "Cambia de modelo cambiando una línea. Misma API, mismo SDK. Tu código funciona tal cual con el SDK de OpenAI.",
        },
      ],
    },
  },

  /* ── 6. HERRAMIENTAS ── */
  {
    id: "tools",
    sectionLabel: "Herramientas del Agente",
    title: "Todo lo que un agente necesita. Integrado.",
    type: "tools",
    theme: "gray",
    speakerNotes: [
      "¿Recuerdas los cuatro componentes de un agente? Objetivo, Razonamiento, Herramientas, Memoria. Esta es la capa de Herramientas - todo gestionado por la plataforma, todo accesible a través de la API de Responses.",
      "Búsqueda Web da a los agentes acceso en tiempo real a internet con citas de fuentes. Búsqueda de Archivos proporciona RAG empresarial - tu agente puede buscar inteligentemente en los documentos de tu empresa. La API Connector te permite conectar Búsqueda de Archivos a fuentes de datos externas como Oracle Object Storage, manteniendo todo sincronizado.",
      "Intérprete de Código ejecuta código Python de forma segura en un sandbox. NL2SQL permite a tu agente consultar bases de datos simplemente haciendo preguntas en español - y tus datos nunca se mueven.",
      "Function Calling permite a los agentes activar acciones en tus propios sistemas - tus APIs, tu lógica de negocio. Remote MCP es el estándar emergente para conectarse a herramientas externas - y con soporte del protocolo A2A (Agente-a-Agente), tus agentes pueden descubrir y colaborar con otros agentes.",
      "El verdadero poder es combinar múltiples herramientas en una sola solicitud. El agente determina qué herramientas usar, en qué orden, todo por sí mismo.",
    ],
    content: {
      tools: [
        {
          icon: "solar:globus-bold-duotone",
          name: "Búsqueda Web",
          desc: "Recuperación web en tiempo real con citas de fuentes",
          whatItDoes: "Acceso web en tiempo real. El agente decide cuándo buscar. Los resultados incluyen URLs fuente para verificación.",
          howItWorks: "Añade web_search al array de herramientas. La plataforma busca, inyecta resultados, genera respuestas con citas.",
        },
        {
          icon: "solar:documents-bold-duotone",
          name: "Búsqueda de Archivos",
          desc: "Busca en los documentos de tu empresa inteligentemente",
          whatItDoes: "Sube documentos o conéctalos vía API Connector. El agente busca en miles de páginas. Auto-sincronización con Object Storage.",
          howItWorks: "Crea Vector Store, sube o conecta fuentes. Fragmentación, embedding e indexación automáticos.",
        },
        {
          icon: "solar:code-bold-duotone",
          name: "Intérprete de Código",
          desc: "Ejecuta código Python de forma segura en un sandbox",
          whatItDoes: "El agente escribe y ejecuta Python para análisis de datos, gráficos y procesamiento de archivos. 420+ librerías preinstaladas.",
          howItWorks: "Escribe código → ejecuta en sandbox → revisa resultados → itera. Sin acceso a red.",
        },
        {
          icon: "solar:database-bold-duotone",
          name: "NL2SQL",
          desc: "Pregunta a tu base de datos en lenguaje natural",
          whatItDoes: "Lenguaje natural a SQL. Entiende tu esquema y términos de negocio. Los datos nunca se mueven.",
          howItWorks: "Las consultas se ejecutan en tu base de datos existente con permisos existentes. Sin pipelines, sin copias.",
        },
        {
          icon: "solar:programming-bold-duotone",
          name: "Function Calling",
          desc: "Activa acciones en tus propios sistemas",
          whatItDoes: "Llama a tus propias APIs, bases de datos y lógica de negocio. Tú defines lo que el agente puede hacer.",
          howItWorks: "Describe funciones + parámetros → el agente decide cuándo llamar → tu app ejecuta.",
        },
        {
          icon: "solar:link-round-bold-duotone",
          name: "Remote MCP",
          desc: "Conéctate a herramientas externas vía estándar abierto",
          whatItDoes: "Estándar abierto para conectividad IA-a-herramienta. Auto-descubrimiento de herramientas MCP. Protocolo A2A para colaboración entre agentes.",
          howItWorks: "Apunta a URL del servidor MCP → el agente descubre herramientas → las llama directamente. Sin código extra.",
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
    input="Analiza ventas Q1 vs tendencias de mercado.
           Crea gráfico y tickets Jira para
           regiones con bajo rendimiento."
)`,
    },
  },

  /* ── 7. MEMORIA ── */
  {
    id: "memory",
    sectionLabel: "Memoria del Agente",
    title: "Agentes que recuerdan.",
    type: "memory",
    theme: "light",
    speakerNotes: [
      "La memoria es lo que separa a un agente real de una llamada API sin estado. Proporcionamos tres tipos de memoria gestionada, cada uno abordando una necesidad diferente.",
      "Conversaciones Multi-Turno preservan el contexto entre turnos. Haz una pregunta, obtén una respuesta, luego di 'cuéntame más sobre eso' - el agente sabe a qué se refiere 'eso'. La plataforma maneja esto automáticamente.",
      "Memoria a Largo Plazo persiste entre conversaciones. Tu agente recuerda lo que un usuario discutió la semana pasada. Como tener un colega que realmente lee las notas de las reuniones.",
      "La Compactación resuelve el problema de costos. Las conversaciones largas acumulan miles de tokens. La auto-compactación condensa el historial manteniendo lo importante - 80% de reducción de costos sin pérdida de calidad.",
    ],
    content: {
      types: [
        {
          title: "Multi-Turno",
          sub: "Memoria a corto plazo",
          desc: "Mantiene el contexto de conversación. Las referencias y seguimientos simplemente funcionan. Sin configuración de base de datos.",
          code: "Usuario: ¿Cuáles fueron nuestros resultados del Q1?\nAgente: Los ingresos fueron $4.2M, un 15% más...\nUsuario: ¿Cómo se compara con el Q4?\nAgente: Q4 fue $3.8M, así que Q1 muestra una mejora del 10.5% trimestre a trimestre.",
        },
        {
          title: "Largo Plazo",
          sub: "Entre conversaciones",
          desc: "Recuerda entre sesiones. El contexto del lunes disponible el jueves.",
          code: "Lunes:\nUsuario: Estoy trabajando en el trato ACME, $500K.\nAgente: Entendido. Haré seguimiento a la oportunidad ACME.\n\nJueves:\nUsuario: ¿Alguna novedad sobre ese trato?\nAgente: El trato ACME ($500K). Veo nueva actividad en el CRM desde el lunes...",
        },
        {
          title: "Compactación",
          sub: "80% reducción de costos",
          desc: "Auto-condensa conversaciones largas. Misma calidad, 80% menos tokens.",
          code: "Turno 1-5: Contexto completo (2,000 tokens)\nTurno 6-10: Puntos importantes resumidos\nTurno 15: Aún tiene todo el contexto clave\nTurno 20: Solo 1,800 tokens vs 10,000+\n\nMisma calidad. 80% menos costo.",
        },
      ],
    },
  },

  /* ── 8. CONSTRUIR ── */
  {
    id: "build",
    sectionLabel: "Construir",
    title: "Usa lo que ya conoces.",
    type: "build",
    theme: "dark",
    speakerNotes: [
      "Uno de nuestros principios de diseño fundamentales es que deberías poder construir con los frameworks que tu equipo ya conoce. No te forzamos a usar un SDK propietario.",
      "Somos compatibles con todos los frameworks principales de agentes - OpenAI Agents SDK (recomendado), LangChain, LangGraph, CrewAI, AutoGen, Semantic Kernel, LlamaIndex, Pydantic, y BYOF.",
      "La migración son tres líneas de código. Mismo import, mismos métodos del SDK, mismos objetos de respuesta. Cambia el base_url, el api_key, y añade un parámetro project. Eso es todo.",
      "Y si vienes del servicio OCI Generative AI Agents anterior - la ruta de migración es directa. La nueva API de Responses es un superconjunto de las capacidades anteriores. Proporcionamos una guía de migración paso a paso.",
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
      migrationCode: `from openai import OpenAI  # mismo import

client = OpenAI(
-   api_key="sk-openai-key",
+   base_url="https://inference...
+     .oci.oraclecloud.com/openai/v1",
+   api_key="TU_CLAVE_API_OCI",
+   project="ocid1.genai..."
)

# Todo lo demás sigue igual
response = client.responses.create(
    model="openai.gpt-4o",
    input="¡Hola!"
)`,
    },
  },

  /* ── 9. DESPLEGAR ── */
  {
    id: "deploy",
    sectionLabel: "Desplegar",
    title: "Todas tus apps de IA. Un solo lugar.",
    type: "deploy",
    theme: "light",
    speakerNotes: [
      "Hablemos de despliegue. El mensaje clave aquí es simple: todas tus aplicaciones de IA en un solo lugar, gestionadas por OCI.",
      "Hosted Deployments es la característica estrella. Piénsalo como Heroku para tus agentes de IA - pero con seguridad empresarial y el networking de OCI integrado. Contenerizas tu app, la subes, y nosotros nos encargamos de todo lo demás.",
      "¿Qué puedes desplegar? Cualquier cosa. Tu agente LangGraph, tu sistema multi-agente CrewAI, tu servicio FastAPI personalizado, incluso tus propios servidores MCP. Contenedores OCI estándar - sin runtime propietario.",
      "El punto dulce es 'Despliegue Sin Fricción.' Tu código, cualquier framework, contenerizado. OCI maneja infraestructura, escalando desde cero durante periodos tranquilos, auto-escalando durante picos. Entornos dev, staging, prod integrados.",
      "¿Cómo se conectan los servicios? Por defecto, cada app desplegada recibe un endpoint público con autenticación. Pero para casos empresariales, creas un Private Endpoint - tu agente recibe una IP privada y DNS interno, accesible solo desde tu VCN, redes on-premises vía FastConnect o VPN, o redes peered. Cero exposición a internet.",
      "La autenticación para apps desplegadas usa Resource Principal (RPST) - las credenciales se aprovisionan automáticamente por OCI. Sin claves API que gestionar, sin secretos que rotar. Tu app desplegada automáticamente tiene los permisos correctos.",
      "Tres niveles dependiendo de cuánto control quieras: Auto-alojado para máxima flexibilidad, Despliegue Sin Fricción para el punto dulce, Totalmente Alojado para operaciones cero.",
    ],
    content: {
      tiers: [
        {
          tier: "Auto-alojado",
          sub: "Máxima flexibilidad",
          items: [
            "Usa cualquier framework o SDK",
            "OCI como backend de inferencia solamente",
            "Tú gestionas tu infraestructura",
          ],
          accent: false,
        },
        {
          tier: "Despliegue Sin Fricción",
          sub: "Conteneriza, sube, listo",
          items: [
            "Tu código, cualquier framework, contenerizado",
            "OCI maneja infra, escalado, networking",
            "Entornos dev / staging / prod",
          ],
          accent: true,
        },
        {
          tier: "Totalmente Alojado",
          sub: "Cero operaciones",
          items: [
            "Operado y escalado completamente por OCI",
            "Gobernanza empresarial integrada",
            "Tiempo a valor más rápido",
          ],
          accent: false,
        },
      ],
      operations: [
        {
          icon: "solar:rocket-2-bold-duotone",
          title: "Auto-escalado",
          bullets: [
            "Escala desde cero en periodos tranquilos",
            "Maneja picos de tráfico automáticamente",
            "Sin planificación de capacidad manual",
          ],
        },
        {
          icon: "solar:server-square-bold-duotone",
          title: "Almacenamiento Gestionado",
          bullets: [
            "Oracle Database para vectores y memoria",
            "PostgreSQL para estado de aplicación",
            "Redis para caché, todo auto-aprovisionado",
          ],
        },
        {
          icon: "solar:global-bold-duotone",
          title: "Networking",
          bullets: [
            "Endpoint público por defecto con controles de auth",
            "Private Endpoints para cero exposición a internet",
            "Acceso on-prem vía FastConnect/VPN",
          ],
        },
      ],
      hostedFeatures: [
        {
          icon: "solar:box-bold-duotone",
          title: "Despliega Cualquier Framework",
          desc: "LangGraph, CrewAI, AutoGen, FastAPI. Cualquier cosa en un contenedor OCI estándar.",
        },
        {
          icon: "solar:server-path-bold-duotone",
          title: "Despliega Servidores MCP",
          desc: "Aloja servidores MCP junto a agentes. Descubribles vía protocolo estándar.",
        },
        {
          icon: "solar:tuning-2-bold-duotone",
          title: "Auto-Escalado desde Cero",
          desc: "Sin tráfico → cero costo. Pico → auto-escala. Sin planificación de capacidad.",
        },
        {
          icon: "solar:share-circle-bold-duotone",
          title: "Private Endpoints",
          desc: "Cero exposición a internet. Accede a tus agentes desde tu VCN, on-prem vía FastConnect/VPN, o redes peered. Resolución DNS interna.",
        },
        {
          icon: "solar:key-bold-duotone",
          title: "Auth por Resource Principal",
          desc: "Credenciales auto-aprovisionadas. Sin claves API que gestionar o rotar.",
        },
        {
          icon: "solar:shield-network-bold-duotone",
          title: "API Gateway",
          desc: "Límites de tasa, auth y monitoreo. Todo gestionado. Controla quién llama a tus agentes.",
        },
      ],
    },
  },

  /* ── 10. PRIVACIDAD DE DATOS ── */
  {
    id: "data-privacy",
    sectionLabel: "Privacidad de Datos",
    title: "Tus datos son tuyos. Punto.",
    type: "data-privacy",
    theme: "gray",
    speakerNotes: [
      "Hablemos de privacidad de datos - y seamos directos. Esta es la preocupación número uno que escuchamos de las empresas, y con razón.",
      "Tus datos nunca se usan para entrenar modelos. Cuando envías un prompt a través de OCI, es procesado por el modelo y el resultado se te devuelve. El prompt luego se descarta. No se almacena para entrenamiento. No se usa para mejorar el modelo. No se comparte con el proveedor del modelo. Punto.",
      "Cero retención de datos por proveedores significa exactamente lo que dice. Ni Oracle ni ninguno de los proveedores de modelos retienen tus prompts o respuestas. Tu inteligencia de negocio sigue siendo tuya.",
      "Con Clusters de IA Dedicados, tu cómputo está físicamente aislado. Sin GPUs compartidas, sin vecinos ruidosos, sin posibilidad de filtración de datos entre inquilinos. Esto es crítico para industrias reguladas - salud, finanzas, gobierno.",
      "La residencia de datos está garantizada. Tus datos permanecen en la región de OCI que elijas. Si estás en Frankfurt, tus datos se quedan en Frankfurt. Cumplimiento total con GDPR, leyes locales de soberanía de datos y regulaciones industriales.",
    ],
    content: {
      principles: [
        {
          icon: "solar:shield-check-bold-duotone",
          title: "Cero Retención de Datos por Proveedores",
          desc: "Prompts procesados y descartados. Sin almacenamiento, sin entrenamiento, sin compartir con proveedores.",
        },
        {
          icon: "solar:server-bold-duotone",
          title: "Clusters de IA Dedicados",
          desc: "Cómputo GPU aislado. Sin infraestructura compartida, sin filtración entre inquilinos.",
        },
        {
          icon: "solar:map-point-bold-duotone",
          title: "Residencia de Datos Garantizada",
          desc: "Los datos permanecen en tu región OCI elegida. Cumplimiento total con GDPR y soberanía.",
        },
        {
          icon: "solar:lock-keyhole-bold-duotone",
          title: "Claves de Cifrado Gestionadas por el Cliente",
          desc: "Tú controlas las claves de cifrado. Trae las tuyas, rota a tu ritmo. OCI Vault integrado.",
        },
        {
          icon: "solar:danger-triangle-bold-duotone",
          title: "Guardrails",
          desc: "Filtrado de contenido, detección de PII, y gestión de temas. Controla lo que entra y sale de tus agentes.",
        },
      ],
    },
  },

  /* ── 11. OBSERVABILIDAD ── */
  {
    id: "observability",
    sectionLabel: "Observabilidad",
    title: "Ve todo lo que hacen tus agentes.",
    type: "observability",
    theme: "light",
    speakerNotes: [
      "La observabilidad se trata de ver exactamente lo que hace tu agente. Piénsalo como CCTV para tu IA. Cada llamada a herramienta, cada decisión, cada respuesta - todo registrado y rastreable.",
      "Soportamos OpenTelemetry - el estándar de la industria para recopilar trazas y métricas. Piénsalo como una caja negra para cada interacción del agente. Funciona con cualquier herramienta de monitoreo que ya uses - Datadog, Grafana, Splunk, lo que sea.",
      "Para monitoreo específico de IA, nos integramos con LangFuse y LangSmith. Estos te dan reproducciones paso a paso del proceso de pensamiento de tu agente: qué herramientas llamó, qué decidió, cuánto tardó cada paso, y cuál fue el resultado final.",
      "Cada solicitud recibe un ID de Correlación único que la sigue de principio a fin. Si algo sale mal, puedes rastrear toda la cadena - desde la solicitud del usuario hasta las llamadas a herramientas hasta la respuesta final - en segundos.",
      "Esto no es opcional ni premium. Cada llamada API se rastrea. Cada invocación de herramienta se registra. Está integrado en la plataforma desde el día uno.",
    ],
    content: {
      tools: [
        {
          icon: "solar:chart-bold-duotone",
          name: "OpenTelemetry",
          desc: "Trazabilidad estándar de la industria. Funciona con Datadog, Grafana, Splunk, cualquier backend OTLP.",
        },
        {
          icon: "solar:monitor-bold-duotone",
          name: "LangFuse & LangSmith",
          desc: "Reproducciones paso a paso de decisiones del agente, llamadas a herramientas y tiempos.",
        },
        {
          icon: "solar:link-round-bold-duotone",
          name: "IDs de Correlación",
          desc: "ID único por solicitud. Rastrea toda la cadena de extremo a extremo en segundos.",
        },
        {
          icon: "solar:chart-square-bold-duotone",
          name: "Seguimiento de Costos y Rendimiento",
          desc: "Uso de tokens, latencia, costo por solicitud. Todo rastreado automáticamente.",
        },
      ],
      traceLog: [
        "// Traza del agente - ID correlación: req_7f3a...",
        "14:32:01 Solicitud del usuario recibida",
        "14:32:01 Razonamiento: necesita datos de ventas + contexto de mercado",
        "14:32:02 Herramienta: file_search → 3 docs encontrados (120ms)",
        "14:32:03 Herramienta: web_search → 5 resultados (340ms)",
        "14:32:04 Herramienta: code_interpreter → gráfico generado (890ms)",
        "14:32:05 Respuesta generada → 340 tokens",
        "14:32:05 Total: 4.2s | Costo: $0.003 | Herramientas: 3",
      ],
    },
  },

  /* ── 12. SEGURIDAD Y AUTH ── */
  {
    id: "security-auth",
    sectionLabel: "Seguridad y Auth",
    title: "Control de acceso empresarial.",
    type: "security-auth",
    theme: "dark",
    speakerNotes: [
      "Seguridad cubre quién puede acceder a qué, y cómo. Proporcionamos cuatro métodos de autenticación dependiendo de tu caso de uso.",
      "GenAI API Key es el más simple - como una contraseña API para tu proyecto. Ideal para comenzar rápidamente en desarrollo. Soporte para Python, TypeScript, Java, Go, .NET.",
      "OCI IAM es para producción. Gestión de identidad completa con políticas granulares - controla quién puede acceder a qué, hasta modelos y herramientas individuales. Defines políticas como 'equipo X solo puede usar GPT-4o en el entorno de staging.'",
      "OAuth 2.0 para apps web - tus usuarios inician sesión a través de tu proveedor de identidad existente. Intercambio de tokens estándar.",
      "Y el más potente: Resource Principal. Para apps desplegadas en OCI, las credenciales se aprovisionan automáticamente. Sin claves API que gestionar, sin secretos que rotar. La app automáticamente obtiene exactamente los permisos que necesita.",
      "En cumplimiento - certificación SOC 2 Type II, ISO 27001, y listo para cargas de trabajo HIPAA y FedRAMP con Clusters de IA Dedicados.",
    ],
    content: {
      authMethods: [
        {
          method: "GenAI API Key",
          desc: "Clave API simple. Genera, copia, usa.",
          languages: "Python, TypeScript, Java, Go, .NET",
          useCase: "Desarrollo y pruebas",
        },
        {
          method: "OCI IAM",
          desc: "Políticas granulares hasta modelos y herramientas individuales.",
          languages: "Python, Java",
          useCase: "Cargas de trabajo en producción",
        },
        {
          method: "OAuth 2.0",
          desc: "Auth web estándar vía tu proveedor de identidad existente.",
          languages: "Todos los lenguajes vía intercambio de tokens",
          useCase: "Apps web e integraciones",
        },
        {
          method: "Resource Principal",
          desc: "Credenciales auto-aprovisionadas para apps desplegadas en OCI. Sin claves que gestionar.",
          languages: "Python, Java (auto-aprovisionado)",
          useCase: "Apps desplegadas en OCI",
        },
      ],
      compliance: [
        {
          icon: "solar:verified-check-bold-duotone",
          title: "SOC 2 Type II",
          desc: "Controles de seguridad auditados independientemente. Actualizado anualmente.",
        },
        {
          icon: "solar:document-add-bold-duotone",
          title: "ISO 27001",
          desc: "Estándar internacional de seguridad para el ciclo de vida completo del servicio.",
        },
        {
          icon: "solar:hospital-bold-duotone",
          title: "Listo para HIPAA",
          desc: "Elegible para BAA con Clusters de IA Dedicados. Registro de auditoría completo.",
        },
        {
          icon: "solar:buildings-bold-duotone",
          title: "Listo para Gobierno",
          desc: "Elegible para FedRAMP con cómputo dedicado y residencia de datos.",
        },
      ],
    },
  },

  /* ── 13. CASOS DE USO ── */
  {
    id: "use-cases",
    sectionLabel: "Casos de Uso",
    title: "Agentes en todas las industrias.",
    type: "use-cases",
    theme: "light",
    speakerNotes: [
      "Veamos cómo se están aplicando los agentes empresariales en diferentes industrias - incluyendo dentro de Oracle.",
      "Servicios Financieros - automatización de back-office con potencial reducción del 40% en tiempo de ciclo de cierre a través de reconciliación, preparación de auditoría y triaje KYC/AML impulsados por agentes.",
      "Cadena de Suministro - agentes que monitorean disrupciones en tiempo real y de forma autónoma re-enrutan envíos, rebalancean inventario y gestionan comunicaciones con proveedores.",
      "Experiencia del Cliente - 80% de disminución en tiempo de resolución. Agentes de resolución autónoma manejan el ciclo completo de problemas comunes sin intervención humana.",
      "Manufactura - mantenimiento predictivo, depuración de PLC y síntesis de layouts de planta. Minimizando tiempo de inactividad no planificado a través de monitoreo proactivo de agentes.",
      "Y predicamos con el ejemplo. Oracle usa esta plataforma internamente - NetSuite está construyendo agentes para automatización de cierre financiero, Fusion Apps para flujos de trabajo de adquisiciones y RRHH, y Oracle Health para documentación clínica y soporte de decisiones. Es la misma plataforma, las mismas APIs.",
    ],
    content: {
      industries: [
        {
          industry: "Servicios Financieros",
          impact: "40% reducción en tiempo de ciclo de cierre",
          cases: ["Reconciliación", "Preparación de auditoría", "Triaje KYC/AML"],
          border: "",
          details:
            "Los agentes emparejan transacciones autónomamente entre libros contables, compilan evidencia de auditoría y clasifican casos KYC. Lo que tomaba días a equipos de analistas se hace en horas con registros de auditoría completos.",
        },
        {
          industry: "Cadena de Suministro",
          impact: "Respuesta a disrupciones en tiempo real",
          cases: [
            "Logística auto-reparable",
            "Rebalanceo de inventario",
            "Negociación con proveedores",
          ],
          border: "",
          details:
            "Los agentes de Logística Auto-Reparable monitorean disrupciones y de forma autónoma re-enrutan envíos. Los agentes de inventario predicen quiebres de stock y ejecutan transferencias proactivamente.",
        },
        {
          industry: "Experiencia del Cliente",
          impact: "80% disminución en tiempo de resolución",
          cases: [
            "Resolución autónoma",
            "Acciones CRM post-llamada",
            "Triaje personalizado",
          ],
          border: "",
          details:
            "Los agentes autónomos manejan errores de facturación de principio a fin - accediendo al CRM, verificando políticas y ejecutando resoluciones sin intervención humana. Los agentes post-llamada ahorran 5-10 minutos por interacción.",
        },
        {
          industry: "Manufactura",
          impact: "Tiempo de inactividad no planificado minimizado",
          cases: [
            "Síntesis de layout de planta",
            "Depuración de PLC",
            "Mantenimiento predictivo",
          ],
          border: "",
          details:
            "Los agentes de Layout de Planta proponen planos de piso óptimos. Los agentes de Depuración de PLC analizan logs de controladores. Los agentes de Mantenimiento predicen fallas desde datos de sensores y programan trabajo preventivo.",
        },
        {
          industry: "Oracle Interno (Dogfooding)",
          impact: "Misma plataforma, mismas APIs",
          cases: [
            "Cierre financiero NetSuite",
            "Adquisiciones y RRHH Fusion Apps",
            "Soporte clínico Oracle Health",
          ],
          border: "",
          details:
            "Oracle usa OCI Enterprise AI internamente en su suite de productos. NetSuite construye agentes de cierre financiero, Fusion Apps automatiza flujos de adquisiciones, y Oracle Health potencia documentación clínica - todo en la misma plataforma disponible para ti.",
        },
      ],
    },
  },

  /* ── 14. REGIONES ── */
  {
    id: "regions",
    sectionLabel: "Disponibilidad Global",
    title: "Disponible en 9 regiones en todo el mundo.",
    type: "regions",
    theme: "dark",
    speakerNotes: [
      "OCI Enterprise AI está disponible hoy en nueve regiones OC1 alrededor del mundo.",
      "En las Américas: Ashburn en la Costa Este, Chicago en el Medio Oeste, Phoenix en la Costa Oeste, y São Paulo en Brasil.",
      "En Europa y Medio Oriente: Frankfurt en Alemania, Londres en el Reino Unido, y Riad en Arabia Saudita.",
      "En Asia Pacífico: Osaka en Japón e Hyderabad en India. Más regiones están en la hoja de ruta.",
    ],
    content: {
      cities: [
        { name: "Ashburn", region: "Este de Estados Unidos", photo: "https://images.unsplash.com/photo-1501466044931-62695aada8e9?w=600&h=400&fit=crop" },
        { name: "Chicago", region: "Centro de Estados Unidos", photo: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=400&fit=crop" },
        { name: "Phoenix", region: "Oeste de Estados Unidos", photo: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop" },
        { name: "São Paulo", region: "Brasil", photo: "https://images.unsplash.com/photo-1543059080-f9b1272213d5?w=600&h=400&fit=crop" },
        { name: "Frankfurt", region: "Alemania", photo: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&h=400&fit=crop" },
        { name: "Londres", region: "Reino Unido", photo: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop" },
        { name: "Riad", region: "Arabia Saudita", photo: "https://images.unsplash.com/photo-1578895101408-1a36b834405b?w=600&h=400&fit=crop" },
        { name: "Osaka", region: "Japón", photo: "https://images.unsplash.com/photo-1590559899731-a382839e5549?w=600&h=400&fit=crop" },
        { name: "Hyderabad", region: "India", photo: "https://images.unsplash.com/photo-1572435555646-7ad9a149ad91?w=600&h=400&fit=crop" },
      ],
    },
  },

  /* ── 15. EMPEZAR ── */
  {
    id: "get-started",
    sectionLabel: "Empezar",
    title: "¿Listo para construir?",
    type: "get-started",
    theme: "dark",
    speakerNotes: [
      "Aquí está tu camino concreto para empezar - cinco pasos de cero a producción.",
      "Paso uno: prueba el inicio rápido. Crea un proyecto, obtén una clave API, y ejecuta tu primera llamada de agente. Puedes hacer esto en menos de 10 minutos.",
      "Paso dos: explora las herramientas. Añade Búsqueda Web, Búsqueda de Archivos, Intérprete de Código, y NL2SQL. Usa tus propios datos - ahí es cuando se pone emocionante.",
      "Paso tres: integra con tus sistemas vía Function Calling y MCP. Paso cuatro: despliega usando Despliegue Sin Fricción. Paso cinco: escala con gobernanza, monitoreo y clusters dedicados.",
      "Si estás migrando desde el servicio OCI Generative AI Agents anterior - la API de Responses es un superconjunto. Tenemos una guía de migración paso a paso que mapea cada llamada API antigua a la nueva.",
      "Gracias por tu tiempo hoy. OCI Enterprise AI está listo para producción, generalmente disponible en nueve regiones. Todo lo que mostré funciona ahora mismo.",
    ],
    content: {
      steps: [
        { step: "1", label: "Crear Proyecto", desc: "Configura un Proyecto de IA Generativa en la Consola OCI" },
        { step: "2", label: "Generar Clave API", desc: "Crea una Clave API de IA Generativa para autenticación" },
        { step: "3", label: "Configurar Permisos IAM", desc: "Configura políticas de gestión de identidad y acceso" },
        { step: "4", label: "Instalar SDK OpenAI", desc: "pip install openai. El mismo SDK que ya usas" },
        { step: "5", label: "Llamar API Responses", desc: "Ejecuta tu primera llamada de agente en menos de 10 minutos" },
      ],
    },
  },
];
