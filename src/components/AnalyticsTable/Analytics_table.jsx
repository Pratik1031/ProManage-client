import React from 'react';
import Styles from './analytics_table.module.css';

const Analytics_table = () => {
  return (
    <div className={Styles.tableData}>
      <div className={Styles.boards}>
        <table>
          <tbody>
            <tr>
              <td>
                <li>Backlog Tasks</li>
              </td>
              <td>0</td>
            </tr>

            <tr>
              <td>
                <li>To-do Tasks</li>
              </td>
              <td>0</td>
            </tr>

            <tr>
              <td>
                <li>In-Progress Tasks</li>
              </td>
              <td>0</td>
            </tr>

            <tr>
              <td>
                <li>Completed Tasks</li>
              </td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={Styles.boards}>
        <table>
          <tbody>
            <tr>
              <td>
                <li>Low Priority</li>
              </td>
              <td>0</td>
            </tr>

            <tr>
              <td>
                <li>Moderate Priority</li>
              </td>
              <td>0</td>
            </tr>

            <tr>
              <td>
                <li>High Priority</li>
              </td>
              <td>0</td>
            </tr>

            <tr>
              <td>
                <li>Due Date Tasks</li>
              </td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Analytics_table;
