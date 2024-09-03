import "../App.css";
import Notes from "./Notes";

export default function Home(props) {
  return (
    <div>
      <Notes mode={props.mode} toggleMode={props.toggleMode} showAlert={props.showAlert}/>
    </div>
  );
}
