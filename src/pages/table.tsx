import {Container} from "@mui/material";
import {DataGrid, GridCellParams} from "@mui/x-data-grid";
import React from "react";

interface People {
  id: number;
  lastName: string;
  firstName: string | null;
  age: number | null;
  house: string;
  title: string;
}

const Table = () => {
	// Peronajes de la serie Game of Thrones
	const People: People[] = [
		{
			id: 1,
			lastName: "Snow",
			firstName: "Jon",
			age: 35,
			house: "Stark",
			title: "King in the North",
		},
		{
			id: 2,
			lastName: "Lannister",
			firstName: "Cersei",
			age: 42,
			house: "Lannister",
			title: "Queen of the Seven Kingdoms",
		},
		{
			id: 3,
			lastName: "Lannister",
			firstName: "Jaime",
			age: 45,
			house: "Lannister",
			title: "Kingslayer",
		},
		{
			id: 4,
			lastName: "Stark",
			firstName: "Arya",
			age: 16,
			house: "Stark",
			title: "Faceless Man",
		},
		{
			id: 5,
			lastName: "Targaryen",
			firstName: "Daenerys",
			age: null,
			house: "Targaryen",
			title: "Mother of Dragons",
		},
		{
			id: 6,
			lastName: "Melisandre",
			firstName: null,
			age: 150,
			house: "None",
			title: "Red Priestess",
		},
		{
			id: 7,
			lastName: "Clifford",
			firstName: "Ferrara",
			age: 44,
			house: "None",
			title: "Unknown",
		},
		{
			id: 8,
			lastName: "Frances",
			firstName: "Rossini",
			age: 36,
			house: "None",
			title: "Unknown",
		},
		{
			id: 9,
			lastName: "Roxie",
			firstName: "Harvey",
			age: 65,
			house: "None",
			title: "Unknown",
		},
		{
			id: 16,
			lastName: "Stark",
			firstName: "Sansa",
			age: 21,
			house: "Stark",
			title: "Lady of Winterfell",
		},
		{
			id: 17,
			lastName: "Greyjoy",
			firstName: "Theon",
			age: 27,
			house: "Greyjoy",
			title: "Reek",
		},
		{
			id: 18,
			lastName: "Tyrell",
			firstName: "Margaery",
			age: 25,
			house: "Tyrell",
			title: "Queen of the Seven Kingdoms",
		},
		{
			id: 19,
			lastName: "Martell",
			firstName: "Oberyn",
			age: 41,
			house: "Martell",
			title: "Red Viper",
		},
		{
			id: 20,
			lastName: "Baratheon",
			firstName: "Stannis",
			age: 48,
			house: "Baratheon",
			title: "King in the Narrow Sea",
		},
		{
			id: 21,
			lastName: "Bolton",
			firstName: "Ramsay",
			age: 32,
			house: "Bolton",
			title: "Bastard of Bolton",
		},
		{
			id: 22,
			lastName: "Tully",
			firstName: "Catelyn",
			age: 40,
			house: "Tully",
			title: "Lady of Riverrun",
		},
		{
			id: 23,
			lastName: "Arryn",
			firstName: "Robin",
			age: 13,
			house: "Arryn",
			title: "Lord of the Eyrie",
		},
		{
			id: 24,
			lastName: "Mormont",
			firstName: "Lyanna",
			age: 12,
			house: "Mormont",
			title: "Lady of Bear Island",
		},
	];

	const pageSize = 5;

	const columns = [
		{
			field: "id",
			headerName: "ID",
			minWidth: 70,
			// flex: 1,
			renderCell: (params: GridCellParams) => <>{params.value}</>,
		},
		{
			field: "lastName",
			headerName: "Last name",
			minWidth: 70,
			flex: 1,
			renderCell: (params: GridCellParams) => <>{params.value}</>,
		},
		{
			field: "firstName",
			headerName: "First name",
			minWidth: 70,
			flex: 1,
			renderCell: (params: GridCellParams) => <>{params.value}</>,
		},
		{
			field: "age",
			headerName: "Age",
			type: "number",
			with: 50,
			renderCell: (params: GridCellParams) => <>{params.value}</>,
    },
    {
      field: "house",
      headerName: "House",
      minWidth: 70,
      flex: 1,
      renderCell: (params: GridCellParams) => <>{params.value}</>,
    },
    {
      field: "title",
      headerName: "Title",
      minWidth: 170,
      flex: 1,
      renderCell: (params: GridCellParams) => <>{params.value}</>,
    }
	];

	return (
		<Container maxWidth="lg" sx={{paddingTop: "20px"}}>
      <DataGrid
				rows={People}
				columns={columns}
				disableColumnSelector
				disableRowSelectionOnClick
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: pageSize,
            },
          },
        }}
        autoHeight
        getRowId={(row) => row.id}
        sx={{
          // Modificar el color del header
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: "#3f51b5",
          },
        }}
			/>
		</Container>
	);
};

export default Table;
