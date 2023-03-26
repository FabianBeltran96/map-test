import {
  Box,
  Button,
  Container,
  Drawer,
  Grid,
  IconButton,
  TextField,
  ListItem,
  Typography,
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Divider } from "@material-ui/core";
import HTTP from "@/pages/api/http-commons";
import { loginURL, fecthLogin } from "@/pages/api/login/login";
import axios from "axios";

export default function Search() {
  const router = useRouter();
  const { id } = router.query;

  const [newServiceId, setNewServiceId] = useState("");

  const [servicesData, setServicesData] = useState({
    companies: [],
    data: {},
    status: "",
  });

  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  useEffect(() => {
    console.log("Loading...");
    let jsonUser = {
      username: "admin",
      password: "Mnzx9874",
    };
    const fetchData = async () => {
      try {
        const { data } = await axios.post(
          "https://new-srouter-qa.smartquick.com.co/api/login/",
          jsonUser
        );
        localStorage.setItem("TokenRoute", data.token);
      } catch (error) {
        console.log(error);
      }
    };

    const searchService = async (id) => {
      if (id) {
        let url = `https://integracion.smartquick.com.co:3005/v1/services/search/?code=${id}`;
        try {
          const { data } = await axios.get(url);
          setServicesData(data);
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchData();
    searchService(id);
  }, []);
  // const loginRoute = () =>  {
  //   let url = `https://new-srouter-qa.smartquick.com.co/api/login/`
  //   let jsonUser = {
  //     username: "admin",
  //     password: "Mnzx9874"
  //   }
  //   HTTP.setHeader(false)
  //   HTTP.post(url, jsonUser)
  //     .then((response) => {
  //       localStorage.setItem('TokenRoute', response.data.token)
  //     })

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Drawer
          anchor="left"
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          PaperProps={{
            sx: {
              width: 400,
            },
          }}
        >
          <Box
            justifyContent="center"
            p={2}
            width="380px"
            textAlign="center"
            role="presentation"
          >
            <h1>Informacion Domicilio</h1>
            <p>¡Rastrea y hazle seguimiento a tu entrega!</p>
            <Box>
              <TextField
                className="w-2/3 m-1"
                label="Orden de transporte"
                variant="filled"
                onChange={(e) => setNewServiceId(e.target.value)}
              />
              <Link href={`/search/${newServiceId}`}>
                <Button className="w-1/4 m-1 h-14" variant="contained">
                  Buscar
                </Button>
              </Link>
            </Box>
            <Divider />
            <Box className="bg-slate-500 rounded p-3 my-2">
              <Typography component="div" variant="h5">
                Datos de la entrega
              </Typography>
              <Divider></Divider>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <ListItem> {servicesData.data.fecha_create}</ListItem>
                </Grid>
                <Grid item xs={6}>
                  {servicesData.data.estado}
                </Grid>
                <Grid item xs={6}>
                  <ListItem>
                    <Box sx={{ flexDirection: "column" }}>
                      {servicesData.data.guia}
                      Número de entrega
                    </Box>
                  </ListItem>
                </Grid>
                <Grid item xs={6}></Grid>
                <Grid item xs={6}>
                  <ListItem> {servicesData.data.ciudad} Ciudad</ListItem>
                </Grid>
                <Grid item xs={6}></Grid>{" "}
                <Grid item xs={6}>
                  <ListItem> {servicesData.data.cedi} Parte desde</ListItem>
                </Grid>
                <Grid item xs={6}></Grid>
                <Grid item xs={6}>
                  <ListItem>
                    {servicesData.data.nombre_cliente} Nombre cliente
                  </ListItem>
                </Grid>
                <Grid item xs={6}></Grid>
                <Grid item xs={6}>
                  <ListItem>
                    {servicesData.data.direccion} Dirección de entrega
                  </ListItem>
                </Grid>
                <Grid item xs={6}>
                  {servicesData.data.novedad} Novedades
                </Grid>
              </Grid>
            </Box>

            {/* //TODO: Hacer un componente para el conductor */}
            <Box className="bg-slate-500 rounded p-3">
              <Typography component="div" variant="h5">
                Datos del conductor
              </Typography>
              <Divider></Divider>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <ListItem>
                    Tatiuska Naileth Bellorin Beleño Nombre conductor
                  </ListItem>
                </Grid>
                <Grid item xs={6}>
                  DPS-01 Placa{" "}
                </Grid>
              </Grid>
            </Box>
            <Button className="w-3/4 m-2 h-14" variant="contained">
              Ver evidencias
            </Button>
          </Box>
        </Drawer>
        <IconButton
          size="large"
          edge="start"
          onClick={() => setIsDrawerOpen(true)}
        >
          <MenuIcon />
        </IconButton>
        <h1>Search {id} </h1>
      </Box>
    </Container>
  );
}
