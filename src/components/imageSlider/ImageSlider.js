import React, { useState } from 'react';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';

import useStyles from './styles';

const ImageSlider = ({ slides }) => {
  const classes = useStyles();
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const prevSlide = () => { 
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  const nextSlide = () => { 
    setCurrent(current === length - 1 ? 0 : current + 1); 
  }

  console.log(current);
  
  return (
    <section className={ classes.slider }>
      <SkipPreviousIcon className={ classes.leftArrow} onClick={ prevSlide}/>
      {slides.map((slide, index) => { 
        return <div className={index === current ? `${classes.slide} ${classes.active}`: `${classes.slide}`} key={index}>
          {index === current && (
            <img src={slide.image} alt="slider images" className={ classes.image}/>
          )}
        </div>
      })}
      <SkipNextIcon className={ classes.rightArrow} onClick={ nextSlide}/>
    </section>
  )
}

export default ImageSlider
