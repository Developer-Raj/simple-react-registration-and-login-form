import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { $logout_user } from "../../store/actions/user.action";

const Header = (props) => {
  const { authenticated, logout} = props;
  return (
    <>
      <header>
        <h3 style={{ textAlign: "center", marginBottom: "15px" }}>
          <Link to="/">🔥 Users 🔥</Link>
        </h3>
        <nav style={{ textAlign: "center" }}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
           {
            !authenticated ? (
              <>
              <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
              </li>
              </>
            ) : (
              <li>
                <Link to="#logout" onClick={e => {
                  e.preventDefault();
                  logout();
                }}>Logout</Link>
              </li>
            )
           }            
          </ul>
        </nav>
      </header>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    authenticated: state.user.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch($logout_user()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
