"use client";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
const accordionData = [
  {
    title: "What is the Pay4Me App?",
    content: "The Pay4Me App is a digital payment platform that allows users to send and receive payments seamlessly. It simplifies cross-border transactions, bill payments, and online purchases, offering a secure, fast, and user-friendly experience for individuals and businesses",
  },
  {
    title: "What is the payment processing timeline on the Pay4Me App?",
    content: "The Pay4Me App processes card payments and wallet transfers instantly, while bank transfers take minutes to hours. International transactions may take 24–48 hours, depending on banks and regulatory approvals. ",
  },
  {
    title: "How does the Pay4Me App work?",
    content: "The Pay4Me App allows users to make payments, send money, and complete transactions securely. It supports cards, bank transfers, and wallets, ensuring fast, seamless, and reliable cross-border and local payments. ",
  },
  {
    title: "How do I get started using the Pay4Me App?",
    content: "Download the Pay4Me App, sign up, and verify your account. Add a payment method (card, bank, or wallet), then start making secure local and cross-border payments instantly and seamlessly.",
  },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-[732px] h-[464px] px-[40px] border border-[#D8D8D8] rounded-[24px] bg-[#FCFCFC] m-auto">
      {accordionData.map((item, index) => (
        <div key={index} className="border-b border-gray-300">
          <button
            className="w-full flex justify-between h-[115px] items-center p-4 text-left text-[14px] sm:text-[20px] text-[#2F2F2F] font-medium"
            onClick={() => toggleAccordion(index)}
          >
            {item.title}
            {openIndex === index ?  <FaMinus /> : <FaPlus />}
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-40 p-4" : "max-h-0 p-0"
            }`}
          >
            <p className="text-[#2F2F2F] text-[12px] sm:text-[16px]">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
