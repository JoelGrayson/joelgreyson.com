/*
The problem with this app setup is I can't get the URL correctly
*/

export default function Page({ params }: { params: { slug: string[] } }) {
    const url=params.slug.join('/');

    fetch('https://joelgrayson.com/api/log-error/joelgreyson.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url })
    });

    return <>
        <div className="container">
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
