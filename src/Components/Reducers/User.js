import {createReducer} from '@reduxjs/toolkit'

const Initialstate = {}

export const UserReducer = createReducer(Initialstate,{
    registerRequest:(state ) => {
        state.loading = true;
    },
      registerSucess:(state , action)=>{
          state.loading = false;
          state.user = action.payload
          
      },
      registerFailure:(state, action)=>{
        state.loading = false;
        state.error = action.payload
       
      }  
})