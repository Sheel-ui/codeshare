import { db } from "@/db/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import { faTrash, faPenToSquare } from "@/utils/iconLibrary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deleteCode } from "@/actions/actions";
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

	const deleteCodeAction = deleteCode.bind(null, result.id);

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
					<form
						action={deleteCodeAction}
						className="pr-2 inline-block text-red-500 hover:text-red-700"
					>
						<button type="submit">
							<FontAwesomeIcon icon={faTrash} className="mr-1" />
							Delete
						</button>
					</form>
				</div>
			</div>
			<pre className="rounded-3xl overflow-hidden w-1/2 py-5 px-6 bg-dark m-3 h-[55vh] text-xs text-white">
				{result.code}
			</pre>
		</div>
	);
}
