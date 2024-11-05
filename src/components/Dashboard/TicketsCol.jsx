import React from "react";
import TicketBox from "./TicketBox";
import backlog from "../../assets/Backlog.svg";
import cancel from "../../assets/Cancelled.svg";
import done from "../../assets/Done.svg";
import inprogress from "../../assets/in-progress.svg";
import todo from "../../assets/To-do.svg";
import highpriority from "../../assets/Img - High Priority.svg";
import lowpriority from "../../assets/Img - Low Priority.svg";
import mediumpriority from "../../assets/Img - Medium Priority.svg";
import nopriority from "../../assets/No-priority.svg";
import urgent from "../../assets/SVG - Urgent Priority colour.svg";
import add from "../../assets/add.svg";
import threedot from "../../assets/3 dot menu.svg";
import profile from "../../assets/profile.png";
const TicketsCol = ({ title, tickets, groupBy }) => {
  if (title === "Unassigned") {
    return;
  }
  const SetTitile = (title) => {
    if (title === "Backlog") {
      return <img src={backlog} alt="Backlog" />;
    }
    if (title === "Cancelled") {
      return <img src={cancel} alt="Cancelled" />;
    }
    if (title === "Done") {
      return <img src={done} alt="Done" />;
    }
    if (title === "In progress") {
      return <img src={inprogress} alt="In progress" />;
    }
    if (title === "Todo") {
      return <img src={todo} alt="Todo" />;
    }
    if (title === "High") {
      return <img src={highpriority} alt="High" />;
    }
    if (title === "Low") {
      return <img src={lowpriority} alt="Low" />;
    }
    if (title === "Medium") {
      return <img src={mediumpriority} alt="Medium" />;
    }
    if (title === "No Priority") {
      return <img src={nopriority} alt="No Priority" />;
    }
    if (title === "Urgent") {
      return <img src={urgent} alt="Urgent" />;
    } else {
      return <img src={profile} alt="profile" className="profile-img" />;
    }
  };
  return (
    <div className="ticketCol">
      <div className="title">
        <div>
          {SetTitile(title)}
          {title}
          <p>{tickets.length}</p>
        </div>
        <div>
          <img src={add} alt="add" />
          <img src={threedot} alt="threedot" />
        </div>
      </div>
      {tickets.map((ticket) => (
        <TicketBox key={ticket.id} ticket={ticket} groupBy={groupBy} />
      ))}
    </div>
  );
};

export default TicketsCol;
