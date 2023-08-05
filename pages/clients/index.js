import React from "react";
import Link from "next/link";

const ClientsPage = () => {
  const clients = [
    { id: "11", name: "Satyam" },
    { id: "32", name: "Vishesh" },
    { id: "13", name: "Yash" },
    { id: "45", name: "Abhinav" },
  ];
  return (
    <div>
      <h1>Client Page</h1>
      <ul>
        {clients.map((item, index) => {
          return (
            // <li key={index}>
            //   <Link href={`/clients/${item.id}`}>{item.name}</Link>
            // </li>
            // Different way to use Link / Alternative way

            <li key={index}>
              <Link
                href={{
                  pathname: "clients/[clientId]",
                  query: { clientId: item.id },
                }}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ClientsPage;
