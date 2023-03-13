function PrimaryButton({ title, custom, action }) {
  return (
    <button
      onClick={action}
      className={` text-white w-[100%] h-[44px] rounded-md cursor-pointer mx-2 ${custom}`}
    >
      {title}
    </button>
  );
}

export default PrimaryButton;
