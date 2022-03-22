import "./Info.css";

function Info(props) {
  return (
    <div className="sInfo">
      <h3>{props.title}</h3>
      <pre>{props.explanation}</pre>
    </div>
  );
}

export default Info;
