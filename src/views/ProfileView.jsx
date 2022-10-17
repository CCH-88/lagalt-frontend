import { useEffect, useState } from "react";
import ProfileCard from "../components/Profile/ProfileCard";
import ProfilePortfolio from "../components/Profile/ProfilePortfolio";
import { useUser } from "../context/UserContext";
import withAuth from "../hoc/withAuth";
import { checkForUser } from "../api/user";
import { useParams } from "react-router-dom";
import Spinner from "../components/utils/Spinner";

const ProfileView = () => {
  const { user, setUser } = useUser();
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);
  const [friends, setFriends] = useState([]);
  let { userId } = useParams();
  const url = window.location.pathname.split("/").pop();
  let props = {
    user: user,
    friends: friends,
  };

  useEffect(() => {
    console.log(props);
    getProfile(userId);
  }, [url]);

  const getProfile = async (id) => {
    setLoading(true);
    setUser(null);
    const [checkError, userResponse] = await checkForUser(id);
    if (checkError !== null) {
      setApiError(checkError);
    }
    if (userResponse !== null) {
      setUser(userResponse);
      props.user = userResponse;
      getFriends(userResponse.friends);
    }
    setLoading(false);
  };

  const getFriends = async (collection) => {
    setLoading(true);
    setFriends([]);
    for (const id of collection) {
      const [checkError, userResponse] = await checkForUser(id);
      if (checkError !== null) {
        setApiError(checkError);
      }
      if (userResponse !== null) {
        setFriends((friends) => [...friends, userResponse]);
      }
    }
    setLoading(false);
  };

  return (
    <>
      {user !== null && friends !== null && (
        <div className="w-full h-full inline-block">
          <ProfileCard user={user} friends={friends} />
          <ProfilePortfolio user={user} friends={friends} />
        </div>
      )}
      <div className="w-full h-full inline-block">
        {loading && <Spinner />}
        {apiError && <p>{apiError}</p>}
      </div>
    </>
  );
};

export default withAuth(ProfileView);
