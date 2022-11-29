import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

function Welcome(props) {
  const nav = useNavigate();

  useEffect(() => {
    if (!props.isAuthenticated) {
      nav("/login");
    }
  }, [props.isAuthenticated]);
  return (
    <>
      <main id="welcome" style={{ textAlign: "center", padding: "50px" }}>
        <h2 style={{ marginBottom: "10px" }}>Welcome!!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam aliquam
          nobis eos explicabo voluptate quisquam molestias sunt qui. Est nemo in
          accusantium ex eius deleniti sit optio sapiente pariatur dolor.
        </p>
      </main>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.user.isAuthenticated,
  };
};

export default connect(mapStateToProps, null)(Welcome);
