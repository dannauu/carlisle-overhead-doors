import { Carousel } from "react-carousel-minimal";
import pic1 from "./img/pic1.jpg";
import pic2 from "./img/pic2.jpg";
import pic3 from "./img/pic3.jpg";
import pic4 from "./img/pic4.jpg";
import pic5 from "./img/pic5.jpg";

function ImageSlider() {
  const data = [
    {
      image: pic1,
      caption: "Wood Doors",
    },
    {
      image: pic2,
      caption: "Color Matching",
    },
    {
      image: pic3,
      caption: "Commercial",
    },
    {
      image: pic4,
      caption: "Wood Doors with Accents",
    },
    {
      image: pic5,
      caption: "Standard",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
    color: 'black'
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    color: 'black'
  };
  return (
    <div>
      <div className='text-center'>
        <h2>Check out our previous work!</h2>
        <p className="galleryP">
          Have questions about something you see in the gallery? Head over to
          the contact page and feel free to get in touch with us!.
        </p>
        <div
          style={{
            padding: "0 20px",
          }}
        >
          <Carousel
            data={data}
            time={2000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="white"
            slideImageFit="cover"
            thumbnails={false}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
