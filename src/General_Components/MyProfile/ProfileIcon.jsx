import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Other/Context";
import profile1 from "../../Account/Comments/CommentsImg/profileimage1.png";
import profile2 from "../../Account/Comments/CommentsImg/profileimage2.jpg";
import profile3 from "../../Account/Comments/CommentsImg/profileimage3.png";
import profile4 from "../../Account/Comments/CommentsImg/profileimage4.png";
import profile5 from "../../Account/Comments/CommentsImg/profileimage5.png";
import profile6 from "../../Account/Comments/CommentsImg/profileimage6.jpg";
import profile7 from "../../Account/Comments/CommentsImg/profileimage7.jpg";
import { Modal } from "react-overlays";

export default function ProfileIcon({ editing, setEditedData, editedData }) {
  const { userInfo, user, setUserInfo, setChanged } = useContext(UserContext);
  const [userIcon, setUserIcon] = useState({
    uri: null,
    index: userInfo?.icon,
  });
  const [modal_Open, setModal_Open] = useState(false);
  const renderBackdrop = (props) => (
    <div className="backdrop_adder" {...props} />
  );

  useEffect(() => {
    if (userIcon.index) {
      switch (userIcon.index) {
        case 1:
          setUserIcon({ uri: profile1, index: 1 });
          break;
        case 2:
          setUserIcon({ uri: profile2, index: 2 });
          break;
        case 3:
          setUserIcon({ uri: profile3, index: 3 });
          break;
        case 4:
          setUserIcon({ uri: profile4, index: 4 });
          break;
        case 5:
          setUserIcon({ uri: profile5, index: 5 });
          break;
        case 6:
          setUserIcon({ uri: profile6, index: 6 });
          break;
        case 7:
          setUserIcon({ uri: profile7, index: 7 });
          break;
      }
    }
  }, []);
  const handleImageClick = (newuri, newIndex) => {
    setUserIcon({ uri: newuri, index: newIndex });
    setModal_Open(false);
    const newicon = { ...editedData, icon: newIndex };
    setEditedData(newicon);
  };
  const handleClick = () => {
    if (editing) {
      setModal_Open(true);
    }
  };
  const when_Closing_Modal = () => {
    setModal_Open(false);
  };
  return (
    <>
      <div>
        <img
          src={userIcon.uri}
          className="displayed-icon"
          alt="User Icon"
          width="85px"
          onClick={handleClick}
        />
      </div>
      <Modal
        className="event_Modal icon_Modal"
        show={modal_Open}
        onHide={when_Closing_Modal}
        renderBackdrop={renderBackdrop}
      >
        <>
          <img
            src={profile1}
            alt="User Icon"
            width="80px"
            onClick={() => handleImageClick(profile1, 1)}
          />
          <img
            src={profile2}
            alt="User Icon"
            width="80px"
            onClick={() => handleImageClick(profile2, 2)}
          />
          <img
            src={profile3}
            alt="User Icon"
            width="80px"
            onClick={() => handleImageClick(profile3, 3)}
          />
          <img
            src={profile4}
            alt="User Icon"
            width="80px"
            onClick={() => handleImageClick(profile4, 4)}
          />
          <img
            src={profile5}
            alt="User Icon"
            width="80px"
            onClick={() => handleImageClick(profile5, 5)}
          />
          <img
            src={profile6}
            alt="User Icon"
            width="80px"
            onClick={() => handleImageClick(profile6, 6)}
          />
          <img
            src={profile7}
            alt="User Icon"
            width="80px"
            onClick={() => handleImageClick(profile7, 7)}
          />
        </>
      </Modal>
    </>
  );
}
