import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Page = () => {
  const router = useRouter();
  const { id, preview } = router.query;
  const [portfolio, setPortfolio] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const load = async () => {
    try {
      setLoading(true);

      const portfolioRes = await fetch(`/api/portifolio/${id}`, {
        headers: {
          preview: !!preview,
        },
      });
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

  return (
    <div>
      <h1>{portfolio?._id}</h1>
      <p>{portfolio?.firstName}</p>
      <p>{portfolio?.lastName}</p>
      <pre>{JSON.stringify(portfolio, null, 2)}</pre>
    </div>
  );
};

export default Page;
