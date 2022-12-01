import { StyleSheet, Dimensions} from 'react-native';
const styles = StyleSheet.create({
  carContainer: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
  titles: {
    alignItems: 'center',
    width: '100%',
    marginTop: '30%'
  },
  name: {
    fontSize: 43,
    fontWeight: '600',
  },
  tagline: {
    fontSize: 12,
    color: '#5c5e62',
  },
  taglineCTA : {
    textDecorationLine:'underline'
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    resizeMode:'cover'
  },
  buttonContainer :{
    width: '100%',
    position: 'absolute',
    bottom: 50

  }
});
export default styles;
