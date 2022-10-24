import React from 'react';

/** choose a random item. **/
const choice = (items) => (
    items[Math.floor(Math.random() * items.length)]
);

/** return copy of array w/o first appearance of item **/
const remove = (items,item) => {
    const index = items.indexOf(item);
    if (index > -1) { 
        items.splice(index, 1);
        return items;
    } return items;
};


export { choice, remove };