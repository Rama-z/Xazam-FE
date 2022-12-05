import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const PrivateRoute = () => {
  const router = useRouter();

  const token = useSelector((state) => state.auth.userData.token);

  useEffect(() => {
    if (!token) router.push("/home");
  }, [token, router]);

  return <>Private Raoute</>;
};

export default PrivateRoute;
