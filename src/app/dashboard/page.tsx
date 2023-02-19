import { Player } from "@/components/Player";
import styles from "./dashboard.module.scss";
import Animation from "../../../public/Maintenance.json";

export default function Dashboard() {
  return (
    <>
      <div className="container">
        <div className={styles.center}>
          <h2>Página em desenvolvimento... aguarde {":)"}</h2>
          <Player autoplay loop src={Animation} style={{ zIndex: 3 }} />
        </div>
      </div>
    </>
  );
}
