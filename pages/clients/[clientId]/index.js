import React from "react";

import { useRouter } from "next/router";

const ClientProjectsPage = () => {
  const router = useRouter();

  console.log(router.query);

  function clickHandler() {
    // router.push("/clients/13/new-project");
    // alternative way

    router.push({
      pathname: "/clients/[clientId]/[clientProjectId]",
      query: {
        clientId: "13",
        clientProjectId: "Project-A",
      },
    });
  }
  return (
    <div>
      <h1>Client Projects Page</h1>
      <button onClick={clickHandler}>Load Project A</button>
    </div>
  );
};
export default ClientProjectsPage;
