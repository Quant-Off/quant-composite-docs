import type {ReactNode} from 'react';

export default function Highlight({children}): ReactNode {
    return (
        <span style={{
            backgroundColor: 'var(--ifm-color-text-highlight)',
            color: 'var(--ifm-color-text)',
            borderRadius: '2px',
            padding: '0.2rem'
        }}>{children}</span>
    );
};

export function HlInfo({children}): ReactNode {
    return (
        <span style={{
            backgroundColor: 'var(--ifm-color-text-info-highlight)',
            color: 'var(--ifm-color-info-text)',
            borderRadius: '2px',
            padding: '0.2rem'
        }}>{children}</span>
    )
}

export function HlWarn({children}): ReactNode {
    return (
        <span style={{
            backgroundColor: 'var(--ifm-color-text-warn-highlight)',
            color: 'var(--ifm-color-warn-text)',
            borderRadius: '2px',
            padding: '0.2rem'
        }}>{children}</span>
    )
}