import React, { useRef, useState, useEffect } from 'react';
import Card from '../CardCarousel/card';
import './carousel.css';

const Carousel = () => {
  const carouselRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const carousel = carouselRef.current;

    const handleMouseDown = (e) => {
      setIsMouseDown(true);
      setStartX(e.pageX - carousel.offsetLeft);
      setScrollLeft(carousel.scrollLeft);
    };

    const handleMouseLeave = () => {
      setIsMouseDown(false);
    };

    const handleMouseUp = () => {
      setIsMouseDown(false);
    };

    const handleMouseMove = (e) => {
      if (!isMouseDown) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - startX) * 2; // Ajuste a velocidade do arraste aqui
      carousel.scrollLeft = scrollLeft - walk;
    };

    carousel.addEventListener('mousedown', handleMouseDown);
    carousel.addEventListener('mouseleave', handleMouseLeave);
    carousel.addEventListener('mouseup', handleMouseUp);
    carousel.addEventListener('mousemove', handleMouseMove);

    return () => {
      carousel.removeEventListener('mousedown', handleMouseDown);
      carousel.removeEventListener('mouseleave', handleMouseLeave);
      carousel.removeEventListener('mouseup', handleMouseUp);
      carousel.removeEventListener('mousemove', handleMouseMove);
    };
  }, [carouselRef, isMouseDown, startX, scrollLeft]);

  return (
    <div className="carousel" ref={carouselRef}>
      <div className="container" >
          <Card textNome="Janeiro"/>
          <Card text="Fevereiro"/>
          <Card text="Março"/>
          <Card text="Abril"/>
          <Card text="Maio"/>
          <Card text="Junho"/>
          <Card text="Julho"/>
          <Card text="Agosto"/>
          <Card text="Setembro"/>
          <Card text="Outubro"/>
          <Card text="Novembro"/>
          <Card text="Dezembro"/>
      </div>
    </div>
  );
};

export default Carousel;
