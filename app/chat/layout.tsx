import React from "react";
export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="h-screen flex overflow-x-hidden">
        {children}
        {/* <button onClick={()=>signOut({ callbackUrl: '/' })}>Signout</button> */}
      </div>
    </>
  );
}
