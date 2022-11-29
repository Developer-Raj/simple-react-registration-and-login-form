import { useEffect } from "react";
import { connect } from "react-redux";
import { $load_user } from "../store/actions/user.action";
import User from "../components/user/User.component";
const Home = (props) => {
  const { fetchUsers, user } = props;

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <main id="home">
        <User user={user} />
      </main>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch($load_user()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
