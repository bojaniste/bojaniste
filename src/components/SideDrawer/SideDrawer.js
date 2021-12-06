import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Colors from "./Colors/Colors";
import colors from "../../utilis/colors";
import getImages from "../../utilis/imageApi";
import style from "./SideDrawer.module.css";
import Images from "./Images/Images";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideDrawer = ({ setSideDrawer, showSideDrawer, setBackgroundImage }) => {
  const [color, setColor] = useState(false);

  const [displayImage, setDisplayImage] = useState(false);
  const [images, setImages] = useState([]);

  const getListOfImages = async () => {
    const listImages = await getImages();
    setImages(listImages);
  };

  useEffect(() => {
    getListOfImages();
  }, []);

  return (
    <>
      <div
        className={
          showSideDrawer
            ? `${style.sideDrawer}  ${style.open}`
            : `${style.sideDrawer} ${style.close}`
        }
      >
        <div className={style.topSideDrawer}>
          <span onClick={() => setSideDrawer(false)}>
            <FontAwesomeIcon icon={faTimes} color="#3d5d73" cursor="pointer" />
          </span>
          <span className={style.title}>Change Background</span>
        </div>
        <hr />

        <div className={style.menu}>
          <div
            onClick={() => {
              setDisplayImage(true);
              setColor(false);
            }}
            className={style.box}
            style={{
              backgroundImage: `url("https://a.trellocdn.com/prgb/dist/images/photos-thumbnail@3x.48948499e309aef794d7.jpg")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          <div
            className={style.box}
            onClick={() => {
              setColor(true);
              setDisplayImage(false);
            }}
            style={{
              backgroundImage: `url("https://a.trellocdn.com/prgb/dist/images/colors@2x.864f4df15d825e89e199.jpg")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
        <hr />

        {displayImage ? (
          <Images
            images={images}
            displayImage={displayImage}
            setBackgroundImage={setBackgroundImage}
          />
        ) : (
          <Colors
            colors={colors}
            color={color}
            setBackgroundImage={setBackgroundImage}
          />
        )}
      </div>
    </>
  );
};
SideDrawer.propTypes = {
  setBackgroundImage: PropTypes.func,
  showSideDrawer: PropTypes.bool,
  setSideDrawer: PropTypes.func,
};
export default SideDrawer;
