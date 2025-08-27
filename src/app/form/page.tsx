"use client";
import React, { ChangeEventHandler, useState } from "react";

const Page = () => {
  const [firstname, setFirstname] = useState<string>();
  const [lastname, setLastname] = useState<string>();

  const onFirstnameChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value;
    setFirstname(value);
  };

  return (
    <main className="flex w-full h-screen justify-center items-center flex-col gap-2">
      <div className="">
        <p>nilai :</p>
        <p>firstname : {firstname}</p>
        <p>lastname : {lastname}</p>
      </div>
      <form className="flex flex-col gap-2">
        <input
          className="p-2 border rounded-lg"
          type="text"
          placeholder="Firstname..."
          name="firstname"
          onChange={onFirstnameChange}
        />
        <input
          className="p-2 border rounded-lg"
          type="text"
          placeholder="Lastname..."
          name="lastname"
          onChange={(e) => {
            const value = e.target.value;
            setLastname(value);
          }}
        />
      </form>
    </main>
  );
};

export default Page;
