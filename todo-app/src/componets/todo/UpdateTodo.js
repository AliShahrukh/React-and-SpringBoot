import React, { Component } from 'react'
import moment from 'moment'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { retrieveTodo, updateTodo, createTodo } from '../AsyncApi/TodoDataService';
import { getLoggedInUserName } from '../Authentication/AuthenticationService';

class UpdateTodo extends Component {


    state = {
        id: this.props.match.params.id,
        description: 'description',
        targetDate: moment(new Date()).format('YYYY-MM-DD')
    }

    componentDidMount() {

        if (this.state.id === -1) {
            return
        }

        let username = getLoggedInUserName();

        retrieveTodo(username, this.state.id)
            .then(response => this.setState({
                description: response.data.description,
                targetDate: moment(response.data.targetDate).format('YYYY-MM-DD')
            }))
    };

    render() {

        const validate = (values) => {
            let errors = {}
            if (!values.description) {
                errors.description = 'Enter a Description'
            } else if (values.description.length < 5) {
                errors.description = 'Enter atleast 5 Characters in Description'
            }

            if (!moment(values.targetDate).isValid()) {
                errors.targetDate = 'Enter a valid Target Date'
            }
            return errors;
        };

        const onSubmit = (values) => {
            let username = getLoggedInUserName();

            let todo = {
                id: this.state.id,
                description: values.description,
                targetDate: values.targetDate
            }

            if (this.state.id === -1) {
                createTodo(username, todo)
                    .then(() => this.props.history.push('/todos'))
            } else {
                updateTodo(username, this.state.id, todo)
                    .then(() => this.props.history.push('/todos'))
            }
        };

        let { description, targetDate } = this.state;

        return (
            <div>
                <h1>Todo</h1>
                <div className="container">
                    <Formik
                        initialValues={{ description: description || '', targetDate }}
                        onSubmit={onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div"
                                        className="alert alert-warning" />
                                    <ErrorMessage name="targetDate" component="div"
                                        className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Target Date</label>
                                        <Field className="form-control" type="date" name="targetDate" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>

                </div>
            </div>
        )
    }
}

export default UpdateTodo;