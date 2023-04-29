import { View, ScrollView} from "react-native"
import Header from "./components/Header"
import Stories from "./components/Stories"
import Post from "../../components/shared/Post"
import postData from "../../data/postData"




function Home(){

    return (

        <ScrollView style={{backgroundColor:"#ffffff"}}>
            <Header/> 
            <Stories/>
            {postData.map(post => <Post key={post.id} post={post}/>)}
           
        </ScrollView>

    )
}


export default Home