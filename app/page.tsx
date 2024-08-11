// pages/index.tsx
import React from "react";
import dynamic from "next/dynamic";

const CustomerPortal = dynamic(() => import("@/components/customer-portal"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <CustomerPortal />
    </div>
  );
}
