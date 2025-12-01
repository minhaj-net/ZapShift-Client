import { useQuery } from "@tanstack/react-query";
import React, { use } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { AuthContext } from "../../../Context/AuthContext/AuthContext";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { CiViewBoard } from "react-icons/ci";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyPercels = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = use(AuthContext);

  const { data: percels = [], refetch } = useQuery({
    queryKey: ["my-percels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/percel?email=${user?.email}`);
      return res.data;
    },
  });

  const handlePercelDelte = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/percel/${id}`).then((res) => {
          if (res.data.deletedCount) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your request has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  const handlePayment=()=>{
    const parcelInfo={
      
    }
  }

  return (
    <div>
      <p>All Of my percels : {percels.length}</p>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Cost</th>
              <th>Payment</th>
              <th>Delivery Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {percels.map((percel, index) => (
              <tr key={percel._id}>
                <th>{index + 1}</th>
                <td>{percel.parcelName}</td>
                <td>{percel.cost}</td>

                {/* FIXED LINK HERE */}
                <td>
                  {percel.paymentStatus === "paid" ? (
                    <span className="text-green-500">Paid</span>
                  ) : (
                    <Link
                      to={`/dashboard/payment/${percel._id}`}
                      className="btn btn-sm btn-primary text-black"
                    >
                      Pay
                    </Link>
                  )}
                </td>

                <td>{percel.deleveryStatus}</td>

                <td className="flex items-center gap-2">
                  <button className="btn btn-square hover:bg-primary">
                    <CiViewBoard />
                  </button>
                  <button className="btn btn-square hover:bg-primary">
                    <FaRegEdit />
                  </button>
                  <button
                    onClick={() => handlePercelDelte(percel._id)}
                    className="btn btn-square hover:bg-primary"
                  >
                    <FaRegTrashCan />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPercels;
