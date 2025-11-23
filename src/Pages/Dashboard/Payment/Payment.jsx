import React from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Payment = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { data: percelData = [] } = useQuery({
    queryKey: ["percels", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/percel/${id}`);
      return res.data;
    },
  });
  return (
    <div>
      <p>PLease provide payment : {percelData.parcelName} </p>
    </div>
  );
};

export default Payment;
