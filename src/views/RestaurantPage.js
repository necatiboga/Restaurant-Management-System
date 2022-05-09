import React from "react";
import Categories from "../components/Categories";
import Main from "../components/Main";
import CarouselContainer from "../components/CarouselContainer";
import { motion } from "framer-motion";
import { pageTransition, pageSlide } from "../util";
import MainRestaurant from "../components/MainRestaurant";

function RestaurantPage() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageSlide}
      transition={pageTransition}
    > 
      
      <Categories />
      <MainRestaurant />
    </motion.div>
  );
}
export default RestaurantPage;
