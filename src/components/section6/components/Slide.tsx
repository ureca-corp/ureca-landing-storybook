import "swiper/css";
import { css } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import { slideModels } from "../models.ts/SlideModels";
import { Stack, Typography } from "@mui/material";

export const Slide = () => {
  return (
    <div css={st.root}>
      <Swiper
        loop={true}
        slidesPerView={2}
        spaceBetween={40}
        navigation={true}
        modules={[Navigation]}
      >
        {slideModels.map((it, index) => (
          <SwiperSlide key={index}>
            <Stack css={st.blueCard}>
              <Typography fontSize="24px" color="#f1f1f1">
                {it.title}
              </Typography>
              <Typography fontSize="36px" fontWeight="700" color="#f1f1f1">
                {it.name}
              </Typography>
            </Stack>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const st = {
  root: css`
    & .swiper-slide {
      width: 370px !important;
    }
    & .swiper-button-next {
      background-image: url(/assets/arrow_right.png);
      width: 60px;
      height: 60px;
      background-repeat: no-repeat;
      &::after {
        display: none;
      }
    }
    & .swiper-button-prev {
      background-image: url(/assets/arrow_left.png);
      width: 60px;
      height: 60px;
      background-repeat: no-repeat;
      &::after {
        display: none;
      }
    }
  `,
  blueCard: css`
    width: 370px;
    height: 470px;
    background: #6094fc;
    padding: 40px 0;
    border-radius: 16px;

    justify-content: flex-end;
    align-items: center;
  `,
};
