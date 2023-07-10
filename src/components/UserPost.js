import { View, Text } from 'react-native';
import { Image } from 'expo-image';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useMemo } from 'react';
import { colors } from '../styles/colors';
import { convertToRelativeTime, fakeMedia } from '../utils/post.utils';
import PostActions from './PostActions';
import PostLeftElement from './PostLeftElement';
import { styles } from '../styles/styles';

function UserPost(props) {
  const { post } = props;
  const {
    body,
    likes,
    liked,
    media,
    replies,
    username,
    createdAt,
    profilePicture,
  } = post;

  const fMedia = useMemo(() => fakeMedia(), []);

  return (
    <View style={styles.postContainer}>
      <PostLeftElement count={replies} profilePicture={profilePicture} />
      <View
        style={{
          width: '85%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <View
          style={{
            display: 'flex',
            marginBottom: '2%',
            paddingRight: '2%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Text style={styles.username}>{username}</Text>
          <View style={{
            flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '16%',
          }}
          >
            <Text style={styles.time}>{convertToRelativeTime(createdAt)}</Text>
            <MaterialCommunityIcons name="dots-horizontal" size={24} color={colors.light} />
          </View>
        </View>
        <View style={{ maxWidth: '90%' }}>
          <Text style={styles.body}>{body}</Text>
        </View>
        {media && (
          <View style={{ maxWidth: '90%', borderRadius: 12, marginVertical: '2%' }}>
            <Image
              cachePolicy="none"
              transition={100}
              source={fMedia}
              placeholder={require('../../assets/logo.svg')}
              style={{ width: '100%', height: 250, borderRadius: 8 }}
            />
          </View>
        )}
        <View style={{ paddingVertical: '2%' }}>
          <PostActions liked={liked} />
          <Text style={styles.stats}>{`${likes} likes · ${replies} replies`}</Text>
        </View>
      </View>

    </View>
  );
}

export default UserPost;
