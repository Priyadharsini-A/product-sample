import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
const initialState={
    productList:[],
    isLoading:false,
    error:'',
    categories:[]
    
};
const BASE_URL="https://dummyjson.com/products"
//Get
export const getTaskFromServer = createAsyncThunk(
    "tasks/getTaskFromServer",
    async (_, {rejectWithValue}) => {
      const response = await fetch(BASE_URL);
      if (response.ok) {
        const jsonResponse = await response.json();
        console.log("APIResponse",jsonResponse)
        return jsonResponse;
      } else {
        return rejectWithValue({ error: "No tasks found" });
      }
    }
  );
  export const getCategoriesFromServer = createAsyncThunk(
    'categories/getCategoriesFromServer',
    async (_, { rejectWithValue }) => {
      try {
        const response = await fetch('https://dummyjson.com/products/categories');
        if (!response.ok) {
          throw new Error('Unable to fetch categories');
        }
        const categories = await response.json();
        return categories;
      } catch (error) {
        return rejectWithValue({ error: error.message });
      }
    }
  );
export const ProductSlice=createSlice({
    name:'productSlice',
    initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(getTaskFromServer.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(getTaskFromServer.fulfilled,(state,action)=>{
            state.isLoading=false
            state.error=''
            state.productList=action.payload
            console.log("Reducer State:", state.productList)
        })
        .addCase(getTaskFromServer.rejected,(state,action)=>{
            state.error=action.payload.error
            state.isLoading=false
            state.productList=[]
        })
        builder.addCase(getCategoriesFromServer.fulfilled, (state, action) => {
          state.categories = action.payload;
        });
    }

})
export default ProductSlice.reducer;