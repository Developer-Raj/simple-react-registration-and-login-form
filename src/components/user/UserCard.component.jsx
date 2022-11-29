const UserCard = (props) => {
  const { first_name, last_name, email, avatar } = props.data;

  return (
    <>
      <div className="card">
        <img src={avatar} alt={first_name} />
        <h2>
          {first_name} {last_name}
        </h2>
        <p style={{ userSelect: "all" }}>{email}</p>
      </div>
    </>
  );
};

export default UserCard;
