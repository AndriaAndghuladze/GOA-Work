export default function Count({ inc, dsc }) {
  return (
    <>
      <button onClick={inc}>+1</button>
      <button onClick={dsc}>-1</button>
    </>
  );
}