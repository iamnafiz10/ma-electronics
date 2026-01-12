"use client";

import dynamic from "next/dynamic";
import {useEffect} from "react";

// Required Froala JS plugins
import "froala-editor/js/plugins.pkgd.min.js";

// Dynamic import (SSR OFF)
const FroalaEditorComponent = dynamic(
    async () => {
        const mod = await import("react-froala-wysiwyg");
        return mod.default;
    },
    {ssr: false}
);

type Props = {
    value: string;
    onChange: (value: string) => void;
};

export default function FroalaEditor({value, onChange}: Props) {
    useEffect(() => {
        // Fix hydration warning
        document.body.classList.add("froala-body");
    }, []);

    return (
        <FroalaEditorComponent
            tag="textarea"
            model={value}
            onModelChange={onChange}
            config={{
                placeholderText: "Write product description...",
                heightMin: 100,
                toolbarButtons: [
                    "bold",
                    "italic",
                    "underline",
                    "|",
                    "fontFamily",
                    "fontSize",
                    "textColor",
                    "|",
                    "formatOL",
                    "formatUL",
                    "alignLeft",
                    "alignCenter",
                    "alignRight",
                    "|",
                    "insertLink",
                    "insertImage",
                    "insertTable",
                    "|",
                    "fullscreen",
                ],
                quickInsertEnabled: false,
                tableDefaultAlign: 'left',
            }}
        />
    );
}
