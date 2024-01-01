import React, { ReactComponentElement } from "react";
import ListItem from "./ListItem";

interface ListingProps  {
    props: Object,
    items: Object[],
    item : Object,
    listing_id: Number,
}

export default function Listing({props}: ListingProps) {
    const items  = [];
    return (
        <div className="item-list">
            {items.map(( item ) => (
                <ListItem key={item.listing_id} item={item} />
            ))}
        </div>
    )
}

Listing.defaultProps = {
    items: [],
};