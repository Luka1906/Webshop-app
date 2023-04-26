
const Button = (props) => {
  return (
    <button
      type={props.type || "submit"}
      className={`${props.className} flex items-center  bg-white text-black opacity-85 px-3 py-1 md:px-9 md:py-2 rounded-md lett tracking-wide`}
    >
      {props.children}
    </button>
  );
};

export default Button;
