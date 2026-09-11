import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience, initExperienceTabs } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";
import { initProjectsFilter } from "./projectsFilter.js";
import { initCanvasNetwork } from "./canvasNetwork.js";
import { initTerminal } from "./terminal.js";
import { initProjectModal } from "./projectModal.js";
import { initCopyButtons } from "./toast.js";
import { initSpotlight } from "./spotlight.js";

// Inicialização do Menu Mobile
menu();

// Inicialização do Canvas Interativo de IoT no Hero
initCanvasNetwork();

// Inicialização do Terminal Interativo
initTerminal();

// Inicialização do Modal de Detalhes dos Projetos
initProjectModal();

// Inicialização dos Botões de Copiar (com Toast)
initCopyButtons();

// Inicialização do Efeito Spotlight nas Bordas dos Cards
initSpotlight();

// Inicialização do Filtro de Projetos
initProjectsFilter();

// Inicialização das Abas de Experiência
initExperienceTabs();

// Inicialização das Animações ScrollReveal
initScrollReveal();

// Inicialização dos Ícones Lucide (se biblioteca carregada)
if (window.lucide) {
  window.lucide.createIcons();
}

// Inicialização do VanillaTilt nos Cards 3D (se biblioteca carregada)
if (window.VanillaTilt) {
  window.VanillaTilt.init(document.querySelectorAll(".tilt-card"), {
    max: 8,
    speed: 400,
    glare: true,
    "max-glare": 0.15,
  });
}

// Barra de Progresso de Rolagem (Scroll Progress Bar)
window.addEventListener("scroll", () => {
  const progressBar = document.getElementById("scroll-progress");
  if (!progressBar) return;
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = (scrollTop / scrollHeight) * 100;
  progressBar.style.width = `${progress}%`;
}, { passive: true });

// Efeito suave de Typewriter no Hero
const typewriterEl = document.querySelector(".typewriter");
if (typewriterEl) {
  typeWrite(typewriterEl);
}

// Configuração das Experiências Profissionais
hoverChangeExperience(
  ".visteon",
  `<p>Atuação no ecossistema industrial da multinacional Visteon com foco em Indústria 4.0, automação de chão de fábrica e sistemas de missão crítica:</p>
  <ul>
    <li><strong>Sistema Poka-Yoke (PPCS):</strong> Arquitetura de solução com Laravel e Vue.js integrada em tempo real via WebSockets a microcontroladores ESP32 para validação à prova de falhas no processo de serigrafia SMT (fabricação de placas PCB automotivas).</li>
    <li><strong>Sistema Andon:</strong> Gestão visual e telemetria de linhas de montagem, controle de ordens de serviço de manutenção e métricas de OEE em tempo real.</li>
    <li><strong>ASTRO:</strong> Plataforma para controle analítico de falhas e histórico de ocorrências industriais (troubles).</li>
    <li><strong>Aplicações Modernas:</strong> Desenvolvimento de interfaces performáticas com Next.js 15 e TypeScript, Prisma ORM, Docker e relatórios analíticos de alta performance.</li>
  </ul>`,
  "Desenvolvedor Fullstack Sênior / Engenheiro de Software",
  "Visteon Amazonas",
  "Set 2021 – Atual (Manaus, AM)",
  ["Next.js 15", "TypeScript", "Laravel", "Vue.js", "Node.js", "Prisma", "MySQL", "WebSockets", "ESP32", "Docker", "Git"]
);

hoverChangeExperience(
  ".techautomacao",
  `<p>Concepção, arquitetura e entrega da plataforma completa de e-commerce e catálogo de automação industrial:</p>
  <ul>
    <li><strong>Plataforma E-Commerce em Produção:</strong> Catálogo categorizado completo para componentes de automação industrial, sensores, elétrica, pneumática e residencial.</li>
    <li><strong>Fluxo de Pedidos & Checkout:</strong> Gestão de carrinho, cadastro seguro de usuários e integração direta de comunicação com canais de venda e atendimento WhatsApp.</li>
    <li><strong>Performance & SEO:</strong> Plataforma otimizada para alta velocidade, indexação nos motores de busca e operação com alta disponibilidade.</li>
  </ul>`,
  "Engenheiro Fullstack / Arquiteto de Software",
  "Tech Serviços de Automação LTDA",
  "2024 – Atual (Manaus, AM)",
  ["Full Stack", "E-commerce", "Catálogo Industrial", "MySQL", "APIs REST", "UI/UX", "SEO"]
);

