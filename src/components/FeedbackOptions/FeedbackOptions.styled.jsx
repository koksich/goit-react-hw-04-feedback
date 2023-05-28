import styled from 'styled-components';

export const Btn = styled.button`
  padding: 8px;
  width: 84px;
  border-radius: 4px;
  box-shadow: rgb(81, 83, 87) 1px 2px 6px 2px;

  background-color: white;

  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;

  :not(:last-child) {
    margin-right: 16px;
  };
`;
