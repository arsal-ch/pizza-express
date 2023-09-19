import { useState } from "react";
import Button from "../../ui/Button";

function CreateUser() {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-700">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        className="inline-block w-72 rounded-full bg-stone-200 px-4 py-2 text-sm  text-stone-700 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-70 focus:ring-offset-1"
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== "" && (
        <div>
          <Button>Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
