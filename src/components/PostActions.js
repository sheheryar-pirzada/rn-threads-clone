import { View } from 'react-native';
import { Feather, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { colors } from '../styles/colors';

function PostActions({ liked }) {
  return (
    <View
      style={{
        display: 'flex',
        maxWidth: '36%',
        flexDirection: 'row',
        marginVertical: '2%',
        paddingVertical: '2%',
        justifyContent: 'space-between',
      }}
    >
      {liked ? (
        <Ionicons name="heart" size={24} color={colors.light} />
      ) : (
        <FontAwesome5 name="heart" size={22} color={colors.light} />
      )}
      <Ionicons
        size={22}
        style={{ transform: [{ scaleX: -1 }] }}
        color={colors.light}
        name="md-chatbubble-outline"
      />
      <Feather name="repeat" size={22} color={colors.light} />
      <Feather name="send" size={22} color={colors.light} />
    </View>
  );
}
export default PostActions;
