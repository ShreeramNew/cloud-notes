import React, { createContext, useState } from "react";
const RefreshContext = createContext();
export { RefreshContext };

export default function Refresh(props) {
   const [triggerRefresh, setTriggerRefresh] = useState(false);
   let data = {
      trigger: triggerRefresh,
      setTrigger: setTriggerRefresh,
   };
   return (
      <>
         <RefreshContext.Provider value={data}>{props.children}</RefreshContext.Provider>
      </>
   );
}
