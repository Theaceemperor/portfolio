'use client'

import React from "react";

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
        <div dangerouslySetInnerHTML={{ __html: codeContent }} className="flex flex-col space-y-4 leading-7" />
    )
}