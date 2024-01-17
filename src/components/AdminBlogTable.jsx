import React from "react";

const AdminBlogTable = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">User</th>
          <th scope="col">Date In</th>
          <th scope="col">Category</th>
          <th scope="col">Category</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>John</td>
          <td>Doe</td>
          <td>@john.doe</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jane</td>
          <td>Doe</td>
          <td>@jane.doe</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jane</td>
          <td>Doe</td>
          <td>@jane.doe</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jane</td>
          <td>Doe</td>
          <td>@jane.doe</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jane</td>
          <td>Doe</td>
          <td>@jane.doe</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jane</td>
          <td>Doe</td>
          <td>@jane.doe</td>
        </tr>
        {/* Add more rows as needed */}
      </tbody>
    </table>
  );
};

export default AdminBlogTable;
