import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Page() {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/portifolio/${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>{data?._id}</h1>
      <p>{data?.firstName}</p>
      <p>{data?.lastName}</p>
    </div>
  );
}

export default Page;
