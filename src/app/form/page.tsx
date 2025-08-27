"use client";

import { FormEventHandler } from "react";

const Page = () => {
  // const [firstname, setFirstname] = useState<string>();
  // const [lastname, setLastname] = useState<string>();

  // const onFirstnameChange: ChangeEventHandler<HTMLInputElement> = (e) => {
  //   const value = e.target.value;
  //   setFirstname(value);
  // };

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const _firstname = form.get("firstname");
    const _lastname = form.get("lastname");

    console.log("submited...", { _firstname, _lastname });
  };

  return (
    <main className="flex w-full h-screen justify-center items-center flex-col gap-2">
      <form className="flex flex-col gap-2" onSubmit={onSubmit}>
        <input
          className="p-2 border rounded-lg"
          type="text"
          placeholder="Firstname..."
          name="firstname"
          // onChange={onFirstnameChange}
        />
        <input
          className="p-2 border rounded-lg"
          type="text"
          placeholder="Lastname..."
          name="lastname"
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default Page;
