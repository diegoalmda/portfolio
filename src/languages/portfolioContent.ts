const pt = {
  selected: "pt",
  menu: {
    selectlanguage: 'Escolha o idioma',
    items: [{ title: "Sobre mim", link: "/about" }, { title: "Tecnologias", link: "/skills" }, { title: "Projetos", link: "/projects" }, { title: "Contato", link: "/contact" }],
  },
  home: {
    greetings: "Olá !",
    beforeName: "Eu sou",
    message: "Saiba mais...",
    description: "Um desenvolvedor Full Stack apaixonado por criar aplicativos interativos e fornecer uma melhor experiência ao usuário.",
    doc: "Currículo",
    file: "curriculo_diego_almeida.pdf",
  },
  about: {
    title: "Sobre mim",
    subtitle: "Um pouco",
    secondTitle: "Principais tecnologias",
    message: "Veja mais...",
    text: "Sou tecnólogo em Telemática e atuo como desenvolvedor Web desde 2020. Tenho desenvolvido projetos utilizando principalmente a linguagem Javascript, tanto no front quanto no back-end. Atualmente tenho trabalhado com foco em ReactJS, React Native e Node.js. Estou cada vez mais empolgado com as tecnologias de desenvolvimento para web e dispositivos móveis. Me vejo como desenvolvedor full stack devido às tecnologias com as quais trabalho e procuro manter os estudos sempre em dia para acompanhar as novidades no que diz respeito ao desenvolvimento de software como um todo."
  },
  contact: {
    title: "Contato",
    subtitle: "Entre em"
  },
  projects: {
    title: "Projetos",
    subtitle: "Alguns",
    message1: "Você pode ver mais informações sobre mim no ",
    message2: " e o repositório de outros projetos no ",
    list: [
      {
        name: "Timer",
        live: "https://ignite-timer-sepia.vercel.app/",
        repo: "https://github.com/diegoalmda/ignite-timer",
        message: "",
        image: "projects/project1.png",
        technologies: ["HTML", "CSS", "Vite", "TypeScript", "ReactJS", "React Router Dom", "Context API", "useReducer", "Styled components", "Phosphor icons", "Immer JS", "ESLint", "Date-fns", "Zod"],
        text: "O projeto Timer foi idealizado para seguir a técnica de gerenciamento de tempo chamada Pomodoro. Esta técnica tem como objetivo o aumento da produtividade ao realizar uma determinada tarefa, utilizando um timer e fazendo pequenos intervalos entre cada finalização da contagem do tempo até concluir as tarefas programadas para serem finalizadas em cada timer."
      },
      {
        name: "IgNews",
        live: "https://ignews-challenge-diegoalmda.vercel.app/",
        repo: "https://github.com/diegoalmda/rjs-ignite-ignews",
        message: "",
        image: "projects/project1.png",
        technologies: ["HTML", "CSS", "ReactJS", "Next.js", "TypeScript", "SASS", "Next-Auth", "Stripe", "FaunaDB", "Prismic CMS", "Github Authentication"],
        text: "O projeto tem como objetivo o estudo e desenvolvimento de uma aplicação com ReactJS e NextJS para listagem de posts e sistema de assinatura em um blog de notícias. Onde os usuários pagam para ter acesso. O acesso às postagens é liberado quando há uma inscrição ativa no Stripe. Caso não exista assinatura ativa para o usuário logado a partir do Github, só será exibido apenas um resumo das notícias ao usuário. Os meios de pagamento da aplicação são integrados com a API do Stripe, e utilizado o FaunaDB para armazenar as informações. As postagens são exibidas a partir do CMS Prismic.io. A aplicação foi construída com modelo Serveless, sem necessidade de criar uma API externa para manipular os dados."
      },
      {
        name: "Agência de Viagens",
        live: "",
        repo: "",
        message: "Coming soon!",
        image: "projects/project1.png",
        technologies: ["HTML", "CSS", "ReactJS", "React Router Dom", "Context API", "Styled components", "Phosphor icons", "Date-fns", "Node.js", "Express Framework"],
        text: "É um projeto Full Stack para uma agência de viagens. São 2 front-ends React que se comunicam com uma API criada em Node.js, para cadastrar promoções, grupos de viagens, usuários do sistema, entre outros. Um front será a página principal da agência, onde os clientes irão acessar e verificar promoções e grupos disponíveis de viagem, a partir de informações trazidas via requisições REST à API. O outro front, se trata de um portal administrativo, onde será feito o controle de todo o conteúdo não-estático que irá aparecer no site."
      },
    ]
  },
  skills: {
    title: "Tecnologias",
    subtitle: "Meu trabalho",
    message1: "Logo abaixo estão mais algumas tecnologias que uso para construir meus projetos.",
    message2: "Veja a página de projetos.",
    text: "Crio sites responsivos com foco em usabilidade, experiência do usuário e boas práticas. A principal área de minha experiência é desenvolvimento front-end, HTML, CSS, JS, ReactJS e React Native, construindo aplicativos web de pequeno e médio porte, apps para dispositivos móveis, implantação de novos recursos e codificação de layouts interativos. Também tenho experiência de desenvolvedor full-stack com Node.js."
  }
}

