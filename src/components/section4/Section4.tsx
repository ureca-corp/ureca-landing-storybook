import { css } from "@emotion/react";
import { Stack, Typography } from "@mui/material";
import lottery from "@/assets/lottery.png";
import { Section3Models } from "./models/Section3Models";
import Image from "next/image";

export const Section4 = () => {
  return (
    <div css={st.root}>
      <Stack
        css={st.inner}
        direction="row-reverse"
        gap="80px"
        alignItems="center"
      >
        <div>
          <Typography fontSize="32px" fontWeight="700" color="#242424">
            {"편리하고 신뢰할 수 있는 복권 구매대행"}
          </Typography>
          <Typography mt="20px" mb="60px" color="#6e6e6e" fontSize="24px">
            {
              "최대 700억의 당첨금과 이월 시 10억 담청자의 무한 증가는 당첨확률의 확대와 재미를 동시에 제공하고 있습니다. 현재의 lumen holdings 회사를 통한 안정적인 복권 공급과 수급의 시스템은 복권 매니아들을 위한 또 다른 즐거움을 제공합니다."
            }
          </Typography>
          <ul css={st.cardsWrap}>
            {Section3Models.map((text, index) => (
              <li key={index}>
                <div css={st.blackImage}></div>
                <Typography mt="20px">{text}</Typography>
              </li>
            ))}
          </ul>
        </div>
        <Image src={lottery} alt="lottery" />
      </Stack>
    </div>
  );
};

const st = {
  root: css`
    width: 100%;
    background: #f1f4f7;
  `,
  inner: css`
    width: 1400px;
    margin: 0 auto;
    padding: 100px 0;
  `,
  blackImage: css`
    width: 124px;
    height: 124px;
    border-radius: 16px;
    background: #242424;
  `,
  cardsWrap: css`
    display: flex;
    justify-content: space-between;
  `,
};
