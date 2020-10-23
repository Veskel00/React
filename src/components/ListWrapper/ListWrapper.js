import React from "react";
import ListItem from "./ListItem/ListItem";
import '../ListWrapper/ListWrapper.css';
import { twitterAccounts } from "../../data/twitterAccounts";


const listWrapper = () =>(
    <ul className="listWrapper">
    {twitterAccounts.map(item =>(
        <ListItem
        name = {item.name}
        image = {item.image}
        description = {item.description}
        link = {item.twitterLink}
    />
    ))}
    </ul>
);
export default listWrapper;