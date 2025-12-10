import Header from "@/components/Header";
import * as styles from "./page.css";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <div className={styles.errorSection}>
          <h1 className={styles.errorCode}>404</h1>
          <h2 className={styles.errorTitle}>페이지를 찾을 수 없어요</h2>
          <p className={styles.errorDescription}>
            <br />
            요청하신 페이지가 존재하지 않습니다.
          </p>
          <br />
          <Link href="/" className={styles.secondaryButton}>
            ← 홈으로
          </Link>
        </div>
      </div>
    </div>
  );
}
