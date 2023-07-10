import { useState } from 'react';
import { Dimensions, Text } from 'react-native';
import { SceneMap, TabView, TabBar } from 'react-native-tab-view';
import { colors } from '../styles/colors';
import ThreadsList from '../views/profile/ThreadsList';

const initialLayout = { width: Dimensions.get('window').width };

const renderScene = ({ route, scrollY }) => {
  switch (route.key) {
    case 'threads':
      return <ThreadsList scrollY={scrollY} />;
    case 'replies':
      return null;
    default:
      return null;
  }
};

const renderLabel = ({ route, focused }) => (
  <Text style={{ color: colors[focused ? 'light' : 'muted'], fontSize: 14, fontWeight: '600' }}>
    {route.title}
  </Text>
);

const renderTabBar = (props) => {
  return (
    <TabBar
      {...props}
      renderLabel={renderLabel}
      indicatorStyle={{ backgroundColor: colors.light }}
      style={{ backgroundColor: colors.dark }}
    />
  );
};

function ProfileTabView({ scrollY }) {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'threads', title: 'Threads' },
    { key: 'replies', title: 'Replies' },
  ]);

  return (
    <TabView
      style={{ flex: 1 }}
      onIndexChange={setIndex}
      renderScene={({ route }) => renderScene({ scrollY, route })}
      renderTabBar={renderTabBar}
      initialLayout={initialLayout}
      navigationState={{ index, routes }}
    />
  );
}

export default ProfileTabView;
