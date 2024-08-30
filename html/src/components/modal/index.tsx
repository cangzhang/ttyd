import { h, type ComponentChildren } from 'preact';

import './modal.scss';

interface Props {
    show: boolean;
    children: ComponentChildren;
}

export function Modal({ show, children }: Props) {
    if (!show) return null;

    return (
        <div className="modal">
            <div className="modal-background" />
            <div className="modal-content">
                <div className="box">{children}</div>
            </div>
        </div>
    )
}
