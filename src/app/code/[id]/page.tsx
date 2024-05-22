import { db } from "@/db/db"
import { notFound } from "next/navigation"
interface CodeProps {
  params: {
    id: string
  }
}

export default async function ViewCode(props: CodeProps) {
    await new Promise((r)=>setTimeout(r,2000))
    const result = await db.code.findFirst({
      where: { id: parseInt(props.params.id)}
    })

    if (!result) {
      return notFound();
    }
    return <div>{result.title}</div>
  }