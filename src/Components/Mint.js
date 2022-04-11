import {
  Button,
  Box,
  Container,
  CardActionArea,
  Grid,
} from "@material-ui/core";
import * as React from "react";
import Stack from "@mui/material/Stack";
import draw_1 from "../Images/draw_1.jpg";
import Puzzles from "./Card";
import abi from "../abi.json";

import styles from "./styles/Mint.module.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { IconContext } from "react-icons";
import { FaPuzzlePiece } from "react-icons/fa";
import { LoadingButton } from "@mui/lab";

import { ethers } from "ethers";
import { useState, useEffect } from "react";
import { pink } from "@mui/material/colors";

/* import abi from "../LazyNFT.json";
import { LazyMinter } from "../LazyMinter";

const contractAddress = "0xFDb98644ffC23913E392743dd8a8dA51a57a0538";
const interface_ = new ethers.utils.Interface(abi);
const Mumbay_key = process.env.REACT_APP_ALCHEMY_MUMBAY;  */

const Mint = () => {
  const [account, setAccount] = useState("");
  const [mintingInfo, setMintingInfo] = useState("");
  const [NFTsupply, setNFTsupply] = useState("");
  const [loading, setLoading] = useState(false);
  const [connectionError, setConnectionError] = useState("");
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
  });

  const dic_net = {
    name: "maticmum",
    chainId: 80001,
    _defaultProvider: (providers) =>
      new providers.JsonRpcProvider(
        "https://polygon-mumbai.g.alchemy.com/v2/kzMLHRyZH_qI4torxngphnuJRp9N_INE"
      ),
  };

  const interface_ = new ethers.utils.Interface(abi);
  const provider = ethers.getDefaultProvider(dic_net);

  const mintNFT = async () => {
    const mintAmount = 1;
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let NFTsValue = ethers.utils.parseEther(String(0.05 * mintAmount));
    let totalGasLimit = String(gasLimit * mintAmount);

    const abiResponse = await fetch("/config/abi.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const abi = await abiResponse.json();

    const { ethereum } = window;

    const metamaskIsInstalled = ethereum && ethereum.isMetaMask;
    if (metamaskIsInstalled) {
      const provider = new ethers.providers.Web3Provider(ethereum);

      try {
        const accounts = await provider.send("eth_requestAccounts", []);

        const networkId = await ethereum.request({
          method: "net_version",
        });
        if (networkId == CONFIG.NETWORK.ID) {
          const signer = await provider.getSigner();
          const Mintcontract1 = new ethers.Contract(
            CONFIG.CONTRACT_ADDRESS,
            new ethers.utils.Interface(abi),
            signer
          );
          setConnectionError("");

          try {
            setLoading(true);
            const supply = await Mintcontract1.totalSupply();
            setNFTsupply(parseInt(supply.toString()));
            const Mintcontract2 = new ethers.Contract(
              CONFIG.CONTRACT_ADDRESS,
              new ethers.utils.Interface(abi),
              signer
            );
            let tx = await Mintcontract2.mint(mintAmount, { value: NFTsValue });
            setConnectionError(
              "Your transaction has been submited it is now being proccesed"
            );
            const receipt = await tx.wait();
            setConnectionError("Your NFT has been minted! ");
            setNFTsupply(NFTsupply + 1);
            setLoading(false);
          } catch (e) {
            setConnectionError(
              " Something when wrong when trying to mint, please try again later"
            );
            setLoading(false);

            console.log("error.... ", e);
          }
        } else {
          setConnectionError(
            "Please connect your Wallet to the correct Network"
          );
        }
      } catch (e) {
        setConnectionError(
          " Something when wrong when trying to mint, please try again later"
        );
        console.log(e);
      }
    } else {
      setConnectionError(" Metmask is not installed, please install metamask");
    }
  };

  const connect = async () => {
    const abiResponse = await fetch("/config/abi.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const abi = await abiResponse.json();

    const interface_ = new ethers.utils.Interface(abi);

    const metamaskIsInstalled = window.ethereum && window.ethereum.isMetaMask;
    if (metamaskIsInstalled) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);

        const signer = await provider.getSigner();

        const contract = new ethers.Contract(
          CONFIG.CONTRACT_ADDRESS,
          interface_,
          signer
        );
        const supply = await contract.totalSupply();
        setAccount(accounts[0]);
        setNFTsupply(parseInt(supply.toString()));
      } catch (e) {
        console.log("error ", e);
      }
    } else {
      setConnectionError(" Metmask is not installed, please install metamask");
    }

    /* const provider = new ethers.providers.Web3Provider(window.ethereum);
    try {
      let response = await provider.send("eth_requestAccounts", []);
      setAccount(response[0]);
    } catch (e) {
      console.log(e);
    } */
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);
  return (
    <Container className={styles.container}>
      <Box className={styles.connect}>
        <Stack spacing={2} direction="row">
          <Button variant="contained" onClick={connect}>
            Connect Wallet
          </Button>
        </Stack>
      </Box>
      <div className={styles.sectionTitle}>
        <span>
          <IconContext.Provider
            value={{
              color: "rgb(88, 148, 226)",
              className: "global-class-name",
              size: "2rem",
            }}
          >
            <div>
              <FaPuzzlePiece></FaPuzzlePiece>
            </div>
          </IconContext.Provider>

          <h3> This week we are solving this puzzle </h3>

          <IconContext.Provider
            value={{
              color: "rgb(88, 148, 226)",
              className: "global-class-name",
              size: "2rem",
            }}
          >
            <div>
              <FaPuzzlePiece></FaPuzzlePiece>
            </div>
          </IconContext.Provider>
        </span>
      </div>

      <Box className={styles.puzzle}>
        <Card sx={{ maxWidth: 600 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="500"
              image={draw_1}
              alt="mintingPuzzle"
            />
            <CardContent
              sx={{
                flexDirection: "column",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography
                gutterBottom
                variant="h5"
                component="div"
              ></Typography>
              <Typography gutterBottom variant="h5" component="div">
                Looking for moom
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A description of the puzzle that we are solving ..elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 345, marginTop: "1rem" }}>
          <CardActionArea>
            <CardContent>
              <div className={styles.mint}>
                <Typography
                  variant="h8"
                  color="text.secondary"
                  component="span"
                >
                  {NFTsupply
                    ? "We have minted"
                    : "Connect  your Wallet to know how many pieces are left"}
                </Typography>
                <Typography
                  variant="h4"
                  color="text.secondary"
                  component="span"
                >
                  {NFTsupply ? JSON.stringify(NFTsupply) : "--"} /{" "}
                  {CONFIG.MAX_SUPPLY}
                </Typography>

                <a
                  href={CONFIG.SCAN_LINK}
                  style={{
                    fontSize: "large",
                    color: "pink",
                    textDecoration: "none",
                    overflow: "ellipsis",
                  }}
                >
                  {CONFIG.CONTRACT_ADDRESS.slice(0, 20)}...
                </a>
                <Typography
                  variant="body"
                  color="text.secondary"
                  component="span"
                >
                  You can help us to solve this puzzle my minting the next
                  piece.
                </Typography>
                <Typography
                  variant="h6"
                  color="text.secondary"
                  component="span"
                >
                  {" "}
                  Each piece costs {CONFIG.DISPLAY_COST} Matic.
                </Typography>
                <Typography
                  variant="h8"
                  color="text.secondary"
                  component="span"
                >
                  Excluding gas fees.
                </Typography>

                <Stack spacing={2} direction="row">
                  <LoadingButton
                    className={styles.button}
                    sx={{ margin: "1rem" }}
                    loading={loading}
                    onClick={mintNFT}
                    size={"big"}
                    color="secondary"
                    variant="contained"
                  >
                    Mint the next piece
                  </LoadingButton>
                </Stack>
                <a
                  href={CONFIG.MARKETPLACE_LINK}
                  style={{
                    fontSize: "large",

                    textDecoration: "none",
                    overflow: "ellipsis",
                  }}
                >
                  {`See the collection  on ${CONFIG.MARKETPLACE}`}
                </a>
                <Typography
                  variant="h7"
                  color="text.secondary"
                  component="span"
                >
                  {connectionError}{" "}
                </Typography>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>

      <section className={styles.section}>
        <div className={styles.sectionTitle}>
          <span>
            <IconContext.Provider
              value={{
                color: "rgb(88, 148, 226)",
                className: "global-class-name",
                size: "2rem",
              }}
            >
              <div>
                <FaPuzzlePiece></FaPuzzlePiece>
              </div>
            </IconContext.Provider>

            <h3> Puzzles </h3>

            <IconContext.Provider
              value={{
                color: "rgb(88, 148, 226)",
                className: "global-class-name",
                size: "2rem",
              }}
            >
              <div>
                <FaPuzzlePiece></FaPuzzlePiece>
              </div>
            </IconContext.Provider>
          </span>
        </div>

        <Typography
          textAlign={"center"}
          marginBottom={"2rem"}
          variant="h6"
          color="text"
        >
          Every week we solve one puzzle, you can help us by minting one piece.
        </Typography>

        <Container>
          <Grid container>
            {[1, 2, 3, 4].map((x) => (
              <Grid item md={6} xs={8} key={x}>
                <Box
                  marginBottom={2}
                  display={"flex"}
                  justifyContent={"center"}
                >
                  <Puzzles puzzle={x} key={x} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
    </Container>
  );
};

export default Mint;
