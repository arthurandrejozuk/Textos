import React from "react";
import styled from "styled-components";

interface TextProps {
    tag?:"h1"|"h2"|"h3"|"h4"|"p"|"li"|"a"
    id?: string
    children?: string| React.ReactNode;
    className?: string
    href?: string
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    ariaLabelledby?:string;
    role?: string;
}

const Tag = styled.p<TextProps>`
    

`;

export default function Text({ href, children, tag, className, id, onClick, ariaLabelledby, role}:TextProps){
    return(
        <Tag role={role} aria-labelledby={ariaLabelledby} href={href} id={id} onClick={onClick} className={className} as={tag}>
            {children}
        </Tag>
    )
}

