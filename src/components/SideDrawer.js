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
      offset: -200,
    });
    props.onClose(false);
  };
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component="nav">
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
