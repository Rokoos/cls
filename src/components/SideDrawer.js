import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { scroller } from "react-scroll";

const SideDrawer = (props) => {
  const scrollToElements = (element) => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -230,
    });
    props.onClose(false);
  };
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List
        style={{
          color: "#777",
          fontFamily: '"Kaushan Script", cursive',
          fontSize: "1.2rem",
          lineHeight: 1.5,
        }}
        component="nav"
      >
        <ListItem button onClick={() => scrollToElements("aboutUs")}>
          Kim jesteśmy?
        </ListItem>
        <ListItem button onClick={() => scrollToElements("projects")}>
          Przykładowe projekty
        </ListItem>

        <ListItem button onClick={() => scrollToElements("contact")}>
          Kontakt
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
