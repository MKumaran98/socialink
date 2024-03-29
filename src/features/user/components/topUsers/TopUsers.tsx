import classes from "./TopUsers.module.css";
import { getTopUsers } from "../../userSlice";
import { useAuthSlice, useUserSlice } from "../../../../app/store";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { UserListItem } from "../";

export const TopUsers = () => {
  const dispatch = useDispatch();
  const { topUsers } = useUserSlice();
  const { token } = useAuthSlice();
  useEffect(() => {
    token && dispatch(getTopUsers());
  }, [dispatch, token]);

  return (
    <div className={classes["top-users-container"]}>
      <ul className={classes["top-user-list"]}>
        {topUsers.map(({ name, userId, image }) => (
          <li key={userId}>
            <UserListItem
              key={userId}
              image={image || null}
              name={name}
              userId={userId}
              userItemType="ONLY_LINK"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
