import React, { useEffect } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Navbar from "./components/Navbar";
import { getTickets } from "./api/Tickets";
function App() {
  const [groupBy, setGroupBy] = React.useState(localStorage.getItem("grp") || "status" );
  const [orderBy, setOrderBy] = React.useState(localStorage.getItem("ord") || "title");
  const [Tickets, setTickets] = React.useState([]);
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  function handleGroupByChange(value) {
    localStorage.setItem("grp",value);
    setGroupBy(value);
  }

  function handleOrderByChange(value) {
    localStorage.setItem("ord",value);
    setOrderBy(value);
  }
  useEffect(() => {
    async function getData() {
      try {
        const response = await getTickets();
        setTickets(response.tickets);
        setUsers(response.users);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(error);
      }
    }
    getData();
  }, []);
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="App">
      <Navbar
        handleGroupByChange={handleGroupByChange}
        handleOrderByChange={handleOrderByChange}
        groupBy={groupBy}
        orderBy={orderBy}
      />
      {loading ? (
        <>loading...</>
      ) : (
        <Dashboard
          groupBy={groupBy}
          orderBy={orderBy}
          Tickets={Tickets}
          Users={users}
        />
      )}
    </div>
  );
}

export default App;
