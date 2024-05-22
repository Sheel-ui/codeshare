import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faShareFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

export default function NavBar() {
	return (
		<div className="flex flex-row justify-between items-center">
			<div className="m-4 text-xl font-bold text-accent"> <FontAwesomeIcon icon={faLink} className="mx-2"/>codeshare</div>
			<div className="flex flex-row gap-8 m-4">
				<button>
					<FontAwesomeIcon icon={faShareFromSquare} className="mr-2" />
					Share
				</button>
				<Link
					href="/code/new"
					className="border border-[2px] font-bold px-4 py-1 border-solid border-accent text-accent rounded-full flex items-center"
				>
					<FontAwesomeIcon icon={faPlus} className="mr-2" />
					New File
				</Link>
			</div>
		</div>
	);
}
