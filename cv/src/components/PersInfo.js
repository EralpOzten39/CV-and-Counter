import Info from "./Info";
import "./PersInfo.css";

function PersInfo(props) {
  return (
    <div className="sPersInfo">
      <img
        src={"https://avatars.githubusercontent.com/u/99029922?v=4"}
        alt="Kişi Resmi"
      />
      <h2>Kişisel Bilgiler</h2>
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
      <Info
        title={props.items[5].title}
        explanation={props.items[5].explanation}
      />
      <Info
        title={props.items[6].title}
        explanation={props.items[6].explanation}
      />
    </div>
  );
}

export default PersInfo;
