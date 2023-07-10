import { Pressable, Text, View } from 'react-native';
import { Image } from 'expo-image';
import { colors } from '../../styles/colors';
import { useApp } from '../../context/AppContext';
import { styles } from '../../styles/styles';
import { fakeAvatars } from '../../utils/post.utils';

function Details() {
  const { user } = useApp();
  const avatars = fakeAvatars(3);
  return (
    <View style={styles.detailsContainer}>
      <View style={styles.nameAndPictureContainer}>
        <View style={{ display: 'flex', flexDirection: 'column' }}>
          <Text
            numberOfLines={1}
            adjustsFontSizeToFit
            style={styles.detailsFullname}
          >
            {user.fullName}
          </Text>
          <Text style={styles.detailsUsername}>
            {user.username}
          </Text>
        </View>

        <Image
          transition={200}
          source={user.profilePicture}
          style={{
            width: 70,
            height: 70,
            borderRadius: 50,
          }}
        />
      </View>
      <View
        style={{
          marginTop: '8%',
          maxWidth: '65%',
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: '400',
            color: colors.light,
          }}
        >
          {user.bio}
        </Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: '4%',
        }}
      >
        {avatars.map((avatar, index) => (
          <Image
            transition={200}
            key={`${avatar}-${index.toString()}`}
            style={{
              height: 20,
              width: 20,
              borderWidth: 2,
              borderRadius: 50,
              marginRight: -5,
            }}
            source={avatar}
          />
        ))}
        <View style={{ maxWidth: '75%', marginLeft: '2%' }}>
          <Text style={styles.detailsFollowersCount}>
            {`${user.followers} followers`}
          </Text>
        </View>
      </View>
      <View style={styles.actionContainer}>
        <Pressable style={styles.actionButton}>
          <Text style={styles.actionButtonText}>
            Edit profile
          </Text>
        </Pressable>
        <Pressable style={styles.actionButton}>
          <Text style={styles.actionButtonText}>
            Share profile
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Details;
