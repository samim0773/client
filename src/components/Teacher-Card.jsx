import "../../public/style/Teacher-card.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    name: "samim",
    img: "../../public/teachers/principal.jpg",
    subject: "English",
  },
  {
    name: "samim",
    img: "../../public/teachers/teach2.jpg",
    subject: "English",
  },
  {
    name: "samim",
    img: "../../public/teachers/teach3.jpg",
    subject: "English",
  },
  {
    name: "samim",
    img: "../../public/teachers/principal.jpg",
    subject: "English",
  },
  {
    name: "samim",
    img: "../../public/teachers/teach2.jpg",
    subject: "English",
  },
  {
    name: "samim",
    img: "../../public/teachers/teach3.jpg",
    subject: "English",
  },
];
function TeacherCard() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="container">
        <Slider {...settings}>
          {data.map((data, index) => (
            <div key={index} className="tech-card">
              <div className="tch-img">
                <img src={data.img} alt="" />
              </div>
              <div className="tch-info">
                <h5>{data.name}</h5>
                <p>{data.subject}</p>
                <button>View Profile</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default TeacherCard;
