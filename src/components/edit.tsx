'use client';
import type { Code } from "@prisma/client";
import { Editor } from "@monaco-editor/react";

interface CodeProps {
    code: Code
}

export default function Edit({code}: CodeProps) {
    return (
        <div className="flex flex-row justify-center">
            <div className="w-1/2">
                <Editor
                height="40vh"
                theme="vs-dark"
                language="javascript"
                defaultValue={code.code}
                options={{minimap:{enabled:false}}}
                />
            </div>
        </div>
    )
}