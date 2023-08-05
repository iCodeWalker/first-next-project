import React, { useState } from "react";

import { useRouter } from "next/router";

const SelectedClientProjectsPage = () => {
  const router = useRouter();

  console.log(router.query);
  return (
    <div>
      <h1>Selected Client Projects Page</h1>
    </div>
  );
};
export default SelectedClientProjectsPage;
