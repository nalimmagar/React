// RandomNumberAsync.jsx
import { Suspense } from 'react';

// Async function component (experimental)
async function RandomNumberAsync() {
    const number = await getNumber();
    
    return (
        <div>
            The random number is: {number}
        </div>
    );
}

// Wrapper component
export default function RandomNumberWrapper() {
    return (
        <Suspense fallback={<div>Loading random number...</div>}>
            <RandomNumberAsync />
        </Suspense>
    );
}

function getNumber() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 100) + 1;
            resolve(randomNumber);
        }, 2000);
    });
}