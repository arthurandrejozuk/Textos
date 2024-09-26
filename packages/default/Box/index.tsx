import React from "react";
import styled from "styled-components";

interface BoxProps {
    tag?:"div"|"section"|"ul"|"span"
    children?: React.ReactNode;
    className?: string
    id?: string
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    role?: string;
    ariaLabelledby?:string;
    onMouseMove?: (event: React.MouseEvent) => void;
    mouseX?: number;
    mouseY?: number;
}

const Tag = styled.div<BoxProps>`
    
`;

export default function Box({tag, mouseX, mouseY, onMouseMove, children, className, id, onClick, role, ...props}:BoxProps){
    return(
        <Tag {...props} role={role} id={id} onMouseMove={onMouseMove} onClick={onClick} as={tag} className={className}>
            {children}
        </Tag>
    )
}