import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "./cartSlice";
import Button from "../../ui/Button";

function UpdateItem({ pizzaId, children }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button type="round" onClick={() => dispatch(decreaseQuantity(pizzaId))}>
        -
      </Button>
      {children}
      <Button type="round" onClick={() => dispatch(increaseQuantity(pizzaId))}>
        +
      </Button>
    </div>
  );
}

export default UpdateItem;
