// import { FaArrowsRotate } from "react-icons/fa6";
// import { FiPrinter } from "react-icons/fi";
// import { FaFileExport } from "react-icons/fa6";
// import { IoIosArrowDown } from "react-icons/io";
// import Button from "../../components/ui/Button";
// import { CgAddR } from "react-icons/cg";
// import { CiCalendarDate } from "react-icons/ci";
// import { CiFilter } from "react-icons/ci";
// import { FaSortAmountDown } from "react-icons/fa";
// import { useForm } from "react-hook-form";
// import SelectField from "../../components/forms/SelectField";
// import SearchBar from "../../components/ui/Searchbar";
// import { TiArrowUnsorted } from "react-icons/ti";
// import { IoEye } from "react-icons/io5";
// import { FaCloudDownloadAlt } from "react-icons/fa";
// import { HiDotsVertical } from "react-icons/hi";

const StudentList = () => {
  // const {
  //   control,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   defaultValues: {
  //     category: "",
  //   },
  // });
  // const options = [
  //   { value: "option1", label: "Option 1" },
  //   { value: "option2", label: "Option 2" },
  //   { value: "option3", label: "Option 3" },
  // ];

  // return (
  //   <div className="student-list bg-white-default p-5 rounded-lg">
  //     <div className="flex gap-2.5 justify-end items-center mb-4">
  //       <span className="h-10 w-10 rounded-full flex items-center justify-center">
  //         <FaArrowsRotate className="text-black-300" />
  //       </span>
  //       <span className="h-10 w-10 rounded-full bg-white-default flex items-center justify-center">
  //         <FiPrinter className="text-black-300" />
  //       </span>
  //       <button className="flex items-center bg-primary-200 rounded-full justify-center text-black-300 px-4 py-2.5">
  //         <FaFileExport className="text-black-300 mr-2" />
  //         Export
  //         <IoIosArrowDown className="ml-2" />
  //       </button>
  //       <Button
  //         classname="flex items-center [&]:rounded-full [&]:px-4"
  //         icon={<CgAddR className="text-xl mr-2" />}
  //         text="Add Students"
  //         className="text-white-default"
  //       />
  //     </div>
  //     <div className="flex justify-between py-5 items-center bg-white-default mb-8">
  //       <h2 className="text-black-default capitalize">Students list</h2>
  //       <div className="flex items-center gap-2.5">
  //         <div className="flex items-center justify-center px-5 py-2.5 rounded-full bg-white-300">
  //           <CiCalendarDate className="text-black-300 mr-2" />
  //           <span className="text-black-300 capitalize text-base font-normal">
  //             11/01/2024 - 11/07/2024
  //           </span>
  //         </div>
  //         <div className="flex items-center justify-center px-5 py-2.5 rounded-full bg-white-300">
  //           <CiFilter className="text-black-300 mr-2" />
  //           <span className="text-black-300 capitalize text-base font-normal">
  //             Filter
  //           </span>
  //           <IoIosArrowDown className="text-black-default ml-2" />
  //         </div>
  //         <div className="flex items-center justify-center px-5 py-2.5 rounded-full bg-white-300">
  //           <FaSortAmountDown className="text-black-300 mr-2" />
  //           <span className="text-black-300 capitalize text-base font-normal">
  //             Sort by A-z
  //           </span>
  //           <IoIosArrowDown className="text-black-default ml-2" />
  //         </div>
  //       </div>
  //     </div>
  //     <div className="flex flex-wrap items-center justify-between mb-4">
  //       <div className="flex flex-wrap items-center gap-2.5">
  //         <p className="text-black-300">Row Per Page</p>
  //         <SelectField
  //           name="category"
  //           control={control}
  //           options={options}
  //           placeholder="10"
  //           rules={{ required: "" }}
  //           className="w-fit"
  //         />
  //         <p className="text-base text-black-300">Entries</p>
  //       </div>
  //       <div>
  //         <SearchBar placeholder="Search" />
  //       </div>
  //     </div>
  //     <div>
  //       <table className="table w-full">
  //       <thead class="bg-primary-100 text-black-default">
  //           <tr>
  //               <th>
  //               <div class="flex items-center justify-between">
  //               Name
  //                       <TiArrowUnsorted className="text-black-300" />
  //                   </div>
  //               </th>
  //               <th>
  //                   <div class="flex items-center justify-between">
  //                   Application No.
  //                       <TiArrowUnsorted className="text-black-300" />
  //                   </div>
  //               </th>
  //               <th>
  //               <div class="flex items-center justify-between">
  //               Email
  //                       <TiArrowUnsorted className="text-black-300" />
  //                   </div>
  //               </th>
  //               <th>
  //               <div class="flex items-center justify-between">
  //               Mobile
  //                       <TiArrowUnsorted className="text-black-300" />
  //                   </div>
  //               </th>
  //               <th>
  //               <div class="flex items-center justify-between">
  //               Applied
  //                       <TiArrowUnsorted className="text-black-300" />
  //                   </div>
  //               </th>
  //               <th>
  //               <div class="flex items-center justify-between">
  //               Created At
  //                       <TiArrowUnsorted className="text-black-300" />
  //                   </div>
  //               </th>
  //               <th>
  //               <div class="flex items-center justify-between">
  //               Submission Date
  //                       <TiArrowUnsorted className="text-black-300" />
  //                   </div>
  //               </th>
  //               <th>
  //               <div class="flex items-center justify-between">
  //               Actions
  //                       <TiArrowUnsorted className="text-black-300" />
  //                   </div>
  //               </th>
  //           </tr>
  //       </thead>
  //       <tbody>
  //           <tr class="bg-white-default text-black-default text-left border-b">
  //               <td>
  //                   <div className="flex items-center gap-2.5">
  //                     <img src="src/assets/images/chatbox.png" className="h-10 w-10 rounded-full object-cover" alt="" /><span>Joshua Wood</span>
  //                   </div>
  //               </td>
  //               <td>
  //               <p className="text-info-default">2024-1004</p>
  //               </td>
  //               <td>
  //               <p className="text-black-300">joshua@gmail.com</p>
  //               </td>
  //               <td>
  //                 <p className="text-black-300">123456789</p>
  //               </td>
  //               <td>
  //                 <p className="text-black-300">PG</p>
  //               </td>
  //               <td>
  //                 <p className="text-black-300">1 June, 2024 04:50pm</p>
  //               </td>
  //               <td>
  //                 <p className="text-black-300">1 June, 2024 04:50pm</p>
  //               </td>
  //               <td>
  //                 <div className="flex items-center justify-between">
  //                   <span className="flex items-center gap-2">
  //                     <IoEye />
  //                     <FaCloudDownloadAlt />
  //                   </span>
  //                   <HiDotsVertical />
  //                 </div>
  //               </td>
  //           </tr>
  //           <tr class="bg-white-default text-black-default text-left border-b">
  //               <td>
  //                   <div className="flex items-center gap-2.5">
  //                     <img src="src/assets/images/chatbox.png" className="h-10 w-10 rounded-full object-cover" alt="" /><span>Joshua Wood</span>
  //                   </div>
  //               </td>
  //               <td>
  //               <p className="text-info-default">2024-1004</p>
  //               </td>
  //               <td>
  //               <p className="text-black-300">joshua@gmail.com</p>
  //               </td>
  //               <td>
  //                 <p className="text-black-300">123456789</p>
  //               </td>
  //               <td>
  //                 <p className="text-black-300">PG</p>
  //               </td>
  //               <td>
  //                 <p className="text-black-300">1 June, 2024 04:50pm</p>
  //               </td>
  //               <td>
  //                 <p className="text-black-300">1 June, 2024 04:50pm</p>
  //               </td>
  //               <td>
  //                 <div className="flex items-center justify-between">
  //                   <span className="flex items-center gap-2">
  //                     <IoEye />
  //                     <FaCloudDownloadAlt />
  //                   </span>
  //                   <HiDotsVertical />
  //                 </div>
  //               </td>
  //           </tr>
  //           <tr class="bg-white-default text-black-default text-left border-b">
  //               <td>
  //                   <div className="flex items-center gap-2.5">
  //                     <img src="src/assets/images/chatbox.png" className="h-10 w-10 rounded-full object-cover" alt="" /><span>Joshua Wood</span>
  //                   </div>
  //               </td>
  //               <td>
  //               <p className="text-info-default">2024-1004</p>
  //               </td>
  //               <td>
  //               <p className="text-black-300">joshua@gmail.com</p>
  //               </td>
  //               <td>
  //                 <p className="text-black-300">123456789</p>
  //               </td>
  //               <td>
  //                 <p className="text-black-300">PG</p>
  //               </td>
  //               <td>
  //                 <p className="text-black-300">1 June, 2024 04:50pm</p>
  //               </td>
  //               <td>
  //                 <p className="text-black-300">1 June, 2024 04:50pm</p>
  //               </td>
  //               <td>
  //                 <div className="flex items-center justify-between">
  //                   <span className="flex items-center gap-2">
  //                     <IoEye />
  //                     <FaCloudDownloadAlt />
  //                   </span>
  //                   <HiDotsVertical />
  //                 </div>
  //               </td>
  //           </tr>
  //           <tr class="bg-white-default text-black-default text-left border-b">
  //               <td>
  //                   <div className="flex items-center gap-2.5">
  //                     <img src="src/assets/images/chatbox.png" className="h-10 w-10 rounded-full object-cover" alt="" /><span>Joshua Wood</span>
  //                   </div>
  //               </td>
  //               <td>
  //               <p className="text-info-default">2024-1004</p>
  //               </td>
  //               <td>
  //               <p className="text-black-300">joshua@gmail.com</p>
  //               </td>
  //               <td>
  //                 <p className="text-black-300">123456789</p>
  //               </td>
  //               <td>
  //                 <p className="text-black-300">PG</p>
  //               </td>
  //               <td>
  //                 <p className="text-black-300">1 June, 2024 04:50pm</p>
  //               </td>
  //               <td>
  //                 <p className="text-black-300">1 June, 2024 04:50pm</p>
  //               </td>
  //               <td>
  //                 <div className="flex items-center justify-between">
  //                   <span className="flex items-center gap-2">
  //                     <IoEye />
  //                     <FaCloudDownloadAlt />
  //                   </span>
  //                   <HiDotsVertical />
  //                 </div>
  //               </td>
  //           </tr>
  //           <tr class="bg-white-default text-black-default text-left border-b">
  //               <td>
  //                   <div className="flex items-center gap-2.5">
  //                     <img src="src/assets/images/chatbox.png" className="h-10 w-10 rounded-full object-cover" alt="" /><span>Joshua Wood</span>
  //                   </div>
  //               </td>
  //               <td>
  //               <p className="text-info-default">2024-1004</p>
  //               </td>
  //               <td>
  //               <p className="text-black-300">joshua@gmail.com</p>
  //               </td>
  //               <td>
  //                 <p className="text-black-300">123456789</p>
  //               </td>
  //               <td>
  //                 <p className="text-black-300">PG</p>
  //               </td>
  //               <td>
  //                 <p className="text-black-300">1 June, 2024 04:50pm</p>
  //               </td>
  //               <td>
  //                 <p className="text-black-300">1 June, 2024 04:50pm</p>
  //               </td>
  //               <td>
  //                 <div className="flex items-center justify-between">
  //                   <span className="flex items-center gap-2">
  //                     <IoEye />
  //                     <FaCloudDownloadAlt />
  //                   </span>
  //                   <HiDotsVertical />
  //                 </div>
  //               </td>
  //           </tr>
  //           <tr class="bg-white-default text-black-default text-left border-b">
  //               <td>
  //                   <div className="flex items-center gap-2.5">
  //                     <img src="src/assets/images/chatbox.png" className="h-10 w-10 rounded-full object-cover" alt="" /><span>Joshua Wood</span>
  //                   </div>
  //               </td>
  //               <td>
  //               <p className="text-info-default">2024-1004</p>
  //               </td>
  //               <td>
  //               <p className="text-black-300">joshua@gmail.com</p>
  //               </td>
  //               <td>
  //                 <p className="text-black-300">123456789</p>
  //               </td>
  //               <td>
  //                 <p className="text-black-300">PG</p>
  //               </td>
  //               <td>
  //                 <p className="text-black-300">1 June, 2024 04:50pm</p>
  //               </td>
  //               <td>
  //                 <p className="text-black-300">1 June, 2024 04:50pm</p>
  //               </td>
  //               <td>
  //                 <div className="flex items-center justify-between">
  //                   <span className="flex items-center gap-2">
  //                     <IoEye />
  //                     <FaCloudDownloadAlt />
  //                   </span>
  //                   <HiDotsVertical />
  //                 </div>
  //               </td>
  //           </tr>
  //           <tr class="bg-white-default text-black-default text-left border-b">
  //               <td>
  //                   <div className="flex items-center gap-2.5">
  //                     <img src="src/assets/images/chatbox.png" className="h-10 w-10 rounded-full object-cover" alt="" /><span>Joshua Wood</span>
  //                   </div>
  //               </td>
  //               <td>
  //               <p className="text-info-default">2024-1004</p>
  //               </td>
  //               <td>
  //               <p className="text-black-300">joshua@gmail.com</p>
  //               </td>
  //               <td>
  //                 <p className="text-black-300">123456789</p>
  //               </td>
  //               <td>
  //                 <p className="text-black-300">PG</p>
  //               </td>
  //               <td>
  //                 <p className="text-black-300">1 June, 2024 04:50pm</p>
  //               </td>
  //               <td>
  //                 <p className="text-black-300">1 June, 2024 04:50pm</p>
  //               </td>
  //               <td>
  //                 <div className="flex items-center justify-between">
  //                   <span className="flex items-center gap-2">
  //                     <IoEye />
  //                     <FaCloudDownloadAlt />
  //                   </span>
  //                   <HiDotsVertical />
  //                 </div>
  //               </td>
  //           </tr>
  //           <tr class="bg-white-default text-black-default text-left border-b">
  //               <td>
  //                   <div className="flex items-center gap-2.5">
  //                     <img src="src/assets/images/chatbox.png" className="h-10 w-10 rounded-full object-cover" alt="" /><span>Joshua Wood</span>
  //                   </div>
  //               </td>
  //               <td>
  //               <p className="text-info-default">2024-1004</p>
  //               </td>
  //               <td>
  //               <p className="text-black-300">joshua@gmail.com</p>
  //               </td>
  //               <td>
  //                 <p className="text-black-300">123456789</p>
  //               </td>
  //               <td>
  //                 <p className="text-black-300">PG</p>
  //               </td>
  //               <td>
  //                 <p className="text-black-300">1 June, 2024 04:50pm</p>
  //               </td>
  //               <td>
  //                 <p className="text-black-300">1 June, 2024 04:50pm</p>
  //               </td>
  //               <td>
  //                 <div className="flex items-center justify-between">
  //                   <span className="flex items-center gap-2">
  //                     <IoEye />
  //                     <FaCloudDownloadAlt />
  //                   </span>
  //                   <HiDotsVertical />
  //                 </div>
  //               </td>
  //           </tr>
  //       </tbody>
  //         </table>
  //     </div>
  //   </div>
  // );
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-black-default">Error 404 Page Not Found</h1>
    </div>
  );
};

export default StudentList;
