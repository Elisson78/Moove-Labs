export interface ProjectCase {
  id: string;
  title: string;
  category: string;
  url: string;
  displayUrl: string;
  description: string;
  technologies: string[];
  features: string[];
  metricsPreview: { label: string; value: string };
  gradient: string;
  badgeColor: string;
}

export const PROJECT_CASES: ProjectCase[] = [
  {
    id: "calculateur",
    title: "MooveLabs Calculateur",
    category: "SaaS / Déménagement / Automação",
    url: "https://calculateur.moovelabs.com/",
    displayUrl: "calculateur.moovelabs.com",
    description:
      "Plataforma SaaS desenvolvida para empresas de mudanças na Suíça e Europa, permitindo calcular o volume exato da mudança em m³, receber solicitações de orçamento personalizadas e administrar clientes em um painel integrado.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Emails Automáticos", "Multi-tenant"],
    features: [
      "Simulador de volume interativo com mais de 48 itens de mobília catalogados",
      "Geração de orçamentos automáticos com envio instantâneo por e-mail",
      "Painel de gestão de leads e solicitações para administradores",
    ],
    metricsPreview: { label: "Catálogo", value: "48+ móveis" },
    gradient: "from-blue-600 via-indigo-600 to-sky-500",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    id: "ponto-do-sindico",
    title: "Ponto do Síndico",
    category: "SaaS / Gestão de Condomínios",
    url: "https://pontodosindico.com.br/",
    displayUrl: "pontodosindico.com.br",
    description:
      "Plataforma digital especializada voltada para a gestão moderna e administração eficiente de condomínios residenciais e comerciais, centralizando comunicados, manutenções e processos administrativos.",
    technologies: ["React", "Node.js", "PostgreSQL", "Cloud Architecture", "APIs"],
    features: [
      "Ambiente digital simplificado para gestão condominial transparente",
      "Automação de rotinas recorrentes de comunicação e vistorias",
      "Estrutura com alta disponibilidade e conformidade de dados",
    ],
    metricsPreview: { label: "Ambiente", value: "100% Web" },
    gradient: "from-sky-500 via-blue-600 to-indigo-700",
    badgeColor: "bg-sky-50 text-sky-700 border-sky-200",
  },
  {
    id: "devismaison",
    title: "DevisMaison",
    category: "Marketplace / Construção / Lead Generation",
    url: "https://devismaison.ch/",
    displayUrl: "devismaison.ch",
    description:
      "Plataforma suíça que conecta proprietários que precisam realizar reformas e obras civis a profissionais, artesãos e empresas qualificadas do setor de construção em toda a Suíça.",
    technologies: ["Next.js", "Lead Matching Engine", "Supabase", "APIs de Geolocalização", "Docker"],
    features: [
      "Motor inteligente de qualificação e distribuição de leads de reforma",
      "Formulários dinâmicos de especificação técnica para clientes",
      "Área de parceiros profissionais com verificação de credenciais",
    ],
    metricsPreview: { label: "Mercado", value: "Suíça / CH" },
    gradient: "from-blue-700 via-indigo-700 to-slate-800",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
  },
  {
    id: "marise-nakagawa",
    title: "Marise Nakagawa",
    category: "Turismo / Plataforma Digital",
    url: "https://marisenakagawa.com/",
    displayUrl: "marisenakagawa.com",
    description:
      "Projeto digital de alta elegância desenvolvido para o segmento de turismo exclusivo na Itália (Essentia Travel), focado em roteiros personalizados, experiências autênticas e curadoria premium.",
    technologies: ["Next.js", "Tailwind CSS", "Motion UI", "Content Management", "Performance SEO"],
    features: [
      "Design refinado com foco em experiência imersiva e storytelling de viagens",
      "Carregamento ultrarrápido com pontuação 95+ de performance",
      "Integração direta com canais de atendimento e consultoria exclusiva",
    ],
    metricsPreview: { label: "Segmento", value: "Itália & Luxo" },
    gradient: "from-amber-600 via-orange-600 to-blue-700",
    badgeColor: "bg-orange-50 text-orange-700 border-orange-200",
  },
];

