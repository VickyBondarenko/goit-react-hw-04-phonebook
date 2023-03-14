import { useState, useEffect } from 'react';
import { List } from 'components/list/List';
import { Form } from 'components/form/Form';
import { Filter } from 'components/filter/Filter';
import styled from 'styled-components';

const CONTACTS_KEY = 'contacts';
export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const handleSubmit = contact => {
    setContacts(prevState => [...prevState, contact]);
  };

  const onChangeSearch = e => {
    setFilter(e.target.value);
  };

  const applayFilter = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleCheck = user => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === user.name.toLowerCase()
      )
    ) {
      alert(`${user.name} is alredy in contact`);
    } else {
      handleSubmit(user);
    }
  };

  const handleDeleteUser = id => {
    setContacts(prevState => prevState.filter(user => user.id !== id));
  };

  useEffect(() => {
    const contacts = localStorage.getItem(CONTACTS_KEY);
    if (contacts && JSON.parse(contacts).length) {
      setContacts(JSON.parse(contacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Wraper>
      <h1>Phonebook</h1>
      <Form onCheck={handleCheck} />

      <h2>Contacts</h2>
      <Filter value={filter} onChangeSearch={onChangeSearch} />
      <List options={applayFilter()} onDeleteUser={handleDeleteUser} />
    </Wraper>
  );
};

const Wraper = styled.div`
  margin-left: 50px;
  margin-top: 50px;
  padding: 20px 50px;
`;
