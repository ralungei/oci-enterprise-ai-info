# OCI Enterprise AI - Speaker Script


## 1. Introduction (Hero)

Welcome everyone, and thank you for joining us today. I'm excited to walk you through OCI Enterprise AI — Oracle's comprehensive platform for building, deploying, and managing enterprise-grade AI agents.

Over the next 45 minutes or so, we'll cover a lot of ground. But before we show you any product, let's start with something fundamental: what actually IS an AI agent? Because if we're going to build agents, we should agree on what we mean.

Everything I'm showing you today is generally available on OCI right now. Let's get started.


## 2. What is an Agent

Before we show you the platform, let's be honest about what an agent is, and what it isn't. The term 'agent' has become the most overloaded word in tech right now. Everyone claims to have agents. So let's be precise.

An AI agent is a system that has a goal, can reason about how to achieve it, has access to tools to take actions, and has memory to learn and persist context. If any of these pieces is missing, it's probably not an agent. It might be a chatbot, a workflow, or an automation with an LLM step.

Think of it as a spectrum. On the left you have a simple chatbot. It responds to questions, no tools, no memory across sessions. Then you have copilots that assist humans with suggestions but don't take autonomous action. Then agents that can reason, plan, use tools, and complete tasks autonomously. And at the far end, autonomous agents operate continuously, monitoring and acting proactively.

Let's test your intuition with a progression. Imagine an HR assistant that uses GPT-4o with a great system prompt to answer policy questions. Is that an agent? Now add web search so it can look up the latest labor regulations. Is it an agent now? What if it also searches your internal docs, checks the CRM, drafts emails, and remembers each employee's history? And then imagine a financial close system with 30 specialized prompts, planning, reasoning, multiple tools, and autonomous background execution.

The truth is, it's genuinely hard to draw the line. What we see is a trend towards more 'agentic' systems. A simple agent and an advanced one are both called agents, but they're very different things. The important thing is that the platform supports the full spectrum, from a simple tool-using assistant all the way to a fully autonomous multi-step agent.


## 3. The Challenge

Now that we agree on what an agent is, let's talk about what's happening in the real world. It's a scramble. Every week there's a new framework, a new model provider, a new 'agent platform.' And enterprises are caught in the middle.

Here are the numbers that matter: half of all GenAI pilots stall before reaching production. The average large enterprise is juggling more than five different AI providers. 44% have already experienced data privacy incidents during pilots. And inference costs are climbing 25-45% year over year.

What enterprises actually need is simple: a platform that's scalable, extensible, gives you value fast, and has unified governance. Not another framework-of-the-month.

We see the journey in three phases. 2023 was experimentation — one-off GenAI tasks. 2025 is adoption — AI built into business processes. 2027 and beyond is acceleration — proactive, autonomous agents driving real business outcomes.


## 4. The Platform (Pillars)

So here's our answer. OCI Enterprise AI is organized into two pillars and a governance base.

Pillar one: Managed AI API. This is where you build agents. It gives you access to models from all major providers, the Responses API for orchestration, built-in tools like web search, file search, code interpreter, NL2SQL, and managed memory. Everything you need to go from idea to working agent.

Pillar two: Hosted Deployments. This is where you deploy agents. Containerize your app — whether it's LangGraph, LangChain, CrewAI, or your own code — push it, and OCI handles the rest. Auto-scaling, managed storage, networking, all taken care of.

And underneath both: Governance. Security, compliance, observability, and data privacy. Not as an afterthought — as the foundation. Zero vendor data retention, dedicated compute, full tracing.

The agent lifecycle flows through seven stages: Ideate, Build, Test, Deploy, Orchestrate, Execute, and Observe. Our platform covers every stage, so you're never cobbling together disparate tools.


## 5. Agent Tools

Remember the four components of an agent? Goal, Reasoning, Tools, Memory. This is the Tools layer — everything managed by the platform, all accessible through the Responses API.

Web Search gives agents real-time access to the internet with source citations. File Search provides enterprise RAG — your agent can search through your company's documents intelligently. The Connector API lets you connect File Search to external data sources like Oracle Object Storage, keeping everything in sync.

