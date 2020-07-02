import React from "react";
import styles from "./Technos.module.css";
import imgRedux from "../images/icons/redux.png";
import imgNode from "../images/icons/node.png";
import imgMysql from "../images/icons/mysql.png";
import imgGit from "../images/icons/git.png";
import imgStyledCpnt from "../images/icons/styled_cpnts.png";

const Technos = () => {
  return (
    <div id="technos">
      <div id="icons-container">
        <img className={styles.iconTech} src={imgRedux} alt="redux-icon" />
        <img className={styles.iconTech} src={imgNode} alt="Node.js icon" />
        <img className={styles.iconTech} src={imgMysql} alt="Mysqlicon" />
        <img className={styles.iconTech} src={imgGit} alt="Git icon" />
        <img
          className={styles.iconTech}
          src={imgStyledCpnt}
          alt="styled Components icon"
        />
      </div>
    </div>
  );
};

export default Technos;
