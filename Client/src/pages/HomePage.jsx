import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_ME } from "../utils/queries";
import { Link, useParams } from "react-router-dom";
import Auth from "../utils/auth";

const HomePage = () => {
  const { username: userParam } = useParams();

  const { data } = useQuery(GET_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || [];

  const reminders = user.reminders || [];

  const loggedIn = Auth.loggedIn();

  if (!reminders.length) {
    return (
      <section>
        {loggedIn && (
          <>
            <h1>Welcome {user.username}</h1>
            <h3>
              Lets gather some info to create that reminder click{" "}
              <Link to="/create">here</Link>
            </h3>
            <div>
              <h3>You have no reminders....</h3>
            </div>
          </>
        )}
      </section>
    );
  }

  return (
    <section>
      {loggedIn && (
        <>
          <h1>Welcome {user.username}</h1>
          <h3>
            Lets gather some info to create that reminder click{" "}
            <Link to="/create">here</Link>
          </h3>
          <div>
            <h3>Here is what you have scheduled...</h3>
          </div>
        </>
      )}
    </section>
  );
};

export default HomePage;
