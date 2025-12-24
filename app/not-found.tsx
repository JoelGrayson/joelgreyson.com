import { Metadata } from "next";
import ClientComponent from "./ClientComponent";

export const metadata: Metadata = {
    title: 'Joel GrAyson with an A',
    description: 'This page is to redirect those who spelled my name wrong'
};

export default function Home() {
    return <div>
        <ClientComponent />
    </div>;
}

