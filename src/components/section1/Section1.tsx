import { Stack, Typography } from "@mui/material";
import { css } from "@emotion/react";
import Image from "next/image";
import img from "@/assets/section1.png";
import { Section1Models } from "./models/Section1Models";
import { Mq, useCustomMediaQuery } from "@/common/theme/screen";

export const Section1 = () => {
  const { isLaptop } = useCustomMediaQuery();
  return (
    <div css={st.root}>
      <Stack direction="row" css={st.inner} gap="80px">
        <Stack>
          <Typography color="#242424" fontSize="42px" fontWeight="700">
            {
              "미술 수집의 미래에 앞장서는 BISKET 에서\n세계 최고의 예술품을 거래해보세요."
            }
          </Typography>
          <Typography color="#6E6E6E" fontSize="20px" mt="40px" mb="100px">
            {
              "BISKET은 NFT 기술을 통해 아티스트들의 소유권과 저작권을 보호합니다.\n이는 아티스트들이 지속가능한 작업환경을 구축하는 토대가 됩니다.\n아트 플랫폼으로 시작한 BISKET의 목적지는 ‘예술의 대중화’입니다."
            }
          </Typography>
          <div css={st.image}>
            <Image src={img} alt="img" fill sizes="100" />
          </div>
        </Stack>
        <ul css={st.right}>
          {Section1Models.map((it, index) => (
            <li key={index}>
              <Stack
                css={st.underline}
                py="20px"
                direction="row"
                justifyContent="space-between"
              >
                <Typography fontSize="28px" fontWeight="700">
                  {it.title}
                </Typography>
                <Typography fontSize="28px" fontWeight="700">
                  {it.number}
                </Typography>
              </Stack>
              <Typography py="20px" fontSize="20px" color="#6e6e6e">
                {it.desc}
              </Typography>
            </li>
          ))}
        </ul>
      </Stack>
    </div>
  );
};

const st = {
  root: css`
    background: #f1f4f7;
    width: 100%;
    padding: 103px 0;
    font-family: "Pretendard-Regular" !important;
  `,
  inner: css`
    width: 1400px;
    margin: 0 auto;
    @media ${Mq.xxl} {
      direction: column;
      width: 100%;
    }
    @media (max-width: 1440px) {
      direction: column;
      width: 100%;
    }
  `,
  image: css`
    width: 593px;
    aspect-ratio: 1/0.593;
    position: relative;
  `,
  right: css`
    width: 36%;
  `,
  underline: css`
    border-bottom: solid 2px #eee;
  `,
};
