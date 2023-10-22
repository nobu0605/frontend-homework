import { InputProps, TextField } from "@mui/material";
import { FC } from "react";

type Props = {
  value: string;
  onChange: InputProps["onChange"];
};

export const MemoTextField: FC<Props> = ({ value, onChange }) => {
  return (
    <TextField
      multiline
      rows={4}
      label="Memo"
      value={value}
      onChange={onChange}
      variant="outlined"
    />
  );
};
