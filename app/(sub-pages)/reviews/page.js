
import { FAQ, ReviewsSection, WriteReview } from "@/components/ReusableComponents";
import Link from "next/link";
import React from "react";


export default function ReviewsPage() {
    
    const faqData = [
        { question: 'What is the mission of Spades?', answer: 'Our mission is to provide easily accessible fast, reliable, and streamlined web services to small businesses and institutions as fast as possible.' },
        { question: 'How is development pricing calculated?', answer: "Our developments are charged based on number of page routes, functional/reuseable components, api routes, dynamic routes, overall build-up, as well as a standard license fee. Please contact us for more questions and clarification" },
        { question: 'How can i track my development?', answer: "Sign Up for a Spades Dev account with your details, once the development begins, you'll be able to track the progress on your dashboard, as well as view a live program update." },
        { question: 'Can i get a custom development?', answer: "Yes, our development options are flexible." },
        { question: 'What if the solution i want is not available and i have no prior idea?', answer: "Our ever committed team is always available to structure a solution that aligns with your needs and custom specifications" },
        { question: 'Can i make use of Spades already built solution?', answer: "Yes, our solutions are available for you to own or pitch to investors. We offer a way to begin your business ownership or investment from 0. Contact us now!" },
        { question: 'How can i contact?', answer: "Contact Spades via our contact page, or any available contact means on our website; that includes social media or email." },
        { question: 'I am just an individual, can i get a website?', answer: "Yes, we build solutions for individuals, small businesses and institutions; from personal websites to Ecommerce platforms, we have you covered!" },
        { question: 'Are you hiring?', answer: "At the moment, we are only hiring result backed marketers and sales agents." },
        { question: 'How do i use your gift cards?', answer: "At the moment, Spades Gift cards can only be used to purchase our services. We are working on a way for you to redeem our gift cards independently without purchasing a service." },
        { question: 'What additional services do you offer?', answer: "Please look through the services section on our about page and look through our free tools also to see amazing tools and softwares you can use for free." },
        { question: 'Is my data secure?', answer: "Yes, your data is secure; on our platform and on our built programs, we ensure high security and reliability. We make use of frequently updated mordern technologies to secure our programs and data." },
        { question: 'Will my source code be public?', answer: "No! For client software protection purposes and design uniqueness, we do not make our github source codes public. Execept stated otherwise by our clients for their custom developments." },
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
                        <FAQ key={index} data={faqItem} />
                    )}
                </div>
            </section>
        </div>
    )
}