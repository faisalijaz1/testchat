import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    darkMode: false,
    sidebarStyle: false,
    expandMenu: false,
    mobileView: false,
    
}

const commonSlice=createSlice(
    {
        name: "dreamschat",
        initialState,
        reducers:{
            setDarkMode : (state, {payload})=>{
                state.darkMode = payload
            },
            setSidebarStyle : (state, {payload})=>{
                state.sidebarStyle = payload
            },
            setExpandMenu : (state, {payload})=>{
                state.expandMenu = payload
            },
            setMobileView : (state, {payload})=>{
                state.mobileView = payload
            }
        }
        
    }
)

export const {setDarkMode} = commonSlice.actions
export const {setSidebarStyle} = commonSlice.actions
export const {setExpandMenu} = commonSlice.actions
export const {setMobileView} = commonSlice.actions
export default commonSlice.reducer
