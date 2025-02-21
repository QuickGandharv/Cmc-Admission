import { NavLink } from "react-router-dom";

const SideNavLink = ({
  href,
  text,
  icon,
  arrowicon,
  className,
  spanclass,
  id,
}) => {
  return (
    <NavLink
      to={href}
      id={id}
      className={`text-base font-medium leading-5 capitalize flex flex-wrap items-center justify-between px-5 pt-3 pb-4 hover:bg-primary-300 group ${className}`}
    >
      <div className="flex items-center">
        <span className={`text-xl font-medium mr-3.5 ${spanclass}`}>
          {icon}
        </span>
        {text}
      </div>
      <span className="group-hover:rotate-90">{arrowicon}</span>
    </NavLink>
  );
};

export default SideNavLink;
