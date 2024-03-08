
import { FAQ, ReviewsSection, WriteReview } from "@/components/ReusableComponents";
import Link from "next/link";
import React from "react";


export default function ReviewsPage() {
    
    const faqData = [
        { question: 'What is the mission of your organization?', answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa soluta illo, qui quos earum corporis repellendus!' },
        { question: 'How is the pricing calculated?', answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa soluta illo, qui quos earum corporis repellendus!' },
        { question: 'How can i track my development?', answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa soluta illo, qui quos earum corporis repellendus!' },
        { question: 'Can i get a custom development?', answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa soluta illo, qui quos earum corporis repellendus!' },
        { question: 'What if the solution i want is not available and i have no prior idea?', answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa soluta illo, qui quos earum corporis repellendus!' },
        { question: 'Can i make use of your already built solution?', answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa soluta illo, qui quos earum corporis repellendus!' },
        { question: 'How can i contact?', answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa soluta illo, qui quos earum corporis repellendus!' },
        { question: 'I am just an individual, can i get a website?', answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa soluta illo, qui quos earum corporis repellendus!' },
        { question: 'Are you hiring?', answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa soluta illo, qui quos earum corporis repellendus!' },
        { question: 'How do i use your gift cards?', answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa soluta illo, qui quos earum corporis repellendus!' },
        { question: 'What additional services do you offer?', answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa soluta illo, qui quos earum corporis repellendus!' },
        { question: 'Is my data secure?', answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa soluta illo, qui quos earum corporis repellendus!' },
        { question: 'Will my source code be public?', answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa soluta illo, qui quos earum corporis repellendus!' },
    ]

    return (
        <div>
            <div className="container mx-auto mt-8">
                <h2 className="text-center mb-4 text-xl font-semibold">Our Reviews</h2>
                <ReviewsSection />
            </div>

            <WriteReview />

            {/* FAQ Section */}
            <section id="faq" className="mt-8 px-2">
                <h3 className="text-xl sm:text-2xl font-bold mb-4"><Link href={'#faq'} className={"flex items-center capitalize hover:text-amber-600"}>Frequently asked questions</Link></h3>

                {/* FAQ Questions & Answers */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* FAQ Question 1 */}
                    {faqData.map((faqItem, index) => 
                        <FAQ key={index} question={faqItem.question} answer={faqItem.answer} />
                    )}
                </div>
            </section>
        </div>
    )
}