const en = {
  selected: "en",
  menu: {
    selectlanguage: 'Choose language',
    items: [{ title: "About", link: "/about" }, { title: "My Skills", link: "/skills" }, { title: "Projects", link: "/projects" }, { title: "Contact", link: "/contact" }],
  },
  home: {
    greetings: "Hi There !",
    beforeName: "I'm",
    message: "See more...",
    description: "A Full Stack Developer passionate about creating interactive applications and providing a better user experience.",
    doc: "Resumé",
    file: "resume_diego_almeida.pdf"
  },
  about: {
    title: "About me",
    subtitle: "Some info",
    secondTitle: "Main technologies",
    message: "See more...",
    text: "I am a Telematics technologist and a freelance full-stack developer who started the professional career in early 2020. I intend to continue studying and dedicating myself to developing my career in this environment that has always been my true passion. I have been dedicated to studying the JavaScript language and some frameworks related to it, but I do not intend to limit myself to the language. I am willing to dedicate myself to other technologies as soon as possible. I want to keep evolving and learning something new every day."
  },
  contact: {
    title: "Contact",
    subtitle: "E-mail me"
  },
  projects: {
    title: "Projects",
    subtitle: "Some of my",
    message1: "You can see more information about me on ",
    message2: " and some other project's code on ",
    list: [
      {
        name: "Timer",
        live: "https://ignite-timer-sepia.vercel.app/",
        repo: "https://github.com/diegoalmda/ignite-timer",
        message: "",
        image: "projects/project1.png",
        technologies: ["HTML", "CSS", "Next.js", "ReactJS", "Tailwind CSS", "GraphQL", "React Router Dom", "Context API", "useReducer", "Styled components", "Phosphor icons", "Immer JS", "ESLint", "Date-fns", "Zod"],
        text: "The Timer project was conceived to follow the time management technique called Pomodoro. This technique aims to increase productivity when performing a certain task, using a timer and making small intervals between each completion of the time count until completing the tasks scheduled to be completed in each timer."
      },
      {
        name: "IgNews",
        live: "https://ignews-challenge-diegoalmda.vercel.app/",
        repo: "https://github.com/diegoalmda/rjs-ignite-ignews",
        message: "",
        image: "projects/project1.png",
        technologies: ["HTML", "CSS", "ReactJS", "Next.js", "TypeScript", "SASS", "Next-Auth", "Stripe", "FaunaDB", "Prismic CMS", "Github Authentication"],
        text: "The project aims to study and develop an application with ReactJS and NextJS to list posts and subscribe to a news blog. Where users pay for access. The access to posts is granted when there is an active Stripe subscription. If there is no active subscription for the user logged into Github, only a news summary will be shown to the user. The app's payment methods are integrated with the Stripe API, and FaunaDB is used to store the information. Posts are displayed on CMS Prismic.io. The application was built using a Serveless model, without the need to create an external API to manipulate the data."
      },
      {
        name: "Travel agency",
        live: "",
        repo: "",
        message: "Coming soon!",
        image: "projects/project1.png",
        technologies: ["HTML", "CSS", "ReactJS", "React Router Dom", "Context API", "Styled components", "Phosphor icons", "Date-fns", "Node.js", "Express Framework"],
        text: "It's a Full Stack project for a travel agency. There are 2 React front-ends that communicate with an API created in Node.js, to register promotions, travel groups, system users, among other functionalities. One front will be the agency's main page, where customers will be able to access and check available promotions and travel groups, based on information brought by REST requests to the API. The other front is an administrative portal, where all non-static content will be controlled."
      },
    ]
  },
  skills: {
    title: "My Skills",
    subtitle: "Check out my",
    message1: "Right below are some more technologies I use to build my projects.",
    message2: "See my projects's section.",
    text: "I create successful responsive websites with focus on usability, user experience and best practices. The main area of my expertise is front-end development, HTML, CSS, JS, ReactJS and React Native, building small and medium web apps, mobile apps, features, animations, and coding interactive layouts. I also have full-stack developer experience with Node.js."
  },
}

export const portfolioContent = { pt, en }
