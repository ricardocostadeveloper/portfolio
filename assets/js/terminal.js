// Terminal CLI Interativo para Desenvolvedores e Recrutadores
export function initTerminal() {
  const terminalBody = document.getElementById("terminal-output");
  const terminalInput = document.getElementById("terminal-input");
  const terminalForm = document.getElementById("terminal-form");

  if (!terminalBody || !terminalInput || !terminalForm) return;

  const COMMANDS = {
    help: `
Comandos disponíveis:
  <span class="term-cyan">about</span>       - Resumo da trajetória e formação de Ricardo
  <span class="term-cyan">skills</span>      - Stack técnica completa (Frontend, Backend, IoT)
  <span class="term-cyan">projects</span>    - Lista dos principais sistemas em produção
  <span class="term-cyan">contact</span>     - Canais de contato (WhatsApp, LinkedIn, E-mail)
  <span class="term-cyan">metrics</span>     - Indicadores de carreira e KPIs
  <span class="term-cyan">clear</span>       - Limpa a tela do terminal
`,
    about: `
<strong>Ricardo Cunha Costa</strong>
• <strong>Formação:</strong> Engenharia da Computação (FUCAPI) + Gestão da Qualidade (Martha Falcão)
• <strong>Experiência:</strong> +8 anos em desenvolvimento web, Indústria 4.0 e sistemas críticos.
• <strong>Atuação atual:</strong> Desenvolvedor Fullstack Sênior na Visteon Amazonas (IoT, WebSockets, ESP32, Next.js 15).
`,
    skills: `
• <strong>Frontend:</strong> Next.js 15, TypeScript, React.js, Vue.js, Tailwind CSS, Framer Motion
• <strong>Backend:</strong> Node.js, NestJS, Laravel, PHP, REST APIs, WebSockets, JWT
• <strong>Hardware & IoT:</strong> ESP32, Sistemas Poka-Yoke, Telemetria Industrial
• <strong>Dados & DevOps:</strong> Prisma ORM, Docker, MySQL, PostgreSQL, Git / CI-CD
`,
    projects: `
1. <a href="https://techautomacaobrasil.com.br" target="_blank" class="term-link">Tech Automação Brasil</a> - E-Commerce & Catálogo de Automação Industrial
2. <span class="term-green">Print Process Control (PPCS)</span> - Sistema Poka-Yoke IoT SMT com ESP32 na Visteon
3. <span class="term-green">Sistema Andon</span> - Monitoramento em tempo real de linhas de montagem fabris
4. <span class="term-green">Álbum Digital Interativo</span> - Next.js 15, TypeScript, Prisma, @dnd-kit, JWT HttpOnly
5. <span class="term-green">ASTRO Trouble Tracking</span> - Auditoria e histórico de ocorrências industriais
6. <span class="term-green">Portal dos Estagiários</span> - Centralização governamental municipal na SEMAD
`,
    contact: `
• <strong>WhatsApp:</strong> <a href="https://wa.me/5592988141813" target="_blank" class="term-link">+55 (92) 98814-1813</a>
• <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/ricardo-cunha-costa/" target="_blank" class="term-link">linkedin.com/in/ricardo-cunha-costa</a>
• <strong>GitHub:</strong> <a href="https://github.com/ricardocostadeveloper" target="_blank" class="term-link">github.com/ricardocostadeveloper</a>
• <strong>E-mail:</strong> <a href="mailto:ricardocunhacosta@gmail.com" class="term-link">ricardocunhacosta@gmail.com</a>
`,
    metrics: `
• <strong>Tempo de Mercado:</strong> +8 Anos (2018 - 2026)
• <strong>Sistemas Entregues:</strong> +15 Soluções em produção
• <strong>Latência IoT:</strong> Tempo real via WebSockets em chão de fábrica
• <strong>Uptime Fabril:</strong> Tolerância zero a falhas (Poka-Yoke)
`,
    sudo: `<span class="term-red">Acesso negado: Você não possui privilégios de root no cluster industrial.</span>`,
    clear: "CLEAR"
  };

  function appendLine(html, isCommand = false) {
    const line = document.createElement("div");
    line.className = isCommand ? "terminal-line command-echo" : "terminal-line";
    line.innerHTML = html;
    terminalBody.appendChild(line);
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }

  terminalForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const rawInput = terminalInput.value.trim();
    if (!rawInput) return;

    appendLine(`<span class="term-prompt">ricardo@visteon-mesh:~$</span> ${rawInput}`, true);

    const cmd = rawInput.toLowerCase();
    terminalInput.value = "";

    if (cmd === "clear") {
      terminalBody.innerHTML = "";
      return;
    }

    if (COMMANDS[cmd]) {
      appendLine(COMMANDS[cmd]);
    } else {
      appendLine(`<span class="term-red">Comando não reconhecido: "${rawInput}". Digite <span class="term-cyan">help</span> para lista de comandos.</span>`);
    }
  });

  // Foca no input quando clicar dentro do terminal
  const terminalCard = document.getElementById("hero-terminal");
  if (terminalCard) {
    terminalCard.addEventListener("click", () => {
      terminalInput.focus();
    });
  }
}
