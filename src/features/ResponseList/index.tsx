import { List, ListItem } from 'src/features/ResponseList/styles'

type ResponseListProps = {
  list: number[]
}

const ResponseList = ({ list }: ResponseListProps): JSX.Element => {
  return (
    <List>
      {list.map((number, index) => (
        <ListItem key={index}>{number}</ListItem>
      ))}
    </List>
  )
}

export default ResponseList
