
import { useDispatch, useSelector } from "react-redux";

function Home()  {
  const username = useSelector((state) => state.user.value.username);

  return <h1>Hi {username}, This is your home page</h1>;
};

export default Home;