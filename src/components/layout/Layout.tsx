import { styled } from "styled-components";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return <StyledLayout>{children}</StyledLayout>;
};

const StyledLayout = styled("div")`
  width: 400px;
  margin: 0 auto;
  padding: 100px;
`;
