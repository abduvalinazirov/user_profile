import { useState } from "react";
import { IUser } from "../../../../types/data.models";
import InputComponent from "../../../../components/Input";
import { useMutation } from "react-query";
import { updateUserProfile } from "../../../../services/userApi";
import "./style.css";
import { toast } from "react-toastify";

interface ProfileEditProps {
  user: IUser;
  refetch: any;
}

const ProfileEdit: React.FC<ProfileEditProps> = ({ user, refetch }) => {
  const [userData, setUserData] = useState<IUser>(user);
  const [nameError, setNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);

  const { mutate, isLoading } = useMutation(updateUserProfile, {
    onSuccess: () => {
      toast.success('Profile updated successfully!')
      refetch();
    },
  });

  const handleInput = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    if (name === "name") {
      setNameError(value.trim() === "" ? "Name cannot be empty" : null);
    }
    if (name === "email") setEmailError(null);

    setUserData({ ...userData, [name]: value });
  };

  const saveDetails = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailTest = emailRegex.test(userData.email);
    setEmailError(!emailTest ? "Enter a valid email address" : null);
    if (!nameError && emailTest) {
      mutate(userData);
    }
  };

  return (
    <div className="profile__edit">
      <div className="user__details">
        <div className="user_detail">
          <h4 className="detail__name">Full Name</h4>
          <InputComponent
            className="detail__input"
            placeholder="Full name"
            value={userData.name}
            name="name"
            onChange={handleInput}
            error={nameError}
          />
        </div>
        <div className="user_detail">
          <h4 className="detail__name">Email</h4>
          <InputComponent
            className="detail__input"
            placeholder="Email"
            value={userData.email}
            name="email"
            onChange={handleInput}
            error={emailError}
          />
        </div>
        <div className="user_detail">
          <h4 className="detail__name">Bio</h4>
          <div className="detail__input">
            <textarea cols={30} rows={7} placeholder="Bio" name="bio" value={userData.bio} onChange={handleInput}></textarea>
          </div>
        </div>
      </div>
      <button className="save__details" onClick={saveDetails} disabled={isLoading}>
        Save
      </button>
    </div>
  );
};

export default ProfileEdit;
