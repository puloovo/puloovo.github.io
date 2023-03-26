import Document from "@tiptap/extension-document";
import Dropcursor from "@tiptap/extension-dropcursor";
import Image from "@tiptap/extension-image";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import { EditorContent, useEditor } from "@tiptap/react";
import React, { useCallback } from "react";
import StarterKit from "@tiptap/starter-kit";

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <>
      <div className="container ">
        <div className="row justify-content-center ">
          <div className="col-4 col-md-1 m-0 p-1">
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              disabled={!editor.can().chain().focus().toggleBold().run()}
              className={
                editor.isActive("bold")
                  ? "is-active"
                  : "" + "btn btn-secondary w-100"
              }
            >
              粗體
            </button>
          </div>
          <div className="col-4 col-md-1 p-1">
            <button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              disabled={!editor.can().chain().focus().toggleItalic().run()}
              className={
                editor.isActive("italic")
                  ? "is-active"
                  : "" + "btn btn-secondary w-100"
              }
            >
              斜體
            </button>
          </div>
          <div className="col-4 col-md-1 m-0 p-1">
            <button
              onClick={() => editor.chain().focus().toggleStrike().run()}
              disabled={!editor.can().chain().focus().toggleStrike().run()}
              className={
                editor.isActive("strike")
                  ? "is-active"
                  : "" + "btn btn-secondary w-100"
              }
            >
              刪除線
            </button>
          </div>
          <div className="col-4 col-md-1 m-0 p-1">
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 1 }).run()
              }
              className={
                editor.isActive("heading", { level: 1 })
                  ? "btn btn-secondary w-100"
                  : "" + "btn btn-secondary w-100"
              }
            >
              h1
            </button>
          </div>
          <div className="col-4 col-md-1 m-0 p-1">
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 6 }).run()
              }
              className={
                editor.isActive("heading", { level: 6 })
                  ? "btn btn-secondary w-100"
                  : "" + "btn btn-secondary w-100"
              }
            >
              h6
            </button>
          </div>
          <div className="col-4 col-md-1 m-0 p-1">
            <button
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              className={
                editor.isActive("bulletList")
                  ? "is-active"
                  : "" + "btn btn-secondary w-100"
              }
            >
              圓點清單
            </button>
          </div>
          <div className="col-4 col-md-1 m-0 p-1">
            <button
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              className={
                editor.isActive("orderedList")
                  ? "is-active"
                  : "" + "btn btn-secondary w-100"
              }
            >
              數字清單
            </button>
          </div>
          <div className="col-4 col-md-1 m-0 p-1">
            <button
              onClick={() => editor.chain().focus().setHorizontalRule().run()}
              className="btn btn-secondary w-100"
            >
              分隔線
            </button>
          </div>
          <div className="col-4 col-md-1 m-0 p-1">
            <button
              onClick={() => editor.chain().focus().setHardBreak().run()}
              className="btn btn-secondary w-100"
            >
              斷行
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const Tiptap = () => {
  const editor = useEditor({
    extensions: [Document, Paragraph, Text, Image, Dropcursor, StarterKit],
    content:
      "    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>",
  });
  const addImage = useCallback(() => {
    const url = window.prompt("URL");
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  if (!editor) {
    return null;
  }
  return (
    <div className="Tiptap container">
      <div className="">
        <button onClick={addImage} className="col-12 btn btn-secondary">
          上傳圖片
        </button>
        <MenuBar editor={editor} className="bar" />
        <EditorContent editor={editor} className="edit col-12" type="text" />
      </div>
    </div>
  );
};
export default Tiptap;
