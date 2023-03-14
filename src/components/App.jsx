import { Component } from 'react';
import { List } from 'components/list/List';
import Form from 'components/form/Form';
import { Filter } from 'components/filter/Filter';
import styled from 'styled-components';

const CONTACTS_KEY = 'contacts';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem(CONTACTS_KEY);
    if (contacts && JSON.parse(contacts).length) {
      this.setState({
        contacts: JSON.parse(contacts),
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem(CONTACTS_KEY, JSON.stringify(this.state.contacts));
    }
  }

  handleSubmit = contact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  onChangeSearch = e => {
    this.setState(prevState => ({
      filter: e.target.value,
    }));
  };

  applayFilter = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  handleCheck = user => {
    if (
      this.state.contacts.some(
        contact => contact.name.toLowerCase() === user.name.toLowerCase()
      )
    ) {
      alert(`${user.name} is alredy in contact`);
    } else {
      this.handleSubmit(user);
    }
  };

  handleDeleteUser = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(user => user.id !== id),
    }));
  };

  render() {
    return (
      <Wraper>
        <h1>Phonebook</h1>
        <Form onCheck={this.handleCheck} />

        <h2>Contacts</h2>
        <Filter
          value={this.state.filter}
          onChangeSearch={this.onChangeSearch}
        />
        <List
          options={this.applayFilter()}
          onDeleteUser={this.handleDeleteUser}
        />
      </Wraper>
    );
  }
}

const Wraper = styled.div`
  margin-left: 50px;
  margin-top: 50px;
  padding: 20px 50px;
`;
