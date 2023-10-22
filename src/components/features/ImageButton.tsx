import { Product } from "../features/ProductSelect";
import { Flex } from "../ui/Flex";
import { styled } from "styled-components";
import { FC, useState } from "react";
import { Button, Modal, styled as MUIStyled } from "@mui/material";

type Props = {
  product: Product | undefined;
};

export const ImageButton: FC<Props> = ({ product }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledButton
        color="success"
        variant="contained"
        onClick={() => setOpen(true)}
        disabled={!product}
      >
        image
      </StyledButton>
      <Modal open={open} onClose={() => setOpen(false)}>
        <StyledModalFlex $content="center" $items="center">
          <StyledProductImage src={`/img/${product}.png`} alt="" />
        </StyledModalFlex>
      </Modal>
    </>
  );
};

const StyledButton = MUIStyled(Button)`
  text-transform: none;
`;

const StyledProductImage = styled("img")`
  width: 400px;
  height: 400px;
`;

const StyledModalFlex = styled(Flex)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  background-color: white;
  border: 2px solid #000;
  padding: 4px;
`;
