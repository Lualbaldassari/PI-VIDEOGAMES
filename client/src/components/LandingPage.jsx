import React from "react";
import { Link } from "react-router-dom";
import s from "../style/LandingPage.module.css";
import linkedin from "../imagenes/linkedin (1).png";
import github from "../imagenes/github (1).png";
import gmail from "../imagenes/gmail (1).png";

const LandingPage = () => {
  return (
    <div className={s.full}>
      <div className={s.full_inner}>
        <h1 className={s.titulo}>Videogames APP</h1>
        <Link to="/home">
          <button className={s.btn}>
            <span>GET STARTED</span>
          </button>
        </Link>

        <div className={s.links}>
          <div className={s.mini_box}>
            <a
              href="https://linkedin.com/in/lbaldassari"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="linkedin" />
            </a>
          </div>
          <div className={s.mini_box}>
            <a
              href="https://github.com/Lualbaldassari"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="github" />
            </a>
          </div>
          <div className={s.mini_box}>
            <a
              href="mailto:lbaldassari@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={gmail} alt="gmail" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
