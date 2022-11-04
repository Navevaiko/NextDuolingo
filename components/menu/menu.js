import Image from "next/image";
import { useState } from "react";
import styles from './menu.module.css';

export default function Menu() {
  const menuItems = [
    { 'id': 1,'image': 'learn.svg', 'title': 'Aprender' },
    { 'id': 2,'image': 'world.svg', 'title': 'Escolas' },
    { 'id': 3,'image': 'shop.svg', 'title': 'Loja' },
    { 'id': 4,'image': 'revision.svg', 'title': 'Revisão' },
  ];
  const [currentActiveImageID, setCurrentActiveImageID] = useState(1);
  
  return(
    <ul className={styles.menuList}>
      {menuItems.map(({ id, image, title }) => (
        <li 
          key={id}
          className={id === currentActiveImageID? styles.selectedMenuItem: styles.menuItem}
          onClick={() => setCurrentActiveImageID(id)}> 
          <Image
            src={`/images/${image}`}
            alt={title}
            width='40'
            height='40'
          />

          <h3>{title}</h3>
        </li>
      ))}
    </ul>
  );
}