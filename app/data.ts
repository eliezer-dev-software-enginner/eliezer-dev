import { Project } from './components/CardProjectComponent';
import buscador_de_dominio_cover from './assets/buscador_de_dominio_cover.jpg';
import coesion_logo from './assets/coesion-javax-logo.png';
import docker from './assets/docker.png';
import estoky from './assets/estoky.png';
import firebase from './assets/firebase_144.png';
import g1_cover from './assets/g1.jpg';
import jest from './assets/icons8-jest-96.png';
import postgresql from './assets/icons8-postgresql-96.png';
import react from './assets/react.png';
import tacles_cover from './assets/tacles_cover.jpg';
import tailwindcss from './assets/icons8-tailwindcss-144.png';
import typescript from './assets/typescript.png';
import venda_curso_ia from './assets/banner_site_curso_ia.png';

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
    cover: venda_curso_ia,
    coverAlt: 'Imagem de fundo da venda de curso IA',
    description:
      'Esta é uma landing page moderna e otimizada para conversão, desenvolvida para a venda de um curso de Inteligência Artificial. O site conta com estratégias avançadas de SEO, elementos de persuasão como gatilhos de escassez, provas sociais e depoimentos positivos, tudo cuidadosamente estruturado para maximizar o engajamento do visitante. Após a confirmação do pagamento, o usuário é redirecionado para uma página de sucesso, onde pode facilmente acessar o conteúdo completo do curso.',
    title: 'Página de Venda de curso de IA',
    btnText: 'Acessar o site',
    href: 'https://curso-ia-pagina-venda.vercel.app/',
    techs: [
      'React',
      'NextJS',
      'CSS',
      'MercadoPago',
      'SEO',
      'Javascript',
      'Typescript',
    ],
  },
  {
    cover: tacles_cover,
    coverAlt: 'Imagem de fundo da Tacles',
    description:
      'Este site permite a criação de posts personalizados para o Discord,com preview em tempo real e contém também funcionalidades premium como Repost ilimitado, cadastro de ilimitadas webhooks e posts ilimitados.',
    title: 'Tacles',
    btnText: 'Acessar o site',
    href: 'https://www.tacles.com.br/',
    techs: ['React', 'Typescript', 'CSS', 'Java', 'SpringBoot'],
  },

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
    src: tailwindcss,
    alt: 'TailwindCSS',
  },
];
