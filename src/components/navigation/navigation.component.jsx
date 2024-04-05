import CatogoryItem from "../category-item/category-item.component"
import './navigation.styles.scss'

const Navigation = ({categories}) => {
    return (
        <div className="categories-container">
            {categories.map((category) => (
                <CatogoryItem key={category.id} category={category} />
            ))}
        </div>
    )
}

export default Navigation