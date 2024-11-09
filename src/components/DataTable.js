import React, { useState } from 'react';
import { Table } from 'react-bootstrap'; // Import Table component from react-bootstrap
import TableFooter from './TableFooter';


const DataTable = () => {
  const [data, setData] = useState([
    {
      name: "bootstrap-table",
      stargazers_count: "526",
      forks_count: "122",
      description: "An extended Bootstrap table with radio, checkbox, sort, pagination, and other added features. (supports twitter bootstrap v2 and v3)"
    },
    {
      name: "multiple-select",
      stargazers_count: "288",
      forks_count: "150",
      description: "A jQuery plugin to select multiple elements with checkboxes :)"
    },
    {
      name: "bootstrap-show-password",
      stargazers_count: "32",
      forks_count: "11",
      description: "Show/hide password plugin for twitter bootstrap."
    },
    {
      name: "blog",
      stargazers_count: "13",
      forks_count: "4",
      description: "my blog"
    },
    {
      name: "scutech-redmine",
      stargazers_count: "6",
      forks_count: "3",
      description: "Redmine notification tools for chrome extension."
    },
    {
      name: "scutech-redmine1",
      stargazers_count: "6",
      forks_count: "3",
      description: "Redmine notification tools for chrome extension."
    }
  ]);

  const nameFormatter = (value) => {
    return <a href={`https://github.com/wenzhixin/${value}`}>{value}</a>;
  };

  const starsFormatter = (value) => {
    return <span><i className="glyphicon glyphicon-star"></i> {value}</span>;
  };

  const forksFormatter = (value) => {
    return <span><i className="glyphicon glyphicon-cutlery"></i> {value}</span>;
  };

  return (
    <div className="datatable">
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Stars</th>
            <th>Forks</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{nameFormatter(row.name)}</td>
              <td>{starsFormatter(row.stargazers_count)}</td>
              <td>{forksFormatter(row.forks_count)}</td>
              <td>{row.description}</td>
            </tr>
          ))}
        </tbody>
      </Table>


<TableFooter/>


    </div>
  );
};

export default DataTable;
