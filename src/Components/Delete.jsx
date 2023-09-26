export function Delete() {
  return (
    <div className="delete-btn">
      <h2>Delete comment</h2>
      <p>
        Are you sure you want to delete this comment? This will remove the
        comment and can’t be undone.
      </p>
      <div className="buttons">
        <button className="btn-1">NO, CANCEL</button>
        <button className="btn-2">YES, DELETE</button>
      </div>
    </div>
  );
}
