import React, { ReactComponentElement } from "react";
import ListItem from "./ListItem";

interface ListingProps  {
    items: Object[],
    item: {
          listing_id: number,
          url: string,
          MainImage: object,
          title: string,
          currency_code: string,
          price: string,
          quantity: number,
          state: string,
        },
}

export default function Listing({items} : ListingProps){
    

    // items.map( { item }: ListingProps ) => {
    //     return (
    //         <div className="item-list">
    //             <ListItem key={item.listing_id} item={item} />
    //         </div>

    //             )
    // }

    return (
        <div className="item-list">
            {items.map(( {item }: ListingProps ) => (
                <ListItem key={item.listing_id} item={item} />
            ))}
        </div>
    )
}
