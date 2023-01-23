

import './employees-list-item.scss';


const EmployeesListItem = (props) => {
    const { name, salary, increase, rise, onDelete, onToggleProp } = props;

    return (
        <li className={`list-group-item d-flex justify-content-between ${rise ? ' like' : ''} ${increase ? ' increase' : ''}`}>
            <span className="list-group-item-label"
                data-toggle="rise"
                onClick={onToggleProp}>{name}</span>
            <input type="text"
                className="list-group-item-input"
                defaultValue={salary + '$'} />
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    data-toggle="increase"
                    onClick={onToggleProp}>
                    <i className="fas fa-cookie"></i>
                </button>
                <button type="button"
                    className="btn-trash btn-sm "
                    onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;