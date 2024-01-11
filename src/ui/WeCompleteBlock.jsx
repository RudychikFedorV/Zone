import React from "react";
import { Link } from "react-router-dom";

const WeCompleteBlock = () => {
  return (
    <div className="WeComplete__block">
      <div className="WeComplete__block-title">
        We complete every projects extra care as customer need
      </div>
      <div className="WeComplete__block-info">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum
        risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet
        convallis nuncoe scelerisque in. orem ipsum dolor sit amet, consectetur
        adipisicing elit. Labore eius molestiae facere, natus reprehenderit
        eaque eum, autem ipsam. Magfini, error. Tempora odit laborum iure
        inventore possimus laboriosam qui nam.{" "}
      </div>
      <Link to={"/"}>
        <div className="WeComplete__block-btn btn">Read more</div>
      </Link>
    </div>
  );
};

export default WeCompleteBlock;
