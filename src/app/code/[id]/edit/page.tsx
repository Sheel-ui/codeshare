import { db } from "@/db/db";
import { notFound } from "next/navigation";
import Edit from "@/components/edit";

interface CodeProps {
	params: {
		id: string;
	};
}

export default async function EditCode(props: CodeProps) {
    const id = parseInt(props.params.id);
    const result = await db.code.findFirst({
      where: { id: id },
    });

    if (!result) {
      return notFound();
    }

    return <div><Edit code={result}></Edit></div>
  }