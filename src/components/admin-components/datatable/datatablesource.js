export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 330,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src=".././images/avatar.jpg" alt="avatar" />
          {`${params.row.firstName} ${params.row.lastName}`}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  }
];
