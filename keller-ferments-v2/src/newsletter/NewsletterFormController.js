import React, { PureComponent } from 'react';
import isEmpty from 'lodash/fp/isEmpty';
import NewsletterForm from './NewsletterForm';
import NewsletterFormSuccessBlock from './NewsletterFormSuccessBlock';

/* This file and related files are copied from tutorial by Dmytro Danylov: https://medium.com/@dmytro_d/handle-forms-with-react-64b2ceeb95d7 */

export default class NewsletterFormController extends PureComponent {
    constructor(props) {
        super(props);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            email: '',
            errors: {},
            showSuccessBlock: false
        };
    }
    handleEmailChange(e) {
        this.setState({ email: e.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
        const { email } = this.state;
        const errors = {};
        // TODO: add parameter that catches if email doesn't include period after @
        if (!email || !email.includes('@')) {
            errors.email = 'Please enter a valid email.';
        }
        if (!isEmpty(errors)) {
            return this.setState({ errors });
        }

        // TODO: Send data to the server and show feedback to the user.
        this.setState({
            showSuccessBlock: true
        });
    }
    render() {
        return this.state.showSuccessBlock ?
            <NewsletterFormSuccessBlock
                email={this.state.email}
            /> :
            <NewsletterForm
                email={this.state.email}
                errors={this.state.errors}
                onEmailChange={this.handleEmailChange}
                onSubmit={this.handleSubmit}
            />
    }
}