import React, { use } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { AuthContext } from "../../Context/AuthContext/AuthContext";

const SendPercell = () => {
  const { register, handleSubmit, watch } = useForm();
  const axiosSecure = useAxiosSecure();
  const serviceCenter = useLoaderData();
  const navigate = useNavigate();
  // const { user } = useAuth;
  const { user } = use(AuthContext);
  console.log(user?.displayName);
  const regionDuplicate = serviceCenter.map((c) => c.region);

  const region = [...new Set(regionDuplicate)];

  const senderRegion = watch("senderRegion");
  const receverRegion = watch("receverRegion");
  const districtByRegion = (region) => {
    const regionDistrict = serviceCenter.filter(
      (district) => district.region === region
    );

    const district = regionDistrict.map((d) => d.district);

    return district;
  };

  const onSubmit = (data) => {
    // Handle form submission

    const isDocument = data.parcelType === "Document";
    const isSameDistrict = data.senderDistrict === data.receverDistrict;
    const percelWeight = parseFloat(data.parcelWeight);
    let cost = 0;
    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (percelWeight < 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = percelWeight - 3;
        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;
        cost = minCharge + extraCharge;
      }
    }
    data.cost = cost;
    Swal.fire({
      title: "Plase Confrim The cost  ! ",
      text: `You wont to pay ${cost} TAKA`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I'il Pay",
    }).then((result) => {
      if (result.isConfirmed) {
        //save to the percel info in database

        axiosSecure.post("/percel", data).then((res) => {
          console.log("after send data", res.data);
          if (res.data.insertedId) {
            navigate("/dashboard/my-percels");
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your percel is ready for pay .please pay!",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(onSubmit)(e);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-xl  rounded-lg p-8">
          {/* Header */}
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Add Parcel</h1>

          <div onSubmit={handleFormSubmit}>
            {/* Parcel Type Selection */}
            <div className="mb-8">
              <h2 className="text-base font-semibold text-gray-700 mb-4">
                Enter your parcel details
              </h2>

              <div className="flex gap-4 mb-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    value="Document"
                    {...register("parcelType")}
                    className="radio radio-sm radio-success"
                    defaultChecked
                  />
                  <span className="text-sm">Document</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    value="Not-Document"
                    {...register("parcelType")}
                    className="radio radio-sm"
                  />
                  <span className="text-sm">Not-Document</span>
                </label>
              </div>

              {/* Parcel Name and Weight */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Parcel Name
                  </label>
                  <input
                    type="text"
                    placeholder="Parcel Name"
                    {...register("parcelName")}
                    className="input input-bordered w-full text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Parcel Weight (KG)
                  </label>
                  <input
                    type="text"
                    placeholder="Parcel Weight (KG)"
                    {...register("parcelWeight")}
                    className="input input-bordered w-full text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Sender and Receiver Details Grid */}
            <div className="grid grid-cols-2 gap-8">
              {/* Sender Details */}
              <div className="border-r border-gray-200 pr-8">
                <h3 className="text-base font-semibold text-gray-700 mb-4">
                  Sender Details
                </h3>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      {/* sender name  */}
                      <label className="block text-xs text-gray-600 mb-1">
                        Sender Name
                      </label>
                      <input
                        type="text"
                        placeholder="Sender Name"
                        defaultValue={user?.displayName}
                        {...register("senderName")}
                        className="input input-bordered input-sm w-full text-sm"
                      />
                    </div>
                    <div>
                      {/* pickup house */}
                      <label className="block text-xs text-gray-600 mb-1">
                        Sender Pickup Who house
                      </label>
                      <select
                        {...register("senderPickupWho")}
                        className="select select-bordered select-sm w-full text-sm"
                      >
                        <option>Select Who house</option>
                        <option>Own House</option>
                        <option>Office</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">
                      Sender Email
                    </label>
                    <input
                      type="Email"
                      placeholder="Sender Email"
                      defaultValue={user?.email}
                      {...register("senderEmail")}
                      className="input input-bordered input-sm w-full text-sm"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      {/* sender adress */}
                      <label className="block text-xs text-gray-600 mb-1">
                        Address
                      </label>
                      <input
                        type="text"
                        placeholder="Address"
                        {...register("senderAddress")}
                        className="input input-bordered input-sm w-full text-sm"
                      />
                    </div>
                    <div>
                      {/* sender contact */}
                      <label className="block text-xs text-gray-600 mb-1">
                        Sender Contact No
                      </label>
                      <input
                        type="text"
                        placeholder="Sender Contact No"
                        {...register("senderContact")}
                        className="input input-bordered input-sm w-full text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    {/* sender region */}
                    <label className="block text-xs text-gray-600 mb-1">
                      Your Region
                    </label>
                    <select
                      {...register("senderRegion")}
                      className="select select-bordered select-sm w-full text-sm"
                    >
                      <option>Select your region</option>
                      {region.map((r, i) => (
                        <option key={i}>{r}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    {/* sender district */}
                    <label className="block text-xs text-gray-600 mb-1">
                      Your District
                    </label>
                    <select
                      {...register("senderDistrict")}
                      className="select select-bordered select-sm w-full text-sm"
                    >
                      <option>Select your District</option>
                      {districtByRegion(senderRegion).map((r, i) => (
                        <option key={i}>{r}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    {/* pivkup instruction */}
                    <label className="block text-xs text-gray-600 mb-1">
                      Pickup Instruction
                    </label>
                    <textarea
                      placeholder="Pickup Instruction"
                      {...register("pickupInstruction")}
                      className="textarea textarea-bordered w-full text-sm h-24"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Receiver Details */}
              <div className="pl-0">
                <h3 className="text-base font-semibold text-gray-700 mb-4">
                  Receiver Details
                </h3>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      {/* receiver name */}
                      <label className="block text-xs text-gray-600 mb-1">
                        Receiver Name
                      </label>
                      <input
                        type="text"
                        placeholder="Receiver Name"
                        {...register("receiverName")}
                        className="input input-bordered input-sm w-full text-sm"
                      />
                    </div>
                    <div>
                      {/* delevery house */}
                      <label className="block text-xs text-gray-600 mb-1">
                        Receiver Delivery Who house
                      </label>
                      <select
                        {...register("receiverDeliveryWho")}
                        className="select select-bordered select-sm w-full text-sm"
                      >
                        <option>Select Who house</option>
                        <option>Own House</option>
                        <option>Office</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  {/* recever email */}
                  <div className="mb-4">
                    <label className="block text-xs text-gray-600 mb-1">
                      Receiver Email
                    </label>
                    <input
                      type="Email"
                      placeholder="Receiver Email"
                      {...register("receiverEmail")}
                      className="input input-bordered input-sm w-full text-sm"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="mb-4">
                    {/* receiver adress */}
                    <label className="block text-xs text-gray-600 mb-1">
                      Receiver Address
                    </label>
                    <input
                      type="text"
                      placeholder="Address"
                      {...register("receiverAddress")}
                      className="input input-bordered input-sm w-full text-sm"
                    />
                  </div>
                  <div>
                    {/* receiver contact */}
                    <label className="block text-xs text-gray-600 mb-1">
                      Receiver Contact No
                    </label>
                    <input
                      type="text"
                      placeholder="Sender Contact No"
                      {...register("receiverContact")}
                      className="input input-bordered input-sm w-full text-sm"
                    />
                  </div>
                </div>

                {/* Recever region */}
                <div className="mb-4">
                  <label className="block text-xs text-gray-600 mb-1">
                    Your Region
                  </label>
                  <select
                    {...register("receverRegion")}
                    className="select select-bordered select-sm w-full text-sm"
                  >
                    <option>Select your region</option>
                    {region.map((r, i) => (
                      <option key={i}>{r}</option>
                    ))}
                  </select>
                </div>
                {/* Recever District */}
                <div className="mb-4">
                  <label className="block text-xs text-gray-600 mb-1">
                    Your District
                  </label>
                  <select
                    {...register("receverDistrict")}
                    className="select select-bordered select-sm w-full text-sm"
                  >
                    <option>Select your District</option>
                    {districtByRegion(receverRegion).map((r, i) => (
                      <option key={i}>{r}</option>
                    ))}
                  </select>
                </div>

                <div>
                  {/*Delivery Instruction  */}
                  <label className="block text-xs text-gray-600 mb-1">
                    Delivery Instruction
                  </label>
                  <textarea
                    placeholder="Delivery Instruction"
                    {...register("deliveryInstruction")}
                    className="textarea textarea-bordered w-full text-sm h-24"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          {/* Pickup Time Note */}
          <div className="mt-6 mb-6">
            <p className="text-xs text-gray-600">
              * Pickup Time 4pm-7pm Approx.
            </p>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="button"
              onClick={handleFormSubmit}
              className="btn bg-lime-400 hover:bg-lime-500 text-gray-800 font-semibold border-none w-full sm:w-auto px-12"
            >
              Proceed to Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendPercell;
