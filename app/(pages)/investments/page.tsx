import { Topper, TopperType } from "@/app/components/js/carousel/Carousel";
import styles from "./styles.module.scss";
import { getRequest } from "@/app/components/js/api_client";
import { investmentPlanUrl } from "@/app/components/js/config";
import { InvestmentPlanResponseType } from "@/app/components/js/dataTypes";
import Link from "next/link";
const fetchData = async () => {
  try {
    const data = await getRequest(investmentPlanUrl);
    return  data?.data || [] ;
  } catch (error) {
    return [];
  }
};
export const revalidate=20;

export default async function Page() {
  const pl = (await fetchData()) as InvestmentPlanResponseType[];
  const plans = pl || [];
  const data: TopperType = {
    image:"/assets/invest.png",
    title: "Invest for Tomorrow, Grow with Confidence",
    text: [
      "Explore a world of possibilities that go beyond traditional stocks and bonds. Discover innovative opportunities in cryptocurrency, precious metals like gold, real estate projects, and much more. Our expert team provides in-depth market analysis, strategic insights, and tailored investment plans to empower you to make informed decisions and navigate the financial landscape with confidence.",
    ],
   
  };
  const texts: { title: string; texts: string[] }[] = [
    {
      title: "Diversified Portfolio Management",
      texts: [
        "Longbow strategically diversifies investments across multiple asset classes, including cryptocurrencies, stocks, gold, and real estate. By carefully managing asset allocation, we aim to optimize returns while minimizing risks for our clients.",
      ],
    },
    {
      title: "Data-Driven Investment Decisions",
      texts: [
        "Our team of expert analysts and data scientists conducts comprehensive market research and analysis, leveraging advanced data analytics and technology to make informed investment decisions that drive profitable outcomes.",
      ],
    },
    {
      title: "Strategic Positioning in Cryptocurrency",
      texts: [
        "With a profound understanding of the cryptocurrency market, Longbow leverages market volatility and growth potential. Our experienced traders and advanced algorithms enable us to strategically position investments for maximum returns while effectively managing associated risks.",
      ],
    },
    {
      title: "Value-Based Stock Investments",
      texts: [
        "Longbow identifies undervalued stocks and promising companies through meticulous research and fundamental analysis. Our investment experts closely monitor market trends, ensuring that our clients benefit from investment opportunities aligned with their financial goals.",
      ],
    },
    {
      title: "Optimized Gold Trading Strategies",
      texts: [
        "Drawing on our expertise in the gold market, Longbow implements optimized trading strategies to capitalize on market fluctuations and price movements. Our diligent monitoring of global economic trends and geopolitical developments ensures timely and strategic decisions in gold trading.",
      ],
    },
    {
      title: "Sustainable Real Estate Investments",
      texts: [
        "Longbow focuses on sustainable projects with long-term growth potential. Our emphasis on investing in properties that offer value appreciation and stable returns ensures that our clients benefit from a resilient and diversified investment portfolio.",
      ],
    },
   
    {
      title: "Where you come in",
      texts: [
        `In order to remain a top force in the industry, Longbow must manage these operational costs. We use the capital you invest to maintain our operations and distribute the total profits earned from the investments.`,
      ],
    },
  ];
  function ShowText({ name, value }: { name: string; value: string }) {
    return (
      <div>
        <p>{value}</p>
        <span>{name}</span>
      </div>
    );
  }
  return (
    <main>
      <Topper data={data} />
      <div className={styles.main}>
        <section className={styles.container}>
          <p>{`Welcome to Longbow Investments, your gateway to a diverse range of investment opportunities designed to help you grow your wealth and secure your future. Whether you're a seasoned investor or just starting out, we offer a comprehensive platform and personalized guidance to match your aspirations and risk tolerance.`}</p>
          {texts.map((e, i) => (
            <div className={styles.content} key={i}>
              <h3>{e.title}</h3>
              <ul>
                {e.texts.map((e, k) => (
                  <li key={k}>{e}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
        <section className={styles.box}>
          <h1>INVESTMENT PLANS</h1>
          <div className={styles.plans}>
            {plans.map((plan) => (
                <div className={styles.plan} key={plan._id}>
                  <div className={styles.top}>
                    <p>
                      {`${(
                        (plan.interest * 100) /
                        plan.duration
                      ).toFixed(2)}%`}
                    </p>
                    <span>Daily Profit</span>
                  </div>
                  <span className={styles.name}>{plan.name.toUpperCase()}</span>
                  <ShowText
                    name="Minimum Deposit"
                    value={`$${plan.minimum.toLocaleString("USA")}`}
                  />
                  <ShowText
                    name="Maximum Deposit"
                    value={`$${plan.maximum.toLocaleString("USA")}`}
                  />
                  <ShowText
                    name="Contract Duration"
                    value={`${plan.duration.toLocaleString("USA")} Day(s)`}
                  />
                  <ShowText
                    name="Referral Bonus"
                    value={`${plan.refCommission.toLocaleString("USA")}%`}
                  />
                  <Link
                    href={"/dashboard/invesments/invest"}
                    className="action"
                  >
                    Invest
                  </Link>
                </div>
              ))}
        
          </div>
        </section>
      </div>
    </main>
  );
}
