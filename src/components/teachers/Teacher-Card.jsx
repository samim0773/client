import './Teacher-Card.css'
import React, { useState, useEffect, useCallback } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from 'react-bootstrap/Button';

const initialData = [

  {
    name: "Samim1",
    img: "https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    subject: "Bengali",
  },
  {
    name: "samim2",
    img: "https://images.pexels.com/photos/5428000/pexels-photo-5428000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    subject: "Bengali",
  },
  {
    name: "samim3",
    img: "https://images.pexels.com/photos/4308095/pexels-photo-4308095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    subject: "Bengali",
  },
  {
    name: "Samim4",
    img: "https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    subject: "Bengali",
  },
  {
    name: "Samim5",
    img: "https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    subject: "Bengali",
  },
  {
    name: "Samim6",
    img: "https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    subject: "Bengali",
  },
  {
    name: "Aktar1",
    img: "https://images.pexels.com/photos/5905440/pexels-photo-5905440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    subject: "English",
  },
  {
    name: "Aktar2",
    img: "https://images.pexels.com/photos/8520145/pexels-photo-8520145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    subject: "English",
  },
  {
    name: "Aktar3",
    img: "https://images.pexels.com/photos/7521069/pexels-photo-7521069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    subject: "English",
  },
  {
    name: "Rohan1",
    img: "https://images.pexels.com/photos/8467270/pexels-photo-8467270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    subject: "Geography",
  },
  {
    name: "Rohan2",
    img: "https://images.pexels.com/photos/4064176/pexels-photo-4064176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    subject: "Geography",
  },
  {
    name: "Rohan3",
    img: "https://images.pexels.com/photos/6816529/pexels-photo-6816529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    subject: "Geography",
  },
  {
    name: "Rony1",
    img: "https://images.pexels.com/photos/8191575/pexels-photo-8191575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    subject: "Sociology",
  },
  {
    name: "Rony2",
    img: "https://images.pexels.com/photos/8923701/pexels-photo-8923701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    subject: "Sociology",
  },
  {
    name: "Rony3",
    img: "https://images.pexels.com/photos/7176288/pexels-photo-7176288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    subject: "Sociology",
  },
  {
    name: "Rony4",
    img: "https://images.pexels.com/photos/7176288/pexels-photo-7176288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    subject: "Sociology",
  },
  {
    name: "Rony5",
    img: "https://images.pexels.com/photos/7176288/pexels-photo-7176288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    subject: "Sociology",
  },
  {
    name: "Rony6",
    img: "https://images.pexels.com/photos/7176288/pexels-photo-7176288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    subject: "Sociology",
  },
  {
    name: "Rony7",
    img: "https://images.pexels.com/photos/7176288/pexels-photo-7176288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    subject: "Sociology",
  },
];

function TeacherCard({ selectedSubject }) {
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

  const [data, setData] = useState(initialData);
  const [filteredData, setFilteredData] = useState(initialData);

  const filterTeachers = useCallback(() => {
    if (selectedSubject) {
      const filteredTeachers = data.filter((teacher) => teacher.subject === selectedSubject);
      setFilteredData(filteredTeachers);
    } else {
      // If no subject is selected, show all teachers
      setFilteredData(data);
    }
  }, [selectedSubject, data]);

  useEffect(() => {
    filterTeachers();
  }, [filterTeachers]);

  return (
    <div className="tech-card-container">
     
      <div className="container">
        <Slider {...settings}>
          {filteredData.map((teacher, index) => (
            <div key={`${teacher.name}-${index}`} className="tech-card">
              <div className="tch-img">
                <img src={teacher.img} alt="" />
              </div>
              <div className="tch-info">
                <h5>{teacher.name}</h5>
                <h6>{teacher.subject}</h6>
                <div className="card-btn">
                  <Button
                    className="btn"
                    variant="light"
                    style={{ margin: '5px 0', border: '1px solid #a9a9a9' }}
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
