const Home = () => {
  return (
    <div className="home-div">
      <article>
        <h1>
          Maximiliaan <br />
          <span className="home-span">de</span> Bruijn{" "}
        </h1>
        <hr />
        <p className="home-text">
          Ik ben Maximiliaan de Bruijn, Front-End developer. ik ben 17 jaar oud,
          woon in vlaardingen en zit op dit moment in mijn tweede leerjaar van
          de opleiding software developer(Creative Media Technology) op het
          Techniek College Rotterdam in Schiedam. <br />
          Naast programmeren hou ik me graag bezig met gamen en het kijken van
          films/series en ik denk dat ik helemaal gereed ben voor mijn stage
          periode van 28 januari t/m 29 juni.
        </p>
        <h2 className="skills-h2">Skills</h2>
        <div className="skills-div">
        <img className="skills-img" src="./images/reactportfoliohtmllogo.png" alt="" />
        <img className="skills-img second" src="./images/reactportfoliocsslogo.png" alt="" />
        <img className="skills-img" src="./images/reactportfoliojslogo.png" alt="" />
        <img className="skills-img second" src="./images/reactportfolioreactlogo.png" alt="" />
        </div>
        <footer><h3 className="footer-h3">Made by Maximiliaan de Bruijn</h3></footer>
      </article>
      <img
        className="home-img"
        src="./images/portfoliodrivefoto.jpg"
        alt="Maximiliaan de bruijn foto"
      />
    </div>
  );
};

export default Home;
