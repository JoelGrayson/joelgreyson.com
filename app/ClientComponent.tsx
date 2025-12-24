'use client';

import { useEffect } from "react";
import localFont from 'next/font/local';
const myriadProBold=localFont({ src: './MyriadProBold.woff2' });

export default function ClientComponent() {
    useEffect(()=>{
        if (typeof window === 'undefined') return;
        
        // Report
        fetch('https://joelgrayson.com/api/log-error/joelgreyson.com', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url: window.location.href }),
        });

        // Redirect
        setTimeout(()=>{
            window.location.href='https://joelgrayson.com'+window.location.pathname;
        }, 3000);
    }, [typeof window]);
    
    return <>
        <style jsx>{`
            body {
                margin: 0;
            }
            .container {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 100vh;
            }
            .row1 {
                font-size: 2rem;
                margin-bottom: 15px;
            }
            .row2 {
                font-size: 3rem;
            }
            .e2a {
                height: 1.65rem;
                display: inline;
                margin: 0;
                margin-left: 0.02em;
                margin-right: 0em;
                /* margin-left: -.15em;
                margin-right: -.15em; */
            }
        `}</style>

        <div className={"container "+myriadProBold.className}>
            <div className="row1">It&apos;s spelled</div>
            <div className="row2">
                <span>Joel </span>
                <span>Gr</span>
                <img src="/e2a.gif" alt="a" className="e2a" />
                <span>yson</span>
            </div>
        </div>
    </>;
}

