import { Post } from "../post/post.types";
import { Dispatch, SetStateAction } from "react";

export type User = {
  name: string;
  userId: string;
  bio?: string;
  image: string | null;
  privacy: boolean;
  post?: Post[];
};

export type Friend = {
  friendId: string;
  friendName: string;
  friendImage: string;
};

export type SearchUser = {
  searchUserId: string;
  searchUserName: string;
  searchUserImage: string;
};

export type UserInitialState = {
  topUsers: User[];
  userProfile: User | null;
  userLoading: boolean;
  sentRequests: Request[];
  receivedRequests: Request[];
  friends: Friend[];
  loadedUser: LoadedUser | null;
  searchResult: SearchUser[];
};

export type Request = {
  requestId: string;
  userId: string;
  name: string;
  image: string | null;
};

export type EditProfile = {
  name: string;
  bio: string;
  profileImage: string;
  fileUploadInfo: string;
  privacy: boolean;
  formTouched: boolean;
};

export type EditProfileAction =
  | { type: "ADD_NAME"; payload: string }
  | { type: "ADD_BIO"; payload: string }
  | { type: "ADD_IMAGE"; payload: string }
  | { type: "SET_FILE_UPLOAD_INFO"; payload: string }
  | { type: "SET_PRIVACY"; payload: boolean };

export type UserListItemProps = {
  name: string;
  image: string | null;
  userId?: string;
  requestId?: string;
  userItemType: ButtonToRender;
};

export type ButtonToRender =
  | "ONLY_LINK"
  | "ONLY_DELETE"
  | "LINK_AND_DELETE"
  | "UNLINK"
  | null;

export type ProfileDetailProps = {
  userName: string;
  image: string;
  bio: string;
  postCount: number;
  friends: Friend[] | null;
  friendsCount?: number;
  buttonType: MyProfileButton;
};

export type MyProfileButton =
  | { type: "EDIT_PROFILE" }
  | { type: "LINK_UP"; payload: string }
  | { type: "ACCEPT_AND_DELETE"; payload: string }
  | { type: "DELETE"; payload: string }
  | { type: "UNLINK"; payload: string };

export type FriendStatus =
  | "FRIEND"
  | "SENT_REQUEST_PENDING"
  | "RECEIVED_REQUEST_PENDING"
  | "STRANGER";

export type LoadedUser = {
  foundUserId: string;
  foundUserName: string;
  foundUserImage: string;
  foundUserBio: string;
  foundUserPostCount: number;
  foundUserPrivacy: boolean;
  foundUserFriends: Friend[];
  foundUserFriendsCount: number;
  friend: {
    friendStatus: FriendStatus;
    requestId?: string;
  };
};

export type FriendListProps = {
  friendList: Friend[];
  open: boolean;
  handleClose: Dispatch<SetStateAction<boolean>>;
};
