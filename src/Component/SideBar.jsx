
import styled from "styled-components";

const Drawer = styled.section`
   border-top: 1px solid rgb(219,219,219);
   background: rgb(255,255,255);
   padding-left: 40px;
   width: 250px;
`;

const DrawerItem = ({ label, icon }) => {
    return (
        <table>
            <tr>
                <td>
                    <img width="30px" height="25px" src={icon} alt="" />
                </td>
                <td style={{paddingLeft: 30}}>
                    <p style={{ fontSize: "15px", fontWeight: "500" }}>{label}</p>
                </td>
            </tr>
        </table>
    )
}

export default function SideBar() {

    return (
        <div style={{
            border: "1px solid rgb(219,219,219)",
            background: "rgb(255,255,255)",
            paddingTop: 60,
            maxHeight: "350px",
            overflowY: "auto"
        }}>
            <Drawer>
                <DrawerItem label="Inbox" icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd5niwz9UyKS7Ru4AEINV1YytvOWMtr1pBGQ&usqp=CAU" />
                <DrawerItem label="Starred" icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeauJR7lywjkxls00Hh9YDByO348YZcbfHEw&usqp=CAU" />
                <DrawerItem label="Send email" icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd5niwz9UyKS7Ru4AEINV1YytvOWMtr1pBGQ&usqp=CAU" />
                <DrawerItem label="Drafts" icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeauJR7lywjkxls00Hh9YDByO348YZcbfHEw&usqp=CAU" />
            </Drawer>
            <Drawer>
                <DrawerItem label="All mail" icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd5niwz9UyKS7Ru4AEINV1YytvOWMtr1pBGQ&usqp=CAU" />
                <DrawerItem label="Trash" icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeauJR7lywjkxls00Hh9YDByO348YZcbfHEw&usqp=CAU" />
                <DrawerItem label="Spam" icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd5niwz9UyKS7Ru4AEINV1YytvOWMtr1pBGQ&usqp=CAU" />
                <DrawerItem label="Outbox" icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeauJR7lywjkxls00Hh9YDByO348YZcbfHEw&usqp=CAU" />
            </Drawer>
        </div>
    )
}
