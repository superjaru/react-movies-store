import React, { useState, useEffect } from "react";
import movieAPI from "../apis/movieAPI";
export const SearchBar = ({ onSearch }) => {
  const [term, SetTerm] = useState("");
  const [determ, SetTerm] = useState("");
  useEffect(() => {
    if (term.length < 1) {
      return;
    }
    const doSearch = async () => {
      const { data } = await movieAPI.get("", {
        params: {
          query: term,
        },
      });
      onSearch(data.results);
    };
    doSearch();
  }, [term]);
  return (
    <div>
      <form onSubmit={(e) => SetTerm(e)}>
        <div className="form-group">
          <label>Video Search</label>
          <input
            className="form-control"
            value={term}
            type="search"
            onChange={(e) => SetTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};
