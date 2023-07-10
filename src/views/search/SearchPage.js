import {
  View, Text, TextInput, TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import Animated, { ZoomInRight } from 'react-native-reanimated';
import { useEffect, useRef } from 'react';
import { colors } from '../../styles/colors';
import { styles } from '../../styles/styles';

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

function SearchPage({ navigation }) {
  const inp = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      inp.current?.focus();
    }, 500);
    return () => {
      inp.current?.blur();
    };
  }, []);

  return (
    <View style={[
      styles.container,
      {
        paddingHorizontal: '4%',
      },
    ]}
    >
      <View
        style={{
          display: 'flex',
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Animated.View
          sharedTransitionTag="search-bar"
          style={{
            display: 'flex',
            borderRadius: 10,
            alignItems: 'center',
            marginVertical: 10,
            flexDirection: 'row',
            backgroundColor: '#262626',
            paddingHorizontal: 10,
            width: '80%',
          }}
        >
          <Feather
            size={16}
            name="search"
            color={colors.muted}
            style={{ marginRight: 6 }}
          />
          <TextInput
            ref={inp}
            style={{
              flex: 1,
              height: 34,
              fontSize: 16,
            }}
            placeholder="Search"
            placeholderTextColor={colors.muted}
          />
        </Animated.View>
        <AnimatedTouchableOpacity
          entering={ZoomInRight.duration(300).delay(100)}
          onPress={() => navigation.goBack()}
          style={{
            width: '15%',
            textAlign: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            marginLeft: 12,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              textAlign: 'center',
              color: colors.light,
            }}
          >
            Cancel
          </Text>
        </AnimatedTouchableOpacity>
      </View>
    </View>
  );
}

export default SearchPage;
