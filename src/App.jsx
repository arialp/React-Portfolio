import './App.css'

function App() {
  const username = "Alp Eren Arı"
  const lang = ["Python", "Java", "JavaScript", "React", "HTML", "CSS"]
  const images = [{
    name: 'Simple Calculator',
    image: 'src/data/calculator.png',
    desc: 'Using basic HTML, CSS and JavaScript knowledge, I made a simple working calculator.'
  }, {
    name: 'Coffee Machine',
    image: 'src/data/coffee.png',
    desc: 'The first mini project I made using Python was a coffee machine. It prompts the user for what they want, calculates cost and tracks resources accordingly.'
  }, {
    name: 'Random Image Gallery',
    image: 'src/data/randompix.png',
    desc: 'Using the Unsplash API, I made a simple web page that displays 15 random images everytime the page is reloaded.'
  }]
  const mapProjects = images.map((image, i) =>
  <div key={i}>
    <div id="project">
      <div id="image">
        <img src={image.image} alt={image.name} width="100%" height="100%"/>
      </div>
      <div>
        <p id="name">{image.name}</p>
        <p id="desc">{image.desc}</p>
      </div>
    </div>
  </div>)
  
  const links = [{
    index: 1,
    name: "Linkedin",
    link: 'www.linkedin.com/in/alp-eren-a-16a2b228a'
  }, {
    index: 2,
    name: "Github",
    link: 'https://github.com/arialp'
  }, {
    index: 3,
    name: "Üretken Akademi",
    link: 'https://egitim.uretkenakademi.com/products/mega-yazilim-akademisi'
  }]
  
  return (<>
    <div id="welcome">
      <h1>Welcome to my portfolio.</h1>
    </div>
    <hr/>
    <p id="about">About Me</p>
    <div id="text">
      <p>
        Hello, I am {username} and I am a passionate and curious developer who loves to learn new technologies and create useful applications.
      </p>
      <p>
        Some of the skills that I have are {lang.join(", ")}.
      </p>
    </div>
    <hr/>
    <div id="skills">
      <div>
        <p id="skill">Python</p>
        <p id="desc">I have been using Python for a year and I am knowledgeable in data analysis, web development and machine learning.</p>
      </div>
      <div>
        <p id="skill">React.js</p>
        <p id="desc">I am currently learning React.js, a popular front-end framework that allows me to build dynamic and interactive web pages.</p>
      </div>
      <div>
        <p id="skill">Java</p>
        <p id="desc">I am also learning Java, a powerful and versatile programming language that can run on multiple platforms and devices.</p>
      </div>
    </div>
    <hr/>
    <p id="proj">Projects</p>
    <div id="projects">
      {mapProjects}
    </div>
    <hr/>
    <div id="link">
      <h1>Relevant Links</h1>
      <div id="links">
        {links.map((link) => (<a key={link.index} href={link.link} target="_blank" rel="noopener noreferrer"><u>{link.name}</u></a>))}
      </div>
    </div>
  </>)
}

export default App
