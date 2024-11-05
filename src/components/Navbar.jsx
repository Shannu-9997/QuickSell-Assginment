import React, { useEffect } from "react";
import display from "../assets/Display.svg";
import down from "../assets/down.svg";
const Navbar = ({
  handleGroupByChange,
  handleOrderByChange,
  orderBy,
  groupBy,
}) => {
  const [showMenu, setShowMenu] = React.useState(false);
  const menuRef = React.useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar">
      <button
        className="btn-display"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
        ref={menuRef}
      >
        <img src={display} alt="display-svg" />
        Display
        <img src={down} alt="down-svg" />
      </button>
      {showMenu && (
        <div className="floating-menu" ref={menuRef}>
          <div className="grp">
            <label htmlFor="grp">Grouping</label>
            <select
              id="grp"
              value={groupBy}
              onChange={(event) => {
                handleGroupByChange(event.target.value);
              }}
            >
              <option value="status">Status</option>
              <option value="users">Users</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="ord">
            <label htmlFor="ord">Ordering</label>
            <select
              id="ord"
              value={orderBy}
              onChange={(event) => {
                handleOrderByChange(event.target.value);
              }}
            >
              <option value="title">Title</option>
              <option value="priority">Priority</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
