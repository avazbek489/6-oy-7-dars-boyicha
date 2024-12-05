import React from "react";

function Card(props) {
  const { name, price, description, id } = props.phone;
  const { deleteItem } = props;
  return (
    <div className="rounded-lg container flex flex-col mx-auto border w-[600px] h-[200px] gap-2 mt-2 bg-blue-400 p-3">
      <h3>{name}</h3>
      <h3>{price}</h3>
      <p>{description}</p>
      <span>{id}</span>
      <button
        onClick={() => {
          deleteItem(id);
        }}
        className="bg-red-500 py-3 px-5 rounded-md text-white"
      >
        delete
      </button>
    </div>
  );
}

export default Card;
