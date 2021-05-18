function Avatar({url}) {
    return <img loading="lazy"
    className='h-10 rounded-full animate-bounce cursor-pointer transition duration-150 transform hover:scale-110 '
    src={url} alt="Profile Pic" />;
    
}

export default Avatar
