import { css } from "@emotion/react";
import { Stack, Typography } from "@mui/material";
import check from "@/assets/check_orange.png";
import { section2Models } from "./models/Section2Models";
import Image from "next/image";

export const Section2 = () => {
  return (
    <div css={st.root}>
      <Stack css={st.inner}>
        <Typography color="#242424" fontSize="20px">
          {"BUSINESS"}
        </Typography>
        <Typography
          fontSize="36px"
          fontWeight="700"
          color="#242424"
          mt="20px"
          mb="60px"
        >
          {"모두 루멘 생태계의 회원들에게만 주어지는 혜택"}
        </Typography>
        <ul css={st.cardWrap}>
          {section2Models.map((text, index) => (
            <li key={index} css={st.card}>
              <Image src={check} alt="check" width="40" height="40" />
              <Typography fontSize="24px" color="#f1f1f1">
                {text}
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
    width: 100%;
    background: #f1f4f7;
  `,
  inner: css`
    width: 1400px;
    margin: 0 auto;
    padding: 100px 0;

    align-items: center;
  `,
  cardWrap: css`
    display: flex;
    gap: 25px;
  `,
  card: css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #242424;

    border-radius: 8px;
    width: 260px;
    padding: 28px;
    aspect-ratio: 1;
  `,
};
