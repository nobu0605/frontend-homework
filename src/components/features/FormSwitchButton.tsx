import { Flex } from "../ui/Flex";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { FC, MouseEventHandler } from "react";
import { styled } from "styled-components";

export enum Form {
  Simple = "simple",
  FullPage = "fullPage",
}

type Props = {
  onClick: MouseEventHandler;
  formType: Form;
};

export const FormSwitchButton: FC<Props> = ({ onClick, formType }) => {
  return (
    <StyledIconButtonFlex $content="center" $items="center" onClick={onClick}>
      {formType === Form.Simple ? (
        <KeyboardArrowUpIcon />
      ) : (
        <KeyboardArrowDownIcon />
      )}
    </StyledIconButtonFlex>
  );
};

const StyledIconButtonFlex = styled(Flex)`
  width: 40px;
  height: 20px;
  border: 1px solid;
  border-radius: 10px;
  cursor: pointer;
`;
