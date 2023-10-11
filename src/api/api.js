import axios from 'axios';
    export async function productsData(){
        const data=await axios.get("https://fakestoreapi.com/products");
        //console.log(data.data);
        return data
    }
