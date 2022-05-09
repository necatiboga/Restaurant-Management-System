import React from "react";
import img from '../assets/burgerking.png'
import './Restaurant.css'
import StarRateRoundedIcon from "@material-ui/icons/StarRateRounded";
import TextTruncate from "react-text-truncate";
import defaultImage from "../assets/default.jpg";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import { pageZoom, pageTransition } from "../util";
const Restaurant = () => {
  const history = useHistory();
    const data = {
      id:1,
      name:'Burger King',
      img: img,
    }

    console.log(data.id);
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageZoom}
      transition={pageTransition}
      layout
      onClick={() => history.push(`/restaurantPage/${data.id}`)}
      className="restaurant"
    >
      <motion.div  className="restaurant__image">
        <img src={data.img} />
      </motion.div>
      <div className="restaurant__details">
        
        <TextTruncate
          line={3}
          element="h6"
          containerClassName="restaurant__name"
          truncateText="…"
          text={data.name}
        />
        <div className="restaurant__footer">
          
          
        </div>
      </div>
      
    </motion.div>
  );
};

export default Restaurant;
