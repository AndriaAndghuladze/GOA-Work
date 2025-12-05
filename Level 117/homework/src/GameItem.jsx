export default function GameItem({ name }) {

  function handleClick() {
    alert(name + " added to cart!");
  }

  return (
    <button onClick={handleClick}>
      {name}
    </button>
  );
}
