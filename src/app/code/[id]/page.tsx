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
	// await new Promise((r)=>setTimeout(r,2000))
	const result = await db.code.findFirst({
		where: { id: parseInt(props.params.id) },
	});

	if (!result) {
		return notFound();
	}
	return (
		<div className="flex flex-col items-center m-8 p-8">
			<div className="w-1/3 m-8">
				<div className="p-2 text-ash flex justify-between items-center">
					<div>{result.title}</div>
					<div className="text-xs mb-4">
						<Link href={`/code/${result.id}/edit`} className="pr-6 text-green-500 hover:text-green-700">
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
				<pre className="bg-slate-200 p-4 text-sm min-h-[300px] rounded-lg">
					{result.code}
				</pre>
			</div>
		</div>
	);
}
