import { Header } from "../../components/header";
import { Grid, Typography } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

export const Home = () => {
  return (
    <>
      <Header />
      <Grid>
        <Typography>
          {" "}
          Experimente já, baixe já o nosso app Disponível
        </Typography>
        <Typography>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum id
          quos repellat ipsam, deserunt eos animi consequatur impedit corporis!
          Enim nulla incidunt adipisci excepturi eligendi quam hic repellendus
          eum expedita.{" "}
        </Typography>
        <Grid>
          <PlayCircleIcon />
          <Typography>See it in action</Typography>
        </Grid>
      </Grid>
    </>
  );
};
