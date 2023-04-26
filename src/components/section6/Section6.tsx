import { css } from "@emotion/react";
import { Button, Stack, Typography } from "@mui/material";
import { Slide } from "./components/Slide";

export const Section6 = () => {
  return (
    <div css={st.root}>
      <Stack
        direction="row"
        css={st.inner}
        justifyContent="space-between"
        alignItems={"center"}
      >
        <Stack gap="40px" sx={{ width: "40%" }}>
          <Typography color="#242424" fontSize="48px" fontWeight="700">
            {"실력있는 최고의\n에듀랜드 교수님들"}
          </Typography>
          <Typography color="#6e6e6e" fontStyle="24px">
            {"에듀랜드 최고의 교수님들이\n수강생 분들의 합격을 보장합니다."}
          </Typography>
          <Button css={st.button}>{"교수님 전체보기"}</Button>
        </Stack>
        <Slide />
      </Stack>
    </div>
  );
};

const st = {
  root: css`
    background: #f1f4f7;
    width: 100%;
    overflow: hidden;
  `,

  inner: css`
    width: 1400px;
    margin: 0 auto;
    padding: 100px 0;
  `,
  button: css`
    max-width: fit-content;
    background: #214b9f;
    border-radius: 30px;
    color: #f1f1f1;
    font-size: 15px;
    padding: 10px 20px;
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
