import { Outlet } from "react-router-dom";
import Layout from "../layout";
import Card from "../components/card";
import Sort from "../components/sort";

export default function Root() {
    return (
        <Layout>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
                {
                    Array.from({ length: 1 }, (_, index) => index).map(
                        v => (
                            <Card key={v}>
                                <Sort range={10} />
                            </Card>
                        )
                    )
                }
            </div>
            <Outlet />
        </Layout>
    )
}