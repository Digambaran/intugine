import Image from "next/image";
import {Card, JoinedCards , CardWithDividers} from "@/app/ui/card";
import "@/app/globals.css";
export default function Home() {
	return (
    <>
    <Card>
      <h1>Hellow</h1>
    </Card>
    <CardWithDividers>
      <p>asdasdasd</p>
      <p>asdasdasd</p>
      <p>asdasdasd</p>
    </CardWithDividers>
		<JoinedCards>
			<h3>Hello</h3>
			<h1>h3llll</h1>
		</JoinedCards>
    </>
	);
}
