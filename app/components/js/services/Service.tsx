import Image from "next/image";
import styles from "./Service.module.scss";
import Link from "next/link";
export default function Services() {
 
  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <div className={styles.display}>
          <div className={styles.img}>
            <Image src={"/assets/images/animate.webp"} alt="" sizes="200" fill />
          </div>
        </div>
        <div className={styles.text}>
        <h2>Looking to unleash your financial potential?</h2>
        <p>{`Join the Longbow family! Explore diverse investment options, from crypto to real estate, all with expert guidance and top-notch security. Enjoy unparalleled convenience and personalized support every step of the way. Open your account today and unlock a world of financial possibilities!`}</p>
        <Link href={"/signup"} className="action">Join Longbow</Link>
        </div>
      </div>
     
    </div>
  );
}
