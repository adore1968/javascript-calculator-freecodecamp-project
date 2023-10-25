import buttons from "@/utils/data";
import Button from "./Button";

function ButtonsList() {
  return (
    <div className="grid grid-cols-3 gap-1.5">
      {buttons.map((button) => (
        <Button key={button.id} button={button} />
      ))}
    </div>
  );
}

export default ButtonsList;
