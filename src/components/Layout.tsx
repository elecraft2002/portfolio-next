import React from "react";
import { Footer } from "./Footer";
import Navigation from "./nav/Navigation";

export const Layout = ({
  alternateLanguages,
  navigation,
  settings,
  children,
}) => {
  return (
    <div >
      <Navigation
        alternateLanguages={alternateLanguages}
        navigation={navigation}
        settings={settings}
      />
      <main>{children}</main>
      {/* <Footer settings={settings} /> */}
    </div>
  );
};
