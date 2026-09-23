"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "pt" | "fr";

export interface Translations {
  nav: {
    home: string;
    solutions: string;
    ai: string;
    projects: string;
    howWeWork: string;
    about: string;
    contact: string;
  };
  hero: {
    badgeAi: string;
    badgeCustom: string;
    headlinePart1: string;
    headlineGradient: string;
    description: string;
    startProject: string;
    viewProjects: string;
    highlightPerfTitle: string;
    highlightPerfSub: string;
    highlightAiTitle: string;
    highlightAiSub: string;
    highlightCustomTitle: string;
    highlightCustomSub: string;
  };
  heroGraphic: {
    title: string;
    status: string;
    flowTitle: string;
    realtime: string;
    flowClient: string;
    flowAi: string;
    flowAuto: string;
    flowSaas: string;
    flowResult: string;
    module1Title: string;
    module1Desc: string;
    module2Badge: string;
    module2Title: string;
    module2Desc: string;
    module3Title: string;
    module3Desc: string;
    module4Title: string;
    module4Desc: string;
    module5Title: string;
    module5Desc: string;
    module6Title: string;
    module6Desc: string;
    successTitle: string;
    successDesc: string;
    autoBadge: string;
  };
  socialProof: {
    badge: string;
    title: string;
    items: Array<{ label: string; desc: string }>;
  };
  solutions: {
    badge: string;
    title: string;
    description: string;
    cta: string;
    items: Array<{
      title: string;
      description: string;
      icon: string;
      badge: string;
    }>;
  };
  aiSection: {
    badge: string;
    title: string;
    titleGradient: string;
    description: string;
    archBadge: string;
    archTitle: string;
    pipelineBadge: string;
    steps: Array<{ step: string; title: string; desc: string }>;
    casesTitle: string;
    casesDesc: string;
    noHallucination: string;
    cases: Array<{ title: string; desc: string }>;
    ctaText: string;
  };
  portfolio: {
    badge: string;
    title: string;
    description: string;
    caseLabel: string;
    visitLive: string;
    techUsed: string;
    items: Array<{
      id: string;
      title: string;
      category: string;
      url: string;
      displayUrl: string;
      description: string;
      technologies: string[];
      features: string[];
    }>;
  };
  howWeWork: {
    badge: string;
    title: string;
    titleGradient: string;
    description: string;
    steps: Array<{
      number: string;
      title: string;
      description: string;
    }>;
  };
  techStack: {
    badge: string;
    title: string;
    description: string;
  };
  differentials: {
    badge: string;
    title: string;
    titleGradient: string;
    description: string;
    items: Array<{
      title: string;
      description: string;
      tag: string;
    }>;
  };
  about: {
    badge: string;
    title: string;
    titleGradient: string;
    p1: string;
    p2: string;
    p3: string;
    countryBr: string;
    countryCh: string;
    countryEu: string;
    cardSub: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
    cardFooter: string;
  };
  contact: {
    badge: string;
    title: string;
    titleGradient: string;
    description: string;
    fillForm: string;
    talkWhatsapp: string;
    formSuccessTitle: string;
    formSuccessDesc: string;
    sendAnother: string;
    nameLabel: string;
    namePlaceholder: string;
    companyLabel: string;
    companyPlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    whatsappLabel: string;
    whatsappPlaceholder: string;
    projectTypeLabel: string;
    projectTypes: string[];
    descLabel: string;
    descPlaceholder: string;
    submitButton: string;
    submitting: string;
    securityNotice: string;
    slaNotice: string;
  };
  footer: {
    description: string;
    countries: string;
    activeSystems: string;
    navTitle: string;
    instTitle: string;
    whatsappChannel: string;
    privacyPolicy: string;
    rights: string;
    top: string;
  };
  whatsapp: {
    tooltip: string;
    aria: string;
    msg: string;
  };
}

