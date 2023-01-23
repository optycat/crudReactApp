import { Component } from 'react';

import './employees-add-form.scss';

class EmployeesAddForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
            valid: ''
        }

        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmitForm = () => {
        this.setState({
            name: '',
            salary: ''
        })
    }

    render() {
        const { onAdd } = this.props;
        const { name, salary, valid } = this.state;

        const handleSubmit = (e) => {
            e.preventDefault();
            if (e.target.name.value && e.target.salary.value) {
                onAdd(e);
                this.setState({valid: ''})
            } else {
                this.setState({valid: 'active'})
            }
            this.onSubmitForm();
        }
        return (
            <div className="app-add-form">
                <h3>Add new employee</h3>
                <form
                    id='add-employee-form'
                    className="add-form d-flex"
                    onSubmit={handleSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Name:"
                        name='name'
                        value={name}
                        onChange={this.onValueChange} />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="Salary:"
                        name='salary'
                        value={salary}
                        onChange={this.onValueChange} />

                    <button type="submit"
                        className="btn btn-outline-light">Add</button>
                </form>
                <p className={"validation-field " + valid}>Please fill this fields with your real data!</p>
            </div>
        )
    }
}

export default EmployeesAddForm;