import Input from "./inputs/Input";
import send from "@/public/icons/send.png";
import FieldDisplay from "./FieldDisplay";
import { FieldDisplayInputProps } from "@/lib/types";

export default function FieldDisplayInput({
  controls,
}: FieldDisplayInputProps) {
  const { isOnEdit, setIsOnEdit, type, label, inputProps, data } = controls;
  return isOnEdit ? (
    <Input
      label={label}
      icon={send}
      props={{ type: type || "text", value: data.content, ...inputProps }}
      onIconClick={() => setIsOnEdit(false)}
    />
  ) : (
    <FieldDisplay toggleEdit={setIsOnEdit} data={data} />
  );
}
