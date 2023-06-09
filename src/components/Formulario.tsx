import { PeopleI } from '@/interface';
import { Paper, Typography, Box, Grid, TextField, Button } from '@mui/material';
import { useState } from "react";

interface FormularioProps {
  people: PeopleI[];
  addPerson: (person: PeopleI) => void;
}

const Formulario: React.FC<FormularioProps> = ({people, addPerson}) => {

  const [person, setPerson] = useState<PeopleI>({
		id: people.length + 1,
		lastName: "",
		firstName: "",
		age: 0,
		house: "",
		title: "",
	});



  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		addPerson(person);

	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPerson({...person, [event.target.name]: event.target.value});
	}

	return (
		<Paper
			elevation={1}
			sx={{
				p: "32px",
				display: "flex",
				flexDirection: "column",
				gap: 3,
				width: "50%",
				margin: "auto",
			}}
		>
			<Typography sx={{fontWeight: 500, fontSize: 24}}>
				Agregar un nuevo personaje
			</Typography>

			<Box
				onSubmit={handleSubmit}
				component="form"
				sx={{display: "flex", flexDirection: "column", gap: 3}}
			>
				<Grid item xs={12}>
					<TextField
						id="last-name"
						label="Last Name"
						name="lastName"
						variant="outlined"
						sx={{width: 1}}
						onChange={handleChange}
					/>
				</Grid>

				<Grid item xs={12}>
					<TextField
						id="first-name"
						label="First Name"
						name="firstName"
						variant="outlined"
						sx={{width: 1}}
						onChange={handleChange}
					/>
				</Grid>

				<Grid item xs={12}>
					<TextField
						id="age"
						label="Age"
						name="age"
						variant="outlined"
						type="number"
						sx={{width: 1}}
						onChange={handleChange}
					/>
				</Grid>

				<Grid item xs={12}>
					<TextField
						id="house"
						label="House"
						name="house"
						variant="outlined"
						sx={{width: 1}}
						onChange={handleChange}
					/>
				</Grid>

				<Grid item xs={12}>
					<TextField
						id="title"
						label="Title"
						name="title"
						variant="outlined"
						sx={{width: 1}}
						onChange={handleChange}
					/>
				</Grid>

				<Button type="submit" variant="contained" sx={{width: 1}}>
					Agregar
				</Button>
			</Box>
		</Paper>
	);
};

export default Formulario;