Code Interpreter runs Python code safely in a sandbox. NL2SQL lets your agent query databases by just asking questions in plain English — and your data never moves.

Function Calling lets agents trigger actions in your own systems — your APIs, your business logic. Remote MCP is the emerging standard for connecting to external tools — and with A2A (Agent-to-Agent) protocol support, your agents can discover and collaborate with other agents.

The real power is combining multiple tools in one request. The agent figures out which tools to use, in what order, all by itself.


## 6. Memory

Memory is what separates a real agent from a stateless API call. We provide three types of managed memory, each addressing a different need.

Multi-Turn Conversations preserve context across turns. Ask a question, get an answer, then say 'tell me more about that' — the agent knows what 'that' refers to. The platform handles this automatically.

Long-Term Memory persists across conversations. Your agent remembers what a user discussed last week. Like having a colleague who actually reads the meeting notes.

Compaction solves the cost problem. Long conversations accumulate thousands of tokens. Auto-compaction condenses history while keeping the important stuff — 80% cost reduction with no quality loss.


## 7. Models

Let's talk about models. And let's start with the most important message: you don't have to choose a provider. We have pioneering agreements with OpenAI, Google, xAI, Meta, and Cohere. All accessible through a single API.

Privacy — and this is non-negotiable: your data is NEVER used to train models. Zero vendor data retention. Your prompts, your responses, your data stays yours. Period.

No lock-in. Want to switch from one model to another? Change one line of code. Same API, same SDK, same application. No rewrites.

For regulated industries and production workloads, Dedicated AI Clusters give you isolated GPU capacity reserved for you, full data sovereignty, predictable performance.


## 8. Build

One of our core design principles is that you should be able to build with the frameworks your team already knows. We don't force you into a proprietary SDK.

We're compatible with all the major agent frameworks — OpenAI Agents SDK (recommended), LangChain, LangGraph, CrewAI, AutoGen, Semantic Kernel, LlamaIndex, Pydantic, and BYOF.

Migration is three lines of code. Same import, same SDK methods, same response objects. Change the base_url, the api_key, and add a project parameter. That's it.

And if you're coming from the older OCI Generative AI Agents service — the migration path is straightforward. The new Responses API is a superset of the old capabilities. We provide a step-by-step migration guide.


## 9. Deploy

Let's talk about deployment. The key message here is simple: all your AI applications in one place, managed by OCI.

Hosted Deployments is the standout feature. Think of it as Heroku for your AI agents — but with enterprise security and OCI's networking built in. You containerize your app, push it, and we handle everything else.

What can you deploy? Anything. Your LangGraph agent, your CrewAI multi-agent system, your custom FastAPI service, even your own MCP servers. Standard OCI containers — no proprietary runtime.

The sweet spot is 'Seamless Deploy.' Your code, any framework, containerized. OCI handles infrastructure, scaling from zero during quiet periods, auto-scaling during spikes. Dev, staging, prod environments built in.

How do services connect? Everything runs within your VCN. Your deployed agent talks to the Managed AI API for inference, to your databases for state, to other deployed services via private endpoints. All internal, all secure.

Authentication for deployed apps uses Resource Principal (RPST) — credentials are auto-provisioned by OCI. No API keys to manage, no secrets to rotate. Your deployed app automatically has the right permissions.

Three tiers depending on how much control you want: Self-Host for maximum flexibility, Seamless Deploy for the sweet spot, Fully Hosted for zero-ops.


## 10. Governance: Data Privacy

Let's talk about data privacy — and let's be direct. This is the number one concern we hear from enterprises, and rightly so.

Your data is never used to train models. When you send a prompt through OCI, it gets processed by the model and the output is returned to you. The prompt is then discarded. Not stored for training. Not used to improve the model. Not shared with the model provider. Period.

Zero vendor data retention means exactly what it says. Neither Oracle nor any of the model providers retain your prompts or responses. Your business intelligence stays yours.

