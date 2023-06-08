import {Container} from "@mui/material";
import {DataGrid, GridCellParams} from "@mui/x-data-grid";
import React from "react";

const Table = () => {
	const People = [
		{id: 1, lastName: "Snow", firstName: "Jon", age: 35},
		{id: 2, lastName: "Lannister", firstName: "Cersei", age: 42},
		{id: 3, lastName: "Lannister", firstName: "Jaime", age: 45},
		{id: 4, lastName: "Stark", firstName: "Arya", age: 16},
		{id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null},
		{id: 6, lastName: "Melisandre", firstName: null, age: 150},
		{id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44},
		{id: 8, lastName: "Frances", firstName: "Rossini", age: 36},
		{id: 9, lastName: "Roxie", firstName: "Harvey", age: 65},
		{id: 10, lastName: "Snow", firstName: "Jon", age: 35},
		{id: 11, lastName: "Lannister", firstName: "Cersei", age: 42},
		{id: 12, lastName: "Lannister", firstName: "Jaime", age: 45},
		{id: 13, lastName: "Stark", firstName: "Arya", age: 16},
		{id: 14, lastName: "Targaryen", firstName: "Daenerys", age: null},
		{id: 15, lastName: "Melisandre", firstName: null, age: 150},
	];

	const pageSize = 5;

	const columns = [
		{
			field: "id",
			headerName: "ID",
			minWidth: 70,
			flex: 1,
			renderCell: (params: GridCellParams) => <>{params.value}</>,
		},
		{
			field: "lastName",
			headerName: "Last name",
			minWidth: 170,
			flex: 1,
			renderCell: (params: GridCellParams) => <>{params.value}</>,
		},
		{
			field: "firstName",
			headerName: "First name",
			minWidth: 170,
			flex: 1,
			renderCell: (params: GridCellParams) => <>{params.value}</>,
		},
		{
			field: "age",
			headerName: "Age",
			type: "number",
			minWidth: 70,
			flex: 1,
			renderCell: (params: GridCellParams) => <>{params.value}</>,
		},
	];

	return (
		<Container maxWidth="md" sx={{paddingTop:"20px"}}>
			<DataGrid
				rows={People}
				columns={columns}
				disableColumnSelector
				disableRowSelectionOnClick
				pageSizeOptions={[5, 10]}
				autoHeight
				getRowId={(row) => row.id}
			/>
		</Container>
	);
};

export default Table;
