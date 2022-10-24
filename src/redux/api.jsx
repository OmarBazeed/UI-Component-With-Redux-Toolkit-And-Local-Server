import axios from "axios";
import { errUser, startUser, successUser } from "./userSlice";



// خد بالك من موضوع ال (اى سينكرونس) و ال (اوييت) دوول مهمين جداً لانهم بينتظروا لحد ما الداتا ترجع و متخليش باقى الكوود يشتعل الا ما الكوود بتاع ال (اوويت) يخلص لان فعلا من غيرهم ممكن يحصل ايرور و هو انك تاكسس داتا لسه اصلا مجتش من ال هووست او ال ايى بى اى جيسون و بالتالى هتديك ان-ديفيند... ركز فها مهمه جداً و دائماً ما بنستخدمها مع ال جيت و ال يوست بتاع الاكسويس او مع ال ايى بى اى بوجه عاام .. الحمد لله دائماً و ابداً
const addUser = async (user , dispatch)=>{

    dispatch(startUser())

    try{
        const api = await axios.post('http://localhost:5000/api/users', user);

        dispatch(successUser(api.data));

    }catch(err){

        dispatch(errUser())

    }

}

export default  addUser;