import {StyleSheet} from "react-native";
import colors from "../../../theme/colors";

const styles = StyleSheet.create({

    bodyWrapper:{
        backgroundColor: "white",
        flex: 1,
    },

    logoSection:{

        // borderWidth: 4,
        marginTop: 90,
        flex: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"center",
    },

    textHeading:{
        fontSize: 28,
        textAlign: "center",
        marginTop: 20,
        color: "black",
    },


    textSubHeading:{
        fontSize: 18,
        textAlign: "center",
        marginTop: 20,
        color: "#6B7280",
        width: "80%",
        margin:"auto",
        textAlign:"center",
  

    },

    loginForm:{
        flex: 0,
        flexDirection: "column",
        marginTop: 60,
        justifyContent: "center",
        alignItems: "center",
    },

    buttonPrimary:{
        marginTop: 20,
        padding: 15,
        backgroundColor: "#4299E1",
        width: "80%",
        textAlign: "center",
        borderRadius: 15,
    },
    buttonText:{
        color: "white",
        textAlign: "center",
        fontSize: 16,
    },

    baseInputText:{
        backgroundColor: colors.backgroundWhite,
        marginBottom: 10,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        width: 300,
    },
});

export default styles;