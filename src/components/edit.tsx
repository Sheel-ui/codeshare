'use client';
import type { Code } from "@prisma/client";
import { useState } from "react";
import { Editor } from "@monaco-editor/react";
import { editCode } from "@/actions/actions";
import { faTrash } from "@/utils/iconLibrary"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CodeProps {
    code: Code
}

export default function Edit({code}: CodeProps) {

    const [text,setText] = useState(code.code);

    const handleEditorChange = (value: string = "") => {
        setText(value);
    }

    const editCodeActions = editCode.bind(null,code.id,text);

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-row justify-between items-center w-1/2 px-2">
                <h1 className="capitalize">{code.title}</h1>
                <span className="pr-2 text-xs text-red-500 hover:text-red-700">
                    <FontAwesomeIcon icon={faTrash} className="mr-1" />
                    Delete
                </span>
            </div>
            <div className="rounded-3xl overflow-hidden w-1/2 py-5 bg-dark m-3">
                <Editor
                height="50vh"
                theme="vs-dark"
                language="javascript"
                defaultValue={code.code}
                options={{minimap:{enabled:false}}}
                onChange={handleEditorChange}
                />
            </div>
            <form action={editCodeActions}>
            <button 
            type="submit"
            className="border border-accent text-accent p-1 px-4 rounded-full mt-4
            hover:text-white hover:bg-accent transition duration-300 ease-in-out">
            Submit</button>
            </form>
        </div>
    )
}