import { Container } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import Cards from "../Cards";

function Slide({ info, title }) {
  return (
    <>
      <Container>
        <h2>{title}</h2>
        <Swiper
          grabCursor
          spaceBetween={10}
          slidesPerView={"auto"}
          className="swiper"
          touchStartPreventDefault={false}
        >
          {info.map((item, index) => (
            <SwiperSlide key={index}>
              <Cards item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  );
}

export default Slide;
