/**
 * PORTFÓLIO RICARDO CUNHA COSTA — APLICAÇÃO CLIENTE UNIFICADA
 * Compatível 100% com execução local (file:///) e produção web (https://)
 * Zero dependências de módulos ES para evitar bloqueios de CORS em navegadores.
 */

(function () {
  "use strict";

  // ==========================================================================
  // DADOS DE EXPERIÊNCIA PROFISSIONAL
  // ==========================================================================
  const EXPERIENCES = {
    visteon: {
      role: "Desenvolvedor Fullstack Sênior / Engenheiro de Software",
      company: "Visteon Amazonas",
      period: "Set 2021 – Atual (Manaus, AM)",
      description: `
        <p class="text-slate-300 leading-relaxed mb-4">
          Atuação de ponta a ponta no ecossistema industrial da multinacional Visteon com foco em Indústria 4.0, automação de chão de fábrica e sistemas de missão crítica:
        </p>
        <ul class="space-y-3 text-slate-300">
          <li class="flex items-start gap-2">
            <span class="text-cyan-400 font-bold mt-1">▹</span>
            <span><strong>Sistema Poka-Yoke (PPCS):</strong> Arquitetura de solução com Laravel e Vue.js integrada em tempo real via WebSockets a microcontroladores ESP32 para validação à prova de falhas no processo de serigrafia SMT (fabricação de placas PCB automotivas).</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-cyan-400 font-bold mt-1">▹</span>
            <span><strong>Sistema Andon:</strong> Gestão visual e telemetria de linhas de montagem, controle de ordens de serviço de manutenção e métricas de OEE em tempo real.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-cyan-400 font-bold mt-1">▹</span>
            <span><strong>ASTRO:</strong> Plataforma para controle analítico de falhas e histórico de ocorrências industriais (troubles).</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-cyan-400 font-bold mt-1">▹</span>
            <span><strong>Aplicações Modernas:</strong> Desenvolvimento de interfaces performáticas com Next.js 15 e TypeScript, Prisma ORM, Docker e relatórios analíticos de alta performance.</span>
          </li>
        </ul>
      `,
      techs: ["Next.js 15", "TypeScript", "Laravel", "Vue.js", "Node.js", "Prisma", "MySQL", "WebSockets", "ESP32", "Docker", "Git"]
    },
    techautomacao: {
      role: "Engenheiro Fullstack / Arquiteto de Software",
      company: "Tech Serviços de Automação LTDA",
      period: "2024 – Atual (Manaus, AM)",
      description: `
        <p class="text-slate-300 leading-relaxed mb-4">
          Concepção, arquitetura e entrega da plataforma completa de e-commerce e catálogo de automação industrial (techautomacaobrasil.com.br):
        </p>
        <ul class="space-y-3 text-slate-300">
          <li class="flex items-start gap-2">
            <span class="text-cyan-400 font-bold mt-1">▹</span>
            <span><strong>Plataforma E-Commerce em Produção:</strong> Catálogo categorizado completo para componentes de automação industrial, sensores, elétrica, pneumática e residencial.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-cyan-400 font-bold mt-1">▹</span>
            <span><strong>Fluxo de Pedidos & Checkout:</strong> Gestão de carrinho, cadastro seguro de usuários e integração direta de comunicação com canais de venda e atendimento WhatsApp.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-cyan-400 font-bold mt-1">▹</span>
            <span><strong>Performance & SEO:</strong> Plataforma otimizada para alta velocidade, indexação nos motores de busca e operação com alta disponibilidade.</span>
          </li>
        </ul>
      `,
      techs: ["Full Stack", "E-commerce", "Catálogo Industrial", "MySQL", "APIs REST", "UI/UX", "SEO"]
    },
    semad: {
      role: "Desenvolvedor Fullstack",
      company: "SEMAD - Secretaria Municipal de Administração",
      period: "Jan 2018 – Ago 2021 (3 anos e 8 meses)",
      description: `
        <p class="text-slate-300 leading-relaxed mb-4">
          Desenvolvimento e sustentação de sistemas governamentais críticos para a administração pública municipal de Manaus:
        </p>
        <ul class="space-y-3 text-slate-300">
          <li class="flex items-start gap-2">
            <span class="text-cyan-400 font-bold mt-1">▹</span>
            <span><strong>Portal dos Estagiários da Prefeitura:</strong> Concepção e implantação do portal centralizador do programa municipal de estágios, conectando centenas de estudantes, secretarias e supervisores.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-cyan-400 font-bold mt-1">▹</span>
            <span><strong>Modernização de Legados:</strong> Migração e refatoração de sistemas legados em PHP/Thupan/Twig para ecossistemas modernos com React.js, Vue.js e Laravel.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-cyan-400 font-bold mt-1">▹</span>
            <span><strong>Sistemas Críticos:</strong> Manutenção evolutiva e corretiva em sistemas de patrimônio, estoque, portal da transparência e ponto eletrônico da prefeitura.</span>
          </li>
        </ul>
      `,
      techs: ["PHP", "Laravel", "React.js", "Vue.js", "Twig", "MySQL", "REST APIs", "Git"]
    }
  };

  // ==========================================================================
  // DADOS DE DETALHES DOS PROJETOS (MODAL)
  // ==========================================================================
  const PROJECTS_MODAL = {
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

  // ==========================================================================
  // DESCRIÇÕES DE TECNOLOGIAS (HOVER / TOQUE)
  // ==========================================================================
  const TECH_DESCRIPTIONS = {
    nextjs: "Next.js 15: Framework React para produção com suporte a App Router, Server Components, Server Actions, alta performance e renderização híbrida otimizada para SEO.",
    typescript: "TypeScript: Superset estaticamente tipado do JavaScript que garante manutenibilidade, robustez e arquitetura escalável para grandes bases de código.",
    react: "React.js: Biblioteca líder para interfaces web modernas, arquitetura baseada em componentes reutilizáveis, hooks e gerenciamento eficiente de estado.",
    vue: "Vue.js: Framework JavaScript progressivo e reativo, amplamente utilizado em aplicações industriais e dashboards corporativos com excelente performance.",
    tailwind: "Tailwind CSS: Framework utilitário moderno para estilização rápida, responsiva e consistente com design systems de alta fidelidade.",
    js: "JavaScript ES6+: Recursos modernos da linguagem (async/await, closures, proxies, canvas e web APIs) para lógica rica e de alta velocidade.",
    node: "Node.js: Runtime JavaScript assíncrono e orientado a eventos para backend escalável, microserviços e processamento concorrente de alta velocidade.",
    nestjs: "NestJS: Framework Node.js corporativo estruturado em TypeScript, seguindo princípios de arquitetura modular, injeção de dependências e Clean Architecture.",
    laravel: "Laravel: Framework PHP robusto e elegante, amplamente utilizado para criação de APIs seguras, automação de processos, ORM Eloquent e ecossistemas empresariais.",
    composer: "PHP & Composer: Gerenciamento de dependências e ecossistema corporativo PHP com alta estabilidade e padrões PSR.",
    esp32: "ESP32 & IoT: Microcontroladores com Wi-Fi e Bluetooth integrados para automação de chão de fábrica, sistemas Poka-Yoke e telemetria de hardware em tempo real.",
    websocket: "WebSockets: Comunicação bidirecional full-duplex de baixa latência entre servidores e dispositivos clientes/hardware para atualização instantânea de dados.",
    docker: "Docker: Conteinerização de aplicações para ambientes reproduzíveis, isolados e preparados para CI/CD e implantação contínua.",
    prisma: "Prisma ORM: Modelagem e mapeamento de banco de dados moderno com Type-Safety em TypeScript, migrações automáticas e queries altamente eficientes.",
    mysql: "MySQL & Relacionais: Modelagem relacional, otimização de consultas complexas, índices e garantia de integridade de dados para ambientes corporativos.",
    postgresql: "PostgreSQL: Banco de dados relacional avançado de código aberto, ideal para transações complexas, escalabilidade e alto volume de requisições.",
    github: "Git & GitHub: Controle de versão distribuído, fluxos Gitflow, code review, GitHub Actions e automação de pipelines de entrega contínua."
  };

  // ==========================================================================
  // FUNÇÃO DE MUDANÇA DE ABAS DE EXPERIÊNCIA (100% BLINDADA)
  // ==========================================================================
  window.switchExperience = function (companyKey) {
    const data = EXPERIENCES[companyKey];
    if (!data) return;

    // Atualiza botões das abas
    document.querySelectorAll(".company-tab-btn").forEach((btn) => {
      if (btn.getAttribute("data-company") === companyKey) {
        btn.classList.add("active-tab");
      } else {
        btn.classList.remove("active-tab");
      }
    });

    // Atualiza painel de conteúdo
    const titleEl = document.getElementById("exp-title");
    const compEl = document.getElementById("exp-company");
    const dateEl = document.getElementById("exp-date");
    const descEl = document.getElementById("exp-desc");
    const techEl = document.getElementById("exp-techs");

    if (titleEl) titleEl.innerText = data.role;
    if (compEl) compEl.innerText = data.company;
    if (dateEl) dateEl.innerText = data.period;
    if (descEl) descEl.innerHTML = data.description;

    if (techEl) {
      techEl.innerHTML = data.techs
        .map((t) => `<span class="px-3 py-1 text-xs font-medium rounded-full bg-slate-800/80 border border-slate-700/60 text-slate-300">${t}</span>`)
        .join("");
    }
  };

  // ==========================================================================
  // FILTRAGEM DE PROJETOS POR CATEGORIA
  // ==========================================================================
  window.filterProjects = function (filterKey, btnEl) {
    document.querySelectorAll(".filter-pill-btn").forEach((btn) => btn.classList.remove("active-pill"));
    if (btnEl) btnEl.classList.add("active-pill");

    document.querySelectorAll(".project-card-item").forEach((card) => {
      const cat = card.getAttribute("data-category") || "";
      if (filterKey === "all" || cat.includes(filterKey)) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  };

  // ==========================================================================
  // MODAL DE DETALHES DE PROJETOS
  // ==========================================================================
  window.openProjectModal = function (projectId) {
    const data = PROJECTS_MODAL[projectId];
    const modal = document.getElementById("project-modal");
    const content = document.getElementById("modal-project-content");
    if (!data || !modal || !content) return;

    content.innerHTML = `
      <div class="mb-6">
        <span class="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/40 border border-cyan-800/50 rounded-full mb-2">
          ${data.tag}
        </span>
        <h2 class="text-2xl md:text-3xl font-extrabold text-white mb-1">${data.title}</h2>
        <p class="text-slate-400 text-sm md:text-base">${data.subtitle}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div class="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
          <h4 class="text-cyan-400 font-bold text-sm uppercase tracking-wide mb-2 flex items-center gap-2">
            <i class="ri-error-warning-line text-base"></i>
            <span>01. O Desafio</span>
          </h4>
          <p class="text-slate-300 text-sm leading-relaxed">${data.problem}</p>
        </div>

        <div class="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
          <h4 class="text-cyan-400 font-bold text-sm uppercase tracking-wide mb-2 flex items-center gap-2">
            <i class="ri-tools-line text-base"></i>
            <span>02. Solução de Engenharia</span>
          </h4>
          <p class="text-slate-300 text-sm leading-relaxed">${data.solution}</p>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-slate-900/40 rounded-xl border border-slate-800 mb-6 text-center">
        ${data.metrics
          .map(
            (m) => `
          <div>
            <span class="block text-lg md:text-xl font-bold text-cyan-400">${m.value}</span>
            <span class="text-xs text-slate-400">${m.label}</span>
          </div>
        `
          )
          .join("")}
      </div>

      <div class="mb-6">
        <h5 class="text-xs uppercase tracking-wider text-slate-400 font-bold mb-2">Stack Tecnológica:</h5>
        <div class="flex flex-wrap gap-2">
          ${data.stack
            .map((t) => `<span class="px-2.5 py-1 text-xs font-medium rounded-full bg-slate-800 border border-slate-700 text-slate-200">${t}</span>`)
            .join("")}
        </div>
      </div>

      <div class="flex justify-end pt-4 border-t border-slate-800">
        <a href="${data.link}" target="_blank" rel="noopener" class="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-full shadow-lg shadow-blue-600/30 transition">
          <span>${data.linkLabel}</span>
          <i class="ri-external-link-line"></i>
        </a>
      </div>
    `;

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  window.closeProjectModal = function () {
    const modal = document.getElementById("project-modal");
    if (modal) modal.classList.remove("active");
    document.body.style.overflow = "";
  };

  // ==========================================================================
  // TOAST NOTIFICATIONS & CÓPIA DE E-MAIL
  // ==========================================================================
  window.copyEmail = function (text) {
    if (!navigator.clipboard) {
      alert("E-mail: " + text);
      return;
    }
    navigator.clipboard.writeText(text).then(() => {
      const toast = document.getElementById("copy-toast");
      if (toast) {
        toast.classList.remove("hidden");
        toast.classList.add("flex");
        setTimeout(() => {
          toast.classList.add("hidden");
          toast.classList.remove("flex");
        }, 3000);
      }
    });
  };

  // ==========================================================================
  // INICIALIZAÇÃO GERAL NO CARREGAMENTO DA PÁGINA
  // ==========================================================================
  document.addEventListener("DOMContentLoaded", function () {
    // 1. Menu Mobile Toggle
    const mobileBtn = document.getElementById("mobile-toggle-btn");
    const mobileMenu = document.getElementById("mobile-nav-drawer");
    if (mobileBtn && mobileMenu) {
      mobileBtn.addEventListener("click", function () {
        mobileMenu.classList.toggle("hidden");
      });
      mobileMenu.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
          mobileMenu.classList.add("hidden");
        });
      });
    }

    // 2. Barra de Progresso no Scroll
    const progressBar = document.getElementById("scroll-progress-bar");
    window.addEventListener(
      "scroll",
      function () {
        if (!progressBar) return;
        const total = document.documentElement.scrollHeight - window.innerHeight;
        const current = window.scrollY;
        progressBar.style.width = (current / total) * 100 + "%";
      },
      { passive: true }
    );

    // 3. Hover nas Tecnologias
    const techBox = document.getElementById("tech-detail-text");
    document.querySelectorAll(".skill-hover-card").forEach(function (card) {
      const key = card.getAttribute("data-tech");
      const desc = TECH_DESCRIPTIONS[key];
      if (!desc || !techBox) return;

      card.addEventListener("mouseenter", function () {
        techBox.innerHTML = desc;
      });
      card.addEventListener("mouseleave", function () {
        techBox.innerHTML = "*Passe o cursor ou toque em qualquer tecnologia para ver os detalhes de arquitetura*";
      });
      card.addEventListener("click", function () {
        techBox.innerHTML = desc;
      });
    });

    // 4. Modal de Projetos - Fechar no Escape e Overlay
    const modal = document.getElementById("project-modal");
    if (modal) {
      modal.addEventListener("click", function (e) {
        if (e.target === modal) window.closeProjectModal();
      });
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") window.closeProjectModal();
      });
    }

    // 5. Canvas Interativo IoT no Hero
    const canvas = document.getElementById("hero-canvas-el");
    if (canvas) {
      const ctx = canvas.getContext("2d");
      let w, h;
      let particles = [];
      const mouse = { x: null, y: null, radius: 120 };

      function resizeCanvas() {
        w = canvas.width = canvas.parentElement.offsetWidth;
        h = canvas.height = canvas.parentElement.offsetHeight;
        particles = [];
        const count = Math.min(Math.floor((w * h) / 12000), 60);
        for (let i = 0; i < count; i++) {
          particles.push({
            x: Math.random() * w,
            y: Math.random() * h,
            vx: (Math.random() - 0.5) * 0.6,
            vy: (Math.random() - 0.5) * 0.6,
            radius: Math.random() * 2 + 1,
            color: Math.random() > 0.4 ? "#3b82f6" : "#06b6d4"
          });
        }
      }

      function renderCanvas() {
        ctx.clearRect(0, 0, w, h);

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0 || p.x > w) p.vx *= -1;
          if (p.y < 0 || p.y > h) p.vy *= -1;

          if (mouse.x !== null) {
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < mouse.radius) {
              const force = (mouse.radius - dist) / mouse.radius;
              p.x -= (dx / dist) * force * 1.2;
              p.y -= (dy / dist) * force * 1.2;
            }
          }

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
        }

        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const p1 = particles[i];
            const p2 = particles[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 100) {
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = "rgba(59, 130, 246, " + (1 - dist / 100) * 0.4 + ")";
              ctx.lineWidth = 0.6;
              ctx.stroke();
            }
          }
        }

        requestAnimationFrame(renderCanvas);
      }

      window.addEventListener("resize", resizeCanvas);
      canvas.parentElement.addEventListener("mousemove", function (e) {
        const r = canvas.getBoundingClientRect();
        mouse.x = e.clientX - r.left;
        mouse.y = e.clientY - r.top;
      });
      canvas.parentElement.addEventListener("mouseleave", function () {
        mouse.x = null;
        mouse.y = null;
      });

      resizeCanvas();
      renderCanvas();
    }

    // 6. Terminal CLI Interativo
    const termInput = document.getElementById("cli-input");
    const termBody = document.getElementById("cli-output");
    const termForm = document.getElementById("cli-form");

    if (termInput && termBody && termForm) {
      const COMMANDS = {
        help: "Comandos: <span class='text-cyan-400 font-bold'>about</span>, <span class='text-cyan-400 font-bold'>skills</span>, <span class='text-cyan-400 font-bold'>projects</span>, <span class='text-cyan-400 font-bold'>contact</span>, <span class='text-cyan-400 font-bold'>clear</span>",
        about: "<strong>Ricardo Cunha Costa</strong>: Engenheiro da Computação (FUCAPI) + Gestão da Qualidade (Martha Falcão). +8 anos unindo Indústria 4.0, IoT e Fullstack.",
        skills: "Next.js 15, TypeScript, React, Vue, Node.js, NestJS, Laravel, ESP32, WebSockets, Prisma, Docker, MySQL, PostgreSQL.",
        projects: "1. Tech Automação (E-Commerce) | 2. PPCS Poka-Yoke ESP32 | 3. Andon | 4. Álbum Next.js 15 | 5. ASTRO | 6. SEMAD Portal",
        contact: "WhatsApp: (92) 98814-1813 | E-mail: ricardocunhacosta@gmail.com | LinkedIn: ricardo-cunha-costa | GitHub: ricardocostadeveloper",
        clear: "CLEAR"
      };

      termForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const val = termInput.value.trim().toLowerCase();
        if (!val) return;
        termInput.value = "";

        if (val === "clear") {
          termBody.innerHTML = "";
          return;
        }

        const out = COMMANDS[val] || "Comando não reconhecido. Digite <span class='text-cyan-400'>help</span>.";
        const line = document.createElement("div");
        line.className = "mb-2";
        line.innerHTML = "<span class='text-emerald-400 font-bold'>ricardo@mesh:~$</span> " + val + "<div class='text-slate-300 mt-0.5'>" + out + "</div>";
        termBody.appendChild(line);
        termBody.scrollTop = termBody.scrollHeight;
      });
    }

    // 7. Renderiza ícones Lucide com segurança total
    if (window.lucide && typeof window.lucide.createIcons === "function") {
      try {
        window.lucide.createIcons();
      } catch (err) {
        console.warn("Lucide fallback:", err);
      }
    }
  });
})();
