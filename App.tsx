import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import cart from './icons/cart.png' 
import plus from './icons/plus.png'
import minus from './icons/minus.png'
import bin from './icons/bin.png'
import refresh from './icons/refresh.png'
import recycle from './icons/recycle.png'
export default function App() {
  const [totalItems, setTotalItems] = useState<number>(0);
  const [item1count, setItem1] = useState<number>(0);
  const [item2count, setItem2] = useState<number>(0);
  const [item3count, setItem3] = useState<number>(0);
  const [item4count, setItem4] = useState<number>(0);
  const [removeAllflag, setremoveAllFlag] = useState<boolean>(true)
  const [flag1, setFlag1] = useState<boolean>(true);
  const [flag2, setFlag2] = useState<boolean>(true);
  const [flag3, setFlag3] = useState<boolean>(true);
  const [flag4, setFlag4] = useState<boolean>(true);

  const removeProduct = (num: number) => {
    if (num === 1) {
      setFlag1(false);
      setItem1(0);
    }
    if (num === 2) {
      setItem2(0);
      setFlag2(false);
    }
    if (num === 3) {
      setItem3(0);
      setFlag3(false);
    }
    if (num === 4) {
      setItem4(0);
      setFlag4(false);
    }
  }

  const removeAll = () => {
    setremoveAllFlag(false);
    setItem1(0);
    setItem2(0);
    setItem3(0);
    setItem4(0);
  }

  const plusItem = (num: number) => {
    if (num === 1) {
      setItem1(item1count + 1);
    }
    if (num === 2) {
      setItem2(item2count + 1);
    }
    if (num === 3) {
      setItem3(item3count + 1);
    }
    if (num === 4) {
      setItem4(item4count + 1);
    }
  }

  const minusItem = (num: number) => {
    if (num === 1 && item1count >= 1) {
      setItem1(item1count - 1);
    }
    if (num === 2 && item2count >= 1) {
      setItem2(item2count - 1);
    }
    if (num === 3 && item3count >= 1) {
      setItem3(item3count - 1);
    }
    if (num === 4 && item4count >= 1) {
      setItem4(item4count - 1);
    }
  }

  const refreshAll = () => {
    setItem1(0);
    setItem2(0);
    setItem3(0);
    setItem4(0);
  }

  useEffect(() => {
    setTotalItems(item1count + item2count + item3count + item4count)
  }, [item1count, item2count, item3count, item4count, flag1, flag2, flag3, flag4])

  return (
    <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image style={{ width: 30, height: 30 }} source={require('./icons/cart.png')} />
        <Text style={{ marginLeft: 5, marginRight: 10 }}>{totalItems}</Text>
        <Text>Items</Text>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
      <TouchableOpacity onPress={()=>refreshAll()} >
          <Image style={{ width: 30, height: 30, marginRight: 20 }} source={require('./icons/refresh.png')} />
      </TouchableOpacity>
        <TouchableOpacity onPress={()=>removeAll()} >
        <Image style={{ width: 30, height: 30 }} source={require('./icons/recycle.png')} />
        </TouchableOpacity>
        
      </View>
      {removeAllflag && (
        <View>
          {flag1 && (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text  style={{ marginRight: 10 }}>{item1count > 0 ? item1count : "ZERO"}</Text>
              <TouchableOpacity onPress={()=>plusItem(1)} >
                <Image  style={{ width: 30, height: 30, marginRight: 10 }}  source={require('./icons/plus.png')} />  
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>minusItem(1)} >
                 <Image style={{ width: 30, height: 30, marginRight: 10 }} source={require('./icons/minus.png')} />  
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>removeProduct(1)} >
                <Image style={{ width: 30, height: 30 }} source={require('./icons/bin.png')} />
              </TouchableOpacity>
            </View>
          )}
           {flag2 && (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text  style={{ marginRight: 10 }}>{item2count > 0 ? item2count : "ZERO"}</Text>
              <TouchableOpacity onPress={()=>plusItem(2)} >
                <Image  style={{ width: 30, height: 30, marginRight: 10 }}  source={require('./icons/plus.png')} />  
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>minusItem(2)} >
                 <Image style={{ width: 30, height: 30, marginRight: 10 }} source={require('./icons/minus.png')} />  
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>removeProduct(2)} >
                <Image style={{ width: 30, height: 30 }} source={require('./icons/bin.png')} />
              </TouchableOpacity>
            </View>
          )}
           {flag3 && (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text  style={{ marginRight: 10 }}>{item3count > 0 ? item3count : "ZERO"}</Text>
              <TouchableOpacity onPress={()=>plusItem(3)} >
                <Image  style={{ width: 30, height: 30, marginRight: 10 }}  source={require('./icons/plus.png')} />  
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>minusItem(3)} >
                 <Image style={{ width: 30, height: 30, marginRight: 10 }} source={require('./icons/minus.png')} />  
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>removeProduct(3)} >
                <Image style={{ width: 30, height: 30 }} source={require('./icons/bin.png')} />
              </TouchableOpacity>
            </View>
          )}
           {flag4 && (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text  style={{ marginRight: 10 }}>{item4count > 0 ? item4count : "ZERO"}</Text>
              <TouchableOpacity onPress={()=>plusItem(4)} >
                <Image  style={{ width: 30, height: 30, marginRight: 10 }}  source={require('./icons/plus.png')} />  
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>minusItem(4)} >
                 <Image style={{ width: 30, height: 30, marginRight: 10 }} source={require('./icons/minus.png')} />  
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>removeProduct(4)} >
                <Image style={{ width: 30, height: 30 }} source={require('./icons/bin.png')} />
              </TouchableOpacity>
            </View>
          )}

      </View>
       )}
       </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
