import { View, Animated } from 'react-native';
import {
  useCallback, useRef, useEffect, useState,
} from 'react';
import LottieView from 'lottie-react-native';
import { styles } from '../styles/styles';
import { fakePosts } from '../utils/post.utils';
import UserPost from '../components/UserPost';

const _posts = fakePosts();

function Header({ scrollY, refreshing }) {
  const ref = useRef(null);
  useEffect(() => {
    if (refreshing) {
      ref.current?.play();
    } else {
      ref.current?.reset();
    }
  }, [refreshing]);

  return (
    <View style={styles.lottieConntainer}>
      <LottieView
        ref={ref}
        loop
        speed={1.5}
        progress={
        !refreshing
          && scrollY.interpolate({
            inputRange: [-90, 0],
            outputRange: [1, 0.48],
            extrapolate: 'clamp',
          })
        }
        style={{ height: 50, width: 50 }}
        source={require('../../assets/logoAnimation.json')}
      />
    </View>
  );
}

function Home() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [refreshing, setRefreshing] = useState(false);
  const [posts, setPosts] = useState(_posts);
  const keyExtractor = ({ id }) => id;
  const memoizedRenderItem = useCallback(({ item }) => {
    return <UserPost post={item} />;
  }, [posts]);

  useEffect(() => {
    if (!refreshing) {
      scrollY?.addListener(({ value }) => {
        if (value <= -90) {
          setRefreshing(true);
        }
      });
    }
    return () => {
      scrollY.removeAllListeners();
    };
  }, [refreshing]);

  const timedRefresh = () => {
    setTimeout(() => {
      setRefreshing(false);
      setPosts(fakePosts());
    }, 2000);
  };

  useEffect(() => {
    if (refreshing) {
      timedRefresh();
    }
  }, [refreshing]);

  return (
    <View style={styles.container}>
      <Animated.FlatList
        vertical
        windowSize={50}
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
        data={posts ?? []}
        scrollEventThrottle={16}
        keyExtractor={keyExtractor}
        renderItem={memoizedRenderItem}
        ListHeaderComponent={<Header scrollY={scrollY} refreshing={refreshing} />}
      />
    </View>
  );
}

export default Home;
