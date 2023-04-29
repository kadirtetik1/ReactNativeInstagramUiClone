import { StyleSheet, View, TouchableOpacity} from "react-native"
import { IconsLogo, IconsLike2, IconsLike, IconsMessage } from "../../../icons"


function Header(){

    return(

        <View style={styles.header}>
            <IconsLogo fill="#000000"/>
            <View style={styles.headerRight}>

               
             

                <TouchableOpacity style={styles.buttons}>
                <IconsLike2/>  
                </TouchableOpacity>
        

                <TouchableOpacity style={styles.buttons}>
                <IconsMessage />
                </TouchableOpacity>

            
          
            

            </View>
           

            
        </View>

    )


}

const styles = StyleSheet.create({

    header:{
        height:60,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:15,
        marginTop:5
        
        
    },

    headerRight:{
        flexDirection:"row",
        alignItems:"center",
        // justifyContent:"space-evenly",
        // width:120
       
        
    },

    buttons:{
        marginLeft:20,
     

    }

})

export default Header