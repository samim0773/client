import "../../public/style/Teacher-card.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "react-bootstrap/Button";

const data = [
  {
    name: "Samim",
    img: "../../public/teachers/principal.jpg",
    subject: "English",
  },
  {
    name: "Aktar",
    img: "../../public/teachers/teach2.jpg",
    subject: "English",
  },
  {
    name: "Rohan",
    img: "../../public/teachers/teach3.jpg",
    subject: "English",
  },
  {
    name: "Roni",
    img: "../../public/teachers/principal.jpg",
    subject: "English",
  },
  {
    name: "Sumon",
    img: "../../public/teachers/teach2.jpg",
    subject: "English",
  },
  {
    name: "Sony",
    img: "../../public/teachers/teach3.jpg",
    subject: "English",
  },
];
function TeacherCard() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="tech-card-container">
      <h3 className="tech-card-heading">Faculty Members</h3>
      <div className="container">
        <Slider {...settings}>
          {data.map((data, index) => (
            <div key={index} className="tech-card">
              <div className="tch-img">
                <img src={data.img} alt="" />
              </div>
              <div className="tch-info">
                <h5>{data.name}</h5>
                <h6>{data.subject}</h6>
                <div className="card-btn">
                  <Button
                    className="btn"
                    variant="light"
                    style={{ margin: "5px 0", border: "1px solid #a9a9a9" }}
                  >
                    Profile
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default TeacherCard;
