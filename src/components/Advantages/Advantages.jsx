import React from "react";
import "./Advantages.sass";
import img2 from "../../assets/img/img2.png";
import img3 from "../../assets/img/img3.png";
import img4 from "../../assets/img/img4.png";
import img5 from "../../assets/img/img5.png";
import img6 from "../../assets/img/img6.png";
import img7 from "../../assets/img/img7.png";

function Advantages() {
  return (
    <div>
      <div className="advantages__tittle">
        <div className="advantages__text">Преимущества</div>
      </div>
      <div className="advantages__container">
        <div className="advantages__block">
          <div className="advantages__item">
            <div className="advantages__items">
              <img className="advantages__img" src={img2} alt="" />
              <div className="advantages__title2">Бесплатное обучение</div>
            </div>
          </div>
          <div className="advantages__item">
            <div className="advantages__items">
              <img className="advantages__img" src={img3} alt="" />
              <div className="advantages__title2">
                Обучаем основам программирования
              </div>
            </div>
          </div>
          <div className="advantages__item">
            <div className="advantages__items">
              <img className="advantages__img" src={img4} alt="" />
              <div className="advantages__title2">
                Самостоятельная разработка
              </div>
            </div>
          </div>
          <div className="advantages__item">
            <div className="advantages__items">
              <img className="advantages__img" src={img5} alt="" />
              <p className="advantages__title2">
                Проводим обучающие семинары
              </p>
            </div>
          </div>
          <div className="advantages__item">
            <div className="advantages__items">
              <img className="advantages__img" src={img6} alt="" />
              <p className="advantages__title2">
                По окончанию курса выдаем сертификат
              </p>
            </div>
          </div>
          <div className="advantages__item">
            <div className="advantages__items">
              <img className="advantages__img" src={img7} alt="" />
              <div className="advantages__title2">
                Гарантируем трудоустройсто
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advantages;
