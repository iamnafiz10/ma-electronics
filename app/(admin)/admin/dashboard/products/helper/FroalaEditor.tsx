"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";

// ❌ REMOVE this (VERY IMPORTANT)
// import "froala-editor/js/plugins.pkgd.min.js";

// Dynamic import (SSR OFF)
const FroalaEditorComponent = dynamic(
  () => import("react-froala-wysiwyg"),
  { ssr: false }
);

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function FroalaEditor({ value, onChange }: Props) {
  useEffect(() => {
    // ✅ ONLY run in browser
    if (typeof window !== "undefined") {
      require("froala-editor/js/plugins.pkgd.min.js");
      document.body.classList.add("froala-body");
    }
  }, []);

  return (
    <FroalaEditorComponent
      tag="textarea"
      model={value}
      onModelChange={onChange}
      config={{
        placeholderText: "Write description...",
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
        tableDefaultAlign: "left",
      }}
    />
  );
}
