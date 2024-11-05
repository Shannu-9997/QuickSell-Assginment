import React from "react";
import TicketsCol from "./TicketsCol";

const Dashboard = ({ groupBy, orderBy, Tickets, Users }) => {
  function groupTickets() {
    const groupedTickets = {};

    Tickets.forEach((ticket) => {
      let key;
      if (groupBy === "status") {
        key = ticket.status;
      } else if (groupBy === "users") {
        const user = Users.find((u) => u.id === ticket.userId);
        key = user ? user.name : "Unassigned";
      } else if (groupBy === "priority") {
        key = ticket.priority || 0;
      }

      if (!groupedTickets[key]) groupedTickets[key] = [];
      groupedTickets[key].push(ticket);
    });

    return groupedTickets;
  }

  function sortTickets(tickets) {
    return tickets.slice().sort((a, b) => {
      if (orderBy === "priority") {
        return b.priority - a.priority;
      } else if (orderBy === "title") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
  }

  const groupedTickets = groupTickets();
  const columns = [];
  if (groupBy === "status") {
    columns.push("Backlog", "Todo", "In progress", "Done", "Cancelled");
  } else if (groupBy === "users") {
    columns.push(...Users.map((user) => user.name), "Unassigned");
  } else if (groupBy === "priority") {
    columns.push(0, 4, 3, 2, 1);
  }
  console.log(groupedTickets);

  return (
    <div className="dashboard">
      {columns.map((col) => (
        <TicketsCol
          key={col}
          title={groupBy === "priority" ? getPriorityLabel(col) : col}
          tickets={sortTickets(groupedTickets[col] || [])}
          groupBy={groupBy}
        />
      ))}
    </div>
  );
};

function getPriorityLabel(priority) {
  switch (priority) {
    case 4:
      return "Urgent";
    case 3:
      return "High";
    case 2:
      return "Medium";
    case 1:
      return "Low";
    case 0:
      return "No Priority";
    default:
      return "Unknown";
  }
}

export default Dashboard;
