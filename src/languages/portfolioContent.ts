const pt = {
  selected: "pt",
  menu: {
    selectlanguage: 'Escolha o idioma',
    items: [{ title: "Sobre mim", link: "/about" }, { title: "Conhecimentos", link: "/skills" }, { title: "Projetos", link: "/projects" }, { title: "Contato", link: "/contact" }],
  },
  home: {
    greetings: "Olá !",
    beforeName: "Eu sou",
    description: "Um desenvolvedor Full Stack apaixonado por criar aplicativos interativos e fornecer uma melhor experiência ao usuário.",
    doc: "Currículo",
    file: "curriculo_diego_almeida.pdf",
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
  }
}

export const portfolioContent = { pt, en }
