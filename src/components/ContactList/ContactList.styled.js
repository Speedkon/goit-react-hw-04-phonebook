import styled from "styled-components";

export const AllContacts = styled.ul`
    margin: 0;
    padding: 0;
`

export const Contact = styled.li`
    margin-bottom: 4px;
    list-style: none;
`

export const Span = styled.span`
    font-size: 18px;
    margin-right: 16px;
    color: #000033;
`

export const Button = styled.button`
    padding: 8px 12px;
    color: #000033;
    font-size: 12px;
    background-color: transparent;
    border: none;
    box-shadow:rgb(130, 138, 158) 0px 2px 5px;
    &:hover{
    background-color: #ccccff;
    box-shadow: rgb(130, 138, 158) 0px 2px 8px;
    }
`