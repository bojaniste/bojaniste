import PropTypes from "prop-types";
import React from "react";
import Fade from "react-bootstrap/Fade";
import style from "../SideDrawer.module.css";

function Colors({ colors, color, setBackgroundImage }) {

  return (
    <Fade in={color}>
      <div className={style.colorContainer}>
        {colors.map((color, index) => {
          return (
            <div
              className={style.box}
              key={index}
              style={{
                backgroundColor: color,
                backgroundImage: "cover",
                backgroundRepeat: "no-repeat",
              }}
              onClick={() => setBackgroundImage({ color: color, img: "" })}
            ></div>
          );
        })}
      </div>
    </Fade>
  );
}
Colors.propTypes = {
  colors: PropTypes.array,
  color: PropTypes.bool,
  setBackgroundImage: PropTypes.func,
};
export default Colors;
