import Translator from "@/components/Translator";
import * as styles from "./page.css";
import Header from "@/components/Translator/Header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <Translator />
      </div>
    </div>
  );
}
