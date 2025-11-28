export default function Car(props) {
  return (
    <div>
      <p>{props.model1}</p>
      <p>{props.model2}</p>
      <p>{props.model3}</p>
      <p>{props.model4}</p>
      <p>{props.model5}</p>
    </div>
  );
}

export default function Car(model1, model2, model3, model4, model5 ) {
  return (
    <div>
      <p>{model1}</p>
      <p>{model2}</p>
      <p>{model3}</p>
      <p>{model4}</p>
      <p>{model5}</p>
    </div>
  );
}