import React, {useState} from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import styles from "./styles";

import arrowLeft from '../../../assets/images/icons/arrow-left.png'
// import styles from 

const ScreenHeader = ({ title, navigation }) => {
    return (
      <View style={styles.headerContainer}>
  
        {title !== 'Dashboard' && <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
         <Image source={arrowLeft} style={{height: 24, width: 24}}/>
        </TouchableOpacity> }

        <Text style={[styles.title,title === 'Dashboard'&& {width:"100%", textAlign: "center"}]}>{title}</Text>

        <View>
            
        </View>
      </View>
    );
  };

  export default ScreenHeader;
  