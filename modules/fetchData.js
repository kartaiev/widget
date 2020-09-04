define(["dojo/request"], (request) => {
  return {
    getBeers: (url) => {
      return request.get(url, {
        headers: {
          "X-Requested-With": null,
        },
        handleAs: "json",
      });
    },
  };
});
