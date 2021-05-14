
const Infos = () => {

    const infoContent = [
        {
            title: 'Experience',
            description: 'Chainstride is replete with crypto experience. Our founders have a combined 40+ years of crypto investing, coding, and strategy experience.',
        },
        {
            title: 'Influence',
            description: 'Chainstride works with thought leaders on a number of social platforms, tailored to the needs of each client. Our reach is in the hundreds of thousands.',
        },
        {
            title: 'Insight',
            description: 'Chainstride employs a team of dedicated researchers in order to locate emerging trends and technologies before they become widely known.',
        },
        {
            title: 'Community',
            description: 'Chainstride and our associated influencers maintain vibrant social communities, which foster organic growth and development.',
        },
        {
            title: 'Builders',
            description: 'Chainstride works with in-house blockchain engineers and Solidity developers to deliver value to our clients and investees.',
        },
        {
            title: 'Strategy',
            description: 'Chainstride offers dedicated marketing, technical and strategy advice, based on years of crypto startup experience.',
        },
    ]


    return (
        <>
            <div className="infos_main">
                <div className="infos_container">
                    {infoContent.map((info, i) => (
                        <div className="info" key={i}>
                            <div
                                className="image"
                                style={{
                                    backgroundImage: `url("images/icons/${i + 1}.png"),
                                    ${i < 3 ?
                                            'linear-gradient(180deg, rgba(13, 14, 15, 0) 0%, #00D1EA 100%)' :
                                            'linear-gradient(180deg, rgba(13, 14, 15, 0) 0%, #FF56FF 100%)'}`,
                                }} />
                            <h2
                                className="f-size-h5 f-weight-bl">
                                {info.title}
                            </h2>
                            <p
                                className="f-size-p5 f-weight-l">
                                {info.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default Infos
