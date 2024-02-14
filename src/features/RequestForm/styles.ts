import styled, { css } from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const Input = styled.input`
  padding: 10px;
  border-radius: 10px;
`

export const Button = styled.button(
  ({ disabled }) => css`
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    opacity: ${disabled ? 0.5 : 1};
  `,
)
