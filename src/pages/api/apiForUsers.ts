import {supabase} from "../../supabase"
// import { v4 as uuidv4 } from 'uuid';


export const getUsersList = async () =>{
   const List = await supabase.auth.admin.listUsers().then((res) => {
        return res.data.users as User[];
    });

return List;
}

export const updateUserInAdmin = (
    id:string, 
    payload: {email: string; phone:string},
 ) => {
    return supabase.auth.admin.updateUserById(id, {...payload})
}

export const getSingleUserInAdmin = async (id:string) => {
    const res = await supabase.auth.admin.getUserById(id);
    return res.data.user;
};



export const createUserInAdmin = async (values: { email: string; phone: string }) => {

    try {
        // const userId = uuidv4();
        
        const { data, error } = await supabase.auth.admin.createUser({
         
            email: values.email,
            phone: values.phone,
            password: "temporaryPassword123!",
            email_confirm: true,
        });
    
        if (error) {
            console.error("Supabase Error:", error.message);
            throw new Error(error.message);
        }
        return data;
    } catch (err) {
        console.error("Error occurred:", err);
    }
    

};


export type User ={ 
    id:string;
    aud:string;
    role:string;
    email:string;
    email_confirmed_at:string;
    phone:string;
    confirmed_at:string;
    app_metadata:{
        provider:string;
        providers:[string];
    };
    user_metadata: object;
    identities:null;
    created_at:string;
    updated_at: string;
    is_anonymous:boolean;
}