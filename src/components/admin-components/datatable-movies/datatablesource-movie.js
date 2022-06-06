
export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "title",
    headerName: "Title",
    width: 230,
    renderCell: (params) => {
      return (

        <div className="cellWithImg" >
          <img className="cellImg" src={`.././images/${params.row.titleImage}`} alt="avatar" />
          {params.row.title}
        </div>
      );
    },
  },
  {
    field: "year",
    headerName: "Year",
    width: 230,
  },
  {
    field: "length",
    headerName: "Length",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
];
