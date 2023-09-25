import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="bg-stone-900 text-stone-200 flex justify-between h-12 items-center px-4">
      <p className="flex space-x-3 items-center">
        <span>23 pizzas</span>
        <span className="font-semibold">$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
