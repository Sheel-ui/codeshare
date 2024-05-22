import { db } from "@/db/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import { faTrash, faPenToSquare } from "@/utils/iconLibrary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface CodeProps {
	params: {
		id: string;
	};
}

export default async function ViewCode(props: CodeProps) {
	const result = await db.code.findFirst({
		where: { id: parseInt(props.params.id) },
	});

	if (!result) {
		return notFound();
	}
	return (
		<div className="flex flex-col items-center">
			<div className="flex flex-row justify-between items-center w-1/2 px-2">
				<h1 className="capitalize">{result.title}</h1>
				<div className="text-xs">
					<Link
						href={`/code/${result.id}/edit`}
						className="pr-6 text-green-500 hover:text-green-700"
					>
						<FontAwesomeIcon
							icon={faPenToSquare}
							className="mr-1"
						/>
						Edit
					</Link>
					<span className="pr-2  text-red-500 hover:text-red-700">
						<FontAwesomeIcon icon={faTrash} className="mr-1" />
						Delete
					</span>
				</div>
			</div>
			<pre className="rounded-3xl overflow-hidden w-1/2 py-5 px-6 bg-dark m-3 h-[55vh] text-xs text-white">
				{result.code}
			</pre>
		</div>
	);
}
