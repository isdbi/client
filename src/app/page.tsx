import { Button } from "@/components/ui/button";
import { Link } from "next-view-transitions";

export default function Home() {
	return (
		<div className="">
			<h1>Landing page</h1>
			<Link href={"/tracks"}>
				<Button>Go to tracks</Button>
			</Link>
		</div>
	);
}
