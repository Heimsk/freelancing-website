import styles from "./home.module.scss";
import Hero from "../../public/hero.json";
import { Player } from "@/components/Player";
import { Button } from "@/components/Button";
import { FaAngleDown, FaStar, FaRegHandshake } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { Background } from "@/components/AnimatedBG";
import { Card, CardContent, CardHeading } from "@/components/Card";
import { TbDiscount2 } from "react-icons/tb";
import {
  AiOutlineLock,
  AiOutlineDesktop,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";

export default function Home() {
  return (
    <>
      <div className={styles.hero}>
        <div className="container">
          <div className={styles.hero_container}>
            <div className={styles.columns}>
              <div className={styles.column}>
                <small className={styles.top_title}>
                  Construa as suas idéias
                </small>
                <h3 className={styles.title}>
                  Encontre os melhores{" "}
                  <span className={styles.color}>Freelancers.</span>
                </h3>
                <p className={styles.subtitle}>
                  Invista em soluções de alta qualidade. Acesse uma ampla gama
                  de freelancers especializados em diferentes áreas, garantindo
                  soluções de qualidade e alcançando melhores resultados em seus
                  projetos com a nossa plataforma de freelancing.
                </p>
                <div className={styles.buttons}>
                  <Button
                    style={["rounded"]}
                    icon={<FaStar />}
                    label="Encontrar Freelancer"
                  />
                  <Button
                    style={["rounded", "outline"]}
                    hoverEffect={["fill"]}
                    icon={<MdWork />}
                    label="Sou Freelancer"
                  />
                </div>
              </div>
              <div className={styles.column}>
                <Player autoplay loop src={Hero} style={{ zIndex: 3 }} />
              </div>
            </div>
            <FaAngleDown className={styles.arrow} />
          </div>
        </div>
      </div>
      <Background />
      <div className="container">
        <div className={styles.text_center}>
          <h3 className={styles.title}>
            Porque escolher a <span className={styles.color}>MoreFreelas</span>?
          </h3>
          <div className={styles.cards_container}>
            <Card>
              <CardHeading>
                <i>
                  <TbDiscount2 />
                </i>
                <span>As menores taxas do mercado (5%)</span>
              </CardHeading>
              <CardContent>
                Nós oferecemos as menores taxas do mercado, tornando-nos a opção
                ideal para freelancers e clientes. Nossas taxas são claras e
                justas, sem surpresas ou cobranças ocultas.
              </CardContent>
            </Card>
            <Card>
              <CardHeading>
                <i>
                  <FaRegHandshake />
                </i>
                <span>Conexão segura e eficaz</span>
              </CardHeading>
              <CardContent>
                Nós somos a plataforma de freelancing que conecta clientes e
                freelancers de forma rápida e eficiente. Nossa missão é tornar a
                contratação de freelancers e a procura por trabalhos simples e
                sem complicações.
              </CardContent>
            </Card>
            <Card>
              <CardHeading>
                <i>
                  <AiOutlineLock />
                </i>
                <span>Pagamento seguro</span>
              </CardHeading>
              <CardContent>
                Nós oferecemos formas de pagamento seguras e garantidas, para
                que você possa fazer transações financeiras com tranquilidade.
              </CardContent>
            </Card>
            <Card>
              <CardHeading>
                <i>
                  <AiOutlineDesktop />
                </i>
                <span>Organização profissional</span>
              </CardHeading>
              <CardContent>
                Nossa plataforma oferece ferramentas avançadas para
                gerenciamento de projetos e pedidos, facilitando a organização
                dos trabalhos freelancers. Comunicação, acompanhamento de
                progresso e garantia de sucesso são assegurados através de nossa
                interface intuitiva.
              </CardContent>
            </Card>
            <Card>
              <CardHeading>
                <i>
                  <AiOutlineFundProjectionScreen />
                </i>
                <span>Suporte amplo</span>
              </CardHeading>
              <CardContent>
                Nossa plataforma de freelancing suporta uma ampla gama de
                projetos, incluindo programação, design, web design, tradução,
                criação de textos e mais. Nós agrupamos freelancers talentosos
                em uma só comunidade para atender todas as suas necessidades de
                projetos.
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
