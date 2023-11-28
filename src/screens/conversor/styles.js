import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000000'
  },
  headerFlag: {
    paddingTop: 75,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  content:{
    flexDirection: 'column',
    width: '40%',
    alignItems: 'center',
  },
  conversion:{
    padding: 15,
    alignItems: 'center'
    // backgroundColor: 'red'
  },
  flag:{
    margin: 10,
    backgroundColor: '#232323',
    padding: 40,
    borderRadius: 12,
    flexDirection: 'row',
    gap: 10
  },
  // flagDestiny:{
  //   backgroundColor: '#ccc',
  //   width: '47.5%',
  //   padding: 30,
  //   alignItems: 'center'
  // },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  body:{
    margin: 10,
    flex: 1,
    // height: 300,
    borderRadius: 12,
    backgroundColor: '#232323',
  }

})

export default styles