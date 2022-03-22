import Info from "./Info";
import "./AddInfo.css";

function AddInfo(props) {
  return (
    <div className="sAddInfo">
      <Info
        title={props.items[0].title}
        explanation={props.items[0].explanation}
      />
      <Info
        title={props.items[1].title}
        explanation={props.items[1].explanation}
      />
      <Info
        title={props.items[2].title}
        explanation={props.items[2].explanation}
      />
      <Info
        title={props.items[3].title}
        explanation={props.items[3].explanation}
      />
      <Info
        title={props.items[4].title}
        explanation={props.items[4].explanation}
      />
    </div>
  );
}

export default AddInfo;
