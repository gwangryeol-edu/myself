import React, { useState } from "react";

export default function Form() {
  // 입력 요소를 객체로 관리
  const [form, setForm] = useState({
    username: "",
    age: 0,
    email: "",
  });
  // const [username, setUsername] = useState("");
  // const [age, setAge] = useState(0);
  // const [email, setEmail] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    console.log(name, value);

    const newForm = { ...Form, [name]: value };
    setForm(newForm);
  }

  return (
    <div>
      <form>
        <input
          className="border-2"
          type="text"
          name="username"
          value={form.username}
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <input
          className="border-2"
          type="number"
          name="age"
          value={form.age}
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <input
          className="border-2"
          type="email"
          name="email"
          value={form.email}
          onChange={(event) => {
            handleChange(event);
          }}
        />
      </form>
    </div>
  );
}
