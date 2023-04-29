import { TouchableOpacity } from "react-native"
import { View, Text, StyleSheet, Image } from "react-native"
import { Icons3nokta, IconsComment, IconsLikedRed, IconsShare, IconsKaydet } from "../../icons"
import FitImage from "./FitImage"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"

dayjs.extend(relativeTime)

function Post({post}){


    return(
        <View style={{marginBottom:20, marginTop:5}}>
            <View style={styles.postTop}>
                <View style={{flexDirection:"row"}}>

                  
                <Image  style={styles.profilePic}

source={{
    uri:"https://avatars.githubusercontent.com/u/125480282?s=96&v=4"
}}
/>
<View style={{paddingLeft:5}}>
<Text>{post.name}</Text>
<Text>{post.location}</Text>

</View>

                </View>   
<View style={{justifyContent:"center", alignItems:"center"}}>
    <TouchableOpacity>
    <Icons3nokta/>

    </TouchableOpacity>

</View>

            </View>
            {/* <Image  style={styles.postImage}
                source={{
                     uri:post.image
                     }} 
                     /> */}
                     
                     <FitImage src={post.image}/>

            <View style={styles.postBottomButtons}>

            <View style={{flexDirection:"row"}}>
                <TouchableOpacity>
                <IconsLikedRed/>
                </TouchableOpacity>
           <TouchableOpacity>
             <IconsComment/>
           </TouchableOpacity>

           <TouchableOpacity>
           <IconsShare/>
            
            </TouchableOpacity>
            
            </View>
            <TouchableOpacity>
            <IconsKaydet/> 

            </TouchableOpacity>
 
            
            </View>

            <View style={{margin:10}}>
                <Text  style={{fontWeight:600}}>{post.likes} likes</Text>
                <View style={{flexDirection:"row"}}>
                <Text style={{fontWeight:600}}>{post.name}</Text>
                <Text> {post.description}</Text>
                </View>
                <TouchableOpacity>
                <Text style={{color:"#6c6c6c"}}>View all {post.comments} comments</Text>
                </TouchableOpacity>
                

                <View style={{flexDirection:"row",alignItems:"center", marginTop:5}}>
                <Image  style={styles.profilePicComment}
                source={{
                     uri:"https://avatars.githubusercontent.com/u/125480282?s=96&v=4"
                     }} 
                     />
                     <TouchableOpacity>
                     <Text style={{color:"#6c6c6c"}}>Add a comment...</Text>

                     </TouchableOpacity>
                    
                    
                </View>

                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Text style={{color:"#6c6c6c", fontSize:12, fontWeight:400}}>{dayjs().to(dayjs(post.date))} </Text>
                    <TouchableOpacity>
                    <Text style={{fontWeight:500, fontSize:12, marginLeft:5}}> . See translation</Text>

                    </TouchableOpacity>
                    

                </View>
                
            </View>

           
                  
        </View>


    )
}

const styles = StyleSheet.create({
    profilePic:{
        width:40,
        height:40,
        borderRadius:20,
        borderWidth:2,
        borderColor:"#ffffff"

    },
    profilePicComment:{
        width:30,
        height:30,
        borderRadius:15,
        borderWidth:2,
        borderColor:"#ffffff",
        marginRight:5,

    },
    postImage:{
        width:450,
        height:450,


    },

    postTop:{
        flexDirection:"row", 
        justifyContent:"space-between",
        padding:5,

    },
    postMiddle:{

    },
    postBottomButtons:{
        flexDirection:"row",
        justifyContent:"space-between",
        margin:10,


    },
   



})

export default Post