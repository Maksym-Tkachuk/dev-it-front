import RequestForm from 'src/features/RequestForm'
import ResponseList from 'src/features/ResponseList'

import { useHome } from './useHome'

import { Container } from 'src/pages/Home/styles'

const Home = (): JSX.Element => {
  const { list, sendRequests, isLoading } = useHome()

  return (
    <Container>
      <RequestForm isLoading={isLoading} onSubmit={sendRequests} />
      <ResponseList list={list} />
    </Container>
  )
}

export default Home
