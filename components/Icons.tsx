// components/Icons.tsx
import { FC } from "react";

export const MenuIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const LeafIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 12 22 12 22C12 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20.5C9.15 18.84 6.5 15.57 6.5 12C6.5 9.21 8.81 6.9 11.67 6.18L12 12L13.33 6.18C16.19 6.9 18.5 9.21 18.5 12C18.5 15.57 15.85 18.84 13 20.5L12 20.5Z" fill="currentColor" />
    </svg>
);
