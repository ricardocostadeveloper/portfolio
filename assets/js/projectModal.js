// Gerenciador do Modal Glassmorphic de Detalhes de Projetos
export function initProjectModal() {
  const modal = document.getElementById("project-modal");
  const modalBody = document.getElementById("modal-project-content");
  const closeBtn = document.getElementById("modal-close-btn");

  if (!modal || !modalBody) return;

  const PROJECTS_DATA = {
    techautomacao: {
      title: "Tech Automação Brasil",
      subtitle: "Plataforma Completa de E-Commerce & Catálogo de Automação Industrial",
      tag: "Em Produção no Brasil",
      problem: "Necessidade de conectar indústrias, técnicos e o polo fabril a componentes especializados (sensores, elétrica, pneumática, ferramentas), com catálogo de alta velocidade, usabilidade moderna e checkout integrado.",
      solution: "Concepção e arquitetura da plataforma e-commerce ponta a ponta. Catálogo categorizado com busca rápida, carrinho de compras interativo, painel administrativo para precificação e estoque, e canal integrado de atendimento e conversão via WhatsApp.",
      metrics: [
        { label: "Catálogo", value: "+10 Categorias Industriais" },
        { label: "Status", value: "Ativo em Produção" },
        { label: "Alcance", value: "Nacional (Polo Manaus & Brasil)" }
      ],
      stack: ["E-Commerce", "Full Stack", "MySQL", "APIs REST", "HTML5/CSS3/JavaScript", "UI/UX", "SEO Técnico"],
      link: "https://techautomacaobrasil.com.br/",
      linkLabel: "Visitar E-Commerce Ao Vivo"
    },
    ppcs: {
      title: "Print Process Control System (PPCS)",
      subtitle: "Sistema Poka-Yoke IoT SMT com ESP32 na Visteon Amazonas",
      tag: "Missão Crítica Fabril",
      problem: "O processo de impressão de pasta de solda em placas de circuito impresso (PCB) para eletrônicos automotivos é altamente crítico. Erros de parâmetros de serigrafia ou distrações humanas resultavam em riscos de falha estrutural na soldagem.",
      solution: "Desenvolvimento de solução Poka-Yoke (à prova de erros) que integra microcontroladores ESP32 instalados nas máquinas diretamente a um backend Laravel e interface reativa em Vue.js via WebSockets. O sistema valida os insumos e parâmetros em tempo real; caso qualquer item não atenda aos requisitos, a esteira é bloqueada fisicamente.",
      metrics: [
        { label: "Tolerância a Erro", value: "Zero Falhas (Poka-Yoke)" },
        { label: "Comunicação", value: "WebSockets em Tempo Real" },
        { label: "Hardware", value: "Microcontroladores ESP32" }
      ],
      stack: ["Indústria 4.0", "ESP32", "WebSockets", "Laravel", "Vue.js", "MySQL", "Docker", "Poka-Yoke"],
      link: "https://github.com/Visteon-Manaus",
      linkLabel: "Ver Organização Visteon GitHub"
    },
    andon: {
      title: "Sistema Andon & Telemetria Industrial",
      subtitle: "Gestão Visual e Monitoramento de Linhas de Montagem em Tempo Real",
      tag: "Indústria 4.0 & OEE",
      problem: "Falta de visibilidade centralizada sobre paradas operacionais, tempo de ciclo e solicitações de suporte de manutenção mecânica e eletrônica nas células de manufatura.",
      solution: "Arquitetura de sistema Andon com dashboards visuais instalados no chão de fábrica. Permite aos operadores acionar chamados com 1 toque, monitorar métricas de OEE em tempo real e notificar equipes de manutenção e supervisão instantaneamente.",
      metrics: [
        { label: "Impacto", value: "Redução do MTTR de Linha" },
        { label: "Atualização", value: "Tempo Real Sem Recarregar" },
        { label: "Disponibilidade", value: "Operação Contínua 24/7" }
      ],
      stack: ["Indústria 4.0", "Dashboards", "Laravel", "MySQL", "APIs REST", "Tempo Real"],
      link: "https://github.com/Visteon-Manaus",
      linkLabel: "Ver Organização Visteon GitHub"
    },
    album: {
      title: "Álbum Digital Interativo & Gamificação",
      subtitle: "Aplicação Reativa com Next.js 15, Framer Motion e @dnd-kit",
      tag: "Next.js 15 Full Stack",
      problem: "Criar uma aplicação de colecionáveis digitais gamificada que entregasse fluidez nativa no navegador, sem lag em drag-and-drop e com máxima segurança contra ataques XSS em tokens de autenticação.",
      solution: "Desenvolvimento com Next.js 15 (App Router), TypeScript e Prisma ORM. Autenticação reforçada via JWT encapsulado em cookies HttpOnly, drag-and-drop avançado com @dnd-kit com suporte a touch e mouse, física de animação com Framer Motion e motor de regras de inventário.",
      metrics: [
        { label: "Performance", value: "60 FPS Drag & Drop" },
        { label: "Segurança", value: "Cookies JWT HttpOnly" },
        { label: "Tipagem", value: "100% Strict TypeScript" }
      ],
      stack: ["Next.js 15", "TypeScript", "Prisma ORM", "Tailwind CSS", "Framer Motion", "@dnd-kit", "Docker"],
      link: "https://github.com/ricardocostadeveloper",
      linkLabel: "Ver Perfil no GitHub"
    },
    astro: {
      title: "ASTRO Trouble Tracking System",
      subtitle: "Rastreabilidade Analítica de Ocorrências Fabris e Qualidade",
      tag: "Auditoria & Qualidade",
      problem: "Registro disperso e manual de falhas e trocas de componentes, gerando perda de histórico analítico para as equipes de engenharia de processos e qualidade.",
      solution: "Plataforma corporativa ágil para operadores e engenheiros realizarem inputs de troubles operacionais com categorização rápida e geração de gráficos de pareto e relatórios históricos de confiabilidade.",
      metrics: [
        { label: "Rastreabilidade", value: "100% dos Inputs Gravados" },
        { label: "Análise", value: "Geração Automática de Relatórios" },
        { label: "Qualidade", value: "Suporte a Metodologias Lean" }
      ],
      stack: ["Indústria 4.0", "Laravel", "Vue.js", "MySQL", "Auditoria", "Gestão da Qualidade"],
      link: "https://github.com/Visteon-Manaus",
      linkLabel: "Ver Organização Visteon GitHub"
    },
    semad: {
      title: "Portal dos Estagiários da Prefeitura de Manaus",
      subtitle: "Centralização Governamental Municipal na SEMAD",
      tag: "Setor Público Municipal",
      problem: "Gestão descentralizada de centenas de estudantes distribuídos em secretarias municipais, com controle fragmentado de documentação, frequência e bolsas.",
      solution: "Concepção do portal unificado do programa de estágios da Prefeitura de Manaus. Migração de rotinas legadas para uma plataforma moderna e segura em Laravel e React/Vue, com controle de termos de estágio, frequência eletrônica e relatórios gerenciais.",
      metrics: [
        { label: "Abrangência", value: "Todas as Secretarias Municipais" },
        { label: "Usuários", value: "Centenas de Bolsistas e Gestores" },
        { label: "Digitalização", value: "Eliminação de Processos em Papel" }
      ],
      stack: ["Setor Público", "Laravel", "React.js", "Vue.js", "MySQL", "APIs REST", "Git"],
      link: "https://github.com/ricardocostadeveloper",
      linkLabel: "Ver Repositórios no GitHub"
    }
  };

  function openModal(projectId) {
    const data = PROJECTS_DATA[projectId];
    if (!data) return;

    modalBody.innerHTML = `
      <div class="modal-project-header">
        <span class="modal-project-tag">${data.tag}</span>
        <h2 class="modal-project-title">${data.title}</h2>
        <p class="modal-project-subtitle">${data.subtitle}</p>
      </div>

      <div class="modal-project-grid">
        <div class="modal-project-section">
          <h4><span class="text-cyan">01.</span> O Desafio</h4>
          <p>${data.problem}</p>
        </div>

        <div class="modal-project-section">
          <h4><span class="text-cyan">02.</span> Solução de Engenharia</h4>
          <p>${data.solution}</p>
        </div>
      </div>

      <div class="modal-metrics-row">
        ${data.metrics
          .map(
            (m) => `
          <div class="modal-metric-card">
            <span class="modal-metric-val">${m.value}</span>
            <span class="modal-metric-lbl">${m.label}</span>
          </div>
        `
          )
          .join("")}
      </div>

      <div class="modal-tech-row">
        <h5>Stack & Tecnologias Aplicadas:</h5>
        <div class="modal-tech-tags">
          ${data.stack.map((t) => `<span class="badge-pill">${t}</span>`).join("")}
        </div>
      </div>

      <div class="modal-footer-action">
        <a href="${data.link}" target="_blank" rel="noopener" class="btn btn-primary">
          ${data.linkLabel}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </div>
    `;

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }

  // Atrela os botões de abrir modal
  document.querySelectorAll("[data-modal-project]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const id = btn.getAttribute("data-modal-project");
      openModal(id);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });
}
