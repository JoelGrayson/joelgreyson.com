'use client';

import { useEffect } from "react";
import localFont from 'next/font/local';
const myriadProBold=localFont({ src: './MyriadProBold.woff2' });

export default function ClientComponent() {
    useEffect(()=>{
        if (typeof window === 'undefined') return;
        
        // Report
        const body = { url: window.location.href };
        console.log('Body', body);
        fetch('https://joelgrayson.com/api/log-error/joelgreyson.com', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });

        // Redirect
        setTimeout(()=>{
            window.location.href='https://joelgrayson.com'+window.location.pathname;
        }, 3000);
    }, [typeof window]);
    
    return <div className={myriadProBold.className} style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw'
    }}>
        <div style={{
            fontSize: '2rem',
            marginBottom: 15
        }}>It&apos;s spelled</div>

        <div style={{
            fontSize: '3rem',
        }}>
            <span>Joel </span>
            <span>Gr</span>
            <img src="/e2a.gif" alt="a" style={{
                height: '1.65rem',
                display: 'inline',
                margin: 0,
                marginLeft: '0.02em',
                marginRight: '0em',
            }} />
            <span>yson</span>
        </div>
    </div>;
}

