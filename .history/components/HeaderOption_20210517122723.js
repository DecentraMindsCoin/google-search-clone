function HeaderOption({ Icon, title, selected}) {
    return (
        <div className={`flex`}>
            <Icon className="h-4" />
            <p className="hidden sm:inline"></p>
        </div>
    )
}

export default HeaderOption
