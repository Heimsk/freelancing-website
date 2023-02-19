"use client";

import "./styles.scss";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

export function Order() {
  let [active, setActive] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setActive(true);
    }, 100);
  }, []);

  return (
    <>
      <div className={`order ${active ? "active" : ""}`}>
        <div className="space flex">
          <div className="flex">
            <div className="image">H</div>
            <div>
              <h3 className="title">
                <span className="content">Criar um website profissional</span>
                <span className="detail">- 2 Horas atrás</span>
              </h3>
              <small className="subtitle">
                Orçamento: R$400 - Tempo de entrega: 1 a 3 meses
              </small>
            </div>
          </div>
          <AiOutlineStar className="marker" />
        </div>
        <div className="down">
          <div className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, laboriosam recusandae natus facilis nobis at itaque
            quaerat perferendis, enim ea qui quas voluptate consectetur numquam
            magni! Aliquid voluptate deleniti esse.
          </div>
          <div className="tags">
            <span className="tag">WEB</span>
            <span className="tag">Desenvolvedor</span>
            <span className="tag">Website</span>
            <span className="tag">Figma</span>
          </div>
          <div className="infos flex center">
            <span className="stars flex center">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <span className="text-color">(47)</span>
            </span>
            <span className="flex center">
              <FaMapMarkerAlt />
              &nbsp;Brasil
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
