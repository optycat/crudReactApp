
import './app-filter.scss';

const AppFilter = (props) => {
    const onFilter = (e) => {
        const filter = e.currentTarget.name;
        props.filterEmployee(filter);
    }

    const btnData = [
        { name: 'all', label: 'All employees', id: 1 },
        { name: 'rise', label: 'Filter promotion', id: 2 },
        { name: 'salaryMore1000', label: 'Filter salary more 1000$', id: 3 }
    ]

    return (
        <div className="btn-group">
            {
                btnData.map(btn => {
                    return (
                        <button
                            type="button"
                            className={`btn ${props.filter === btn.name ? 'btn-light' : 'btn-outline-light'}`}
                            name={btn.name}
                            key={btn.id}
                            onClick={onFilter}
                        >{btn.label}</button>
                    )
                })
            }
        </div>
    )

}

export default AppFilter;