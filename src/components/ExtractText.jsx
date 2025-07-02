import { Snippet } from '@heroui/snippet';
import { useEffect, useState } from 'react';
import { createWorker } from 'tesseract.js';
import TestSnippet from './TestSnippet';

const ExtractText = ({ image }) => {
    const [extractedText, setExtractedText] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const extractTextFun = async () => {
            if (!image) {
                alert("No image available for text extraction");
                setIsLoading(false);
                return;
            }
            setIsLoading(true);
            try {
                const worker = await createWorker('eng');
                const res = await worker.recognize(image);
                setExtractedText(res.data.text);
                await worker.terminate();
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };

        extractTextFun();
    }, [image]);

    return (
        <div className="flex flex-col gap-6 rounded-2xl p-2 w-full justify-center items-center">
            {isLoading && <div className="flex justify-center items-center">
                <div className="w-14 h-14 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>}

            {!isLoading && extractedText && image && (
                <TestSnippet text={extractedText} />
            )}
        </div>
    );
};

export default ExtractText;
