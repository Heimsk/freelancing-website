import styles from "./orders.module.scss";
import { FaTimes, FaSearch, FaCheck, FaList } from "react-icons/fa";
import { Button } from "@/components/Button";
import { Order } from "@/components/Order";

export default function OrdersPage() {
  return (
    <>
      <div className="container">
        <div className={styles.outer_container}>
          <div className={styles.first_column}>
            <div className={`${styles.box} ${styles.full_box}`}>
              <div className={styles.content}>
                <div className={`${styles.flex} ${styles.space}`}>
                  <span className={styles.title}>Filtros</span>
                  <i className={`${styles.pointer} ${styles.title}`}>
                    <FaTimes />
                  </i>
                </div>
                <span className={`${styles.text} ${styles.margin}`}>
                  Localização
                </span>
                <div className={styles.margin}>
                  <select
                    className={`${styles.input} ${styles.pointer} ${styles.small}`}
                  >
                    <option>Brasil</option>
                  </select>
                </div>
                <span className={`${styles.margin} ${styles.text}`}>
                  Especialidades
                </span>
                <div className={`${styles.margin} ${styles.specs}`}>
                  <div>
                    <input type="checkbox" />
                    <span>
                      <i>
                        <FaCheck />
                      </i>
                    </span>
                    <p>Desenvolvedor</p>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <span>
                      <i>
                        <FaCheck />
                      </i>
                    </span>
                    <p>WEB</p>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <span>
                      <i>
                        <FaCheck />
                      </i>
                    </span>
                    <p>Front end</p>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <span>
                      <i>
                        <FaCheck />
                      </i>
                    </span>
                    <p>Figma</p>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <span>
                      <i>
                        <FaCheck />
                      </i>
                    </span>
                    <p>UI</p>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <span>
                      <i>
                        <FaCheck />
                      </i>
                    </span>
                    <p>UX</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.second_column}>
            <div className={`${styles.box} ${styles.search}`}>
              <div className={`${styles.flex}`}>
                <input className={`${styles.input} ${styles.input_margin}`} />
                <div className={styles.button}>
                  <Button
                    label="Procurar"
                    hoverEffect={["fill"]}
                    icon={<FaSearch />}
                    small
                  />
                  <Button icon={<FaList />} iconOnly small />
                </div>
              </div>
              <div className={styles.mobile_button}>
                <Button
                  label="Buscar"
                  style={["outline", "rounded"]}
                  hoverEffect={["fill"]}
                  small
                  wide
                />
              </div>
            </div>
            <div className={`${styles.box} ${styles.full_box}`}>
              <div>
                <Order />
                <Order />
                <Order />
                <Order />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
