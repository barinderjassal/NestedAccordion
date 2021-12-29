import "./styles.css";
import { data } from "./data";
import { Tree } from "./Tree";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Tree root={data.root} children={data.children} />
    </div>
  );
}
