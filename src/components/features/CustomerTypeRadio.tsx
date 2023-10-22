import { RadioItem } from "../ui/RadioGroup";
import { RadioGroup } from "../ui/RadioGroup";
import { FC } from "react";

export enum CustomerType {
  Personal = "personal",
  Company = "company",
}

type Props = {
  value: CustomerType;
  setValue: (v: CustomerType) => void;
};

export const customerTypeItems: RadioItem[] = [
  {
    value: CustomerType.Personal,
    label: "Personal",
  },
  {
    value: CustomerType.Company,
    label: "Company",
  },
];

export const CustomerTypeRadio: FC<Props> = ({ value, setValue }) => {
  return (
    <RadioGroup
      row
      value={value}
      setValue={setValue}
      radioItems={customerTypeItems}
    />
  );
};
