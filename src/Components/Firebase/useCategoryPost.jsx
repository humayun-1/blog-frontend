import { useEffect, useState } from "react";
import useFetchPosts from "./useFetchPosts";

const useFilteredData = (categoryName, data) => {
    const [filteredData, setFilteredData] = useState([]);
    useEffect(() => {
        if (categoryName && data) {
            const filtered = data.filter(item => item.category == categoryName);
            console.log(categoryName);
            setFilteredData(filtered);
        } else {
            setFilteredData(data);
        }
    }, [categoryName,data]);

    return filteredData;
};

export default useFilteredData