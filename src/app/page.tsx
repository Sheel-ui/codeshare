import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPenToSquare, faTrash } from "@/utils/iconLibrary";
import { db } from "@/db/db";

export default async function Home() {
	const codes = await db.code.findMany();

	const renderedCode = codes.map((code) => {
		return (
			<div
				key={code.id}
				className="p-2 text-ash border border-ash-100 rounded-lg transition duration-300
      cursor-pointer  hover:shadow-inner w-1/3 flex justify-between items-center"
			>
				<div>
					<Link href={`/code/${code.id}`}>{code.title}</Link>
				</div>
				<div className="text-xs">
					<Link
						href={`/code/${code.id}/edit`}
						className="pr-6 text-green-500 hover:text-green-700"
					>
						<FontAwesomeIcon
							icon={faPenToSquare}
							className="mr-1"
						/>
						Edit
					</Link>
					<span className="pr-2 text-red-500 hover:text-red-700">
						<FontAwesomeIcon icon={faTrash} className="mr-1" />
						Delete
					</span>
				</div>
			</div>
		);
	});

	return (
		<div>
			<div className="flex flex-col items-center pt-16">
				<h1 className="font-bold text-5xl mb-2">
					Share Code with developers⚡️
				</h1>
				<p className="text-ash text-lg w-1/2 text-center m-4">
					Codefile is a collaborative online code editor for technical
					interviews, pair programming, teaching... you name it.
				</p>
				<Link
					href="/code/new"
					className=" mt-4 bg-accent text-white px-6 py-3 rounded-full flex items-center transform transition-transform duration-300 hover:-translate-y-1.5"
				>
					<FontAwesomeIcon icon={faPlus} className="mr-2" />
					New File
				</Link>
				<p className="mt-2 text-ash text-sm">
					No sign up. Free. Forever ❤️
				</p>
			</div>

			<div className="flex flex-col items-center gap-1 mt-12">
				{renderedCode}
			</div>
		</div>
	);
}
