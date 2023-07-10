import { View } from 'react-native';
import { Image } from 'expo-image';
import { useMemo } from 'react';
import { fakeAvatars } from '../utils/post.utils';

function GroupAvatars({ count, picture = null, mute = false }) {
  const avatars = useMemo(() => fakeAvatars(count), []);
  if (picture) {
    return (
      <Image
        transition={200}
        style={{
          width: 16,
          height: 16,
          borderRadius: 50,
          opacity: mute ? 0.5 : 1,
        }}
        source={picture}
      />
    );
  }

  if (avatars.length === 1) {
    return (
      <Image
        transition={200}
        style={{
          height: 22,
          width: 22,
          borderRadius: 50,
        }}
        source={avatars[0]}
      />
    );
  }
  if (avatars.length === 2) {
    return (
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
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
      </View>
    );
  }
  if (avatars.length === 3) {
    return (
      <View
        style={{
          display: 'flex',
          width: '75%',
          flexDirection: 'column',
        }}
      >
        <View
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
          }}
        >
          <Image
            transition={200}
            style={{
              height: 22,
              width: 22,
              borderRadius: 50,
            }}
            source={avatars[0]}
          />
        </View>

        <View style={{ marginTop: 10 }}>
          <Image
            transition={200}
            style={{
              height: 18,
              width: 18,
              borderRadius: 50,
              borderWidth: 1,
              borderColor: 'white',
            }}
            source={avatars[1]}
          />
        </View>
        <View
          style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <Image
            transition={200}
            style={{
              height: 15,
              width: 15,
              borderRadius: 50,
            }}
            source={avatars[2]}
          />
        </View>
      </View>
    );
  }
}

export default GroupAvatars;
