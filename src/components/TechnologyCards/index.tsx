import { TechnologyCardContainer } from "./styles";

import { mySkills } from "./content";

export function TechnologyCards() {
  return (
    <TechnologyCardContainer>
      {
        mySkills.map(skill => {
          return (
            <div className="content-card" key={skill.title}>
              <img src={`${import.meta.env.VITE_PUBLIC_URL}/${skill.image}`} alt={skill.alt} title={skill.title} />
            </div>
          )
        })
      }      
    </TechnologyCardContainer>
  )
}