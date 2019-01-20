import React from "react";
import styled from "styled-components";
import Head from "next/head";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import ashwin from "./img/testimonials/ashwin.png";
import jayashree from "./img/testimonials/jayashree.png";
import kaival from "./img/testimonials/kaival.png";
import swathi from "./img/testimonials/swathi.png";

const SliderSection = styled.section`
  max-width: 90rem;
  padding-bottom: 4rem;
  margin: 0 auto;
  > div {
    text-align: center;
    padding: 5rem 0;
  }
  img {
    width: 18rem;
    margin: 0 auto;
    transition: 1s;
    transform: scale(0.8);
    @media (max-width: 40rem) {
      width: 13rem;
    }
  }
  .slick-slide.slick-center img {
    transform: scale(1.1);
    z-index: 1;
  }
`;

var settings = {
  dots: true,
  infinite: true,
  speed: 10,
  cssEase: "ease-out",
  centerMode: true,
  useTransform: true,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  draggable: true,
  lazyLoad: true,
  responsive: [
    { breakpoint: 877, settings: { autoplay: true, slidesToShow: 2 } },
    { breakpoint: 634, settings: { autoplay: true, slidesToShow: 1 } }
  ]
};

const Testimonials = () => (
  <SliderSection>
    <Head>
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
    </Head>
    <Slider {...settings}>
      <div>
        <h3>
          <img src={ashwin} />
        </h3>
      </div>
      <div>
        <h3>
          <img src={jayashree} />
        </h3>
      </div>
      <div>
        <h3>
          <img src={kaival} />
        </h3>
      </div>
      <div>
        <h3>
          <img src={swathi} />
        </h3>
      </div>
    </Slider>
  </SliderSection>
);

export default Testimonials;
