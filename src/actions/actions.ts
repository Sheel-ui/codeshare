"use server";

import { db } from "@/db/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function editCode(id: number, code: string) {
	await db.code.update({
		where: { id },
		data: { code },
	});
	redirect(`/code/${id}`);
}

export async function deleteCode(id: number) {
	await db.code.delete({
		where: { id },
	});
    revalidatePath("/");
	redirect("/");
}

export async function createCode(
	formState: { message: string },
	formData: FormData
) {
	const title = formData.get("title");
	const code = formData.get("code");
	try {
		if (typeof title !== "string" || title.length < 3) {
			return {
				message: "Title must be longer!",
			};
		}

		if (typeof code !== "string" || code.length < 3) {
			return {
				message: "Code must be longer!",
			};
		}

		await db.code.create({
			data: {
				title,
				code,
			},
		});
	} catch (err: unknown) {
		if (err instanceof Error) {
			return {
				message: err.message,
			};
		} else {
			return {
				message: "Something went wrong!",
			};
		}
	}
    revalidatePath("/");
	redirect("/");
}
