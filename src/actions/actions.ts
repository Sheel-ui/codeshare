'use server';

import { db } from "@/db/db";
import { redirect } from "next/navigation";

export async function editCode(id:number,code:string){
    await db.code.update({
        where: {id},
        data: {code}
    })
    redirect(`/code/${id}`);
}

export async function deleteCode(id:number){
    await db.code.delete({
        where: {id}
    })
    redirect('/');
}