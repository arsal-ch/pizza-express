function Button({ children, type, disabled }) {
  const className =
    "rounded-full bg-yellow-500 px-4 uppercase py-2 text-sm font-semibold tracking-wider text-stone-800 transition-colors duration-300 hover:bg-yellow-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-offset-1 my-5";
  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
}

export default Button;
