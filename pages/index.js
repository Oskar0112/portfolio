import { Layout } from "@components/Layout";
import SEO from "@components/SEO/SEO";
import { Dashboard } from './dashboard/Dashboard';


export default function Home() {
    return (
        <Layout className="">
            <SEO
                title="Oskar Portfolio🚀"
                description="Discover Oskar Portfolio, Next and Tailwind project for very simple Portfolio."
                keywords="Next and Tailwind"
            />
            <Dashboard />
        </Layout>
    );
}
