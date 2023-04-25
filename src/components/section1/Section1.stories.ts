import { Meta, StoryObj } from "@storybook/react";
import { Section1 } from "./Section1";

// StorkBook에 컴포넌트 렌더링을 위해 컴포넌트마다 설정해야 하는 환경 변수
const meta: Meta<typeof Section1> = {
  // 폴더/컴포넌트명
  title: "Components/Section1",

  // 타겟 컴포넌트 지정
  component: Section1,

  // Docs 자동 생성 설정
  tags: ["autodocs"],
};

export default meta;

// 최소 1개 이상의 Story를 export 해야합니다.
// 'Story'란 컴포넌트에 특정한 상태가 적용된 모습을 의미.
type Story = StoryObj<typeof Section1>;

export const Default: Story = {};

// Story 예시 example:
// export const Disabled: Story = {};
// export const Contained: Story = {};
// export const Outlined: Story = {};
