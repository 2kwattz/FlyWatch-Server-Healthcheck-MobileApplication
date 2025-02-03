import {StyleSheet} from "react-native";
import colors from "../../../theme/colors";
import notFoundImage from '../../../assets/images/general/notfound.png';

const styles = StyleSheet.create({

    bodyWrapper:{
        flex: 1,
       

    },

    heading:{
        marginTop: 30,
        marginBottom: 15,
        fontSize: 20,
        color: colors.black1,
        marginHorizontal: 15,
        fontWeight: "800",
    },

    dashboardPara:{
       fontSize: 19, 
       marginHorizontal: 15,
       fontSize: 15,
       marginBottom: 10,
    },

    dashboardItemsWrapper:{
        flex: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        width: "100%",
        // borderWidth: 1,

    },

    dashboardWrapperItem:{
        backgroundColor: "#3498DB",
        // paddingVertical: 10,
        marginHorizontal: 5,
        marginVertical: 10,
        padding: 10,
        flex: 0,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        borderRadius: 15,

    },

    notFoundText:{

        fontSize: 18,
        textAlign: "center",
        width: "100%",
        marginTop: 30,
        color: "white",
    },

    buttonPrimary:{
        marginTop: 20,
        padding: 15,
        backgroundColor: colors.colorPrimary,
        width: 200,
        textAlign: "center",
        borderRadius: 15,
    },
    buttonText:{
        color: "white",
        textAlign: "center",
        fontSize: 16,
    },

    notFoundImage:{
        height: 250,
        width: 250,
    },

    dashboardItemsHeading:{
        
    }
});

export default styles;