// HomeScreen.js
import React, { useContext, useState,useEffect } from 'react';
import {Button, View, Text, Image,TouchableOpacity,ScrollView} from 'react-native';
import styles from './styles';
import axios from 'axios';
import refreshImage from '../../../assets/images/icons/refresh.png'

// Images & Icons

import deploymentIcon from '../../../assets/images/icons/deployment.png';
import notFoundImage from '../../../assets/images/general/notfound.png';

import LinearGradient from 'react-native-linear-gradient';

export default function DeploymentsScreen({ navigation }) {



    const [deployment, setDeployment] = useState()

    const [formattedDeployment,setFormattedDeployment] = useState([])

    useEffect(()=>{
        
        if(deployment){
            setFormattedDeployment(JSON.stringify(deployment, null, 2)); 
        }
    },[deployment])

    useEffect(() => {
        // Function to fetch data
        const fetchServerStatus = () => {
                axios
                        .get('http://150.107.210.11/api/print-logs/',{
                            timeout: 10000 }) // Replace with your API URL
                        // .get('http://192.168.31.38:3000/api/print-logs/')
                        .then((response) => {
                             console.log("RESPONSE FROM DEPLOYMENT STATUS",response)
                            setDeployment([response?.data?.print_logs])

                            if(!response){
                                setDeployment(false)
                                
                            }
                        })
                        .catch((err) => {
                                console.log('error', err);
                                setDeployment(false)
                                

                        });
        };

        // Fetch data initially when the component mounts
        fetchServerStatus();

        // Set interval to call the API every 10 seconds (10000 ms)
        const intervalId = setInterval(fetchServerStatus, 5000);

        // Cleanup: clear the interval when the component is unmounted
        return () => clearInterval(intervalId);
}, []); // Empty dependency array to run only once when the component mounts

    console.log("I am in deployment screen")
    return (
        <LinearGradient colors={['#0F172A','#1A2B4D',]} start={{ x: 1, y: 0 }} end={{ x: 1, y: 1 }} style={styles.bodyWrapper} >
        <View style={styles.bodyWrapper}>

            {!formattedDeployment || formattedDeployment.length === 0 ? <React.Fragment>

                <View style={{flex: 1, flexDirection: "column", flexWrap: "wrap", justifyContent: "center", alignItems:"center"}}>
                    <Image source={notFoundImage} style={styles.notFoundImage} />

                <Text style={styles.notFoundText}> No Logs Found </Text>

                <Text style={styles.notFoundText}> Please ensure the Server is Up and Running </Text>

                <TouchableOpacity style={styles.buttonPrimary}>
            <Text style={styles.buttonText}>Start Server</Text>
          </TouchableOpacity>
                </View>


            </React.Fragment> : <React.Fragment>

               <ScrollView contentContainerStyles={styles.dashboardWrapperItem}>
               <Text style={{color: "white"}}>
                {formattedDeployment}
               </Text>


        </ScrollView>
            </React.Fragment>}
        </View>
        </LinearGradient>
    );
}
