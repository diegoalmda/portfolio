const pt = {
  selected: "pt",
  menu: {
    selectlanguage: 'Escolha o idioma',
    items: [{ title: "Sobre mim", link: "/about" }, { title: "Tecnologias", link: "/skills" }, { title: "Projetos", link: "/projects" }, { title: "Contato", link: "/contact" }],
  },
  home: {
    greetings: "Olá !",
    beforeName: "Eu sou",
    description: "Um desenvolvedor Full Stack apaixonado por criar aplicativos interativos e fornecer uma melhor experiência ao usuário.",
    doc: "Currículo",
    file: "curriculo_diego_almeida.pdf",
  },
  about: {
    title: "Sobre mim",
    subtitle: "Um pouco",
    secondTitle: "Principais tecnologias",
    text: "Sou tecnólogo em Telemática e atuo como desenvolvedor Web desde 2020. Tenho desenvolvido projetos utilizando principalemte a linguagem Javascript tanto front quanto no back-end. Atualmente tenho trabalhado com foco em ReactJS, React Native e Node.js. Estou cada vez mais empolgado com as tecnologias de desenvolvimento para web e dispositivos móveis. Me vejo como desenvolvedor full stack devido às tecnologias com as quais trabalho e procuro manter os estudos sempre em dia para acompanhar as novidades no que diz respeito ao desenvolvimento de software como um todo."
  },
  contact: {
    title: "Contato",
    subtitle: "Entre em"
  },
  projects: {
    title: "Projetos",
    subtitle: "Alguns"
  },
  skills: {
    title: "Tecnologias",
    subtitle: "Meu trabalho"
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
    description: "A Full Stack Developer passionate about creating interactive applications and providing a better user experience.",
    doc: "Resumé",
    file: "resume_diego_almeida.pdf"
  },
  about: {
    title: "About me",
    subtitle: "Some info",
    secondTitle: "Main technologies",
    text: "I am a Telematics technologist and a freelance full-stack developer who started the professional career in early 2020. I intend to continue studying and dedicating myself to developing my career in this environment that has always been my true passion. I have been dedicated to studying the JavaScript language and some frameworks related to it, but I do not intend to limit myself to the language. I am willing to dedicate myself to other technologies as soon as possible. I want to keep evolving and learning something new every day."
  },
  contact: {
    title: "Contact",
    subtitle: "E-mail me"
  },
  projects: {
    title: "Projects",
    subtitle: "Some of my"
  },
  skills: {
    title: "My Skills",
    subtitle: "Check out my"
  },
}

export const portfolioContent = { pt, en }
