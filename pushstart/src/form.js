import React, { Fragment } from 'react';
import TextField from '@atlaskit/textfield';
import Button, { ButtonGroup } from '@atlaskit/button';
import { Redirect} from 'react-router-dom'

import Select from '@atlaskit/select';
import axios from 'axios'
import Form, {
  Field,
  FormFooter,
  ErrorMessage,
} from '@atlaskit/form';


const categories = [
    { label: 'MARKETING WORKFLOW 1', value: 'MARKETING WORKFLOW 1' },
    { label: 'MARKETING WORKFLOW 2', value: 'MARKETING WORKFLOW 2' },
    { label: 'MARKETING WORKFLOW 3', value: 'MARKETING WORKFLOW 3' },
    { label: 'MARKETING WORKFLOW 4', value: 'MARKETING WORKFLOW 4' },
  ];
const statuses = [
    { label: 'LOW', value: 'LOW' },
    { label: 'MEDIUM', value: 'MEDIUM'},
    { label: 'HIGH', value: 'HIGH' },
  ];


class AdminForm extends React.Component {
    state ={
        redirect: false,
    }
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
  
    handleSubmit(data) {
      axios.post(`http://localhost:4000/api/tasks`, { data })
      .then(res => {
        this.setState({redirect: true})
      })

    }
  
    render() {
        const { redirect } = this.state;
        if (redirect) {
          return <Redirect to='/dashboard'/>;
        }
        return (
        <div
    style={{
      display: 'flex',
      width: '400px',
      margin: '0 auto',
      flexDirection: 'column',
    }}
  >
    <Form onSubmit={this.handleSubmit}
    >
      {({ formProps, submitting }) => (
        <form {...formProps}>
          <Field name="taskTitle" label="Task Title" isRequired defaultValue="">
            {({ fieldProps }) => (
              <Fragment>
                <TextField autoComplete="off" {...fieldProps} style={{height:'40px'}}/>
              </Fragment>
            )}
          </Field>
          <Field name="category" label="Select a category" defaultValue={{ label: 'MARKETING WORKFLOW 1', value: 'MARKETING WORKFLOW 1' }}>
            {({ fieldProps: { id, ...rest }, error }) => (
              <Fragment>
                <Select
                  validationState={error ? 'error' : 'none'}
                  inputId={id}
                  {...rest}
                  options={categories}
                />
                {error && <ErrorMessage>{error}</ErrorMessage>}
              </Fragment>
            )}
          </Field>
          <Field name="status" label="Task Status" defaultValue={{ label: 'LOW', value: 'LOW' }}>
            {({ fieldProps: { id, ...rest }, error }) => (
              <Fragment>
                <Select
                  validationState={error ? 'error' : 'none'}
                  inputId={id}
                  {...rest}
                  options={statuses}
                />
                {error && <ErrorMessage>{error}</ErrorMessage>}
              </Fragment>
            )}
          </Field>
          <FormFooter>
            <ButtonGroup>
              <Button appearance="subtle">Cancel</Button>
              <Button type="submit" appearance="primary" isLoading={submitting}>
                Submit
              </Button>
            </ButtonGroup>
          </FormFooter>
        </form>
      )}
    </Form>
  </div>
      );
    }
  }

export default AdminForm;