import { TitleContainer } from "./styles";

interface TitleProps {
  mainTitle: string
  subTitle: string
}

export function PageTitle({ mainTitle, subTitle }: TitleProps) {
  return (
    <TitleContainer>
      <hr /><span>{ subTitle }</span>
      <h1>{ mainTitle }</h1>
    </TitleContainer>
  )
}