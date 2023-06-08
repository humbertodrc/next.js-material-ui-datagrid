import * as React from "react";
import {
  Typography,
  Button,
  TextField,
  Box,
  Paper,
  Grid,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  InputLabel,
  Select,
  MenuItem,
  Modal,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const columns = [
  { field: "id", headerName: "ID", width: 100, sortable: false },
  {
    field: "firstName",
    headerName: "Nome",
    width: 150,
    sortable: false,
  },
  {
    field: "lastName",
    headerName: "Sobrenome",
    width: 150,
    sortable: false,
  },
  {
    field: "email",
    headerName: "Email",
    width: 300,
    sortable: false,
    valueGetter: (params) => `${params.row.firstName + "@gmail.com"}`,
  },
  {
    field: "stack",
    headerName: "Stack",
    width: 150,
    sortable: false,
  },
  {
    field: "genero",
    headerName: "Gênero",
    width: 150,
    sortable: false,
  },
  {
    field: "data",
    headerName: "Data de inscrição",
    type: Number,
    sortable: false,
    width: 200,
  },
];

const rows = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    data: "02/03/2022",
    stack: "Front-end",
    genero: "Masculino",
  },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    data: "06/07/2022",
    stack: "Back-end",
    genero: "Masculino",
  },
  {
    id: 3,
    lastName: "Steve",
    firstName: "Marsk",
    data: "20/02/2022",
    stack: "Front-end",
    genero: "Masculino",
  },
  {
    id: 4,
    lastName: "Stark",
    firstName: "Arya",
    data: "10/12/2022",
    stack: "Front-end",
    genero: "Masculino",
  },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    data: "21/12/2022",
    stack: "Full-stack",
    genero: "Feminino",
  },
  {
    id: 6,
    lastName: "Melisandre",
    firstName: "Kather",
    data: "14/10/2022",
    stack: "Full-stack",
    genero: "Feminino",
  },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    data: "14/09/2022",
    stack: "Back-end",
    genero: "Masculino",
  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini",
    data: "29/07/2022",
    stack: "Back-end",
    genero: "Feminino",
  },
  {
    id: 9,
    lastName: "Roxie",
    firstName: "Harvey",
    data: "16/04/2022",
    stack: "Back-end",
    genero: "Masculino",
  },
];

const Home = () => {
  const [stack, setStack] = React.useState("");

  const handleChange = (event) => {
    setStack(event.target.value);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ maxWidth: 500 }}>
      <Paper
        elevation={1}
        sx={{ p: "32px", display: "flex", flexDirection: "column", gap: 3 }}
      >
        <Typography sx={{ fontWeight: 500, fontSize: 24 }}>
          Inscreva-se em nossa newsletter
        </Typography>

        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Nome"
            variant="outlined"
            sx={{ width: 1 }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            sx={{ width: 1 }}
          />
        </Grid>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Stack</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={stack}
            label="Stack"
            onChange={handleChange}
          >
            <MenuItem value={10}>Front-end</MenuItem>
            <MenuItem value={20}>Back-end</MenuItem>
            <MenuItem value={30}>Full-stack</MenuItem>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Gênero</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Feminino"
            />
            <FormControlLabel
              value="male"
              control={<Radio />}
              label="Masculino"
            />
          </RadioGroup>
        </FormControl>

        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Desejo receber diariamente"
          />
        </FormGroup>

        <Button variant="contained" sx={{ width: 1 }}>
          Inscreva-se
        </Button>
      </Paper>

      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Button onClick={handleOpen} sx={{ fontSize: 16 }}>
          Ver lista de inscritos
        </Button>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ height: 550, width: "100%" }}>
            <Typography
              sx={{ fontSize: 24, textAlign: "center", mb: 4, fontWeight: 500 }}
            >
              Pessoas que se inscreveram na newsletter
            </Typography>
            <DataGrid
              rows={rows}
              columns={columns}
              pemailSize={5}
              rowsPerPemailOptions={[5]}
              disableSelectionOnClick
            />
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Home;