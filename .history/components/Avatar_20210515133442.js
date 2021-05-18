function Avatar({url}) {
    return <img loading="lazy"
    className='h-10 rounded-full cursor-pointer '
    src={url} alt="Profile Pic" />;
    
}

export default Avatar
