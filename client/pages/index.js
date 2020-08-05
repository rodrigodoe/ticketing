import Link from "next/link";

const LandingPage = ({ currentUser, tickets }) => {
  if (currentUser) {
    const ticketList = tickets.map((ticket) => {
      return (
        <tr key={ticket.id}>
          <td>{ticket.title}</td>
          <td>{ticket.price}</td>
          <td>
            <Link href="/tickets/[ticketId]" as={`/tickets/${ticket.id}`}>
              <a>View </a>
            </Link>
          </td>
        </tr>
      );
    });

    return (
      <div>
        <h1>Tickets</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>{ticketList}</tbody>
        </table>
      </div>
    );
  }
  return <div></div>;
};

LandingPage.getInitialProps = async (context, client, currentUser) => {
  let tickets = [];
  if (currentUser) {
    const { data } = await client.get("/api/tickets");
    tickets = data;
  }
  return { tickets };
};

export default LandingPage;
