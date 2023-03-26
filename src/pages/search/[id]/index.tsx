import {
  Box,
  Button,
  Container,
  Drawer,
  Grid,
  IconButton,
  TextField,
  ListItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/router";
import { useState } from "react";
import { Divider } from "@material-ui/core";

export default function Search() {
  const router = useRouter();
  const { id } = router.query;

  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

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
              />
              <Button className="w-1/4 m-1 h-14" variant="contained">
                Buscar
              </Button>
            </Box>
            <Divider />
            <Box className="bg-slate-500 rounded p-2 my-2">
              <h3>Datos de la entrega</h3>
              <Divider></Divider>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <ListItem> 22/03/2023</ListItem>
                </Grid>
                <Grid item xs={6}>
                  En ruta
                </Grid>
                <Grid item xs={6}>
                  <ListItem>
                    <Box sx={{ flexDirection: "column" }}>
                      PRUEBA-SEGUIMIENTO Número de entrega
                    </Box>
                  </ListItem>
                </Grid>
                <Grid item xs={6}></Grid>
                <Grid item xs={6}>
                  <ListItem> Santiago Ciudad DPS</ListItem>
                </Grid>
                <Grid item xs={6}></Grid>
                <Grid item xs={6}>
                  <ListItem>Tatiuska Bellorin Se entrega</ListItem>
                </Grid>
                <Grid item xs={6}></Grid>
                <Grid item xs={6}>
                  <ListItem>
                    diagonal vicuña mackenna 2004 1908 Dirección de entrega
                  </ListItem>
                </Grid>
                <Grid item xs={6}>
                  SIN NOVEDAD Novedades
                </Grid>
              </Grid>
            </Box>
            <Box className="bg-slate-500 rounded p-2">
              <h3>Datos del conductor</h3>
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
