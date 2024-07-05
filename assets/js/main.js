import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeExperience(
  ".visteon",
  `Responsável pelo desenvolvimento de projetos de melhoria de processos,
  dashboards e aprimoramento do controle de informações e relatórios, utilizei o framework
  Laravel, APIs e o banco de dados MySQL para criar controles visuais e simultâneos de
  processos. Além disso, integrei microcontroladores torneio de websockets para
  implementar um sistema Poka-Yoke, visando evitar erros no processo de fabricação de
  placas PCB.`,
  "Desenvolvedor de software",
  "Visteon",
  "Set 2020 – atual"
);

hoverChangeExperience(
  ".semad",
  `Implementeimelhorias emsistemas legados, otimizeirelatórios de estoques e itens
  depreciados. Integrei uma equipe para desenvolver umsistema de ponto e folha de
  pagamento, desenvolvi emigrei sistemas legados emnovas plataformas e
  framework’s(React,VueJS e Laravel).`,
  "Desenvolvedor de software",
  "SEMAD - Secretaria Municipal de Administração",
  "Ago 2018 – Jul 2020 (2 anos)"
);


hoverChangeDescription(
  ".composer",
  "O Composer é um gerenciador de dependências em nível de aplicativo para a linguagem de programação PHP que fornece um formato padrão para gerenciar dependências de software PHP e bibliotecas necessárias."
);
hoverChangeDescription(
  ".css",
  "CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas."
);
hoverChangeDescription(
  ".js",
  "JavaScript é uma linguagem de programação que permite a você implementar elementos dinâmicos em páginas web."
);
hoverChangeDescription(
  ".sass",
  "Sass é um pré-processador CSS que adiciona alguns recursos que não estão disponíveis de forma nativa."
);
hoverChangeDescription(
  ".laravel",
  "Laravel é um framework PHP gratuito utilizado no desenvolvimento de sistemas web. Ele deixa o código mais simples e legível, com suporte a recursos avançados."
);
hoverChangeDescription(
  ".vue",
  "Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única."
);
hoverChangeDescription(
  ".node",
  "Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web. A principal característica do Node.js é sua arquitetura assíncrona e orientada por eventos."
);
hoverChangeDescription(
  ".tailwind",
  "Tailwind CSS é um framework CSS que nos fornece classes utilitárias com o propósito de estilizar as páginas."
);
hoverChangeDescription(
  ".typescript",
  "TypeScript é um superset do JavaScript que incluir recursos que não estão presentes na linguagem de forma nativa, além de torná-la estática."
);
hoverChangeDescription(
  ".nest",
  "NestJS é um framework Node.js de código aberto destinado ao desenvolvimento de aplicativos do lado do servidor."
);
hoverChangeDescription(
  ".websocket",
  "WebSocket é uma tecnologia que permite a comunicação bidirecional por canais full-duplex sobre um único soquete Transmission Control Protocol."
);
hoverChangeDescription(
  ".react",
  "React é uma biblioteca JavaScript com foco em criar interfaces de usuário de forma componetizada."
);