export const SOLUTIONS = [
  {
    title: "Desenvolvimento de Software",
    description:
      "Sistemas web personalizados desenvolvidos sob medida de acordo com os processos, regras de negócio e necessidades exclusivas da sua empresa.",
    icon: "Code2",
    badge: "Sistemas Web",
  },
  {
    title: "Plataformas SaaS",
    description:
      "Desenvolvimento de produtos SaaS escaláveis, dashboards gerenciais, arquitetura multiusuário e plataformas prontas para monetização.",
    icon: "LayoutDashboard",
    badge: "Multi-tenant",
  },
  {
    title: "Inteligência Artificial",
    description:
      "Agentes inteligentes para atendimento ao cliente, qualificação de leads, suporte técnico 24/7 e automação de operações analíticas.",
    icon: "Bot",
    badge: "LLMs & Agentes",
  },
  {
    title: "Automação de Processos",
    description:
      "Automatização de rotinas repetitivas conectando sistemas legados, APIs, webhooks e bancos de dados para eliminar erros manuais.",
    icon: "Workflow",
    badge: "Zero Trabalho Manual",
  },
  {
    title: "CRM Personalizado",
    description:
      "CRM desenvolvido exatamente para acompanhar o fluxo real de vendas, pipeline e atendimento da empresa, sem complexidades desnecessárias.",
    icon: "Users2",
    badge: "Pipeline Sob Medida",
  },
  {
    title: "Integrações",
    description:
      "WhatsApp, APIs, gateways de pagamento, ERPs, bancos de dados e serviços externos conectados de forma segura em um único ecossistema.",
    icon: "Network",
    badge: "Conectividade Total",
  },
];

export const AI_WORKFLOW_STEPS = [
  { step: "01", title: "Cliente", desc: "Inicia contato ou envia solicitação" },
  { step: "02", title: "WhatsApp / Web", desc: "Ponto de entrada do usuário" },
  { step: "03", title: "AI Agent", desc: "Compreensão de linguagem, contexto e regras" },
  { step: "04", title: "CRM", desc: "Registro automático do lead e histórico" },
  { step: "05", title: "Automação", desc: "Disparo de ações, webhooks e rotinas" },
  { step: "06", title: "Banco de Dados", desc: "Armazenamento estruturado e seguro" },
];

export const AI_USE_CASES = [
  { title: "Atendimento automático", desc: "Respostas imediatas e contextuais 24 horas por dia." },
  { title: "Qualificação de leads", desc: "Identificação do perfil ideal antes de direcionar ao time comercial." },
  { title: "Agendamento inteligente", desc: "Sincronização de reuniões diretamente na agenda da equipe." },
  { title: "Orçamentos e propostas", desc: "Cálculo e geração de cotações automáticas com base em parâmetros." },
  { title: "Follow-up proativo", desc: "Acompanhamento contínuo de clientes em fases estratégicas da jornada." },
  { title: "Consulta de informações", desc: "Busca de dados em documentos internos, estoques e bases de dados." },
  { title: "Atualização de CRM", desc: "Alimentação de status e anotações sem exigir trabalho manual do vendedor." },
];

export const HOW_WE_WORK_STEPS = [
  {
    number: "01",
    title: "Descoberta",
    description: "Mergulhamos no seu negócio para entender os gargalos, processos manuais e objetivos estratégicos.",
  },
  {
    number: "02",
    title: "Estratégia",
    description: "Definimos o escopo, arquitetura técnica, modelo de dados e o plano de lançamento do MVP.",
  },
  {
    number: "03",
    title: "Design",
    description: "Projetamos interfaces limpas, intuitivas e focadas na experiência prática do usuário.",
  },
  {
    number: "04",
    title: "Desenvolvimento",
    description: "Codificamos sistemas robustos, integrações de APIs e agentes de IA com padrões modernos de engenharia.",
  },
  {
    number: "05",
    title: "Evolução",
    description: "Monitoramos métricas de uso, automatizamos novas rotinas e iteramos continuamente o produto.",
  },
];

export const TECH_BADGES = [
  "Next.js 15",
  "React 19",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Supabase",
  "AI Agents & LLMs",
  "n8n Automation",
  "Docker",
  "Redis",
  "Stripe",
  "WhatsApp Business API",
  "APIs REST & Webhooks",
  "Cloud Architecture",
];

export const DIFFERENTIALS = [
  {
    title: "Negócio primeiro",
    description:
      "Antes de escrever uma única linha de código, entendemos a fundo como a sua empresa gera valor, onde estão os custos operacionais e o que realmente move o seu faturamento.",
    tag: "Visão Prática",
  },
  {
    title: "Tecnologia sob medida",
    description:
      "O software é construído para acompanhar o processo natural da sua equipe — e não para forçar sua empresa a se adaptar a ferramentas rígidas ou limitadas.",
    tag: "Arquitetura Flexível",
  },
  {
    title: "Automação desde o início",
    description:
      "Cada sistema é pensado desde a concepção para eliminar tarefas manuais repetitivas, conectando dados entre setores e gerando produtividade real desde o dia um.",
    tag: "Eficiência Máxima",
  },
];

export const SOCIAL_PROOF_ITEMS = [
  { label: "Sistemas Personalizados", desc: "Criados para fluxos de trabalho reais" },
  { label: "Automação de Processos", desc: "Eliminando rotinas e erros manuais" },
  { label: "Plataformas SaaS", desc: "Arquitetura multiusuário e escalável" },
  { label: "Integrações de IA", desc: "Agentes operando dentro do negócio" },
];
