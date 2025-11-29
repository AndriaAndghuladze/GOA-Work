import PrinterButton from "./PrinterButton";

export default function Printer() {

  function handlePrint() {
    let text = "";
    for (let i = 0; i < 5000; i++) {
      text += "Hello ";
    }

    alert(text);
  }

  return (
    <div>
      <h2>Printer Component</h2>
      <PrinterButton onPrint={handlePrint} />
    </div>
  );
}