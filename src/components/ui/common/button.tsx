import Link from 'next/link';
import { CSSProperties, HTMLProps, JSX, PropsWithChildren } from 'react';

interface ButtonProps extends PropsWithChildren {
    link?: boolean;
    href?: string;
    onClick?: (args: any) => any;
    leftIcon?: JSX.Element;
    rightIcon?: JSX.Element;
    type: "link" | "filled" | "outline";
    color: "primary" | "accent";
    buttonType?: "button" | "submit" | "reset" | undefined;
    disabled?: boolean;
}

export const Button = ({ link, href, children, onClick, leftIcon, rightIcon, type, color, buttonType, disabled = false }: ButtonProps) => {

    const buttonStyleBase = "flex gap-2 items-center cursor-pointer disabled:text-foreground-muted disabled:border-foreground-muted";
    const linkStyle = "border-b-2 pb-1 font-semibold max-w-max text-xl";
    const filledStyle = "";
    const outlineStyle = "border-2 rounded-base px-6 py-3 justify-center w-full md:text-xl md:max-w-max font-medium";

    if (link && href) return (
        <Link href={href} onClick={onClick} className={`${buttonStyleBase} ${type === "filled" ? filledStyle : type === "link" ? linkStyle : outlineStyle} ${color === "primary" ? "text-primary" : "text-accent"}`}>{leftIcon}{children}{rightIcon}</Link>
    )

    return (
        <button disabled={disabled} onClick={onClick} type={buttonType} className={`${buttonStyleBase} ${type === "filled" ? filledStyle : type === "link" ? linkStyle : outlineStyle} ${color === "primary" ? "text-primary" : "text-accent"}`}>{leftIcon}{children}{rightIcon}</button>
    )
}