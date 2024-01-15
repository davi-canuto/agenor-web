import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PortfolioDisplay from "../components/PortfolioDisplay";

const Page = () => {
  const router = useRouter();
  const { id, preview } = router.query;
  const [portfolio, setPortfolio] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const load = async () => {
    try {
      setLoading(true);

      const portfolioRes = await fetch(
        `/api/portfolio/${id}?preview=${preview}`
      );
      const { success, data: portfolio } = await portfolioRes.json();

      if (!success) {
        setError({ message: "Unknown error" });
        return;
      }

      setPortfolio(portfolio);
    } catch (data) {
      setError(error);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (id) load();
  }, [id]);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  return <PortfolioDisplay portfolio={portfolio} />;
};

export default Page;
