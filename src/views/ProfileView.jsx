import { useEffect, useState } from "react";
import ProfileCard from "../components/Profile/ProfileCard";
import ProfilePortfolio from "../components/Profile/ProfilePortfolio";
import { useUser } from "../context/UserContext";
import withAuth from "../hoc/withAuth";
import { useForm } from "react-hook-form";
import { checkForUser } from "../api/user";
import { useSearchParams } from "react-router-dom";

const ProfileView = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user, setUser } = useUser();
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    setLoading(true);
    let id = searchParams.get("id");
    const [checkError, userResponse] = await checkForUser(id);
    if (checkError !== null) {
      setApiError(checkError);
    }
    if (userResponse !== null) {
      setUser(userResponse);
    }
    setLoading(false);
  };

  return (
    <>
      {loading && <p>Logging in...</p>}
      {apiError && <p>{apiError}</p>}

      {user !== null && (
        <div>
          <ProfileCard user={user} />
          <ProfilePortfolio user={user} />
        </div>
      )}
    </>
  );
};

export default withAuth(ProfileView);
