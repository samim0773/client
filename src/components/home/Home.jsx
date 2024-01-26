import "./Home.css";
import Button from "react-bootstrap/Button";
import ImageSlider from "../carousel/Image-slider";
import TeacherCard from "../teachers/Teacher-Card";
import Contact from "../contact/Contact";
import { Link } from "react-router-dom";
import NewsBoard from "../Notification/NewsBoard";

function Home() {
  let schoolName = "ABC institute of technology";
  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/1708912/pexels-photo-1708912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Flag of India",
    },
    {
      src: "https://images.pexels.com/photos/3184468/pexels-photo-3184468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "2",
    },
    {
      src: "https://images.pexels.com/photos/4019754/pexels-photo-4019754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "3",
    },
    {
      src: "https://images.pexels.com/photos/1708988/pexels-photo-1708988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "4",
    },
    {
      src: "https://images.pexels.com/photos/459971/pexels-photo-459971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "5",
    },
    {
      src: "https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "6",
    },
  ];
  return (
    <>
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
          <div className="vision-mission-header">
            <h3>Why Join ABC?</h3>
            <div className="line line1"></div>
            <div className="line line2"></div>
          </div>
          <div className="vision-mission-para">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              impedit, nostrum cupiditate laudantium molestias, labore quibusdam
              doloribus consequuntur dicta inventore exercitationem veritatis
              alias voluptatibus. Beatae quos numquam ipsum eius cumque fuga
              aspernatur natus? Autem voluptatum exercitationem adipisci
              delectus quos dolore.
            </p>
          </div>
        </div>
        <div className="notify">
          <h3>Important Announcement</h3>
          <div className="noti-link">
            <NewsBoard />
          </div>
        </div>
      </div>
      <div className="principal">
        <div className="container principal-container">
          <div className="principal-img">
            <div className="img-outer">
              <div className="img-inner">
                <img className="prin-img"
                  src="https://images.pexels.com/photos/5415450/pexels-photo-5415450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="principal-img"
                />
              </div>
            </div>
          </div>
          <div className="principal-about">
            <h3>Md Samim Aktar</h3>
            <p>Principal</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
              blanditiis labore fugit? Consequatur accusantium explicabo iusto
              minima eum, ea rerum commodi velit soluta fuga. At, quo voluptate
              incidunt eum facere, quos voluptas explicabo deserunt voluptatibus
              veritatis possimus excepturi fugit? Aliquam officiis ab sit fugiat
              quibusdam iste odio sequi cupiditate sint corporis, nam quaerat?
              Explicabo dolorum ex ducimus mollitia totam quisquam aliquam,
              expedita modi ipsum nemo sint est facilis ullam iusto laudantium
              iure unde sunt! Ipsum voluptas mollitia, repudiandae cupiditate
              dicta et officiis nulla aut eos accusantium reprehenderit
              doloribus quo quisquam laborum sint possimus harum aliquid,
              facilis reiciendis nisi totam. Aliquam?
            </p>
            <Button
              variant="outline-info"
              style={{ margin: "5px 0", background: "#ffffff" }}
            >
              Profile...
            </Button>
          </div>
        </div>
      </div>
      <div className="teacher-card">
        <div>
          <h3 className="tech-card-heading">Faculty Members</h3>
          <TeacherCard />
        </div>
      </div>
      <div className="gallery-body">
        <div className="container gallery-container">
          <div className="gallery-heading">
            <h3>Gallery</h3>
          </div>
          <div className="gallery-image">
            {galleryImages.map((image, index) => (
              <div key={index} className="images">
                <img src={image.src} alt={image.alt} />
              </div>
            ))}
          </div>
          <div className="gallery-btn">
            <Button
              className="btn"
              variant="outline-info"
              style={{ margin: "5px 0", background: "#ffffff" }}
            >
              <Link to="/gallery">More..</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="contact-body">
        <div className="container">
          <Contact />
        </div>
      </div>
    </>
  );
}

export default Home;
