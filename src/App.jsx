import React, { useState, useEffect } from "react";
import { backend } from "./axios";
import Card from "./components/Card";
function App() {
  const [phones, setPhones] = useState({});
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    setLoading(true);
    backend("products/all")
      .then((response) => {
        if (response.status == 200) {
          setPhones(response.data);
        }
      })
      .catch((error) => {})
      .finally(function () {
        setLoading(false);
      });
  }, []);
  function handleSend(event) {
    event.preventDefault();
    const phone = {
      name: name,
      price: price,
      description: description,
      status: "active",
      category_id: "2",
    };

    backend
      .post("products/", phone, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          const copied = [...phones];
          copied.push(response.data);
          setPhones(copied);
        }
      })
      .catch((error) => {})
      .finally(() => {
        setName("");
        setPrice("");
        setDescription("");
      });
  }

  function handleDelete(id) {
    const isDelete = confirm("Rostdan ham ochirmoqchimisiz");
    if (isDelete && id) {
      backend
        .delete(`products/${id}`)
        .then((response) => {
          if (response.status == 200) {
            let copied = [...phones];
            copied.filter((value) => {
              return value.id != id;
            });
            setPhones(copied);
          }
        })
        .catch((error) => {});
    } else {
      console.log("Ochirilmadi");
    }
  }
  return (
    <>
      <form className="mt-2 flex flex-col gap-3 mb-5 w-[600px] container mx-auto border bg-slate-500 p-5 rounded-md">
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="border rounded-md p-2"
          type="text"
          placeholder="Enter phone name..."
        />
        <input
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          className="border rounded-md p-2"
          type="text"
          placeholder="Enter phone price..."
        />
        <textarea
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          className="border rounded-md p-2"
          placeholder="Description"
        ></textarea>
        <button
          onClick={handleSend}
          className="border-2 text-white w-[80px] h-[40px] mx-auto rounded-lg"
        >
          SEND
        </button>
      </form>

      <div className=""></div>

      <div className="container mx-auto">
        {!loading &&
          phones.length > 0 &&
          phones.map((phone, index) => {
            return <Card deleteItem={handleDelete} key={index} phone={phone} />;
          })}
        {loading && (
          <p className="container mx-auto text-center text-gray-900 font-black text-[100px] mt-40">
            Loading...
          </p>
        )}
      </div>
    </>
  );
}
export default App;
