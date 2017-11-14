import React, { Component } from 'react';
import './App.css';
import Griddle, { plugins } from 'griddle-react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ThemeDefault from './theme-default';

class App extends Component {
  render() {
    const data = [
      {
        id: 0,
        name: 'Mayer Leonard',
        city: 'Kapowsin',
        state: 'Hawaii',
        country: 'United Kingdom',
        company: 'Ovolo',
        favoriteNumber: 7,
      },
      {
        id: 1,
        name: 'abe',
        city: 'Kapowsin',
        state: 'Hawaii',
        country: 'United Kingdom',
        company: 'Ovolo',
        favoriteNumber: 7,
      },
      {
        id: 2,
        name: 'bob',
        city: 'Kapowsin',
        state: 'Hawaii',
        country: 'United Kingdom',
        company: 'Ovolo',
        favoriteNumber: 7,
      },
    ];
    const styleConfig = {
      icons: {
        TableHeadingCell: {
          sortDescendingIcon: <small>(desc)</small>,
          sortAscendingIcon: <small>(asc)</small>,
        },
      },
      classNames: {
        Cell: 'griddle-cell',
        Filter: 'griddle-filter',
        Loading: 'griddle-loadingResults',
        NextButton: 'griddle-next-button',
        NoResults: 'griddle-noResults',
        PageDropdown: 'griddle-page-select',
        Pagination: 'griddle-pagination',
        PreviousButton: 'griddle-previous-button',
        Row: 'griddle-row',
        RowDefinition: 'griddle-row-definition',
        Settings: 'griddle-settings',
        SettingsToggle: 'griddle-settings-toggle',
        Table: 'griddle-table',
        TableBody: 'griddle-table-body',
        TableHeading: 'griddle-table-heading',
        TableHeadingCell: 'griddle-table-heading-cell',
        TableHeadingCellAscending: 'griddle-heading-ascending',
        TableHeadingCellDescending: 'griddle-heading-descending',
      },
      styles: {
        Filter: { fontSize: 18 },
        Table: { border: '2px solid #555 ' },
      },
    };
    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
        <div className="App">
          <div className="App-header">
            <h2>Wealc  React</h2>
          </div>
          <Griddle
            styleConfig={styleConfig}
            data={data}
            plugins={[plugins.LocalPlugin]}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
