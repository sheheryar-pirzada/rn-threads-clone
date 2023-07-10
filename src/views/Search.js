import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Animated from 'react-native-reanimated';
import { styles } from '../styles/styles';
import { colors } from '../styles/colors';

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

function Search({ navigation }) {
  const navigate = () => navigation.navigate('search-page');
  return (
    <View style={[styles.container, { paddingHorizontal: '4%' }]}>
      <Text style={styles.pageHeader}>
        Search
      </Text>
      <AnimatedTouchableOpacity
        activeOpacity={0.7}
        onPress={navigate}
        sharedTransitionTag="search-bar"
        style={styles.searchBarContainer}
      >
        <Feather
          size={16}
          name="search"
          color={colors.muted}
          style={{ marginRight: 6 }}
        />
        <View
          style={{
            flex: 1, height: 34, fontSize: 16, justifyContent: 'center',
          }}
        >
          <Text
            style={{ fontSize: 16, color: colors.muted }}
          >
            Search
          </Text>
        </View>
      </AnimatedTouchableOpacity>
    </View>
  );
}

export default Search;
