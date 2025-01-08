import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {IMainState, IChatBubble} from './types'



// Define the initial state using that type
const initialState: IMainState = {
  chats: [],
  user_details: {
    id: 658,
    name: "Paulos Ab",
    phone_number: "+234 0706 788 9902",
    profile_image: "https://tse1.mm.bing.net/th?id=OIP.hCfHyL8u8XAbreXuaiTMQgHaHZ&pid=Api&P=0&h=180"
  },
  showDropdown: false
}

export const mainSlice = createSlice({
  name: 'main',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updateChatBubble: (state, action: PayloadAction<IChatBubble>) => {
      state.chats.push(action.payload)
    },
    setShowDropdown: (state, action: PayloadAction<boolean>) => {
      state.showDropdown = action.payload
    },
  }
})

export const { 
  updateChatBubble,
  setShowDropdown
} = mainSlice.actions

export default mainSlice.reducer