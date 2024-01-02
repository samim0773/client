import "../../public/style/Teacher-card.css";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function TeacherCard() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };
  return (
    {data.map((data) =>(
        <Card style={{ width: "18rem" }}>
        
        <Card.Img variant="top" src={data.img} />
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Card.Text>
            {data.subject}
          </Card.Text>
          <Button variant="primary">View Profile</Button>
        </Card.Body>
      </Card>
        ))} 
  );
}

const data = [
  {
    name: "samim",
    img: "../../public/teachers/principal.jpg",
    subject: "English"
  },
  {
    name: "samim",
    img: "../../public/teachers/teach2.jpg",
    subject: "English"
  },
  {
    name: "samim",
    img: "../../public/teachers/teach3.jpg",
    subject: "English"
  },
  {
    name: "samim",
    img: "../../public/teachers/principal.jpg",
    subject: "English"
  }
];

export default TeacherCard;
