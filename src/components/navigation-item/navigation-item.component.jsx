import './navigation-item.style.scss'

const NavigationItem = ({ category }) => {
    const { imageUrl, title } = category;
    return (
        <div className="navigation-item-container">
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            />
            <div className="navigation-item-body-container">
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    )
}

export default NavigationItem