import "./app-info.css";

const AppInfo = ({ data, increased }) => {
  console.log(data.length);
  return (
    <div className="app-info">
      <h1>Accounting in the company №</h1>
      <h2>Total number of employees: {data.length}</h2>
      <h2>The award is received: {increased}</h2>
    </div>
  );
};

export default AppInfo;