With Dedicated AI Clusters, your compute is physically isolated. No shared GPUs, no noisy neighbors, no chance of data leakage between tenants. This is critical for regulated industries — healthcare, finance, government.

Data residency is guaranteed. Your data stays in the OCI region you choose. If you're in Frankfurt, your data stays in Frankfurt. Full compliance with GDPR, local data sovereignty laws, and industry regulations.


## 11. Governance: Observability

Observability is about seeing exactly what your agent does. Think of it like CCTV for your AI. Every tool call, every decision, every response — all logged and traceable.

We support OpenTelemetry — the industry standard for collecting traces and metrics. Think of it as a flight recorder for every agent interaction. It works with whatever monitoring tools you already use — Datadog, Grafana, Splunk, you name it.

For AI-specific monitoring, we integrate with LangFuse and LangSmith. These give you step-by-step replays of your agent's thought process: which tools it called, what it decided, how long each step took, and what the final output was.

Every request gets a unique Correlation ID that follows it from start to finish. If something goes wrong, you can trace the entire chain — from user request to tool calls to final response — in seconds.

This isn't optional or premium. Every API call is traced. Every tool invocation is logged. It's built into the platform from day one.


## 12. Governance: Security & Auth

Security covers who can access what, and how. We provide four authentication methods depending on your use case.

GenAI API Key is the simplest — like an API password for your project. Great for getting started quickly in development. Python, TypeScript, Java, Go, .NET support.

OCI IAM is for production. Full identity management with granular policies — control who can access what, down to individual models and tools. You define policies like 'team X can only use GPT-4o in the staging environment.'

OAuth 2.0 for web apps — your users log in through your existing identity provider. Standard token exchange.

And the most powerful: Resource Principal. For apps deployed on OCI, credentials are auto-provisioned. No API keys to manage, no secrets to rotate. The app automatically gets exactly the permissions it needs.

On the compliance side — SOC 2 Type II certified, ISO 27001, and ready for HIPAA and FedRAMP workloads with Dedicated AI Clusters.


## 13. Use Cases

Let's look at how enterprise agents are being applied across industries — including inside Oracle itself.

Financial Services — back-office automation with potential 40% reduction in close cycle time through agent-driven reconciliation, audit preparation, and KYC/AML triage.

Supply Chain — agents that monitor disruptions in real-time and autonomously re-route shipments, rebalance inventory, and manage supplier communications.

Customer Experience — 80% decrease in resolution time. Autonomous resolution agents handle the full lifecycle of common issues without human handoff.

Manufacturing — predictive maintenance, PLC debugging, and plant layout synthesis. Minimizing unplanned downtime through proactive agent monitoring.

And we practice what we preach. Oracle itself uses this platform internally — NetSuite is building agents for financial close automation, Fusion Apps for procurement and HR workflows, and Oracle Health for clinical documentation and decision support. This is the same platform, the same APIs.


## 14. Regions

OCI Enterprise AI is available today in nine OC1 regions across the globe.

In the Americas: Ashburn on the East Coast, Chicago in the Midwest, Phoenix on the West Coast, and Sao Paulo in Brazil.

In Europe and Middle East: Frankfurt in Germany, London in the UK, and Riyadh in Saudi Arabia.

In Asia Pacific: Osaka in Japan and Hyderabad in India. More regions are on the roadmap.


## 15. Recap / Get Started

Here's your concrete path to getting started — five steps from zero to production.

Step one: try the quickstart. Create a project, get an API key, and run your first agent call. You can do this in under 10 minutes.

Step two: explore the tools. Add Web Search, File Search, Code Interpreter, and NL2SQL. Use your own data — that's when it gets exciting.

Step three: integrate with your systems via Function Calling and MCP. Step four: deploy using Seamless Deploy. Step five: scale with governance, monitoring, and dedicated clusters.

If you're migrating from the older OCI Generative AI Agents service — the Responses API is a superset. We have a step-by-step migration guide that maps every old API call to the new one.

Thank you for your time today. OCI Enterprise AI is production-ready, generally available in nine regions. Everything I showed you works right now.
