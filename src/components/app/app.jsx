import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.scss';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'Josh C.', salary: 800, increase: false, rise: false, key: 1 },
                { name: 'Samuel W.', salary: 1050, increase: true, rise: false, key: 2 },
                { name: 'Carther M.', salary: 700, increase: false, rise: true, key: 3 },
                { name: 'Maddyson T.', salary: 600, increase: false, rise: false, key: 4 }
            ],
            term: '',
            filter: 'all'
        };
        this.maxId = 4;
        this.addItem = this.addItem.bind(this);
    }

    /*
    onToggleIncrease = (increaseId) => {
        this.setState(({data})=> ({
            data: data.map(elem => elem.key !== increaseId 
                                        ? elem 
                                        : {...elem, increase: !elem.increase})
        }));
    }

    onToggleRise = (riseId) => {
        this.setState(({data})=> ({
            data: data.map(elem => elem.key !== riseId 
                                        ? elem 
                                        : {...elem, rise: !elem.rise})
        }));
    }
    */

    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map(elem => elem.key !== id
                ? elem
                : { ...elem, [prop]: !elem[prop] })
        }));
    }

    deleteItem = (id) => {
        this.setState(({ data }) => (
            { data: data.filter(elem => elem.key !== id) }
        ))
    }

    addItem(e) {
        this.maxId = this.maxId + 1;

        let newEmployee = {
            name: e.target.name.value,
            salary: +e.target.salary.value,
            increase: false,
            rise: false,
            key: this.maxId
        }

        this.setState(({ data }) => ({ data: [...data, newEmployee] }));
    }

    searchEmployee = (items, term) => {
        if (term) {
            return items.filter(elem => elem.name.toLowerCase().indexOf(term) > -1)
        } else {
            return items;
        }
    }

    onUpdateSearch = term => {this.setState({term})}

    onFilter = filter => {this.setState({filter})}

    filterEmployee = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(elem => elem.rise);
            case 'salaryMore1000':
                return items.filter(elem => elem.salary > 1000);
            default:
                return items;
        }
    }

    render() {
        const { data, term, filter } = this.state;

        const visibleData = this.filterEmployee(this.searchEmployee(data, term), filter);
        return (
            <div className="app">
                <AppInfo
                    awardedEmployees={data.filter(elem => elem.increase).length}
                    totalEmployees={data.length} />

                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter 
                        filterEmployee={this.onFilter}
                        filter={filter}/>
                </div>

                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                />

                <EmployeesAddForm onAdd={this.addItem} />
            </div>
        )
    }
}

export default App;