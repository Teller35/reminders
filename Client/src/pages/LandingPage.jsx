import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <section className="p-2">
      <h2>Do you have that reminder you need to get out?</h2>
      <div>
        <p>
          Have that kid that just cant remember things, or even yourself? Have a
          simple flip phone or kid phone with no special features? Need a
          feature to set up reminders well look no further. With Reminders you can go
          in setup a reminder with a date and time then poof it shows up on your
          phone via text. What no way you say? <Link to="/signup">Sign-Up</Link>{" "} 
          give it a try or if already a member <Link to="/login">Log-In</Link> here.
        </p>
      </div>
    </section>
  );
};

export default LandingPage;
