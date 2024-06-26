const zeptomail = require("zeptomail");
const { SendMailClient } = zeptomail;
import { MailProp } from "./dataTypes";
import { COMPANYNAME } from "./config";

export const sendMassMail = async (
  details: MailProp,
  sender: { name: string; email: string } = {
    name: "Longbow Investment",
    email: "support@longbowltd.com",
  }
) => {
  const date = new Date().getFullYear();
  const logo = `https://firebasestorage.googleapis.com/v0/b/storer-268bd.appspot.com/o/Longbow%2Fcorporate%2Flogo.png?alt=media&token=f3bd8440-a316-45ba-9dbf-1666d8b31210`;
  const image = `https://firebasestorage.googleapis.com/v0/b/storer-268bd.appspot.com/o/Longbow%2Fcorporate%2Fcrypto.webp?alt=media&token=6a28cf39-62e6-4ea4-8da3-58eac2b2942e`;

  try {
    const { emails: emailz, showImage } = details;

    const emails = emailz.length <= 150 ? emailz : emailz.slice(0, 150);
    const url = "api.zeptomail.com/";
    const token =
      "Zoho-enczapikey wSsVR61x/h/4D/h0lGGqc+dqm1tcAQ6iQUos2Vuo7CD8G6zA9Mc9nxXPV1f0G6IWF2A4HTtA9rwvzktShjoKj44kmVpWXiiF9mqRe1U4J3x17qnvhDzKVmRYlBaNLYsOzw5jn2loFctu";

    const client = new SendMailClient({ url, token });

    if (emails.length < 5) {
      for (let i = 0; i < emails.length; i++) {
        const mail = emails[i];
        const message = `<div style="background-color:#d1d1d1;color:#000012; padding: 0px 5%;font-family: Open Sans, sans-serif ">

        <div style="width: 100%; box-sizing: border-box;text-align:center;   padding:12px;">
           <img
             src="${logo}"
             alt="longbowltd.com"
            style="width: 150px; height:50px; object-fit:contain"/>
            </div>
           ${
             showImage
               ? ` <div style="width: 100%; box-sizing: border-box;">
             <img
             src="${image}"
            style="width: 100%; height:250px; object-fit:cover; object-position:center"/>
            </div>`
               : ""
           }
       
            <div style="padding: 24px; background:#000000;color:#ffffff;font-size:0.9rem">
            
            <h2 style="font-size:1rem; font-weight:600; color:#fdee86">Hello ${
              mail.username.slice(0, 1).toUpperCase() + mail.username.slice(1)
            },</h2>
            
            ${mail.messageData}
            </div>
          
          <div
            style="
            box-sizing: border-box;
              width: 100%;
              padding: 12px;
              font-size: 0.9rem;"
          >
            <p>For questions and support, please mail us  at <a href="mailto:support@longbowltd.com" style="color:inherit;text-decoration:none;">support@longbowltd.com</a></p> <p style="text-decoration:none; color:inherit; ">${
              process.env.NEXT_PUBLIC_SERVER_URL
            }</p>
      <p>&copy; ${date} <a style="text-decoration:none; color:inherit;">longbowltd.com</a> All Rights Reserved</p>
          </div> </div>`;

        await client.sendMail({
          from: {
            address: sender.email,
            username: sender.name,
          },
          to: [
            {
              email_address: {
                address: mail.email.email,
                username: mail.email.name,
              },
            },
          ],
          subject: mail.subject,
          htmlbody: message,
        });
      }
    } else {
      const message = `<div style="background-color:#d1d1d1;color:#000012; padding: 0px 5%;font-family: Open Sans, sans-serif ">

      <div style="width: 100%; box-sizing: border-box;text-align:center;   padding:12px;">
         <img
           src="${logo}"
           alt="${COMPANYNAME}"
          style="width: 150px; height:50px; object-fit:contain"/>
          </div>
         ${
           showImage
             ? ` <div style="width: 100%; box-sizing: border-box;">
           <img
           src="${image}"
          style="width: 100%; height:250px; object-fit:cover; object-position:center"/>
          </div>`
             : ""
         }
     
          <div style="padding: 24px; background:#000000;color:#ffffff;font-size:0.9rem">
          
          <h2 style="font-size:1rem; font-weight:600; color:#fdee86">Dear Esteemed client,</h2>
          
          ${emails[0].messageData}
          </div>
        
        <div
          style="
          box-sizing: border-box;
            width: 100%;
            padding: 12px;
            font-size: 0.9rem;"
        >
          <p>For questions and support, please mail us  at <a href="mailto:support@longbowltd.com" style="color:inherit;text-decoration:none;">support@longbowltd.com</a></p> <p style="text-decoration:none; color:inherit; ">${
            process.env.NEXT_PUBLIC_SERVER_URL
          }</p>
    <p>&copy; ${date} <a style="text-decoration:none; color:inherit;">longbowltd.com</a> All Rights Reserved</p>
        </div> </div>`;
      await client.sendMail({
        from: {
          address: sender.email,
          username: sender.name,
        },
        to: emails.map((e) => ({
          email_address: {
            address: e.email.email,
            username: e.email.name,
          },
        })),
        subject: emails[0].subject,
        htmlbody: message,
      });
    }
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export default sendMassMail;
