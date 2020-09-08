define(["modules/fetchData", "dojo/store/Memory", "dijit/form/Select"], (
  fetchData,
  Memory,
  Select
) => {
  return {
    createSelect: (url) =>
      fetchData.getBeers(url).then((data) => {
        const beerStore = new Memory({
          idProperty: "tagline",
          data,
        });

        const select = new Select(
          {
            name: "beerSelect",
            store: beerStore,
            style: "width: 200px;",
            labelAttr: "name",
            maxHeight: -1,
            onChange: function (value) {
              document.getElementById("value").innerHTML = value;
            },
          },
          "beerSelect"
        );

        select.startup();
      }),
  };
});
