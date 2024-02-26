import handleProtected from "@/app/components/js/reuseables";
import Body from "./body";
import { getRequest } from "@/app/components/js/api_client";
import { transactionUrl } from "@/app/components/js/config";
import { TransactionResponseType } from "@/app/components/js/dataTypes";
const getData = async (token: string) => {
  const { data: transactions } = await getRequest(transactionUrl, token);
  let deposits=0;
  let withdrawals=0;
  transactions.forEach((e:TransactionResponseType)=>{
if(e.status==1){
  deposits+=e.type==1?e.amount:0
  withdrawals+=e.type==0?e.amount:0
}
  });

  return {
    transactions: transactions || [],
    total:{deposits,withdrawals}
  };
};

export default async function Page() {
  const token = await handleProtected(false);
  const { transactions,total } = await getData(token);
  return <Body transactionz={transactions} total={total} />;
}
