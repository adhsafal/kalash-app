import React, { useEffect } from "react";
import MobileDetect from "mobile-detect";

const getDeviceType = (userAgent) => {
  console.log(userAgent);
  if (userAgent) {
    const md = new MobileDetect(userAgent);
    if (md.mobile()) {
      if (md.os() === "iOS") {
        return "iOS";
      } else if (md.os() === "AndroidOS") {
        return "Android";
      } else {
        return "Mobile";
      }
    } else {
      return "Desktop";
    }
  }
  return "Unknown";
};

const notify = (url) => {
  window.open(url, "_blank");
};

const App = ({ deviceType }) => {
  useEffect(() => {
    if (deviceType === "iOS") {
      notify("https://apps.apple.com/in/app/kalash/id6469297250");
    } else if (deviceType === "Android") {
      notify(
        "https://play.google.com/store/apps/details?id=com.money.save.gold.kalash"
      );
    } else {
      notify("https://kalashapp.com");
    }
  }, [deviceType]);

  return <></>;
};

App.getInitialProps = ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
  const deviceType = getDeviceType(userAgent);
  return {
    deviceType: deviceType,
  };
};

export default App;