const ptTranslations: Translations = {
  nav: {
    home: "Início",
    solutions: "Soluções",
    ai: "Inteligência Artificial",
    projects: "Projetos",
    howWeWork: "Como Trabalhamos",
    about: "Sobre",
    contact: "Contato",
  },
  hero: {
    badgeAi: "AI & Software Company",
    badgeCustom: "Inovação Sob Medida",
    headlinePart1: "Transformamos ideias e processos em",
    headlineGradient: "software inteligente.",
    description:
      "A MooveLabs desenvolve sistemas web robustos, plataformas SaaS de alta escala, integrações completas e agentes de Inteligência Artificial para impulsionar o seu negócio.",
    startProject: "Iniciar meu projeto",
    viewProjects: "Ver projetos entregues",
    highlightPerfTitle: "Alta Performance",
    highlightPerfSub: "Next.js & Cloud",
    highlightAiTitle: "IA Integrada",
    highlightAiSub: "Agentes & LLMs",
    highlightCustomTitle: "100% Sob Medida",
    highlightCustomSub: "Código proprietário",
  },
  heroGraphic: {
    title: "MOOVELABS PIPELINE ENGINE",
    status: "Sistema Ativo • 99.9% Uptime",
    flowTitle: "Fluxo de Execução Contínua",
    realtime: "Realtime Stream",
    flowClient: "Cliente",
    flowAi: "IA Moove",
    flowAuto: "Automação",
    flowSaas: "SaaS / Web",
    flowResult: "Resultado",
    module1Title: "WhatsApp / Web",
    module1Desc: "Captura multicanal",
    module2Badge: "IA Ativa",
    module2Title: "AI Agent Core",
    module2Desc: "Tomada de decisão",
    module3Title: "Automation Engine",
    module3Desc: "Fluxos & Webhooks",
    module4Title: "Custom CRM",
    module4Desc: "Pipeline em tempo real",
    module5Title: "Database",
    module5Desc: "PostgreSQL / Cloud",
    module6Title: "API Gateway",
    module6Desc: "Next.js Microservices",
    successTitle: "Execução Inteligente Concluída",
    successDesc: "Lead qualificado pela IA • Notificação enviada • Resposta em 0.42s",
    autoBadge: "Automático",
  },
  socialProof: {
    badge: "Engenharia & Negócios",
    title: "Tecnologia construída para negócios reais.",
    items: [
      { label: "Sistemas Personalizados", desc: "Criados para fluxos de trabalho reais" },
      { label: "Automação de Processos", desc: "Eliminando rotinas e erros manuais" },
      { label: "Plataformas SaaS", desc: "Arquitetura multiusuário e escalável" },
      { label: "Integrações de IA", desc: "Agentes operando dentro do negócio" },
    ],
  },
  solutions: {
    badge: "Capacidades Técnicas",
    title: "Tecnologia para fazer sua empresa avançar com solidez.",
    description:
      "Desenvolvemos infraestruturas completas, produtos digitais de alta escala, integrações críticas e automações inteligentes alinhadas aos objetivos estratégicos do seu negócio.",
    cta: "Implementar esta solução",
    items: [
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
    ],
  },
  aiSection: {
    badge: "Inteligência Artificial Aplicada",
    title: "IA que trabalha",
    titleGradient: "dentro da sua operação.",
    description:
      "Criamos agentes de Inteligência Artificial autônomos e supervisionados, capazes de dialogar com clientes em linguagem natural, consultar bases internas, tomar decisões conforme regras de negócio e acionar sistemas.",
    archBadge: "Arquitetura Operacional MooveLabs",
    archTitle: "Do primeiro contato à persistência em banco",
    pipelineBadge: "Pipeline Automatizado",
    steps: [
      { step: "01", title: "Cliente", desc: "Inicia contato ou envia solicitação" },
      { step: "02", title: "WhatsApp / Web", desc: "Ponto de entrada do usuário" },
      { step: "03", title: "AI Agent", desc: "Compreensão de linguagem, contexto e regras" },
      { step: "04", title: "CRM", desc: "Registro automático do lead e histórico" },
      { step: "05", title: "Automação", desc: "Disparo de ações, webhooks e rotinas" },
      { step: "06", title: "Banco de Dados", desc: "Armazenamento estruturado e seguro" },
    ],
    casesTitle: "Tarefas que os Agentes MooveLabs Executam",
    casesDesc: "Autonomia com supervisão, regras determinísticas e integração total com CRM, ERP e APIs.",
    noHallucination: "Sem alucinações • Auditoria e logs completos",
    cases: [
      { title: "Atendimento automático", desc: "Respostas imediatas e contextuais 24 horas por dia." },
      { title: "Qualificação de leads", desc: "Identificação do perfil ideal antes de direcionar ao time comercial." },
      { title: "Agendamento inteligente", desc: "Sincronização de reuniões diretamente na agenda da equipe." },
      { title: "Orçamentos e propostas", desc: "Cálculo e geração de cotações automáticas com base em parâmetros." },
      { title: "Follow-up proativo", desc: "Acompanhamento contínuo de clientes em fases estratégicas da jornada." },
      { title: "Consulta de informações", desc: "Busca de dados em documentos internos, estoques e bases de dados." },
      { title: "Atualização de CRM", desc: "Alimentação de status e anotações sem exigir trabalho manual do vendedor." },
    ],
    ctaText: "Deseja um agente configurado para o fluxo da sua empresa? Fale conosco",
  },
  portfolio: {
    badge: "Casos Reais em Produção",
    title: "Projetos reais que geram resultados comprovados.",
    description:
      "Plataformas em operação ativa atendendo empresas e usuários no Brasil, Suíça e Europa. Cada sistema é construído sob medida com foco absoluto em confiabilidade, design e escala.",
    caseLabel: "Case",
    visitLive: "Visitar plataforma ao vivo",
    techUsed: "Tecnologias Utilizadas",
    items: [
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
      },
    ],
  },
  howWeWork: {
    badge: "Metodologia & Agilidade",
    title: "Da concepção ao",
    titleGradient: "software em produção.",
    description:
      "Um processo estruturado, transparente e focado em velocidade de entrega, sem burocracias e com comunicação direta com os especialistas técnicos do seu projeto.",
    steps: [
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
    ],
  },
  techStack: {
    badge: "Engenharia Moderna",
    title: "Tecnologias que impulsionam nossas entregas.",
    description:
      "Ferramentas líderes no ecossistema global de software, garantindo ultradesempenho, segurança robusta de dados e manutenibilidade a longo prazo.",
  },
  differentials: {
    badge: "Nosso Posicionamento",
    title: "Não entregamos apenas código.",
    titleGradient: "Entregamos soluções estratégicas.",
    description:
      "Diferente de agências tradicionais que criam apenas layouts estáticos, a MooveLabs atua como parceira técnica e de inteligência, totalmente comprometida com o crescimento e a eficiência real da sua empresa.",
    items: [
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
    ],
  },
  about: {
    badge: "Sobre a MooveLabs",
    title: "Construímos tecnologia sob medida para empresas que",
    titleGradient: "querem crescer.",
    p1: "A MooveLabs nasceu da experiência prática desenvolvendo produtos digitais escaláveis, sistemas empresariais críticos e automações para diferentes indústrias e desafios operacionais.",
    p2: "Transformamos processos manuais e demandas complexas em plataformas digitais fluidas e inteligentes, combinando desenvolvimento web moderno, automação de ponta a ponta e agentes de Inteligência Artificial conectados ao ecossistema do seu negócio.",
    p3: "Atendemos projetos de alta exigência no Brasil e no exterior, com clientes e soluções em produção ativa na Europa e na Suíça.",
    countryBr: "Brasil",
    countryCh: "Suíça",
    countryEu: "Europa",
    cardSub: "Software • AI • Automation",
    card1Title: "Engenharia sem templates genéricos",
    card1Desc: "Sistemas e automações desenvolvidos exclusivamente para a sua demanda.",
    card2Title: "Orientação a resultados reais",
    card2Desc: "Foco comprovado em redução de gargalos manuais e escala operacional.",
    card3Title: "Padrão Internacional",
    card3Desc: "Código limpo, arquitetura escalável e documentação completa.",
    cardFooter: "Compromisso com estabilidade e disponibilidade técnica",
  },
  contact: {
    badge: "Vamos Conversar",
    title: "Tem uma ideia ou processo que",
    titleGradient: "precisa de tecnologia?",
    description:
      "Conte para a MooveLabs. Vamos analisar a viabilidade técnica e arquitetar a melhor solução em software, automação ou agentes de Inteligência Artificial.",
    fillForm: "Preencher formulário do projeto",
    talkWhatsapp: "Conversar via WhatsApp",
    formSuccessTitle: "Solicitação Enviada com Sucesso!",
    formSuccessDesc:
      "Recebemos seus dados. Um especialista sênior da MooveLabs analisará suas informações e entrará em contato em até 24 horas úteis.",
    sendAnother: "Enviar nova solicitação",
    nameLabel: "Seu Nome *",
    namePlaceholder: "Ex: Carlos Silva",
    companyLabel: "Empresa",
    companyPlaceholder: "Nome da sua empresa",
    emailLabel: "E-mail Corporativo *",
    emailPlaceholder: "carlos@empresa.com",
    whatsappLabel: "WhatsApp com DDD *",
    whatsappPlaceholder: "+55 (11) 99999-9999",
    projectTypeLabel: "Tipo de Projeto *",
    projectTypes: [
      "Software personalizado",
      "Plataforma SaaS",
      "Agentes de IA",
      "Automação de Processos",
      "CRM Sob Medida",
      "Outro Desafio",
    ],
    descLabel: "Conte um pouco sobre o projeto *",
    descPlaceholder:
      "Descreva o problema que deseja resolver, funcionalidades almejadas ou processos manuais que quer automatizar...",
    submitButton: "Solicitar Avaliação Técnica",
    submitting: "Enviando proposta...",
    securityNotice: "Seus dados e ideias sob sigilo e confidencialidade.",
    slaNotice: "Retorno técnico em até 24h",
  },
  footer: {
    description:
      "Empresa de tecnologia especializada em desenvolvimento de software sob medida, produtos SaaS escaláveis, agentes de Inteligência Artificial e automações de alta eficiência.",
    countries: "Brasil • Suíça • Europa",
    activeSystems: "Sistemas Ativos 99.9%",
    navTitle: "Navegação",
    instTitle: "Institucional",
    whatsappChannel: "Canal WhatsApp",
    privacyPolicy: "Política de Privacidade",
    rights: "Todos os direitos reservados.",
    top: "Topo",
  },
  whatsapp: {
    tooltip: "Falar no WhatsApp",
    aria: "Falar com a MooveLabs no WhatsApp",
    msg: "Olá! Gostaria de conversar com a equipe técnica da MooveLabs sobre um novo projeto.",
  },
};

