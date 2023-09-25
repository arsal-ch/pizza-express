function Input({ type, name }) {
  const className =
    "inline-block w-72 rounded-full bg-stone-200 px-4 py-2 text-sm  text-stone-700 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-70 focus:ring-offset-1";
  return <input type={type} name={name} className={className} />;
}

export default Input;
