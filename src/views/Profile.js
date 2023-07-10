import { Animated, Dimensions, View } from 'react-native';
import { useRef } from 'react';
import { styles } from '../styles/styles';
import Header from './profile/Header';
import Details from './profile/Details';
import ProfileTabView from '../components/ProfileTabView';

const minHeight = Dimensions.get('window').height;
function Profile() {
  const scrollY = useRef(new Animated.Value(0)).current;

  const translateY = scrollY.interpolate({
    inputRange: [0, 300],
    outputRange: [0, -300],
    extrapolate: 'clamp',
  });

  return (
    <View style={[styles.container]}>
      <Animated.View style={{ transform: [{ translateY }] }}>
        <Header />
        <Details />
      </Animated.View>
      <Animated.View
        style={{
          minHeight,
          flexGrow: 1,
          transform: [{ translateY }],
        }}
      >
        <ProfileTabView scrollY={scrollY} />
      </Animated.View>
    </View>
  );
}

export default Profile;
