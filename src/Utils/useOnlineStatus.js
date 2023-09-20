import { useState, useEffect } from "react";
function useOnlineStatus() {
  const [OnlineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
  }, []);
  return OnlineStatus;
}

export default useOnlineStatus;
