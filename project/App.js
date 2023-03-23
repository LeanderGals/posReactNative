import React, {useState} from "react";
import { StyleSheet, Text, View, Button, TextInput, Pressable, Image, TouchableOpacity, ScrollView} from 'react-native';
import { Checkoutbtn } from "./components/Checkoutbtn";


const images = [

  {
    id: "0",
    code: "001",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqg_OBzcVDnKHv1d3hyVk_WlCo43pzit4CJQ&usqp=CAU",
    name: "icecream",
    price: 456,
    
  },
  {
    id: "1",
    code: "002",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT85O96gPiso_j2gaS0cePTBY4mCR3pumV6tw&usqp=CAU",
    name: "biscuit",
    price: 500,
    quantity: 1
  },
  {
    id: "2",
    code: "003",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSicQWeRoxxLEr1RLIp8dJtw-NQvSE4xtlhwA&usqp=CAU",
    name: "chocolate",
    price: 220,
    quantity: 1
  },
  {
    id: "3",
    code: "004",
    image: "https://sugargeekshow.com/wp-content/uploads/2022/08/vanilla_cupcake_featured_blog.jpg",
    name: "cupcake",
    price: 200,
    quantity: 1
  },
  {
    id: "4",
    code: "005",
    image: "https://marleysmenu.com/wp-content/uploads/2021/07/Butterscotch-Milkshake-Featured-Image-770x770.jpg",
    name: "milkshake",
    price: 300,
    quantity: 1
  },
  {
    id: "5",
    code: "006",
    image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flat-white-3402c4f.jpg",
    name: "coffee",
    price: 400,
    quantity: 1
  },
  {
    id: "6",
    code: "007",
    image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/exps22961_RDSM1338224D75_RMS2-2.jpg?fit=700,1024",
    name: "frappe",
    price: 500,
    quantity: 1
  },
  {
    id: "7",
    code: "008",
    image: "https://www.barbarabakes.com/wp-content/uploads/2020/08/Julia-Childs-French-Bread-Barbara-Bakes.jpg",
    name: "baguette",
    price: 200,
    quantity: 1
  },
  {
    id: "8",
    code: "009",
    image: "https://www.foodandwine.com/thmb/hChW29M1xYUVTb56ImlKxiXo0Xg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/different-types-of-tea-FT-BLOG0621-7c7fd231e66d4fea8ca9a47cad52ba79.jpg",
    name: "tea",
    price: 150
  }, 
  {
    id: "9",
    code: "0010",
    image: "https://dg6qn11ynnp6a.cloudfront.net/wp-content/uploads/2022/09/20151923/cover-story-fw.jpg",
    name: "juice",
    price: 250,
    quantity: 1
  }
];

var totalExpense = 0




