import {
  View, Text, TextInput, Pressable,
} from 'react-native';
import Animated, {
  interpolate, Layout,
  useAnimatedKeyboard,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
import { styles } from '../styles/styles';
import { colors } from '../styles/colors';
import PostLeftElement from '../components/PostLeftElement';
import { useApp } from '../context/AppContext';

function Post({ navigation }) {
  const keyboard = useAnimatedKeyboard();
  const { user, setUser } = useApp();
  const [thread, setThread] = useState('');

  const { profilePicture, username } = user;

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: -keyboard.height.value }],
      opacity: interpolate(keyboard.state.value, [3, 2], [0, 1]),
    };
  });

  const handleAddThread = () => {
    const threads = [...user.threads, thread];
    setUser({ ...user, threads });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.newThreadContainer}>
        <Text
          onPress={() => navigation.goBack()}
          style={styles.newThreadCancel}
        >
          Cancel
        </Text>
        <Text style={styles.newThreadText}>
          New thread
        </Text>
      </View>
      <View
        style={{
          display: 'flex',
          paddingVertical: '4%',
          paddingHorizontal: '1%',
          flexDirection: 'row',
        }}
      >
        <PostLeftElement profilePicture={profilePicture} isNewThread mute={!thread} />
        <View
          style={{
            minHeight: 125,
            width: '85%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Text style={{ fontWeight: '700', color: colors.light }}>
            {username}
          </Text>
          <TextInput
            multiline
            autoFocus
            value={thread}
            placeholder="Start a thread..."
            placeholderTextColor={colors.muted}
            onChangeText={(text) => setThread(text)}
            style={{
              width: '90%',
              fontSize: 16,
              color: colors.light,
            }}
          />
          <Animated.View
            style={{
              marginTop: '6%',
            }}
            layout={Layout.springify()}
          >
            <Feather name="paperclip" size={20} color={colors.gray} />
          </Animated.View>
        </View>

      </View>
      <Animated.View
        style={[
          animatedStyle,
          {
            bottom: 0,
            width: '100%',
            position: 'absolute',
          },
        ]}
      >
        <View style={styles.newThreadBottomContainer}>
          <Text style={{ fontSize: 14, color: colors.muted }}>
            Anyone can reply
          </Text>
          <Pressable onPress={handleAddThread}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: !thread ? colors.actionDisabled : colors.action,
              }}
            >
              Post
            </Text>
          </Pressable>
        </View>

      </Animated.View>
    </View>
  );
}

export default Post;
