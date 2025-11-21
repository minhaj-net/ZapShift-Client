import { useQuery } from "@tanstack/react-query";
import React, { use } from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { AuthContext } from "../../../Context/AuthContext/AuthContext";

const MyPercels = () => {
  // const { user } = useAuth;
  const { user } = use(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { data: percel = [] } = useQuery({
    queryKey: ["myPercels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`percel?email=${user?.email}`);
      return res.data;
    },
  });
  console.log(percel);
  return (
    <div>
      <p>All Of my percels : {percel.length}</p>
    </div>
  );
};

export default MyPercels;
