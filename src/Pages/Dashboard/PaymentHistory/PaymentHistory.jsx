import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user.email}`);
      return res.data;
    },
  });
  console.log(payments);
  return (
    <div className="m-4">
      <h2 className="text-4xl font-bold">
        Payment History : {payments.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              {/* <th>for numbering</th> */}
              <th></th>
              <th>Parcel Name</th>
              <th>Transaction ID</th>
              <th>Tracking Number</th>
              <th>Payment Info</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {payments.map((payment, idx) => (
              <tr>
                {/* <th>1</th> */}
                <td>{idx+1}</td>
                <td>{payment.parcelName}</td>
                <td>{payment.transactionId}</td>
                <td>{payment.trackingId}</td>
                <td> $ {payment.amount} ({payment.paymentStatus})</td>
                <td>
                  <button className="btn-sm btn hover:bg-primary">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
