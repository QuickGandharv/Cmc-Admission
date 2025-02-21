import Title from "../../components/ui/Title";
import { IoCalendarOutline } from "react-icons/io5";
import OutlineButton from "../../components/ui/OutlineButton";
import { useState } from 'react';
import Calendar from 'react-calendar';
const Calender = () => {
    const [value, setValue] = useState(new Date());
    return(
        <div className="bg-white-default p-5 mb-6 rounded-lg shadow-flex">
            <div className="flex flex-wrap items-center justify-between mb-8">
                <div className="flex gap-x-2.5">
                    <IoCalendarOutline color="#1F1E1E" size={26} />
                    <Title title="Calender" />
                </div>
                <OutlineButton text="See More" className="text-primary-default border-primary-default" classname="[&]:text-black-300 shadow-calander-btn border-0" />
            </div>
            <Calendar onChange={setValue} value={value} />
        </div>
    )
}
export default Calender;