import axios from 'axios';
import { apikey  } from '../constants';

const apiBaseUrl='https://www.omdbapi.com/'
const trendingMovieEndpoint =`${apiBaseUrl}?s=Trending&i=2022&type=movie&apikey=${apikey}`
const upcomingMovieEndpoint=`${apiBaseUrl}?s=upcoming&type=movie&apikey=${apikey}`
const topratedMovieEndpoint=`${apiBaseUrl}?s=top+rated&type=movie&apikey=${apikey}`
const imdbID='tt2402661'

const movieDetailsEndpoint =(imdbID:string)=> `${apiBaseUrl}/?i=${imdbID}&apikey=${apikey}`
const movieCreditsEndpoint=(imbdId:string)=>`${apiBaseUrl}?i=${imdbID}&apikey=${apikey}&append_to_response=credits`

const apicall= async(endpoint:any,)=>{
    const options = {
        method: 'GET',
        url:endpoint,
        // params:params? params:{}
    }
    console.log("End point inside api call",endpoint)

    try{
        const response= await axios.get(endpoint);
        console.log(response)
        return response.data;

    }catch(error){
    console.log('error',error)
    return{}
}
}

export const fetchTrendingMovies=()=>{
    return apicall(trendingMovieEndpoint)
}

export const fetchupcomingMovies=()=>{
    return apicall(upcomingMovieEndpoint)
}

export const fetchuTopMovies=()=>{
    return apicall(topratedMovieEndpoint)
}

export const fetchmovieDetails =(imdbID: string)=>{
    return apicall(movieDetailsEndpoint)
}

export const fetchmovieCredit =(imdbID: string)=>{
    
    return apicall(movieCreditsEndpoint)
}

// export const functioncall=async()=>{
//     try{
//         const data= await.axios.get(``)
//         return data.status;
//     }catch(err){
//         return(err)
//     }

// }