"use client";

import { useEffect } from "react";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";
import styles from "./PostEditor.module.css";

type PostEditorProps = {
  onUpdate: (html: string) => void;
  initialHtml?: string;
};

export default function PostEditor({ onUpdate, initialHtml }: PostEditorProps) {
  const editor = useCreateBlockNote();

  useEffect(() => {
    if (!initialHtml || !editor) {
      return;
    }

    const blocks = editor.tryParseHTMLToBlocks(initialHtml);
    editor.replaceBlocks(editor.document, blocks);
    onUpdate(editor.blocksToHTMLLossy());
  }, [editor, initialHtml, onUpdate]);

  return (
    <div className={styles.wrapper}>
      <BlockNoteView
        editor={editor}
        theme="dark"
        onChange={() => onUpdate(editor.blocksToHTMLLossy())}
      />
    </div>
  );
}
