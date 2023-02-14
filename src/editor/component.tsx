interface EditorProps {
    color?: string;
}

const Editor = ({ color }: EditorProps) => <div>{color || "default"}</div>;

export default Editor;
