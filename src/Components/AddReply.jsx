export function AddReply({user}) {
  return (
    <div className="reply-field">
      <img src={user.currentUser.image.png} alt="juliusomo" />
      <textarea placeholder="Add reply..." />
      <button className="send-btn">SEND</button>
    </div>
  );
}
