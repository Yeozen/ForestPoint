import { tab } from "./TabsBtn";
import './DashBoard.css'
import TabsBtn from './TabsBtn';

function DashBoard(){

    return(
        <div className="ModeBar">
            <ul className="MenuBar">
                {tab.map((title, index) => {
                return <TabsBtn items={title} key={index}/>;
                })}
                </ul>
        </div>
    )

}

export default DashBoard;