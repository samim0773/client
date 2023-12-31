import "../../public/style/Home.css";
import Button from "react-bootstrap/Button";
import ImageSlider from "./Image-slider";
import Navigation from "./Navigation";
import VisionMission from "./Vision-mission";

function Home() {
  let schoolName = "Jalalpur High Madrasha (H.S)";
  return (
    <>
      <Navigation />
      <ImageSlider />
      <div className="welcome-msg">
        <div className="container">
          <h2 className="sch-heading">
            Welcome to <span className="sch-name">{schoolName}</span>
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Doloremque, vel optio eius, ratione architecto nesciunt aliquam
            saepe placeat ea enim pariatur ipsa temporibus praesentium inventore
            itaque quod accusamus quidem nihil laborum ut ipsum. Nulla
            voluptatibus culpa, cumque sed porro omnis veritatis excepturi
            voluptatem soluta rem. Alias vitae nisi, quaerat delectus ut dolore
            porro, harum ea quis corporis illum exercitationem, nesciunt
            laudantium perspiciatis. Ab eius, placeat laborum ad harum magnam
            iste iure sint error provident. Dolore vel enim porro beatae, dicta
            voluptatem sed at eveniet libero, ipsam, esse vero amet
            voluptatibus. Numquam eum cum blanditiis repellat amet aperiam,
            dolorem a ipsa!
          </p>
          <div className="sch-about-btn">
            <Button
              variant="outline-info"
              style={{ margin: "5px 0", background: "#ffffff" }}
            >
              More...
            </Button>
          </div>
        </div>
      </div>
      <div className="vision-mission-notity container">
        <div className="vision-mission">
          <VisionMission />
        </div>
        <div className="notify">
          <h3>Notification</h3>
          <div className="noti-link">
            <ul>
              <li>new admision</li>
              <li>new admision</li>
              <li>new admision</li>
              <li>new admision</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="principal">
        <div className="principal-img">
          <img src="" alt="principal image" />
        </div>
        <di className="principal-about"></di>
      </div>
    </>
  );
}

export default Home;
