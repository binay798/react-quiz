import React,{useReducer,createContext} from 'react';
import reducer from './Reducer';
import book from '../assets/images/book.jpg';

const categories = [
    {name:"General Knowledge",id:9,img:book},
    {name:"Books",id:10,img:book},
    {name:"Film",id:11,img:book},
    {name:"Music",id:12,img:book},
    {name:"Musicals & Theatres",id:13,img:book},
    {name:"Television",id:14,img:book},
    {name:"Video Games",id:15,img:book},
    {name:"Board Games",id:16,img:book},
    {name:"Science & Nature",id:17,img:book},
    {name:"Computers",id:18,img:book},
]

const initialState = {
    categories:categories,
    question: [],
    selectedCategorie:null,
    difficultyLevel:null,
    totalQuestions:10,
    skippedQuestions:[],
    score:0
}
export const GlobalContext = createContext();


const Store = ({children}) => {

    const [state,dispatch] = useReducer(reducer,initialState);

    return (
        <GlobalContext.Provider value={{state,dispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default Store;