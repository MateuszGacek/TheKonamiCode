const Issues: React.FC<any> = ({ data }) => {
  const issuesList = data.slice(0, 5);

  console.log(data.slice(0, 5));

  return (
    // <div style={{ display: `${!showIssues ? "none" : "block"}` }}>
    <div>
      {issuesList.map((issue: any) => (
        <div key={issue.id}>
          <p>{issue.user.login}</p>
          <p>{issue.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Issues;
