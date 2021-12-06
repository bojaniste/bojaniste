import React from "react";
import PropTypes from "prop-types";
import Fade from "react-bootstrap/Fade";
import style from "../SideDrawer.module.css";

function Images({ images, displayImage, setBackgroundImage }) {
  return (
    <Fade in={displayImage}>
      <div className={style.colorContainer}>
        {images.map((image, index) => {
          return (
            <div
              className={style.box}
              key={index}
              style={{
                backgroundImage: `url(${image.thumb}`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              onClick={() => setBackgroundImage({ img: image.full, color: "" })}
            ></div>
          );
        })}
      </div>
    </Fade>
  );
}
Images.propTypes = {
  images: PropTypes.array,
  displayImage: PropTypes.bool,
  setBackgroundImage: PropTypes.func,
};
export default Images;
