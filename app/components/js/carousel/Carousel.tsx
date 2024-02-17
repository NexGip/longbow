"use client"

import styles from "./Carousel.module.scss";

import Link from "next/link";
import useCarousel from "../usecarousel";
import Image from "next/image";

const Carousel: React.FC = () => {
  const texts:{title:string;texts:string[]}[]=[
    {
      title:`Your Future is with Longbow Investments.`,
      texts:["Invest with confidence and let your wealth flourish. Longbow, Thailand's trusted investment partner, offers profitable opportunities for everyone."]
    },
    {
      title:`Discover Investment Packages Designed for You.`,
      texts:["From beginners to seasoned investors, Longbow provides personalized investment options to match your goals and risk tolerance."]
    },
    {
      title:`Achieve Sustainable Growth with Our Expertise.`,
      texts:["Our experienced team leverages in-depth market knowledge and data-driven strategies to maximize your returns."]
    },
    {
      title:`Join a Community of Success`,
      texts:["Become part of our thriving community of satisfied clients and unlock your full financial potential with Longbow's guidance."]
    },
    
]

  useCarousel({parentId:"content",indicatorId:"indicator"})
  return (
    <div className={styles.holder}>
      <div className={styles.carousel} id="carousel">
        <div className={styles.image}>
         <Image src={"/assets/images/banner.png"} alt="" fill/>
        </div>
        <div id="box" className={styles.box}>
        <div id="content" className={styles.content}>
   {texts.map((e,i)=>(
         <div className={styles.text} key={i}>
         
         <h1>{e.title}</h1>

        {e.texts.map((c,i)=>(
           <p key={i}
           className={styles.smText}
         >{c}</p>
        ))}

         <div className={styles.links}>
           <Link href="/signup">Create Account</Link>
           <Link href="/about">About Us</Link>
         </div>
       </div>
   ))}
        </div>
        <div id="indicator" className={styles.indicator}>
          {texts.map((e,i)=>(
            <span key={i}></span>
          ))}

        </div>

        </div>
      </div>
    </div>
  );
};

export interface TopperType {

  title: string;
  image:string;
  text: string[];
}
interface TopperProp {
  data: TopperType;
}
export const Topper: React.FC<TopperProp> = ({ data }) => {
  return (
    <div className={`${styles.holder} ${styles.topper}`}>
      <div className={`${styles.carousel} `}>
      <div className={styles.image}>
         <Image src={data.image} alt="" fill/>
        </div>
        

        <div className={styles.box}>
        <div className={styles.content}>
        <div className={styles.text}>
          <h1>{data.title}</h1>

          {data.text.map((e, i) => (
            <p className={styles.smText} key={i}>
              {e}
            </p>
          ))}
        </div>
      </div>
      
          
      
    </div>
    </div>
    
    </div>
  );
};

export default Carousel;
