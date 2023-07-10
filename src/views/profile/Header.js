import { AntDesign, SimpleLineIcons } from '@expo/vector-icons';
import { View } from 'react-native';
import { colors } from '../../styles/colors';
import { styles } from '../../styles/styles';

function Header() {
  return (
    <View style={styles.profileHeaderContainer}>
      <SimpleLineIcons name="globe" size={26} color={colors.light} />
      <View style={styles.profileHeaderRightContainer}>
        <AntDesign name="instagram" size={26} color={colors.light} />
        <View style={styles.profileHeaderRightIcon}>
          <View style={styles.profileHeaderRightIcon1} />
          <View style={styles.profileHeaderRightIcon2} />
        </View>
      </View>
    </View>
  );
}

export default Header;
