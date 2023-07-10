import { Image } from 'expo-image';
import { View } from 'react-native';
import { colors } from '../styles/colors';
import GroupAvatars from './GroupAvatars';
import { styles } from '../styles/styles';

function PostLeftElement({ profilePicture, count, isNewThread = false, mute = false }) {
  return (
    <View
      style={{
        width: '15%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Image
        transition={200}
        source={profilePicture}
        style={styles.profilePicture}
      />
      <View
        style={{
          flex: 1,
          flexGrow: 1,
          borderWidth: 1,
          display: 'flex',
          marginVertical: 10,
          flexDirection: 'column',
          borderColor: colors.gray,
        }}
      />
      <GroupAvatars
        mute={mute}
        count={count}
        picture={isNewThread ? profilePicture : null}
      />
    </View>
  );
}

export default PostLeftElement;
