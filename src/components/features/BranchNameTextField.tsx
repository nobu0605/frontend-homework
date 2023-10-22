import { InputProps, TextField } from "@mui/material";
import { FC } from "react";

type Props = {
  value: string;
  onChange: InputProps["onChange"];
};

export const BranchNameTextField: FC<Props> = ({ value, onChange }) => {
  return (
    <TextField
      label="Branch Name"
      variant="outlined"
      value={value}
      onChange={onChange}
    />
  );
};
