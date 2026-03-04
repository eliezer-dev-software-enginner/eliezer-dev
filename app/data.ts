import appFindProcess from './assets/app-find-process.png';
import buscador_de_dominio_cover from './assets/buscador_de_dominio_cover.jpg';
import coesion_logo from './assets/coesion-javax-logo.png';
import docker from './assets/docker.png';
import estoky from './assets/estoky.png';
import firebase from './assets/firebase_144.png';
import g1_cover from './assets/g1.jpg';
import gerar_v2_cover from './assets/gerar-v2.png';
import jest from './assets/icons8-jest-96.png';
import postgresql from './assets/icons8-postgresql-96.png';
import java from './assets/java.png';
import javafx from './assets/java.webp';
import node from './assets/nodejs.png';
import plicssw from './assets/plics-home.png';
import plicsswsite from './assets/plics-sw-landing-page.png';
import reactnative from './assets/react-native.png';
import react from './assets/react.png';
import realtec from './assets/realtec.png';
import springboot from './assets/springboot.png';
import typescript from './assets/typescript.png';
import { Project } from './components/CardProjectComponent';

//import kubernetes from "assets/kubernetes.png";

export const projects: Project[] = [
  {
    cover: estoky,
    coverAlt:
      'Imagem de fundo do coesion javafx - Toolset com diversas ferramentas integradas para agilizar o desenvolvimento de aplicativos desktop',
    description:
      'O Estoky é um gerenciador de estoque totalmente funcional, desenvolvido com Next.js e React, que permite adicionar, editar, remover e visualizar produtos de forma rápida e intuitiva. Cada produto é apresentado em cards visuais, facilitando o controle de estoque.Inclui funcionalidades como exportação para CSV, busca e filtragem de produtos. Sistema totalmente responsivo, adaptando-se a desktops e dispositivos móveis. Não requer cadastro nem backend, permitindo que qualquer usuário utilize o sistema imediatamente. Foco em usabilidade e experiência real, ideal para pequenas lojas e lojistas que querem organizar o estoque de forma prática.',
    title: 'Estoky',
    coverImageIsSquare: true,
    btnText: 'Acessar o site',
    href: 'https://estoky-one.vercel.app',
    techs: ['React', 'NextJS', 'SEO', 'CSS', 'Javascript', 'Typescript'],
  },

  {
    cover: plicsswsite,
    coverAlt: 'Imagem de fundo do website Plics SW',
    description:
      'Landing page para compra do aplicativo de ERP (Plics SW), ela é uma landing page minimalista e profissional listando os benefícios e as vantagens do sistema, ela foi construída com NextJS e o gateway de pagamento que utilizei foi o Mercado Pago, pois já sou acostumado com ele e a propósito como a proposta da landing page é ser minimalista então só é possível pagamento com PIX. Após pagamento bem sucedido, o usuário recebe sua chave de ativação e links de download dos aplicativos tanto para Linux quanto para Windows. ',
    title: 'Plics SW - Site oficial',
    btnText: 'Acessar o site',
    href: 'https://plics-sw-webpage.vercel.app/',
    techs: ['React', 'Typescript', 'CSS', 'Mercado Pago', 'Next.js'],
  },

  {
    cover: gerar_v2_cover,
    coverAlt: 'Imagem de fundo de requisição feita para o backend',
    description:
      'Aplicação backend criada para automatizar a criação de currículos especificos pra cada vaga localmente. Quanto ao backend, eu faço uso de NodeJs + Typescript + Docker para conteinizaração e replicabilidade. E pra geração de curriculos acontecer de fato, tenho integrações com Gemini e Grok',
    title: 'Plics SW - Site oficial',
    btnText: 'Assistir funcionamento',
    href: 'https://www.linkedin.com/posts/eliezersoftwareenginner_vagas-ia-desenvolvedor-activity-7435000476271763456-ba-1?utm_source=share&utm_medium=member_desktop&rcm=ACoAADk2kUsBzm-Car7e9AYeGn6Fydi7QyEHOBI',
    techs: ['Node.js', 'Typescript', 'Docker', 'IA', 'Gemini', 'Grok'],
  },

  {
    cover: plicssw,
    coverAlt:
      'Imagem de fundo do coesion javafx - Toolset com diversas ferramentas integradas para agilizar o desenvolvimento de aplicativos desktop',
    description:
      'Plics SW é um aplicativo ERP, desktop e offline para pequenos estabelecimentos. Ele está disponível para Windows e para Linux. Ele possui opções de gerenciamento de estoque, financeiro, clientes e ordem de serviço. Para o desenvlvimento fiz uso do meu framework Megalodonte que é um wrapper sobre o JavaFX (framework java para criação de aplicativos desktop multiplataforma). O aplicativo usa SQlite para persistência.',
    title: 'Plics SW - Aplicativo Desktop',
    coverImageIsSquare: false,
    btnText: 'Baixar aplicativo (Windows E Linux)',
    href: 'https://github.com/eliezer-dev-software-enginner/plics-sw/releases/tag/v1.0.0',
    techs: ['JavaFX', 'Java', 'Windows', 'Desktop', 'ERP', 'Linux', 'SQLite'],
  },

  {
    cover: appFindProcess,
    coverAlt:
      'Imagem de fundo do coesion javafx - Toolset com diversas ferramentas integradas para agilizar o desenvolvimento de aplicativos desktop',
    description:
      'O find-process é um aplicativo que desenvolvi pra resolver um problema pra mim e então decidi liberar ele pra uso geral. O problema em questão se refere a identificar processos que estão rodando em uma determinada porta, e então encerrar esses processos. Eu sempre tinha que digitar comandos no terminal para listar processos e para encerrá-los, agora com o aplicativo isso se tornou bem trivial de tão fácil. Fiz uso da meu framework Megalodonte para criação rápida do app.',
    title: 'Find-Process',
    coverImageIsSquare: false,
    btnText: 'Baixar aplicativo (Windows)',
    href: 'https://github.com/eliezer-dev-software-enginner/find-process/releases/download/release/find-process-1.0.0.msi',
    techs: ['JavaFX', 'Java', 'Windows', 'Desktop', 'Ferramenta'],
  },

  {
    cover: realtec,
    coverAlt:
      'Imagem de fundo do coesion javafx - Toolset com diversas ferramentas integradas para agilizar o desenvolvimento de aplicativos desktop',
    description:
      'Realtec Processador é um aplicativo que desenvolvi para o teste seletivo da empresa Realtec. O candidato deveria criar uma solução em sua linguagem/tecnologia de sua preferência que permitissse ao usuário entrar com um CSV contendo os seguintes dados: data;conta;tipo;valor;descrição.Deveria calcular o saldo final por conta. Calcular totais de créditos, débitos e quantidade de lançamentos. Processar os registros na ordem do arquivo e registrar inconsistências quando o saldo ficar negativo em qualquer momento do processamento.',
    title: 'Realtec Processador',
    coverImageIsSquare: false,
    btnText: 'Assistir minha apresentação',
    href: 'https://youtu.be/rhrxS9Da0To',
    techs: ['JavaFX', 'Java', 'Windows', 'Desktop', 'CSV'],
  },

  // {
  //   cover: venda_curso_ia,
  //   coverAlt: 'Imagem de fundo da venda de curso IA',
  //   description:
  //     'Esta é uma landing page moderna e otimizada para conversão, desenvolvida para a venda de um curso de Inteligência Artificial. O site conta com estratégias avançadas de SEO, elementos de persuasão como gatilhos de escassez, provas sociais e depoimentos positivos, tudo cuidadosamente estruturado para maximizar o engajamento do visitante. Após a confirmação do pagamento, o usuário é redirecionado para uma página de sucesso, onde pode facilmente acessar o conteúdo completo do curso.',
  //   title: 'Página de Venda de curso de IA',
  //   btnText: 'Acessar o site',
  //   href: 'https://curso-ia-pagina-venda.vercel.app/',
  //   techs: [
  //     'React',
  //     'NextJS',
  //     'CSS',
  //     'MercadoPago',
  //     'SEO',
  //     'Javascript',
  //     'Typescript',
  //   ],
  // },
  // {
  //   cover: tacles_cover,
  //   coverAlt: 'Imagem de fundo da Tacles',
  //   description:
  //     'Este site permite a criação de posts personalizados para o Discord,com preview em tempo real e contém também funcionalidades premium como Repost ilimitado, cadastro de ilimitadas webhooks e posts ilimitados.',
  //   title: 'Tacles',
  //   btnText: 'Acessar o site',
  //   href: 'https://www.tacles.com.br/',
  //   techs: ['React', 'Typescript', 'CSS', 'Java', 'SpringBoot'],
  // },

  {
    cover: g1_cover,
    coverAlt:
      'Imagem de fundo do canal G1 - Noticias Oficiais do g1 no Telegram',
    description:
      'Este canal no Telegram fornece as noticias atualizadas do G1 a cada 3 horas, para realizar esse feito, tenho um script feito em python que busca as noticias diretamente do site e as encaminha para o canal totalmente automatizado.',
    title: 'G1 - Noticias Oficiais do g1',
    coverImageIsSquare: true,
    btnText: 'Acessar o canal',
    href: 'https://t.me/noticiasg1',
    techs: ['Python'],
  },
  {
    cover: buscador_de_dominio_cover,
    coverAlt:
      'Imagem de fundo do canal G1 - Noticias Oficiais do g1 no Telegram',
    description:
      'Bot construido com python usando a biblioteca python-telegram-bot. O bot fica rodando localmente sem a necessidade de rodar em um servidor externo. Sobre o funcionamento é bem simples, basta o usuario conversar com o bot fornecendo um dominio e o bot responde indicando se o dominio está disponível ou não.',
    title: 'Bot Buscador de dominio',
    coverImageIsSquare: true,
    btnText: 'Acessar o bot',
    href: 'https://web.telegram.org/k/#@buscador_de_dominio_bot',
    techs: ['Python'],
  },

  {
    cover: coesion_logo,
    coverAlt:
      'Imagem de fundo do coesion javafx - Toolset com diversas ferramentas integradas para agilizar o desenvolvimento de aplicativos desktop',
    description:
      'Toolset open-source que entrega tudo que é necessário para o desenvolvimento rápido de aplicativos desktop usando o Framework JavaFX. Esse toolset contém scripts automatizados para inclusive gerar o .exe e .msi da aplicação, prontos para produção.',
    title: 'Coesion JavaFX',
    coverImageIsSquare: true,
    btnText: 'Acessar a ferramenta',
    href: 'https://github.com/eliezerBrasilian/Coesion-JavaFX',
    techs: ['JavaFX', 'JAVA', 'CSS', 'Maven'],
  },
];

export const techs = [
  {
    src: react,
    alt: 'ReactJS',
  },

  {
    src: java,
    alt: 'Java',
  },

  {
    src: firebase,
    alt: 'Firebase',
  },
  // {
  //   src: kubernetes,
  //   alt: "springboot",
  // },

  {
    src: jest,
    alt: 'Jest',
  },

  {
    src: node,
    alt: 'NodeJs',
  },

  {
    src: typescript,
    alt: 'Typescript',
  },
  {
    src: docker,
    alt: 'Docker',
  },

  {
    src: postgresql,
    alt: 'PostgreSQL',
  },

  {
    src: javafx,
    alt: 'JavaFX',
  },
  {
    src: springboot,
    alt: 'Spring Boot',
  },
  {
    src: reactnative,
    alt: 'React Native',
  },
];
