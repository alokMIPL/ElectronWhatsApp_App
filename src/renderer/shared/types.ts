// Define a type for the slice state
export interface IMainState {
  chats: IChatBubble[];
  user_details: TUserDetails;
}

export interface IChatHead {
  id: number;
  name: string;
  lastMessage: string;
  profileImage: string;
  phone: string;
}

export interface IChatBubble {
  message: string;
  time: string;
  user_id: string;
  id: number;
  conversation_id: number;
}

export type TUserDetails = {
  id: number;
  name: string;
  phone_number: string;
  profile_image: string;
}