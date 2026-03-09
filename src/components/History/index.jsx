const History = ({ history, clearHistory }) => {
  return (
    <div className="history-panel">
      <div className="history-header">
        <h2>History</h2>

        <button className="clear-history" onClick={clearHistory}>
          Clear
        </button>
      </div>

      {history.length === 0 ? (
        <p className="empty">No calculations yet</p>
      ) : (
        <ul>
          {history.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default History;
