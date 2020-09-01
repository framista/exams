import React from 'react';
import { connect } from 'react-redux';
import { TiDelete } from 'react-icons/ti';
import { deleteFilter } from '../../../redux/exams/actions';

const Filters = ({ filters, deleteFilter }) => {
  const status = {
    failed: { text: 'Niezaliczone', background: 'danger' },
    future: { text: 'Przyszłe', background: 'info' },
    noResult: { text: 'Nieocenione', background: 'secondary' },
    passed: { text: 'Zaliczone', background: 'success' },
  };
  if (filters.length === 0) {
    return null;
  }
  return (
    <div className="d-flex mb-4 flex-wrap">
      {filters.map((filter) => (
        <div
          className={`bg-${status[filter].background} text-light rounded-pill px-3 py-2 mb-2 mr-2 d-flex align-items-center justify-content-between`}
          key={filter}
        >
          <p className="my-0 mr-1">{status[filter].text}</p>
          <div
            className="d-flex align-items-center btn px-0 mx-0 text-light"
            style={{ fontSize: '1.5rem' }}
            onClick={() => deleteFilter(filter)}
          >
            <TiDelete />
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  filters: state.exams.filters,
});

const mapDispatchToProps = (dispatch) => ({
  deleteFilter: (filter) => dispatch(deleteFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
