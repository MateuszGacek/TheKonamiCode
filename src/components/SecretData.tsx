import Issues from "./Issues";
import { useQuery } from "@tanstack/react-query";

const SecretData: React.FC = () => {
  // I'm not sure if I need to type this destructuring
  // And I have a problem with data typing and there is little information about types in the tanstack docs
  const {
    data: issues,
    isLoading,
    error,
  } = useQuery({
    queryFn: () =>
      fetch("https://api.github.com/repos/elixir-lang/elixir/issues").then(
        (res) => res.json()
      ),
    queryKey: ["issues"],
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
