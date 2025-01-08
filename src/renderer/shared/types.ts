// Define a type for the slice state
export interface IMainState {
  chats: IChatBubble[];
  user_details: TUserDetails;
  showDropdown: boolean;
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
  user_id: number;
  id: number;
  conversation_id: number;
}

export type TUserDetails = {
  id: number;
  name: string;
  phone_number: string;
  profile_image: string;
}

export interface IListItem {
  icon?: any; 
  title: string; 
  isRoute?: boolean; 
  info?: string;
  style?: React.CSSProperties;
}