import { useEffect } from "react";
import { register } from "swiper/element/bundle";
import "swiper/swiper-bundle.css";

export default function Carousel() {
  useEffect(() => {
    register();
  }, []);

  return (
    <swiper-container slides-per-view="1" autoplay="true" loop="true">
      <swiper-slide>Item 1</swiper-slide>
      <swiper-slide>Item 2</swiper-slide>
      <swiper-slide>Item 3</swiper-slide>
    </swiper-container>
  );
}