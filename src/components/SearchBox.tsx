import React, { FormEvent, useEffect, useRef, useState } from "react";

export const SearchBox = ({
  handleSearch,
}: {
  handleSearch: (e: FormEvent<HTMLFormElement>, CITY: string) => void;
}) => {
  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: FormEvent) => {
    const { value } = e.target as HTMLInputElement;
    setSearch(value);
  };

  useEffect(() => {
    inputRef.current!.focus();
  }, []);

  return (
    <form
      action=""
      id="form"
      onSubmit={(e) => {
        handleSearch(e, search);
        setSearch("");
      }}
    >
      <label htmlFor="search"></label>
      <input
        ref={inputRef}
        type="search"
        name="search"
        id="search"
        placeholder="Buscar ubicación"
        autoComplete="off"
        className="obsolute w-72 h-8 p-3 rounded-full mt-12 mb-20"
        onChange={handleChange}
        value={search}
      />
    </form>
  );
};
