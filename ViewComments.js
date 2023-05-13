import { Feed } from '@lens-protocol/react-native-lens-ui-kit'



const Comment = ({route}) => {
  return (
    <Feed
    query={{
      name:'getComments',
      publicationId: route.params.publicationId,
    }} />
  )
}

export default Comment