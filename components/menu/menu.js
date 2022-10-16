import Image from "next/image";
import { useState } from "react";
import styles from './menu.module.css';

export default function Menu() {
  const menuItems = [
    { 'id': 1,'activeImage': 'active_learn.svg', 'inactiveImage': 'inactive_learn.svg', 'alt':'Learn' },
    { 'id': 2,'activeImage': 'world.svg', 'inactiveImage': 'world.svg', 'alt':'World' },
    { 'id': 3,'activeImage': 'active_shop.svg', 'inactiveImage': 'inactive_shop.svg', 'alt':'Shop' },
    { 'id': 4,'activeImage': 'active_words.svg', 'inactiveImage': 'inactive_words.svg', 'alt':'Words' },
  ];
  const [currentActiveImageID, setCurrentActiveImageID] = useState(1);
  
  return(
    <ul className={styles.menuList}>
      {menuItems.map(({ id, activeImage, inactiveImage, alt }) => (
        <li key={id} onClick={() => setCurrentActiveImageID(id)}> 
          <Image
            src={`/images/${id == currentActiveImageID? activeImage : inactiveImage}`}
            alt={alt}
            width='40'
            height='40'
          />
        </li>
      ))}
    </ul>
  );
}