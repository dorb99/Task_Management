import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Other/Context";
import profile1 from "../../Account/Comments/CommentsImg/profileimage1.png"
import profile2 from "../../Account/Comments/CommentsImg/profileimage2.jpg";
import profile3 from "../../Account/Comments/CommentsImg/profileimage3.png";
import profile4 from "../../Account/Comments/CommentsImg/profileimage4.png";
import profile5 from "../../Account/Comments/CommentsImg/profileimage5.png";
import profile6 from "../../Account/Comments/CommentsImg/profileimage6.jpg";
import profile7 from "../../Account/Comments/CommentsImg/profileimage7.jpg";

export default function ProfileIcon() {
  const { userInfo, user } = useContext(UserContext);
  const [userIcon, setUserIcon] = useState(userInfo?.icon);

  useEffect(() => {
    switch (userIcon) {
      case 1:
        setUserIcon(profile1);
        break;
      case 2:
        setUserIcon(profile2);
        break;
      case 3:
        setUserIcon(profile3);
        break;
      case 4:
        setUserIcon(profile4);
        break;
      case 5:
        setUserIcon(profile5);
        break;
      case 6:
        setUserIcon(profile6);
        break;
      case 7:
        setUserIcon(profile7);
        break;
    }
  }, [user]);
  console.log(url);

  return (
    <>
      <div>
        {url?(<img src={url} alt="User Icon"  width="50px" />):null}
        
      </div>
    </>
  );
}
