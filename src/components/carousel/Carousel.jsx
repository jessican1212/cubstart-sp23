import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styles from './page.module.css'

function CarouselComponent() {
    return (
            <Carousel className={styles.carousel} autoplay infiniteLoop transitionTime="100" showThumbs={false} showStatus={false}>
                <div>
                    <img src="assets/carousel-one.png"/>
                </div>
                <div>
                    <img src="assets/carousel-two.png" />
                </div>
            </Carousel>
        );
};

export default CarouselComponent;


