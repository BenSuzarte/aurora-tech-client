import React, { useState, useRef, useMemo } from 'react';
import JoditEditor, { Jodit } from 'jodit-react';

interface EditorProps {
    placeholder?: string;
}

export const Editor: React.FC<EditorProps> = ({ placeholder }) => {
    const editor = useRef<Jodit | null>(null);
    const [content, setContent] = useState<string>('');

    const config = useMemo(
        () => ({
            readonly: false, // todas as opções de https://xdsoft.net/jodit/docs/
            placeholder: placeholder || 'Start typing...',
            tabIndex: 1 // tabIndex do textarea
        }),
        [placeholder]
    );

    return (
        <JoditEditor
            ref={editor}
            value={content}
            config={config}
            onBlur={(newContent: string) => setContent(newContent)} // é preferível usar apenas essa opção para atualizar o conteúdo por razões de desempenho
            onChange={(newContent: string) => {}}
        />
    );
};
