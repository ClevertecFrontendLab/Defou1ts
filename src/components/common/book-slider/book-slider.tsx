// eslint-disable-next-line simple-import-sort/imports
import { useState } from 'react';
import { useMobile } from 'hooks';
import { Pagination, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperClass from 'swiper/types/swiper-class';

import { baseUrl } from 'api/cleverland-api';
import { BookSliderProps } from './book-slider.props';

import styles from './book-slider.module.css';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

import './book-slider.css';

export const BookSlider = ({ images }: BookSliderProps) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();
    const { isMobile } = useMobile();

    const renderedSlides = images.map((url, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <SwiperSlide data-test-id='slide-mini' key={index} className={styles.slide}>
            <img src={baseUrl + url} alt='Book' />
        </SwiperSlide>
    ));

    return (
        <div>
            <Swiper
                data-test-id='slide-big'
                modules={[Thumbs, Pagination]}
                pagination={{ clickable: true }}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            >
                {renderedSlides}
            </Swiper>

            {!isMobile && (
                <Swiper
                    className={styles.smallSlider}
                    modules={[Thumbs, Pagination]}
                    watchSlidesProgress={true}
                    onSwiper={setThumbsSwiper}
                    slidesPerView={4}
                    spaceBetween={50}
                >
                    {renderedSlides}
                </Swiper>
            )}
        </div>
    );
};
