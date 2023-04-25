import { Stack, Typography } from "@mui/material";
import { css } from "@emotion/react";

export const Section5 = () => {
  return (
    <div css={st.root}>
      <Stack
        css={st.inner}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <div>
          <Stack direction="row">
            <Typography fontSize="48px" fontWeight="700" color="#fff">
              {"대한민국 브랜드"}
            </Typography>
            <Typography fontSize="48px" fontWeight="700" color="#fce860">
              {"만족도 1위"}
            </Typography>
          </Stack>
          <Stack direction="row">
            <Typography fontSize="48px" fontWeight="700" color="#fce860">
              {"에듀랜드"}
            </Typography>
            <Typography fontSize="48px" fontWeight="700" color="#fff">
              {"에서 시작해야 하는 이유"}
            </Typography>
          </Stack>
        </div>
        <Stack alignItems="center">
          <Typography fontSize="24px" color="#f1f1f1">
            {"공인중개사 제 32회 시험"}
          </Typography>
          <Typography color="#f1f1f1" fontSize="74px" fontWeight="700">
            {"D-61"}
          </Typography>
        </Stack>
      </Stack>
    </div>
  );
};

const st = {
  root: css`
    width: 100%;
    background: #001031;
  `,

  inner: css`
    padding: 62px 0;
    width: 1400px;
    margin: 0 auto;
  `,
};
