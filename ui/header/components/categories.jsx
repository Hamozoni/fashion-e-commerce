
export const Categories = ()=> {

    const className ={ 
        cateLi : ' capitalize font-medium teat-teal-900 text-xl cursor-pointer'
    }
    return (
        <div className="">
            <ul className="flex items-center gap-3">
                <li className={className.cateLi}>men</li>
                <li className={className.cateLi}>women</li>
                <li className={className.cateLi}>kids</li>
            </ul>
        </div>
    );
};