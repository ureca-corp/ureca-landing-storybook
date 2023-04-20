import { Button, Typography } from "@mui/material";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const CustomButton = () => {
  return (
    <Button css={st.container}>
      <Typography css={st.text}>{"This is a custom button"}</Typography>
    </Button>
  );
};

const st = {
  container: css`
    background-color: orange;
  `,
  text: css`
    color: red;
  `,
};
