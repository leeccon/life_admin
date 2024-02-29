import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loginAccess, setLoginAccess] = useState(false); // 로그인 여부
  const [uid, setUid] = useState(""); // UID
  const [manager, setManager] = useState(""); // 매니저 이름
  const [branch, setBranch] = useState(""); // 지점명
  const [grade, setGrade] = useState(""); // 등급
  const [id, setId] = useState(""); // 로그인 시 ID

  //로그인(로드 시) 초기데이터
  useEffect(() => {
    const storedAccess = Cookies.get("Access");
    if (storedAccess === "true") {
      setLoginAccess(true);
      const storedS1 = Cookies.get("S1");
      const storedS2 = Cookies.get("S2");
      const storedS3 = Cookies.get("S3");
      const storedS4 = Cookies.get("S4");
      const storedS5 = Cookies.get("S5");

      if (storedS1) setUid(storedS1);
      if (storedS2) setManager(storedS2);
      if (storedS3) setBranch(storedS3);
      if (storedS4) setGrade(storedS4);
      if (storedS5) setId(storedS5);
    }
  }, []);

  //쿠키 만료시간 및 알람메세지
  useEffect(() => {
    const timer = setTimeout(() => {
      logout();
      alert("세션 시간이 만료되었습니다.");
    }, 60000);

    return () => clearTimeout(timer);
  }, [loginAccess]);

  //로그인
  const login = (uidToken, managerToken, branchToken, gradeToken, idToken) => {
    setLoginAccess(true);
    setUid(uidToken);
    setManager(managerToken);
    setBranch(branchToken);
    setGrade(gradeToken);
    setId(idToken);
    Cookies.set("Access", true);
    Cookies.set("S1", uidToken);
    Cookies.set("S2", managerToken);
    Cookies.set("S3", branchToken);
    Cookies.set("S4", gradeToken);
    Cookies.set("S5", idToken);
  };

  //로그아웃
  const logout = () => {
    setLoginAccess(false);
    setUid("");
    setManager("");
    setBranch("");
    setGrade("");
    setId("");
    Cookies.remove("Access");
    Cookies.remove("S1");
    Cookies.remove("S2");
    Cookies.remove("S3");
    Cookies.remove("S4");
    Cookies.remove("S5");
  };

  return (
    <AuthContext.Provider
      value={{
        loginAccess, // 로그인여부
        login, // 로그인 시 토큰값 저장
        logout, // 로그인 시 토큰값 삭제
        uid, // UID
        manager, //매니저이름
        branch, //지점명
        grade, //등급
        id, //로그인 시 아이디
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

//다른 컴포넌트에서 사용할 useAuth(이름변경가능)
export const useAuth = () => {
  return useContext(AuthContext);
};
