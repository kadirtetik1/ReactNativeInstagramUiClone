
import { ScrollView, View, Text, Image, StyleSheet } from "react-native"
import storiesData from "../../../data/storiesData"
import { LinearGradient } from 'expo-linear-gradient';

function Stories(){
    return(
<View style={{paddingVertical:10, borderBottomWidth:0.5, borderColor:"#b2b2b2"}}>
<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {storiesData.map(story=> (
                <View key={story.id} style={{alignItems:"center", justifyContent:"center", width:77}}>
                    
                    <LinearGradient 
                colors={['#DE0046', '#F7A34B']}
                style={styles.story}
                
                >
                
                    <Image  style={styles.profilePic}

                    source={{
                        uri:story.user.profilePic
                    }}
                    />
                </LinearGradient>
                <Text style={{fontSize:13}} numberOfLines={1}>{story.user.name}</Text>
                </View>
                
                
            ))}
        </ScrollView>
</View>
        

    )
}

const styles = StyleSheet.create({

    story:{
        width:67,
        height:67,
        borderRadius:33.5,
        alignItems:"center",
        justifyContent:"center",
        marginHorizontal:5,
        marginBottom:2,

       
    },
    profilePic:{
        width:62,
        height:62,
        borderRadius:31,
        borderWidth:2,
        borderColor:"#ffffff"


    }
})


export default Stories