import movieAPI from "../movieAPI";


export const doSearch = async ({term , onSearch}) => {
    const { data } = await movieAPI.get("", {
      params: {
        query: term,
      },
    });
    onSearch(data.results);
  };
