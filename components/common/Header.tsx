import Link from "next/link"
import styles from '@/styles/header.module.scss'
import Image from "next/image";

interface Props {
  rightElements?: React.ReactElement[];
  onClickLogo?: () => void;
}

const Header = ({onClickLogo, rightElements}: Props) => {
  return (
    <header className={styles.header}>
      <div className={styles.flexItem}>
        <Link href="/" className={styles.box} onClick={onClickLogo} aria-label="홈으로 이동">
          <Image                              // 용량 최적화
            src="/inflearn.png"
            width={110}
            height={20}
            alt="인프런 로고"
          />
        </Link>
      </div>
        {rightElements && <div className={styles.flexItem}>{rightElements}</div>}
    </header>
  );
};

export default Header;