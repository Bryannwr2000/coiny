import React, { useState } from "react";
import moment from "moment";
import Loader from "./Loader";
import Grid from "@mui/material/Unstable_Grid2";
import {
  Box,
  Typography,
  Card,
  MenuItem,
  Avatar,
  FormControl,
  Select,
  InputLabel,
} from "@mui/material";

import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../services/cryptoApi";

const demoImage =
  "http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const count = simplified ? 6 : 12;
  const { data } = useGetCryptosQuery(100);
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count });

  if (!cryptoNews?.value) return <Loader />;

  return (
    <>
      <Box>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {!simplified && (
            <Grid xs={12}>
              <FormControl sx={{ m: 1, minWidth: 200 }}>
                <InputLabel id="demo-simple-select-label">
                  {" "}
                  Select a News
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={newsCategory}
                  label="Select a Crypto"
                  onChange={(e) => setNewsCategory(e.target.value)}
                  size="small"
                  variant="outlined"
                >
                  <MenuItem value="Crytocurrency">Cryptocurrency</MenuItem>
                  {data?.data?.coins.map((coin) => (
                    <MenuItem value={coin.name}>{coin.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          )}
          {cryptoNews.value.map((news, i) => (
            <Grid xs={12} sm={6} md={4} xl={4} className="crypto-card">
              <Card
                className="news-card"
                sx={{
                  padding: "1rem",
                  boxShadow: "none",
                  border: "1px solid rgba(0,0,0,0.05)",
                  borderRadius: "10px",
                }}
              >
                <a
                  href={news.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div className="news-image-container">
                    <Typography
                      variant="h6"
                      className="news-title"
                      sx={{ padding: "0 1rem 0 0" }}
                    >
                      {news.name}
                    </Typography>
                    <img
                      style={{ maxWidth: "200px", maxHeight: "100px" }}
                      src={news?.image?.thumbnail?.contentUrl || demoImage}
                      alt="news"
                    />
                  </div>
                  <Typography variant="body2">
                    {news.description > 100
                      ? `${news.description.substring(0, 100)}...`
                      : news.description}
                  </Typography>
                  <div className="provider-container">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                      }}
                    >
                      <Avatar
                        src={
                          news.provider[0]?.image?.thumbnail?.contentUrl ||
                          demoImage
                        }
                        sx={{
                          width: "30px",
                          height: "30px",
                          marginRight: "0.5rem",
                        }}
                        alt="news"
                      />
                      <Typography variant="body2" className="provider-name">
                        {news.provider[0]?.name}
                      </Typography>
                    </div>
                    <Typography variant="body2">
                      {" "}
                      {moment(news.datePublished).startOf("ss").fromNow()}
                    </Typography>
                  </div>
                </a>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default News;
