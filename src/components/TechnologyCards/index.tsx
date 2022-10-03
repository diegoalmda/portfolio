import { ReactNode } from "react";
import { TechnologyCardContainer } from "./styles";

import nodeImg from '../../assets/skills/node.svg'
import apiImg from '../../assets/skills/api.svg'
import cssImg from '../../assets/skills/css.svg'
import firebaseImg from '../../assets/skills/firebase.svg'
import gitImg from '../../assets/skills/git.svg'
import graphqlImg from '../../assets/skills/graphql.svg'
import htmlImg from '../../assets/skills/html.svg'
import mongodbImg from '../../assets/skills/mongodb.svg'
import nextjsImg from '../../assets/skills/nextjs.svg'
import postgresqlImg from '../../assets/skills/postgresql.svg'
import reactImg from '../../assets/skills/react.svg'
import sassImg from '../../assets/skills/sass.svg'
import typescriptImg from '../../assets/skills/typescript.svg'
import tailwindcssImg from '../../assets/skills/tailwindcss.svg'

export function TechnologyCards() {
  return (
    <TechnologyCardContainer>
      <div className="content-card">
        <img src={htmlImg} alt="HTML logo" title="HTML" />
      </div>
      <div className="content-card">
        <img src={cssImg} alt="CSS logo" title="CSS" />
      </div>
      <div className="content-card">
        <img src={reactImg} alt="ReactJS logo" title="ReactJS" style={{ filter: 'contrast(70%)' }} />
      </div>
      <div className="content-card">
        <img src={typescriptImg} alt="Typescript logo" title="Typescript" />
      </div>
      <div className="content-card">
        <img src={sassImg} alt="SASS logo" title="SASS" />
      </div>
      <div className="content-card">
        <img src={nextjsImg} alt="Next.js logo" title="Next.js" />
      </div>
      <div className="content-card">
        <img src={gitImg} alt="Git logo" title="Git" />
      </div>
      <div className="content-card">
        <img src={apiImg} alt="API logo" title="REST API" />
      </div>
      <div className="content-card">
        <img src={graphqlImg} alt="GraphQL logo" title="GraphQL" />
      </div>
      <div className="content-card">
        <img src={tailwindcssImg} alt="Tailwind CSS logo" title="Tailwind CSS" />
      </div>
      <div className="content-card">
        <img src={nodeImg} alt="Nodejs logo" title="Node.js" />
      </div>
      <div className="content-card">
        <img src={firebaseImg} alt="Firebase logo" title="Firebase" />
      </div>
      <div className="content-card">
        <img src={mongodbImg} alt="MongoDB logo" title="MongoDB" />
      </div>
      <div className="content-card">
        <img src={postgresqlImg} alt="PostgreSQL logo" title="PostgreSQL" />
      </div>
    </TechnologyCardContainer>
  )
}