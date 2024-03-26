let age = 20;

const Lesson1_1 = () => {
  const handleClick = () => {
    age = age + 1;
  };
  return (
    <div>
      <input type="text" />
      <button
        onClick={handleClick}
        className="border p-2 rounded-md bg-red-100"
      >
        Add Age
      </button>
      <p>You are {age}</p>
    </div>
  );
};

export default Lesson1_1;
