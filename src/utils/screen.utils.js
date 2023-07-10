import {
  Feather, FontAwesome5, Ionicons, Octicons,
} from '@expo/vector-icons';
import { colors } from '../styles/colors';

const getIcon = (focused, color, size, route) => {
  const iconColor = focused ? colors.light : colors.muted;
  const iconMap = {
    home: <Octicons name="home" size={24} color={iconColor} />,
    profile: <FontAwesome5 name="user-alt" size={22} color={iconColor} />,
    search: <Feather name="search" size={24} color={iconColor} />,
    post: <Feather name="edit" size={24} color={iconColor} />,
    activity: <Ionicons name="heart" size={28} color={iconColor} />,
  };
  return iconMap[route.name];
};

export const screenOptions = ({ route }) => ({
  headerShown: false,
  tabBarShowLabel: false,
  tabBarIcon: ({ focused, color, size }) => getIcon(focused, color, size, route),
  tabBarStyle: {
    backgroundColor: colors.dark,
    borderTopWidth: 0,
  },
});
