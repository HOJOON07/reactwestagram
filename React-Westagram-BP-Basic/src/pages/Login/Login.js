import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.scss";

const Login = () => {
  const [userInfo, setUserInfo] = useState({ userId: "", userPassword: "" });
  const navigate = useNavigate();

  function getUserInfo(e) {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  }

  const isUserInfoGot =
    userInfo.userId.includes("@") && userInfo.userPassword.length >= 5;

  function validateUser(e) {
    e.preventDefault();

    fetch("API주소", {
      method: "POST",
      headers: { "Content-type": "application/json;charset=utf-8" },
      body: JSON.stringify(userInfo),
    })
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error("네트워크가 불안정합니다. 다시 시도 해 주세요");
      })
      .catch(error => console.log(error))
      .then(data => {
        if (data.message === "login success") {
          localStorage.setItem("TOKEN", data.token);
          alert("로그인에 성공했습니다");
          navigate("/main");
        } else {
          alert("아이디와 비밀번호를 확인 해 주세요");
        }
      });
  }
  return (
    <div className="login">
      <main className="loginContainer">
        <h1 className="title">Westagram</h1>
        <form className="loginForm" onSubmit={validateUser}>
          <input
            onChange={getUserInfo}
            className="userId"
            name="userId"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            onChange={getUserInfo}
            className="userPassword"
            name="userPassword"
            type="password"
            placeholder="비밀번호"
          />
          <button
            className="loginButton"
            type="submit"
            disabled={!isUserInfoGot}
          >
            로그인
          </button>
        </form>
        <a className="findPassword" href="http://localhost:3000">
          비밀번호를 잊으셨나요?
        </a>
      </main>
    </div>
  );
};

export default Login;
