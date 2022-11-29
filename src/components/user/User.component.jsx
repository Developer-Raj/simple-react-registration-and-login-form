import UserCard from "./UserCard.component";

const User = (props) => {
  const { user } = props;
  return (
    <div className="users">
      {user.isLoaded
        ? user.data.map((user) => {
            return <UserCard data={user} key={`user-${user.id}`} />;
          })
        : "Loading"}
    </div>
  );
};

export default User;
