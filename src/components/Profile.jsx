import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";
import "./Profile.css"
export default function Profile() {
  const [profile, setProfile] = useState({});
  const { user, setUser } = useContext(AppContext);
  const [form, setForm] = useState({});
  const [error, setError] = useState();
  const API_URL = import.meta.env.VITE_API_URL;
  const Navigate = useNavigate();
  const fetchProfile = async () => {
    try {
      const url = `${API_URL}/api/users/${user.id}/profile`;
      const result = await axios.get(url);
      setProfile(result.data);
      console.log(profile);
    } catch (err) {
      console.log(err);
      setError("Something went wrong");
    }
  };
  useEffect(() => {
    fetchProfile();
  }, []);

  const logout = () => {
    setUser({});
    Navigate("/");
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
    try {
      const url = `${API_URL}/api/users/${profile._id}/profile`;
      const result = await axios.patch(url, form);
      fetchProfile();
      setError("Data saved successfully.");
    } catch (err) {
      console.log(err);
      setError("Something went wrong");
    }
  };
  return (
  <div className="Profile-Container">
    <div className="Profile-Box">
      <h3>My Profile</h3>
      <button onClick={logout}>Logout</button>
      <p>
        <input
          name="firstName"
          type="text"
          placeholder="First Name"
          onChange={handleChange}
          defaultValue={profile.firstName}
        />
      </p>
      <p>
        <input
          name="lastName"
          type="text"
          placeholder="LastName"
          onChange={handleChange}
          defaultValue={profile.lastName}
        />
      </p>
      <p>
        <input
          name="email"
          type="text"
          placeholder="Email"
          onChange={handleChange}
          defaultValue={profile.email}
        />
      </p>
      <p>
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          defaultValue={profile.password}
        />
      </p>
      <button onClick={handleSubmit}>Update Profile</button>
    </div>
  </div>
);

}