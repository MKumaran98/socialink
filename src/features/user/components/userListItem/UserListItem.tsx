import classes from "./UserListItem.module.css";
import { UserListItemProps, ButtonToRender } from "../../user.types";
import { Button } from "@material-ui/core";
import {
  sendFriendRequest,
  deleteFriendRequest,
  acceptFriendRequest,
} from "../../userSlice";
import { useAuthSlice } from "../../../../app/store";
import { useDispatch } from "react-redux";

export const UserListItem = ({
  image,
  name,
  userId,
  userItemType,
  requestId,
}: UserListItemProps) => {
  const { token } = useAuthSlice();
  const dispatch = useDispatch();

  const buttonToRender = (buttonToRender: ButtonToRender) => {
    switch (buttonToRender) {
      case "ONLY_LINK":
        return (
          <Button
            variant="outlined"
            color="primary"
            onClick={() =>
              dispatch(sendFriendRequest({ data: userId!, token: token! }))
            }
            className={classes["response-button"]}
          >
            Link up
          </Button>
        );
      case "ONLY_DELETE":
        return (
          <Button
            variant="outlined"
            color="primary"
            onClick={() =>
              requestId &&
              dispatch(deleteFriendRequest({ data: requestId, token: token! }))
            }
            className={classes["response-button"]}
          >
            Delete
          </Button>
        );
      case "LINK_AND_DELETE":
        return (
          <div>
            <Button
              variant="contained"
              color="primary"
              onClick={() =>
                requestId &&
                dispatch(
                  acceptFriendRequest({ data: requestId, token: token! })
                )
              }
              className={classes["response-button"]}
            >
              Accept
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={() =>
                requestId &&
                dispatch(
                  deleteFriendRequest({ data: requestId, token: token! })
                )
              }
              className={classes["response-button"]}
            >
              Delete
            </Button>
          </div>
        );

      default:
        return (
          <Button
            variant="outlined"
            color="primary"
            onClick={() =>
              dispatch(sendFriendRequest({ data: userId!, token: token! }))
            }
            className={classes["response-button"]}
          >
            Follow
          </Button>
        );
    }
  };

  return (
    <div className={classes["user-list-item-container"]}>
      <div className={classes["user-image-name"]}>
        <img src={image!} alt="users" className={classes["user-image"]} />
        <p className={classes["user-name"]}>{name}</p>
      </div>
      {buttonToRender(userItemType)}
    </div>
  );
};