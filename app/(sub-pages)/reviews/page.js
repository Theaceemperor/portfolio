
import { ReviewsSection, WriteReview } from "@/app/components/client/ReusableComponents";
import React from "react";


export default function ReviewsPage() {

    return (
        <div>
            <div className="container mx-auto mt-8">
                <h2 className="text-center mb-4 text-xl font-semibold">Our Reviews</h2>
                <ReviewsSection />
            </div>

            <WriteReview />
        </div>
    )
}