import Layout from "../layout";
import Sort from "../components/sort";
import bubbleSort, { href } from "../lib/algos/bubbleSort";
import Card from "../components/card";

export default function BubbleSort() {
    return (
        <Layout>
            <Card>
                <Sort sort={bubbleSort} href={href} title="Bubble Sort" />
            </Card>
        </Layout>
    )
}