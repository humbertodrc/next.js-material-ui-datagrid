import Formulario from '@/components/Formulario';
import { People } from "@/database";
import {
	Container
} from "@mui/material";
import { DataGrid, GridCellParams, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import { PeopleI } from '../interface/index';

const Table = () => {
	// Peronajes de la serie Game of Thrones
	const [people, setPeople] = useState(People);
	
	const addPerson = (person: PeopleI) => {
		setPeople([...people, person]);
	}
	

	const pageSize = 5;

	const columns :GridColDef[] = [
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
		},
	];

	return (
		<>

			<Formulario people={people} addPerson={addPerson} />
			
			<Container maxWidth="lg" sx={{paddingTop: "20px"}}>
				<DataGrid
					rows={people}
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
		</>
	);
};

export default Table;
