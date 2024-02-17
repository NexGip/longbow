import { Topper, TopperType } from "@/app/components/js/carousel/Carousel";
import styles from "./styles.module.scss"
import GettingStarted from "@/app/components/js/getting_started/GettingStarted";
import StcokScreen from "@/app/components/js/largescreen/stock_screen";
import { Metadata } from "next";
import { COMPANYNAME } from "@/app/components/js/config";
import Screen from "@/app/components/js/largescreen/Screen";
import Image from "next/image";
export const metadata: Metadata = {
  title: `${COMPANYNAME} | Business Overview`,
  description: `Our business revolves around cryptocurrency, stocks, gold and real estate.`,
};
export default async function Page() {
  const data: TopperType = {
    title: "A Look Inside Longbow Investments",
    image:"/assets/overview.jpg",
    text: [
      "Unveil the core values and principles that guide Longbow as we partner with you to build a secure and prosperous financial future.",
    ],
   
  };
  const content:{text:string;title:string;img:string}[]=[
    {
      img:"/assets/btc.png",
      text:"Longbow Investments has positioned itself as a prominent player in the dynamic world of cryptocurrencies. Through efficient mining operations, the company leverages cutting-edge technology and a strong understanding of blockchain protocols to mine various cryptocurrencies, including Bitcoin, Ethereum, and others. In addition, its adept trading team employs sophisticated algorithms and market analysis to capitalize on the volatility of the cryptocurrency market. To ensure the security of digital assets, Longbow Investments has implemented state-of-the-art storage solutions, emphasizing both offline and online security measures, including cold storage and multi-signature wallets.",
      title:"Cryptocurrency: Mining, Trading, and Storage"
    },
    {
      img:"/assets/stock.jpeg",
      text:"Recognizing the significance of traditional financial markets, Longbow Investments actively engages in the stock exchange, navigating the complexities of global equities, bonds, and derivatives. With a keen eye for promising investment opportunities, the company's seasoned analysts conduct comprehensive research and due diligence to identify undervalued assets and potential growth stocks. Moreover, their adept risk management strategies and diversified portfolio approach contribute to the overall stability and resilience of their investment portfolio.",
      title:"Stock Exchange"
    },
    {
      img:"/assets/gold.webp",
      text:"Longbow Investments has solidified its position in the realm of precious metals by actively participating in gold trading. With a profound understanding of the intricate dynamics of the gold market, the company strategically hedges against market fluctuations, thereby ensuring a steady and secure avenue for wealth preservation and appreciation. Leveraging both physical gold and gold-backed financial instruments, Longbow Investments offers its investors a reliable and stable alternative investment option, particularly during times of economic uncertainty and market volatility.",
      title:"Gold Trading"
    },
    {
      img:"/assets/estate.jpeg",
      text:"Through its strategic real estate investments, Longbow Investments has demonstrated an acute understanding of the intrinsic value of property as a tangible asset. By identifying emerging real estate markets and prime locations, the company has successfully built a diversified portfolio comprising residential, commercial, and industrial properties. Longbow Investments's comprehensive approach to property development, management, and leasing is underpinned by a commitment to sustainable and innovative design, enhancing both the aesthetic appeal and long-term value of its real estate holdings.",
      title:"Real Estate"
    },
  ]

  return (
    <main className={styles.main}>
      <div className={styles.top}>
      <Topper data={data} />
      </div>

     <div className={styles.container}>
      <StcokScreen/>
      <section>
        <p>{`Longbow Investments has emerged as a trailblazer, pioneering a diversified approach to financial growth through its strategic involvement in Cryptocurrency, Stock Exchange, Gold Trading, and Real Estate. With a mission to harness the potential of multiple lucrative sectors, Longbow Investments has garnered attention for its innovative strategies, robust risk management, and a commitment to maximizing returns for its stakeholders. Let's delve deeper into each of its primary domains:`}</p>
        <div className={styles.grid}>
{content.map((e,i)=>(
  <div className={styles.item} key={i}>
  <div className={styles.img}>
<Image src={e.img} alt={e.title} fill/>
  </div>
  <div className={styles.text}>
<h2>{e.title}</h2>
<p>{e.text}</p>
  </div>
  </div>
))}
        </div>

        <p>{`Overall, Longbow Investments's multifaceted business approach, encompassing Cryptocurrency, Stock Exchange, Gold Trading, and Real Estate, showcases its unwavering commitment to maximizing profits for its stakeholders while mitigating potential risks. With a strong emphasis on technological innovation, prudent risk management, and in-depth market insights, Longbow Investments stands as a beacon of excellence in the global financial landscape, poised to navigate the ever-changing tides of the economic world.`}</p>
      </section>
     <GettingStarted />
     <Screen/>
     </div>
    </main>
  );
}
