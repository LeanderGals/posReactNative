import React from "react";
import { StyleSheet, Text, View, Button, TextInput, ImageBackground, Image, TouchableOpacity} from 'react-native';
import { Checkoutbtn } from "./components/Checkoutbtn";

export default function App() {
  const calculate= () =>{
    pass
  }

  return (
    <View style={mystyles.container}>
      <View style={mystyles.header}>
        <Image 
          style={mystyles.threebar}
          source={require('./images/threebar.png')}
        />
        <Text style={mystyles.logo}>
          MEGAW
        </Text>
        <TouchableOpacity onPress= {()=> alert("hello")}>
          <Image 
            style={mystyles.cartlogo}
            source={require('./images/cartlogo.png')}
          />
        </TouchableOpacity>
         <Image 
            style={mystyles.dotslogo}
            source={require('./images/dotslogo.png')}
          />
      </View>
      
      <View style={mystyles.shoppingcart}>
        <TouchableOpacity onPress= {()=> alert("hello")}>
          <Image 
            style={mystyles.backicon}
            source={require('./images/backicon2.png')}
          />
        </TouchableOpacity> 
        <Text style={mystyles.shoppingcartText}>
          Shopping Cart
        </Text>
      </View>
      <View style={mystyles.itemslist}>
        <View style={mystyles.item1}>
          <Text>Item 1</Text>
        </View>
        <View style={mystyles.item2}>
          <Text>Item 2</Text>
        </View>
        <View style={mystyles.item3}>
          <Text>Item 3</Text>
        </View>
        <View style={mystyles.item4}>
          <Text>Item 4</Text>
        </View>
        <View style={mystyles.item5}>
          <Text>Item 5</Text>
        </View>
        <View style={mystyles.item6}>
          <Text>Item 6</Text>
        </View>
      </View>
      <View style={mystyles.check}>
        <View style={mystyles.amount}>
          <Text style={mystyles.amountText}>
            Total: ₱
          </Text>
        </View>
        <Checkoutbtn onPress = {calculate}/>
      </View>
    </View>
    
  );
}

const mystyles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 30,
    //backgroundColor:'blue',
    backgroundColor:'white'
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    height: '8%',
    backgroundColor: '#2596be',    
  },
  threebar:{
    marginLeft: 10,
    marginTop:20,
    height: 25,
    width: 25
  },
  logo:{
    marginTop: 20,
    marginLeft: 15,
    fontSize:20,
    color: 'white'
  },
  cartlogo:{
    marginLeft: 180,
    marginTop:10,
    width: 35,
    height:40
  },
  dotslogo:{
    marginTop: 17,
    marginLeft: 18,
    width: 35,
    height: 30
  },
  backicon:{
    width: 50,
    height: 50,
  },
  shoppingcart:{
    flexDirection: 'row',
    width: '100%',
    marginVertical: 10,
    backgroundColor: '#76b5c5',
    borderRadius: 5
  },
  shoppingcartText:{
    marginLeft: 100,
    fontSize:18,
    alignSelf:'center',
    color: 'white'
  },
  itemslist:{
    flex: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    //backgroundColor: 'yellow'
  },
  item1:{
    alignItems:'center',
    margin: 5,
    width:'90%',
    height: '12%',
    backgroundColor: 'white'
  },
  item2:{
    alignItems:'center',
    margin: 5,
    width:'90%',
    height: '12%',
    backgroundColor: 'white'
  },
  item3:{
    alignItems:'center',
    margin: 5,
    width:'90%',
    height: '12%',
    backgroundColor: 'white'
  },
  item4:{
    alignItems:'center',
    margin: 5,
    width:'90%',
    height: '12%',
    backgroundColor: 'white'
  },
  item5:{
    alignItems:'center',
    margin: 5,
    width:'90%',
    height: '12%',
    backgroundColor: 'white'
  },
  item6:{
    alignItems:'center',
    margin: 5,
    width:'90%',
    height: '12%',
    backgroundColor: 'white'
  },
  amount:{
    width: '100%',
    height:'40%',
    //backgroundColor:'white',
    justifyContent: 'center'
  },
  amountText:{
    fontSize: 20,
    alignSelf: 'flex-end',
    marginRight: 100
  },
  check:{
    flex: 3,
    //backgroundColor: 'orange',
    alignContent: 'center',
    elevation: 1
  },
});
