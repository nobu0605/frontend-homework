import { Select } from "../ui/Select";
import { Menu } from "../ui/Select";
import { FC } from "react";

export const companyMenuItems: Menu[] = [
  {
    value: "companyA",
    children: "Company A",
  },
  {
    value: "companyB",
    children: "Company B",
  },
  {
    value: "companyC",
    children: "Company C",
  },
];

type Props = {
  value: string | undefined;
  setValue: (v: string) => void;
};

export const CompanySelect: FC<Props> = ({ value, setValue }) => {
  return (
    <Select
      value={value}
      setValue={setValue}
      label="Company"
      menuItems={companyMenuItems}
    />
  );
};
