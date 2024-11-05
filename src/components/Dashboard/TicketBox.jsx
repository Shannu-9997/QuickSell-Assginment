import React from "react";
import Profile from "../../assets/profile.png";
import featuredot from "../../assets/featuredot.svg";
import threeDot from "../../assets/3 dot menu.svg";
import todo from "../../assets/To-do.svg";
import done from "../../assets/Done.svg";
import highpriority from "../../assets/Img - High Priority.svg";
const TicketBox = ({ ticket, groupBy }) => {
  const truncateTitle = (title, limit) => {
    if (title.length > limit) {
      return title.substring(0, limit) + "...";
    }
    return title;
  };
  console.log(ticket.status);
  return (
    <div className="ticketbox">
      <div className="top">
        <p>{ticket.id}</p>
        <p>
          {(groupBy === "users" || groupBy === "priority") &&
            (ticket.status === "Done" ? (
              <img src={done} alt="done" />
            ) : (
              <img src={todo} alt="todo" />
            ))}
          {truncateTitle(ticket.title, 50)}
        </p>
        <div>
          {groupBy !== "priority" &&
            (ticket.priority === 4 ? (
              <img src={highpriority} alt="highpriority" />
            ) : (
              <img src={threeDot} alt="threedot" />
            ))}
          <p>
            <img src={featuredot} alt="todo" />
            {ticket.tag}
          </p>
        </div>
      </div>

      {groupBy !== "users" && <img src={Profile} alt="profile" />}
    </div>
  );
};

export default TicketBox;
