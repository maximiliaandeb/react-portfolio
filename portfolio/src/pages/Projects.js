const Projects = () => {
  return (
    <div>
      <article>
        <h1 className="projects-h1">Projects</h1>
        <div className="projects-introduction">
          <h4 className="projects-title">
            Zie hier alle projecten die ik tot dusver heb gemaakt.
          </h4>
        </div>
        <div className="projects">
          <h4 className="projects-h4">Ouderavond website</h4>
          <div>
            <img
              className="projects-image"
              src="./images/ouderavondfoto.png"
              alt="foto ouderavond website"
            />
            <p className="projects-description">
              Het eerste project wat ik heb gemaakt is de ouderavond website.
              Bij dit project moest ik met een klasgenoot met gebruik van html
              en css een website maken over de school en de informatie die
              handig is voor ouders. En zo dat wij zelf ook wisten hoe het
              allemaal geregeld wordt op school.
            </p>
          </div>
          <h4 className="projects-h4">Game website</h4>
          <div>
            <img
              className="projects-image"
              src="./images/project2.png"
              alt="foto ouderavond website"
            />
            <p className="projects-description">
              Het tweede project wat ik heb gemaakt is de game website. Bij dit
              project moest ik met twee andere klasgenoten met gebruik van html
              en css een website maken over games waar ook deels in winkelelement in moest zitten.
            </p>
          </div>
          <h4 className="projects-h4">Webshop</h4>
          <div>
            <img
              className="projects-image"
              src="./images/project3en4.png"
              alt="foto ouderavond website"
            />
            <p className="projects-description">
                Het derde project wat ik heb gemaakt is de webshop. Bij dit project moest ik samen met twee andere klasgenoten een webshop maken over een onderwerp naar keuze
            </p>
          </div>
        </div>
        <footer className="projects-footer"><h3 className="projects-footer-h3">Made by Maximiliaan de Bruijn</h3></footer>
      </article>
    </div>
  );
};

export default Projects;
