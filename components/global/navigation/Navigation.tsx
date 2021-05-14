
const Navigation = () => {
    return (
        <>
            <nav className="navigation">
                <div className="container">
                    <div className="logo">
                        <svg width="37" height="50" viewBox="0 0 37 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.3374 49.619C23.1892 49.619 20.4627 48.9866 18.1578 47.7217C15.8529 46.4287 14.068 44.6298 12.8031 42.3249C11.5663 39.9919 10.948 37.2794 10.948 34.1874C10.948 31.1236 11.5663 28.4392 12.8031 26.1343C14.068 23.8294 15.8529 22.0445 18.1578 20.7796C20.4627 19.4866 23.1892 18.8401 26.3374 18.8401C28.305 18.8401 30.2023 19.1353 32.0294 19.7256C33.8846 20.3158 35.3743 21.1169 36.4987 22.1289L34.0954 27.7365C32.8024 26.8089 31.5375 26.1343 30.3007 25.7127C29.0639 25.2911 27.799 25.0803 26.5061 25.0803C24.1168 25.0803 22.2617 25.8392 20.9406 27.357C19.6476 28.8749 19.0011 31.1517 19.0011 34.1874C19.0011 37.2232 19.6476 39.514 20.9406 41.06C22.2617 42.606 24.1168 43.3789 26.5061 43.3789C27.799 43.3789 29.0639 43.1681 30.3007 42.7465C31.5375 42.3249 32.8024 41.6503 34.0954 40.7227L36.4987 46.3303C35.3743 47.3422 33.8846 48.1433 32.0294 48.7336C30.2023 49.3239 28.305 49.619 26.3374 49.619Z" fill="#FF56FF" />
                            <path d="M20.327 30.4888L6.7506 15.0993L19.9897 0.468811H29.2656L13.8761 16.9967L14.5086 12.9912L29.7294 30.4888H20.327ZM0.384003 30.4888V0.468811H8.31062V30.4888H0.384003Z" fill="#32FFFF" />
                        </svg>
                    </div>
                    <ul className="links">
                        <li>
                            <a
                                className='f-size-p3 f-weight-m'
                                href="#services">
                                services
                            </a>
                        </li>
                        <li>
                            <a
                                className='f-size-p3 f-weight-m'
                                href="#portfolio">
                                portfolio
                            </a>
                        </li>
                        <li>
                            <a
                                className='f-size-p3 f-weight-m'
                                href='mailto:email@gmail.com'>
                                contact
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navigation
