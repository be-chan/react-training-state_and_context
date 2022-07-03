import "./styles.css";
import { useContext } from "react";
import { Card } from "./components/Card";
import { AdminFlagContext } from "./components/providers/AdminFlagProvider";

export default function App() {
  const { isAdmin, setIsAdmin } = useContext(AdminFlagContext);
  const onClickSwitch = () => setIsAdmin(!isAdmin);

  return (
    <div className="App">
      {isAdmin ? <span>管理者です</span> : <span>管理者以外です。</span>}
      <button onClick={onClickSwitch}>切り替え</button>
      <Card isAdmin={isAdmin} />
    </div>
  );
}
