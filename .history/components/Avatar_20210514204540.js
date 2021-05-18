function Avatar({ url }) {
    return 
        <img
        loading="lazy"
        className="Avatar"
        src={url}
        alt="profile pic"/>;
            
}

export default Avatar;
