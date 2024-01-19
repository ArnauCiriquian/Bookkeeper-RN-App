import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  homeContainer: {
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  headerContainer: {
    backgroundColor: '#000000',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    width: '95%',
    height: '95%',
    backgroundColor: 'rgb(250, 210, 130)',
    padding: 4,
    borderRadius: 5,
  },
  textContainer: {
    width: '100%',
    height: 550,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  scrollviewContainer: {
    width: '100%',
    height: '70%',
    padding: 4,
  },
  bookContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgb(250, 210, 130)',
    marginBottom: 4,
    borderRadius: 5,
    padding: 15,
  },
  noBooksInfoContainer: {
    height: 200,
    marginTop: 50,
    justifyContent: 'center',
  },
  bookInfoContainer: {
    width: '75%',
  },
  smallContainer: {
    width: '100%',
    height: 70,
    padding: 10,
    backgroundColor: 'rgb(250, 230, 180)',
  },
  bigContainer: {
    width: '100%',
    height: 380,
    padding: 10,
    backgroundColor: 'rgb(250, 230, 180)',
  },
  inputContainer: {
    width: '100%',
    height: '70%',
  },
  inputScrollViewContainer: {
    height:350,
    textAlignVertical: 'top',
  },
  footerContainer: {
    backgroundColor: 'rgb(0, 0, 0)',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderContainer: {
    width: '100%',
    height: 500,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    width: 80,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  confirmButton: {
    backgroundColor: 'rgba(10, 100, 10, 0.5)',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 20,
  },
  cancelButton: {
    backgroundColor: 'rgba(100, 10, 10, 0.5)',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 5,
  },
  newBookButton: {
    height: 60,
    width: 100,
    backgroundColor: 'rgba(150, 10, 100, 0.5)',
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingRight: 10,
  },
  appNameText: {
    fontFamily: 'MarcellusSC-Regular',
    fontSize: 30,
    color: '#CE7D0C',
    textShadowColor: '#910A69',
    textShadowOffset: {width: 2, height: 1},
    textShadowRadius: 2,
    letterSpacing: 5,
    textTransform: 'uppercase',
  },
  blackText: {
    color: 'black',
  },
  whiteText: {
    color: 'white',
  },
  purpleText: {
    color: 'rgb(150, 10, 100)',
  },
  bookTitleText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  bigFont: {
    fontSize: 20,
  },
  mediumFont: {
    fontSize: 17,
  },
  logo: {
    height: 100,
    width: 200,
  },
  icon: {
    height: 40,
    width: 40,
  },
});
