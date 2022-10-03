import { PageTitle } from '../../components/PageTitle';
import { ProgressBar } from '../../components/ProgressBar';
import { useGlobalLanguage } from '../../contexts/GlobalLanguageContext';
import { AboutContainer } from './styles';

export function About() {
  const { selectedLanguage } = useGlobalLanguage();

  return (
    <AboutContainer>
      <PageTitle mainTitle={selectedLanguage.about.title} subTitle={selectedLanguage.about.subtitle} />
      <p>{selectedLanguage.about.text}</p>

      <section>
        <h1>{selectedLanguage.about.secondTitle}</h1>
        <div>
          <h3>HTML + CSS</h3>
          <ProgressBar maxValue={90} barColor="#006064" />
        </div>
        <div>
          <h3>ReactJS</h3>
          <ProgressBar maxValue={80} barColor="#85bb5c" />
        </div>
        <div>
          <h3>React Native</h3>
          <ProgressBar maxValue={60} barColor="#39796b" />
        </div>
        <div>
          <h3>Node.js</h3>
          <ProgressBar maxValue={55} barColor="#1b5e20" />
        </div>
      </section>
    </AboutContainer>
  )
}