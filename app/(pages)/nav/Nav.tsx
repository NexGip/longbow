"use client";
import styles from "./Nav.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useUserContext } from "@/app/components/js/Wrapper";
import Translator from "@/app/components/js/translate/Translator";
import Ticker from "@/app/components/js/ticker/Ticker";
import { useSearchParams } from "next/navigation";

interface LinkType {
  text: string;
  link: string;
}
const RefDiv=()=>{
  const {  setReferredBy } = useUserContext();
  const searchParams = useSearchParams();
  const referralID = searchParams.get("referralID");
  useEffect(() => {
    if (referralID) setReferredBy(referralID);
  }, [referralID]);
  return <></>
}
const Nav: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const { user, } = useUserContext();

  const topLinks: LinkType[] = [
    {
      text: "Login",
      link: "/login",
    },
    {
      text: "Signup",
      link: "/signup",
    },
  ];
  const centerLinks: LinkType[] = [
    {
      text: "About",
      link: "/about",
    },
    {
      text: "Business Overview",
      link: "/business_overview",
    },
    {
      text: "Investment",
      link: "/investments",
    },

    {
      text: "Payouts",
      link: "/withdrawals",
    },
    {
      text: "Buy Crypto",
      link: "/buy_crypto",
    },
    {
      text: "Sustainability",
      link: "/sustainability",
    },
  
    {
      text: "Contact Us",
      link: "/help",
    },
  ];

  useEffect(() => {
    const toggleShow = () => {
      const anchor = document.querySelectorAll("a");
      anchor.forEach((a) => {
        if (!a.href.includes("#"))
          a.addEventListener("click", () => {
            setShow(false);
          });
      });
    };
    return toggleShow();
  }, []);

  return (

    <nav className={styles.nav}>
      <Suspense>
        <RefDiv/>
      </Suspense>
   <div className={styles.top}>
<div className={styles.logoGroup}>
<Link href={"/"} className={styles.logo}>
            <Image src={"/logo.png"} fill alt="logo" />
          </Link>
          <div className={styles.menuIcon} onClick={() => setShow(!show)}>
            {show ? (
              <AiOutlineClose className={styles.icon} />
            ) : (
              <HiMenuAlt3 className={styles.icon} />
            )}
          </div>
</div>
<div className={styles.links}>
      
        <div className={styles.linkTop}>
          {!user ? (
            topLinks.map((e, i) => (
              <Link href={e.link} key={i}>
                {e.text}
              </Link>
            ))
          ) : (
            <Link href={"/dashboard"} className={styles.account}>
              {user.username.slice(0, 2).toUpperCase()}
            </Link>
          )}
          <span className={styles.trans}>
            <Translator />
          </span>
        </div>
     
      <div className={`${styles.center} ${show ? "" : styles.hide}`}>
        <div className={styles.upper}>
          {centerLinks.map((e, i) => (
            <Link href={e.link} key={i}>
              {e.text}
            </Link>
          ))}
        </div>
      </div>
</div>
   </div>
      <div className={styles.bottom}>
        <Ticker theme="dark" />
      </div>
    </nav>

  );
};

export default Nav;
