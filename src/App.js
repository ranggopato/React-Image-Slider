import { useState } from "react";
import "./App.css";
import { items } from "./data";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";

function App() {
  const [slide, setSlide] = useState(0);
  const length = items.length;
  const nextSlide = () => {
    setSlide((current) => (current === length - 1 ? 0 : current + 1));
  };
  const prevSlide = () => {
    setSlide((current) => (current === 0 ? length - 1 : current - 1));
  };

  return (
    <div className="main">
      <div className="title">Beautiful Image Slider</div>
      <div className="slider">
        <div>
          {items.map((item, index) => {
            return (
              <div className={index === slide ? "animate" : ""}>
                {slide === index && (
                  <img
                    className="rounded"
                    src={item.image}
                    alt="image_slider"
                    width={800}
                    height={600}
                  />
                )}
              </div>
            );
          })}
        </div>
        <div onClick={nextSlide} className="icon-next">
          <MdOutlineNavigateNext />
        </div>
        <div onClick={prevSlide} className="icon-before">
          <MdOutlineNavigateBefore />
        </div>
      </div>
      <div className="row">
        {items.map((val, index) => {
          return (
            <div
              onClick={() => setSlide(index)}
              className={slide === index ? "dot-color" : "dot"}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
