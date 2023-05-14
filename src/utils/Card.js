import React from "react"
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion"

const Card = ({ id, title, tag }) => {
  const navigate = useNavigate();
  const navigateSingleThread = () => {
    navigate(`/${id}/replies`);
  };
  return (
    <motion.div
      className="card-wrapper"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      onClick={navigateSingleThread}
    >
      <div
        className="card-circle"
        style={{
          borderColor: `${
            tag === "movie"
              ? "gold"
              : tag === "music"
              ? "tomato"
              : "limegreen"
          }`
        }}
      ></div>
      <h3 className="title">{title}</h3>
    </motion.div>
  )
}

export default Card;
