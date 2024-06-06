import { AiOutlineRight } from "react-icons/ai";
import './DashBoard.css';

//Creating a struct to store Menu Bar title and url.
export const tab = [
    {
        title: 'PCD Data Library',
        url: '/PCD',
    },
    
  ];

  const TabsBtn = ({items}) => {
    return (
        <li>
            <a href={items.url}>{items.title}<AiOutlineRight className="icon"/></a> 
        </li>
    );
    };


  export default TabsBtn;



