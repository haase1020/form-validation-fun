import "./App.css";
import developerImg from "./assets/womandeveloper.png";
import { Signup } from "./components/Signup";

function App() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="cold-md-7 my-auto">
          <img
            className="img-fluid w-50"
            src={developerImg}
            alt="developer image"
          />
          <Signup />
        </div>
      </div>
    </div>
  );
}

export default App;
