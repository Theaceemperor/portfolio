'use client'

import React, { Suspense } from "react";

export default function FetchDoc({ doc }) {
    const [ codeContent, setCodeContent ] = React.useState('');

    React.useEffect(() => {
        //Fetch code content from an API endpoint or file
        const fetchData = async () => {
            try {
                const response = await fetch(doc);
                const data = await response.text();
                setCodeContent(data);
            } catch (error) {
                console.error('Error fetching code content:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <Suspense fallback={
            <div className="flex items-center justify-center p-4">
                <p className="text-lg animate-pulse">Please wait, loading content...</p>
            </div>
        }>
            <div dangerouslySetInnerHTML={{ __html: codeContent }} className="flex flex-col space-y-4" />
        </Suspense>
    )
}