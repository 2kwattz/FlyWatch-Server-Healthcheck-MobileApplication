// HomeScreen.js
import React, { useContext, useState, useEffect } from 'react';
import { Button, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';
import { AppContext } from '../../context/AppContext';

// Images & Icons

import deploymentIcon from '../../../assets/images/icons/deployment.png';
import cloudStorageIcon from '../../../assets/images/icons/cloudStorage.png';
import streamingIcon from '../../../assets/images/icons/streaming.png';
import cyberSecurityIcon from '../../../assets/images/icons/cybersec.png';
import staticHostingIcon from '../../../assets/images/icons/staticHosting.png';
import iotIcon from '../../../assets/images/icons/iot.png'
import LinearGradient from 'react-native-linear-gradient';
import greendotImage from '../../../assets/images/icons/greendot.png'
import settingsImage from '../../../assets/images/icons/settings.png'
import yellowdotImage from '../../../assets/images/icons/yellowdot.png'
import reddotImage from '../../../assets/images/icons/reddot.png'
import syslogs from '../../../assets/images/icons/syslogs.png'
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native'; // Import the hook
import colors from '../../../theme/colors';
import refreshImage from '../../../assets/images/icons/refresh.png';
import FlashMessage,{showMessage, hideMessage} from 'react-native-flash-message';


export default function HomeScreen({ navigation }) {

        const { passwordContext } = useContext(AppContext)

        const [serverResult, setServerResult] = useState(null)
        const [flightTrackingStatus, setFlightTrackingStatus] = useState(null)
        const [lastCalledTime, setLastCalledTime] = useState(null);
        const [lastUpdatedStatus, setLastUpdatedStatus] = useState("Never")
        const [serverStatus, setServerStatus] = useState("Server Down")


        useEffect(() => {
                console.log("VALUE OF LASTCALLEDTIME CHANGED", lastCalledTime)
        }, [lastCalledTime])

        // Logic to calculate and format relative time




        useEffect(() => {
                const updateRelativeTime = () => {
                        if (lastCalledTime) {
                                const currentTime = Date.now(); // Get current time in milliseconds
                                const lastCalledTimeMs = new Date(lastCalledTime).getTime(); // Convert lastCalledTime to milliseconds
                                const timeDifference = currentTime - lastCalledTimeMs;

                                // Calculate seconds difference
                                const seconds = Math.floor(timeDifference / 1000);

                                if (seconds < 2) {
                                        setLastUpdatedStatus('Just now');
                                } else if (seconds > 3 && seconds <= 10) {
                                        setLastUpdatedStatus(`${seconds} second${seconds > 1 ? 's' : ''} ago`);
                                } else {
                                        setLastUpdatedStatus(`${seconds} second${seconds > 1 ? 's' : ''} ago`);
                                }
                        }
                };

                // Update the relative time every second
                const intervalId = setInterval(updateRelativeTime, 1000);

                // Cleanup: clear the interval when the component is unmounted
                return () => clearInterval(intervalId);
        }, [lastCalledTime]);

        useEffect(() => {
                // Function to fetch data
                const fetchServerStatus = () => {
                        axios
                                .get('http://150.107.210.11/api/server-status',{
                                        timeout: 5000 })
                                // .get('http://192.168.31.38:3000/api/print-logs')
                                // http://192.168.56.1/
                                
                                // Replace with your API URL
                                .then((response) => {
                                        if(response.status !== 200){
                                                setServerStatus("Server Down")
                                                return false

                                        }
                                        let currentTime = new Date();
                                        setLastCalledTime(currentTime)

                                        console.log('response.data', response?.data);
                                        setServerResult(response?.data["result"]); // Assuming the result is in the 'result' key
                                        setFlightTrackingStatus(response?.data["status"])
                                        setServerStatus("Server Active")
                                        return true
                                })
                                .catch((err) => {
                                        console.log('error', err);
                                        let currentTime = new Date();
                                        setLastCalledTime(currentTime)
                                        console.log(lastCalledTime)
                                        setServerStatus("Server Down")
                                        return false


                                });
                };

                // Fetch data initially when the component mounts
                fetchServerStatus();

                // Set interval to call the API every 10 seconds (10000 ms)
                const intervalId = setInterval(fetchServerStatus, 10000);

                // Cleanup: clear the interval when the component is unmounted
                return () => clearInterval(intervalId);
        }, []); // Empty dependency array to run only once when the component mounts

        console.log("I am in home screen")

        function onPressRefresh(){

                console.log("REFRESHED")

                const fetchServerStatus = () => {
                        axios
                                .get('http://150.107.210.11/api/server-status')
                                // .get('http://192.168.31.38:3000/api/print-logs')
                                // http://192.168.56.1/
                                
                                // Replace with your API URL
                                .then((response) => {
                                        let currentTime = new Date();
                                        setLastCalledTime(currentTime)
                                        // if(response.status !== 200){
                                        //         setServerStatus("Server Down")
                                        //         return false
        
                                        // }
                                        
                                        console.log('response.data', response?.data);
                                        setServerResult(response?.data["result"]); // Assuming the result is in the 'result' key
                                        setFlightTrackingStatus(response?.data["status"])
                                        setServerStatus("Server Active")
                                        return true
                                })
                                .catch((err) => {
                                        console.log('error', err);
                                        let currentTime = new Date();
                                        setLastCalledTime(currentTime)
                                        console.log(lastCalledTime)
                                        setServerStatus("Server Down")
                                        return false


                                });
                };

                const refreshServerResponse = fetchServerStatus()

                console.log("Server Refresh status", refreshServerResponse)

                if(refreshServerResponse){

                        showMessage({
                                message: 'Success',
                                description: 'Tracker Server Refreshed Successfully.',
                                type: 'success', // 'success', 'danger', 'info', 'warning'
                                duration: 3000,
                            });

                }
                else{
                        showMessage({
                                message: 'Error',
                                description: 'Server Down. Please try again later.',
                                type: 'danger', // 'success', 'danger', 'info', 'warning'
                                duration: 3000,
                            });      
                }
        }




        return (

                <LinearGradient colors={['#1A2B4D', '#0F172A']} start={{ x: 10, y: 0 }} end={{ x: 1, y: 1 }} style={styles.container} >
                        <ScrollView style={styles.bodyWrapper} showsVerticalScrollIndicator={false}>

                                <View style={styles.header}>
                                        <View style={styles.headerSub}>
                                                <Text style={styles.heading}>FlyWatch by 2kwattz</Text>
                                                <View style={{flex:0, alignItems: "center", justifyContent:"space-around", flexDirection:"row", marginHorizontal: 10}}>

                                                <TouchableOpacity >
                                                        <Image source={settingsImage} style={{ height: 20, objectFit: "contain" }} />
                                                </TouchableOpacity>

                                                <TouchableOpacity onPress={onPressRefresh}>
                                                        <Image source={refreshImage} style={{ height: 20, objectFit: "contain" }} />
                                                </TouchableOpacity>
                                                </View>

                                                
                                        </View>

                                        <View style={styles.serverStatus}>
                                        
                                                <View style={styles.subheadingsec}>
                                                        <View style={[styles.indicator,{paddingHorizontal:serverStatus === "Server Active"?0:10,paddingVertical:serverStatus === "Server Active"?0:10}]}>
                                                        {
                                                                serverStatus === "Server Active"?<Image source={greendotImage} />:
                                                                
                                                                <Image source={reddotImage} styles={styles.redIndicator}  />
                                                                
                                                        }
                                                               
                                                                <Text style={serverStatus === "Server Active"?
                                                                        styles.serverStatusHeadingGreen:styles.serverStatusHeadingRed
                                                                        }>{serverStatus}</Text>
                                                                <Text style={styles.verticalhr}>|</Text>

                                                                <Text style={styles.headersubtext}> Last Updated: {lastUpdatedStatus}</Text>


                                                        </View>
                                                </View>
                                                <View style={[styles.subheadingsec,{paddingHorizontal:10,paddingVertical: 20}]}>
                                                        <Text style={styles.dashboardPara}>Just a temporary platform to track your favourite aircrafts till i make a full fledged mobile application.


                                                        </Text>
                                                </View>

                                        </View>

{/* Sub statuses */}
                                        <View style={styles.serverSubStatus}>
                                                <View style={styles.subStatusHeadingsec}>
                                                <View>
                                        <Text style={styles.sectionHeadings}>Flight Tracking Status </Text>

                                                </View>
                                                        <View style={styles.subIndicator}>
                                                        {
                                                                flightTrackingStatus === "Task Started"?
                                                                <Image style={styles.subStatusDot} source={greendotImage} />:
                                                                flightTrackingStatus === "Task Finished"?
                                                                 <Image style={styles.subStatusDotYellow} source={yellowdotImage} />:
                                                                 flightTrackingStatus === "Error"?
                                                                 <Image style={styles.subStatusDot} source={yellowdotImage} />:
                                                                 serverStatus === "Server Down"?
                                                                 <Image style={styles.subStatusDot} source={reddotImage} />:
                                                                 console.log("No Statuses are matching")
                                                                 

                                                        }
                                                               
                                                                <Text style={{color: flightTrackingStatus === "Task Started"?"#22C55E":flightTrackingStatus === "Task Finished"?"#FBB040":flightTrackingStatus === "Not Started"?"#94A3B8":flightTrackingStatus === "Error"?"#EF4444":"#EF4444"}}>{flightTrackingStatus === "Task Finished"?"Sleeping":flightTrackingStatus === "Task Started"?"Running":flightTrackingStatus === "Not Started"?"Please wait":flightTrackingStatus === "Error"?"Error":"Unable to fetch"}</Text>

                                                        </View>

                                                        <View style={{padding: 5}}>

                                                <Text style={{color: "#94A3B8"}}>{flightTrackingStatus === "Task Finished"?"The Flight Tracker is dormant and will start again in 15 minutes":flightTrackingStatus === "Task Started"?"Latitude and Longitude of the specified flights are being tracked and a VoIP call will be initiated on the required condition.":""}</Text>
                                                        </View>
                                                </View>

                                                {/* Tracker Statuses */}

                                        </View>

                                </View>

                                <View style={styles.dashboardItemsWrapper}>
                                        <View style={styles.dashboardWrapperItem}>
                                                <Image source={syslogs} filter="url(#invert)" style={{ height: 33, width: 33 }} />
                                                <Text style={styles.dashboardItemsHeading}>Server Logs </Text>
                                        </View>
                                        <TouchableOpacity style={styles.dashboardWrapperItem} onPress={() => navigation.navigate('Deployments')}>
                                                <Image source={deploymentIcon} style={{ height: 33, width: 33 }} />
                                                <Text style={styles.dashboardItemsHeading}>Flight Tracker Logs </Text>
                                        </TouchableOpacity>

                                        <View style={styles.dashboardWrapperItem}>
                                                <Image source={streamingIcon} style={{ height: 33, width: 33 }} />
                                                <Text style={styles.dashboardItemsHeading}>Flight Statuses </Text>
                                        </View>

                                        <View style={styles.dashboardWrapperItem}>
                                                <Image source={staticHostingIcon} style={{ height: 33, width: 33 }} />
                                                <Text style={styles.dashboardItemsHeading}>Configure</Text>
                                        </View>

                                        <View style={styles.dashboardWrapperItem}>
                                                <Image source={cyberSecurityIcon} style={{ height: 33, width: 33 }} />
                                                <Text style={styles.dashboardItemsHeading}>Add Aircrafts</Text>
                                        </View>
                                        <View style={styles.dashboardWrapperItem}>
                                                <Image source={iotIcon} style={{ height: 33, width: 33 }} />
                                                <Text style={styles.dashboardItemsHeading}>Set Buzzer</Text>
                                        </View>


                                        {/* <View style={styles.dashboardWrapperItem}>
                                        <Image source={iotIcon} style={{ height: 33, width: 33 }} />
                                        <Text style={styles.dashboardItemsHeading}>Settings</Text>
                                </View>

                                <View style={styles.dashboardWrapperItem}>
                                        <Image source={cyberSecurityIcon} style={{ height: 33, width: 33 }} />
                                        <Text style={styles.dashboardItemsHeading}>Logout </Text>
                                </View> */}


                                </View>
                                {/* <Text style={{ fontSize: 20 }}> Value of Password from Context {passwordContext} </Text> */}
<Text style={{color:"white", textAlign:"center", marginBottom:15}} onPress={()=>{navigation.navigate("Login")}}> Have an account? Login</Text>
                        </ScrollView>
                </LinearGradient>
        );
}