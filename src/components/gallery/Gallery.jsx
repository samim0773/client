import LightGallery from "lightgallery/react";
import "./Gallery.css";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-rotate.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgShare from "lightgallery/plugins/share";
import lgRotate from "lightgallery/plugins/rotate";

const images = [
  { src: "../../public/images/gallery/img1.jpg", alt: "Flag of India" },
  { src: "../../public/images/gallery/img2.jpg", alt: "2" },
  { src: "../../public/images/gallery/img3.jpg", alt: "3" },
  { src: "../../public/images/gallery/img4.jpg", alt: "4" },
  { src: "../../public/images/gallery/img5.jpg", alt: "5" },
  { src: "../../public/images/gallery/img6.jpg", alt: "6" },
  { src: "../../public/images/gallery/img7.jpg", alt: "7" },
  { src: "../../public/images/gallery/img8.jpg", alt: "8" },
  { src: "../../public/images/gallery/img9.jpg", alt: "9" },
  { src: "../../public/images/gallery/img10.jpg", alt: "10" },
];

function Gallery() {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <div className="container">
      <div className="App">
        <LightGallery
          onInit={onInit}
          speed={500}
          plugins={[
            lgThumbnail,
            lgZoom,
            lgAutoplay,
            lgFullscreen,
            lgRotate,
            lgShare,
          ]}
        >
          {images.map((image, index) => {
            return (
              <a href={image.src} key={index}>
                <img className="gallery-img" alt={image.alt} src={image.src} />
              </a>
            );
          })}
        </LightGallery>
      </div>
    </div>
  );
}
export default Gallery;
