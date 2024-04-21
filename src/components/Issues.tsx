// Idk how type this data

const Issues: React.FC<any> = ({ data }) => {
  const issuesList = data.slice(0, 5);

  return (
    <>
      {issuesList.map((issue: { id: string; user: any; title: string }) => (
        <div key={issue.id}>
          <p>{issue.user.login}</p>
          <p>{issue.title}</p>
        </div>
      ))}
    </>
  );
};

export default Issues;
