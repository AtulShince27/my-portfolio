import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import CoderImage from "./images/working-img3.png"
import NavBar from './components/navbar';
function App() {
  return (
    <div className="portfolio-app bg-black w-full h-auto">
      <div className='home-page' id='homePage'>
            <div id="navBar" className='pt-4 pb-4'>
              <NavBar></NavBar>
            </div>
            <div id='homeContent'>
              <h1 className='text-white text-6xl text-center relative mt-12'>
                Hello I'm Atul.
              </h1>
              <h1 className='text-5xl text-center' id='gradientText'>
                <span className='text-gradient text-transparent'>An aspiring professional developer.</span>
              </h1>
              <div id="codingGIF"></div>

            </div>
      </div>
      <div className="skills-page" id='skillsPage'>
        <h1 className='mobileScreens text-white'>My Skills.</h1>
        <div id='skillsContainer' className='ml-auto mr-auto mt-28 '>
          <div className='bg-white' id='dockerImg'></div>
          <div className='bg-white' id='githubImg'></div>
          <div className='bg-white' id='expressImg'></div>
          <div className='bg-white' id='cppImg'></div>
          <div className='bg-white' id='jsImg'></div>
          <div className='bg-white laptopScreens' id='skillsCenter'>
            <h1>Skills</h1>
          </div>
          <div className='bg-white' id='reactJSImg'></div>
          <div className='bg-white' id='pythonImg'></div>
          <div className='bg-white' id='firebaseImg'></div>
          <div className='bg-white' id='postgresImg'></div>
          <div className='bg-white' id='mongoDBImg'></div>
        </div>
        <div className="textContainer mt-5">
          <p className='text-3xl text-white font-light'>
          Other notable Skills that I’ve learnt and implemented are <span className='text-transparent font-medium' id='postman'>Postman API</span> for testing out 
          HTTP requests etc. I’ve worked on <span className='text-transparent font-medium' id='jwt'>JWT’s</span> and authentication. I’ve extensively worked on 
          <span className='text-transparent font-medium' id='bootstrap'> BootstrapCSS</span>, 
          <span className='text-transparent font-medium' id='tailwind'>TailwindCSS</span>, 
          <span className='text-transparent font-medium' id='framer'> Framer Motion</span> and 
          <span className='text-transparent font-medium' id='materialUI'> MaterialUI</span> to create beautiful frontends. 
          I’m also familiar with state management libraries such as 
          <span className='text-transparent font-medium' id='recoil'> Recoil</span> and 
          <span className='text-transparent font-medium' id='redux'> Redux</span>.
          </p>
        </div>
      </div>
      <div className="about-page" id='aboutMePage'>
        <div className='page-grid'>
          <div className='imageContainer'>
          </div>
          <div className='textContainer'>
            <h3>Here’s a few fun facts <span className="text-transparent" id='aboutMeGradient'>About Me!</span></h3>
            <div className="about-grid">
              <div className="grid-row-el">
                <div className='grid-col-el'>
                  <h3><span className="text-transparent" id='aboutMeGradient'>2 Years</span></h3>
                  <p>of experience in developing catchy front-end webpages</p>
                </div>
                <div className='grid-col-el'>
                  <h3><span className="text-transparent" id='aboutMeGradient'>20+ Projects</span></h3>
                  <p>that showcase my ability to recreate webpages from UI designs </p>
                </div>
              </div>
              <div className="grid-row-el">
                <div className='grid-col-el'>
                  <h3><span className="text-transparent" id='aboutMeGradient'>Underdog for Upsets</span></h3>
                  <p>I love the challenge of taking on complex coding problems and finding elegant solutions.</p>
                </div>
                <div className='grid-col-el'>
                  <h3><span className="text-transparent" id='aboutMeGradient'>Future Techie</span></h3>
                  <p>I'm constantly fascinated by the latest advancements in web development.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="projects-grid">
          <div className="project-list">
            <div>
            <h3><span id='projectTextGradient' className='text-transparent'>My Personal Projects</span></h3>
            <p className='text-lg'>
              These Projects demonstrate my ability to understand UI designs and make beautiful and user-friendly webpages. 
              I specialise in ReactJS and am also experienced in developing backend codes in NodeJS / ExpressJS.
            </p>
            </div>
            <div id='miniProjectDiv'>
              <h4 className='text-transparent'>Whatsapp Chatbot</h4>
              <p>
                A WhatsApp chatbot for a college with 2000 students, resulting in a decrease in missed important notices. 
                Utilized Dialogflow and NLP techniques to create an interactive and informative experience. 
              </p>
              <a href="https://github.com/AtulShince27/Mini_Project_2024" className='no-underline'>Visit Project -></a>
            </div>
            <div id='loopstudiosPageDiv'>
              <h4 className='text-transparent'>LoopStudios Landing Page</h4>
              <p>
                Recreated a landing page design from FrontendMentor.io using React and Material UI. 
                Successfully tackled challenges like implementing custom animations, 
                showcasing my ability to translate designs into functional web experiences.
              </p>
              <a href="https://atulshince27.github.io/Loopstudios-Landing-Page/" className='no-underline'>Visit Project -></a>
            </div>
            <div id='netflixPageDiv'>
              <h4 className='text-transparent'>Netflix Clone - V1</h4>
              <p>
                Recreated a basic clone of the popular streaming service Netflix using ReactJS and Firebase. 
                This project showcases my ability to create smooth UI while also using Firebase for the Backend for things like authentication etc.  
              </p>
              <a href="https://github.com/AtulShince27/Netflix_Clone" className='no-underline'>Visit Project -></a>
            </div>
            <div id='bookmarkPageDiv'>
              <h4 className='text-transparent'>Bookmark Landing Page</h4>
              <p>
                Recreated a landing page design from FrontendMentor.io using React, Material UI and React Bootstrap. 
                Successfully tackled challenges like implementing custom animations, 
                showcasing my ability to translate designs into functional web experiences. 
              </p>
              <a href="https://atulshince27.github.io/Bookmark-Landing-Page/" className='no-underline'>Visit Project -></a>
            </div>
          </div>
          <div className='image-container'>
          <img src={CoderImage} alt="Coder Illustration" id='coderImg'/>
          </div>
        </div>
      </div>
      <div className="contact-page">
        {/* <div id='resumePage'>
        <div className='image-col'></div>
          <div className='resume-col'>
            <h1>
              Here's My Resume!
            </h1>
            <button><span id='downloadBtn' className='text-transparent'><a href="../public/assets/Atul's_Resume.pdf" download>Download</a></span></button>
          </div>
        </div> */}
        <div id='contactMePage'>
          <div className='contact-col'>
            <div>
              <h3 className='text-transparent'>Let's Connect!</h3>
            </div>
            <div className='rowEl' id='phoneNum'>
              <div className='colEl' id='phoneImg'></div>
              <div className='colEl'>
                +91 7337472945
              </div>
            </div>
            <div className='rowEl' id='emailID'>
              <div className='colEl' id='emailImg'></div>
              <div className='colEl'>
                atulk.shince@gmail.com
              </div>
            </div>
            <div className='rowEl' id='linkedIn'>
              <div className='colEl' id='linkedInImg'></div>
              <div className='colEl'>
                Atul Shince
              </div>
            </div>
          </div>
          <div className='image-col' id='interviewImgCol'>
          </div>
        </div>
      </div>
      <div className='empty'></div>
    </div>
  );
}

export default App;
