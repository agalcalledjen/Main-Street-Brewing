import React from 'react';
import { Image, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors, margin } from '../config/styles';

export const headerLeftFromDrawer = navigation => {
  const drawerRoutes = ['FavBeers', 'Contact', 'Profile'];
  return (
    <Ionicons
      name={
        drawerRoutes.includes(navigation.state.routeName)
          ? Platform.select({
              ios: 'ios-arrow-dropleft-circle',
              android: 'md-arrow-dropleft-circle'
            })
          : Platform.select({
              ios: 'ios-menu',
              android: 'md-menu'
            })
      }
      onPress={() => {
        if (drawerRoutes.includes(navigation.state.routeName)) {
          navigation.goBack();
        } else {
          navigation.toggleDrawer();
        }
      }}
      size={40}
      color={colors.white}
      style={{ marginLeft: margin.md }}
    />
  );
};

export const sharedNavigationOptions = navigation => ({
  headerTitle: (
    <Image
      source={require('../assets/images/Logos/msb_logo_white.png')}
      style={{ resizeMode: 'contain' }}
    />
  ),
  headerBackTitle: null,
  headerRight: (
    <Image
      source={require('../assets/images/Icons/notifications_icon_inactive.png')}
      style={{ resizeMode: 'contain', marginRight: margin.sm }}
    />
  ),
  headerLeft: () => {
    return (
      <Ionicons
        name={
          navigation.state.routeName === 'Event'
            ? Platform.select({
                ios: 'ios-arrow-dropleft-circle',
                android: 'md-arrow-dropleft-circle'
              })
            : Platform.select({
                ios: 'ios-menu',
                android: 'md-menu'
              })
        }
        onPress={() => {
          navigation.state.routeName === 'Event'
            ? navigation.goBack()
            : navigation.toggleDrawer();
        }}
        size={40}
        color={colors.white}
        style={{ marginLeft: margin.md }}
      />
    );
  },
  headerStyle: {
    backgroundColor: colors.black,
    height: 60,
    borderBottomWidth: 0
  }
});
