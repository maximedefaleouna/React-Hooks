import { UserContext, ProfileContext, langageContext } from ".";
import { useContext } from "react";
function ComposantC() {
  const user = useContext(UserContext);
  const Profile = useContext(ProfileContext);

  return (
    <div
      style={{
        width: "300px",
        border: "1px solid black",
        margin: "0px 35% 0 35%",
      }}
    >
      <p>composant C</p>
      {/* <UserContext.Consumer>
        {(user) => {
          return <p>{user}</p>;
        }}
      </UserContext.Consumer> */}
      <p>{user}</p>
      <p>{Profile}</p>
      <p>{useContext(langageContext)}</p>
    </div>
  );
}

export default ComposantC;
