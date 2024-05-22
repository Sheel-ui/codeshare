import { db } from "@/db/db";
import { redirect } from "next/navigation";

export default function NewCode() {

  async function CreateCode(formData: FormData){
    'use server';

    const title = formData.get('title') as string;
    const code = formData.get('code') as string;

    const x = await db.code.create({
      data: {
        title,
        code
      }
    })
    console.log(x);
    redirect('/');
  }
  
  return (
    <form className="text-dark flex flex-col items-center gap-6 mt-8" action={CreateCode}>
      <div className="flex flex-col w-1/3">
      <label htmlFor="title" className="mb-1">Title</label>
      <input 
        type="text"
        name="title"
        id="title"
        className="border border-ash rounded-md p-2 border-opacity-50 text-sm" />
      </div>
      <div className="text-md flex flex-col w-1/3">
      <label htmlFor="code" className="mb-1">Code</label>
      <textarea 
        name="code"
        id="code"
        className="h-[300px] text-sm border border-ash rounded-md  p-2 border-opacity-50"></textarea>
      </div>
      <button 
        type="submit"
        className="border border-accent text-accent p-1 px-4 rounded-full hover:text-white hover:bg-accent transition duration-300 ease-in-out">
        Submit</button>
    </form>
  )
  }