"use client";
import movieApi from "@/api/movieApi";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const loginSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  const [isLoading, setLoading] = useState(false);
  // username: phu.vo
  const [username, setUsername] = useState("");
  // password: abc123ok.
  const [password, setPassword] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const formOptions = { resolver: yupResolver(loginSchema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const handleLogin = async () => {
    setLoading(true);
    try {
      const login = await movieApi.login(username, password);
      if (!login?.success) {
        setStatusMessage(login.statusMessage);
      }
    } catch (error) {
      console.log("User login error => ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login container mx-auto py-10 min-h-4/6-screen flex flex-col justify-center">
      <form onSubmit={handleSubmit(handleLogin)} id="login-form">
        <h1 className="mb-5">Login</h1>
        {statusMessage && (
          <div className="italic text-red-400">{statusMessage}</div>
        )}
        <div className="my-10 relative">
          <input
            {...register("username")}
            type="text"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && (
            <div className="absolute left-0 italic text-red-400 text-sm mt-1">
              {errors.username?.message}
            </div>
          )}
        </div>
        <div className="my-10 relative">
          <input
            {...register("password")}
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <div className="absolute left-0 italic text-red-400 text-sm mt-1">
              {errors.password?.message}
            </div>
          )}
        </div>
        <button className="btn" disabled={isLoading} aria-label="Login">
          {isLoading ? "LOADING..." : "LOG IN"}
        </button>
      </form>
    </div>
  );
};

export default Login;
