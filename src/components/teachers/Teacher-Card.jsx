import "./Teacher-card.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "react-bootstrap/Button";

const data = [
  {
    name: "Samim",
    img: "https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    subject: "English",
  },
  {
    name: "Aktar",
    img: "https://images.pexels.com/photos/5212321/pexels-photo-5212321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    subject: "Bengali",
  },
  {
    name: "Rohan",
    img: "https://images.pexels.com/photos/6326377/pexels-photo-6326377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    subject: "History",
  },
  {
    name: "Roni",
    img: "https://images.pexels.com/photos/5415444/pexels-photo-5415444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    subject: "Geography",
  },
  {
    name: "Sumon",
    img: "https://images.pexels.com/photos/6929202/pexels-photo-6929202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    subject: "Math",
  },
  {
    name: "Sony",
    img: "https://images.pexels.com/photos/5212675/pexels-photo-5212675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    subject: "Physics",
  },
  {
    name: "Danny",
    img: "https://images.pexels.com/photos/6929202/pexels-photo-6929202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    subject: "Psychology",
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
