import React, { useEffect, useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import {
  Box,
  TextField,
  Typography,
  CardContent,
  CardMedia,
  Card,
} from "@mui/material";

import { useGetCryptosQuery } from "../services/cryptoApi";
import Loader from "./Loader";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  if (isFetching) return <Loader />;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {!simplified && (
          <div className="search-crypto">
            <TextField
              id="outlined-basic"
              label="Search Cryptocurrency"
              variant="outlined"
              size="small"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        )}
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {cryptos?.map((currency) => (
            <Grid
              xs={12}
              sm={4}
              md={4}
              lg={3}
              key={currency.uuid}
              className="crypto-card"
            >
              <Link
                to={`/crypto/${currency.uuid}`}
                style={{ textDecoration: "none" }}
              >
                <Card
                  sx={{
                    minWidth: "250px",
                    boxShadow: "none",
                    border: "0.5px solid rgba(0,0,0,0.05)",
                    borderRadius: "10px",
                    ":hover": {
                      boxShadow: "0 0 15px rgba(0,0,0, 0.1)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      maxWidth: "100%",
                      padding: "1rem",
                      borderBottom: "1px solid rgba(0,0,0,0.05)",
                    }}
                  >
                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "500" }}
                      >
                        {`${currency.rank}. ${currency.name}`}
                      </Typography>
                    </Box>
                    <Box>
                      <CardMedia
                        component="img"
                        alt={currency.name}
                        className="crypto-image"
                        src={currency.iconUrl}
                        style={{ width: "30px", height: "30px" }}
                      />
                    </Box>
                  </Box>
                  <CardContent>
                    <Typography variant="body2">
                      Price: {millify(currency.price)}{" "}
                    </Typography>
                    <Typography variant="body2">
                      Market Cap: {millify(currency.marketCap)}{" "}
                    </Typography>
                    <Typography variant="body2">
                      Daily Change: {millify(currency.change)}%{" "}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Cryptocurrencies;
