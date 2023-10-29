import React from "react";
import Slider from "react-slick";
import ava01 from "../../../assets/photos/ava-1.jpg";
import ava02 from "../../../assets/photos/ava-2.jpg";
import ava03 from "../../../assets/photos/ava-3.jpg";
const Sliderr = () => {
  const setting = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...setting}>
      <div>
        <p className="review__text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus id
          corporis quam, inventore perferendis, quo cupiditate reprehenderit
          unde accusamus tempora voluptatum. Non aliquam nesciunt aperiam, nam
          sapiente expedita consectetur fugit?
        </p>
        <div className="d-flex align-items-center gap-3">
          <img src={ava01} alt=""className="w-25 rounded" />
          <h6>mamad</h6>
        </div>
      </div>
      <div>
      <p className="review__text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus id
          corporis quam, inventore perferendis, quo cupiditate reprehenderit
          unde accusamus tempora voluptatum. Non aliquam nesciunt aperiam, nam
          sapiente expedita consectetur fugit?
        </p>
        <div className="d-flex align-items-center gap-3">
          <img src={ava02} alt="" className="w-25 rounded" />
          <h6>kobra</h6>
        </div>
      </div>
      <div>
      <p className="review__text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus id
          corporis quam, inventore perferendis, quo cupiditate reprehenderit
          unde accusamus tempora voluptatum. Non aliquam nesciunt aperiam, nam
          sapiente expedita consectetur fugit?
        </p>
        <div className="d-flex align-items-center gap-3">
          <img src={ava03} alt="" className="w-25 rounded" />
          <h6>hasan</h6>
        </div>
      </div>
    </Slider>
  );
};

export default Sliderr;
