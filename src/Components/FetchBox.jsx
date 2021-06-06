import './FetchBox.scss';
import React from 'react'
import PropTypes from 'prop-types'
import useJsonFetch from '../hooks/useJsonFetch';

export default function FetchBox(props) {
  const { url, opts } = props;
  const [ { data, loading, error }] = useJsonFetch(url, opts);
  console.log({ data, loading, error });
  return (
    <div className="item">
      { loading && <p>Loading...</p> }
      { data && <p>Data is {data}</p>}
      { error && 
      <div>
        <div>Error is</div>
        <div>{error.name}</div>
        <div>{error.message}</div>
      </div>}
    </div>
  )
}

FetchBox.propTypes = {
  url: PropTypes.string.isRequired,
  opts: PropTypes.string
}