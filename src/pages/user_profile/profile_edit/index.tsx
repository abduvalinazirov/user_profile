import "./style.css";

const ProfileEdit = () => {
  return (
    <div className="profile__edit">
      <div className="user__details">
        <div className="user_detail">
          <h4 className="detail__name">Full Name</h4>
          <input type="text" className="detail__input" placeholder="Full name" />
        </div>
        <div className="user_detail">
          <h4 className="detail__name">Email</h4>
          <input type="text" className="detail__input" placeholder="Email" />
        </div>
        <div className="user_detail">
          <h4 className="detail__name">Bio</h4>
          <textarea cols={30} rows={7} placeholder="Bio" className="detail__input"></textarea>
        </div>
      </div>
      <button className="save__details">Save</button>
    </div>
  );
};

export default ProfileEdit;
