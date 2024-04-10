import NavigationItem from '../navigation-item/navigation-item.component'
import './navigation.styles.scss'

const Navigation = ({ categories }) => {
    return (
        <div className="categories-container">
            {categories.map((category) => (
                <NavigationItem key={category.id} category={category} />
            ))}
        </div>
    )
}

export default Navigation