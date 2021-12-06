import React from "react";
import style from "./Home.module.css";

function Home() {
  return (
    <div className={style.home}>
      <div className={style.homeCard}>
        <img src="https://a.trellocdn.com/prgb/dist/images/home/orientation/no-content.e25c676458c1f4cb280b.svg" />
        <h5 className="mt-2">Wellcome to my trello app </h5>
        <p>
          
          We will show the most important activity here.{" "}
        </p>
      </div>
    </div>
  );
}

export default Home;
