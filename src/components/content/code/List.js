import styled from 'styled-components';
import React from 'react';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Table, TableBody, TableCell, TableHead, TablePagination, TableRow,
  TableSortLabel, Toolbar, Typography, Paper, Checkbox, IconButton, Tooltip,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import { lighten } from '@material-ui/core/styles/colorManipulator';

let counter = 0;
function createData(name, calories, fat, carbs, protein) {
  counter += 1;
  return {
    id: counter, name, calories, fat, carbs, protein,
  };
}

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const rows = [
  {
    id: 'name', numeric: false, disablePadding: false, label: '공통코드',
  },
  {
    id: 'calories', numeric: false, disablePadding: false, label: '공통코드명',
  },
];

class EnhancedTableHead extends React.Component {
  createSortHandler = property => (event) => {
    const { onRequestSort } = this.props;
    onRequestSort(event, property);
  };

  render() {
    const {
      onSelectAllClick, order, orderBy, numSelected, rowCount,
    } = this.props;

    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={numSelected === rowCount}
              onChange={onSelectAllClick}
            />
          </TableCell>
          {rows.map(
            row => (
              <TableCell
                key={row.id}
                // align={row.numeric ? 'right' : 'left'}
                padding={row.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === row.id ? order : false}
              >
                <Tooltip
                  title="Sort"
                  placement={row.numeric ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                >
                  <TableSortLabel
                    href="/"
                    active={orderBy === row.id}
                    direction={order}
                    onClick={this.createSortHandler(row.id)}
                  >
                    {row.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            ),
            this,
          )}
        </TableRow>
      </TableHead>
    );
  }
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const toolbarStyles = theme => ({
  highlight:
    theme.palette.type === 'light'
      ? {
        color: theme.palette.secondary.main,
        backgroundColor: lighten(theme.palette.secondary.light, 0.85),
      }
      : {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.dark,
      },
  spacer: {
    flex: '1 1 100%',
  },
  actions: {
    color: theme.palette.text.secondary,
  },
  title: {
    flex: '0 0 auto',
  },
});

const EnhancedTableToolbar = (props) => {
  const { numSelected, classes } = props;

  return (
    <Toolbar
      className={classNames(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      <div className={classes.title}>
        {numSelected > 0 ? (
          <Typography color="inherit" variant="subtitle1">
            {numSelected}
            {' '}
            selected
          </Typography>
        ) : (
          <TypographyFont variant="h6" id="tableTitle">
            asdf
          </TypographyFont>
        )}
      </div>
      <div className={classes.spacer} />
      <div className={classes.actions}>
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton aria-label="Delete" href="/">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <IconButton aria-label="Filter list" href="/">
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )}
      </div>
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
    highlight: PropTypes.string,
    title: PropTypes.string,
    spacer: PropTypes.string,
    actions: PropTypes.string,
  }).isRequired,
  numSelected: PropTypes.number.isRequired,
};

const MyEnhancedTableToolbar = (withStyles(toolbarStyles)(EnhancedTableToolbar));

const styles = () => ({
  root: {
    width: '100%',
    marginBottom: '1rem',
    display: 'inline-block',
  },
  table: {
    width: '100%',
    maxHeight: 800,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
});

class EnhancedTable extends React.Component {
  state = {
    order: 'asc',
    orderBy: '',
    selected: [],
    data: [
      createData('Ice cream sandwich', 237),
      createData('Jelly Bean', 375),
      createData('KitKat', 518),
      createData('Lollipop', 392),
      createData('Marshmallow', 318),
      createData('Nougat', 360),
      createData('Oreo', 437),
      createData('Oreo', 437),
      createData('Oreo', 437),
      createData('Oreo', 437),
      createData('Oreo', 437),
      createData('Oreo', 437),
      createData('Oreo', 437),
      createData('Oreo', 437),
      createData('Oreo', 437),
    ],
    page: 0,
    rowsPerPage: 10,
  };

  handleRequestSort = (event, property) => {
    const orderByA = property;
    let orderA = 'desc';

    const { orderBy, order } = this.state;

    if (orderBy === property && order === 'desc') {
      orderA = 'asc';
    }

    this.setState({ orderBy: orderByA, order: orderA });
  };

  handleSelectAllClick = (event) => {
    if (event.target.checked) {
      this.setState(state => ({ selected: state.data.map(n => n.id) }));
      return;
    }
    this.setState({ selected: [] });
  };

  handleClick = (event, id) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    this.setState({ selected: newSelected });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = (event) => {
    this.setState({ rowsPerPage: event.target.value });
  };

  isSelected = (id) => {
    const { selected } = this.state;
    return selected.indexOf(id) !== -1;
  };

  render() {
    const { classes } = this.props;
    const {
      data, order, orderBy, selected, rowsPerPage, page,
    } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
      <Paper className={classes.root}>
        <MyEnhancedTableToolbar numSelected={selected.length} />
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={this.handleSelectAllClick}
              onRequestSort={this.handleRequestSort}
              rowCount={data.length}
            />
            <TableBody>
              {stableSort(data, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((n) => {
                  const isSelected = this.isSelected(n.id);
                  return (
                    <TableRow
                      hover
                      onClick={event => this.handleClick(event, n.id)}
                      role="checkbox"
                      aria-checked={isSelected}
                      tabIndex={-1}
                      key={n.id}
                      selected={isSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox checked={isSelected} />
                      </TableCell>
                      <TableCell component="th" scope="row" padding="none">
                        {n.name}
                      </TableCell>
                      <TableCell>{n.calories}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={2} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}

EnhancedTable.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
    table: PropTypes.string,
    tableWrapper: PropTypes.string,
  }).isRequired,
};

const TypographyFont = styled(Typography)`
    font-family : inherit !important;
`;

export default withStyles(styles)(EnhancedTable);