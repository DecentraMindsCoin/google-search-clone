function HeaderOption({ Icon, title, selected}) {
    return (
        <div className={`flex items-center space-x-1`}>
            <Icon className="h-4" />
            <p className="hidden sm:inline-flex">{title}</p>
        </div>
    )
}

export default HeaderOption
