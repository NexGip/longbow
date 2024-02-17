"use client"
import { useSlideUp } from "../useslider";
import styles from "./speed.module.scss";
import Image from "next/image";
export default function Speed() {
  const keys: { title: string; image: string;text:string }[] = [
    {
      title: "Effortless Investing",
      image:"/assets/convenience.jpg",
      text:" Experience unparalleled convenience with our user-friendly interface and seamless navigation. Manage your investments, track performance, and access market insights – all at your fingertips."
    },
    {
      title: "Embrace the Future of Finance",
      image:"/assets/crypto.webp",
      text:"Dive into the exciting world of cryptocurrency trading with expert guidance and secure transactions. Unlock the potential of this innovative asset class with confidence."
    },
    {
      title: "Empower Your Mining Journey",
      image:"/assets/mining.jpg",
      text:"Explore empowering mining opportunities for various cryptocurrencies. Leverage our resources and support to navigate the intricacies of mining and maximize your returns."
    },
    {
      title: "Gold Standard, Diversified Portfolio",
      image:"/assets/gold.webp",
      text:"Secure your investments with the stability and tradition of gold trading. We offer competitive rates and secure storage solutions to diversify your portfolio."
    },
    {
      title: "Conquer the Stock Market",
      image:"/assets/stock.jpeg",
      text:"Access a vast array of stocks across diverse industries and regions. Utilize our analytical tools and expert insights to make informed investment decisions and capitalize on market movements."
    },
    {
      title: "Brick-and-Mortar Stability",
      image:"/assets/estate.jpg",
      text:" Invest in real estate and infrastructure projects, generating consistent returns and contributing to sustainable development. Explore a range of carefully curated opportunities that match your risk profile."
    },
    {
      title: "Chart Your Course to Success",
      image:"/assets/strategy.jpeg",
      text:"Uncover strategic investment opportunities tailored to your unique goals and aspirations. Our team of financial advisors provides personalized guidance to help you chart your path to financial freedom."
    },
    {
      title: "Safety First",
      image:"/assets/security.png",
      text:"Enjoy peace of mind with our top-notch security measures. We employ cutting-edge technology and industry-leading practices to safeguard your assets and transactions."
    },
    {
      title: "Always by Your Side",
      image:"/assets/support.jpeg",
      text:"Receive personalized support at every step of your investment journey. Our dedicated team is readily available to answer your questions, address your concerns, and provide expert assistance."
    },
    
   
  ];
  useSlideUp(["keys"])
  return (
    <div className={styles.main}>
      <div className={styles.top}>
       <h1>Unveiling Longbow&apos;s Investment Platform</h1>
       <p>Your Gateway to Financial Growth</p>
      </div>
      <div className={styles.lower} id="keys">
        
        
          {keys.map((e, i) => (
            <div key={i} className={styles.key}>
              <p className={styles.title}>{e.title}</p>
             <div className={styles.images}>
              <Image src={e.image} alt={e.title} fill/>
             </div>
             <p>{e.text}</p>
            </div>
          ))}
        
      </div>
    </div>
  );
}
