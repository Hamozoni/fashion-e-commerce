
import LikedListCard from "./likedListCard"

const likedListPage = ()=> {
    return (
        <div className="p-4 lg:px-8">
            <h4 
                className="text-green-900 text-lg capitalize font-medium mb-4"
                >your favourite list</h4>
            <LikedListCard />
        </div>
    );
};

export default likedListPage;