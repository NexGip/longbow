import { Topper, TopperType } from "@/app/components/js/carousel/Carousel";
import Payouts from "./payouts";

export default function WithdrawalPage() {
  const data: TopperType = {
    image:"/assets/btc.png",
    text: ["Stay informed on Longbow's recent activities and financial updates. Explore recent withdrawals and their impact on the company's performance."],
    title: "Recent withdrawals",
    
  };
  return (
    <div>
      <Topper data={data} />
      <Payouts />
    </div>
  );
}
