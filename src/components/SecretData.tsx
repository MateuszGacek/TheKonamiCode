import Issues from "./Issues";
import { useQuery } from "@tanstack/react-query";

const SecretData = () => {
  const {
    data: issues,
    isLoading,
    error,
  } = useQuery({
    queryFn: () =>
      fetch("https://api.github.com/repos/elixir-lang/elixir/issues").then(
        (res) => res.json()
      ),
    queryKey: ["comments"],
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <div>Error: error fetching</div>;
  }

  return <Issues data={issues} />;
};

export default SecretData;
