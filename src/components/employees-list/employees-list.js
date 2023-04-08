import EmployersListItem from "../employees-list-item/employees-list-item";
import "./employees-list.css";
const EmployeesList = ({ data, onDelete, onToggleProp }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <EmployersListItem
        onDelete={() => onDelete(id)}
        key={id}
        {...itemProps}
        onToggleProp={(e) =>
          onToggleProp(id, e.currentTarget.getAttribute("data-toggle"))
        }

        // onToggleRise={() => onToggleRise(id)}
      />
    );
    // <EmployersListItem
    //     name={item.name}
    //     salary={item.salary}
    //     increase={item.increase}
    //   />
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;
