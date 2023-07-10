import { useState } from "react";

import Button from "../button/Button"
import Doom from "../../Img/DOOM.jpg"
import Fifa from "../../Img/FIFA.jpg"



const Carousel = () => {
  const images = ["../../Img/DOOM.jpg", "../../Img/FIFA.jpg"];
  const [selectedIndex, setSelecetedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const selectNewImage = (index, images, next ) =>{
    const condition = next ? selectedIndex <images.length -1 : selectedIndex > 0;
    const nextIndex = next ? (condition ? selectedIndex +1 : 0) : condition ? selectedIndex-1 : images.length -1;
    setSelectedImage(images[nextIndex]);
    setSelecetedIndex(selectedIndex);
  }

  const previos = () => {
    selectNewImage(selectedIndex, images, false)
  };

  const next = () => {
    selectNewImage(selectedIndex, images)
  };

  return(
    <>
      
      <Button onClick={previos}>{"<"}</Button>
      <img src={Doom} alt="Games"/>
      <img src={Fifa} alt="Games"/>
      <img src={Doom} alt="Games"/>
      <Button onClick={next}>{">"}</Button>
    </>
  ) 
  
};

export default Carousel;
