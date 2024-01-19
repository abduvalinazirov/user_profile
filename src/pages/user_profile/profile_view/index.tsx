import "./style.css";

const ProfileView = () => {
  return (
    <div className="profile__view">
      <div className="user_detail">
        <h4 className="detail__name">Full Name</h4>
        <p className="detail__content">Abduvali Nazirov</p>
      </div>
      <div className="detail__hr"></div>
      <div className="user_detail">
        <h4 className="detail__name">Email</h4>
        <p className="detail__content">nazirov@gmail.com</p>
      </div>
      <div className="detail__hr"></div>
      <div className="user_detail">
        <h4 className="detail__name">Bio</h4>
        <p className="detail__content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint rem facilis deserunt dolores voluptate, aut veritatis repudiandae quos atque
          odit?
        </p>
      </div>
    </div>
  );
};

export default ProfileView;
