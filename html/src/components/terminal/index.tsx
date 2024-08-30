import { h } from 'preact';
import { useRef, useState } from 'preact/hooks';

import { Xterm, type XtermOptions } from './xterm';

import '@xterm/xterm/css/xterm.css';
import { Modal } from '../modal';

interface Props extends XtermOptions {
    id: string;
}

export function Terminal({ id, ...rest }: Props) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [modal, setModal] = useState(false);

    const showModal = () => setModal(true);
    const xterm = useRef<Xterm>(new Xterm(rest, showModal));

    const sendFile = (event: Event) => {
        setModal(false);
        const files = (event.target as HTMLInputElement).files;
        if (files) xterm.current?.sendFile(files);
    }

    return (
        <div id={id} ref={containerRef}>
            <Modal show={modal}>
                <label class="file-label">
                    <input onChange={sendFile} class="file-input" type="file" multiple />
                    <span class="file-cta">Choose files…</span>
                </label>
            </Modal>
        </div>
    );
}