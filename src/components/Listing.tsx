import React, { ReactComponentElement } from "react";
import ListItem from "./ListItem";
import { Item } from "./ListItem"

export interface ListingProps {
    items: Item[],
    item: Item,
  }

//   interface Item  {
//     item: {
//           listing_id: number,
//           url: string,
//           MainImage: {
//             url_570xN: string,
//           },
//           title: string,
//           currency_code: string,
//           price: string,
//           quantity: number,
//           state: string,
//         },
// }

export default function Listing({items} : ListingProps){
    

    // items.map(( { item }: Item ) => {
    //     return (
    //         <div className="item-list">
    //             <ListItem key={item.listing_id} item={item} />
    //         </div>
    //     )}
    //             )
    // }

    return (
        <div className="item-list">
            {items.map(( {item }: Item ) => (
                <ListItem key={item.listing_id} item={item} />
            ))}
        </div>
    )
}
