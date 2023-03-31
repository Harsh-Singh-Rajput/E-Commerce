import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
// https://fakestoreapi/products
// https://api.escuelajs.co/api/v1/products
export const fetchAllProducts = createAsyncThunk('products/fetchAll', async()=>{
    const response = await fetch("https://fakestoreapi.com/products")
    return await response.json()
        // setProducts(result)

    
})

const productsSlice = createSlice({
    name:"products",
    initialState:{
        value:[],
        loading:false
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchAllProducts.pending, (state)=>{
            state.loading = true
        });
        builder.addCase(fetchAllProducts.fulfilled, (state, action)=>{
            state.value = action.payload;
            state.loading = false;
        })
    }
})

export default productsSlice.reducer