hoverChangeExperience(
  ".semad",
  `<p>Desenvolvimento e sustentação de sistemas governamentais críticos para a administração pública municipal de Manaus:</p>
  <ul>
    <li><strong>Portal dos Estagiários da Prefeitura:</strong> Concepção e implantação do portal centralizador do programa municipal de estágios, conectando centenas de estudantes, secretarias e supervisores.</li>
    <li><strong>Modernização de Legados:</strong> Migração e refatoração de sistemas legados em PHP/Thupan/Twig para ecossistemas modernos com React.js, Vue.js e Laravel.</li>
    <li><strong>Sistemas Críticos:</strong> Manutenção evolutiva e corretiva em sistemas de patrimônio, estoque, portal da transparência e ponto eletrônico da prefeitura.</li>
  </ul>`,
  "Desenvolvedor Fullstack",
  "SEMAD - Secretaria Municipal de Administração",
  "Jan 2018 – Ago 2021 (3 anos e 8 meses)",
  ["PHP", "Laravel", "React.js", "Vue.js", "Twig", "MySQL", "REST APIs", "Git"]
);

// Conhecimentos e Tecnologias
hoverChangeDescription(
  ".nextjs",
  "Next.js 15: Framework React para produção com suporte a App Router, Server Components, Server Actions, alta performance e renderização híbrida otimizada para SEO."
);

hoverChangeDescription(
  ".typescript",
  "TypeScript: Superset estaticamente tipado do JavaScript que garante manutenibilidade, robustez e arquitetura escalável para grandes bases de código."
);

hoverChangeDescription(
  ".react",
  "React.js: Biblioteca líder para interfaces web modernas, arquitetura baseada em componentes reutilizáveis, hooks e gerenciamento eficiente de estado."
);

hoverChangeDescription(
  ".vue",
  "Vue.js: Framework JavaScript progressivo e reativo, amplamente utilizado em aplicações industriais e dashboards corporativos com excelente performance."
);

hoverChangeDescription(
  ".node",
  "Node.js: Runtime JavaScript assíncrono e orientado a eventos para backend escalável, microserviços e processamento concorrente de alta velocidade."
);

hoverChangeDescription(
  ".nestjs",
  "NestJS: Framework Node.js corporativo estruturado em TypeScript, seguindo princípios de arquitetura modular, injeção de dependências e Clean Architecture."
);

hoverChangeDescription(
  ".laravel",
  "Laravel: Framework PHP robusto e elegante, amplamente utilizado para criação de APIs seguras, automação de processos, ORM Eloquent e ecossistemas empresariais."
);

hoverChangeDescription(
  ".esp32",
  "ESP32 & IoT: Microcontroladores com Wi-Fi e Bluetooth integrados para automação de chão de fábrica, sistemas Poka-Yoke e telemetria de hardware em tempo real."
);

hoverChangeDescription(
  ".websocket",
  "WebSockets: Comunicação bidirecional full-duplex de baixa latência entre servidores e dispositivos clientes/hardware para atualização instantânea de dados."
);

hoverChangeDescription(
  ".prisma",
  "Prisma ORM: Modelagem e mapeamento de banco de dados moderno com Type-Safety em TypeScript, migrações automáticas e queries altamente eficientes."
);

hoverChangeDescription(
  ".docker",
  "Docker: Conteinerização de aplicações para ambientes reproduzíveis, isolados e preparados para CI/CD e implantação contínua."
);

hoverChangeDescription(
  ".mysql",
  "MySQL & Relacionais: Modelagem relacional, otimização de consultas complexas, índices e garantia de integridade de dados para ambientes corporativos."
);

hoverChangeDescription(
  ".postgresql",
  "PostgreSQL: Banco de dados relacional avançado de código aberto, ideal para transações complexas, escalabilidade e alto volume de requisições."
);

hoverChangeDescription(
  ".tailwind",
  "Tailwind CSS: Framework de estilização utilitária moderna para interfaces responsivas, rápidas e consistentes com design system refinado."
);
