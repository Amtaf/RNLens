import { Profiles} from '@lens-protocol/react-native-lens-ui-kit'

function ProfileComponent({ navigation }) {
    return (
      <Profiles 
      onProfilePress={profile=>navigation.navigate("ViewProfile",{profile})}/>
    )
  }

export default ProfileComponent