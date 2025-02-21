const OutlineButton = ({ text, classname }) => {
  return (
    <button
      className={`capitalize text-danger-default text-base font-medium leading-5 px-3 py-1 border border-danger-default rounded-full ${classname}`}
    >
      {text}
    </button>
  );
};

export default OutlineButton;
