import styled from 'styled-components';

export const Buttom = styled.div`
    display: inline-block
    border: 1px solid var(--btn-color);
    outline: none;
    background-color: var(--btn-color);
    text-transform:uppercase;
    font-weight: 500;
    color: var(--color-text);
    font-size: 1.4rem;
    padding: 1rem 1.5rem;
    text-transform: uppercase;
    border-radius: 3px;
    cursor: pointer;
    transition: all .2s;

    &:hover {
        background-color: var(--main-red)
    }
`;
