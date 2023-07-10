import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: colors.dark,
  },
  profilePicture: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  lottieConntainer: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  pageHeader: {
    color: colors.light,
    fontSize: 34,
    fontWeight: 'bold',
  },
  searchBarContainer: {
    display: 'flex',
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
    flexDirection: 'row',
    paddingHorizontal: 10,
    backgroundColor: '#262626',
  },
  newThreadContainer: {
    padding: '4%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0.2,
    borderBottomColor: colors.gray,
  },
  newThreadBottomContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: '4%',
    paddingBottom: '4%',
  },
  newThreadCancel: {
    fontSize: 16, color: colors.light, position: 'absolute', left: '4%',
  },
  newThreadText: {
    fontSize: 18,
    color: colors.light,
    fontWeight: 'bold',
  },
  profileHeaderContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: '4%',
    justifyContent: 'space-between',
  },
  profileHeaderRightContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  profileHeaderRightIcon: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    marginLeft: '15%',
  },
  profileHeaderRightIcon1: {
    width: 20,
    borderWidth: 1,
    borderColor: colors.light,
  },
  profileHeaderRightIcon2: {
    width: 15,
    borderWidth: 1,
    borderColor: colors.light,
  },
  detailsContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: '4%',
    paddingVertical: '6%',
  },
  actionContainer: {
    marginTop: '4%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    width: '48%',
    padding: '2%',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.muted,
  },
  actionButtonText: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    color: colors.light,
  },
  nameAndPictureContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailsFullname: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.light,
    marginVertical: 4,
  },
  detailsUsername: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.light,
    marginVertical: 4,
  },
  detailsFollowersCount: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.muted,
  },
  postContainer: {
    display: 'flex',
    paddingVertical: '4%',
    paddingHorizontal: '1%',
    flexDirection: 'row',
    borderBottomColor: colors.muted,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  username: {
    fontWeight: '700',
    color: colors.light,
  },
  body: {
    fontWeight: '400',
    color: colors.light,
    letterSpacing: 0.6,
    lineHeight: 20,
  },
  time: {
    fontSize: 15,
    color: colors.muted,
  },
  stats: {
    color: colors.muted,
  },
});
