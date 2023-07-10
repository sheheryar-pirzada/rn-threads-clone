import { Animated } from 'react-native';
import {
  useCallback,
} from 'react';
import { fakePosts, fakeUser } from '../../utils/post.utils';
import UserPost from '../../components/UserPost';

const fUser = fakeUser();

const posts = fakePosts(
  10,
  fUser.username,
  fUser.profilePicture,
);

function ThreadsList({ scrollY }) {
  const memoizedRenderItem = useCallback((post) => {
    return <UserPost post={post} key={post.id} />;
  }, []);

  return (
    <Animated.ScrollView
      style={{ flex: 1, marginBottom: '30%' }}
      contentContainerStyle={{ flexGrow: 1 }}
      onScroll={Animated.event(
        [{
          nativeEvent: {
            contentOffset: {
              y: scrollY,
            },
          },
        }],
        { useNativeDriver: true },
      )}
      scrollEventThrottle={16}
    >
      {posts.map(memoizedRenderItem)}
    </Animated.ScrollView>
  );
}

export default ThreadsList;
