import { HomeContainer } from "./styles"

import resume from './PDFFile/resume.pdf'
import myImage from '../../assets/avatar.jpg'

export function Home() {

  function handleResumeView() {
    // using Java Script method to get PDF file
    fetch('./PDFFile/resume.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'resume.pdf';
            alink.click();
        })
    })  
  }

  return (
    <HomeContainer>
      <div className="content">
        <div className="image-container">
          <img src={myImage} alt="" />
        </div>
        <h2>Hi there !</h2>
        <h1>I'm <span>Diego de Almeida Cunha</span></h1>
        <p>A Full Stack Developer passionate about creating interactive applications and providing a better user experience.</p>
      </div>
      <div>
        <a href="resume.pdf" title="Diego Almeida's resumé" target="_blank" rel="noopener noreferrer">
          <button>Resumé</button>
        </a>
      </div>
    </HomeContainer>
  )
}