import React, { useState } from "react";

import PropTypes from "prop-types";

import styles from "./roomatte.module.css";
import Photos from "../photo/Photo.jsx";
import img from "./prof.png";
//import { Link } from "react-router-dom";
//import { useNavigate } from "react-router-dom";
//import { useParams } from "react-router-dom";
import axios from "axios";

const Roommatte = (props) => {
  /* const { userType } = useParams();*/
  /* const navigate = useNavigate();*/
  const [formData, setFormData] = useState({
    nameinput: "",
    genderinput: "",
    ageinput: "",
    cityinput: "",
    phoneinput: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/api/register", {
        ...formData,
      });
      console.log("upload image successful:", response.data);
      /*navigate("/");*/
    } catch (error) {
      console.error("upload image failed:", error);
      return <h1>upload image failed: {error}</h1>;
    }
  };

  return (
    <>
      <div className={styles["photoo"]}>
        <img alt={props.iMAGEAlt} src={img} />
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles["form"]}>
          <span className={styles["userprofile"]}>Roommatte</span>
          <div className={styles["full-name"]}>
            <span className={styles["name"]}>Name</span>
          </div>
          <input
            onChange={handleChange}
            name="nameinput"
            value={formData.nameinput}
            id="nameinput"
            type="text"
            className={styles["nameinput"]}
          />

          <span className={styles["gender"]}>Gender</span>

          <input
            onChange={handleChange}
            name="genderinput"
            value={formData.genderinput}
            id="genderinput"
            type="text"
            className={styles["genderinput"]}
          />

          <span className={styles["age"]}>
            <span>Age</span>
          </span>

          <input
            onChange={handleChange}
            name="ageinput"
            value={formData.ageinput}
            id="ageinput"
            type="text"
            className={styles["ageinput"]}
          />

          <span className={styles["city"]}>
            <span>City</span>
          </span>

          <input
            onChange={handleChange}
            name="cityinput"
            value={formData.cityinput}
            id="cityinput"
            type="text"
            className={styles["cityinput"]}
          />
          <div>
            <span className={styles["phone"]}>phone</span>
          </div>

          <input
            onChange={handleChange}
            name="phoneinput"
            value={formData.phoneinput}
            id="phoneinput"
            type="text"
            className={styles["phoneinput"]}
          />

          <button
            name="setting"
            id="setting"
            type="submit"
            className={styles["button"]}
          >
            <span className={styles["accountsetting"]}>Report</span>
          </button>
        </div>
      </form>
    </>
  );
};
Photos.defaultProps = {
  iMAGESrc: img,
  iMAGEAlt: "IMAGE",
};

Photos.propTypes = {
  iMAGESrc: PropTypes.string,
  iMAGEAlt: PropTypes.string,
};

export default Roommatte;
