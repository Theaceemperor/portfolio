import React from 'react';
import { PaystackButton } from 'react-paystack';
import { db } from '@/settings/firebase.settings';
import { addDoc, collection } from 'firebase/firestore';

export default function Payment ({ email, amount, name, phone, orderDetails, onCloseFunction, successFunction }) {
  const publicKey = 'pk_live_1fdcb84e34588af9002bb01e1a7312404666d386';

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      {
        const handleSendOrder = async () => {
          await addDoc(collection(db,'gift-orders'),{
            ...orderDetails
          }).then(successFunction).catch((e) => console.error(e))
        }; 
        handleSendOrder();
      },
    onClose: onCloseFunction,
  };


  return (
    <PaystackButton label='Spades Gift Card' className="bg-black text-amber-600 rounded px-4 py-1 mt-4" {...componentProps} />
  );
};
// import { PaystackButton } from 'react-paystack';

// const Payment = ({ amount, onSuccess, onClose }) => {
//   const publicKey = 'pk_live_1fdcb84e34588af9002bb01e1a7312404666d386';

//   const [email, setEmail] = useState('');

//   const config = {
//     reference: new Date().getTime(),
//     email,
//     amount: amount * 100, // Paystack uses amount in kobo (1 NGN = 100 kobo)
//     publicKey,
//   };

//   const callback = (response) => {
//     // Handle the response from Paystack
//     if (response.status === 'success') {
//       onSuccess(response);
//     } else {
//       onClose();
//     }
//   };

//   return (
//     <div>
//       <input
//         type="email"
//         placeholder="Enter your email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <PaystackButton
//         text="Make Payment"
//         class="payButton"
//         callback={callback}
//         close={onClose}
//         disabled={false}
//         embed={false}
//         reference={config.reference}
//         email={config.email}
//         amount={config.amount}
//         paystackkey={config.publicKey}
//         tag="button"
//       />
//     </div>
//   );
// };

// export default Payment;
// components/Payment.js