export function AddComment({user}) {
    return (
        <div className="input-field">
            <img src={user.currentUser.image.png} alt="juliusomo"/>
            <textarea placeholder="Add comment..." />
            <button className="send-btn">SEND</button>
        </div>
    );
}