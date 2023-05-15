import style from "./Awards.module.css";
import React from "react";

function Awards() {
  return (
    <div className={`${style.AwardsCont} container-fluid`}>
      <div className={style.content}>
        <span className={style.cup}>
          <img
            className={style.cupImg}
            src="https://img.freepik.com/free-icon/trophy_318-922766.jpg?size=338&ext=jpg&ga=GA1.2.1594462479.1678118375&semt=sph"
            alt="cup"
          />
        </span>
        <h1 className={style.h1}>
          Additionally, we have been recognized with several awards.
        </h1>
        <span className={`${style.awards} row g-lg-5 g-md-5 g-3`} data-aos="fade-up">
          <span className={`${style.awardSpan} col-lg-2 col-4 col-md-3`}>
            <img
              className={style.awardImg}
              src="data:image/jpeg;base64,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"
              alt="award"
            />
          </span>

          

          <span className={`${style.awardSpan} col-lg-2 col-4 col-md-3`}>
            <img
              className={style.awardImg}
              src="data:image/png;base64,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"
              alt="award"
            />
          </span>

          <span className={`${style.awardSpan} col-lg-2 col-4 col-md-3`}>
            <img
              className={style.awardImg}
              src="data:image/png;base64,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"
              alt="award"
            />
          </span>

          <span className={`${style.awardSpan} col-lg-2 col-4 col-md-3`}>
            <img
              className={style.awardImg}
              src="https://orases.com/wp-content/uploads/2020/08/orases-award-clutch-top-mobile-app-dev-2020.png"
              alt="award"
            />
          </span>

          <span className={`${style.awardSpan} col-lg-2 col-4 col-md-3`}>
            <img
              className={style.awardImg}
              src="data:image/png;base64,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"
              alt="award"
            />
          </span>

          <span className={`${style.awardSpan} col-lg-2 col-4 col-md-3`}>
            <img
              className={style.awardImg}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTpFNv-Hi8LqQxXEzAe_VnAlFLHmtAVD5J_eShhgdxj9FOsJuFsnchy3-TXPISLNYe8qo&usqp=CAU"
              alt="award"
            />
          </span>

          <span className={`${style.awardSpan} col-lg-2 col-4 col-md-3`}>
            <img
              className={style.awardImg}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8q1uejCEHZlFA9WoSl0fucovrNN-i7gYbGo-3Sh7cIyyQLXfnPPQTOu-wGqyQAZLjJSc&usqp=CAU"
              alt="award"
            />
          </span>
        </span>
      </div>
    </div>
  );
}

export default Awards;