const frTranslations: Translations = {
  nav: {
    home: "Accueil",
    solutions: "Solutions",
    ai: "Intelligence Artificielle",
    projects: "Projets",
    howWeWork: "Méthodologie",
    about: "À Propos",
    contact: "Contact",
  },
  hero: {
    badgeAi: "AI & Software Company",
    badgeCustom: "Innovation Sur-Mesure",
    headlinePart1: "Nous transformons vos idées et processus en",
    headlineGradient: "logiciels intelligents.",
    description:
      "MooveLabs conçoit des systèmes web robustes, des plateformes SaaS évolutives, des intégrations complètes et des agents d'Intelligence Artificielle pour propulser votre entreprise.",
    startProject: "Lancer mon projet",
    viewProjects: "Voir nos réalisations",
    highlightPerfTitle: "Haute Performance",
    highlightPerfSub: "Next.js & Cloud",
    highlightAiTitle: "IA Intégrée",
    highlightAiSub: "Agents & LLMs",
    highlightCustomTitle: "100% Sur-Mesure",
    highlightCustomSub: "Code propriétaire",
  },
  heroGraphic: {
    title: "MOOVELABS PIPELINE ENGINE",
    status: "Système Actif • 99.9% Uptime",
    flowTitle: "Flux d'Exécution Continue",
    realtime: "Realtime Stream",
    flowClient: "Client",
    flowAi: "IA Moove",
    flowAuto: "Automatisation",
    flowSaas: "SaaS / Web",
    flowResult: "Résultat",
    module1Title: "WhatsApp / Web",
    module1Desc: "Capture multicanale",
    module2Badge: "IA Active",
    module2Title: "AI Agent Core",
    module2Desc: "Prise de décision",
    module3Title: "Automation Engine",
    module3Desc: "Flux & Webhooks",
    module4Title: "Custom CRM",
    module4Desc: "Pipeline en temps réel",
    module5Title: "Database",
    module5Desc: "PostgreSQL / Cloud",
    module6Title: "API Gateway",
    module6Desc: "Microservices Next.js",
    successTitle: "Exécution Intelligente Achevée",
    successDesc: "Lead qualifié par l'IA • Notification transmise • Réponse en 0.42s",
    autoBadge: "Automatique",
  },
  socialProof: {
    badge: "Ingénierie & Business",
    title: "Des technologies conçues pour de vraies entreprises.",
    items: [
      { label: "Systèmes Sur-Mesure", desc: "Adaptés à vos processus opérationnels réels" },
      { label: "Automatisation des Processus", desc: "Suppression des tâches et erreurs manuelles" },
      { label: "Plateformes SaaS", desc: "Architecture multi-tenant et hautement scalable" },
      { label: "Intégrations IA", desc: "Des agents opérant au cœur de votre activité" },
    ],
  },
  solutions: {
    badge: "Capacités Techniques",
    title: "La technologie pour faire progresser votre entreprise avec solidité.",
    description:
      "Nous développons des infrastructures complètes, des plateformes digitales à fort volume, des intégrations critiques et des automatisations intelligentes alignées avec vos objectifs stratégiques.",
    cta: "Déployer cette solution",
    items: [
      {
        title: "Développement Logiciel",
        description:
          "Applications web sur-mesure développées selon les processus, règles métiers et exigences spécifiques de votre entreprise.",
        icon: "Code2",
        badge: "Systèmes Web",
      },
      {
        title: "Plateformes SaaS",
        description:
          "Création de produits SaaS évolutifs, tableaux de bord de gestion, architecture multi-utilisateurs et plateformes prêtes pour la monétisation.",
        icon: "LayoutDashboard",
        badge: "Multi-tenant",
      },
      {
        title: "Intelligence Artificielle",
        description:
          "Agents autonomes pour le service client, la qualification de leads, le support 24/7 et l'automatisation d'opérations analytiques.",
        icon: "Bot",
        badge: "LLMs & Agents",
      },
      {
        title: "Automatisation des Processus",
        description:
          "Automatisation des tâches répétitives connectant logiciels existants, APIs, webhooks et bases de données pour éliminer les erreurs manuelles.",
        icon: "Workflow",
        badge: "Zéro Tâche Manuelle",
      },
      {
        title: "CRM Sur-Mesure",
        description:
          "CRM conçu exactement pour suivre vos flux de vente réels, votre pipeline et le suivi client, sans complexité inutile.",
        icon: "Users2",
        badge: "Pipeline Sur-Mesure",
      },
      {
        title: "Intégrations Systèmes",
        description:
          "WhatsApp, APIs, passerelles de paiement, ERPs, bases de données et services tiers interconnectés en toute sécurité.",
        icon: "Network",
        badge: "Connectivité Totale",
      },
    ],
  },
  aiSection: {
    badge: "Intelligence Artificielle Appliquée",
    title: "Une IA active",
    titleGradient: "au cœur de vos opérations.",
    description:
      "Nous développons des agents d'Intelligence Artificielle autonomes et supervisés, capables de converser avec vos clients en langage naturel, d'interroger vos bases internes, d'appliquer des règles métiers et de déclencher vos systèmes.",
    archBadge: "Architecture Opérationnelle MooveLabs",
    archTitle: "Du premier contact à la persistance en base de données",
    pipelineBadge: "Pipeline Automatisé",
    steps: [
      { step: "01", title: "Client", desc: "Initie le contact ou soumet une demande" },
      { step: "02", title: "WhatsApp / Web", desc: "Point d'entrée de l'utilisateur" },
      { step: "03", title: "AI Agent", desc: "Compréhension du langage, contexte et règles" },
      { step: "04", title: "CRM", desc: "Enregistrement automatique du prospect et historique" },
      { step: "05", title: "Automatisation", desc: "Déclenchement d'actions, webhooks et routines" },
      { step: "06", title: "Base de Données", desc: "Stockage sécurisé et structuré" },
    ],
    casesTitle: "Missions prises en charge par les Agents MooveLabs",
    casesDesc: "Autonomie supervisée, règles déterministes et interconnexion totale avec CRM, ERP et APIs.",
    noHallucination: "Sans hallucinations • Journalisation et audit complets",
    cases: [
      { title: "Service client automatisé", desc: "Réponses immédiates et contextuelles 24h/24 et 7j/7." },
      { title: "Qualification de prospects", desc: "Identification du profil idéal avant transmission aux commerciaux." },
      { title: "Prise de rendez-vous intelligente", desc: "Synchronisation directe des réunions dans les agendas de l'équipe." },
      { title: "Devis et propositions", desc: "Calcul et génération automatisés d'estimations tarifaires précises." },
      { title: "Relances proactives", desc: "Accompagnement continu des prospects aux étapes clés du parcours." },
      { title: "Interrogation de données", desc: "Recherche instantanée dans vos documents internes, stocks et bases." },
      { title: "Mise à jour du CRM", desc: "Actualisation automatique des statuts sans saisie manuelle des vendeurs." },
    ],
    ctaText: "Vous souhaitez un agent IA adapté au fonctionnement de votre entreprise ? Parlons-en",
  },
  portfolio: {
    badge: "Réalisations en Production",
    title: "Des projets réels qui génèrent des résultats concrets.",
    description:
      "Plateformes en exploitation active au service d'entreprises et d'utilisateurs en Suisse, au Brésil et en Europe. Chaque solution est construite sur-mesure avec une exigence absolue de fiabilité et d'évolutivité.",
    caseLabel: "Projet",
    visitLive: "Consulter la plateforme en direct",
    techUsed: "Technologies Utilisées",
    items: [
      {
        id: "calculateur",
        title: "MooveLabs Calculateur",
        category: "SaaS / Déménagement / Automatisation",
        url: "https://calculateur.moovelabs.com/",
        displayUrl: "calculateur.moovelabs.com",
        description:
          "Plateforme SaaS conçue pour les entreprises de déménagement en Suisse et en Europe, permettant de calculer le volume exact en m³, de recevoir des demandes d'estimations personnalisées et de gérer les clients sur un portail centralisé.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Emails Automatiques", "Multi-tenant"],
        features: [
          "Simulateur de volume interactif avec plus de 48 mobiliers répertoriés",
          "Génération instantanée de devis avec notification automatique par email",
          "Tableau de bord de gestion des leads et demandes pour les administrateurs",
        ],
      },
      {
        id: "ponto-do-sindico",
        title: "Ponto do Síndico",
        category: "SaaS / Gestion Immobilière & Copropriétés",
        url: "https://pontodosindico.com.br/",
        displayUrl: "pontodosindico.com.br",
        description:
          "Plateforme digitale spécialisée dans la gestion moderne et l'administration de copropriétés résidentielles et commerciales, centralisant les communications, la maintenance et les processus administratifs.",
        technologies: ["React", "Node.js", "PostgreSQL", "Cloud Architecture", "APIs"],
        features: [
          "Environnement digital simplifié pour une gouvernance transparente",
          "Automatisation des routines récurrentes de communication et d'inspections",
          "Infrastructure à haute disponibilité et stricte conformité des données",
        ],
      },
      {
        id: "devismaison",
        title: "DevisMaison",
        category: "Marketplace / Rénovation / Lead Generation",
        url: "https://devismaison.ch/",
        displayUrl: "devismaison.ch",
        description:
          "Plateforme suisse mettant en relation directe les propriétaires souhaitant effectuer des travaux de rénovation avec des artisans et entreprises du bâtiment qualifiés à travers toute la Suisse.",
        technologies: ["Next.js", "Lead Matching Engine", "Supabase", "APIs Géolocalisées", "Docker"],
        features: [
          "Moteur intelligent de qualification et d'attribution des demandes de travaux",
          "Formulaires dynamiques de spécifications techniques pour les particuliers",
          "Espace partenaires professionnels avec vérification des qualifications",
        ],
      },
      {
        id: "marise-nakagawa",
        title: "Marise Nakagawa",
        category: "Tourisme / Expérience Digitale Premium",
        url: "https://marisenakagawa.com/",
        displayUrl: "marisenakagawa.com",
        description:
          "Plateforme digitale d'exception pour le secteur du voyage de luxe en Italie (Essentia Travel), dédiée aux itinéraires sur-mesure, aux séjours immersifs et à la conciergerie haut de gamme.",
        technologies: ["Next.js", "Tailwind CSS", "Motion UI", "Content Management", "Performance SEO"],
        features: [
          "Design épuré et immersif axé sur le storytelling de voyages d'exception",
          "Chargement ultra-rapide avec un score de performance supérieur à 95",
          "Prise de contact directe et intégration avec les conseillers dédiés",
        ],
      },
    ],
  },
  howWeWork: {
    badge: "Méthodologie & Agilité",
    title: "De la conception au",
    titleGradient: "logiciel en production.",
    description:
      "Un processus structuré, transparent et orienté vers la rapidité de livraison, sans lourdeurs administratives et avec un échange direct avec nos experts techniques.",
    steps: [
      {
        number: "01",
        title: "Découverte",
        description: "Nous analysons votre activité pour cerner vos points de friction, processus manuels et ambitions stratégiques.",
      },
      {
        number: "02",
        title: "Stratégie",
        description: "Nous cadrons le périmètre, l'architecture technique, le modèle de données et la feuille de route du MVP.",
      },
      {
        number: "03",
        title: "Design UX/UI",
        description: "Nous concevons des interfaces modernes, intuitives et axées sur l'efficacité quotidienne de vos utilisateurs.",
      },
      {
        number: "04",
        title: "Développement",
        description: "Nous développons des systèmes robustes, des APIs sécurisées et des agents IA selon les meilleurs standards du génie logiciel.",
      },
      {
        number: "05",
        title: "Évolution",
        description: "Nous analysons les métriques d'usage, automatisons de nouvelles routines et faisons évoluer votre solution en continu.",
      },
    ],
  },
  techStack: {
    badge: "Ingénierie Moderne",
    title: "Les technologies au service de vos ambitions.",
    description:
      "Des outils reconnus mondialement garantissant haute performance, robustesse des données et maintenabilité durable.",
  },
  differentials: {
    badge: "Notre Positionnement",
    title: "Nous ne livrons pas simplement du code.",
    titleGradient: "Nous bâtissons des leviers stratégiques.",
    description:
      "À l'opposé des agences traditionnelles qui créent de simples vitrines statiques, MooveLabs s'engage comme partenaire technologique et d'ingénierie, dédié à la croissance et à l'efficacité opérationnelle de votre entreprise.",
    items: [
      {
        title: "Business d'abord",
        description:
          "Avant d'écrire la moindre ligne de code, nous comprenons comment votre entreprise crée de la valeur, où se situent vos coûts et ce qui accélère votre rentabilité.",
        tag: "Approche Pragmatique",
      },
      {
        title: "Technologie sur-mesure",
        description:
          "Le logiciel s'adapte aux flux réels de vos équipes — et non l'inverse. Fini les outils rigides et contraignants.",
        tag: "Architecture Flexible",
      },
      {
        title: "Automatisation native",
        description:
          "Chaque système est conçu pour supprimer les tâches manuelles répétitives, synchroniser vos données et générer des gains de temps dès le premier jour.",
        tag: "Efficacité Maximale",
      },
    ],
  },
  about: {
    badge: "À Propos de MooveLabs",
    title: "Nous créons des technologies sur-mesure pour les entreprises",
    titleGradient: "en pleine expansion.",
    p1: "MooveLabs est née du terrain et de l'expérience concrète dans le développement de produits digitaux évolutifs, de systèmes d'entreprise critiques et d'automatisations industrielles.",
    p2: "Nous convertissons les processus manuels et les problématiques complexes en plateformes numériques fluides et intelligentes, alliant développement web moderne, automatisation de bout en bout et agents IA connectés à votre activité.",
    p3: "Nous réalisons des projets à haute valeur ajoutée au Brésil et à l'international, avec des clients et des solutions en exploitation active en Suisse et en Europe.",
    countryBr: "Brésil",
    countryCh: "Suisse",
    countryEu: "Europe",
    cardSub: "Software • AI • Automation",
    card1Title: "Ingénierie sans templates génériques",
    card1Desc: "Des systèmes et flux développés sur-mesure et exclusivement pour votre besoin.",
    card2Title: "Orientation résultats concrets",
    card2Desc: "Un impact mesurable sur la réduction des tâches manuelles et la montée en charge.",
    card3Title: "Standard International",
    card3Desc: "Code propre, architecture scalable et documentation technique rigoureuse.",
    cardFooter: "Engagement total sur la stabilité et la disponibilité technique",
  },
  contact: {
    badge: "Échangeons Ensemble",
    title: "Vous avez une idée ou un processus",
    titleGradient: "qui nécessite de la technologie ?",
    description:
      "Parlez-en à MooveLabs. Nous étudierons la faisabilité technique et concevrons la solution logicielle, l'automatisation ou les agents IA les plus adaptés.",
    fillForm: "Remplir le formulaire de projet",
    talkWhatsapp: "Discuter via WhatsApp",
    formSuccessTitle: "Demande Transmise avec Succès !",
    formSuccessDesc:
      "Nous avons bien reçu vos informations. Un expert senior de MooveLabs analysera votre demande et vous recontactera sous 24h ouvrées.",
    sendAnother: "Envoyer une nouvelle demande",
    nameLabel: "Votre Nom *",
    namePlaceholder: "Ex: Jean Dupont",
    companyLabel: "Entreprise",
    companyPlaceholder: "Nom de votre société",
    emailLabel: "Email Professionnel *",
    emailPlaceholder: "jean@entreprise.ch",
    whatsappLabel: "Téléphone / WhatsApp avec indicatif *",
    whatsappPlaceholder: "+41 79 000 00 00",
    projectTypeLabel: "Type de Projet *",
    projectTypes: [
      "Logiciel sur-mesure",
      "Plateforme SaaS",
      "Agents IA",
      "Automatisation de Processus",
      "CRM Sur-Mesure",
      "Autre Défi Technique",
    ],
    descLabel: "Décrivez brièvement votre projet *",
    descPlaceholder:
      "Expliquez le problème à résoudre, les fonctionnalités clés souhaitées ou les processus manuels à automatiser...",
    submitButton: "Demander une Analyse Technique",
    submitting: "Envoi en cours...",
    securityNotice: "Vos données et concepts sont traités sous stricte confidentialité.",
    slaNotice: "Réponse technique sous 24h",
  },
  footer: {
    description:
      "Société technologique spécialisée dans le développement de logiciels sur-mesure, de plateformes SaaS évolutives, d'agents d'Intelligence Artificielle et d'automatisations à haute efficacité.",
    countries: "Brésil • Suisse • Europe",
    activeSystems: "Systèmes Actifs 99.9%",
    navTitle: "Navigation",
    instTitle: "Institutionnel",
    whatsappChannel: "Canal WhatsApp",
    privacyPolicy: "Politique de Confidentialité",
    rights: "Tous droits réservés.",
    top: "Haut",
  },
  whatsapp: {
    tooltip: "Discuter sur WhatsApp",
    aria: "Discuter avec MooveLabs sur WhatsApp",
    msg: "Bonjour ! J'aimerais échanger avec l'équipe technique de MooveLabs concernant un nouveau projet.",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "pt",
  setLanguage: () => {},
  t: ptTranslations,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("pt");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("moovelabs_lang") as Language | null;
      if (saved === "pt" || saved === "fr") {
        setLanguageState(saved);
        document.documentElement.lang = saved === "pt" ? "pt-BR" : "fr-CH";
      }
    } catch {
      // ignore
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("moovelabs_lang", lang);
      document.documentElement.lang = lang === "pt" ? "pt-BR" : "fr-CH";
    } catch {
      // ignore
    }
  };

  const t = language === "pt" ? ptTranslations : frTranslations;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
