import Layout from "../layout";
import Card from "../components/card";
import Sort from "../components/sort";
import algos from "../lib/algos"

export default function Root() {
    return (
        <Layout>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                {
                    algos.map(
                        (algo) => (
                            <Card key={algo.title}>
                                <Sort {...algo} range={10} />
                            </Card>
                        )
                    )
                }
            </div>
        </Layout>
    )
}