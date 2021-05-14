
function Services() {

    const servicesContent = [
        {
            title: 'Promotional',
            description: `Chainstride works with hand-picked social influencers, thought leaders, YouTube channels, blogs, and many more. As a result, we're able to use a multi-pronged approach in order to organically grow the audience of our investees.`,
        },
        {
            title: 'Advisory & Networking',
            description: `Chainstride works with thought leaders on a number of social platforms, tailored to the needs of each client. Our reach is in the hundreds of thousands.`,
        },
        {
            title: 'Engineering',
            description: `Chainstride retains several engineers, including experienced blockchain engineers. As such we're able to offer engineering advice and support to our investees. This may include, but is not limited to:`,
        }
    ]


    return (
        <>

            <div className="services_main" id="services">
                <div className="services_container">
                    <h1 className="f-size-h2 f-weight-bl">
                        Our <br />
                        <span>Services</span>
                    </h1>
                    <div className="services">
                        {servicesContent.map((service, i) => (
                            <div className="service">
                                <h2
                                    className="f-size-h5 f-weight-bo">
                                    {service.title}
                                </h2>
                                <p
                                    className="f-size-p4 f-weight-l">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                        <ul>
                            <li className='f-size-p4 f-weight-l'>
                                Smart contract auditing and testing
                            </li>
                            <li className='f-size-p4 f-weight-l'>
                                Architectural advice for large applications
                            </li>
                            <li className='f-size-p4 f-weight-l'>
                                Full-stack Web3 applications, from frontend,
                                to server-side, L2s, cross-chain bridges,
                                liquidity pools, etc.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services
