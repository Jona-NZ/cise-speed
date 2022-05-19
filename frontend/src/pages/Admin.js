import React from 'react';
import Card from '../components/AdminCard';

const Admin = () => {
  return (
    <section className="section">
      <div className="container">
        <div class="columns">
          <div class="column">
            <Card journalName="this is a journal" author="test Author" />
          </div>
          <div class="column">
            <Card journalName="this is a journal" />
          </div>
          <div class="column">
            <Card journalName="this is a journal" />
          </div>
          <div class="column">
            <Card journalName="this is a journal" />
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <Card journalName="this is a journal" />
          </div>
          <div class="column">
            <Card journalName="this is a journal" />
          </div>
          <div class="column">
            <Card journalName="this is a journal" />
          </div>
          <div class="column">
            <Card journalName="this is a journal" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin;
