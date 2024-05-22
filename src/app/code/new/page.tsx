"use client";

import { createCode } from "@/actions/actions";
import { useFormState } from "react-dom";

export default function NewCode() {
	const [formState, action] = useFormState(createCode, { message: "" });
	return (
		<form
			className="text-dark flex flex-col items-center gap-6 mt-8"
			action={action}
		>
			<div className="flex flex-col w-1/3">
				<label htmlFor="title" className="mb-1">
					Title
				</label>
				<input
					type="text"
					name="title"
					id="title"
					className="border border-ash rounded-md p-2 border-opacity-50 text-sm"
				/>
			</div>
			<div className="text-md flex flex-col w-1/3">
				<label htmlFor="code" className="mb-1">
					Code
				</label>
				<textarea
					name="code"
					id="code"
					className="h-[300px] text-sm border border-ash rounded-md  p-2 border-opacity-50"
				></textarea>
			</div>
			<div className="text-xs text-red-400">{formState.message}</div>
			<button
				type="submit"
				className="border border-accent text-accent p-1 px-4 rounded-full hover:text-white hover:bg-accent transition duration-300 ease-in-out"
			>
				Submit
			</button>
		</form>
	);
}
