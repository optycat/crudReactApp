import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.scss'

const EmployeesList = ({ data, onDelete, onToggleProp }) => {

    const elems = data.map(item => {
        const { key, ...itemProps } = item;
        return (
            <EmployeesListItem
                key={key}
                {...itemProps}
                onDelete={() => onDelete(key)}
                onToggleProp={(e) => onToggleProp(key, e.currentTarget.getAttribute('data-toggle'))}
            />
        )
    });

    return (
        <ul className="app-list list-group">
            {elems}
        </ul>
    )
}

export default EmployeesList;