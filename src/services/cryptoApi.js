import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '665647b101msha91a2b9c70a1f00p1fe60djsn50ceb15b3a0b',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}
//1.p.///////oop//
const baseUrl =  'https://coinranking1.rapidapi.com/coins';


const createRequest = (url) => ({
    url, 
    headers: cryptoApiHeaders,
})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => {
        getCryptos: builder.query({
            query: () => createRequest('/coins')
        })
    }
});







export const {
    useGetCryptosQuery,
} = cryptoApi;
