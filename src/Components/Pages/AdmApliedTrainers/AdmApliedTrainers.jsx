import { useQuery } from "@tanstack/react-query";
import useAuthContext from "../../hooks/useAuthContext";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import ApliedTrainerRow from "./ApliedTrainerRow";

const AdmApliedTrainers = () => {
  const { user } = useAuthContext();
  const [appliedTrainers, setAppliedTrainers] = useState([]);
  const axiosSecure = useAxiosSecure();
  const status = `Pending`
  // fetched the trainers data using tenstack
  const { data: trainer = [], refetch } = useQuery({
    queryKey: ["trainer"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/trainers/${status}`);
      // console.log(res.data);
      return res.data;
    },
  });

  // set the fetched data in usestae
  useEffect(() => {
    setAppliedTrainers(trainer);
  }, [trainer]);
  return (
    <>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Status
                    </th>

                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* User data table row */}
                  {appliedTrainers.map((appTrainer) => (
                    <ApliedTrainerRow
                      key={appTrainer._id}
                      appTrainer={appTrainer}
                      user={user}
                      refetch={refetch}
                    ></ApliedTrainerRow>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdmApliedTrainers;
