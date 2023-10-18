export default function Portfolio() {
  return (
    <div className="container pt-5">
      
      {/* {First row of cards} */}
      <div className="card-group">
  <div className="card">
    <img className="card-img-top" src="https://user-images.githubusercontent.com/93567778/276074466-d66aa773-9f84-4b31-958e-b925de84fb0e.png" alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Sudoku</h5>
      <p className="card-text">Custom logic to improve the user experience of current sudoku games. Done in JQuery, JQuery UI and Boostrap</p>
    </div>
    <div className="card-footer">
    <a href="https://github.com/Felipewithf/sudoku" className="card-link" target="blank"><small className="text-muted">View Github Repo {">"}</small></a>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src="https://raw.githubusercontent.com/temuts/BarkingBuddies/main/public/images/homepage.png" alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Barking Buddies</h5>
      <p className="card-text">Barking Buddies is a dynamic web app that brings dog lovers together. Users to create profiles for themselves and their furry companions, to discover new friendships and becoming buddies. Done in Sequilize, Express, Handlebars, Boostrap.</p>
    </div>
    <div className="card-footer">
    <a href="https://github.com/temuts/BarkingBuddies" className="card-link" target="blank"><small className="text-muted">View Github Repo {">"}</small></a>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src="https://user-images.githubusercontent.com/93567778/276071667-8fbe475e-63cf-4f21-8e4a-fd4518b8ed9c.png" alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Machine Parts</h5>
      <p className="card-text">Concept for a local simulation gamel using machine parts. Done in Vanilla JavaScript</p>
    </div>
    <div className="card-footer">
    <a href="https://github.com/Felipewithf/MachineParts" className="card-link" target="blank"><small className="text-muted">View Github Repo {">"}</small></a>
    </div>
  </div>
</div>
{/* {Seconds row of cards Below} */}

<div className="card-group pt-5">
  <div className="card">
    <img className="card-img-top" src="https://raw.githubusercontent.com/Felipewithf/soccer-quiz/main/assets/images/correct.png" alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Soccer Quiz</h5>
      <p className="card-text">Interactive soccer quiz. Done in Vanilla Javascript using Local Storage</p>
    </div>
    <div className="card-footer">
    <a href="https://github.com/Felipewithf/soccer-quiz" className="card-link" target="blank"><small className="text-muted">View Github Repo {">"}</small></a>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src="https://raw.githubusercontent.com/Felipewithf/WeatherApp/main/assets/img/s1.png" alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Ghibli Weather Dashboard</h5>
      <p className="card-text">Weather dashboard inspired by the Studio Ghibli animation studio. Done in JQuery, and third party API</p>
    </div>
    <div className="card-footer">
    <a href="https://felipewithf.github.io/WeatherApp/" className="card-link" target="blank"><small className="text-muted">View Github Repo {">"}</small></a>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src="https://user-images.githubusercontent.com/93567778/276076479-3446b659-04d5-413d-a8de-5dd54c81ebb2.png" alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Avatar/Background tester</h5>
      <p className="card-text">This webapp allows you to change backgrounds and avatars with the arrow keys (Avatars) and WASD (backgrounds). Done in JQuery</p>
    </div>
    <div className="card-footer">
    <a href="https://github.com/Felipewithf/MachineParts" className="card-link" target="blank"><small className="text-muted">View Github Repo {">"}</small></a>
    </div>
  </div>
</div>


    </div>
  );
}
