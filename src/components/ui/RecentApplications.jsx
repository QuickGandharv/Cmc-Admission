import OutlineButton from "./OutlineButton";
import { BsThreeDots } from "react-icons/bs";

const RecentApplications = () => {
  return (
    <div className="recent-applications bg-white-default rounded-2xl pb-6">
      <div className="flex justify-between items-center bg-white-default p-5 rounded-lg">
        <h2 className="text-black-default">Recent Applications</h2>
        <OutlineButton
          text="View All"
          classname="text-primary-default border-primary-default px-6 py-2"
        />
      </div>
      <div className="table w-full">
        <thead className="bg-white-300">
          <tr>
            <th className="text-black-default text-base font-medium px-5 py-3 text-left">
              Application Name
            </th>
            <th className="text-black-default text-base font-medium px-5 py-3 text-left">
              Email
            </th>
            <th className="text-black-default text-base font-medium px-5 py-3 text-left">
              Progress
            </th>
            <th className="text-black-default text-base font-medium px-5 py-3 text-left">
              Status
            </th>
            <th className="text-black-default text-base font-medium px-5 py-3 text-left">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="text-black-default text-left text-base font-medium px-5 py-3">
              <div className="flex flex-wrap items-center gap-2.5 ">
                <img
                  src="/assets/images/chatbox.png"
                  className="h-10 w-10 object-cover rounded-full"
                  alt=""
                />
                <p className="text-black-default text-left text-base font-medium">
                  Joshua Wood
                </p>
              </div>
            </td>
            <td className="text-black-default text-base font-normal px-5 py-3">
              garywaters@gmail.com
            </td>
            <td className="px-5 py-3">
              <div class="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
                <div class="h-full bg-yellow-500 w-[80%]"></div>
              </div>
            </td>
            <td className="px-5 py-3">
              <div className="bg-warning-300 rounded-full w-fit">
                <p className="text-warning-default text-base font-medium px-4 py-1.5">
                  Progress
                </p>
              </div>
            </td>
            <td className="text-base text-left font-normal text-black-default px-5 py-3">
              <BsThreeDots className="text-black-200 text-2xl" />
            </td>
          </tr>

          <tr className="border-b">
            <td className="text-black-default text-left text-base font-medium px-5 py-3">
              <div className="flex flex-wrap items-center gap-2.5 ">
                <img
                  src="/assets/images/chatbox.png"
                  className="h-10 w-10 object-cover rounded-full"
                  alt=""
                />
                <p className="text-black-default text-left text-base font-medium">
                  Edwin Hogan
                </p>
              </div>
            </td>
            <td className="text-black-default text-base font-normal px-5 py-3">
              garywaters@gmail.com
            </td>
            <td className="px-5 py-3">
              <div class="h-3 w-full bg-parrotgreen-200 rounded-full overflow-hidden">
                <div class="h-full bg-parrotgreen-default w-[100%]"></div>
              </div>
            </td>
            <td className="px-5 py-3">
              <div className="bg-parrotgreen-200 rounded-full w-fit">
                <p className="text-parrotgreen-default text-base font-medium px-4 py-1.5">
                  Completed
                </p>
              </div>
            </td>
            <td className="text-base font-normal text-black-default text-left px-5 py-3">
              <BsThreeDots className="text-black-200 text-2xl" />
            </td>
          </tr>

          <tr className="border-b">
            <td className="text-black-default text-left text-base font-medium px-5 py-3">
              <div className="flex flex-wrap items-center gap-2.5 ">
                <img
                  src="/assets/images/chatbox.png"
                  className="h-10 w-10 object-cover rounded-full"
                  alt=""
                />
                <p className="text-black-default text-left text-base font-medium">
                  Taln Wood
                </p>
              </div>
            </td>
            <td className="text-black-default text-base font-normal px-5 py-3">
              garywaters@gmail.com
            </td>
            <td className="px-5 py-3">
              <div class="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
                <div class="h-full bg-parrotgreen-default w-[90%]"></div>
              </div>
            </td>
            <td className="px-5 py-3">
              <div className="bg-parrotgreen-200 rounded-full w-fit">
                <p className="text-parrotgreen-default text-base font-medium px-4 py-1.5">
                  Completed
                </p>
              </div>
            </td>
            <td className="text-base font-normal text-black-default text-left px-5 py-3">
              <BsThreeDots className="text-black-200 text-2xl" />
            </td>
          </tr>

          <tr className="border-b">
            <td className="text-black-default text-left text-base font-medium px-5 py-3">
              <div className="flex flex-wrap items-center gap-2.5 ">
                <img
                  src="/assets/images/chatbox.png"
                  className="h-10 w-10 object-cover rounded-full"
                  alt=""
                />
                <p className="text-black-default text-left text-base font-medium">
                  Joshua Wood
                </p>
              </div>
            </td>
            <td className="text-black-default text-base font-normal px-5 py-3">
              garywaters@gmail.com
            </td>
            <td className="px-5 py-3">
              <div class="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
                <div class="h-full bg-yellow-500 w-[40%]"></div>
              </div>
            </td>
            <td className="px-5 py-3">
              <div className="bg-warning-300 rounded-full w-fit">
                <p className="text-warning-default text-base font-medium px-4 py-1.5">
                  Progress
                </p>
              </div>
            </td>
            <td className="text-base font-normal text-black-default text-left px-5 py-3">
              <BsThreeDots className="text-black-200 text-2xl" />
            </td>
          </tr>

          <tr className="border-b">
            <td className="text-black-default text-left text-base font-medium px-5 py-3">
              <div className="flex flex-wrap items-center gap-2.5 ">
                <img
                  src="/assets/images/chatbox.png"
                  className="h-10 w-10 object-cover rounded-full"
                  alt=""
                />
                <p className="text-black-default text-left text-base font-medium">
                  John Doe
                </p>
              </div>
            </td>
            <td className="text-black-default text-base font-normal px-5 py-3">
              garywaters@gmail.com
            </td>
            <td className="px-5 py-3">
              <div class="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
                <div class="h-full bg-danger-default w-[20%]"></div>
              </div>
            </td>
            <td className="px-5 py-3">
              <div className="bg-red-100 rounded-full w-fit">
                <p className="text-danger-default text-base font-medium px-4 py-1.5">
                  Canceled
                </p>
              </div>
            </td>
            <td className="text-base font-normal text-black-default text-left px-5 py-3">
              <BsThreeDots className="text-black-200 text-2xl" />
            </td>
          </tr>

          <tr className="border-b">
            <td className="text-black-default text-left text-base font-medium px-5 py-3">
              <div className="flex flex-wrap items-center gap-2.5 ">
                <img
                  src="/assets/images/chatbox.png"
                  className="h-10 w-10 object-cover rounded-full"
                  alt=""
                />
                <p className="text-black-default text-left text-base font-medium">
                  Edwin Hogan
                </p>
              </div>
            </td>
            <td className="text-black-default text-base font-normal px-5 py-3">
              garywaters@gmail.com
            </td>
            <td className="px-5 py-3">
              <div class="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
                <div class="h-full bg-parrotgreen-default w-[100%]"></div>
              </div>
            </td>
            <td className="px-5 py-3">
              <div className="bg-parrotgreen-200 rounded-full w-fit">
                <p className="text-parrotgreen-default text-base font-medium px-4 py-1.5">
                  Completed
                </p>
              </div>
            </td>
            <td className="text-base font-normal text-black-default text-left px-5 py-3">
              <BsThreeDots className="text-black-200 text-2xl" />
            </td>
          </tr>
        </tbody>
      </div>
    </div>
  );
};

export default RecentApplications;
