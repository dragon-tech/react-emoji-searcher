import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Empty from "./components/Empty";

function App() {
  const [emojisData, setEmojisData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function fetchemojis() {
      setLoading(true);
      try {
        const res = await axios.get(
          "https://run.mocky.io/v3/fe964130-70d0-430f-b839-e55081423c28"
        );
        setEmojisData(res.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
        console.error(error);
      }
    }

    fetchemojis();
  }, []);
  return (
    <>
      <Navbar />
      <Container>
        {loading && <Empty text="Loading...." />}
        {error && <Empty text="Oops...." />}
        {emojisData.length > 0 && <p>Emojis data sukses!</p>}
      </Container>
    </>
  );
}

export default App;
