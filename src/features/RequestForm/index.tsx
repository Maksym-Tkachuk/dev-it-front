import { memo, useState } from 'react'

import type { ChangeEvent, FormEvent } from 'react'

import { Button, Form, Input } from 'src/features/RequestForm/styles'

type RequestFormProps = {
  onSubmit: (concurrency: number) => void
  isLoading: boolean
}

const RequestForm = ({ onSubmit, isLoading }: RequestFormProps): JSX.Element => {
  const [value, setValue] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    onSubmit(Number(value))
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="number"
        min={0}
        max={100}
        value={value}
        onChange={handleChange}
        placeholder="Enter number from 0 to 100"
      />
      <Button disabled={isLoading} type="submit">
        Send
      </Button>
    </Form>
  )
}

export default memo(RequestForm)
