import {StyleSheet} from "react-native";
import colors from "../../../theme/colors";

const styles = StyleSheet.create({

    bodyWrapper:{
        flex: 1,
        marginHorizontal: 15,

    },
    container:{
        flex: 1, justifyContent: 'center', alignItems: 'center'
    },

    heading:{
       
        fontSize: 25,
        color: "#FFFFFF",
        
        marginHorizontal: 15,
        fontWeight: "200",
    },

    dashboardPara:{
       fontSize: 19, 
      
       fontSize: 15,
       color: "#94A3B8",
       
    },

    headerSub:{
        flex: 0,
        width: "100%",
        flexDirection:"row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingVertical: 30,
    },
    
    subheadingsec:{
        
        backgroundColor: "#1E293B",
        paddingVertical: 10,
        // paddingHorizontal: 20,
        width:"100%",
        borderRadius: 10,
        marginBottom: 10,
        flex: 0,
        alignItems: "center",
        justifyContent: "center",
    },

    serverStatusHeadingGreen:{
        color: "#22C55E",
    },

    serverStatusHeadingRed:{
        color: "#EF4444",
        marginHorizontal: 10,
    },

    indicator:{
        width:"100%",
        flex: 0,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        
    },

    subIndicator:{
       
        flex: 0,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 5,
        
    },

    redIndicator:{
    marginHorizontal: 20,
    },

    subStatusDot:{
        objectFit: "contain",
        height:  30
    },

    subStatusDotYellow:{
        objectFit: "contain",
        height:  30,
        marginHorizontal: 10,
    },

    sectionHeadings:{
        color: "white",
        fontSize: 20,
        marginVertical: 5,
    },

    verticalhr:{
        color: "#94A3B8",
        marginHorizontal: 10,
        
    },

    headersubtext:{
        color: "#94A3B8",
    },

    dashboardItemsWrapper:{
        flex: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        width: "100%",
        
        // borderWidth: 1,

    },

    dashboardWrapperItem:{
        backgroundColor: "#1E293B",
        // paddingVertical: 10,
        // marginHorizontal: 10,
        marginVertical: 10,
        padding: 10,
        flex: 0,
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        width: "48%",
        borderRadius: 15,
        height: 150,
       

    },

    dashboardItemsHeading:{
        color: "#94A3B8",
    },

    subStatusHeadingsec:{
        backgroundColor: "#1E293B",
        borderRadius: 15,
        paddingVertical: 10,
        marginBottom: 10,
        paddingHorizontal: 10,
        flex: 0,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around"


    },

    serverSubStatus:{

    },


    
});

export default styles;