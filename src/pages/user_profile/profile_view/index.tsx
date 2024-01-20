import { IUser } from "../../../types/data.models";
import "./style.css";

interface ProfileViewProps {
  user: IUser;
}

const ProfileView: React.FC<ProfileViewProps> = ({ user }) => {
  return (
    <div className="profile__view">
      <div className="user_detail">
        <h4 className="detail__name">Full Name</h4>
        <p className="detail__content">{user.name}</p>
      </div>
      <div className="detail__hr"></div>
      <div className="user_detail">
        <h4 className="detail__name">Email</h4>
        <p className="detail__content">{user.email}</p>
      </div>
      <div className="detail__hr"></div>
      <div className="user_detail">
        <h4 className="detail__name">Bio</h4>
        <p className="detail__content">{user.bio}</p>
      </div>
    </div>
  );
};

export default ProfileView;
