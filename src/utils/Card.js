import React from "react"

import { motion } from "framer-motion"

const Card = ({ title, status }) => {
  return (
    <motion.div
      className="card-wrapper"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <div
        className="card-circle"
        style={{
          borderColor: `${
            status === "draft"
              ? "gold"
              : status === "rejected"
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
