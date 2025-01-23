import Label from "@/components/atoms/Label";
import Input from "@/components/atoms/Input";

const InputForm = ({ label, name, placeholder, type }) => {
  return (
    <div>
      <Label htmlfor={name}>{label}</Label>
      <Input id={name} name={name} type={type} placeholder={placeholder} />
    </div>
  );
};

export default InputForm;
