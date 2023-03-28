import {
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  TextField,
  Link,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Divider } from "@material-ui/core";
import dynamic from "next/dynamic";
import axios from "axios";

const DynamicMapView = dynamic(() => import("@/components/MapView"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export default function Search() {
  const router = useRouter();
  const { id } = router.query;

  const [newServiceId, setNewServiceId] = useState("");

  const [servicesData, setServicesData] = useState({});

  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  const [serviceCoord, setServiceCoord] = useState({
    cedi_coords: [6.204824, -75.601371],
    client_coords: [6.204824, -75.601371],
  });

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
          if (data.data) {
            setServicesData(data.data);
            setServiceCoord({
              cedi_coords: [
                parseFloat(data.data.cy_cedi),
                parseFloat(data.data.cx_cedi),
              ],
              client_coords: [
                parseFloat(data.data.cy_cliente),
                parseFloat(data.data.cx_cliente),
              ],
            });
            console.log(serviceCoord, "serviceCoord");
          } else {
            router.push("/");
          }
        } catch (error) {
          router.push("/");
          console.log(error);
        }
      }
    };

    fetchData();
    searchService(id);
  }, [id, router]);

  return (
    <Container>
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
            width="400px"
            textAlign="center"
            role="presentation"
          >
            <h1>Informacion Domicilio</h1>
            <p>¡Rastrea y hazle seguimiento a tu entrega!</p>
            <div>
              <TextField
                className="w-3/5 m-2"
                label="Orden de transporte"
                variant="filled"
                value={newServiceId}
                onChange={(e) => setNewServiceId(e.target.value)}
              />
              <Link
                href={newServiceId === "" ? `/` : `/search/${newServiceId}`}
              >
                <Button
                  disabled={newServiceId === ""}
                  className="w-1/4 m-2 h-14"
                  variant="contained"
                >
                  Buscar
                </Button>
              </Link>
            </div>
            <Divider />
            <div>
              <h2>Datos de la entrega</h2>
              <Divider></Divider>
              <div className="grid grid-cols-2 gap-4 p-4">
                <div>{servicesData.fecha_create}</div>
                <div>{servicesData.estado}</div>
                <div>
                  <div>{servicesData.guia}</div>
                  <div className="font-bold"> Número de entrega</div>
                </div>
                <div></div>
                <div>
                  <div>{servicesData.ciudad}</div>
                  <div className="font-bold"> Ciudad</div>
                </div>
                <div></div>
                <div>
                  <div>{servicesData.cedi}</div>
                  <div className="font-bold">Parte desde</div>
                </div>
                <div></div>
                <div>
                  <div>{servicesData.nombre_cliente}</div>
                  <div className="font-bold">Nombre cliente</div>
                </div>
                <div></div>
                <div>
                  <div>{servicesData.direccion}</div>
                  <div className="font-bold">Dirección de entrega</div>
                </div>
                <div>
                  <div>{servicesData.novedad}</div>
                  <div className="font-bold">Novedades</div>
                </div>
              </div>
            </div>

            {/* //TODO: Hacer un componente para el conductor */}
            {/* <Box className="bg-slate-500 rounded p-3">
              <Typography component="div" variant="h5">
                Datos del conductor
              </Typography>
              <Divider></Divider>
              <div container spacing={2}>
                <div >
                  
                    Tatiuska Naileth Bellorin Beleño Nombre conductor
                  
                </div>
                <div >
                  DPS-01 Placa{" "}
                </div>
              </div>
            </Box> */}
            {/* <Button className="w-3/4 m-2 h-14" variant="contained">
              Ver evidencias
            </Button> */}
          </Box>
        </Drawer>

        <DynamicMapView markers={serviceCoord}></DynamicMapView>
        <IconButton
          color="primary"
          size="large"
          edge="start"
          onClick={() => setIsDrawerOpen(true)}
        >
          <MenuIcon />
        </IconButton>
      </Box>
    </Container>
  );
}
