import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faShareFromSquare, faLink } from "@/utils/iconLibrary";

export default function NavBar() {
	return (
		<div className="flex flex-row justify-between items-center">
			<Link href="/" className="m-4 text-xl font-bold text-accent">
				{" "}
				<FontAwesomeIcon icon={faLink} className="mx-2" />
				codeshare
			</Link>
			<div className="flex text-dark flex-row gap-8 m-4">
				<button>
					<FontAwesomeIcon
						icon={faShareFromSquare}
						className="mr-2"
					/>
					Share
				</button>
				<Link
					href="/code/new"
					className="border border-[2px] font-bold px-4 py-1 border-solid border-accent text-accent rounded-full flex items-center
					hover:text-white hover:bg-accent transition duration-300 ease-in-out"
				>
					<FontAwesomeIcon icon={faPlus} className="mr-2" />
					New File
				</Link>
			</div>
		</div>
	);
}
