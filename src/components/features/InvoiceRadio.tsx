import { styled } from "styled-components";
import { RadioItem } from "../ui/RadioGroup";
import { RadioGroup } from "../ui/RadioGroup";
import { FC } from "react";

export enum Invoice {
  Post = "post",
  Email = "email",
}

export const invoiceItems: RadioItem[] = [
  {
    value: Invoice.Post,
    label: "Post",
  },
  {
    value: Invoice.Email,
    label: "Email",
  },
];

type Props = {
  value: Invoice;
  setValue: (v: Invoice) => void;
};

export const InvoiceRadio: FC<Props> = ({ value, setValue }) => {
  return (
    <StyledInvoiceDiv>
      <span>Invoice</span>
      <RadioGroup
        row
        value={value}
        setValue={setValue}
        radioItems={invoiceItems}
      />
    </StyledInvoiceDiv>
  );
};

const StyledInvoiceDiv = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
`;