export default function App() {
  const [cart,setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [money, setMoney] = useState("");
  
 
  
  const Call = () => {
    //const [amount, setAmount] = useState("")
    //var amount = ""
    // if (cart == )
    //images.totalExpense = 0



    if (searchTerm == "001") {
      
      if(totalExpense == 0){
        totalExpense = 456
      }
      else{
        totalExpense = totalExpense + 456
      }
      

      
       //alert(images.total)
      
      }
     else if (searchTerm == "002") {
        
      if(totalExpense == 0){
        totalExpense = 500
      
      //alert(images.total)
      }
      else{
        totalExpense = totalExpense + 500
      }
    }
    else if (searchTerm == "003") {
      if(totalExpense == 0){
        totalExpense = 220
      
      //alert(images.totalExpense)
      }
      else{
        totalExpense = totalExpense + 220
      }
    }
    else if (searchTerm == "004") {
      if(totalExpense == 0){
        totalExpense = 200
      
      //alert(images.totalExpense)
      }
      else{
        totalExpense = totalExpense + 200
      }
    }
    else if (searchTerm == "005") {
      if(totalExpense == 0){
        totalExpense = 300
      
      //alert(images.totalExpense)
      }
      else{
        totalExpense = totalExpense + 300
      }
    }
    else if (searchTerm == "006") {
      if(totalExpense == 0){
        totalExpense = 400
      
      //alert(images.totalExpense)
      }
      else{
        totalExpense = totalExpense + 400
      }
    }
    else if (searchTerm == "007") {
      if(totalExpense == 0){
        totalExpense = 500
      
      //alert(images.totalExpense)
      }
      else{
        totalExpense = totalExpense + 500
      }
    }
    else if (searchTerm == "008") {
      if(totalExpense == 0){
        totalExpense = 200
      
      //alert(images.totalExpense)
      }
      else{
        totalExpense = totalExpense + 200
      }
    }
    else if (searchTerm == "009") {
      if(totalExpense == 0){
        totalExpense = 150
      
      //alert(images.totalExpense)
      }
      else{
        totalExpense = totalExpense + 150
      }
    }
    else if (searchTerm == "0010" ) {
      if(totalExpense == 0){
        totalExpense = 250
      
      //alert(images.totalExpense)
      }
      else{
        totalExpense = totalExpense + 250
      }
    }
    //alert(totalExpense)
  
  }

  const Checkout = () => {
    //alert("total amount:" + images.total)
    var change = money - totalExpense 
    alert("Total Change: ₱ " + change)
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
        <TextInput style={mystyles.searchText} id="searchTerm"  type="text" value={searchTerm} keyboardType='numeric' onChangeText={(event) => 
            setSearchTerm(event)} placeholder="Search here" />
        <Image 
            style={mystyles.searchIcon}
            source={require('./images/search.png')}
          />
        
      </View>
      <ScrollView style={mystyles.itemslist}>
      {
        images.filter((item) => {
        if(searchTerm == ""){
          return item;
        }
        else if(item.code.toLowerCase().includes(searchTerm.toLowerCase()))
        {
          return item;
        }
        else if(searchTerm !== "00" && searchTerm !== "001" && searchTerm !== "002" && searchTerm !== "003" && searchTerm !== "004" && searchTerm !== "005" && searchTerm !== "006" && searchTerm !== "007" && searchTerm !== "008" && searchTerm !== "009" && searchTerm !== "0010" ){
          alert('Item not Found')
        }
        
      })
      .map((item) => (
        <Pressable
          key={item.id}
          style={{  flexDirection: "row", alignItems: "center" }}
        >
          <View style={{ margin: 10 }}>
            <Image
              style={{ width: 100, height: 100, borderRadius: 8, }}
              source={{ uri: item.image }}
            />
          </View>
          <View>
            <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
            <Text style={{ fontWeight: "bold" }}>₱{item.price}</Text>
            {cart.includes(item) ? (
               <Pressable onPress={() => setCart(cart.filter((x) => x.id !== item.id))}>
               <Text
                 style={{
                   borderColor: "gray",
                   borderWidth: 1,
                   marginVertical: 10,
                   padding: 5,
                 }}
               >
                REMOVE FROM CART
               </Text>
             </Pressable>
             
            ):(
              <Pressable onPress={() => {setCart([...cart,item]); Call()}}>
                
              <Text
                style={{
                  borderColor: "gray",
                  borderWidth: 1,
                  marginVertical: 10,
                  padding: 5,
                }}
              >
                ADD TO CART
              </Text>
            </Pressable>
             
            )}
           
          </View>
        </Pressable>
      ))}
      
      </ScrollView>
      <ScrollView style={mystyles.addtocart}>
        <View>
          <Text style={mystyles.addeditemsText}>
            Added Items:
          </Text>
        </View>
      {cart.map((item) => ( 
        <View style={{margin:10}}>
          <Image style={{ width: 100, height: 100, borderRadius: 8 }} source={{uri:item.image}}/>
          <Text>{item.name}</Text>
          <Text>₱ {item.price}</Text>
          
        </View>
      )) }
      </ScrollView>
      <View style={mystyles.check}>
        <View style={mystyles.amount}>
          <Text style={mystyles.amountText}>
            Total: ₱ {totalExpense}
          </Text>
        </View>
        <Text>
          Enter Amount:
        </Text>
        <TextInput style={mystyles.enteramount} id="money" keyboardtype="numeric" value={money} keyboardType='numeric' 
            placeholder="Please Enter Amount" onChangeText={(event) => 
            setMoney(event)}/> 
        <Checkoutbtn onPress={Checkout}/>
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
  shoppingcart:{
    flexDirection: 'row',
    width: '80%',
    height: '5%',
    alignSelf: 'center',
    marginVertical: 10,
    backgroundColor: '#76b5c5',
    borderRadius: 5
  },
  searchText:{
    marginLeft: 100,
    fontSize:18,
    color: 'white',
    textAlign:'center'
  },
  searchIcon:{
    width: 20,
    height: 20,
    marginLeft: 90,
    marginTop: 10,
  },
  itemslist:{
    //flex: 10,
    maxHeight: 250,
    //justifyContent: 'space-around',
    //alignItems: 'center',
    //backgroundColor: 'yellow'
  },
  amount:{
    width: '100%',
    height:'20%',
    backgroundColor:'#76b5c5',
    justifyContent: 'center'
  },
  amountText:{
    fontSize: 20,
    alignSelf: 'flex-end',
    marginRight: 50
  },
  addeditemsText:{
    alignSelf: 'center',
    fontSize: 17,
    fontWeight:'bold'

  },
  check:{
    flex: 1,
    //backgroundColor: 'orange',
    alignContent: 'center',
    elevation: 1
  },
  enteramount:{
    //marginTop: 10,
    height: 40,
    borderWidth: 1,
    fontSize:18,
    color: 'black',
    textAlign:'center'
  },
  addtocart:{
    maxHeight: 250,
    backgroundColor: 'white',
    borderWidth: 3
  }
});
